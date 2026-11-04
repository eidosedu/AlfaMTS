/* ============================================================================
   5.0 MAPA DE ÁUDIOS FONÊMICOS, BOCAS ARTICULATÓRIAS E ALFABETO FONOLÓGICO
   ============================================================================ */
const FONEMAS_AUDIO_MAP = {
    // Consoantes regulares (1 som)
    'D': 'c-d-1.ogg',
    'F': 'c-f-1.ogg',
    'J': 'c-j-1.ogg',
    'K': 'c-k-1.ogg',
    'M': 'c-m-1.ogg',
    'N': 'c-n-1.ogg',
    'P': 'c-p-1.ogg',
    'T': 'c-t-1.ogg',
    'V': 'c-v-1.ogg',
    'Z': 'c-z-1.ogg',

    // Consoantes com variações fonéticas
    'C': { '1': 'c-c-1.ogg', '2': 'c-c-2.ogg' },
    'G': { '1': 'c-g-1.ogg', '2': 'c-g-2.ogg' },
    'L': { '1': 'c-l-1.ogg', '2': 'c-l-2.ogg' },
    'R': { '1': 'c-r-1.ogg', '2': 'c-r-2.ogg', '3': 'c-r-3.ogg' },
    'S': { '1': 'c-s-1.ogg', '2': 'c-s-2.ogg' },
    'W': { '2': 'c-w-2.ogg' },
    'X': { '1': 'c-x-1.ogg', '2': 'c-x-2.ogg', '3': 'c-x-3.ogg', '4': 'c-x-4.ogg' },

    // Vogais (abertas, fechadas, nasais)
    'A': { '1': 'v-a-1.ogg', '3': 'v-a-3.ogg' },
    'E': { '1': 'v-e-1.ogg', '2': 'v-e-2.ogg', '3': 'v-e-3.ogg' },
    'I': { '1': 'v-i-1.ogg', '3': 'v-i-3.ogg' },
    'O': { '1': 'v-o-1.ogg', '2': 'v-o-2.ogg', '3': 'v-o-3.ogg' },
    'U': { '1': 'v-u-1.ogg', '3': 'v-u-3.ogg' }
};

// Sequência ordenada para a guia Alfabeto Fonológico (Vogais -> Contínuas -> Oclusivas, expondo variações lado a lado)
const PHONOLOGICAL_ALPHABET_MODULES = [
    // Vogais (1 = Aberto, 2 = Fechado, 3 = Nasal)
    { id: 'FA_A_1', letter: 'A', varIdx: '1', title: 'A (Aberto)', desc: 'Modelagem articulatória e sustentação da vogal A aberta.' },
    { id: 'FA_A_3', letter: 'A', varIdx: '3', title: 'A (Nasal)', desc: 'Modelagem articulatória e sustentação da vogal A nasal.' },
    { id: 'FA_E_1', letter: 'E', varIdx: '1', title: 'E (Aberto)', desc: 'Modelagem articulatória e sustentação da vogal E aberta.' },
    { id: 'FA_E_2', letter: 'E', varIdx: '2', title: 'E (Fechado)', desc: 'Modelagem articulatória e sustentação da vogal E fechada.' },
    { id: 'FA_E_3', letter: 'E', varIdx: '3', title: 'E (Nasal)', desc: 'Modelagem articulatória e sustentação da vogal E nasal.' },
    { id: 'FA_I_1', letter: 'I', varIdx: '1', title: 'I (Normal)', desc: 'Modelagem articulatória e sustentação da vogal I.' },
    { id: 'FA_I_3', letter: 'I', varIdx: '3', title: 'I (Nasal)', desc: 'Modelagem articulatória e sustentação da vogal I nasal.' },
    { id: 'FA_O_1', letter: 'O', varIdx: '1', title: 'O (Aberto)', desc: 'Modelagem articulatória e sustentação da vogal O aberta.' },
    { id: 'FA_O_2', letter: 'O', varIdx: '2', title: 'O (Fechado)', desc: 'Modelagem articulatória e sustentação da vogal O fechada.' },
    { id: 'FA_O_3', letter: 'O', varIdx: '3', title: 'O (Nasal)', desc: 'Modelagem articulatória e sustentação da vogal O nasal.' },
    { id: 'FA_U_1', letter: 'U', varIdx: '1', title: 'U (Normal)', desc: 'Modelagem articulatória e sustentação da vogal U.' },
    { id: 'FA_U_3', letter: 'U', varIdx: '3', title: 'U (Nasal)', desc: 'Modelagem articulatória e sustentação da vogal U nasal.' },

    // Consoantes Contínuas (F, V, S, Z, X, J, M, N, L, R) com variações lado a lado
    { id: 'FA_F_1', letter: 'F', varIdx: '1', title: 'F', desc: 'Modelagem articulatória labiodental surda /f/.' },
    { id: 'FA_V_1', letter: 'V', varIdx: '1', title: 'V', desc: 'Modelagem articulatória labiodental sonora /v/.' },
    { id: 'FA_S_1', letter: 'S', varIdx: '1', title: 'S (Som 1)', desc: 'Modelagem articulatória alveolar surda /s/.' },
    { id: 'FA_S_2', letter: 'S', varIdx: '2', title: 'S (Som 2 - /z/)', desc: 'Modelagem articulatória intervocálica sonora /z/.' },
    { id: 'FA_Z_1', letter: 'Z', varIdx: '1', title: 'Z', desc: 'Modelagem articulatória alveolar sonora /z/.' },
    { id: 'FA_X_1', letter: 'X', varIdx: '1', title: 'X (Som 1 - /ʃ/)', desc: 'Modelagem articulatória fricativa palatal (ex: Xícara).' },
    { id: 'FA_X_2', letter: 'X', varIdx: '2', title: 'X (Som 2 - /z/)', desc: 'Modelagem articulatória sonora (ex: Exame).' },
    { id: 'FA_X_3', letter: 'X', varIdx: '3', title: 'X (Som 3 - /s/)', desc: 'Modelagem articulatória sibilante (ex: Texto).' },
    { id: 'FA_X_4', letter: 'X', varIdx: '4', title: 'X (Som 4 - /ks/)', desc: 'Modelagem articulatória dupla (ex: Táxi).' },
    { id: 'FA_J_1', letter: 'J', varIdx: '1', title: 'J', desc: 'Modelagem articulatória palatal sonora /ʒ/.' },
    { id: 'FA_M_1', letter: 'M', varIdx: '1', title: 'M', desc: 'Modelagem articulatória bilabial nasal /m/.' },
    { id: 'FA_N_1', letter: 'N', varIdx: '1', title: 'N', desc: 'Modelagem articulatória alveolar nasal /n/.' },
    { id: 'FA_L_1', letter: 'L', varIdx: '1', title: 'L (Som 1)', desc: 'Modelagem articulatória lateral alveolar (ex: Lata).' },
    { id: 'FA_L_2', letter: 'L', varIdx: '2', title: 'L (Som 2 - /w/)', desc: 'Modelagem articulatória final velarizada (ex: Sol).' },
    { id: 'FA_R_1', letter: 'R', varIdx: '1', title: 'R (Forte)', desc: 'Modelagem articulatória vibrante forte inicial (ex: Rato).' },
    { id: 'FA_R_2', letter: 'R', varIdx: '2', title: 'R (Brando)', desc: 'Modelagem articulatória tepe alveolar (ex: Arara).' },
    { id: 'FA_R_3', letter: 'R', varIdx: '3', title: 'R (Final)', desc: 'Modelagem articulatória em coda silábica (ex: Mar).' },
    { id: 'FA_W_2', letter: 'W', varIdx: '2', title: 'W', desc: 'Modelagem articulatória aproximante /w/.' },

    // Consoantes Oclusivas (P, B, T, D, C/K, G) com variações lado a lado
    { id: 'FA_P_1', letter: 'P', varIdx: '1', title: 'P', desc: 'Modelagem articulatória oclusiva bilabial surda /p/.' },
    { id: 'FA_B_1', letter: 'B', varIdx: '1', title: 'B', desc: 'Modelagem articulatória oclusiva bilabial sonora /b/.' },
    { id: 'FA_T_1', letter: 'T', varIdx: '1', title: 'T', desc: 'Modelagem articulatória oclusiva linguodental surda /t/.' },
    { id: 'FA_D_1', letter: 'D', varIdx: '1', title: 'D', desc: 'Modelagem articulatória oclusiva linguodental sonora /d/.' },
    { id: 'FA_C_1', letter: 'C', varIdx: '1', title: 'C (Som 1 - /k/)', desc: 'Modelagem articulatória velar forte (CA, CO, CU).' },
    { id: 'FA_C_2', letter: 'C', varIdx: '2', title: 'C (Som 2 - /s/)', desc: 'Modelagem articulatória fricativa branda (CE, CI).' },
    { id: 'FA_K_1', letter: 'K', varIdx: '1', title: 'K', desc: 'Modelagem articulatória oclusiva velar /k/.' },
    { id: 'FA_G_1', letter: 'G', varIdx: '1', title: 'G (Som 1 - /g/)', desc: 'Modelagem articulatória velar sonora (GA, GO, GU).' },
    { id: 'FA_G_2', letter: 'G', varIdx: '2', title: 'G (Som 2 - /ʒ/)', desc: 'Modelagem articulatória palatal branda (GE, GI).' }
];

function getPhonemeAudioPath(letter, varIdx = '1') {
    const k = String(letter || '').toUpperCase().trim();
    const entry = (typeof FONEMAS_AUDIO_MAP !== 'undefined') ? FONEMAS_AUDIO_MAP[k] : null;
    if (!entry) return `assets/audio/fonemas/c-${k.toLowerCase()}-${varIdx}.ogg`;
    if (typeof entry === 'string') return `assets/audio/fonemas/${entry}`;
    const file = entry[String(varIdx)] || entry['1'] || Object.values(entry)[0];
    return `assets/audio/fonemas/${file}`;
}

function getMouthImagePath(letter, varIdx = '1') {
    const k = String(letter || '').toLowerCase().trim();
    return `assets/img/b-${k}-${varIdx}.webp`;
}

let activePhonemeAudioObj = null;
let phonemeDoublePlayTimer = null;

function playPhonemeAudioFile(letter, varIdx = '1', playTwice = false) {
    if (phonemeDoublePlayTimer) { clearTimeout(phonemeDoublePlayTimer); phonemeDoublePlayTimer = null; }
    if (activePhonemeAudioObj) {
        try { activePhonemeAudioObj.pause(); activePhonemeAudioObj.currentTime = 0; } catch (e) {}
    }

    const src = getPhonemeAudioPath(letter, varIdx);
    const playOnce = (onFinishCallback) => {
        try {
            const aud = new Audio(src);
            activePhonemeAudioObj = aud;
            aud.onended = () => {
                if (typeof onFinishCallback === 'function') onFinishCallback();
            };
            aud.onerror = () => {
                speakTTS(getPhoneticAudioModel(letter));
                if (typeof onFinishCallback === 'function') setTimeout(onFinishCallback, 400);
            };
            const playPromise = aud.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    speakTTS(getPhoneticAudioModel(letter));
                    if (typeof onFinishCallback === 'function') setTimeout(onFinishCallback, 400);
                });
            }
        } catch (err) {
            speakTTS(getPhoneticAudioModel(letter));
            if (typeof onFinishCallback === 'function') setTimeout(onFinishCallback, 400);
        }
    };

    if (playTwice) {
        playOnce(() => {
            phonemeDoublePlayTimer = setTimeout(() => {
                playOnce(null);
            }, 600);
        });
    } else {
        playOnce(null);
    }
}

/* ============================================================================
   5. ESTADO GLOBAL, CONFIGURAÇÕES LOCAIS POR TAREFA E DESBLOQUEIO
   ============================================================================ */
let state = JSON.parse(localStorage.getItem('eidos_mts_state')) || {
    setupDone: false,
    student: '',
    manualProgressionOverride: false,
    unlocked: ['VOGAIS', 'E1_1', 'E1_2', 'E1_3', 'E1_4', 'E1_5', 'E1_6'],
    moduleProgress: {},
    customCurriculum: {},
    taskSettings: {},
    minimalPairSwaps: { 'F/V': 0, 'P/B': 0, 'T/D': 0, 'C/G': 0 },
    settings: {
        crit: 90,
        consecDays: 3,
        strictDay: false,
        errorless: true,
        topoVar: false,
        topoMode: 'AUTO',
        opts: 3,
        sylComplex: { ccv: false, cvcL: false, cvcS: false, cvcM: false },
        theme: 'cyan',
        latency: 400,
        security: { enabled: false, pin: '', lockExit: false },
        timer: { enabled: false, min: 30 },
        stages: { c1: true, c2: true, c3: true, c4: true },
        useMic: true
    },
    customWords: 'BOLA, GATO, BOLO, SAPATO, FACA, VACA',
    log: [],
    session: { expired: false, endTime: null },
    reviewHighlights: {}
};

if (!state.moduleProgress) state.moduleProgress = {};
if (!state.customCurriculum) state.customCurriculum = {};
if (!state.taskSettings) state.taskSettings = {};
if (!state.minimalPairSwaps) state.minimalPairSwaps = { 'F/V': 0, 'P/B': 0, 'T/D': 0, 'C/G': 0 };
if (!state.settings.consecDays) state.settings.consecDays = 3;
if (!state.settings.topoMode) state.settings.topoMode = 'AUTO';
if (!state.settings.sylComplex) {
    state.settings.sylComplex = { ccv: false, cvcL: false, cvcS: false, cvcM: false };
}
if (!state.unlocked.includes('VOGAIS')) state.unlocked.push('VOGAIS');
EIDOS_MODULES.filter(m => m.level === 'N1').forEach(m => {
    if (!state.unlocked.includes(m.id)) state.unlocked.push(m.id);
});
PHONOLOGICAL_ALPHABET_MODULES.forEach(pm => {
    if (!state.unlocked.includes(pm.id)) state.unlocked.push(pm.id);
});

let currentLevelTab = 'N1';
let isReviewMode = false;
let isConfigMode = false;
let blockClicks = false;
let timerInterval = null;
let trialStartTime = 0;
let fluencyTimerInterval = null;
let responseTimeoutTimer = null;
let dmtsDelayTimer = null;
let undoSnapshot = null;

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function saveState() {
    localStorage.setItem('eidos_mts_state', JSON.stringify(state));
}

function getTaskConfig(modId) {
    if (!state.taskSettings[modId]) {
        state.taskSettings[modId] = { font: 'GLOBAL', dmtsDelay: 0, responseTimeout: 0 };
    }
    return state.taskSettings[modId];
}

function getModuleVariationsMap(modId) {
    if (state.customCurriculum && state.customCurriculum[modId]) {
        return state.customCurriculum[modId];
    }
    if (DEFAULT_MODULE_VARIATIONS[modId]) {
        return JSON.parse(JSON.stringify(DEFAULT_MODULE_VARIATIONS[modId].variations));
    }
    return null;
}

function getAvailableVariationKeys(modId) {
    const map = getModuleVariationsMap(modId);
    if (!map) return [1, 2];
    const keys = Object.keys(map).map(Number).filter(k => Array.isArray(map[k]) && map[k].length > 0).sort((a, b) => a - b);
    return keys.length > 0 ? keys : [1];
}

function getModuleProgress(modId) {
    if (!state.moduleProgress[modId]) {
        state.moduleProgress[modId] = {
            streak: 0,
            lastDate: '',
            status: 'in_progress',
            bestAcc: 0,
            avgLatency: 0,
            activeVar: 1,
            pendingVar: null,
            pendingVarDate: ''
        };
    }
    if (!state.moduleProgress[modId].activeVar) state.moduleProgress[modId].activeVar = 1;
    return state.moduleProgress[modId];
}

function getActiveVariationForModule(modId) {
    const prog = getModuleProgress(modId);
    const availKeys = getAvailableVariationKeys(modId);

    if (state.settings.topoMode !== 'AUTO') {
        const fixed = parseInt(state.settings.topoMode) || 1;
        return availKeys.includes(fixed) ? fixed : availKeys[0];
    }

    const todayStr = new Date().toLocaleDateString('pt-BR');
    if (prog.pendingVar && prog.pendingVarDate && prog.pendingVarDate !== todayStr) {
        prog.activeVar = prog.pendingVar;
        prog.pendingVar = null;
        prog.pendingVarDate = '';
        saveState();
    }

    if (!availKeys.includes(prog.activeVar)) {
        prog.activeVar = availKeys[0];
    }
    return prog.activeVar;
}

function registerMasteryAttempt(modId, accuracy, avgLatencySec) {
    const prog = getModuleProgress(modId);
    const todayStr = new Date().toLocaleDateString('pt-BR');
    const targetDays = state.settings.consecDays || 3;
    const crit = state.settings.crit || 90;
    const availKeys = getAvailableVariationKeys(modId);

    if (accuracy > prog.bestAcc) prog.bestAcc = Math.round(accuracy);
    if (avgLatencySec > 0) prog.avgLatency = avgLatencySec;

    if (accuracy >= crit) {
        const curIdx = availKeys.indexOf(prog.activeVar);
        const nextVar = availKeys[(curIdx + 1) % availKeys.length];

        if (state.settings.strictDay) {
            if (prog.lastDate !== todayStr) {
                prog.streak = (prog.streak || 0) + 1;
                prog.lastDate = todayStr;
            }
            if (availKeys.length > 1) {
                prog.pendingVar = nextVar;
                prog.pendingVarDate = todayStr;
            }
        } else {
            prog.streak = (prog.streak || 0) + 1;
            prog.lastDate = todayStr;
            if (availKeys.length > 1) {
                prog.activeVar = nextVar;
                prog.pendingVar = null;
            }
        }

        if (prog.streak >= targetDays) {
            prog.status = 'mastered';
            if (!state.manualProgressionOverride) {
                unlockNextInSequence(modId);
            }
        }
    } else {
        if (prog.status !== 'mastered') {
            prog.streak = 0;
        }
    }
    saveState();
    return prog;
}

function unlockNextInSequence(modId) {
    const modObj = EIDOS_MODULES.find(m => m.id === modId);
    if (modObj && Array.isArray(modObj.unlockSyl)) {
        modObj.unlockSyl.forEach(s => {
            if (!state.unlocked.includes(s)) state.unlocked.push(s);
        });
    }

    const eIdx = EIDOS_MODULES.findIndex(m => m.id === modId);
    if (eIdx >= 0 && eIdx < EIDOS_MODULES.length - 1) {
        const nextId = EIDOS_MODULES[eIdx + 1].id;
        if (!state.unlocked.includes(nextId)) state.unlocked.push(nextId);
    }
    const cIdx = curriculumOrder.indexOf(modId);
    if (cIdx >= 0 && cIdx < curriculumOrder.length - 1) {
        const nextClassic = curriculumOrder[cIdx + 1];
        if (!state.unlocked.includes(nextClassic)) state.unlocked.push(nextClassic);
    }
}

let session = {
    phase: '',
    eidosMod: null,
    activeVar: 1,
    pool: [],
    trials: [],
    activeCycles: [],
    currentCycleIdx: 0,
    currentCycle: 1,
    isOnlyCycle3: false,
    isPreReq: false,
    currentTrialIdx: 0,
    attemptsOnCurrent: 0,
    currentRenderedOptions: null,
    isRepeating: false,
    latencies: [],
    stats: {
        c1: { indep: 0, dica: 0, erro: 0, total: 0 },
        c2: { indep: 0, dica: 0, erro: 0, total: 0 },
        c3: { indep: 0, dica: 0, erro: 0, total: 0 },
        c4: { indep: 0, dica: 0, erro: 0, total: 0 },
        c5: { indep: 0, dica: 0, erro: 0, total: 0 }
    }
};

/* ============================================================================
   6. ÁUDIO SINTÉTICO, TTS E EFEITOS SONOROS
   ============================================================================ */
let audioCtx = null;

function playSound(type) {
    try {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === 'win') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
            osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.09);
            gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.28);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.28);
        } else if (type === 'click') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(320, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.08);
        }
    } catch (e) {}
}

function speakTTS(text) {
    if (window.AppInventor) {
        window.AppInventor.setWebViewString("FALAR:" + text);
    } else {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(String(text).toLowerCase());
        utter.lang = 'pt-BR';
        utter.rate = 0.85;
        window.speechSynthesis.speak(utter);
    }
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.settings.theme || 'cyan');
    const nameEl = document.getElementById('splash-student-name');
    if (nameEl) nameEl.innerText = state.student ? `Aluno(a): ${state.student}` : 'Aluno: Não Configurado';
}

