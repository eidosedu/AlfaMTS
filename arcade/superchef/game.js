/* ============================================================================
   SUPER CHEF: ESTEIRA MALUCA - MOTOR PROCEDURAL EM CANVAS 2D
   Fórmulas:
   - Nível = floor(Pontos / 5) + 1
   - Tamanho da Receita = min(6, 2 + floor(Nivel / 2))
   - Velocidade = V_base * (1 + 0.12 * Nivel)
   ============================================================================ */
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

let score = 0;
let currentLevel = 1;
let isGameOver = false;
let audioCtx = null;

// Catálogo de Ingredientes Vetoriais (0 KB de imagens externas)
const INGREDIENTS = {
    BUN_BOT:   { id: 'BUN_BOT',   label: 'Pão Base',   color: '#D97706', sub: '#FDE68A' },
    MEAT:      { id: 'MEAT',      label: 'Carne',      color: '#78350F', sub: '#451A03' },
    CHEESE:    { id: 'CHEESE',    label: 'Queijo',     color: '#FACC15', sub: '#EAB308' },
    LETTUCE:   { id: 'LETTUCE',   label: 'Alface',     color: '#22C55E', sub: '#15803D' },
    TOMATO:    { id: 'TOMATO',    label: 'Tomate',     color: '#EF4444', sub: '#B91C1C' },
    EGG:       { id: 'EGG',       label: 'Ovo',        color: '#FFFFFF', sub: '#F59E0B' },
    ONION:     { id: 'ONION',     label: 'Cebola',     color: '#A855F7', sub: '#F3E8FF' },
    BUN_TOP:   { id: 'BUN_TOP',   label: 'Pão Topo',   color: '#D97706', sub: '#FEF3C7' },
    BUN_PLAIN: { id: 'BUN_PLAIN', label: 'Pão Liso',   color: '#B45309', sub: '#FDE68A' } // Distrator parecido em níveis altos
};

const FILLINGS_POOL = ['MEAT', 'CHEESE', 'LETTUCE', 'TOMATO', 'EGG', 'ONION'];

let currentRecipe = [];      // Vetor de IDs da receita atual (de baixo para cima)
let plateStack = [];         // Ingredientes já empilhados no prato
let beltItems = [];          // Ingredientes deslizando na esteira
let particles = [];          // Confetes e partículas de feedback
let beltOffset = 0;          // Deslocamento visual dos rolos da esteira
let itemsSinceLastTarget = 0;// Trava anti-starvation (garante que o alvo apareça a cada <= 3 itens)
let celebrationFlash = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth || document.documentElement.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

/* SINTETIZADOR DE ÁUDIO WEB AUDIO API */
function playSfx(type) {
    try {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const now = audioCtx.currentTime;

        if (type === 'pick') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(420, now);
            osc.frequency.exponentialRampToValueAtTime(680, now + 0.09);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.09);
        } else if (type === 'order_done') {
            [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.07);
                gain.gain.setValueAtTime(0.28, now + idx * 0.07);
                gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.07 + 0.22);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(now + idx * 0.07);
                osc.stop(now + idx * 0.07 + 0.22);
            });
        } else if (type === 'wrong') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(170, now);
            osc.frequency.linearRampToValueAtTime(130, now + 0.14);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.14);
        }
    } catch (e) {}
}

/* FÓRMULAS MATEMÁTICAS PROCEDURAIS */
function updateProceduralLevel() {
    currentLevel = Math.floor(score / 5) + 1;
    const lvlEl = document.getElementById('level-val');
    if (lvlEl) lvlEl.innerText = currentLevel;
}

function getRecipeSize() {
    return Math.min(6, 2 + Math.floor(currentLevel / 2));
}

function getBeltSpeed() {
    const vBase = Math.max(2.2, canvas.width * 0.0028);
    return vBase * (1 + 0.12 * currentLevel);
}

function generateProceduralOrder() {
    updateProceduralLevel();
    const size = getRecipeSize();
    const recipe = [];

    if (size === 2) {
        recipe.push('BUN_BOT');
        const mid = FILLINGS_POOL[Math.floor(Math.random() * 3)]; // Carne, Queijo ou Alface no início
        recipe.push(mid);
    } else {
        recipe.push('BUN_BOT');
        const poolCount = Math.min(FILLINGS_POOL.length, 2 + currentLevel);
        for (let i = 0; i < size - 2; i++) {
            const pick = FILLINGS_POOL[Math.floor(Math.random() * poolCount)];
            recipe.push(pick);
        }
        recipe.push('BUN_TOP');
    }

    currentRecipe = recipe;
    plateStack = [];
    itemsSinceLastTarget = 2; // Força o primeiro item útil rapidamente
}

