const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const urlParams = new URLSearchParams(window.location.search);
// Se vier ?time=X na URL, usa o tempo do Alfa; se não vier, roda livre sem cronômetro interno
let timeLeft = parseInt(urlParams.get('time')) || 0;
let score = 0;
let isGameOver = false;
let balloons = [];
let particles = [];
let audioCtx = null;

const COLORS = ['#EF4444', '#F59E0B', '#10B981', '#EC4899', '#8B5CF6', '#F97316', '#06B6D4'];

function resizeCanvas() {
    canvas.width = window.innerWidth || document.documentElement.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function playPopSound() {
    try {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(540, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {}
}

// Spawna balões: se startOnScreen for true, distribui pela altura visível da tela imediatamente
function spawnBalloon(startOnScreen = false) {
    const r = Math.max(34, Math.min(54, Math.floor(canvas.width * 0.06)));
    const x = Math.random() * (canvas.width - r * 2.5) + r * 1.25;
    const y = startOnScreen ? (Math.random() * (canvas.height * 0.75) + 60) : (canvas.height + r + 20);
    const speed = 1.8 + Math.random() * 2.2;
    const wobbleSpeed = 0.02 + Math.random() * 0.03;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    balloons.push({ x, y, r, speed, wobble: Math.random() * Math.PI * 2, wobbleSpeed, color });
}

function createPopParticles(x, y, color) {
    for (let i = 0; i < 14; i++) {
        const angle = (Math.PI * 2 * i) / 14;
        const spd = 2.5 + Math.random() * 4.5;
        particles.push({
            x, y,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd,
            r: 4 + Math.random() * 4,
            alpha: 1,
            color
        });
    }
}

function handlePopAt(px, py) {
    if (isGameOver) return;
    for (let i = balloons.length - 1; i >= 0; i--) {
        const b = balloons[i];
        const dist = Math.hypot(px - b.x, py - b.y);
        if (dist <= b.r * 1.25) {
            playPopSound();
            createPopParticles(b.x, b.y, b.color);
            balloons.splice(i, 1);
            score++;
            const scEl = document.getElementById('score-val');
            if (scEl) scEl.innerText = score;
            spawnBalloon(false); // Repõe imediatamente outro balão
            break;
        }
    }
}

// Suporte a ponteiro e toque sem delay
canvas.addEventListener('pointerdown', (e) => {
    handlePopAt(e.clientX, e.clientY);
});

function updateAndDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!isGameOver && Math.random() < 0.05 && balloons.length < 8) {
        spawnBalloon(false);
    }

    for (let i = balloons.length - 1; i >= 0; i--) {
        const b = balloons[i];
        b.y -= b.speed;
        b.wobble += b.wobbleSpeed;
        const drawX = b.x + Math.sin(b.wobble) * 12;

        // Cordão
        ctx.beginPath();
        ctx.moveTo(drawX, b.y + b.r);
        ctx.lineTo(drawX, b.y + b.r + 26);
        ctx.strokeStyle = 'rgba(255,255,255,0.7)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Balão
        ctx.beginPath();
        ctx.ellipse(drawX, b.y, b.r * 0.86, b.r, 0, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();

        // Brilho
        ctx.beginPath();
        ctx.ellipse(drawX - b.r * 0.28, b.y - b.r * 0.28, b.r * 0.15, b.r * 0.26, -0.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.fill();

        if (b.y < -b.r - 30) {
            balloons.splice(i, 1);
        }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.045;
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

function exitArcadeGame() {
    try {
        window.parent.postMessage({ type: 'ARCADE_EXIT', score }, '*');
    } catch (e) {}
}

// Escuta ordem de encerramento suave vinda do AlfaMTS
window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'ARCADE_TIME_UP') {
        isGameOver = true;
        document.getElementById('final-score').innerText = score;
        document.getElementById('end-overlay').style.display = 'flex';
        setTimeout(() => exitArcadeGame(), 1600);
    }
});

// Inicialização imediata: 6 balões já na tela
for (let i = 0; i < 6; i++) spawnBalloon(true);
requestAnimationFrame(updateAndDraw);

// Se o Alfa mandou um tempo na URL, atualiza o HUD in-game (ou oculta se for 0)
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
            setTimeout(() => exitArcadeGame(), 1800);
        }
    }, 1000);
} else if (timePill) {
    timePill.style.display = 'none'; // Sem cronômetro duplicado
}