/* ============================================================================
   7. NAVEGAÇÃO, BLINDAGEM DE MODAIS E TIMERS
   ============================================================================ */
let authCallback = null;
let alertCallback = null;
let backdropMouseDownTarget = null;

function clearAllTrialTimers() {
    if (fluencyTimerInterval) { clearInterval(fluencyTimerInterval); fluencyTimerInterval = null; }
    if (responseTimeoutTimer) { clearTimeout(responseTimeoutTimer); responseTimeoutTimer = null; }
    if (dmtsDelayTimer) { clearTimeout(dmtsDelayTimer); dmtsDelayTimer = null; }
    if (phonemeDoublePlayTimer) { clearTimeout(phonemeDoublePlayTimer); phonemeDoublePlayTimer = null; }
    if (activePhonemeAudioObj) {
        try { activePhonemeAudioObj.pause(); activePhonemeAudioObj.currentTime = 0; } catch (e) {}
        activePhonemeAudioObj = null;
    }
}

function setupBackdropClosing() {
    document.querySelectorAll('.modal-overlay[data-backdrop-close="true"]').forEach(overlay => {
        overlay.addEventListener('mousedown', (e) => {
            backdropMouseDownTarget = e.target;
        });
        overlay.addEventListener('mouseup', (e) => {
            if (e.target === overlay && backdropMouseDownTarget === overlay) {
                closeModals();
            }
            backdropMouseDownTarget = null;
        });
    });
}

function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
}
function closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
    closeAuth();
}

function goSplash() {
    clearAllTrialTimers();
    hideAllScreens();
    applyTheme();
    updateLobbyButton();
    document.getElementById('screen-splash').classList.add('active');
}

function openGrid() {
    if (state.settings.timer.enabled && state.session.expired) {
        updateLobbyButton();
        return;
    }
    hideAllScreens();
    document.getElementById('screen-home').classList.add('active');
    renderGrid();
}

function openDashboard() {
    hideAllScreens();
    document.getElementById('screen-dashboard').classList.add('active');
    renderDashboard();
}

function openGame() {
    hideAllScreens();
    document.getElementById('screen-game').classList.add('active');
}

function requireAuth(callback) {
    if (!state.settings.security.enabled) {
        callback();
    } else {
        authCallback = callback;
        const input = document.getElementById('auth-pin-input');
        input.value = '';
        document.getElementById('auth-error').innerText = '';
        document.getElementById('modal-auth').style.display = 'flex';
        setTimeout(() => input.focus(), 100);
    }
}

function closeAuth() {
    document.getElementById('modal-auth').style.display = 'none';
    authCallback = null;
}

function confirmAuth() {
    const input = document.getElementById('auth-pin-input');
    if (input.value === state.settings.security.pin) {
        playSound('win');
        const fn = authCallback;
        closeAuth();
        if (typeof fn === 'function') fn();
    } else {
        document.getElementById('auth-error').innerText = 'PIN Incorreto.';
        input.value = '';
        playSound('click');
        const box = document.getElementById('auth-content');
        box.classList.add('shake');
        setTimeout(() => box.classList.remove('shake'), 400);
    }
}

function requestAbortGame() {
    if (state.settings.security.enabled && state.settings.security.lockExit) {
        requireAuth(abortGame);
    } else {
        abortGame();
    }
}

function abortGame() {
    if (isListening) stopMicrophone();
    clearAllTrialTimers();
    openGrid();
}

function checkTimer() {
    if (!state.settings.timer.enabled || state.session.expired) return;
    if (state.session.endTime) {
        const remaining = state.session.endTime - Date.now();
        if (remaining <= 0) {
            state.session.expired = true;
            saveState();
            triggerTimeUp();
        } else {
            const mins = Math.floor(remaining / 60000);
            const secs = Math.floor((remaining % 60000) / 1000);
            const txt = document.getElementById('header-timer-text');
            if (txt) txt.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
    }
}

function triggerTimeUp() {
    if (timerInterval) clearInterval(timerInterval);
    abortGame();
    document.getElementById('modal-timesup').style.display = 'flex';
}

function updateLobbyButton() {
    const btn = document.getElementById('btn-start-game');
    const clock = document.getElementById('header-timer-icon');
    if (state.settings.timer.enabled && state.session.expired) {
        btn.innerHTML = `<div class="icon-wrapper" style="background:#FEE2E2; color:#EF4444;"><span class="material-icons">lock</span></div>Sessão Finalizada`;
        btn.onclick = () => {
            requireAuth(() => {
                state.session.expired = false;
                state.session.endTime = null;
                saveState();
                updateLobbyButton();
                customAlert("Sessão Liberada", "O cronômetro de sessão foi reiniciado.");
            });
        };
        clock.style.display = 'none';
    } else {
        btn.innerHTML = `<div class="icon-wrapper"><span class="material-icons">play_arrow</span></div>Iniciar Sessão`;
        btn.onclick = openGrid;
        clock.style.display = (state.settings.timer.enabled && state.session.endTime) ? 'flex' : 'none';
    }
}

/* ============================================================================
   8. CARROSSEL HORIZONTAL, CARDS LIMPOS, TOGGLE DE CONFIG NO HEADER E PUSH-TO-VIEW
   ============================================================================ */
const CAROUSEL_LEVELS = [
    { key: 'N1', title: 'Nível 1' },
    { key: 'N2', title: 'Nível 2' },
    { key: 'N3', title: 'Nível 3' },
    { key: 'N4', title: 'Nível 4' },
    { key: 'N5', title: 'Nível 5' },
    { key: 'FONOLOGICO', title: 'Alfabeto Fonológico' },
    { key: 'SILABARIO', title: 'Silabário' },
    { key: 'EXTRAS', title: 'Extras' }
];

let pushHoldTimer = null;
let isPushModalOpen = false;

function selectLevelTab(lvl, btnEl) {
    playSound('click');
    currentLevelTab = lvl;
    const idx = CAROUSEL_LEVELS.findIndex(l => l.key === lvl);
    if (idx >= 0) scrollToLevelIndex(idx);
}

function toggleReviewMode() {
    playSound('click');
    isReviewMode = !isReviewMode;
    if (isReviewMode && isConfigMode) {
        isConfigMode = false;
        const cfgBtn = document.getElementById('btn-config-mode');
        if (cfgBtn) cfgBtn.classList.remove('review-active');
    }
    const btn = document.getElementById('btn-review-mode');
    if (btn) btn.classList.toggle('review-active', isReviewMode);
}

function toggleConfigMode() {
    playSound('click');
    isConfigMode = !isConfigMode;
    if (isConfigMode && isReviewMode) {
        isReviewMode = false;
        const revBtn = document.getElementById('btn-review-mode');
        if (revBtn) revBtn.classList.remove('review-active');
    }
    const btn = document.getElementById('btn-config-mode');
    if (btn) btn.classList.toggle('review-active', isConfigMode);
}

function ensureHeaderConfigModeBtn() {
    const rightActions = document.querySelector('.header-right-actions');
    if (!rightActions || document.getElementById('btn-config-mode')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'icon-circle-btn';
    btn.id = 'btn-config-mode';
    btn.title = 'Modo Configurar Tarefa (Toque em um card para configurar)';
    btn.onclick = () => toggleConfigMode();
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
    const revBtn = document.getElementById('btn-review-mode');
    if (revBtn && revBtn.nextSibling) {
        rightActions.insertBefore(btn, revBtn.nextSibling);
    } else {
        rightActions.appendChild(btn);
    }
}

function renderDotsHTML(modId, hasVariations = false) {
    const prog = getModuleProgress(modId);
    const target = state.settings.consecDays || 3;
    const activeV = getActiveVariationForModule(modId);
    const tCfg = getTaskConfig(modId);
    let dots = '';
    for (let i = 0; i < target; i++) {
        const filled = (prog.status === 'mastered' || i < prog.streak) ? 'filled' : '';
        dots += `<span class="day-dot ${filled}"></span>`;
    }
    const dmtsBadge = (tCfg.dmtsDelay > 0) ? `<span class="var-pill-tag" style="background:#FEF3C7; color:#92400E;">DMTS ${tCfg.dmtsDelay}s</span>` : '';
    const varBadge = hasVariations ? `<span class="var-pill-tag">Var ${activeV}</span>` : '';
    const statusText = prog.status === 'mastered'
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
        : `${Math.min(prog.streak, target)}/${target}`;

    return `<div class="card-footer-mastery"><div class="days-dots">${dots}</div><span class="day-label">${dmtsBadge}${varBadge} ${statusText}</span></div>`;
}

function scrollToLevelIndex(idx) {
    const viewport = document.getElementById('levels-carousel');
    if (!viewport) return;
    viewport.scrollTo({ left: idx * viewport.clientWidth, behavior: 'smooth' });
}

function onCarouselScroll() {
    const viewport = document.getElementById('levels-carousel');
    if (!viewport || viewport.clientWidth === 0) return;
    const pageIdx = Math.round(viewport.scrollLeft / viewport.clientWidth);
    const lvlObj = CAROUSEL_LEVELS[pageIdx] || CAROUSEL_LEVELS[0];
    currentLevelTab = lvlObj.key;

    const titleEl = document.getElementById('carousel-level-title');
    if (titleEl) titleEl.innerText = lvlObj.title;

    document.querySelectorAll('#carousel-dots .page-dot').forEach((d, i) => {
        d.classList.toggle('active', i === pageIdx);
    });
}

function attachPushToViewEvents(cardEl, metaInfo) {
    const clearHold = () => {
        if (pushHoldTimer) { clearTimeout(pushHoldTimer); pushHoldTimer = null; }
        if (isPushModalOpen) {
            isPushModalOpen = false;
            const modal = document.getElementById('modal-push-details');
            if (modal) modal.style.display = 'none';
        }
    };

    cardEl.addEventListener('pointerdown', (e) => {
        if (isConfigMode || isReviewMode) return;
        if (e.target.closest('button')) return;
        pushHoldTimer = setTimeout(() => {
            isPushModalOpen = true;
            playSound('click');
            document.getElementById('push-det-code').innerText = metaInfo.codeBadge;
            document.getElementById('push-det-title').innerText = metaInfo.title;
            document.getElementById('push-det-desc').innerText = metaInfo.desc;
            document.getElementById('push-det-method').innerText = metaInfo.methodText;
            document.getElementById('modal-push-details').style.display = 'flex';
        }, 250);
    });

    cardEl.addEventListener('pointerup', clearHold);
    cardEl.addEventListener('pointercancel', clearHold);
    cardEl.addEventListener('pointerleave', clearHold);
}

function getMethodExplanation(engine) {
    if (engine === 'PHON_MODEL') return 'Modelagem Fonológica em 2 Fases: Fase A (Exposição com imagem articulatória da boca + repetição dupla do fonema com 600ms) e Fase B (Sustentação motora via slider horizontal).';
    if (engine === 'MULTIMTS') return 'Emparelhamento Multimodelo: exige parear simultaneamente múltiplos estímulos modelo e comparações, fortalecendo varredura visual e equivalência.';
    if (engine === 'CRMTS') return 'Resposta Construída (CRMTS): montagem ativa de unidades menores (letras, sílabas ou palavras) com tolerância a frustração e leitura vocal.';
    if (engine === 'FLUENCY') return 'Treino de Fluência sob Velocidade: leitura oral ágil sob controle de tempo (< 3s) para automatização lexical.';
    if (engine === 'DTT') return 'Tentativa Discreta (DTT): apresentação direta do estímulo com mediação imediata do aplicador.';
    return 'Emparelhamento ao Modelo (MTS): discriminação condicional entre modelo e comparações com suporte a aprendizagem sem erro e Time Delay.';
}

function buildCleanCardElement(itemData) {
    const card = document.createElement('div');
    card.className = `phase-card clean-card ${itemData.isUnlocked ? '' : 'locked'} ${itemData.isMastered ? 'mastered' : ''}`;

    const playBtnHTML = itemData.isUnlocked
        ? `<button type="button" class="card-play-btn" title="Iniciar Atividade" onclick="event.stopPropagation(); triggerCardPlay('${itemData.id}', ${itemData.isEidos})">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
           </button>`
        : '';

    card.innerHTML = `
        <div class="clean-card-body">
            <h3 class="clean-card-title" style="padding-right: 8px !important;">${itemData.title}</h3>
            ${playBtnHTML}
        </div>
        ${renderDotsHTML(itemData.id, itemData.hasVar)}
    `;

    if (itemData.isUnlocked) {
        card.onclick = () => {
            if (isConfigMode || isReviewMode) {
                triggerCardPlay(itemData.id, itemData.isEidos);
            }
        };
    }

    attachPushToViewEvents(card, {
        codeBadge: itemData.codeBadge,
        title: itemData.title,
        desc: itemData.desc,
        methodText: itemData.methodText
    });

    return card;
}

function triggerCardPlay(id, isEidos) {
    playSound('click');
    if (isConfigMode) {
        requireAuth(() => openStimuliEditor(id));
        return;
    }
    if (isReviewMode) {
        openReview(id);
        return;
    }
    if (String(id).startsWith('FA_')) {
        startPhonologicalModelingModule(id);
    } else if (isEidos) {
        startEidosModule(id);
    } else {
        startLegacyGame(id);
    }
}

function renderGrid() {
    ensureHeaderConfigModeBtn();
    const track = document.getElementById('carousel-track');
    const dotsBox = document.getElementById('carousel-dots');
    if (!track || !dotsBox) return;

    track.innerHTML = '';
    dotsBox.innerHTML = '';

    CAROUSEL_LEVELS.forEach((lvl, idx) => {
        const page = document.createElement('div');
        page.className = 'carousel-page';

        if (['N1', 'N2', 'N3', 'N4', 'N5'].includes(lvl.key)) {
            const modules = EIDOS_MODULES.filter(m => m.level === lvl.key);
            modules.forEach(mod => {
                const isUnlocked = state.unlocked.includes(mod.id);
                const prog = getModuleProgress(mod.id);
                const isEditable = !!(DEFAULT_MODULE_VARIATIONS[mod.id] && DEFAULT_MODULE_VARIATIONS[mod.id].editable);
                const hasVar = isEditable || ['E2_1', 'E2_2', 'E4_1'].includes(mod.id);

                page.appendChild(buildCleanCardElement({
                    id: mod.id,
                    title: mod.title,
                    desc: mod.desc,
                    codeBadge: `${mod.code} • ${mod.engine}`,
                    methodText: getMethodExplanation(mod.engine),
                    isUnlocked,
                    isMastered: prog.status === 'mastered',
                    canConfigure: true,
                    hasVar,
                    isEidos: true
                }));
            });
        } else if (lvl.key === 'FONOLOGICO') {
            PHONOLOGICAL_ALPHABET_MODULES.forEach(pm => {
                const isUnlocked = state.unlocked.includes(pm.id);
                const prog = getModuleProgress(pm.id);

                page.appendChild(buildCleanCardElement({
                    id: pm.id,
                    title: pm.title,
                    desc: pm.desc,
                    codeBadge: `FONEMA • MODELAGEM A/B`,
                    methodText: getMethodExplanation('PHON_MODEL'),
                    isUnlocked,
                    isMastered: prog.status === 'mastered',
                    canConfigure: true,
                    hasVar: false,
                    isEidos: false
                }));
            });
        } else if (lvl.key === 'SILABARIO') {
            syllabaryOrder.forEach(p => {
                const isUnlocked = state.unlocked.includes(p);
                const prog = getModuleProgress(p);
                let displayDesc = `Família Silábica ${p}`;
                if (p === 'VOGAIS') displayDesc = "Identificação e leitura das vogais A, E, I, O, U.";
                else if (p === 'ENCONTROS') displayDesc = "Encontros vocálicos AI, EI, OI, UI, AU, OU, ÃO.";

                page.appendChild(buildCleanCardElement({
                    id: p,
                    title: p,
                    desc: displayDesc,
                    codeBadge: `SILABÁRIO • MTS`,
                    methodText: getMethodExplanation('MTS'),
                    isUnlocked,
                    isMastered: prog.status === 'mastered',
                    canConfigure: true,
                    hasVar: false,
                    isEidos: false
                }));
            });
        } else if (lvl.key === 'EXTRAS') {
            extraModules.forEach(p => {
                const isUnlocked = state.unlocked.includes(p);
                const prog = getModuleProgress(p);
                const title = (p === 'PALAVRAS') ? 'PALAVRAS LIVRES' : p;
                const desc = (p === 'PSEUDOPALAVRAS')
                    ? 'Decodificação fonológica pura de palavras inventadas.'
                    : 'Treino customizado com lista aberta de palavras.';

                page.appendChild(buildCleanCardElement({
                    id: p,
                    title,
                    desc,
                    codeBadge: `EXTRA • MTS`,
                    methodText: getMethodExplanation('MTS'),
                    isUnlocked,
                    isMastered: prog.status === 'mastered',
                    canConfigure: true,
                    hasVar: false,
                    isEidos: false
                }));
            });
        }

        track.appendChild(page);

        const dot = document.createElement('span');
        dot.className = `page-dot ${lvl.key === currentLevelTab ? 'active' : ''}`;
        dot.onclick = () => scrollToLevelIndex(idx);
        dotsBox.appendChild(dot);
    });

    const activeIdx = Math.max(0, CAROUSEL_LEVELS.findIndex(l => l.key === currentLevelTab));
    setTimeout(() => {
        const viewport = document.getElementById('levels-carousel');
        if (viewport) viewport.scrollLeft = activeIdx * viewport.clientWidth;
        onCarouselScroll();
    }, 30);
}

/* ============================================================================
   9. PAINEL UNIFICADO DE TAREFA, TOOLTIPS CONTEXTUAIS, QUICK PEEK E HARD RESET
   ============================================================================ */
let editorSession = {
    modId: null,
    activeVarKey: 1,
    hasEditableStimuli: false,
    tempMap: {}
};

function switchTaskEditorTab(tabName) {
    playSound('click');
    document.getElementById('tab-btn-stim').classList.toggle('active', tabName === 'STIM');
    document.getElementById('tab-btn-topo').classList.toggle('active', tabName === 'TOPO');
    document.getElementById('tab-btn-aba').classList.toggle('active', tabName === 'ABA');

    document.getElementById('task-tab-content-stim').style.display = (tabName === 'STIM') ? 'block' : 'none';
    document.getElementById('task-tab-content-topo').style.display = (tabName === 'TOPO') ? 'block' : 'none';
    document.getElementById('task-tab-content-aba').style.display = (tabName === 'ABA') ? 'block' : 'none';
}

function toggleTooltip(e, tipId) {
    e.stopPropagation();
    const target = document.getElementById(tipId);
    const wasOpen = target && target.classList.contains('show');
    document.querySelectorAll('.floating-popover').forEach(p => p.classList.remove('show'));
    if (target && !wasOpen) target.classList.add('show');
}

function closeAllTooltips(e) {
    if (!e.target.closest('.help-tip-btn')) {
        document.querySelectorAll('.floating-popover').forEach(p => p.classList.remove('show'));
    }
}

function openStimuliEditor(modId) {
    const mod = EIDOS_MODULES.find(m => m.id === modId)
        || PHONOLOGICAL_ALPHABET_MODULES.find(m => m.id === modId)
        || { id: modId, title: String(modId), isAudioModel: false };

    const meta = DEFAULT_MODULE_VARIATIONS[modId];
    editorSession.modId = modId;
    editorSession.hasEditableStimuli = !!(meta && meta.editable);

    const tCfg = getTaskConfig(modId);
    document.getElementById('task-cfg-font').value = tCfg.font || 'GLOBAL';
    const chkCV = document.getElementById('task-cfg-color-cv');
    const chkBox = document.getElementById('task-cfg-syl-box');
    if (chkCV) chkCV.checked = !!tCfg.colorCV;
    if (chkBox) chkBox.checked = !!tCfg.sylBox;
    document.getElementById('task-cfg-dmts').value = tCfg.dmtsDelay || 0;
    document.getElementById('dmts-val-label').innerText = (tCfg.dmtsDelay > 0) ? `${tCfg.dmtsDelay}s` : '0s (Off)';
    document.getElementById('task-cfg-timeout').value = tCfg.responseTimeout || 0;

    const dmtsBox = document.getElementById('dmts-config-box');
    if (mod.isAudioModel) {
        dmtsBox.style.opacity = '0.45';
        dmtsBox.style.pointerEvents = 'none';
        document.getElementById('dmts-val-label').innerText = 'N/A (Áudio)';
    } else {
        dmtsBox.style.opacity = '1';
        dmtsBox.style.pointerEvents = 'auto';
    }

    document.getElementById('stim-editor-title').innerText = mod.title;

    if (editorSession.hasEditableStimuli) {
        editorSession.tempMap = JSON.parse(JSON.stringify(getModuleVariationsMap(modId)));
        const keys = Object.keys(editorSession.tempMap).map(Number).sort((a, b) => a - b);
        editorSession.activeVarKey = keys[0] || 1;
        document.getElementById('stim-editor-rules').innerHTML = `
            <span class="meta-chip">Mín: ${meta.min}</span>
            <span class="meta-chip">Máx: ${meta.max}</span>
        `;
        document.getElementById('stim-new-input').value = '';
        document.getElementById('tab-btn-stim').style.display = 'inline-flex';
        renderStimuliEditorUI();
        switchTaskEditorTab('STIM');
    } else {
        document.getElementById('stim-editor-rules').innerHTML = '';
        document.getElementById('tab-btn-stim').style.display = 'none';
        switchTaskEditorTab('TOPO');
    }

    document.getElementById('modal-stimuli-editor').style.display = 'flex';
}

function renderStimuliEditorUI() {
    if (!editorSession.hasEditableStimuli) return;
    const meta = DEFAULT_MODULE_VARIATIONS[editorSession.modId];
    const tabsContainer = document.getElementById('stim-var-tabs');
    const listContainer = document.getElementById('stim-items-list');
    tabsContainer.innerHTML = '';
    listContainer.innerHTML = '';

    const keys = Object.keys(editorSession.tempMap).map(Number).sort((a, b) => a - b);
    keys.forEach(k => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `var-tab-btn ${k === editorSession.activeVarKey ? 'active' : ''}`;
        btn.innerText = `Var ${k} (${editorSession.tempMap[k].length})`;
        btn.onclick = () => {
            playSound('click');
            editorSession.activeVarKey = k;
            renderStimuliEditorUI();
        };
        tabsContainer.appendChild(btn);
    });

    if (keys.length < 5) {
        const addVarBtn = document.createElement('button');
        addVarBtn.type = 'button';
        addVarBtn.className = 'var-tab-btn';
        addVarBtn.style.borderStyle = 'dashed';
        addVarBtn.style.color = 'var(--primary-dark)';
        addVarBtn.innerText = `+ Variação`;
        addVarBtn.onclick = () => {
            playSound('click');
            const nextKey = (keys[keys.length - 1] || 1) + 1;
            const baseClone = [...(editorSession.tempMap[keys[0]] || []).slice(0, meta.min)];
            editorSession.tempMap[nextKey] = baseClone;
            editorSession.activeVarKey = nextKey;
            renderStimuliEditorUI();
        };
        tabsContainer.appendChild(addVarBtn);
    }

    const items = editorSession.tempMap[editorSession.activeVarKey] || [];
    const canDelete = items.length > meta.min;

    items.forEach((itemVal, idx) => {
        const row = document.createElement('div');
        row.className = 'stim-editor-row';

        const inp = document.createElement('input');
        inp.type = 'text';
        inp.value = itemVal;
        inp.oninput = (e) => {
            editorSession.tempMap[editorSession.activeVarKey][idx] = e.target.value;
        };

        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'btn-icon-del';
        delBtn.disabled = !canDelete;
        delBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
        delBtn.onclick = () => {
            if (editorSession.tempMap[editorSession.activeVarKey].length <= meta.min) return;
            playSound('click');
            editorSession.tempMap[editorSession.activeVarKey].splice(idx, 1);
            renderStimuliEditorUI();
        };

        row.appendChild(inp);
        row.appendChild(delBtn);
        listContainer.appendChild(row);
    });

    const addBtn = document.getElementById('stim-btn-add');
    if (addBtn) addBtn.disabled = items.length >= meta.max;
}

function addStimulusItemToEditor() {
    if (!editorSession.hasEditableStimuli) return;
    const meta = DEFAULT_MODULE_VARIATIONS[editorSession.modId];
    const inp = document.getElementById('stim-new-input');
    const raw = inp.value.trim();
    if (!raw) return;

    const currentList = editorSession.tempMap[editorSession.activeVarKey];
    if (currentList.length >= meta.max) {
        customAlert("Limite Atingido", `Cada variação deste módulo comporta no máximo ${meta.max} itens.`);
        return;
    }

    const needsUpper = !['E5_1'].includes(editorSession.modId);
    const formatted = needsUpper ? raw.toUpperCase() : raw;

    currentList.push(formatted);
    inp.value = '';
    playSound('click');
    renderStimuliEditorUI();
}

function saveStimuliEditorChanges() {
    const modId = editorSession.modId;
    if (!modId) return;

    if (editorSession.hasEditableStimuli) {
        const meta = DEFAULT_MODULE_VARIATIONS[modId];
        for (const k of Object.keys(editorSession.tempMap)) {
            const cleaned = editorSession.tempMap[k].map(s => s.trim()).filter(s => s.length > 0);
            if (cleaned.length < meta.min) {
                customAlert("Quantidade Insuficiente", `A Variação ${k} precisa ter pelo menos ${meta.min} estímulos válidos.`);
                return;
            }
            editorSession.tempMap[k] = cleaned;
        }
        state.customCurriculum[modId] = JSON.parse(JSON.stringify(editorSession.tempMap));
    }

    const mod = EIDOS_MODULES.find(m => m.id === modId);
    const chkCV = document.getElementById('task-cfg-color-cv');
    const chkBox = document.getElementById('task-cfg-syl-box');

    state.taskSettings[modId] = {
        font: document.getElementById('task-cfg-font').value || 'GLOBAL',
        colorCV: chkCV ? chkCV.checked : false,
        sylBox: chkBox ? chkBox.checked : false,
        dmtsDelay: (mod && mod.isAudioModel) ? 0 : (parseInt(document.getElementById('task-cfg-dmts').value) || 0),
        responseTimeout: parseInt(document.getElementById('task-cfg-timeout').value) || 0
    };

    saveState();
    playSound('win');
    closeModals();
    renderGrid();
}

function restoreDefaultModuleStimuli() {
    if (!editorSession.modId) return;
    delete state.customCurriculum[editorSession.modId];
    delete state.taskSettings[editorSession.modId];
    const prog = getModuleProgress(editorSession.modId);
    prog.activeVar = 1;
    prog.pendingVar = null;
    saveState();
    playSound('click');
    closeModals();
    renderGrid();
}

// Modal de Consulta Rápida (Texto do Estímulo e Gabarito na Arena de Jogo)
function openQuickPeekModal() {
    playSound('click');
    const t = session.trials[session.currentTrialIdx];
    let stimText = '';
    let ansText = '';

    if (t === undefined || t === null) {
        stimText = '-';
        ansText = '-';
    } else if (Array.isArray(t)) {
        stimText = t.join(' | ');
        ansText = t.join(' ');
    } else if (typeof t === 'object') {
        if (t.letter && t.varIdx) {
            stimText = `Fonema ${t.title || t.letter} (Boca: b-${t.letter.toLowerCase()}-${t.varIdx}.webp | Áudio: ${getPhonemeAudioPath(t.letter, t.varIdx)})`;
            ansText = session.currentCycle === 1 ? 'Fase A: Observar boca, ouvir 2x e imitar' : 'Fase B: Arrastar o bloco até o final sustentando o som';
        } else if (t.target && t.match) {
            stimText = `Alvo: ${t.target}`;
            ansText = `Par Correto: ${t.match}`;
        } else if (t.target && t.distractor) {
            stimText = `Áudio / Par Mínimo (${t.contrast || ''}): ${t.target}`;
            ansText = t.target;
        } else if (t.sentence && t.question) {
            stimText = `${t.sentence} — ${t.question}`;
            ansText = t.correct;
        } else if (t.shortSpoken || t.wordsArray) {
            stimText = t.shortSpoken || t.wordsArray.join(' ');
            ansText = (t.wordsArray || []).join(' ');
        } else if (t.intruder && t.fix) {
            stimText = (t.words || []).join(' ');
            ansText = `Intrusa: ${t.intruder} → Correta: ${t.fix}`;
        } else if (t.steps) {
            stimText = 'Sequência de 3 frases';
            ansText = t.steps.join(' / ');
        } else {
            stimText = JSON.stringify(t);
            ansText = stimText;
        }
    } else {
        stimText = String(t);
        const wObj = WORD_BANK[stimText];
        if (session.eidosMod && session.eidosMod.subType === 'SYL_COUNT') {
            const cnt = wObj ? wObj.count : Math.max(1, Math.ceil(stimText.length / 2));
            ansText = `${stimText} (${cnt} sílabas)`;
        } else if (session.isPreReq) {
            ansText = `${stimText} → ${getCategory(stimText)}`;
        } else {
            ansText = wObj && wObj.syllables ? `${stimText} (${wObj.syllables.join('-')})` : stimText;
        }
    }

    document.getElementById('peek-stimulus-text').innerText = stimText;
    document.getElementById('peek-answer-text').innerText = ansText;
    document.getElementById('modal-quick-peek').style.display = 'flex';
}

// Botão Global de Reset que limpa LocalStorage + Cache API + Service Workers
function hardResetAppCache() {
    closeModals();
    customAlert(
        "Limpar Todo o Cache e Dados?",
        "Isso apagará todo o histórico local, configurações e removerá o cache offline do Service Worker para recarregar o aplicativo limpo.",
        async () => {
            localStorage.clear();
            sessionStorage.clear();
            try {
                if ('caches' in window) {
                    const keys = await caches.keys();
                    await Promise.all(keys.map(k => caches.delete(k)));
                }
                if ('serviceWorker' in navigator) {
                    const regs = await navigator.serviceWorker.getRegistrations();
                    await Promise.all(regs.map(r => r.unregister()));
                }
            } catch (e) {}
            location.reload(true);
        },
        true
    );
}

/* ============================================================================
   10. GERADORES DE POOLS E REVISÃO ESPECÍFICA POR TAREFA
   ============================================================================ */
function generateSyllables(cons) {
    let pool = vowels.map(v => cons + v);
    if (cons === 'Q') pool = ['QUA','QUE','QUI','QUO'];
    if (cons === 'G') pool = ['GA','GO','GU','GUE','GUI'];
    if (cons !== 'Q') pool = pool.concat(['AI','ÃO'].map(v => cons + v));

    const sc = state.settings.sylComplex || {};
    const baseCV = (cons === 'Q') ? ['QUA','QUE','QUI'] : (cons === 'G' ? ['GA','GO','GU'] : vowels.map(v => cons + v));

    if (sc.ccv) {
        if (['C','P','B','F','G'].includes(cons)) {
            pool = pool.concat(vowels.map(v => cons + 'R' + v)).concat(vowels.map(v => cons + 'L' + v));
        }
        if (['T','D','V'].includes(cons)) {
            pool = pool.concat(vowels.map(v => cons + 'R' + v));
        }
    }
    if (sc.cvcL) pool = pool.concat(baseCV.map(cv => cv + 'L'));
    if (sc.cvcS) pool = pool.concat(baseCV.map(cv => cv + 'S'));
    if (sc.cvcM) pool = pool.concat(baseCV.map(cv => cv + 'M'));
    return [...new Set(pool)];
}

function generatePseudoWords() {
    const syls = ['BA','CA','DA','FA','GA','LA','MA','PA','SA','TA','VA','BO','CO','DO','FO','GO','LO','MO','PO','SO','TO','TI','PI','LI','MI'];
    let pseudos = [];
    for (let i = 0; i < 12; i++) {
        let s1 = syls[Math.floor(Math.random() * syls.length)];
        let s2 = syls[Math.floor(Math.random() * syls.length)];
        pseudos.push(s1 + s2);
    }
    return pseudos;
}

function getModuleVariationItems(modId) {
    const activeV = getActiveVariationForModule(modId);
    const map = getModuleVariationsMap(modId);
    if (map && map[activeV] && map[activeV].length > 0) {
        return [...map[activeV]];
    }
    if (map) {
        const firstKey = Object.keys(map)[0];
        return [...(map[firstKey] || [])];
    }
    return [];
}

function getPhasePool(phaseId) {
    const pMod = PHONOLOGICAL_ALPHABET_MODULES.find(m => m.id === phaseId);
    if (pMod) return [pMod.letter];
    const eMod = EIDOS_MODULES.find(m => m.id === phaseId);
    if (eMod) {
        const activeV = getActiveVariationForModule(phaseId);
        if (DEFAULT_MODULE_VARIATIONS[phaseId]) {
            return getModuleVariationItems(phaseId);
        }
        if (eMod.subType === 'SYM_DISC') return ['A', 'B', 'E', 'M', 'P', 'S'];
        if (eMod.subType === 'MIRROR_GRAPH') return ['b', 'd', 'p', 'q', 'E', 'S'];
        if (eMod.subType === 'VOWELS_PURE') return ['A', 'E', 'I', 'O', 'U'];
        if (eMod.subType === 'CLASS_VC') return ['F','V','M','N','S','L','P','B','T','D', ...vowels];
        if (eMod.subType === 'RHYME') {
            const rList = RHYME_VARIATIONS[activeV] || RHYME_VARIATIONS[1];
            return rList.map(r => `${r.target} ↔ ${r.match}`);
        }
        if (eMod.subType === 'ALLITERATION') {
            const aList = ALLIT_VARIATIONS[activeV] || ALLIT_VARIATIONS[1];
            return aList.map(a => `${a.target} ↔ ${a.match}`);
        }
        if (eMod.subType === 'CONT_PHON') return ['F','V','M','N','S','Z','L'];
        if (eMod.subType === 'CLASS_SP') return ['FA','MA','LA','SA','BO','TA', 'BOLA','MALA','FACA','SAPO','BOLO','GATO'];
        if (eMod.subType === 'CLASS_TOTAL_MM') return ['A','E','I','O','U','F','M','L','P','B','FA','MA','LA','BO','BOLA','GATO','MALA','FACA'];
        if (eMod.subType === 'OCCL_PHON') return ['P','B','T','D'];
        if (eMod.subType === 'MIN_PAIRS') {
            return MINIMAL_PAIRS_DB.filter(p => !p.var || p.var === activeV).map(p => `${p.target} / ${p.distractor}`);
        }
        if (eMod.subType === 'SYNTACTIC_WH') return ['Quem realizou a ação?', 'O que fez?', 'Onde aconteceu?'];
        if (eMod.subType === 'INTRUDER_WORD') return NARRATIVES_DB.map(n => n.intruderSentence.join(' '));
        if (eMod.subType === 'CHRONO_SEQ') return NARRATIVES_DB.map((_, i) => `Sequência 3 Passos #${i + 1}`);
    }
    if (phaseId === 'VOGAIS') return [...vowels];
    if (phaseId === 'ENCONTROS') return [...encounters];
    if (phaseId === 'PSEUDOPALAVRAS') return generatePseudoWords();
    if (phaseId === 'PALAVRAS') {
        let pw = (state.customWords || '').split(',').map(w => w.trim().toUpperCase()).filter(w => w.length > 0);
        return [...new Set(pw)];
    }
    return generateSyllables(phaseId);
}

function getCategory(item) {
    if (vowels.includes(item)) return 'VOGAL';
    if (item.length === 1 && !vowels.includes(item)) return 'CONSOANTE';
    if (WORD_BANK[item] || item.length >= 4) return 'PALAVRA';
    return 'SÍLABA';
}

/* ============================================================================
   11. INICIALIZADOR UNIFICADO DE JOGOS
   ============================================================================ */
function ensureSessionTimerStarted() {
    if (state.settings.timer.enabled) {
        if (!state.session.endTime && !state.session.expired) {
            state.session.endTime = Date.now() + (state.settings.timer.min * 60000);
            saveState();
        }
        if (state.session.expired) {
            triggerTimeUp();
            return false;
        }
        if (!timerInterval) timerInterval = setInterval(checkTimer, 1000);
        document.getElementById('header-timer-icon').style.display = 'flex';
    }
    return true;
}

function resetSessionStats(activeCycles, trialCount) {
    return {
        c1: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(1) ? trialCount : 0 },
        c2: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(2) ? trialCount : 0 },
        c3: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(3) ? trialCount : 0 },
        c4: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(4) ? trialCount : 0 },
        c5: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(5) ? trialCount : 0 }
    };
}