function getNeededIngredientId() {
    return currentRecipe[plateStack.length] || 'BUN_TOP';
}

function spawnBeltItem(initialX = null) {
    const neededId = getNeededIngredientId();
    let chosenId = neededId;

    itemsSinceLastTarget++;
    if (itemsSinceLastTarget >= 3 || Math.random() < 0.45) {
        chosenId = neededId;
        itemsSinceLastTarget = 0;
    } else {
        // Sorteia distrator (inclui BUN_PLAIN como distrator parecido a partir do nível 3)
        let pool = ['BUN_BOT', 'MEAT', 'CHEESE', 'LETTUCE', 'TOMATO', 'BUN_TOP'];
        if (currentLevel >= 2) pool.push('EGG', 'ONION');
        if (currentLevel >= 3) pool.push('BUN_PLAIN');
        const distractors = pool.filter(id => id !== neededId);
        chosenId = distractors[Math.floor(Math.random() * distractors.length)];
    }

    const itemRadius = Math.max(40, Math.min(56, canvas.height * 0.085));
    const startX = (initialX !== null) ? initialX : -itemRadius * 1.5;

    beltItems.push({
        id: chosenId,
        x: startX,
        r: itemRadius,
        shakeOffset: 0,
        shakeTimer: 0
    });
}

/* DESENHO PROCEDURAL DE CADA INGREDIENTE NO CANVAS */
function drawIngredientGraphic(ctx, id, cx, cy, width, height) {
    ctx.save();
    ctx.translate(cx, cy);

    if (id === 'BUN_BOT') {
        ctx.fillStyle = '#D97706';
        ctx.beginPath();
        ctx.roundRect(-width / 2, -height / 2, width, height, [6, 6, 18, 18]);
        ctx.fill();
        ctx.fillStyle = '#FDE68A';
        ctx.fillRect(-width / 2 + 4, -height / 2, width - 8, height * 0.28);
    } else if (id === 'BUN_TOP' || id === 'BUN_PLAIN') {
        ctx.fillStyle = id === 'BUN_TOP' ? '#D97706' : '#B45309';
        ctx.beginPath();
        ctx.roundRect(-width / 2, -height / 2, width, height * 1.15, [28, 28, 8, 8]);
        ctx.fill();
        // Gergelim apenas no BUN_TOP
        if (id === 'BUN_TOP') {
            ctx.fillStyle = '#FEF3C7';
            [-0.25, 0, 0.25, -0.12, 0.14].forEach((offset, idx) => {
                ctx.beginPath();
                ctx.ellipse(width * offset, -height * (idx % 2 === 0 ? 0.12 : 0.28), 4, 2.2, 0.2, 0, Math.PI * 2);
                ctx.fill();
            });
        }
    } else if (id === 'MEAT') {
        ctx.fillStyle = '#78350F';
        ctx.beginPath();
        ctx.roundRect(-width / 2, -height / 2, width, height * 0.85, 12);
        ctx.fill();
        ctx.strokeStyle = '#451A03';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-width * 0.25, -height * 0.2);
        ctx.lineTo(-width * 0.15, height * 0.2);
        ctx.moveTo(width * 0.1, -height * 0.2);
        ctx.lineTo(width * 0.2, height * 0.2);
        ctx.stroke();
    } else if (id === 'CHEESE') {
        ctx.fillStyle = '#FACC15';
        ctx.beginPath();
        ctx.roundRect(-width * 0.52, -height * 0.35, width * 1.04, height * 0.65, 6);
        ctx.fill();
        // Ponta derretida
        ctx.beginPath();
        ctx.moveTo(-width * 0.2, height * 0.25);
        ctx.lineTo(0, height * 0.6);
        ctx.lineTo(width * 0.2, height * 0.25);
        ctx.fill();
    } else if (id === 'LETTUCE') {
        ctx.fillStyle = '#22C55E';
        ctx.beginPath();
        const waves = 5;
        const step = width / waves;
        ctx.moveTo(-width / 2, 0);
        for (let i = 0; i <= waves; i++) {
            const wx = -width / 2 + i * step;
            const wy = (i % 2 === 0) ? -height * 0.38 : height * 0.38;
            ctx.lineTo(wx, wy);
        }
        ctx.closePath();
        ctx.fill();
    } else if (id === 'TOMATO') {
        ctx.fillStyle = '#EF4444';
        ctx.beginPath();
        ctx.roundRect(-width * 0.44, -height * 0.38, width * 0.88, height * 0.76, 10);
        ctx.fill();
        ctx.fillStyle = '#FCA5A5';
        ctx.beginPath();
        ctx.arc(-width * 0.16, 0, 4, 0, Math.PI * 2);
        ctx.arc(width * 0.16, 0, 4, 0, Math.PI * 2);
        ctx.fill();
    } else if (id === 'EGG') {
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.46, height * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.arc(0, -2, height * 0.28, 0, Math.PI * 2);
        ctx.fill();
    } else if (id === 'ONION') {
        ctx.strokeStyle = '#9333EA';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.ellipse(-width * 0.12, 0, width * 0.26, height * 0.34, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(width * 0.14, 0, width * 0.26, height * 0.34, 0, 0, Math.PI * 2);
        ctx.stroke();
    }

    ctx.restore();
}

