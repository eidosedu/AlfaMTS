/* ============================================================================
   GUARDIÃO DA ORB - TOWER DEFENSE CIRCULAR 360°
   Fórmulas:
   - Spawn angular: θ ∈ [0, 2π]
   - Zigue-zague: r_desvio = sin(t * freq) * amplitude
   - Velocidade Progressiva: V = V_base + (score * 0.08)
   ============================================================================ */
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const urlParams = new URLSearchParams(window.location.search);
let timeLeft = parseInt(urlParams.get('time')) || 0;

let score = 0;
let isGameOver = false;
let audioCtx = null;

let cx = 0;
let cy = 0;
let shieldAngle = 0; // Rotação do escudo guiada pelo dedo
let shieldRadius = 65;

const SHIELD_SEGMENTS = [
    { color: '#EF4444', id: 'RED' },
    { color: '#3B82F6', id: 'BLUE' },
    { color: '#FACC15', id: 'YELLOW' }
];

let particles = [];
let effects = [];
let timeCounter = 0;

let lastSpawnTime = 0;
let baseSpawnInterval = 1200;

function resizeCanvas() {
    canvas.width = window.innerWidth || document.documentElement.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight;
    cx = canvas.width / 2;
    cy = canvas.height / 2;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

/* ÁUDIO PROCEDURAL WEB AUDIO API */
function playSfx(type) {
    try {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const now = audioCtx.currentTime;

        if (type === 'absorb') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, now);
            osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'damage') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.linearRampToValueAtTime(80, now + 0.2);
            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.2);
        }
    } catch (e) {}
}

/* SISTEMA DE PARTÍCULAS E INIMIGOS */
function spawnParticle() {
    const maxDist = Math.max(canvas.width, canvas.height) / 2 + 50;
    const angle = Math.random() * Math.PI * 2;
    const segment = SHIELD_SEGMENTS[Math.floor(Math.random() * SHIELD_SEGMENTS.length)];
    
    // Velocidade procedural progressiva baseada no score
    const speed = 2.0 + (score * 0.08); 
    
    // A partir de 10 pontos, 30% das partículas ganham comportamento zigue-zague (senoide)
    const isZigZag = (score >= 10 && Math.random() < 0.3);

    particles.push({
        dist: maxDist,
        angle: angle,
        baseAngle: angle,
        color: segment.color,
        id: segment.id,
        speed: speed,
        isZigZag: isZigZag,
        timeAlive: 0
    });
}

function spawnExplosion(x, y, color) {
    for (let i = 0; i < 12; i++) {
        const ang = (Math.PI * 2 * i) / 12;
        const spd = 2 + Math.random() * 4;
        effects.push({
            x, y,
            vx: Math.cos(ang) * spd,
            vy: Math.sin(ang) * spd,
            r: 3 + Math.random() * 3,
            alpha: 1,
            color
        });
    }
}

/* INTERAÇÃO POR TOQUE (CÁLCULO DE ARCO TANGENTE 2) */
function updateShieldAngle(event) {
    if (isGameOver) return;
    const rect = canvas.getBoundingClientRect();
    const px = (event.clientX || (event.touches && event.touches[0].clientX)) - rect.left;
    const py = (event.clientY || (event.touches && event.touches[0].clientY)) - rect.top;
    
    // Calcula o ângulo do dedo em relação ao centro (cx, cy)
    shieldAngle = Math.atan2(py - cy, px - cx);
    document.getElementById('controls-hint').style.opacity = '0.1';
}

canvas.addEventListener('pointerdown', updateShieldAngle);
canvas.addEventListener('pointermove', (e) => {
    // Apenas se houver pressão na tela (no mouse) ou arrastando (no touch)
    if (e.buttons > 0 || e.pointerType === 'touch') {
        updateShieldAngle(e);
    }
});