function startLegacyGame(phaseId) {
    if (phaseId === 'PALAVRAS') {
        document.getElementById('custom-words-input').value = state.customWords || '';
        checkWordsInput();
        document.getElementById('modal-words').style.display = 'flex';
        return;
    }
    if (!ensureSessionTimerStarted()) return;

    const pool = getPhasePool(phaseId);
    const isOnlyCycle3 = (phaseId === 'PSEUDOPALAVRAS');
    const targetCount = isOnlyCycle3 ? 10 : 5;
    const targets = shuffleArray(pool).slice(0, targetCount);

    let activeCycles = [];
    if (isOnlyCycle3) {
        activeCycles = [3];
    } else {
        if (state.settings.stages.c1) activeCycles.push(1);
        if (state.settings.stages.c2) activeCycles.push(2);
        if (state.settings.stages.c3) activeCycles.push(3);
        if (activeCycles.length === 0) activeCycles = [1];
    }

    undoSnapshot = null;
    session = {
        phase: phaseId,
        eidosMod: null,
        activeVar: 1,
        pool,
        trials: targets,
        activeCycles,
        currentCycleIdx: 0,
        currentCycle: activeCycles[0],
        isOnlyCycle3,
        isPreReq: false,
        currentTrialIdx: 0,
        attemptsOnCurrent: 0,
        currentRenderedOptions: null,
        isRepeating: false,
        latencies: [],
        stats: resetSessionStats(activeCycles, targets.length)
    };
    openGame();
    renderTrial();
}

function startPhonologicalModelingModule(modId) {
    if (!ensureSessionTimerStarted()) return;
    const pm = PHONOLOGICAL_ALPHABET_MODULES.find(m => m.id === modId);
    if (!pm) return;

    const modDescriptor = {
        id: pm.id,
        code: 'FON',
        level: 'FONOLOGICO',
        title: pm.title,
        desc: pm.desc,
        engine: 'PHON_MODEL',
        subType: 'PHON_MODELING',
        letter: pm.letter,
        varIdx: pm.varIdx,
        isAudioModel: true
    };

    const trials = [{ letter: pm.letter, varIdx: pm.varIdx, title: pm.title }];
    const activeCycles = [1, 2]; // Ciclo 1 = Fase A (Exposição), Ciclo 2 = Fase B (Slider)

    undoSnapshot = null;
    session = {
        phase: pm.id,
        eidosMod: modDescriptor,
        activeVar: 1,
        pool: [pm.letter],
        trials,
        activeCycles,
        currentCycleIdx: 0,
        currentCycle: 1,
        isOnlyCycle3: false,
        isPreReq: false,
        currentTrialIdx: 0,
        attemptsOnCurrent: 0,
        currentRenderedOptions: null,
        isRepeating: false,
        latencies: [],
        stats: resetSessionStats(activeCycles, trials.length)
    };
    openGame();
    renderTrial();
}