function createBurstParticles(x, y, color) {
    for (let i = 0; i < 16; i++) {
        const ang = (Math.PI * 2 * i) / 16;
        const spd = 2.5 + Math.random() * 5;
        particles.push({
            x, y,
            vx: Math.cos(ang) * spd,
            vy: Math.sin(ang) * spd - 1.5,
            r: 4 + Math.random() * 4,
            alpha: 1,
            color
        });
    }
}

/* INTERAÇÃO POR TOQUE NA ESTEIRA */
function getBeltY() {
    return canvas.height * 0.42;
}

canvas.addEventListener('pointerdown', (e) => {
    if (isGameOver) return;
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const beltY = getBeltY();
    const neededId = getNeededIngredientId();

    for (let i = beltItems.length - 1; i >= 0; i--) {
        const item = beltItems[i];
        const dist = Math.hypot(px - item.x, py - beltY);
        if (dist <= item.r * 1.32) {
            if (item.id === neededId) {
                playSfx('pick');
                createBurstParticles(item.x, beltY, '#10B981');
                beltItems.splice(i, 1);
                plateStack.push(neededId);

                // Verifica se completou a receita inteira
                if (plateStack.length >= currentRecipe.length) {
                    score++;
                    const scEl = document.getElementById('score-val');
                    if (scEl) scEl.innerText = score;
                    playSfx('order_done');
                    celebrationFlash = 1;
                    createBurstParticles(canvas.width * 0.58, canvas.height * 0.78, '#F59E0B');
                    setTimeout(() => {
                        generateProceduralOrder();
                    }, 380);
                }
            } else {
                // Distrator tocado: sem resetar o prato, apenas feedback elástico
                playSfx('wrong');
                item.shakeTimer = 12;
            }
            break;
        }
    }
});

