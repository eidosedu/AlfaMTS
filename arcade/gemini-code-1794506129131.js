/* ============================================================================
   COSMO JUMP - MOTOR VERTICAL PROCEDURAL EM CANVAS 2D
   Fórmulas:
   - Geração dinâmica de Y infinito
   - Densidade baseada na altura
   ============================================================================ */
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const urlParams = new URLSearchParams(window.location.search);
let timeLeft = parseInt(urlParams.get('time')) || 0;

let isGameOver = false;
let score = 0;
let highestYReached = 0;
let cameraY = 0;
let time = 0;

let audioCtx = null;

// Parâmetros Físicos
const GRAVITY = 0.38;
const JUMP_FORCE = -11.5;
const MOVE_SPEED = 6.5;

let player = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    width: 36,
    height: 36,
    direction: 0 // -1 esquerda, 1 direita, 0 parado
};

let platforms = [];
let stars = [];
let lastPlatformY = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth || document.documentElement.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

/* ÁUDIO PROCEDURAL */
function playSfx(type) {
    try {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const now = audioCtx.currentTime;

        if (type === 'jump') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(300, now);
            osc.frequency.exponentialRampToValueAtTime(700, now + 0.15);
            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.15);
        } else if (type === 'break') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(120, now);
            osc.frequency.linearRampToValueAtTime(40, now + 0.15);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.15);
        } else if (type === 'fall') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.exponentialRampToValueAtTime(50, now + 0.5);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.5);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.5);
        }
    } catch (e) {}
}

/* GERADOR DO AMBIENTE ESTELAR */
function initStars() {
    stars = [];
    for (let i = 0; i < 60; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            depth: Math.random() * 0.5 + 0.1, // Efeito Parallax
            alpha: Math.random() * 0.5 + 0.2
        });
    }
}

/* MOTOR PROCEDURAL DE PLATAFORMAS */
function generatePlatform(yPos) {
    const pWidth = Math.max(65, canvas.width * 0.15);
    const pHeight = 14;
    const xPos = Math.random() * (canvas.width - pWidth);
    
    // Nível matemático reverso (Y diminui conforme sobe)
    const level = Math.floor(Math.abs(yPos) / 1500); 
    
    let type = 0; // 0 = Fixa, 1 = Móvel, 2 = Quebrável
    const rand = Math.random();
    
    if (level === 0) {
        type = 0; // Seguras no início
    } else if (level === 1) {
        type = rand < 0.25 ? 1 : 0;
    } else {
        if (rand < 0.3) type = 1;
        else if (rand < 0.55) type = 2;
        else type = 0;
    }

    platforms.push({
        x: xPos,
        y: yPos,
        w: pWidth,
        h: pHeight,
        type: type,
        phase: Math.random() * Math.PI * 2, // Para as móveis
        broken: false
    });
}

function replenishPlatforms() {
    // Garante que existam plataformas geradas acima do campo visual atual (Y é negativo subindo)
    const minY = cameraY - canvas.height - 200;
    while (lastPlatformY > minY) {
        const gap = 80 + Math.random() * 70; 
        lastPlatformY -= gap;
        generatePlatform(lastPlatformY);
    }
}

function resetGame() {
    cameraY = 0;
    highestYReached = 0;
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - 150;
    player.vy = JUMP_FORCE;
    player.vx = 0;
    
    platforms = [];
    lastPlatformY = canvas.height;
    
    // Base sólida inicial
    platforms.push({
        x: 0,
        y: canvas.height - 20,
        w: canvas.width,
        h: 20,
        type: 0,
        broken: false
    });
    
    replenishPlatforms();
}

/* CONTROLES TOUCH DIVIDINDO A TELA */
canvas.addEventListener('pointerdown', (e) => {
    if (isGameOver) return;
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    player.direction = (px < canvas.width / 2) ? -1 : 1;
    document.getElementById('controls-hint').style.opacity = '0.2';
});

canvas.addEventListener('pointerup', () => {
    player.direction = 0;
});
canvas.addEventListener('pointercancel', () => {
    player.direction = 0;
});