function startEidosModule(modId) {
    if (!ensureSessionTimerStarted()) return;
    const mod = EIDOS_MODULES.find(m => m.id === modId);
    if (!mod) return;

    const activeVar = getActiveVariationForModule(modId);
    let pool = getPhasePool(modId);
    let trials = [];
    let activeCycles = [1];
    let isPreReq = false;

    switch (mod.subType) {
        case 'TRACKING':
            trials = shuffleArray(getModuleVariationItems(modId)).slice(0, 5);
            break;
        case 'SYM_DISC':
            trials = ['A', 'B', 'E', 'M', 'P', 'S'];
            break;
        case 'WORD_IDENT_MM': {
            const wList = shuffleArray(getModuleVariationItems(modId));
            trials = [
                wList.slice(0, 3),
                shuffleArray(wList).slice(0, 3),
                shuffleArray(wList).slice(0, 3),
                shuffleArray(wList).slice(0, 3)
            ];
            break;
        }
        case 'MIRROR_GRAPH':
            trials = ['b', 'd', 'p', 'q', 'E', 'S'];
            break;
        case 'VOWELS_PURE':
        case 'CONT_PHON':
        case 'OCCL_PHON':
        case 'CV_FUSION':
        case 'CG_ALL_SOUNDS':
        case 'QU_GU_SOUNDS':
            trials = shuffleArray(pool).slice(0, 6);
            activeCycles = [];
            if (state.settings.stages.c1) activeCycles.push(1);
            if (state.settings.stages.c2) activeCycles.push(2);
            if (state.settings.stages.c3) activeCycles.push(3);
            if (activeCycles.length === 0) activeCycles = [1];
            break;
        case 'CLASS_VC':
        case 'CLASS_SP':
            isPreReq = true;
            trials = shuffleArray(pool).slice(0, 8);
            activeCycles = [];
            if (state.settings.stages.c1) activeCycles.push(1);
            if (state.settings.stages.c2) activeCycles.push(2);
            if (activeCycles.length === 0) activeCycles = [1];
            break;
        case 'CLASS_TOTAL_MM':
            trials = [1, 2, 3, 4];
            break;
        case 'RHYME':
            trials = shuffleArray(RHYME_VARIATIONS[activeVar] || RHYME_VARIATIONS[1]);
            break;
        case 'ALLITERATION':
            trials = shuffleArray(ALLIT_VARIATIONS[activeVar] || ALLIT_VARIATIONS[1]);
            break;
        case 'SYL_COUNT':
            trials = shuffleArray(getModuleVariationItems(modId)).slice(0, 6);
            break;
        case 'SYL_WORD_BUILD':
            trials = shuffleArray(getModuleVariationItems(modId)).slice(0, 5);
            break;
        case 'FIG_WORD_MM': {
            const fwList = shuffleArray(getModuleVariationItems(modId));
            trials = [
                fwList.slice(0, 3),
                shuffleArray(fwList).slice(0, 3),
                shuffleArray(fwList).slice(0, 3),
                shuffleArray(fwList).slice(0, 3)
            ];
            break;
        }
        case 'SEMANTIC_CAT_MM': {
            const scList = shuffleArray(getModuleVariationItems(modId));
            trials = [
                scList.slice(0, 3),
                shuffleArray(scList).slice(0, 3),
                shuffleArray(scList).slice(0, 3),
                shuffleArray(scList).slice(0, 3)
            ];
            break;
        }
        case 'COPY_CRMTS':
        case 'DICT_CRMTS':
            trials = shuffleArray(getModuleVariationItems(modId)).slice(0, 5);
            break;
        case 'WORD_SPACE':
            trials = shuffleArray(getModuleVariationItems(modId)).slice(0, 4).map(s =>
                Array.isArray(s) ? s : String(s).trim().toUpperCase().split(/\s+/)
            );
            break;
        case 'MIN_PAIRS': {
            const varPairs = MINIMAL_PAIRS_DB.filter(p => !p.var || p.var === activeVar);
            trials = shuffleArray(varPairs.length >= 4 ? varPairs : MINIMAL_PAIRS_DB).slice(0, 6);
            break;
        }
        case 'WORDS_EQ': {
            trials = shuffleArray(pool).slice(0, 5);
            activeCycles = [];
            if (state.settings.stages.c1) activeCycles.push(1);
            if (state.settings.stages.c2) activeCycles.push(2);
            if (state.settings.stages.c3) activeCycles.push(3);
            const allHaveIcons = trials.every(w => WORD_BANK[w] && WORD_BANK[w].icon);
            if (state.settings.stages.c4 && allHaveIcons) {
                activeCycles.push(4);
                activeCycles.push(5);
            }
            if (activeCycles.length === 0) activeCycles = [1];
            break;
        }
        case 'SPRINT_3S':
            trials = shuffleArray(getModuleVariationItems(modId)).slice(0, 8);
            break;
        case 'RECOMB_STT':
            trials = shuffleArray(getModuleVariationItems(modId).map(s => s.trim())).slice(0, 6);
            activeCycles = [3];
            break;
        case 'SYNTACTIC_GROUP':
            trials = shuffleArray(getModuleVariationItems(modId)).slice(0, 4);
            break;
        case 'SENTENCE_BUILD':
            trials = shuffleArray(getModuleVariationItems(modId)).slice(0, 5).map(s => {
                const clean = String(s).replace(/[.!?]/g, '').trim().toUpperCase();
                return {
                    shortSpoken: clean,
                    wordsArray: clean.split(/\s+/)
                };
            });
            break;
        case 'SYNTACTIC_WH':
            trials = [
                generateLogicalSentenceTrial(),
                generateLogicalSentenceTrial(),
                generateLogicalSentenceTrial(),
                generateLogicalSentenceTrial(),
                generateLogicalSentenceTrial()
            ];
            break;
        case 'INTRUDER_WORD':
            trials = NARRATIVES_DB.map(n => ({
                words: n.intruderSentence,
                intruder: n.intruderWord,
                fix: n.correctReplacement,
                distractors: n.distractorReplacements || ['PEDRA', 'JANELA']
            }));
            break;
        case 'CHRONO_SEQ':
            trials = NARRATIVES_DB.map(n => ({
                steps: n.steps
            }));
            break;
    }

    undoSnapshot = null;
    session = {
        phase: mod.id,
        eidosMod: mod,
        activeVar,
        pool,
        trials,
        activeCycles,
        currentCycleIdx: 0,
        currentCycle: activeCycles[0],
        isOnlyCycle3: (mod.subType === 'RECOMB_STT'),
        isPreReq,
        currentTrialIdx: 0,
        attemptsOnCurrent: 0,
        currentRenderedOptions: null,
        isRepeating: false,
        latencies: [],
        stats: resetSessionStats(activeCycles, trials.length)
    };
    openGame();
    renderTrial();
}

function getTopographicClasses() {
    const tCfg = getTaskConfig(session.phase);
    if (tCfg && tCfg.font && tCfg.font !== 'GLOBAL') {
        if (tCfg.font === 'LOWER') return 'topo-lower';
        if (tCfg.font === 'SERIF') return 'topo-serif';
        if (tCfg.font === 'SCHOOL') return 'topo-school';
        return '';
    }
    if (!state.settings.topoVar) return '';
    const classes = ['', 'topo-serif', 'topo-school', 'topo-lower'];
    return classes[Math.floor(Math.random() * classes.length)];
}

/* ============================================================================
   12. MOTOR DE RENDERIZAÇÃO, DMTS (TIME DELAY) E TIMEOUT DE LATÊNCIA
   ============================================================================ */
function startResponseTimeoutIfConfigured() {
    if (responseTimeoutTimer) clearTimeout(responseTimeoutTimer);
    const tCfg = getTaskConfig(session.phase);
    if (!tCfg || !tCfg.responseTimeout || tCfg.responseTimeout <= 0) return;

    responseTimeoutTimer = setTimeout(() => {
        if (blockClicks) return;
        blockClicks = true;
        playSound('click');
        const cat = getCurrentStatCat();
        if (!session.isRepeating) session.stats[cat].erro++;
        advanceTrial();
    }, tCfg.responseTimeout * 1000);
}

function applyDMTSWrapperIfEnabled(modelArea, compArea, isVisualModel) {
    const tCfg = getTaskConfig(session.phase);
    if (!isVisualModel || !tCfg || !tCfg.dmtsDelay || tCfg.dmtsDelay <= 0) {
        setTimeout(() => {
            blockClicks = false;
            startResponseTimeoutIfConfigured();
        }, state.settings.latency);
        return;
    }

    const delaySec = tCfg.dmtsDelay;
    compArea.style.display = 'none';
    blockClicks = false;

    const modelCardEl = modelArea.querySelector('.model-card');
    if (modelCardEl) {
        modelCardEl.style.cursor = 'pointer';
        const hint = document.createElement('div');
        hint.style.fontSize = '0.95rem';
        hint.style.fontWeight = '800';
        hint.style.color = 'var(--primary-dark)';
        hint.style.marginTop = '8px';
        hint.innerHTML = `<span class="material-icons" style="font-size:1.1rem; vertical-align:middle;">visibility</span> Toque para observar`;
        modelCardEl.appendChild(hint);

        modelCardEl.onclick = () => {
            modelCardEl.onclick = null;
            playSound('click');
            modelArea.innerHTML = `
                <div class="model-card" style="border-style:dotted; color:var(--text-light); font-size:1.4rem;">
                    <span class="material-icons" style="font-size:2.8rem; color:var(--primary); margin-bottom:6px;">hourglass_top</span>
                    Aguarde ${delaySec}s...
                </div>
            `;
            dmtsDelayTimer = setTimeout(() => {
                modelArea.innerHTML = '';
                compArea.style.display = 'flex';
                trialStartTime = Date.now();
                startResponseTimeoutIfConfigured();
            }, delaySec * 1000);
        };
    } else {
        compArea.style.display = 'flex';
        startResponseTimeoutIfConfigured();
    }
}