/* LOOP DE DESENHO E FÍSICA PROCEDURAL */
function updateAndDraw(timestamp) {
    if (isGameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    timeCounter++;

    // 1. GERENCIADOR DE SPAWN
    const currentSpawnInterval = Math.max(350, baseSpawnInterval - (score * 15));
    if (timestamp - lastSpawnTime > currentSpawnInterval) {
        spawnParticle();
        lastSpawnTime = timestamp;
    }

    // 2. DESENHO DO NÚCLEO (ORB CENTRAL)
    ctx.save();
    ctx.translate(cx, cy);

    // Efeito de pulso no núcleo
    const pulse = 1 + Math.sin(timeCounter * 0.05) * 0.08;
    
    // Aura do Núcleo
    const gradient = ctx.createRadialGradient(0, 0, 5, 0, 0, 45);
    gradient.addColorStop(0, 'rgba(255,255,255,0.9)');
    gradient.addColorStop(0.3, 'rgba(56,189,248,0.5)');
    gradient.addColorStop(1, 'rgba(56,189,248,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, 45 * pulse, 0, Math.PI * 2);
    ctx.fill();

    // Núcleo Sólido
    ctx.fillStyle = '#E0F2FE';
    ctx.beginPath();
    ctx.arc(0, 0, 18 * pulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#0284C7';
    ctx.stroke();

    // 3. DESENHO DO ESCUDO DE 3 CORES
    ctx.rotate(shieldAngle); // Gira o contexto de acordo com o dedo do jogador
    
    const segmentAngle = (Math.PI * 2) / SHIELD_SEGMENTS.length;
    
    SHIELD_SEGMENTS.forEach((seg, idx) => {
        ctx.beginPath();
        // Aumenta a espessura para garantir boa visualização
        ctx.arc(0, 0, shieldRadius, idx * segmentAngle, (idx + 1) * segmentAngle);
        ctx.lineWidth = 14;
        ctx.strokeStyle = seg.color;
        ctx.stroke();

        // Linha de brilho interior
        ctx.beginPath();
        ctx.arc(0, 0, shieldRadius, idx * segmentAngle + 0.05, (idx + 1) * segmentAngle - 0.05);
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        ctx.stroke();
    });
    ctx.restore(); // Restaura o contexto para 0 de rotação

    // 4. ATUALIZAÇÃO E DESENHO DOS INIMIGOS (PARTÍCULAS)
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.dist -= p.speed;
        p.timeAlive++;

        // Comportamento ZigZag procedural
        if (p.isZigZag) {
            const amplitude = 0.25; // Radianos
            p.angle = p.baseAngle + Math.sin(p.timeAlive * 0.1) * amplitude;
        }

        // Calcula X e Y absolutos
        const px = cx + Math.cos(p.angle) * p.dist;
        const py = cy + Math.sin(p.angle) * p.dist;

        // Rastro (Cometa)
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(cx + Math.cos(p.angle) * (p.dist + 25), cy + Math.sin(p.angle) * (p.dist + 25));
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 4;
        ctx.globalAlpha = 0.4;
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Partícula principal
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(px - 2, py - 2, 3, 0, Math.PI * 2);
        ctx.fill();

        // COLISÃO COM O ESCUDO
        if (p.dist <= shieldRadius + 14) {
            // Normalizar o ângulo de impacto em relação à rotação atual do escudo
            let impactAngle = (p.angle - shieldAngle) % (Math.PI * 2);
            if (impactAngle < 0) impactAngle += Math.PI * 2; // Garante valor positivo entre [0, 2π]

            // Identifica qual segmento do escudo foi atingido
            const hitSegmentIndex = Math.floor(impactAngle / segmentAngle);
            const hitSegment = SHIELD_SEGMENTS[hitSegmentIndex];

            if (hitSegment.id === p.id) {
                // SUCESSO: Cor bateu!
                playSfx('absorb');
                spawnExplosion(px, py, p.color);
                score++;
                document.getElementById('score-val').innerText = score;
            } else {
                // DANO: Cor errada
                playSfx('damage');
                spawnExplosion(px, py, '#EF4444');
                score = Math.max(0, score - 2); // Punição leve
                document.getElementById('score-val').innerText = score;
                
                // Shake na tela para feedback de erro
                canvas.style.transform = `translate(${(Math.random()-0.5)*10}px, ${(Math.random()-0.5)*10}px)`;
                setTimeout(() => canvas.style.transform = 'translate(0,0)', 100);
            }
            particles.splice(i, 1);
        }
    }

    // 5. ATUALIZAÇÃO E DESENHO DOS EFEITOS (EXPLOSÕES)
    for (let i = effects.length - 1; i >= 0; i--) {
        const ef = effects[i];
        ef.x += ef.vx;
        ef.y += ef.vy;
        ef.alpha -= 0.05;
        if (ef.alpha <= 0) {
            effects.splice(i, 1);
            continue;
        }
        ctx.save();
        ctx.globalAlpha = ef.alpha;
        ctx.beginPath();
        ctx.arc(ef.x, ef.y, ef.r, 0, Math.PI * 2);
        ctx.fillStyle = ef.color;
        ctx.fill();
        ctx.restore();
    }

    if (!isGameOver) {
        requestAnimationFrame(updateAndDraw);
    }
}

/* GERENCIAMENTO DE CICLO DE VIDA DO JOGO */
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
        setTimeout(() => exitArcadeGame(), 2000);
    }
});

requestAnimationFrame(updateAndDraw);

// Controle do Timer Interno (se não vier parametrizado por URL)
const timePill = document.querySelector('.hud-pill.timer');
if (timeLeft > 0) {
    document.getElementById('time-val').innerText = `${timeLeft}s`;
    const timerInt = setInterval(() => {
        if (isGameOver) return;
        timeLeft--;
        const tv = document.getElementById('time-val');
        if (tv) tv.innerText = `${Math.max(0, timeLeft)}s`;
        if (timeLeft <= 0) {
            isGameOver = true;
            clearInterval(timerInt);
            document.getElementById('final-score').innerText = score;
            document.getElementById('end-overlay').style.display = 'flex';
            setTimeout(() => exitArcadeGame(), 2000);
        }
    }, 1000);
} else if (timePill) {
    timePill.style.display = 'none'; 
}