/* LOOP DE DESENHO E FÍSICA */
function updateAndDraw() {
    if (isGameOver) return;
    time++;

    // 1. ATUALIZA FÍSICA DO JOGADOR
    player.vx = player.direction * MOVE_SPEED;
    player.x += player.vx;
    player.y += player.vy;
    player.vy += GRAVITY;

    // Wrap horizontal (tela circular)
    if (player.x > canvas.width) player.x = -player.width;
    if (player.x + player.width < 0) player.x = canvas.width;

    // 2. ATUALIZA CÂMERA (Segue o jogador se subir acima de 45% da tela)
    const cameraTarget = player.y - canvas.height * 0.45;
    if (cameraTarget < cameraY) {
        cameraY = cameraTarget;
    }

    // Calcula Pontuação baseada na altura
    if (player.y < highestYReached) {
        highestYReached = player.y;
        const newScore = Math.floor(Math.abs(highestYReached) / 50);
        if (newScore > score) {
            score = newScore;
            document.getElementById('score-val').innerText = score;
        }
    }

    replenishPlatforms();

    // 3. DESENHO DO FUNDO ESPACIAL
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#0F172A');
    grad.addColorStop(1, '#1E1B4B');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Parallax das estrelas
    ctx.fillStyle = '#FFFFFF';
    stars.forEach(s => {
        ctx.globalAlpha = s.alpha;
        let sy = (s.y - cameraY * s.depth) % canvas.height;
        if (sy < 0) sy += canvas.height;
        ctx.beginPath();
        ctx.arc(s.x, sy, s.size, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.globalAlpha = 1;

    // 4. ATUALIZAÇÃO E DESENHO DAS PLATAFORMAS
    for (let i = platforms.length - 1; i >= 0; i--) {
        const p = platforms[i];
        
        // Remove plataformas que já ficaram muito para baixo
        if (p.y > cameraY + canvas.height + 100) {
            platforms.splice(i, 1);
            continue;
        }

        if (p.broken) continue; // Pula as que já quebraram

        // Movimentação horizontal (Plataforma tipo 1)
        if (p.type === 1) {
            p.x += Math.sin(time * 0.04 + p.phase) * 2.5;
            if (p.x < 0) p.x = 0;
            if (p.x + p.w > canvas.width) p.x = canvas.width - p.w;
        }

        // Colisão 1-Way (Apenas caindo)
        if (player.vy > 0) {
            // Verifica overlap na Y, depois na X
            if (player.y + player.height >= p.y && 
                player.y + player.height <= p.y + p.h + player.vy && 
                player.x + player.width > p.x && 
                player.x < p.x + p.w) {
                
                if (p.type === 2) {
                    playSfx('break');
                    p.broken = true; // Plataforma frágil desaba
                } else {
                    playSfx('jump');
                    player.vy = JUMP_FORCE; // Pulo normal
                }
            }
        }

        // Desenha a plataforma (Ajustada pela Câmera)
        const drawY = p.y - cameraY;
        
        ctx.beginPath();
        ctx.roundRect(p.x, drawY, p.w, p.h, 6);
        
        if (p.type === 0) { // Fixa (Verde)
            ctx.fillStyle = '#10B981';
            ctx.fill();
            ctx.fillStyle = '#34D399';
            ctx.fillRect(p.x + 4, drawY, p.w - 8, p.h * 0.4);
        } else if (p.type === 1) { // Móvel (Laranja)
            ctx.fillStyle = '#F59E0B';
            ctx.fill();
            ctx.fillStyle = '#FBBF24';
            ctx.fillRect(p.x + 4, drawY, p.w - 8, p.h * 0.4);
        } else if (p.type === 2) { // Frágil (Cinza craquelado)
            ctx.fillStyle = '#64748B';
            ctx.fill();
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(p.x + p.w*0.3, drawY);
            ctx.lineTo(p.x + p.w*0.4, drawY + p.h);
            ctx.moveTo(p.x + p.w*0.7, drawY);
            ctx.lineTo(p.x + p.w*0.6, drawY + p.h);
            ctx.stroke();
        }
    }

    // 5. DESENHA O JOGADOR (ASTRONAUTA VETORIAL)
    const py = player.y - cameraY;
    
    // Verifica Queda no Abismo
    if (py > canvas.height + 50) {
        playSfx('fall');
        score = Math.max(0, score - 15); // Punição leve
        document.getElementById('score-val').innerText = score;
        resetGame(); 
        return;
    }

    // Renderiza Astronauta
    ctx.save();
    ctx.translate(player.x + player.width / 2, py + player.height / 2);
    
    // Inclinação sutil ao mover
    if (player.vx !== 0) {
        ctx.rotate((player.vx > 0 ? 1 : -1) * 0.15);
    }

    // Corpo do Astronauta
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.roundRect(-18, -18, 36, 36, 12);
    ctx.fill();
    ctx.strokeStyle = '#94A3B8';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Visor do Capacete
    ctx.fillStyle = '#38BDF8';
    ctx.beginPath();
    ctx.roundRect(-10, -10, 26, 16, 6);
    ctx.fill();
    
    // Brilho do vidro
    ctx.fillStyle = '#BAE6FD';
    ctx.beginPath();
    ctx.ellipse(-2, -5, 6, 3, -0.2, 0, Math.PI*2);
    ctx.fill();

    // Propulsor de mochila se pulando
    if (player.vy < 0) {
        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.moveTo(-10, 18);
        ctx.lineTo(-4, 28 + Math.random()*6);
        ctx.lineTo(2, 18);
        ctx.fill();
    }

    ctx.restore();

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

// Inicialização
initStars();
resetGame();
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