function renderTrial(restoredOptions = null) {
    clearAllTrialTimers();
    session.attemptsOnCurrent = 0;
    blockClicks = true;
    trialStartTime = Date.now();

    const modelArea = document.getElementById('model-area');
    const compArea = document.getElementById('comparisons-area');
    const badge = document.getElementById('cycle-indicator');
    const counterPill = document.getElementById('trial-counter-pill');
    const fluencyPill = document.getElementById('fluency-timer-pill');
    const abaDock = document.getElementById('aba-dock');

    modelArea.innerHTML = '';
    compArea.innerHTML = '';
    compArea.style.display = 'flex';
    compArea.classList.remove('locked-pointer');
    fluencyPill.style.display = 'none';
    abaDock.style.display = 'none';
    document.getElementById('btn-dock-undo').style.display = undoSnapshot ? 'inline-flex' : 'none';

    counterPill.innerText = `${session.currentTrialIdx + 1} / ${session.trials.length}`;
    const target = session.trials[session.currentTrialIdx];

    const stdSubTypes = ['VOWELS_PURE', 'CV_FUSION', 'WORDS_EQ', 'CG_ALL_SOUNDS', 'QU_GU_SOUNDS', 'CLASS_VC', 'CLASS_SP', 'RECOMB_STT'];
    if (session.eidosMod && !stdSubTypes.includes(session.eidosMod.subType)) {
        renderSpecializedEidosTrial(session.eidosMod.subType, target, modelArea, compArea, badge, abaDock, fluencyPill);
        return;
    }

    const isHighlighted = state.reviewHighlights && state.reviewHighlights[target];
    const highlightStyle = isHighlighted ? 'border-color: var(--warning); background-color: var(--warning-light);' : '';
    const topoClass = getTopographicClasses();
    const wordObj = WORD_BANK[target];

    let optionsToRender = [];
    if (restoredOptions && Array.isArray(restoredOptions)) {
        optionsToRender = [...restoredOptions];
    } else if (session.isPreReq) {
        if (session.eidosMod && session.eidosMod.subType === 'CLASS_VC') optionsToRender = ['VOGAL', 'CONSOANTE'];
        else optionsToRender = ['SÍLABA', 'PALAVRA'];
    } else {
        optionsToRender = generateComparisons(target);
    }
    session.currentRenderedOptions = [...optionsToRender];

    if (session.currentCycle === 1) {
        badge.innerText = session.isPreReq ? "Ciclo 1: Classifique" : `Ciclo 1: Identidade Visual (Var ${session.activeVar})`;
        modelArea.innerHTML = `<div class="model-card ${topoClass}" style="${highlightStyle}">${target}</div>`;
        optionsToRender.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = `comp-card ${getTopographicClasses()}`;
            btn.innerText = opt;
            const isCorrect = session.isPreReq ? (getCategory(target) === opt) : (opt === target);
            btn.dataset.correct = isCorrect;
            btn.onclick = () => handleAnswer(isCorrect, btn);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
    } else if (session.currentCycle === 2) {
        badge.innerText = "Ciclo 2: Ouça e Encontre";
        const spokenModel = getPhoneticAudioModel(target);
        modelArea.innerHTML = `<button type="button" class="model-audio-btn" onclick="speakTTS('${spokenModel}')"><span class="material-icons">volume_up</span></button>`;
        speakTTS(spokenModel);
        optionsToRender.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            btn.innerHTML = formatStimulusTextHTML(opt);
            const isCorrect = session.isPreReq ? (getCategory(target) === opt) : (opt === target);
            btn.dataset.correct = isCorrect;
            btn.onclick = () => handleAnswer(isCorrect, btn);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, false);
    } else if (session.currentCycle === 3) {
        badge.innerText = (session.eidosMod && session.eidosMod.subType === 'RECOMB_STT')
            ? `Leitura Recombinativa (Var ${session.activeVar})`
            : "Ciclo 3: Leitura Oral";
        modelArea.innerHTML = `<div class="model-card ${topoClass}" style="${highlightStyle}">${formatStimulusTextHTML(target)}</div>`;
        abaDock.style.display = 'flex';

        if (state.settings.useMic) {
            compArea.innerHTML = `
                <div class="stt-area">
                    <input type="text" id="ghost-stt" class="ghost-input" tabindex="-1">
                    <p id="mic-feedback" style="color:var(--text-light); font-weight:800; font-size:1.2rem;">Segure o microfone e fale: '${target}'</p>
                    <div class="stt-controls">
                        <button type="button" class="stt-btn" id="mic-btn" onmousedown="startMicrophone()" onmouseup="stopMicrophone()" onmouseleave="stopMicrophone()" ontouchstart="event.preventDefault(); startMicrophone()" ontouchend="event.preventDefault(); stopMicrophone()">
                            <span class="material-icons">mic</span>
                        </button>
                    </div>
                </div>`;
        }
        setTimeout(() => {
            blockClicks = false;
            startResponseTimeoutIfConfigured();
        }, state.settings.latency);
    } else if (session.currentCycle === 4) {
        badge.innerText = "Ciclo 4: Figura → Palavra";
        const iconHTML = (wordObj && wordObj.icon)
            ? wordObj.icon
            : `<span class="material-icons" style="font-size:4.5rem; color:var(--primary);">image</span>`;
        modelArea.innerHTML = `<div class="model-card" style="font-size:5.2rem;">${iconHTML}</div>`;
        optionsToRender.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            btn.innerHTML = formatStimulusTextHTML(opt);
            const isCorrect = (opt === target);
            btn.dataset.correct = isCorrect;
            btn.onclick = () => handleAnswer(isCorrect, btn);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
    } else if (session.currentCycle === 5) {
        badge.innerText = "Ciclo 5: Palavra → Figura";
        modelArea.innerHTML = `<div class="model-card ${topoClass}">${formatStimulusTextHTML(target)}</div>`;
        optionsToRender.forEach(opt => {
            const btn = document.createElement('div');
            const optObj = WORD_BANK[opt];
            if (optObj && optObj.icon) {
                btn.className = 'comp-card img-only';
                btn.innerHTML = optObj.icon;
            } else {
                btn.className = 'comp-card';
                btn.innerHTML = formatStimulusTextHTML(opt);
            }
            const isCorrect = (opt === target);
            btn.dataset.correct = isCorrect;
            btn.onclick = () => handleAnswer(isCorrect, btn);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
    }

    // Garante que o Ciclo 1 também receba a colorização C/V se ativada na tarefa
    if (session.currentCycle === 1) {
        const mc = modelArea.querySelector('.model-card');
        if (mc && !mc.querySelector('.material-icons')) {
            mc.innerHTML = formatStimulusTextHTML(target);
        }
        compArea.querySelectorAll('.comp-card').forEach(c => {
            c.innerHTML = formatStimulusTextHTML(c.innerText);
        });
    }
}

function isVowelChar(ch) {
    return /^[AEIOUÁÉÍÓÚÂÊÔÃÕÜ]$/i.test(ch);
}

// Formata Consoante em Preto e Vogal em Vermelho (+ Borda Azul Silábica opcional)
function formatStimulusTextHTML(text, modId) {
    const rawStr = String(text || '');
    const tCfg = getTaskConfig(modId || session.phase);
    if (!tCfg || (!tCfg.colorCV && !tCfg.sylBox)) return rawStr;

    const upperKey = rawStr.trim().toUpperCase();
    const wBankObj = WORD_BANK[upperKey];

    const colorizeSegment = (seg) => {
        if (!tCfg.colorCV) return seg;
        return seg.split('').map(ch => {
            if (!/[A-ZÁÉÍÓÚÂÊÔÃÕÇÜ]/i.test(ch)) return ch;
            const colorHex = isVowelChar(ch) ? '#EF4444' : '#0F172A';
            return `<span style="color:${colorHex};">${ch}</span>`;
        }).join('');
    };

    const boxStyle = `display:inline-flex; align-items:center; justify-content:center; border:2.5px solid #2563EB; border-radius:10px; padding:1px 7px; margin:0 3px; background:#fff;`;

    if (tCfg.sylBox && wBankObj && Array.isArray(wBankObj.syllables)) {
        return wBankObj.syllables.map(s => `<span style="${boxStyle}">${colorizeSegment(s)}</span>`).join('');
    } else if (tCfg.sylBox && rawStr.length >= 2 && !rawStr.includes(' ')) {
        const chunks = rawStr.match(/[^AEIOUÁÉÍÓÚÂÊÔÃÕ]*[AEIOUÁÉÍÓÚÂÊÔÃÕ]+[^AEIOUÁÉÍÓÚÂÊÔÃÕ]?/gi) || [rawStr];
        return chunks.map(s => `<span style="${boxStyle}">${colorizeSegment(s)}</span>`).join('');
    }

    return colorizeSegment(rawStr);
}

function getPhoneticAudioModel(target) {
    if (session.eidosMod && session.eidosMod.subType === 'CONT_PHON') {
        const map = { 'F': 'fff', 'V': 'vvv', 'M': 'mmm', 'N': 'nnn', 'S': 'sss', 'Z': 'zzz', 'L': 'lll' };
        return map[target] || target;
    }
    return target;
}

/* ============================================================================
   13. RENDERIZADORES ESPECIALIZADOS (MULTIMODELO, CRMTS+STT, DMTS, ETC.)
   ============================================================================ */
function renderSpecializedEidosTrial(subType, target, modelArea, compArea, badge, abaDock, fluencyPill) {
    const topoClass = getTopographicClasses();

    // ALFABETO FONOLÓGICO: FASE A (EXPOSIÇÃO E MODELAGEM) E FASE B (PRODUÇÃO E SUSTENTAÇÃO VIA SLIDER)
    if (subType === 'PHON_MODELING') {
        const letter = target.letter || (session.eidosMod ? session.eidosMod.letter : 'A');
        const varIdx = target.varIdx || (session.eidosMod ? session.eidosMod.varIdx : '1');
        const imgPath = getMouthImagePath(letter, varIdx);

        if (session.currentCycle === 1) {
            // FASE A: Exposição e Modelagem Articulatória
            badge.innerText = `Fase A: Exposição e Modelagem (${target.title || letter})`;
            modelArea.innerHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px;">
                    <div class="mouth-articulatory-box" style="width:220px; height:220px; border-radius:28px; border:3px solid var(--primary); background:#FFFFFF; display:flex; align-items:center; justify-content:center; overflow:hidden; box-shadow:var(--shadow-soft); position:relative;">
                        <img src="${imgPath}" alt="Boca Articulatória ${letter}" style="width:100%; height:100%; object-fit:contain;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div style="display:none; flex-direction:column; align-items:center; justify-content:center; color:var(--primary-dark); font-weight:900;">
                            <span style="font-size:4.2rem;" class="${topoClass}">${formatStimulusTextHTML(letter)}</span>
                            <span style="font-size:0.8rem; color:var(--text-light); margin-top:4px;">Boca b-${letter.toLowerCase()}-${varIdx}.webp</span>
                        </div>
                    </div>
                </div>
            `;

            compArea.innerHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">
                    <button type="button" class="btn-action" id="btn-listen-train-phoneme" style="padding:18px 34px; font-size:1.3rem; border-radius:22px; box-shadow:0 10px 25px rgba(0, 172, 193, 0.28);">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                        Ouvir e Treinar
                    </button>
                    <span style="font-size:0.88rem; font-weight:800; color:var(--text-light);">Reproduz o fonema 2x seguidas (intervalo de 600ms). Valide na barra abaixo para ir à Fase B.</span>
                </div>
            `;

            const btnListen = document.getElementById('btn-listen-train-phoneme');
            if (btnListen) {
                btnListen.onclick = () => {
                    playSound('click');
                    playPhonemeAudioFile(letter, varIdx, true);
                };
            }

            // Reproduz automaticamente na abertura da Fase A
            playPhonemeAudioFile(letter, varIdx, true);
            abaDock.style.display = 'flex';
            setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
            return;
        } else {
            // FASE B: Produção e Sustentação via Slider (drag-track & drag-box sem cloneNode)
            badge.innerText = `Fase B: Produção e Sustentação (${target.title || letter})`;
            modelArea.innerHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
                    <h3 style="font-size:1.75rem; font-weight:900; color:var(--text); text-align:center;">Arraste e repita o som</h3>
                    <p style="font-size:0.95rem; font-weight:700; color:var(--text-light);">Sustente a emissão vocal do fonema enquanto desliza a letra até o final</p>
                </div>
            `;

            compArea.innerHTML = `
                <div style="width:100%; max-width:680px; display:flex; flex-direction:column; align-items:center; gap:18px; padding:12px 0;">
                    <div id="phon-drag-track" class="drag-track" style="width:100%; height:88px; background:#F1F5F9; border:3px solid var(--border); border-radius:26px; position:relative; display:flex; align-items:center; padding:8px; box-shadow:inset 0 3px 8px rgba(15,23,42,0.06); touch-action:none; overflow:hidden;">
                        <div id="phon-drag-fill" style="position:absolute; left:0; top:0; bottom:0; width:0px; background:var(--primary-light); transition:none; pointer-events:none;"></div>
                        <div style="position:absolute; right:22px; display:flex; align-items:center; gap:6px; color:var(--text-light); font-weight:900; font-size:0.95rem; pointer-events:none;">
                            <span>CHEGADA</span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </div>
                        <div id="phon-drag-box" class="drag-box ${topoClass}" style="width:104px; height:70px; background:var(--primary); color:#FFFFFF; border-radius:20px; display:flex; align-items:center; justify-content:center; font-size:2.4rem; font-weight:900; cursor:grab; position:relative; z-index:5; box-shadow:0 8px 20px rgba(0,172,193,0.32); user-select:none; touch-action:none; transform:translateX(0px);">
                            ${formatStimulusTextHTML(letter)}
                        </div>
                    </div>
                </div>
            `;

            abaDock.style.display = 'flex';
            const trackEl = document.getElementById('phon-drag-track');
            const boxEl = document.getElementById('phon-drag-box');
            const fillEl = document.getElementById('phon-drag-fill');

            let isDragging = false;
            let startX = 0;
            let currentX = 0;
            let maxSlide = 0;
            let completedSlide = false;

            const resetDragPosition = () => {
                isDragging = false;
                currentX = 0;
                boxEl.style.transition = 'transform 0.22s ease';
                fillEl.style.transition = 'width 0.22s ease';
                boxEl.style.transform = 'translateX(0px)';
                fillEl.style.width = '0px';
            };

            boxEl.onpointerdown = (e) => {
                if (blockClicks || completedSlide) return;
                isDragging = true;
                boxEl.style.transition = 'none';
                fillEl.style.transition = 'none';
                maxSlide = Math.max(80, trackEl.clientWidth - boxEl.offsetWidth - 16);
                startX = e.clientX - currentX;
                if (boxEl.setPointerCapture) {
                    try { boxEl.setPointerCapture(e.pointerId); } catch (err) {}
                }
                playPhonemeAudioFile(letter, varIdx, false);
            };

            boxEl.onpointermove = (e) => {
                if (!isDragging || completedSlide) return;
                let delta = e.clientX - startX;
                if (delta < 0) delta = 0;
                if (delta > maxSlide) delta = maxSlide;
                currentX = delta;
                boxEl.style.transform = `translateX(${currentX}px)`;
                fillEl.style.width = `${currentX + (boxEl.offsetWidth / 2)}px`;

                if (currentX >= maxSlide * 0.94) {
                    completedSlide = true;
                    isDragging = false;
                    boxEl.style.transform = `translateX(${maxSlide}px)`;
                    fillEl.style.width = '100%';
                    fillEl.style.background = 'var(--success-light)';
                    boxEl.style.background = 'var(--success)';
                    handleAnswer(true, trackEl);
                }
            };

            const endDrag = () => {
                if (!isDragging || completedSlide) return;
                resetDragPosition();
            };

            boxEl.onpointerup = endDrag;
            boxEl.onpointercancel = endDrag;

            setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
            return;
        }
    }

    // 2.4 & 3.1: REFATORAÇÃO DO MÓDULO DE CONSOANTES (CONT_PHON & OCCL_PHON)
    // Ciclo 1: Som do Fonema -> Escolher Imagem da Boca Articulatória
    // Ciclo 2: Som do Fonema -> Escolher Letra Escrita (Grafema)
    // Ciclo 3: Letra Escrita -> Resposta Oral do Aluno (Apenas botões de registro do aplicador)
    if (subType === 'CONT_PHON' || subType === 'OCCL_PHON') {
        const isCont = (subType === 'CONT_PHON');
        const modLabel = isCont ? '2.4 Consoantes Contínuas' : '3.1 Consoantes Oclusivas';
        let optionsToRender = session.currentRenderedOptions;
        if (!optionsToRender || !Array.isArray(optionsToRender) || optionsToRender.length === 0) {
            optionsToRender = generateComparisons(target);
            session.currentRenderedOptions = [...optionsToRender];
        }

        if (session.currentCycle === 1) {
            badge.innerText = `${modLabel} • Ciclo 1: Som → Boca`;
            modelArea.innerHTML = `
                <button type="button" class="model-audio-btn" id="btn-cons-audio-c1" title="Ouvir Fonema">
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                </button>
            `;
            document.getElementById('btn-cons-audio-c1').onclick = () => playPhonemeAudioFile(target, '1', false);
            playPhonemeAudioFile(target, '1', false);

            optionsToRender.forEach(opt => {
                const btn = document.createElement('div');
                btn.className = 'comp-card';
                btn.style.padding = '10px';
                const mPath = getMouthImagePath(opt, '1');
                btn.innerHTML = `
                    <img src="${mPath}" alt="Boca ${opt}" style="width:110px; height:110px; object-fit:contain; border-radius:14px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div style="display:none; flex-direction:column; align-items:center; justify-content:center;">
                        <span style="font-size:2.2rem; font-weight:900;">${opt}</span>
                        <span style="font-size:0.7rem; color:var(--text-light);">b-${String(opt).toLowerCase()}-1.webp</span>
                    </div>
                `;
                const isCorrect = (opt === target);
                btn.dataset.correct = isCorrect;
                btn.onclick = () => handleAnswer(isCorrect, btn);
                compArea.appendChild(btn);
            });
            applyDMTSWrapperIfEnabled(modelArea, compArea, false);
            return;
        } else if (session.currentCycle === 2) {
            badge.innerText = `${modLabel} • Ciclo 2: Som → Letra`;
            modelArea.innerHTML = `
                <button type="button" class="model-audio-btn" id="btn-cons-audio-c2" title="Ouvir Fonema">
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                </button>
            `;
            document.getElementById('btn-cons-audio-c2').onclick = () => playPhonemeAudioFile(target, '1', false);
            playPhonemeAudioFile(target, '1', false);

            optionsToRender.forEach(opt => {
                const btn = document.createElement('div');
                btn.className = `comp-card ${topoClass}`;
                btn.innerHTML = formatStimulusTextHTML(opt);
                const isCorrect = (opt === target);
                btn.dataset.correct = isCorrect;
                btn.onclick = () => handleAnswer(isCorrect, btn);
                compArea.appendChild(btn);
            });
            applyDMTSWrapperIfEnabled(modelArea, compArea, false);
            return;
        } else {
            // Ciclo 3: Letra escrita e resposta oral do aluno avaliada exclusivamente pelos botões de registro do aplicador
            badge.innerText = `${modLabel} • Ciclo 3: Letra → Fala do Aluno`;
            modelArea.innerHTML = `<div class="model-card ${topoClass}" style="font-size:4.6rem;">${formatStimulusTextHTML(target)}</div>`;
            compArea.innerHTML = `<p style="color:var(--text-light); font-weight:800; font-size:1.1rem;">Solicite a emissão oral do som da letra e registre na barra do aplicador abaixo.</p>`;
            abaDock.style.display = 'flex';
            setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
            return;
        }
    }

    // 1.1: RASTREIO VISUAL EM 2 A 3 LINHAS (ESQUERDA->DIREITA, CIMA->BAIXO)
    if (subType === 'TRACKING') {
        badge.innerText = `1.1 Rastreio Visual (Var ${session.activeVar})`;
        const words = String(target).trim().split(/\s+/);
        const total = words.length;
        let formattedLines = '';

        if (total >= 6) {
            const l1End = Math.ceil(total / 3);
            const l2End = Math.ceil((total * 2) / 3);
            const line1 = words.slice(0, l1End).map(w => formatStimulusTextHTML(w)).join(' ');
            const line2 = words.slice(l1End, l2End).map(w => formatStimulusTextHTML(w)).join(' ');
            const line3 = words.slice(l2End).map(w => formatStimulusTextHTML(w)).join(' ');
            formattedLines = `<span class="anchor-dot-start"></span>${line1}<br>${line2}<br>${line3}<span class="anchor-square-end"></span>`;
        } else {
            const mid = Math.ceil(total / 2);
            const line1 = words.slice(0, mid).map(w => formatStimulusTextHTML(w)).join(' ');
            const line2 = words.slice(mid).map(w => formatStimulusTextHTML(w)).join(' ');
            formattedLines = `<span class="anchor-dot-start"></span>${line1}<br>${line2}<span class="anchor-square-end"></span>`;
        }

        modelArea.innerHTML = `<div class="tracking-multiline-box ${topoClass}">${formattedLines}</div>`;
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    // 1.2: DISCRIMINAÇÃO DE SÍMBOLOS
    if (subType === 'SYM_DISC') {
        badge.innerText = `1.2 Discriminação de Símbolos`;
        modelArea.innerHTML = `<div class="model-card" style="font-size:2.2rem;">LETRA</div>`;
        const distractors = shuffleArray(['7', '4', '9', '★', '☀', '♣', '8', '♥']).slice(0, state.settings.opts - 1);
        const opts = shuffleArray([target, ...distractors]);
        opts.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            btn.innerHTML = formatStimulusTextHTML(opt);
            const isCorrect = (opt === target);
            btn.dataset.correct = isCorrect;
            btn.onclick = () => handleAnswer(isCorrect, btn);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
        return;
    }

    // 1.3, 2.8, 3.2, 3.3: MOTOR MTS MULTIMODELO (3x3 OU 4x4 SIMULTÂNEO)
    if (['WORD_IDENT_MM', 'CLASS_TOTAL_MM', 'FIG_WORD_MM', 'SEMANTIC_CAT_MM'].includes(subType)) {
        let pairs = [];
        if (subType === 'WORD_IDENT_MM') {
            badge.innerText = `1.3 Identidade Multimodelo (Var ${session.activeVar})`;
            const words = Array.isArray(target) ? target : ['BOLA', 'MALA', 'SAPO'];
            pairs = words.map(w => ({ id: w, leftHTML: formatStimulusTextHTML(w), rightHTML: formatStimulusTextHTML(w), speak: w }));
        } else if (subType === 'CLASS_TOTAL_MM') {
            badge.innerText = `2.8 Estrutura Total Multimodelo`;
            const vPick = shuffleArray(vowels)[0];
            const cPick = shuffleArray(['F','M','L','P','B','T','S'])[0];
            const sPick = shuffleArray(['FA','MA','LA','BO','TA','SA'])[0];
            const wPick = shuffleArray(['BOLA','GATO','MALA','FACA','SAPO'])[0];
            pairs = [
                { id: 'VOGAL', leftHTML: formatStimulusTextHTML(vPick), rightHTML: 'VOGAL', speak: vPick },
                { id: 'CONSOANTE', leftHTML: formatStimulusTextHTML(cPick), rightHTML: 'CONSOANTE', speak: cPick },
                { id: 'SÍLABA', leftHTML: formatStimulusTextHTML(sPick), rightHTML: 'SÍLABA', speak: sPick },
                { id: 'PALAVRA', leftHTML: formatStimulusTextHTML(wPick), rightHTML: 'PALAVRA', speak: wPick }
            ];
        } else if (subType === 'FIG_WORD_MM') {
            badge.innerText = `3.2 Relação Figura-Palavra Multimodelo`;
            const words = Array.isArray(target) ? target : ['BOLA', 'GATO', 'BOLO'];
            pairs = words.map(w => {
                const wObj = WORD_BANK[w] || { icon: '🖼️' };
                return { id: w, leftHTML: `<span style="font-size:3rem;">${wObj.icon}</span>`, rightHTML: formatStimulusTextHTML(w), speak: w };
            });
        } else if (subType === 'SEMANTIC_CAT_MM') {
            badge.innerText = `3.3 Categorização Semântica Multimodelo`;
            const words = Array.isArray(target) ? target : ['GATO', 'BOLO', 'BOLA'];
            pairs = words.map((w, idx) => {
                const wObj = WORD_BANK[w] || { cat: 'OBJETO' };
                return { id: `${w}_${idx}`, matchCat: wObj.cat, leftHTML: formatStimulusTextHTML(w), rightHTML: wObj.cat, speak: w };
            });
        }

        modelArea.style.minHeight = '20px';
        modelArea.innerHTML = `<p style="font-weight:800; color:var(--text-light); font-size:0.98rem;">Toque em um item à esquerda e depois no seu par correspondente à direita:</p>`;

        const board = document.createElement('div');
        board.className = 'multimodel-board';
        const colLeft = document.createElement('div');
        colLeft.className = 'mm-column';
        const colRight = document.createElement('div');
        colRight.className = 'mm-column';

        let selectedLeft = null;
        let completedCount = 0;

        const leftItems = shuffleArray(pairs);
        const rightItems = shuffleArray(pairs);

        leftItems.forEach(p => {
            const cardL = document.createElement('div');
            cardL.className = `mm-card ${topoClass}`;
            cardL.innerHTML = `<span>${p.leftHTML}</span><span class="material-icons" style="color:var(--text-light);">arrow_forward</span>`;
            cardL.onclick = () => {
                if (blockClicks || cardL.classList.contains('paired')) return;
                playSound('click');
                if (p.speak) speakTTS(p.speak);
                colLeft.querySelectorAll('.mm-card').forEach(c => c.classList.remove('selected'));
                cardL.classList.add('selected');
                selectedLeft = { data: p, el: cardL };
            };
            colLeft.appendChild(cardL);
        });

        rightItems.forEach(p => {
            const cardR = document.createElement('div');
            cardR.className = `mm-card ${topoClass}`;
            cardR.innerHTML = `<span>${p.rightHTML}</span><span class="material-icons" style="color:var(--border);">check_circle</span>`;
            cardR.onclick = () => {
                if (blockClicks || cardR.classList.contains('paired') || !selectedLeft) return;
                const isMatch = (subType === 'SEMANTIC_CAT_MM')
                    ? (selectedLeft.data.matchCat === p.matchCat)
                    : (selectedLeft.data.id === p.id);

                if (isMatch) {
                    playSound('win');
                    selectedLeft.el.classList.remove('selected');
                    selectedLeft.el.classList.add('paired');
                    cardR.classList.add('paired');
                    cardR.querySelector('.material-icons').style.color = 'var(--success)';
                    selectedLeft = null;
                    completedCount++;
                    if (completedCount === pairs.length) {
                        handleAnswer(true, board);
                    }
                } else {
                    session.attemptsOnCurrent++;
                    playSound('click');
                    cardR.classList.add('feedback-error');
                    setTimeout(() => cardR.classList.remove('feedback-error'), 380);
                    if (session.attemptsOnCurrent >= 3) {
                        handleAnswer(false, board);
                    }
                }
            };
            colRight.appendChild(cardR);
        });

        board.appendChild(colLeft);
        board.appendChild(colRight);
        compArea.appendChild(board);
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    // 1.4: ORIENTAÇÃO DO GRAFEMA
    if (subType === 'MIRROR_GRAPH') {
        badge.innerText = `1.4 Orientação do Grafema`;
        modelArea.innerHTML = `<div class="model-card" style="font-size:4.4rem;">${formatStimulusTextHTML(target)}</div>`;
        const transforms = [
            { label: target, style: '', correct: true },
            { label: target, style: 'transform: scaleX(-1);', correct: false },
            { label: target, style: 'transform: scaleY(-1);', correct: false },
            { label: target, style: 'transform: rotate(180deg);', correct: false }
        ].slice(0, state.settings.opts);
        shuffleArray(transforms).forEach(item => {
            const btn = document.createElement('div');
            btn.className = 'comp-card';
            btn.innerHTML = `<span style="display:inline-block; ${item.style}">${formatStimulusTextHTML(item.label)}</span>`;
            btn.dataset.correct = item.correct;
            btn.onclick = () => handleAnswer(item.correct, btn);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
        return;
    }

    // 2.1 & 2.2: RIMAS E ALITERAÇÃO
    if (subType === 'RHYME' || subType === 'ALLITERATION') {
        const isRhyme = subType === 'RHYME';
        badge.innerText = isRhyme ? `2.1 Rimas (Var ${session.activeVar})` : `2.2 Aliteração (Var ${session.activeVar})`;
        modelArea.innerHTML = `
            <button type="button" class="model-audio-btn" onclick="speakTTS('${target.target}')"><span class="material-icons">volume_up</span></button>
        `;
        speakTTS(target.target);

        const rawOpts = [target.match, ...target.distractors.slice(0, state.settings.opts - 1)];
        shuffleArray(rawOpts).forEach(wKey => {
            const wObj = WORD_BANK[wKey];
            const btn = document.createElement('div');
            if (wObj && wObj.icon) {
                btn.className = 'comp-card img-only';
                btn.innerHTML = `<div>${wObj.icon}</div>`;
            } else {
                btn.className = `comp-card ${topoClass}`;
                btn.innerHTML = formatStimulusTextHTML(wKey);
            }
            const isCorrect = (wKey === target.match);
            btn.dataset.correct = isCorrect;
            btn.onclick = () => handleAnswer(isCorrect, btn);
            compArea.appendChild(btn);
        });
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    // 2.3: SEGMENTAÇÃO SILÁBICA ORAL
    if (subType === 'SYL_COUNT') {
        badge.innerText = `2.3 Segmentação Silábica (Var ${session.activeVar})`;
        const wObj = WORD_BANK[target] || { count: Math.max(1, Math.ceil(target.length / 2)) };
        let tapCount = 0;
        modelArea.innerHTML = `
            <button type="button" class="model-audio-btn" onclick="speakTTS('${target}')"><span class="material-icons">volume_up</span></button>
        `;
        speakTTS(target);
        compArea.innerHTML = `
            <div style="display:flex; align-items:center; gap:18px;">
                <button type="button" id="drum-tap-btn" class="btn-action" style="font-size:1.5rem; padding:22px 36px; border-radius:24px;">
                    <span class="material-icons" style="font-size:2rem;">touch_app</span>
                    Sílabas: <span id="drum-count-val">0</span>
                </button>
                <button type="button" id="drum-reset-btn" class="btn-action btn-cancel" style="padding:22px;">Zerar</button>
                <button type="button" id="drum-confirm-btn" class="btn-action" style="background:var(--success); padding:22px 30px;">
                    <span class="material-icons">check</span> Confirmar
                </button>
            </div>
        `;
        abaDock.style.display = 'flex';
        document.getElementById('drum-tap-btn').onclick = () => {
            tapCount++;
            playSound('click');
            document.getElementById('drum-count-val').innerText = tapCount;
        };
        document.getElementById('drum-reset-btn').onclick = () => {
            tapCount = 0;
            document.getElementById('drum-count-val').innerText = 0;
        };
        document.getElementById('drum-confirm-btn').onclick = (e) => {
            handleAnswer(tapCount === wObj.count, e.currentTarget);
        };
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    // 2.6: FORMAÇÃO DE PRIMEIRAS PALAVRAS (CRMTS POR SÍLABAS + LEITURA STT OBRIGATÓRIA)
    if (subType === 'SYL_WORD_BUILD') {
        badge.innerText = `2.6 Formação de Palavras + Leitura (Var ${session.activeVar})`;
        const wObj = WORD_BANK[target];
        const syllables = (wObj && Array.isArray(wObj.syllables))
            ? wObj.syllables
            : (String(target).match(/[^AEIOUÁÉÍÓÚÂÊÔÃÕ]*[AEIOUÁÉÍÓÚÂÊÔÃÕ]+[^AEIOUÁÉÍÓÚÂÊÔÃÕ]?/gi) || [target]);

        const iconHTML = (wObj && wObj.icon) ? `<span style="font-size:3.2rem; margin-right:12px;">${wObj.icon}</span>` : '';
        modelArea.innerHTML = `
            <div style="display:flex; align-items:center; gap:14px;">
                <button type="button" class="model-audio-btn" style="width:90px; height:90px;" onclick="speakTTS('${target}')">
                    <span class="material-icons" style="font-size:3.2rem;">volume_up</span>
                </button>
                ${iconHTML}
            </div>
        `;
        speakTTS(target);

        const distractors = shuffleArray(['FA','LA','MA','SA','VA','BO','TA','PA'].filter(s => !syllables.includes(s))).slice(0, 3);
        const tilePool = shuffleArray([...syllables, ...distractors]);
        let built = [];
        let slotErrors = 0;
        const allTileBtns = [];

        const wrap = document.createElement('div');
        wrap.style.display = 'flex';
        wrap.style.flexDirection = 'column';
        wrap.style.alignItems = 'center';

        const slotsDiv = document.createElement('div');
        slotsDiv.className = 'crmts-slots';
        const poolDiv = document.createElement('div');
        poolDiv.className = 'crmts-pool';

        function refreshSylSlots() {
            slotsDiv.innerHTML = '';
            syllables.forEach((_, idx) => {
                const s = document.createElement('div');
                s.className = `crmts-slot ${topoClass} ${built[idx] ? 'filled' : ''}`;
                s.innerHTML = built[idx] ? formatStimulusTextHTML(built[idx].syl) : '';
                slotsDiv.appendChild(s);
            });
        }

        function triggerVocalVerificationGate() {
            if (!state.settings.useMic) {
                handleAnswer(true, slotsDiv);
                return;
            }
            poolDiv.innerHTML = `
                <div class="stt-area" style="margin-top:6px;">
                    <input type="text" id="ghost-stt" class="ghost-input" tabindex="-1">
                    <p id="mic-feedback" style="color:var(--primary-dark); font-weight:900; font-size:1.15rem;">
                        Palavra montada! Agora segure o microfone e leia: '${target}'
                    </p>
                    <div class="stt-controls">
                        <button type="button" class="stt-btn" id="mic-btn" style="width:88px; height:88px;" onmousedown="startMicrophone()" onmouseup="stopMicrophone()" onmouseleave="stopMicrophone()" ontouchstart="event.preventDefault(); startMicrophone()" ontouchend="event.preventDefault(); stopMicrophone()">
                            <span class="material-icons" style="font-size:3.2rem;">mic</span>
                        </button>
                    </div>
                </div>
            `;
        }

        tilePool.forEach(syl => {
            const t = document.createElement('button');
            t.type = 'button';
            t.className = `letter-tile ${topoClass}`;
            t.innerHTML = formatStimulusTextHTML(syl);
            t.dataset.rawSyl = syl;
            t.onclick = () => {
                if (blockClicks || built.length >= syllables.length) return;
                const expectedSyl = syllables[built.length];
                if (syl === expectedSyl) {
                    playSound('click');
                    slotErrors = 0;
                    t.classList.add('used');
                    built.push({ syl, tileEl: t });
                    refreshSylSlots();
                    if (built.length === syllables.length) {
                        playSound('win');
                        triggerVocalVerificationGate();
                    }
                } else {
                    slotErrors++;
                    session.attemptsOnCurrent++;
                    playSound('click');
                    t.classList.add('feedback-error');
                    setTimeout(() => t.classList.remove('feedback-error'), 350);

                    if (slotErrors >= 2) {
                        slotErrors = 0;
                        const rightBtn = allTileBtns.find(b => !b.classList.contains('used') && b.dataset.rawSyl === expectedSyl);
                        if (rightBtn) {
                            rightBtn.classList.add('errorless-prompt');
                            setTimeout(() => {
                                rightBtn.classList.remove('errorless-prompt');
                                rightBtn.classList.add('used');
                                built.push({ syl: expectedSyl, tileEl: rightBtn });
                                refreshSylSlots();
                                if (built.length === syllables.length) {
                                    triggerVocalVerificationGate();
                                }
                            }, 420);
                        }
                    }
                }
            };
            allTileBtns.push(t);
            poolDiv.appendChild(t);
        });

        refreshSylSlots();
        wrap.appendChild(slotsDiv);
        wrap.appendChild(poolDiv);
        compArea.appendChild(wrap);
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    // 3.4 & 3.5: CONSTRUTOR DE PALAVRAS POR LETRAS (COM TOLERÂNCIA DE 2 ERROS = AUTO-FADING)
    if (subType === 'COPY_CRMTS' || subType === 'DICT_CRMTS') {
        const isCopy = (subType === 'COPY_CRMTS');
        badge.innerText = isCopy ? `3.4 Transcrição e Cópia (Var ${session.activeVar})` : `3.5 Escrita sob Ditado (Var ${session.activeVar})`;

        if (isCopy) {
            modelArea.innerHTML = `<div class="model-card ${topoClass}">${formatStimulusTextHTML(target)}</div>`;
        } else {
            modelArea.innerHTML = `
                <button type="button" class="model-audio-btn" onclick="speakTTS('${target}')"><span class="material-icons">volume_up</span></button>
            `;
            speakTTS(target);
        }

        const letters = target.split('');
        const extraDistractors = shuffleArray(['M','P','B','T','L','S','R','A','E','O'].filter(l => !letters.includes(l))).slice(0, 3);
        const tilePool = shuffleArray([...letters, ...extraDistractors]);
        let built = [];
        let slotErrors = 0;
        const allTileBtns = [];

        const wrap = document.createElement('div');
        wrap.style.display = 'flex';
        wrap.style.flexDirection = 'column';
        wrap.style.alignItems = 'center';

        const slotsDiv = document.createElement('div');
        slotsDiv.className = 'crmts-slots';
        const poolDiv = document.createElement('div');
        poolDiv.className = 'crmts-pool';

        function refreshCRMTS() {
            slotsDiv.innerHTML = '';
            letters.forEach((_, idx) => {
                const s = document.createElement('div');
                s.className = `crmts-slot ${topoClass} ${built[idx] ? 'filled' : ''}`;
                s.innerHTML = built[idx] ? formatStimulusTextHTML(built[idx].char) : '';
                slotsDiv.appendChild(s);
            });
        }

        tilePool.forEach(ch => {
            const t = document.createElement('button');
            t.type = 'button';
            t.className = `letter-tile ${topoClass}`;
            t.innerHTML = formatStimulusTextHTML(ch);
            t.dataset.rawChar = ch;
            t.onclick = () => {
                if (blockClicks || built.length >= letters.length) return;
                const expectedChar = letters[built.length];

                if (ch === expectedChar) {
                    playSound('click');
                    slotErrors = 0;
                    t.classList.add('used');
                    built.push({ char: ch, tileEl: t });
                    refreshCRMTS();
                    if (built.length === letters.length) {
                        handleAnswer(true, slotsDiv);
                    }
                } else {
                    slotErrors++;
                    session.attemptsOnCurrent++;
                    playSound('click');
                    t.classList.add('feedback-error');
                    setTimeout(() => t.classList.remove('feedback-error'), 350);

                    if (slotErrors >= 2) {
                        slotErrors = 0;
                        const rightBtn = allTileBtns.find(b => !b.classList.contains('used') && b.dataset.rawChar === expectedChar);
                        if (rightBtn) {
                            rightBtn.classList.add('errorless-prompt');
                            setTimeout(() => {
                                rightBtn.classList.remove('errorless-prompt');
                                rightBtn.classList.add('used');
                                built.push({ char: expectedChar, tileEl: rightBtn });
                                refreshCRMTS();
                                if (built.length === letters.length) {
                                    handleAnswer(true, slotsDiv);
                                }
                            }, 420);
                        }
                    }
                }
            };
            allTileBtns.push(t);
            poolDiv.appendChild(t);
        });

        refreshCRMTS();
        wrap.appendChild(slotsDiv);
        wrap.appendChild(poolDiv);
        compArea.appendChild(wrap);
        abaDock.style.display = 'flex';
        applyDMTSWrapperIfEnabled(modelArea, compArea, isCopy);
        return;
    }

    // 3.6: SEGMENTAÇÃO LEXICAL (TOCAR NOS ESPAÇOS ENTRE PALAVRAS)
    if (subType === 'WORD_SPACE') {
        badge.innerText = `3.6 Espaço na Frase (Var ${session.activeVar})`;
        const totalGaps = target.length - 1;
        let cutGaps = 0;

        const box = document.createElement('div');
        box.className = `space-sentence-box ${topoClass}`;
        target.forEach((word, idx) => {
            const wSpan = document.createElement('span');
            wSpan.innerHTML = formatStimulusTextHTML(word);
            box.appendChild(wSpan);
            if (idx < totalGaps) {
                const gapBtn = document.createElement('button');
                gapBtn.type = 'button';
                gapBtn.className = 'space-gap-btn';
                gapBtn.innerHTML = '';
                gapBtn.onclick = () => {
                    if (!gapBtn.classList.contains('cut')) {
                        gapBtn.classList.add('cut');
                        gapBtn.innerHTML = '|';
                        cutGaps++;
                        playSound('click');
                        if (cutGaps === totalGaps) {
                            handleAnswer(true, box);
                        }
                    }
                };
                box.appendChild(gapBtn);
            }
        });
        compArea.appendChild(box);
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    // 4.1: PARES MÍNIMOS AUDITIVOS
    if (subType === 'MIN_PAIRS') {
        badge.innerText = `4.1 Pares Mínimos (${target.contrast})`;
        modelArea.innerHTML = `
            <button type="button" class="model-audio-btn" onclick="speakTTS('${target.target}')"><span class="material-icons">volume_up</span></button>
        `;
        speakTTS(target.target);

        const pairOpts = shuffleArray([target.target, target.distractor]);
        pairOpts.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            btn.innerHTML = formatStimulusTextHTML(opt);
            const isCorrect = (opt === target.target);
            btn.dataset.correct = isCorrect;
            btn.onclick = () => {
                if (!isCorrect) {
                    state.minimalPairSwaps[target.contrast] = (state.minimalPairSwaps[target.contrast] || 0) + 1;
                    saveState();
                }
                handleAnswer(isCorrect, btn);
            };
            compArea.appendChild(btn);
        });
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    // 4.7: FLUÊNCIA DE PALAVRAS (< 3 SEGUNDOS)
    if (subType === 'SPRINT_3S') {
        badge.innerText = `4.7 Fluência de Palavras (< 3s)`;
        fluencyPill.style.display = 'inline-flex';
        modelArea.innerHTML = `<div class="model-card ${topoClass}" style="font-size:4.6rem;">${formatStimulusTextHTML(target)}</div>`;
        abaDock.style.display = 'flex';

        const msSpan = document.getElementById('fluency-ms-text');
        fluencyTimerInterval = setInterval(() => {
            const elapsed = ((Date.now() - trialStartTime) / 1000).toFixed(1);
            if (msSpan) msSpan.innerText = `${elapsed}s`;
            if (elapsed >= 3.0) {
                fluencyPill.style.background = '#EF4444';
                fluencyPill.style.color = '#FFFFFF';
            } else {
                fluencyPill.style.background = '#D1FAE5';
                fluencyPill.style.color = '#047857';
            }
        }, 100);
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    // 5.1: AGRUPAMENTO SINTÁTICO
    if (subType === 'SYNTACTIC_GROUP') {
        badge.innerText = `5.1 Agrupamento Sintático (Var ${session.activeVar})`;
        modelArea.innerHTML = `<div class="model-card sentence-mode ${topoClass}">${formatStimulusTextHTML(target)}</div>`;
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    // 5.2: COMPOSIÇÃO SINTÁTICA SOB DITADO (COM TOLERÂNCIA DE 2 ERROS + BOTÃO DE ESPAÇO)
    if (subType === 'SENTENCE_BUILD') {
        badge.innerText = `5.2 Composição Sintática (Var ${session.activeVar})`;
        const spokenPhrase = target.shortSpoken || target.wordsArray.join(' ');

        modelArea.innerHTML = `
            <div style="display:flex; align-items:center; gap:16px; width:100%; justify-content:center;">
                <button type="button" class="model-audio-btn" style="width:84px; height:84px; flex-shrink:0;" onclick="speakTTS('${spokenPhrase}')"><span class="material-icons" style="font-size:3rem;">volume_up</span></button>
                <div class="model-card sentence-mode ${topoClass}" style="font-size:1.6rem; flex:1; max-width:680px;">
                    <span id="built-sentence-preview" style="color:var(--primary-dark); font-size:2rem; min-height:42px; display:block;"></span>
                </div>
            </div>
        `;
        speakTTS(spokenPhrase);

        let builtWords = [];
        let wordErrors = 0;
        let waitingForSpace = false;
        const wordsShuffled = shuffleArray(target.wordsArray);
        const poolDiv = document.createElement('div');
        poolDiv.className = 'crmts-pool';
        const allWordBtns = [];

        const spaceBtn = document.createElement('button');
        spaceBtn.type = 'button';
        spaceBtn.className = 'space-action-tile';
        spaceBtn.innerHTML = `<span class="material-icons">space_bar</span> ESPAÇO`;

        function setSpaceButtonPendingState(isSpaceLocked) {
            waitingForSpace = !isSpaceLocked;
            if (isSpaceLocked) {
                spaceBtn.classList.add('space-active-locked');
                spaceBtn.innerHTML = `<span class="material-icons">check</span> ESPAÇO ATIVO`;
            } else {
                spaceBtn.classList.remove('space-active-locked');
                spaceBtn.innerHTML = `<span class="material-icons">space_bar</span> ESPAÇO`;
            }
        }

        function updatePreview() {
            const prev = document.getElementById('built-sentence-preview');
            if (prev) prev.innerHTML = builtWords.map(w => formatStimulusTextHTML(w)).join(' ');
        }

        wordsShuffled.forEach(w => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `letter-tile ${topoClass}`;
            btn.style.fontSize = '1.35rem';
            btn.innerHTML = formatStimulusTextHTML(w);
            btn.dataset.rawWord = w;
            btn.onclick = () => {
                if (blockClicks || builtWords.length >= target.wordsArray.length) return;
                const expectedWord = target.wordsArray[builtWords.length];

                if (w === expectedWord) {
                    playSound('click');
                    wordErrors = 0;
                    builtWords.push(w);
                    btn.classList.add('used');
                    setSpaceButtonPendingState(false);
                    updatePreview();
                    if (builtWords.length === target.wordsArray.length) {
                        handleAnswer(true, poolDiv);
                    }
                } else {
                    wordErrors++;
                    session.attemptsOnCurrent++;
                    playSound('click');
                    btn.classList.add('feedback-error');
                    setTimeout(() => btn.classList.remove('feedback-error'), 350);

                    if (wordErrors >= 2) {
                        wordErrors = 0;
                        const rightBtn = allWordBtns.find(b => !b.classList.contains('used') && b.dataset.rawWord === expectedWord);
                        if (rightBtn) {
                            rightBtn.classList.add('errorless-prompt');
                            setTimeout(() => {
                                rightBtn.classList.remove('errorless-prompt');
                                rightBtn.classList.add('used');
                                builtWords.push(expectedWord);
                                setSpaceButtonPendingState(false);
                                updatePreview();
                                if (builtWords.length === target.wordsArray.length) {
                                    handleAnswer(true, poolDiv);
                                }
                            }, 420);
                        }
                    }
                }
            };
            allWordBtns.push(btn);
            poolDiv.appendChild(btn);
        });

        spaceBtn.onclick = () => {
            if (builtWords.length === 0) return;
            playSound('click');
            setSpaceButtonPendingState(true);
        };

        const clearBtn = document.createElement('button');
        clearBtn.type = 'button';
        clearBtn.className = 'letter-tile';
        clearBtn.style.fontSize = '1.1rem';
        clearBtn.innerHTML = `<span class="material-icons" style="margin-right:4px;">backspace</span> Limpar`;
        clearBtn.onclick = () => {
            builtWords = [];
            poolDiv.querySelectorAll('.letter-tile').forEach(b => b.classList.remove('used'));
            setSpaceButtonPendingState(false);
            updatePreview();
        };

        const controls = document.createElement('div');
        controls.style.display = 'flex';
        controls.style.gap = '12px';
        controls.style.marginTop = '12px';
        controls.style.alignItems = 'center';
        controls.appendChild(spaceBtn);
        controls.appendChild(clearBtn);

        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.appendChild(poolDiv);
        container.appendChild(controls);
        compArea.appendChild(container);
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    // 5.3: COMPREENSÃO WH
    if (subType === 'SYNTACTIC_WH') {
        badge.innerText = `5.3 Compreensão WH`;
        modelArea.innerHTML = `
            <div class="model-card sentence-mode ${topoClass}" style="margin-bottom:8px;">
                <div>${formatStimulusTextHTML(target.sentence)}</div>
                <div style="font-size:1.35rem; color:var(--primary-dark); margin-top:10px;">${target.question}</div>
            </div>
        `;
        const opts = shuffleArray([target.correct, ...target.distractors.slice(0, state.settings.opts - 1)]);
        opts.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            btn.style.fontSize = '1.6rem';
            btn.innerHTML = formatStimulusTextHTML(opt);
            const isCorrect = (opt === target.correct);
            btn.dataset.correct = isCorrect;
            btn.onclick = () => handleAnswer(isCorrect, btn);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
        return;
    }

    // 5.4: AUTOCORREÇÃO SEMÂNTICA (LOCALIZAR INTRUSA E SUBSTITUIR PELA CORRETA)
    if (subType === 'INTRUDER_WORD') {
        badge.innerText = `5.4 Autocorreção Semântica`;
        const box = document.createElement('div');
        box.className = `space-sentence-box ${topoClass}`;
        box.style.fontSize = '1.85rem';
        box.style.gap = '12px';

        const replacementZone = document.createElement('div');
        replacementZone.style.display = 'none';
        replacementZone.style.gap = '14px';
        replacementZone.style.marginTop = '16px';

        target.words.forEach(w => {
            const wClean = w.replace(/[.!?]/g, '');
            const btn = document.createElement('span');
            btn.style.padding = '8px 14px';
            btn.style.borderRadius = '12px';
            btn.style.border = '2px solid var(--border)';
            btn.style.cursor = 'pointer';
            btn.innerHTML = formatStimulusTextHTML(w);
            btn.onclick = () => {
                if (blockClicks) return;
                const isIntruder = (wClean === target.intruder);
                if (isIntruder) {
                    playSound('click');
                    btn.style.background = 'var(--danger-light)';
                    btn.style.borderColor = 'var(--danger)';
                    btn.innerHTML = '[ ___ ]';
                    replacementZone.style.display = 'flex';
                } else {
                    handleAnswer(false, btn);
                }
            };
            box.appendChild(btn);
        });

        const repOpts = shuffleArray([target.fix, ...(target.distractors || ['PEDRA', 'RODA'])]);
        repOpts.forEach(rWord => {
            const rBtn = document.createElement('button');
            rBtn.type = 'button';
            rBtn.className = `letter-tile ${topoClass}`;
            rBtn.style.fontSize = '1.35rem';
            rBtn.innerHTML = formatStimulusTextHTML(rWord);
            rBtn.onclick = () => {
                handleAnswer(rWord === target.fix, rBtn);
            };
            replacementZone.appendChild(rBtn);
        });

        const wrap = document.createElement('div');
        wrap.style.display = 'flex';
        wrap.style.flexDirection = 'column';
        wrap.style.alignItems = 'center';
        wrap.appendChild(box);
        wrap.appendChild(replacementZone);
        compArea.appendChild(wrap);
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    // 5.5: SEQUÊNCIA LÓGICA (1º, 2º, 3º)
    if (subType === 'CHRONO_SEQ') {
        badge.innerText = `5.5 Sequência Lógica (1º, 2º, 3º)`;
        const cleanSteps = target.steps.map(s => s.replace(/^\dº:\s*/, ''));
        const shuffled = shuffleArray(cleanSteps.map((text, origIdx) => ({ text, origIdx })));
        let pickedOrder = [];

        const listDiv = document.createElement('div');
        listDiv.className = 'seq-list';

        shuffled.forEach(item => {
            const row = document.createElement('div');
            row.className = `seq-item ${topoClass}`;
            row.innerHTML = `<span>${formatStimulusTextHTML(item.text)}</span><span class="seq-order-badge" style="display:none;"></span>`;
            row.onclick = () => {
                if (pickedOrder.includes(item.origIdx)) return;
                playSound('click');
                pickedOrder.push(item.origIdx);
                row.classList.add('selected-order');
                const b = row.querySelector('.seq-order-badge');
                b.style.display = 'flex';
                b.innerText = `${pickedOrder.length}º`;

                if (pickedOrder.length === 3) {
                    const isCorrect = (pickedOrder[0] === 0 && pickedOrder[1] === 1 && pickedOrder[2] === 2);
                    if (isCorrect) {
                        handleAnswer(true, listDiv);
                    } else {
                        handleAnswer(false, listDiv);
                        setTimeout(() => {
                            pickedOrder = [];
                            listDiv.querySelectorAll('.seq-item').forEach(r => {
                                r.classList.remove('selected-order');
                                r.querySelector('.seq-order-badge').style.display = 'none';
                            });
                        }, 600);
                    }
                }
            };
            listDiv.appendChild(row);
        });
        compArea.appendChild(listDiv);
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }
}

/* ============================================================================
   14. RESPOSTAS, TRAVA ATÔMICA ERRORLESS E SNAPSHOT REAL DO UNDO
   ============================================================================ */
function generateComparisons(target) {
    let opts = [target];
    let available = session.pool.filter(x => x !== target);
    available = shuffleArray(available);
    while (opts.length < state.settings.opts) {
        if (available.length > 0) opts.push(available.pop());
        else {
            const fallback = ['BA','CA','DA','FA','LA','MA','PA','SA','BOLA','GATO'].filter(x => !opts.includes(x));
            opts.push(fallback[Math.floor(Math.random() * fallback.length)] || 'TA');
        }
    }
    return shuffleArray(opts);
}

function saveUndoSnapshot() {
    undoSnapshot = JSON.parse(JSON.stringify({
        currentTrialIdx: session.currentTrialIdx,
        currentCycleIdx: session.currentCycleIdx,
        currentCycle: session.currentCycle,
        currentRenderedOptions: session.currentRenderedOptions,
        stats: session.stats,
        latencies: session.latencies
    }));
}

function undoLastTrial() {
    if (!undoSnapshot) return;
    playSound('click');
    session.currentTrialIdx = undoSnapshot.currentTrialIdx;
    session.currentCycleIdx = undoSnapshot.currentCycleIdx;
    session.currentCycle = undoSnapshot.currentCycle;
    session.stats = undoSnapshot.stats;
    session.latencies = undoSnapshot.latencies;
    const restoredOpts = undoSnapshot.currentRenderedOptions;
    undoSnapshot = null;
    renderTrial(restoredOpts);
}

function getCurrentStatCat() {
    return `c${session.currentCycle || 1}`;
}

function handleAnswer(isCorrect, element) {
    if (blockClicks) return;
    if (isListening) stopMicrophone();
    if (responseTimeoutTimer) { clearTimeout(responseTimeoutTimer); responseTimeoutTimer = null; }

    const elapsedSec = Number(((Date.now() - trialStartTime) / 1000).toFixed(2));
    const modelCard = document.querySelector('.model-card') || document.querySelector('.model-audio-btn');
    const compArea = document.getElementById('comparisons-area');
    const cat = getCurrentStatCat();

    if (isCorrect) {
        blockClicks = true;
        if (compArea) compArea.classList.add('locked-pointer');
        saveUndoSnapshot();
        session.latencies.push(elapsedSec);
        playSound('win');
        if (element) element.classList.add('feedback-success');
        if (modelCard) modelCard.classList.add('feedback-success');

        if (!session.isRepeating) {
            if (session.attemptsOnCurrent === 0) session.stats[cat].indep++;
            else session.stats[cat].dica++;
        }
        advanceTrial();
    } else {
        session.attemptsOnCurrent++;
        playSound('click');

        blockClicks = true;
        if (compArea) compArea.classList.add('locked-pointer');

        if (modelCard) {
            modelCard.classList.add('feedback-error');
            setTimeout(() => modelCard.classList.remove('feedback-error'), 380);
        }

        if (state.settings.errorless) {
            document.querySelectorAll('.comp-card').forEach(card => {
                if (card.dataset.correct === 'true') {
                    card.classList.add('errorless-prompt');
                } else {
                    card.style.opacity = '0.25';
                    card.style.pointerEvents = 'none';
                }
            });
        } else if (element && element.classList.contains('comp-card')) {
            element.style.visibility = 'hidden';
        }

        if (session.attemptsOnCurrent >= 2) {
            saveUndoSnapshot();
            if (!session.isRepeating) session.stats[cat].erro++;
            advanceTrial();
        } else {
            setTimeout(() => {
                blockClicks = false;
                if (compArea) compArea.classList.remove('locked-pointer');
            }, 350);
        }
    }
}

function recordMediatedTrial(code) {
    if (blockClicks) return;
    blockClicks = true;
    if (responseTimeoutTimer) { clearTimeout(responseTimeoutTimer); responseTimeoutTimer = null; }
    saveUndoSnapshot();

    const elapsedSec = Number(((Date.now() - trialStartTime) / 1000).toFixed(2));
    session.latencies.push(elapsedSec);
    const cat = getCurrentStatCat();

    if (session.eidosMod && session.eidosMod.subType === 'SPRINT_3S' && code === 'I' && elapsedSec > 3.0) {
        code = 'D';
    }

    if (!session.isRepeating) {
        if (code === 'I') {
            playSound('win');
            session.stats[cat].indep++;
        } else if (code === 'D') {
            playSound('click');
            session.stats[cat].dica++;
        } else {
            playSound('click');
            session.stats[cat].erro++;
        }
    }
    advanceTrial();
}

function advanceTrial() {
    setTimeout(() => {
        session.currentTrialIdx++;
        if (session.currentTrialIdx >= session.trials.length) {
            finishCycle();
        } else {
            renderTrial();
        }
    }, 520);
}

/* ============================================================================
   15. RECONHECIMENTO DE VOZ (PONTE KODULAR + WEB SPEECH FALLBACK)
   ============================================================================ */
let sttRecognition = null;
let isListening = false;

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();
}

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return null;
    let rec = new SpeechRecognition();
    rec.lang = 'pt-BR';
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    rec.onresult = function(event) {
        let transcript = Array.from(event.results).map(r => r[0].transcript).join('');
        const ghost = document.getElementById('ghost-stt');
        if (ghost) ghost.value = transcript;
        const fb = document.getElementById('mic-feedback');
        if (fb) fb.innerText = `Ouvindo: "${transcript}"`;
    };
    rec.onerror = function(event) {
        isListening = false;
        let btn = document.getElementById('mic-btn');
        if (btn) btn.classList.remove('listening');
        let fb = document.getElementById('mic-feedback');
        if (fb) fb.innerText = event.error === 'not-allowed' ? "Permissão negada." : (event.error === 'no-speech' ? "Som não detectado." : `Erro (${event.error}).`);
    };
    rec.onend = function() {
        if (isListening) return;
        const g = document.getElementById('ghost-stt');
        processSpeech(g ? g.value : '');
    };
    return rec;
}

function startMicrophone() {
    if (isListening || !state.settings.useMic) return;
    isListening = true;
    const btn = document.getElementById('mic-btn');
    const feedback = document.getElementById('mic-feedback');
    const ghostInput = document.getElementById('ghost-stt');
    if (btn) btn.classList.add('listening');
    if (ghostInput) ghostInput.value = "";
    if (feedback) feedback.innerText = "Gravando...";
    playSound('click');
    if (window.AppInventor) {
        window.AppInventor.setWebViewString("Ouvir_Mic");
    } else {
        sttRecognition = initSpeechRecognition();
        if (sttRecognition) {
            try { sttRecognition.start(); } catch(err) {}
        } else if (feedback) {
            feedback.innerText = "API de voz indisponível.";
        }
    }
}

function stopMicrophone() {
    if (!isListening) return;
    isListening = false;
    const btn = document.getElementById('mic-btn');
    const feedback = document.getElementById('mic-feedback');
    if (btn) btn.classList.remove('listening');
    if (feedback && feedback.innerText === "Gravando...") feedback.innerText = "Processando áudio...";
    if (window.AppInventor) {
        window.AppInventor.setWebViewString("Parar_Mic");
    } else {
        if (sttRecognition) {
            try { sttRecognition.stop(); } catch(err) {}
        }
    }
}

function processSpeech(transcript) {
    isListening = false;
    const btn = document.getElementById('mic-btn');
    if (btn) btn.classList.remove('listening');
    const feedback = document.getElementById('mic-feedback');
    const rawTarget = session.trials[session.currentTrialIdx];

    if (!transcript || transcript.trim() === "") {
        if (feedback) {
            feedback.innerText = "Som não detectado. Tente de novo.";
            setTimeout(() => {
                if (feedback) feedback.innerText = `Segure o microfone e fale: '${rawTarget}'`;
            }, 2000);
        }
        return;
    }

    let currentSpeech = removeAccents(transcript);
    let expectedTarget = session.isPreReq ? getCategory(rawTarget) : String(rawTarget);
    let targetClean = removeAccents(expectedTarget);
    let acceptedTerms = [targetClean];

    if (!session.isPreReq && phoneticsMap[targetClean]) acceptedTerms = acceptedTerms.concat(phoneticsMap[targetClean]);
    if (session.isPreReq && preReqTerms[targetClean]) acceptedTerms = acceptedTerms.concat(preReqTerms[targetClean]);

    const regexStr = '(^|\\s)(' + acceptedTerms.join('|') + ')($|\\s)';
    const regex = new RegExp(regexStr);

    if (regex.test(currentSpeech)) {
        if (feedback) feedback.innerText = "Detectado!";
        blockClicks = false;
        setTimeout(() => { handleAnswer(true, null); }, 350);
    } else {
        session.attemptsOnCurrent++;
        const cat = getCurrentStatCat();
        if (session.attemptsOnCurrent >= 2) {
            if (feedback) feedback.innerText = `Você disse: "${transcript}". Seguindo...`;
            if (!session.isRepeating) session.stats[cat].erro++;
            advanceTrial();
        } else {
            if (feedback) {
                feedback.innerText = `Você disse: "${transcript}". Tente novamente!`;
                setTimeout(() => {
                    if (feedback && feedback.innerText.includes("Tente novamente")) {
                        feedback.innerText = `Segure o microfone e fale: '${rawTarget}'`;
                    }
                }, 2000);
            }
        }
    }
}
window.receberTextoDoKodular = function(transcript) { processSpeech(transcript); };

/* ============================================================================
   16. FECHAMENTO DE BLOCO, POP-UP DE SÍLABAS COMPLEXAS E TELEMETRIA
   ============================================================================ */
function finishCycle() {
    session.currentTrialIdx = 0;
    session.currentCycleIdx++;
    if (session.currentCycleIdx >= session.activeCycles.length) {
        checkBlockMastery();
    } else {
        session.currentCycle = session.activeCycles[session.currentCycleIdx];
        renderTrial();
    }
}

function checkBlockMastery() {
    clearAllTrialTimers();

    const s = session.stats;
    const totalTrials = s.c1.total + s.c2.total + s.c3.total + s.c4.total + s.c5.total;
    const totalIndep = s.c1.indep + s.c2.indep + s.c3.indep + s.c4.indep + s.c5.indep;
    const totalDica = s.c1.dica + s.c2.dica + s.c3.dica + s.c4.dica + s.c5.dica;
    const totalErro = s.c1.erro + s.c2.erro + s.c3.erro + s.c4.erro + s.c5.erro;

    const accuracy = totalTrials > 0 ? Math.round((totalIndep / totalTrials) * 100) : 0;
    const avgLatency = session.latencies.length > 0
        ? Number((session.latencies.reduce((a, b) => a + b, 0) / session.latencies.length).toFixed(2))
        : 0;

    let prog = getModuleProgress(session.phase);
    const usedVar = session.activeVar || 1;

    if (!session.isRepeating) {
        prog = registerMasteryAttempt(session.phase, accuracy, avgLatency);

        const modTitle = session.eidosMod ? `${session.eidosMod.code} ${session.eidosMod.title}` : session.phase;
        const dataObj = {
            n: state.student || "ALUNO",
            d: new Date().toLocaleDateString('pt-BR'),
            h: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            tipo: session.eidosMod ? session.eidosMod.engine : (session.isPreReq ? "PRE_REQUISITO" : "MTS"),
            modId: session.phase,
            eidosCode: session.eidosMod ? session.eidosMod.code : null,
            fase: modTitle,
            variacao: usedVar,
            nv: session.eidosMod ? session.eidosMod.level : "SILABARIO",
            crit: state.settings.crit,
            acc: accuracy,
            lat: avgLatency,
            streak: `${prog.streak}/${state.settings.consecDays}`,
            status: prog.status === 'mastered' ? 'Consolidado' : (accuracy >= state.settings.crit ? 'Meta Atingida' : 'Em Treino'),
            resumoABA: { I: totalIndep, D: totalDica, N: totalErro, T: totalTrials },
            ciclos: session.stats
        };
        state.log.push(dataObj);
        saveState();
    }

    showResultModal(accuracy >= state.settings.crit, accuracy, avgLatency, prog);
}

function showResultModal(isSuccess, accuracy, avgLatency, prog) {
    if (state.settings.timer.enabled && state.session.expired) {
        triggerTimeUp();
        return;
    }

    const iconBox = document.getElementById('result-icon-box');
    const title = document.getElementById('result-title');
    const desc = document.getElementById('result-desc');
    const banner = document.getElementById('result-streak-banner');
    const actions = document.getElementById('result-actions');
    const targetDays = state.settings.consecDays || 3;

    if (isSuccess) {
        iconBox.innerHTML = `<span class="material-icons" style="font-size:4.5rem; color:var(--success); background:var(--success-light); padding:18px; border-radius:50%;">emoji_events</span>`;
        title.innerText = prog.status === 'mastered' ? "Habilidade Consolidada!" : "Meta Atingida!";
        desc.innerText = `Precisão Independente: ${accuracy}% | Latência Média: ${avgLatency}s`;
    } else {
        iconBox.innerHTML = `<span class="material-icons" style="font-size:4.5rem; color:var(--warning); background:var(--warning-light); padding:18px; border-radius:50%;">fitness_center</span>`;
        title.innerText = "Continue Praticando";
        desc.innerText = `Precisão Independente: ${accuracy}% (Meta: ${state.settings.crit}%)`;
    }

    const nextVarInfo = (!state.settings.strictDay && isSuccess)
        ? ` | Próxima repetição: Variação ${prog.activeVar}`
        : (state.settings.strictDay && prog.pendingVar ? ` | Variação ${prog.pendingVar} agendada para amanhã` : '');

    banner.innerHTML = prog.status === 'mastered'
        ? `Critério de ${targetDays}/${targetDays} concluído!${nextVarInfo}`
        : `Progresso: <strong>${prog.streak} de ${targetDays}</strong>${nextVarInfo}`;

    actions.innerHTML = `
        <button type="button" class="btn-action btn-cancel" style="flex:1;" onclick="closeResult(); openGrid()">
            <span class="material-icons">grid_view</span> Atividades
        </button>
        <button type="button" class="btn-action" style="flex:1; background:var(--primary-dark);" onclick="closeResult(); repeatLesson()">
            <span class="material-icons">replay</span> Jogar Novamente
        </button>
    `;
    document.getElementById('modal-result').style.display = 'flex';

    // Pop-up automático ao dominar Encontros Consonantais (4.5)
    if (isSuccess && session.eidosMod && session.eidosMod.promptSylComplex && !state.settings.sylComplex.ccv) {
        setTimeout(() => {
            customAlert(
                "Habilitar Sílabas Complexas?",
                "O aluno atingiu o critério em Encontros Consonantais (CCV)! Deseja pré-ativar automaticamente Sílabas Complexas (+CCV, CVC-L, CVC-S, CVC-M) para treino livre no Silabário?",
                () => {
                    state.settings.sylComplex = { ccv: true, cvcL: true, cvcS: true, cvcM: true };
                    saveState();
                    playSound('win');
                },
                true
            );
        }, 400);
    }
}

function closeResult() {
    document.getElementById('modal-result').style.display = 'none';
}

function repeatLesson() {
    if (String(session.phase).startsWith('FA_')) {
        startPhonologicalModelingModule(session.phase);
    } else if (session.eidosMod) {
        startEidosModule(session.phase);
    } else {
        startLegacyGame(session.phase);
    }
}

/* ============================================================================
   17. DASHBOARD, GRÁFICO NATIVO <CANVAS>, RESUMO E LAUDO PDF
   ============================================================================ */
function renderDashboard() {
    const container = document.getElementById('dashboard-content');
    container.innerHTML = '';

    const totalSessions = state.log.length;
    const avgAcc = totalSessions > 0 ? Math.round(state.log.reduce((a, b) => a + (b.acc || 0), 0) / totalSessions) : 0;
    const masteredCount = Object.values(state.moduleProgress).filter(p => p.status === 'mastered').length;
    const logsWithLat = state.log.filter(l => l.lat > 0);
    const avgLat = logsWithLat.length > 0 ? (logsWithLat.reduce((a, b) => a + b.lat, 0) / logsWithLat.length).toFixed(1) : '0.0';

    document.getElementById('kpi-total-sessions').innerText = totalSessions;
    document.getElementById('kpi-avg-acc').innerText = `${avgAcc}%`;
    document.getElementById('kpi-mastered-count').innerText = masteredCount;
    document.getElementById('kpi-avg-latency').innerText = `${avgLat}s`;
    document.getElementById('chart-crit-label').innerText = `--- Meta: ${state.settings.crit}%`;

    drawProgressChart();

    if (totalSessions === 0) {
        container.innerHTML = `<div style="text-align:center; padding:50px 0; color:var(--text-light); font-weight:800;">Nenhuma sessão registrada ainda.</div>`;
        return;
    }

    [...state.log].reverse().forEach(entry => {
        const card = document.createElement('div');
        const isSuccess = entry.acc >= entry.crit;
        card.className = 'log-card';
        card.style.borderLeftColor = isSuccess ? 'var(--success)' : 'var(--danger)';

        const r = entry.resumoABA || { I: 0, D: 0, N: 0 };
        const varLabel = entry.variacao ? ` (Var ${entry.variacao})` : '';
        card.innerHTML = `
            <div class="log-card-top">
                <div>
                    <h3 style="font-size:1.15rem; font-weight:900;">${entry.fase}${varLabel}</h3>
                    <span style="font-size:0.85rem; color:var(--text-light); font-weight:700;">Data: ${entry.d} ${entry.h || ''} | Aluno: ${entry.n} | Latência: ${entry.lat || 0}s</span>
                </div>
                <span class="log-badge" style="background:${isSuccess ? 'var(--success)' : 'var(--danger)'}">${entry.acc}%</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; font-size:0.9rem; font-weight:800;">
                <div>
                    <span style="color:var(--success);">[I] Independente: ${r.I}</span> &nbsp;|&nbsp;
                    <span style="color:#D97706;">[D] Dica: ${r.D}</span> &nbsp;|&nbsp;
                    <span style="color:var(--danger);">[N] Erro: ${r.N}</span>
                </div>
                <div style="color:var(--primary-dark);">Progresso: ${entry.streak || '-'} (${entry.status || '-'})</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function drawProgressChart() {
    const canvas = document.getElementById('aba-progress-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = (rect.width || 700) * dpr;
    canvas.height = 170 * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width || 700;
    const h = 170;
    ctx.clearRect(0, 0, w, h);

    const padL = 40, padR = 20, padT = 18, padB = 28;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 1;
    [0, 50, 100].forEach(val => {
        const y = padT + plotH - (val / 100) * plotH;
        ctx.beginPath();
        ctx.moveTo(padL, y);
        ctx.lineTo(w - padR, y);
        ctx.stroke();
        ctx.fillStyle = '#64748B';
        ctx.font = 'bold 11px Inter';
        ctx.fillText(`${val}%`, 6, y + 4);
    });

    const critY = padT + plotH - ((state.settings.crit || 90) / 100) * plotH;
    ctx.save();
    ctx.strokeStyle = '#EF4444';
    ctx.setLineDash([6, 4]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padL, critY);
    ctx.lineTo(w - padR, critY);
    ctx.stroke();
    ctx.restore();

    const recent = state.log.slice(-15);
    if (recent.length === 0) return;

    ctx.strokeStyle = '#00ACC1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    recent.forEach((item, idx) => {
        const x = padL + (recent.length === 1 ? plotW / 2 : (idx / (recent.length - 1)) * plotW);
        const y = padT + plotH - ((item.acc || 0) / 100) * plotH;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    recent.forEach((item, idx) => {
        const x = padL + (recent.length === 1 ? plotW / 2 : (idx / (recent.length - 1)) * plotW);
        const y = padT + plotH - ((item.acc || 0) / 100) * plotH;
        ctx.fillStyle = item.acc >= state.settings.crit ? '#10B981' : '#EF4444';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
}

function copyWhatsAppSummary() {
    if (state.log.length === 0) {
        customAlert("Sem Dados", "Realize pelo menos uma sessão para gerar o resumo.");
        return;
    }
    const today = new Date().toLocaleDateString('pt-BR');
    const todayLogs = state.log.filter(l => l.d === today);
    const listToUse = todayLogs.length > 0 ? todayLogs : state.log.slice(-5);

    let text = `*RELATÓRIO DE DESEMPENHO - ALFAMTS*\n*Aluno(a):* ${state.student || 'Não informado'}\n*Data:* ${today}\n\n`;
    listToUse.forEach(item => {
        const statusMark = item.acc >= item.crit ? '[META ATINGIDA]' : '[EM TREINO]';
        const vInfo = item.variacao ? ` (Var ${item.variacao})` : '';
        text += `- *${item.fase}${vInfo}:* ${item.acc}% Independente | ${item.streak || '1/3'} ${statusMark}\n`;
    });

    document.getElementById('report-modal-title').innerText = "Resumo em Texto";
    document.getElementById('report-modal-desc').innerText = "Copie o texto abaixo para enviar.";
    document.getElementById('json-output').value = text;
    document.getElementById('modal-report').style.display = 'flex';
}

function exportSessionLogPDF() {
    if (state.log.length === 0) {
        customAlert("Aviso", "Nenhum dado registrado para exportar.");
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.setTextColor(0, 124, 145);
    doc.text("Relatório de Sessões - AlfaMTS", 14, 20);
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    doc.text(`Aluno(a): ${state.student || 'NÃO INFORMADO'} | Emissão: ${new Date().toLocaleDateString('pt-BR')}`, 14, 28);

    const rows = [...state.log].reverse().map(e => [
        e.d,
        `${e.fase}${e.variacao ? ' (Var ' + e.variacao + ')' : ''}`,
        `${e.acc}%`,
        `${e.lat || 0}s`,
        e.streak || '-',
        e.status || '-'
    ]);
    doc.autoTable({
        startY: 35,
        head: [['Data', 'Atividade', 'Precisão (I)', 'Latência', 'Progresso', 'Status']],
        body: rows,
        theme: 'grid',
        headStyles: { fillColor: [0, 172, 193] },
        styles: { fontSize: 8.5 }
    });

    const fileName = `Historico_${(state.student || 'Aluno').replace(/\s+/g, '_')}_AlfaMTS.pdf`;
    if (window.AppInventor) {
        window.AppInventor.setWebViewString("SALVAR_PDF:" + fileName + "|" + doc.output('datauristring'));
    } else {
        doc.save(fileName);
    }
}

function exportEidosChecklistPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(15);
    doc.setTextColor(0, 124, 145);
    doc.text("PROTOCOLO DE AVALIAÇÃO E LINHA DE BASE", 14, 18);
    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);
    doc.text(`Aluno(a): ${state.student || 'NÃO INFORMADO'}   |   Data: ${new Date().toLocaleDateString('pt-BR')}   |   Critério: ${state.settings.crit}% (${state.settings.consecDays}x)`, 14, 26);

    const tableRows = EIDOS_MODULES.map(m => {
        const prog = getModuleProgress(m.id);
        let mark = '[   ] I   [   ] D   [   ] N';
        if (prog.bestAcc >= state.settings.crit) mark = '[ X ] I   [   ] D   [   ] N';
        else if (prog.bestAcc > 0) mark = '[   ] I   [ X ] D   [   ] N';

        return [
            m.code,
            m.title,
            mark,
            prog.bestAcc > 0 ? `${prog.bestAcc}% (${prog.streak}/${state.settings.consecDays} - Var ${prog.activeVar})` : 'Não avaliado',
            prog.avgLatency > 0 ? `${prog.avgLatency}s` : '-'
        ];
    });

    doc.autoTable({
        startY: 32,
        head: [['Código', 'Habilidade', 'Linha de Base', 'Desempenho', 'Latência']],
        body: tableRows,
        theme: 'grid',
        headStyles: { fillColor: [15, 23, 42] },
        styles: { fontSize: 8 }
    });

    const swaps = state.minimalPairSwaps || {};
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(9.5);
    doc.text(
        `Rastreio de Pares Mínimos: [${swaps['F/V'] > 0 ? 'X' : ' '}] F/V (${swaps['F/V'] || 0})   [${swaps['P/B'] > 0 ? 'X' : ' '}] P/B (${swaps['P/B'] || 0})   [${swaps['T/D'] > 0 ? 'X' : ' '}] T/D (${swaps['T/D'] || 0})   [${swaps['C/G'] > 0 ? 'X' : ' '}] C/G (${swaps['C/G'] || 0})`,
        14,
        finalY
    );

    const fileName = `Laudo_${(state.student || 'Aluno').replace(/\s+/g, '_')}.pdf`;
    if (window.AppInventor) {
        window.AppInventor.setWebViewString("SALVAR_PDF:" + fileName + "|" + doc.output('datauristring'));
    } else {
        doc.save(fileName);
    }
}

/* ============================================================================
   18. CONFIGURAÇÕES GLOBAIS, GERENCIADOR DE MÓDULOS COM AVISO E INIT
   ============================================================================ */
function togglePasswordField() {
    const isEnabled = document.getElementById('set-sec-enable').checked;
    document.getElementById('pin-group').style.display = isEnabled ? 'block' : 'none';
    if (!isEnabled && document.getElementById('set-timer-enable').checked) {
        document.getElementById('set-timer-enable').checked = false;
        toggleTimerField();
    }
}

function toggleTimerField() {
    const isEnabled = document.getElementById('set-timer-enable').checked;
    document.getElementById('timer-group').style.display = isEnabled ? 'block' : 'none';
    if (isEnabled && !document.getElementById('set-sec-enable').checked) {
        document.getElementById('set-sec-enable').checked = true;
        togglePasswordField();
    }
}

function openSettings() {
    document.getElementById('set-name').value = state.student;
    document.getElementById('set-crit').value = state.settings.crit;
    document.getElementById('set-consec-days').value = state.settings.consecDays || 3;
    document.getElementById('set-strict-day').checked = !!state.settings.strictDay;
    document.getElementById('set-errorless').checked = state.settings.errorless !== false;
    document.getElementById('set-topo-var').checked = !!state.settings.topoVar;
    document.getElementById('set-topo-mode').value = state.settings.topoMode || 'AUTO';
    document.getElementById('set-opts').value = state.settings.opts;
    document.getElementById('set-theme').value = state.settings.theme;
    document.getElementById('set-latency').value = state.settings.latency;

    const sc = state.settings.sylComplex || {};
    document.getElementById('set-syl-ccv').checked = !!sc.ccv;
    document.getElementById('set-syl-cvcl').checked = !!sc.cvcL;
    document.getElementById('set-syl-cvcs').checked = !!sc.cvcS;
    document.getElementById('set-syl-cvcm').checked = !!sc.cvcM;

    document.getElementById('set-stg-c1').checked = state.settings.stages.c1;
    document.getElementById('set-stg-c2').checked = state.settings.stages.c2;
    document.getElementById('set-stg-c3').checked = state.settings.stages.c3;
    document.getElementById('set-stg-c4').checked = state.settings.stages.c4 !== false;
    document.getElementById('set-use-mic').checked = state.settings.useMic;

    document.getElementById('set-sec-enable').checked = state.settings.security.enabled;
    document.getElementById('set-sec-pin').value = state.settings.security.pin;
    document.getElementById('set-kiosk-exit').checked = !!state.settings.security.lockExit;
    togglePasswordField();

    document.getElementById('set-timer-enable').checked = state.settings.timer.enabled;
    document.getElementById('set-timer-min').value = state.settings.timer.min;
    toggleTimerField();

    hideAllScreens();
    document.getElementById('screen-settings').classList.add('active');
}

function saveSettings() {
    const isSecEnabled = document.getElementById('set-sec-enable').checked;
    const pinValue = document.getElementById('set-sec-pin').value.trim();
    const isTimerEnabled = document.getElementById('set-timer-enable').checked;

    if (isSecEnabled && !pinValue) {
        customAlert("PIN Obrigatório", "Informe o código PIN para ativar a senha.");
        return;
    }

    let c1 = document.getElementById('set-stg-c1').checked;
    let c2 = document.getElementById('set-stg-c2').checked;
    let c3 = document.getElementById('set-stg-c3').checked;
    let c4 = document.getElementById('set-stg-c4').checked;
    if (!c1 && !c2 && !c3 && !c4) c1 = true;

    state.student = document.getElementById('set-name').value.toUpperCase().trim() || "ALUNO";
    state.settings.crit = parseInt(document.getElementById('set-crit').value) || 90;
    state.settings.consecDays = parseInt(document.getElementById('set-consec-days').value) || 3;
    state.settings.strictDay = document.getElementById('set-strict-day').checked;
    state.settings.errorless = document.getElementById('set-errorless').checked;
    state.settings.topoVar = document.getElementById('set-topo-var').checked;
    state.settings.topoMode = document.getElementById('set-topo-mode').value || 'AUTO';
    state.settings.opts = parseInt(document.getElementById('set-opts').value) || 3;
    state.settings.sylComplex = {
        ccv: document.getElementById('set-syl-ccv').checked,
        cvcL: document.getElementById('set-syl-cvcl').checked,
        cvcS: document.getElementById('set-syl-cvcs').checked,
        cvcM: document.getElementById('set-syl-cvcm').checked
    };
    state.settings.theme = document.getElementById('set-theme').value;
    state.settings.latency = parseInt(document.getElementById('set-latency').value) || 400;
    state.settings.stages = { c1, c2, c3, c4 };
    state.settings.useMic = document.getElementById('set-use-mic').checked;
    state.settings.security = {
        enabled: isSecEnabled,
        pin: pinValue,
        lockExit: document.getElementById('set-kiosk-exit').checked
    };
    state.settings.timer = {
        enabled: isTimerEnabled,
        min: parseInt(document.getElementById('set-timer-min').value) || 30
    };

    state.setupDone = true;
    saveState();
    applyTheme();
    goSplash();
}

function openReview(phaseId) {
    const pool = getPhasePool(phaseId);
    const mod = EIDOS_MODULES.find(m => m.id === phaseId);
    const activeV = getActiveVariationForModule(phaseId);
    document.getElementById('review-title').innerText = mod ? `Revisão: ${mod.code} ${mod.title} (Var ${activeV})` : `Revisão: ${phaseId}`;
    const grid = document.getElementById('review-grid');
    grid.innerHTML = '';

    pool.forEach(item => {
        const labelText = typeof item === 'object' ? (item.sentence || item.text || JSON.stringify(item)) : String(item);
        const isMarked = state.reviewHighlights && state.reviewHighlights[labelText];
        const chip = document.createElement('div');
        chip.innerHTML = formatStimulusTextHTML(labelText, phaseId);
        chip.style.padding = "12px 20px";
        chip.style.borderRadius = "14px";
        chip.style.fontSize = "1.15rem";
        chip.style.fontWeight = "900";
        chip.style.cursor = "pointer";
        chip.style.border = "2.5px solid " + (isMarked ? "var(--warning)" : "var(--border)");
        chip.style.background = isMarked ? "var(--warning-light)" : "#fff";
        chip.onclick = () => {
            playSound('click');
            if (state.reviewHighlights[labelText]) delete state.reviewHighlights[labelText];
            else state.reviewHighlights[labelText] = true;
            saveState();
            openReview(phaseId);
        };
        grid.appendChild(chip);
    });
    document.getElementById('modal-review').style.display = 'flex';
}

function openModulesManager() {
    const container = document.getElementById('modules-list-container');
    container.innerHTML = '';
    const allItems = [
        ...EIDOS_MODULES.map(m => ({ id: m.id, label: `${m.code} - ${m.title} (${m.level})` })),
        ...PHONOLOGICAL_ALPHABET_MODULES.map(pm => ({ id: pm.id, label: `Alfabeto Fonológico: ${pm.title}` })),
        ...syllabaryOrder.map(c => ({ id: c, label: `Silabário: ${c}` })),
        ...extraModules.map(e => ({ id: e, label: `Extra: ${e}` }))
    ];

    let allChecked = true;
    allItems.forEach(item => {
        const isChecked = state.unlocked.includes(item.id);
        if (!isChecked) allChecked = false;
        const lbl = document.createElement('label');
        lbl.style.display = 'flex';
        lbl.style.justifyContent = 'space-between';
        lbl.style.alignItems = 'center';
        lbl.style.padding = '12px 16px';
        lbl.style.border = '1.5px solid var(--border)';
        lbl.style.borderRadius = '12px';
        lbl.style.cursor = 'pointer';
        lbl.innerHTML = `<span style="font-weight:800;">${item.label}</span><input type="checkbox" class="mod-checkbox" value="${item.id}" ${isChecked ? 'checked' : ''} style="width:22px; height:22px;">`;
        container.appendChild(lbl);
    });
    document.getElementById('mod-select-all-chk').checked = allChecked;
    document.getElementById('modal-modules').style.display = 'flex';
}

function toggleSelectAllModules(checked) {
    playSound('click');
    document.querySelectorAll('.mod-checkbox').forEach(c => {
        c.checked = checked;
    });
}

function confirmSaveModulesManager() {
    const chks = document.querySelectorAll('.mod-checkbox');
    const unlocked = [];
    chks.forEach(c => { if (c.checked) unlocked.push(c.value); });
    if (unlocked.length === 0) unlocked.push('E1_1');

    closeModals();
    customAlert(
        "Controle Manual de Progressão",
        "Atenção: A liberação ou bloqueio manual de módulos desativará a progressão automática da trilha do aluno (ideal para testes de Linha de Base). Deseja aplicar esta seleção?",
        () => {
            state.unlocked = unlocked;
            state.manualProgressionOverride = true;
            saveState();
            playSound('win');
            renderGrid();
        },
        true
    );
}

function checkWordsInput() {
    const val = document.getElementById('custom-words-input').value.trim();
    document.getElementById('btn-start-words').disabled = val.length === 0;
}

function startCustomWords() {
    const val = document.getElementById('custom-words-input').value.trim();
    if (!val) return;
    state.customWords = val;
    saveState();
    closeModals();
    if (!ensureSessionTimerStarted()) return;

    let pool = val.split(',').map(w => w.trim().toUpperCase()).filter(w => w.length > 0);
    pool = [...new Set(pool)];
    const targets = shuffleArray(pool);
    let activeCycles = [];
    if (state.settings.stages.c1) activeCycles.push(1);
    if (state.settings.stages.c2) activeCycles.push(2);
    if (state.settings.stages.c3) activeCycles.push(3);
    if (activeCycles.length === 0) activeCycles = [1];

    undoSnapshot = null;
    session = {
        phase: 'PALAVRAS',
        eidosMod: null,
        activeVar: 1,
        pool,
        trials: targets,
        activeCycles,
        currentCycleIdx: 0,
        currentCycle: activeCycles[0],
        isOnlyCycle3: false,
        isPreReq: false,
        currentTrialIdx: 0,
        attemptsOnCurrent: 0,
        currentRenderedOptions: null,
        isRepeating: false,
        latencies: [],
        stats: resetSessionStats(activeCycles, targets.length)
    };
    openGame();
    renderTrial();
}

function openReport() {
    document.getElementById('report-modal-title').innerText = "Dados da Última Sessão";
    document.getElementById('report-modal-desc').innerText = "Registro estruturado para auditoria.";
    document.getElementById('json-output').value = state.log.length === 0
        ? "Nenhum dado registrado."
        : JSON.stringify(state.log[state.log.length - 1], null, 2);
    document.getElementById('modal-report').style.display = 'flex';
}

function copyJSON() {
    const txt = document.getElementById('json-output');
    txt.select();
    document.execCommand('copy');
    customAlert("Copiado!", "Conteúdo copiado para a área de transferência.");
}

function customAlert(title, desc, confirmCallback = null, isConfirm = false) {
    document.getElementById('alert-title').innerText = title;
    document.getElementById('alert-desc').innerText = desc;
    alertCallback = confirmCallback;
    const actions = document.getElementById('alert-actions');
    if (isConfirm) {
        actions.innerHTML = `
            <button type="button" class="btn-action btn-cancel" style="flex:1" onclick="closeAlert(false)">Cancelar</button>
            <button type="button" class="btn-action" style="flex:1; background:var(--danger);" onclick="closeAlert(true)">Confirmar</button>
        `;
    } else {
        actions.innerHTML = `<button type="button" class="btn-action" style="width:100%" onclick="closeAlert(true)">Entendido</button>`;
    }
    document.getElementById('modal-alert').style.display = 'flex';
}

function closeAlert(confirmed) {
    document.getElementById('modal-alert').style.display = 'none';
    if (confirmed && typeof alertCallback === 'function') alertCallback();
    alertCallback = null;
}

function resetApp() {
    closeModals();
    customAlert("Apagar Dados?", "Todo o histórico e edições locais salvas neste dispositivo serão removidos.", () => {
        localStorage.removeItem('eidos_mts_state');
        location.reload();
    }, true);
}

// Injeta os checkboxes de Colorização Consoante/Vogal e Moldura Silábica na Aba 2 do Modal de Tarefa
function injectCVColorControlsIntoTaskModal() {
    const topoPane = document.getElementById('task-tab-content-topo');
    if (!topoPane || document.getElementById('task-cfg-color-cv')) return;

    const extraDiv = document.createElement('div');
    extraDiv.style.marginTop = '14px';
    extraDiv.innerHTML = `
        <label style="display:flex; align-items:center; gap:10px; background:#F8FAFC; padding:12px 14px; border-radius:12px; border:1.5px solid var(--border); font-weight:800; cursor:pointer; margin-bottom:10px;">
            <input type="checkbox" id="task-cfg-color-cv" style="width:22px; height:22px;">
            <span>Colorizar Consoantes (Preto) e Vogais (Vermelho)</span>
        </label>
        <label style="display:flex; align-items:center; gap:10px; background:#F8FAFC; padding:12px 14px; border-radius:12px; border:1.5px solid var(--border); font-weight:800; cursor:pointer;">
            <input type="checkbox" id="task-cfg-syl-box" style="width:22px; height:22px;">
            <span>Enquadrar Sílabas com Moldura Azul</span>
        </label>
    `;
    topoPane.appendChild(extraDiv);

    const origOpen = openStimuliEditor;
    openStimuliEditor = function(modId) {
        origOpen(modId);
        const tCfg = getTaskConfig(modId);
        const chkCV = document.getElementById('task-cfg-color-cv');
        const chkBox = document.getElementById('task-cfg-syl-box');
        if (chkCV) chkCV.checked = !!tCfg.colorCV;
        if (chkBox) chkBox.checked = !!tCfg.sylBox;
    };

    const origSave = saveStimuliEditorChanges;
    saveStimuliEditorChanges = function() {
        const modId = editorSession.modId;
        const chkCV = document.getElementById('task-cfg-color-cv');
        const chkBox = document.getElementById('task-cfg-syl-box');
        const cvVal = chkCV ? chkCV.checked : false;
        const boxVal = chkBox ? chkBox.checked : false;
        origSave();
        if (modId && state.taskSettings[modId]) {
            state.taskSettings[modId].colorCV = cvVal;
            state.taskSettings[modId].sylBox = boxVal;
            saveState();
        }
    };
}

window.handleAndroidBack = function() {
    let modalOpen = false;
    document.querySelectorAll('.modal-overlay').forEach(m => { if (m.style.display === 'flex') modalOpen = true; });
    if (modalOpen) { closeModals(); return; }
    if (document.getElementById('screen-game').classList.contains('active')) { requestAbortGame(); return; }
    if (!document.getElementById('screen-splash').classList.contains('active')) { goSplash(); return; }
    if (window.AppInventor) window.AppInventor.setWebViewString("VOLTAR_MENU");
};

window.onload = function() {
    setupBackdropClosing();
    injectCVColorControlsIntoTaskModal();
    applyTheme();
    updateLobbyButton();
    if (!state.setupDone) openSettings();
};