/* RENDERIZAÇÃO PRINCIPAL DO JOGO */
function updateAndDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const w = canvas.width;
    const h = canvas.height;
    const beltY = getBeltY();
    const beltH = Math.max(88, h * 0.19);
    const speed = getBeltSpeed();

    // 1. FUNDO DO BALCÃO E AZULEJOS
    ctx.fillStyle = '#FEF3C7';
    ctx.fillRect(0, 0, w, beltY - beltH / 2);
    ctx.fillStyle = '#FDE68A';
    ctx.fillRect(0, beltY + beltH / 2, w, h - (beltY + beltH / 2));

    // Flash suave de pedido entregue
    if (celebrationFlash > 0) {
        ctx.fillStyle = `rgba(16, 185, 129, ${celebrationFlash * 0.22})`;
        ctx.fillRect(0, 0, w, h);
        celebrationFlash = Math.max(0, celebrationFlash - 0.05);
    }

    // 2. ESTEIRA ROLANTE HORIZONTAL
    ctx.fillStyle = '#334155';
    ctx.fillRect(0, beltY - beltH / 2, w, beltH);
    ctx.strokeStyle = '#1E293B';
    ctx.lineWidth = 4;
    ctx.strokeRect(0, beltY - beltH / 2, w, beltH);

    // Listras de movimento da esteira
    beltOffset = (beltOffset + speed) % 48;
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3;
    for (let x = -48 + beltOffset; x < w; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x, beltY - beltH / 2 + 6);
        ctx.lineTo(x, beltY + beltH / 2 - 6);
        ctx.stroke();
    }

    // 3. MIRA / ZONA DE DESTAQUE CENTRAL NA ESTEIRA
    const targetZoneX = w * 0.58;
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.55)';
    ctx.setLineDash([8, 6]);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(targetZoneX, beltY, beltH * 0.46, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 4. ATUALIZAÇÃO E DESENHO DOS INGREDIENTES NA ESTEIRA
    const minGap = Math.max(130, w * 0.18);
    if (!isGameOver) {
        const leftmostItem = beltItems.reduce((min, it) => (it.x < min ? it.x : min), 99999);
        if (beltItems.length === 0 || leftmostItem > minGap) {
            spawnBeltItem();
        }
    }

    const neededId = getNeededIngredientId();

    for (let i = beltItems.length - 1; i >= 0; i--) {
        const it = beltItems[i];
        if (!isGameOver) it.x += speed;

        if (it.shakeTimer > 0) {
            it.shakeTimer--;
            it.shakeOffset = (it.shakeTimer % 2 === 0 ? -6 : 6);
        } else {
            it.shakeOffset = 0;
        }

        const drawX = it.x + it.shakeOffset;

        // Bandeja circular sob o ingrediente
        ctx.beginPath();
        ctx.arc(drawX, beltY, it.r * 0.85, 0, Math.PI * 2);
        ctx.fillStyle = (it.id === neededId) ? '#FFFFFF' : '#E2E8F0';
        ctx.fill();
        ctx.lineWidth = (it.id === neededId) ? 3.5 : 2;
        ctx.strokeStyle = (it.id === neededId) ? '#10B981' : '#94A3B8';
        ctx.stroke();

        drawIngredientGraphic(ctx, it.id, drawX, beltY, it.r * 1.25, it.r * 0.55);

        if (it.x > w + it.r * 2) {
            beltItems.splice(i, 1);
        }
    }

    // 5. PAINEL ESQUERDO: COMANDA DO PEDIDO (DE BAIXO PARA CIMA)
    const cardX = 20;
    const cardY = beltY + beltH / 2 + 14;
    const cardW = Math.min(230, w * 0.34);
    const cardH = h - cardY - 14;

    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, 18);
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#CBD5E1';
    ctx.stroke();

    ctx.fillStyle = '#0F172A';
    ctx.font = '900 14px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PEDIDO ATUAL', cardX + cardW / 2, cardY + 24);

    const slotStep = Math.min(34, (cardH - 42) / Math.max(1, currentRecipe.length));
    for (let idx = 0; idx < currentRecipe.length; idx++) {
        const ingId = currentRecipe[idx];
        const ingMeta = INGREDIENTS[ingId] || { label: ingId };
        const rowY = (cardY + cardH - 18) - idx * slotStep;
        const isDone = idx < plateStack.length;
        const isCurrentTarget = (idx === plateStack.length);

        if (isCurrentTarget) {
            ctx.fillStyle = '#FEF3C7';
            ctx.beginPath();
            ctx.roundRect(cardX + 8, rowY - 14, cardW - 16, 26, 8);
            ctx.fill();
            ctx.strokeStyle = '#F59E0B';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        drawIngredientGraphic(ctx, ingId, cardX + 36, rowY - 1, 34, 14);

        ctx.textAlign = 'left';
        ctx.font = isCurrentTarget ? '900 13px system-ui, sans-serif' : '700 12px system-ui, sans-serif';
        ctx.fillStyle = isDone ? '#10B981' : (isCurrentTarget ? '#B45309' : '#64748B');
        ctx.fillText(`${idx + 1}. ${ingMeta.label}`, cardX + 62, rowY + 4);
    }

    // 6. DIREITA: PRATO DO CHEF E PILHA MONTADA
    const plateX = w * 0.64;
    const plateY = h - 38;
    const plateW = Math.min(260, w * 0.36);

    // Prato branco
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(plateX, plateY, plateW * 0.55, 22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#CBD5E1';
    ctx.stroke();

    // Ingredientes já empilhados no prato
    const stackStep = Math.min(26, (h - (beltY + beltH / 2) - 70) / Math.max(3, currentRecipe.length));
    plateStack.forEach((ingId, idx) => {
        const sy = plateY - 12 - idx * stackStep;
        drawIngredientGraphic(ctx, ingId, plateX, sy, plateW * 0.68, 28);
    });

    // Dica do próximo ingrediente esperado acima do prato
    if (neededId && plateStack.length < currentRecipe.length) {
        const neededMeta = INGREDIENTS[neededId] || { label: '' };
        ctx.fillStyle = '#0F172A';
        ctx.font = '900 15px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`Toque em: ${neededMeta.label}`, plateX, beltY + beltH / 2 + 26);
    }

    // 7. PARTÍCULAS
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.04;
        if (p.alpha <= 0) {
            particles.splice(i, 1);
            continue;
        }
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
    }

    if (!isGameOver) {
        requestAnimationFrame(updateAndDraw);
    }
}

/* COMUNICAÇÃO COM O ALFAMTS */
function exitArcadeGame() {
    try {
        window.parent.postMessage({ type: 'ARCADE_EXIT', score }, '*');
    } catch (e) {}
}

window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'ARCADE_TIME_UP') {
        isGameOver = true;
        document.getElementById('final-score').innerText = score;
        document.getElementById('end-overlay').style.display = 'flex';
        setTimeout(() => exitArcadeGame(), 1600);
    }
});

// Inicialização imediata com 4 itens já distribuídos na esteira
generateProceduralOrder();
for (let i = 0; i < 4; i++) {
    spawnBeltItem((canvas.width * 0.2) * (i + 1));
}
requestAnimationFrame(updateAndDraw);
