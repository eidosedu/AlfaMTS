/* ============================================================================
   ALFAMTS - MOTOR PRINCIPAL (SEÇÕES 5.0, 5, 6, 7 E 8 — v2.1.0)
   CAMADA DE ANIMAÇÕES • MOEDA 3D • BOTTOM SHEET MINIMALISTA • ONDAS DE ÁUDIO
   ============================================================================ */

/* ============================================================================
   5.0 CATÁLOGO DE FONTES, SVGS INLINE, ÁUDIO FONÊMICO E MOTOR DE MÍDIA
   ============================================================================ */
const CUSTOM_FONTS_CATALOG = [
    { id: 'GLOBAL', label: 'CAIXA ALTA', cssClass: '', casing: 'UPPER' },
    { id: 'LOWER',  label: 'minúsculas', cssClass: 'topo-lower', casing: 'LOWER' },
    { id: 'SERIF',  label: 'Serifada', cssClass: 'topo-serif', casing: 'ORIGINAL' },
    { id: 'SCHOOL', label: 'Cursiva (Mamãe Que Nos Faz)', cssClass: 'topo-school', casing: 'TITLE_CASE' },
    { id: 'MIX',    label: 'Alternar Automaticamente', cssClass: '', casing: 'MIX' }
];

function formatTextForFontCase(rawText, fontKey = 'GLOBAL') {
    const str = String(rawText || '').trim();
    if (!str) return '';

    const isSingleChar = (str.length === 1);
    const isSingleCharLower = (isSingleChar && str === str.toLowerCase() && str !== str.toUpperCase());

    if (fontKey === 'SCHOOL') {
        if (isSingleChar) {
            return isSingleCharLower ? str : str.toLowerCase();
        }
        if (!str.includes(' ') && str.length <= 2) {
            return str.toLowerCase();
        }
        const lower = str.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    if (fontKey === 'LOWER') {
        return str.toLowerCase();
    }

    return str;
}

const UI_SVGS = {
    volume: `<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
    volumeSm: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    mic: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`,
    eye: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    hourglass: `<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>`,
    arrowRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    checkCircle: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    undoMini: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>`,
    touch: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
    spaceBar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"/></svg>`,
    backspace: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>`,
    trophy: `<svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
    target: `<svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    grid: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    replay: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
    coin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1"/><path d="M12 6v2m0 8v2"/></svg>`,
    imageMini: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
    zap: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    bookOpen: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    chevronDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    layers: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
};

/* CATÁLOGO DE SLUGS .WEBP DO REPOSITÓRIO (~400 IMAGENS DESACOPLADAS) */
const DEFAULT_REPO_WORDS_CATALOG = [
    'abacaxi', 'abelha', 'aquario', 'arvore', 'aviao', 'azeite', 'banana', 'barco',
    'batata', 'bebe', 'bico', 'blusa', 'boca', 'bola', 'bolo', 'boneca', 'bota',
    'bote', 'bruxa', 'bule', 'buzina', 'cabide', 'cachorro', 'caixa', 'caju', 'cama',
    'caneca', 'caqui', 'carro', 'carta', 'casa', 'cavalo', 'cebola', 'cenoura', 'chave',
    'chuva', 'cinto', 'cobra', 'cola', 'copo', 'coruja', 'dado', 'dedo', 'dente',
    'dez', 'dia', 'doce', 'escada', 'escova', 'espada', 'estrela', 'faca', 'fada',
    'fala', 'familia', 'figo', 'fila', 'fita', 'flauta', 'flor', 'foca', 'fofo',
    'fogo', 'foguete', 'folha', 'formiga', 'galinha', 'galo', 'garfo', 'gato', 'gelo',
    'gema', 'girafa', 'gola', 'gota', 'guitarra', 'ilha', 'jacare', 'janela', 'jiboia',
    'joaninha', 'jogo', 'laco', 'lago', 'lama', 'lata', 'leao', 'leite', 'leque',
    'limao', 'livro', 'lixo', 'lobo', 'lote', 'lua', 'luta', 'luva', 'maca',
    'macaco', 'mala', 'mamadeira', 'mao', 'martelo', 'mato', 'meia', 'melao', 'menina',
    'menino', 'mesa', 'milho', 'mola', 'moto', 'muleta', 'navio', 'ninho', 'noite',
    'nuvem', 'olho', 'osso', 'ovelha', 'ovo', 'panela', 'pao', 'passaro', 'pasta',
    'pata', 'pato', 'paz', 'pe', 'pedra', 'peixe', 'pente', 'peteca', 'pipa',
    'pirulito', 'placa', 'planta', 'ponte', 'porta', 'pote', 'prato', 'prego', 'quatro',
    'queijo', 'quiabo', 'rato', 'rede', 'rei', 'relogio', 'rio', 'roda', 'rosa',
    'roupa', 'rua', 'sabonete', 'sacola', 'salada', 'sapato', 'sapo', 'sino', 'sofa',
    'sol', 'suco', 'tambor', 'tapete', 'tatu', 'taxi', 'teia', 'tela', 'telefone',
    'teto', 'tia', 'tigre', 'tijolo', 'tio', 'tomate', 'trator', 'trem', 'tucano',
    'tudo', 'urso', 'uva', 'vaca', 'vassoura', 'vela', 'vila', 'violao', 'xale',
    'xicara', 'zebra', 'zero', '10', 'chiclete', 'cuscuz', 'camisa', 'nove', 'numero',
    'oito', 'seis', 'sete', 'mae', 'pai', 'carne', 'cinco', 'dois', 'frango', 'lasanha',
    'pizza', 'tres', 'um', 'fone', 'mause', 'microfone', 'notebook', 'tablet', 'teclado',
    'beterraba', 'castor', 'furao', 'gaivota', 'javali', 'lontra', 'ourico', 'pelicano',
    'abobora', 'abobrinha', 'couve', 'ervilha', 'espinafre', 'lentilha', 'pepino', 'rabanete', 'vagem',
    'camera', 'celular', 'computador', 'alicate', 'bateria', 'alface', 'brocolis', 'flamingo', 'golfinho',
    'rucula', 'tubarao', 'aguia', 'andorinha', 'camelo', 'corvo', 'elefante', 'gaviao', 'hipopotamo',
    'pardal', 'rinoceronte', 'coelho', 'esquilo', 'hamster', 'pinguim', 'pombo', 'raposa', 'texugo',
    'toupeira', 'furadeira', 'pandeiro', 'piano', 'saxofone', 'serrote', 'trena', 'violino', 'acelga',
    'alhoporo', 'camarao', 'couveflor', 'iguana', 'lagosta', 'lula', 'lapiseira', 'ostra', 'polvo',
    'alho', 'berinjela', 'cebolinha', 'coentro', 'inhame', 'mandioca', 'pimentao', 'repolho', 'salsa',
    'arroz', 'bife', 'camaleao', 'codorna', 'linguica', 'macarrao', 'salamandra', 'sopa', 'falcao',
    'apontador', 'caneta', 'estojo', 'gizdecera', 'lapisdecor', 'marcador', 'parafuso', 'triangulo', 'alpaca',
    'pneu', 'agua', 'tartaruga', 'telhado', 'lapis', 'caderno', 'colher', 'pires', 'tenis'
];

let repoWordsCatalog = (typeof REPO_WORDS_CATALOG !== 'undefined' && Array.isArray(REPO_WORDS_CATALOG))
    ? [...new Set([...REPO_WORDS_CATALOG, ...DEFAULT_REPO_WORDS_CATALOG])]
    : [...new Set(DEFAULT_REPO_WORDS_CATALOG)];

function toCleanSlug(rawStr) {
    return String(rawStr || '')
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[;\/\-]/g, '')
        .replace(/[^a-z0-9_]/g, '');
}

async function loadRepoWordsCatalog() {
    try {
        const res = await fetch('assets/img/palavras/catalog.json');
        if (res.ok) {
            const list = await res.json();
            if (Array.isArray(list) && list.length > 0) {
                repoWordsCatalog = [...new Set([...repoWordsCatalog, ...list.map(s => toCleanSlug(s))])];
            }
        }
    } catch (e) {}
}

function getRepoWordWebpPath(wordOrSlug) {
    const slug = toCleanSlug(wordOrSlug);
    return `assets/img/palavras/${slug}.webp`;
}

function getPhonemeAudioPath(letter, varIdx = '1') {
    const k = String(letter || '').toUpperCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const entry = (typeof FONEMAS_AUDIO_MAP !== 'undefined') ? FONEMAS_AUDIO_MAP[k] : null;
    const isVowel = ['A', 'E', 'I', 'O', 'U'].includes(k);
    const prefix = isVowel ? 'v' : 'c';
    if (!entry) return `assets/audio/fonemas/${prefix}-${k.toLowerCase()}-${varIdx}.ogg`;
    if (typeof entry === 'string') return `assets/audio/fonemas/${entry}`;
    const file = entry[String(varIdx)] || entry['1'] || Object.values(entry)[0];
    return `assets/audio/fonemas/${file}`;
}

function getMouthImagePath(letter, varIdx = '1') {
    const k = String(letter || 'a').trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const v = String(varIdx || '1').trim().toLowerCase();
    return `assets/img/bocas/b-${k}-${v}.webp`;
}

function getMouthFallbackPath(letter, varIdx = '1') {
    const k = String(letter || 'a').trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const v = String(varIdx || '1').trim().toLowerCase();
    return `assets/img/b-${k}-${v}.webp`;
}

function buildMouthImgTagWithFallback(letter, varIdx = '1', styleStr = 'width:100%; height:100%; object-fit:contain;') {
    const primarySrc = getMouthImagePath(letter, varIdx);
    const fallbackSrc = getMouthFallbackPath(letter, varIdx);
    return `<img src="${primarySrc}" alt="Boca ${letter}" draggable="false" style="${styleStr}" onerror="if(this.src.indexOf('/bocas/')!==-1){this.src='${fallbackSrc}';}else{this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';}">`;
}

let activePhonemeAudioObj = null;
let phonemeDoublePlayTimer = null;

function playPhonemeAudioFile(letter, varIdx = '1', playTwice = false) {
    if (phonemeDoublePlayTimer) { clearTimeout(phonemeDoublePlayTimer); phonemeDoublePlayTimer = null; }
    if (activePhonemeAudioObj) {
        try { activePhonemeAudioObj.pause(); activePhonemeAudioObj.currentTime = 0; } catch (e) {}
    }
    if (window.AlfaAnimations && typeof window.AlfaAnimations.triggerAudioWave === 'function') {
        window.AlfaAnimations.triggerAudioWave(null, playTwice ? 1800 : 1000);
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

/* BANCO DE IMAGENS LOCAL (INDEXEDDB) */
const MEDIA_DB_NAME = 'AlfaMTS_MediaDB';
const MEDIA_STORE_NAME = 'custom_images';
let mediaDBInstance = null;
let customImagesCache = {};

function openMediaIndexedDB() {
    return new Promise((resolve) => {
        if (mediaDBInstance) return resolve(mediaDBInstance);
        if (!window.indexedDB) return resolve(null);
        const req = indexedDB.open(MEDIA_DB_NAME, 1);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(MEDIA_STORE_NAME)) {
                db.createObjectStore(MEDIA_STORE_NAME, { keyPath: 'id' });
            }
        };
        req.onsuccess = (e) => {
            mediaDBInstance = e.target.result;
            resolve(mediaDBInstance);
        };
        req.onerror = () => resolve(null);
    });
}

async function loadAllCustomImagesIntoCache() {
    const db = await openMediaIndexedDB();
    if (!db) return;
    return new Promise((resolve) => {
        try {
            const tx = db.transaction(MEDIA_STORE_NAME, 'readonly');
            const store = tx.objectStore(MEDIA_STORE_NAME);
            const req = store.getAll();
            req.onsuccess = () => {
                customImagesCache = {};
                (req.result || []).forEach(item => {
                    customImagesCache[item.id] = item;
                });
                resolve();
            };
            req.onerror = () => resolve();
        } catch (e) {
            resolve();
        }
    });
}

async function saveCustomImageToIndexedDB(record) {
    const db = await openMediaIndexedDB();
    customImagesCache[record.id] = record;
    if (!db) return record;
    return new Promise((resolve) => {
        try {
            const tx = db.transaction(MEDIA_STORE_NAME, 'readwrite');
            tx.objectStore(MEDIA_STORE_NAME).put(record);
            tx.oncomplete = () => resolve(record);
            tx.onerror = () => resolve(record);
        } catch (e) {
            resolve(record);
        }
    });
}

async function deleteCustomImageFromIndexedDB(imgId) {
    delete customImagesCache[imgId];
    const db = await openMediaIndexedDB();
    if (!db) return;
    return new Promise((resolve) => {
        try {
            const tx = db.transaction(MEDIA_STORE_NAME, 'readwrite');
            tx.objectStore(MEDIA_STORE_NAME).delete(imgId);
            tx.oncomplete = () => resolve();
            tx.onerror = () => resolve();
        } catch (e) {
            resolve();
        }
    });
}

function compressAndConvertImageToWebP(file, scaleFactor = 0.5, quality = 0.82) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
            const img = new Image();
            img.onload = () => {
                let targetW = Math.max(48, Math.round(img.width * scaleFactor));
                let targetH = Math.max(48, Math.round(img.height * scaleFactor));
                const maxDim = 640;
                if (targetW > maxDim || targetH > maxDim) {
                    if (targetW > targetH) {
                        targetH = Math.round((targetH * maxDim) / targetW);
                        targetW = maxDim;
                    } else {
                        targetW = Math.round((targetW * maxDim) / targetH);
                        targetH = maxDim;
                    }
                }
                const canvas = document.createElement('canvas');
                canvas.width = targetW;
                canvas.height = targetH;
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, targetW, targetH);
                ctx.drawImage(img, 0, 0, targetW, targetH);
                const dataUrl = canvas.toDataURL('image/webp', quality);
                const sizeKB = Math.round((dataUrl.length * 3) / 4 / 1024);
                const cleanName = file.name.replace(/\.[^/.]+$/, '').toUpperCase().trim();
                resolve({
                    id: 'img_' + Date.now() + '_' + Math.floor(Math.random() * 10000),
                    name: cleanName,
                    dataUrl,
                    width: targetW,
                    height: targetH,
                    sizeKB
                });
            };
            img.onerror = () => reject(new Error('Falha ao abrir imagem'));
            img.src = ev.target.result;
        };
        reader.onerror = () => reject(new Error('Falha ao ler arquivo'));
        reader.readAsDataURL(file);
    });
}

/* PARSER SILÁBICO INTELIGENTE POR HÍFEN E DESACOPLAMENTO VISUAL DAS ~400 IMAGENS */
function getNormalizedWordKey(rawKey) {
    const str = String(rawKey || '').trim().toUpperCase();
    if (str.includes(';') || str.includes('/') || str.includes('-')) {
        const parts = str.split(/[;\/\-]+/).map(s => s.trim()).filter(Boolean);
        const joined = parts.join('');
        if (parts.length > 1 && typeof state !== 'undefined' && state && state.customSyllablesMap) {
            state.customSyllablesMap[joined] = parts;
        }
        return joined;
    }
    return str;
}

function extractExplicitSyllables(rawKey) {
    const str = String(rawKey || '').trim().toUpperCase();
    if (!str) return [];

    if (str.includes('-') || str.includes('/') || str.includes(';')) {
        const parts = str.split(/[-\/;]+/).map(s => s.trim()).filter(Boolean);
        const cleanJoined = parts.join('');
        if (parts.length > 1 && typeof state !== 'undefined' && state) {
            if (!state.customSyllablesMap) state.customSyllablesMap = {};
            state.customSyllablesMap[cleanJoined] = parts;
        }
        return parts;
    }

    const cleanKey = getNormalizedWordKey(str);
    if (typeof state !== 'undefined' && state && state.customSyllablesMap && Array.isArray(state.customSyllablesMap[cleanKey])) {
        return [...state.customSyllablesMap[cleanKey]];
    }
    if (typeof WORD_BANK !== 'undefined' && WORD_BANK[cleanKey] && Array.isArray(WORD_BANK[cleanKey].syllables)) {
        return [...WORD_BANK[cleanKey].syllables];
    }
    return [cleanKey];
}

function getExplicitSyllableCount(rawKey) {
    const syls = extractExplicitSyllables(rawKey);
    if (syls.length > 1) return syls.length;
    const cleanKey = getNormalizedWordKey(rawKey);
    if (typeof WORD_BANK !== 'undefined' && WORD_BANK[cleanKey] && typeof WORD_BANK[cleanKey].count === 'number') {
        return WORD_BANK[cleanKey].count;
    }
    return 1;
}

function getWordVisualRepresentationHTML(wordKey, sizeRem = 3.6) {
    const rawUpper = String(wordKey || '').trim().toUpperCase();
    const cleanKey = getNormalizedWordKey(rawUpper);
    const slug = toCleanSlug(cleanKey);
    const px = Math.round(sizeRem * 22);
    const svgSize = Math.round(sizeRem * 16);
    const fallbackSvg = `<svg width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;

    const customMedia = (state && state.customWordMedia)
        ? (state.customWordMedia[rawUpper] || state.customWordMedia[cleanKey])
        : null;

    if (customMedia) {
        if (customMedia.type === 'IDB' && customImagesCache[customMedia.val]) {
            const src = customImagesCache[customMedia.val].dataUrl;
            return `<img src="${src}" alt="${cleanKey}" draggable="false" style="width:${px}px; height:${px}px; object-fit:contain; border-radius:14px; display:block; margin:0 auto;">`;
        }
        if (customMedia.type === 'REPO' && customMedia.val) {
            const repoSrc = getRepoWordWebpPath(customMedia.val);
            return `<div style="display:flex; align-items:center; justify-content:center;"><img src="${repoSrc}" alt="${cleanKey}" draggable="false" style="width:${px}px; height:${px}px; object-fit:contain; border-radius:14px; display:block; margin:0 auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';"><span style="display:none; align-items:center; justify-content:center;">${fallbackSvg}</span></div>`;
        }
        if (customMedia.type === 'EMOJI' && customMedia.val) {
            return `<span style="font-size:${sizeRem}rem; line-height:1;">${customMedia.val}</span>`;
        }
    }

    const matchedByName = Object.values(customImagesCache).find(item =>
        item.name === cleanKey || item.name === rawUpper || toCleanSlug(item.name) === slug
    );
    if (matchedByName) {
        return `<img src="${matchedByName.dataUrl}" alt="${cleanKey}" draggable="false" style="width:${px}px; height:${px}px; object-fit:contain; border-radius:14px; display:block; margin:0 auto;">`;
    }

    const wObj = (typeof WORD_BANK !== 'undefined') ? (WORD_BANK[cleanKey] || WORD_BANK[rawUpper]) : null;
    const targetSrc = (wObj && wObj.img) ? wObj.img : getRepoWordWebpPath(slug);

    return `<div style="display:flex; align-items:center; justify-content:center;"><img src="${targetSrc}" alt="${cleanKey}" draggable="false" style="width:${px}px; height:${px}px; object-fit:contain; border-radius:14px; display:block; margin:0 auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';"><span style="display:none; align-items:center; justify-content:center;">${fallbackSvg}</span></div>`;
}

function hasValidVisualRepresentation(wordKey) {
    const rawUpper = String(wordKey || '').trim().toUpperCase();
    const cleanKey = getNormalizedWordKey(rawUpper);
    const slug = toCleanSlug(cleanKey);
    if (!slug) return false;
    if (state && state.customWordMedia && (state.customWordMedia[rawUpper] || state.customWordMedia[cleanKey])) return true;
    if (Object.values(customImagesCache).some(item => item.name === cleanKey || item.name === rawUpper || toCleanSlug(item.name) === slug)) return true;
    if (repoWordsCatalog.includes(slug)) return true;
    if (typeof WORD_BANK !== 'undefined' && (WORD_BANK[cleanKey] || WORD_BANK[rawUpper])) return true;
    return true;
}

/* ============================================================================
   5. ESTADO GLOBAL, 4 GEARS DO SILABÁRIO (DISJUNÇÃO EXCLUSIVA) E MULTI-TENANT
   ============================================================================ */
let activeRole = 'ANALYST';

const FALLBACK_TYPO_GEN_MODULE = {
    id: 'EX_TYPO_GEN',
    code: 'EX.5',
    level: 'EXTRAS',
    title: 'Generalização Tipográfica',
    desc: 'Transferência de controle entre Bastão Maiúscula, imprensa minúscula e Cursiva.',
    engine: 'MULTIMTS',
    subType: 'TYPO_GEN_MM'
};

function getEffectiveEidosModules() {
    const base = (typeof EIDOS_MODULES !== 'undefined' && Array.isArray(EIDOS_MODULES)) ? [...EIDOS_MODULES] : [];
    if (!base.some(m => m.id === 'EX_TYPO_GEN')) {
        base.push(FALLBACK_TYPO_GEN_MODULE);
    }
    return base;
}

const ALL_SYLLABARY_KEYS = [
    'VOGAIS', 'ENCONTROS',
    'T', 'L', 'M',
    'F', 'B', 'R',
    'P', 'N', 'V',
    'S', 'D', 'J',
    'X', 'Z',
    'C', 'G', 'Q'
];

const STRUCTURED_SYLLABARY_ORDER = [...ALL_SYLLABARY_KEYS];

const FALLBACK_CUMULATIVE_SYL_WORDS = {
    'T': ['TATU', 'TETO', 'TIA', 'TIO', 'TEIA', 'TUDO'],
    'L': ['LATA', 'LUTA', 'TELA', 'LUA', 'LEITE', 'LOTE'],
    'M': ['MALA', 'MATO', 'MOLA', 'TOMATE', 'MULETA', 'LAMA'],
    'F': ['FACA', 'FITA', 'FOGO', 'FAMÍLIA', 'FALA', 'FOFO'],
    'B': ['BOLA', 'BOLO', 'BOTA', 'BULE', 'LOBO', 'BEBÊ'],
    'R': ['RATO', 'RODA', 'REDE', 'RUA', 'REI', 'ROUPA'],
    'P': ['PATO', 'PIPA', 'PANELA', 'PETECA', 'POTE', 'PÉ'],
    'N': ['NAVIO', 'BONECA', 'CANECA', 'MENINO', 'MENINA', 'NUVEM'],
    'V': ['VACA', 'VELA', 'LUVA', 'VIOLÃO', 'OVO', 'AVIÃO'],
    'S': ['SAPO', 'SUCO', 'SOFÁ', 'SALADA', 'SAPATO', 'SINO'],
    'D': ['DADO', 'DEDO', 'DENTE', 'CABIDE', 'DOCE', 'DIA'],
    'J': ['JACARÉ', 'JANELA', 'TIJOLO', 'CAJU', 'JOGO', 'JIBOIA'],
    'X': ['LIXO', 'XÍCARA', 'XALE', 'ABACAXI', 'CAIXA', 'PEIXE'],
    'Z': ['ZEBRA', 'ZERO', 'BUZINA', 'AZEITE', 'DEZ', 'PAZ'],
    'C': ['CASA', 'CAMA', 'COPO', 'CAVALO', 'MACACO', 'TUCANO'],
    'G': ['GATO', 'GALO', 'FOGO', 'GOTA', 'LAGO', 'FIGO'],
    'Q': ['QUEIJO', 'QUIABO', 'QUATRO', 'AQUÁRIO', 'LEQUE', 'CAQUI']
};

/* CATÁLOGO DAS 4 GEARS DO SILABÁRIO (DISJUNÇÃO EXCLUSIVA + PIVÔS DE REVISÃO) */
const DEFAULT_SYLLABARY_GEARS = {
    GEAR_1: {
        id: 'GEAR_1',
        shortLabel: 'Gear 1',
        shortTag: 'CV • CVV',
        title: 'Gear 1 — Base',
        desc: 'Sílabas simples abertas (CV) e encontros vocálicos (CVV).',
        order: ['VOGAIS', 'ENCONTROS', 'T', 'L', 'M', 'F', 'B', 'R', 'P', 'N', 'V', 'S', 'D', 'J', 'X', 'Z', 'C', 'G', 'Q'],
        pivots: [],
        initialUnlocked: ['VOGAIS', 'ENCONTROS', 'T'],
        words: null
    },
    GEAR_2: {
        id: 'GEAR_2',
        shortLabel: 'Gear 2',
        shortTag: 'CVC • R / L',
        title: 'Gear 2 — Fechadas em R e L',
        desc: 'Sílabas CV, CVV e CVC travadas em R e L.',
        order: ['T', 'M', 'B', 'P', 'R', 'F', 'C', 'G', 'D', 'S', 'J', 'L'],
        pivots: ['R', 'L'],
        initialUnlocked: ['T'],
        words: {
            'T': { 1: ['TARTARUGA', 'TORTA', 'TORNEIRA', 'TARDE'], 2: ['TALCO', 'TURBINA', 'TALHER', 'TORPEDO'] },
            'M': { 1: ['MARTELO', 'MARCADOR', 'MAR', 'MEL'], 2: ['MORCEGO', 'MURALHA', 'MOLDURA', 'MERGULHO'] },
            'B': { 1: ['BARCO', 'BALDE', 'BOLSA', 'BORBOLETA'], 2: ['BALCÃO', 'BARBA', 'BERÇO', 'BULBO', 'BORDADO'] },
            'P': { 1: ['PORTA', 'POLVO', 'PARDAL', 'PERNA'], 2: ['PORCO', 'PALCO', 'PARQUE', 'PORTO', 'PULGA'] },
            'R': { 1: ['BARCO', 'PORTA', 'MARTELO', 'URSO', 'ÁRVORE'], 2: ['GARFO', 'CARTA', 'CORVO', 'FORMIGA', 'TARTARUGA'] },
            'F': { 1: ['FORMIGA', 'FAROL', 'FILME', 'FURACÃO'], 2: ['FALCÃO', 'FORNO', 'FOLGA', 'FURGÃO'] },
            'C': { 1: ['CARTA', 'CARNE', 'CORVO', 'COLHER', 'CELULAR'], 2: ['CORDA', 'CALÇA', 'CARACOL', 'COBERTOR', 'CARTEIRA'] },
            'G': { 1: ['GARFO', 'GOLFINHO', 'GALPÃO', 'GARGALO'], 2: ['GUARDA', 'GORRO', 'GARRAFA', 'GIRASSOL'] },
            'D': { 1: ['DARDO', 'DEDAL', 'DORMIR', 'DORSO'], 2: ['DARDO', 'DEDAL', 'DORMIR', 'DORSO'] },
            'S': { 1: ['SORVETE', 'SARDINHA', 'SERRA', 'SOL'], 2: ['SERROTE', 'SOLDADO', 'SELVA', 'SALMÃO'] },
            'J': { 1: ['JORNAL', 'JARRA', 'JARDINEIRO', 'JOGADOR'], 2: ['JORNADA', 'JORNAL', 'JARRA', 'JOGADOR'] },
            'L': { 1: ['SOL', 'ALFACE', 'GOLFINHO', 'POLVO', 'BALDE'], 2: ['PARDAL', 'CELULAR', 'CARACOL', 'FAROL', 'SAL'] }
        }
    },
    GEAR_3: {
        id: 'GEAR_3',
        shortLabel: 'Gear 3',
        shortTag: 'CVC • M/N / S',
        title: 'Gear 3 — Fechadas em M/N e S',
        desc: 'Sílabas CV, CVV, VC e CVC travadas em M, N e S.',
        order: ['T', 'B', 'P', 'M', 'L', 'F', 'D', 'N', 'C', 'G', 'V', 'R', 'J', 'S'],
        pivots: ['M', 'N', 'S'],
        initialUnlocked: ['T'],
        words: {
            'T': { 1: ['TAMBOR', 'TÊNIS', 'TINTA', 'TAMPA'], 2: ['TESTA', 'TOMBO', 'TANQUE', 'TOSSE'] },
            'B': { 1: ['BANCO', 'BOMBA', 'BISCOITO', 'BAMBU'], 2: ['BÚSSOLA', 'BONDE', 'BENGALA', 'BANDO'] },
            'P': { 1: ['PASTA', 'PENTE', 'PONTE', 'POMBO', 'PÁSSARO'], 2: ['PINGUIM', 'PISCINA', 'PINTO', 'PUDIM', 'PANTERA'] },
            'M': { 1: ['MANGA', 'MUNDO', 'MANTEIGA', 'MONTE'], 2: ['MORANGO', 'MENSAGEM', 'MANTA', 'MANGUEIRA'] },
            'L': { 1: ['LÁPIS', 'LENTILHA', 'LANCHE', 'LESMA'], 2: ['LANTERNA', 'LENÇO', 'LENTE', 'LISTA'] },
            'F': { 1: ['FANTASMA', 'FESTA', 'FUSCA', 'FÓSFORO'], 2: ['FONTE', 'FUNGOS', 'FENDA', 'FAZENDA'] },
            'D': { 1: ['DENTE', 'DISCO', 'DANÇA', 'DENTISTA'], 2: ['DUENDE', 'DESFILE', 'DENGUE', 'DESERTO'] },
            'N': { 1: ['NUVEM', 'DENTE', 'PONTE', 'ELEFANTE', 'PINGUIM'], 2: ['CINTO', 'PENTE', 'POMBO', 'TAMBOR', 'ESPONJA'] },
            'C': { 1: ['CINTO', 'CINCO', 'CUSCUZ', 'CAMPO', 'CESTO'], 2: ['CASTELO', 'CONCHA', 'CANGURU', 'COSTELA', 'CIMENTO'] },
            'G': { 1: ['GANSO', 'GOSMA', 'GAMBÁ', 'GARAGEM'], 2: ['GENTE', 'GIGANTE', 'GENGIVA', 'GÔNDOLA'] },
            'V': { 1: ['VASSOURA', 'VENTO', 'VESTIDO', 'VAMPIRO'], 2: ['VENTOSA', 'VAGEM', 'VESPA', 'VISTA'] },
            'R': { 1: ['RAMPA', 'ROSTO', 'ROSCA', 'RASTELO'], 2: ['RONCO', 'RENDA', 'RISCO', 'ROMBO'] },
            'J': { 1: ['JANTAR', 'JANGADA', 'JUMENTO', 'JASMIM'], 2: ['JANTAR', 'JANGADA', 'JUMENTO', 'JASMIM'] },
            'S': { 1: ['PASTA', 'ESCOVA', 'ESCADA', 'OSSO', 'LÁPIS'], 2: ['VASSOURA', 'ESPONJA', 'ESQUILO', 'ESTOJO', 'TÊNIS'] }
        }
    },
    GEAR_4: {
        id: 'GEAR_4',
        shortLabel: 'Gear 4',
        shortTag: 'CCV • CCVC',
        title: 'Gear 4 — Encontros Inseparáveis',
        desc: 'Grupos consonantais CCV e CCVC com R e L.',
        order: ['T', 'P', 'B', 'R', 'F', 'C', 'G', 'D', 'V', 'L'],
        pivots: ['R', 'L'],
        initialUnlocked: ['T'],
        words: {
            'T': { 1: ['TREM', 'TRATOR', 'TRIÂNGULO', 'TRILHO', 'TRUTA', 'TRABALHAR'], 2: ['TROFÉU', 'TRAVESSEIRO', 'TRINCA', 'TRONCO', 'TRICICLO', 'TRUQUE'] },
            'P': { 1: ['PRATO', 'PLANTA', 'PLACA', 'PRESENTE', 'PREGO', 'PLANETA'], 2: ['PRINCESA', 'PRATELEIRA', 'PROVA', 'PLÁSTICO', 'PLANTAR', 'PRÁTICA'] },
            'B': { 1: ['BRUXA', 'BLUSA', 'BRÓCOLIS', 'BRINQUEDO', 'BRINCO', 'BLOCO'], 2: ['BRANCO', 'BRIGADEIRO', 'BRONZE', 'BRINCAR', 'BLINDADO', 'BRILHO'] },
            'R': { 1: ['TREM', 'PRATO', 'BRUXA', 'FRUTA', 'CROCODILO', 'GRAVATA'], 2: ['TRATOR', 'PRESENTE', 'BRINQUEDO', 'FRANGO', 'DRAGÃO', 'GRILO'] },
            'F': { 1: ['FLOR', 'FLAUTA', 'FLAMINGO', 'FRUTA', 'FRANGO', 'FRIGIDEIRA'], 2: ['FLECHA', 'FLORESCER', 'FRESCA', 'FRITAR', 'FRONTAL', 'FLUTUAR'] },
            'C': { 1: ['COBRA', 'CROCODILO', 'CLAVÍCULA', 'CRIANÇA', 'CRUZ', 'CLIMA'], 2: ['CRISTAL', 'CREME', 'CLUBE', 'CLASSE', 'CRIAR', 'CROSTA'] },
            'G': { 1: ['GRAVATA', 'GLOBO', 'GRILO', 'GRANDE', 'GRADE', 'GLADIADOR'], 2: ['GROSSO', 'GRAVAR', 'GRUPO', 'GLICINA', 'GRAU', 'GRUTA'] },
            'D': { 1: ['DRAGÃO', 'DROGARIA', 'DRENAGEM'], 2: ['DRAGÃO', 'DROGARIA', 'DRENAGEM'] },
            'V': { 1: ['LIVRO', 'VIDRO'], 2: ['LIVRO', 'VIDRO'] },
            'L': { 1: ['PLANTA', 'BLUSA', 'FLOR', 'FLAUTA', 'GLOBO', 'CLUBE'], 2: ['PLACA', 'BLOCO', 'FLAMINGO', 'FLECHA', 'CRISTAL'] }
        }
    }
};

function getEffectiveSyllabaryGears() {
    if (typeof SYLLABARY_GEARS !== 'undefined' && SYLLABARY_GEARS && SYLLABARY_GEARS.GEAR_1) {
        return SYLLABARY_GEARS;
    }
    return DEFAULT_SYLLABARY_GEARS;
}

function getActiveSyllabaryGearId() {
    const gears = getEffectiveSyllabaryGears();
    const id = (typeof state !== 'undefined' && state && state.activeSyllabaryGear) ? state.activeSyllabaryGear : 'GEAR_1';
    return gears[id] ? id : 'GEAR_1';
}

function getActiveSyllabaryGearObj() {
    const gears = getEffectiveSyllabaryGears();
    return gears[getActiveSyllabaryGearId()] || gears.GEAR_1;
}

function getEffectiveSyllabaryOrder() {
    const gObj = getActiveSyllabaryGearObj();
    return (gObj && Array.isArray(gObj.order)) ? [...gObj.order] : [...ALL_SYLLABARY_KEYS];
}

function getCumulativeWordsForSyllableFamily(cons, specificVarKey = null) {
    const k = String(cons || '').toUpperCase().trim();
    const gearObj = getActiveSyllabaryGearObj();

    if (gearObj && gearObj.words && gearObj.words[k]) {
        const entry = gearObj.words[k];
        if (Array.isArray(entry)) return [...entry];
        const vk = specificVarKey || getActiveVariationForModule(k);
        const list = entry[vk] || entry[1] || Object.values(entry)[0] || [];
        return [...list];
    }

    if (typeof SYLLABARY_CUMULATIVE_WORDS !== 'undefined' && SYLLABARY_CUMULATIVE_WORDS[k]) {
        return [...SYLLABARY_CUMULATIVE_WORDS[k]];
    }
    if (FALLBACK_CUMULATIVE_SYL_WORDS[k]) {
        return FALLBACK_CUMULATIVE_SYL_WORDS[k].map(w => w.trim().toUpperCase());
    }
    return ['BOLA', 'MALA', 'PATO', 'GATO', 'SAPO', 'TATU'];
}

const DEFAULT_PHONEME_SETS = [
    { setNum: 1, id: 'FA_CHK_1', title: '★ Check-point Conjunto 1 (Vogais Orais)', members: ['FA_A_1', 'FA_I_1', 'FA_O_1', 'FA_E_1', 'FA_U_1'] },
    { setNum: 2, id: 'FA_CHK_2', title: '★ Check-point Conjunto 2 (Fechadas e Nasais)', members: ['FA_A_2', 'FA_E_2', 'FA_O_2'] },
    { setNum: 3, id: 'FA_CHK_3', title: '★ Check-point Conjunto 3 (D, T, Z, M, N)', members: ['FA_D_1', 'FA_T_1', 'FA_Z_1', 'FA_M_1', 'FA_N_1'] },
    { setNum: 4, id: 'FA_CHK_4', title: '★ Check-point Conjunto 4 (P, B, K)', members: ['FA_P_1', 'FA_B_1', 'FA_K_1'] },
    { setNum: 5, id: 'FA_CHK_5', title: '★ Check-point Conjunto 5 (L, V, X)', members: ['FA_L_1', 'FA_L_2', 'FA_V_1', 'FA_X_1'] },
    { setNum: 6, id: 'FA_CHK_6', title: '★ Check-point Conjunto 6 (C, G, F, J)', members: ['FA_C_1', 'FA_C_2', 'FA_G_1', 'FA_G_2', 'FA_F_1', 'FA_J_1'] },
    { setNum: 7, id: 'FA_CHK_7', title: '★ Check-point Conjunto 7 (R, S, Q, W)', members: ['FA_R_1', 'FA_R_2', 'FA_S_1', 'FA_S_2', 'FA_Q_1', 'FA_W_1'] }
];

function getPhonemeSetsCatalog() {
    if (typeof PHONEME_SETS !== 'undefined' && Array.isArray(PHONEME_SETS)) return PHONEME_SETS;
    return DEFAULT_PHONEME_SETS;
}

const DEFAULT_PHONEME_SETS_MODULES = [
    { id: 'FA_A_1', setNum: 1, letter: 'A', varIdx: '1', title: 'A (Oral /a/)', desc: 'Conjunto 1 • Vogal oral aberta /a/.' },
    { id: 'FA_I_1', setNum: 1, letter: 'I', varIdx: '1', title: 'I (Oral /i/)', desc: 'Conjunto 1 • Vogal oral anterior /i/.' },
    { id: 'FA_O_1', setNum: 1, letter: 'O', varIdx: '1', title: 'O (Aberto /ɔ/)', desc: 'Conjunto 1 • Vogal oral aberta /ɔ/.' },
    { id: 'FA_E_1', setNum: 1, letter: 'E', varIdx: '1', title: 'E (Aberto /ɛ/)', desc: 'Conjunto 1 • Vogal oral aberta /ɛ/.' },
    { id: 'FA_U_1', setNum: 1, letter: 'U', varIdx: '1', title: 'U (Oral /u/)', desc: 'Conjunto 1 • Vogal oral posterior /u/.' },
    { id: 'FA_CHK_1', setNum: 1, letter: 'A', varIdx: '1', isCheckpoint: true, title: '★ Avaliar Conjunto 1 (Vogais)', desc: 'Sondagem mista sem modelo das Vogais Orais.' },

    { id: 'FA_A_2', setNum: 2, letter: 'A', varIdx: '2', title: 'A (Nasal /ã/)', desc: 'Conjunto 2 • Vogal nasalizada /ã/.' },
    { id: 'FA_E_2', setNum: 2, letter: 'E', varIdx: '2', title: 'E (Fechado /e/)', desc: 'Conjunto 2 • Vogal fechada /e/.' },
    { id: 'FA_O_2', setNum: 2, letter: 'O', varIdx: '2', title: 'O (Fechado /o/)', desc: 'Conjunto 2 • Vogal fechada /o/.' },
    { id: 'FA_CHK_2', setNum: 2, letter: 'E', varIdx: '2', isCheckpoint: true, title: '★ Avaliar Conjunto 2 (Variações)', desc: 'Sondagem cumulativa dos Conjuntos 1 e 2.' },

    { id: 'FA_D_1', setNum: 3, letter: 'D', varIdx: '1', title: 'D (/d/)', desc: 'Conjunto 3 • Oclusiva dental sonora /d/.' },
    { id: 'FA_T_1', setNum: 3, letter: 'T', varIdx: '1', title: 'T (/t/)', desc: 'Conjunto 3 • Oclusiva dental surda /t/.' },
    { id: 'FA_Z_1', setNum: 3, letter: 'Z', varIdx: '1', title: 'Z (/z/)', desc: 'Conjunto 3 • Fricativa alveolar sonora /z/.' },
    { id: 'FA_M_1', setNum: 3, letter: 'M', varIdx: '1', title: 'M (/m/)', desc: 'Conjunto 3 • Nasal bilabial /m/.' },
    { id: 'FA_N_1', setNum: 3, letter: 'N', varIdx: '1', title: 'N (/n/)', desc: 'Conjunto 3 • Nasal alveolar /n/.' },
    { id: 'FA_CHK_3', setNum: 3, letter: 'D', varIdx: '1', isCheckpoint: true, title: '★ Avaliar Conjunto 3 (D, T, Z, M, N)', desc: 'Sondagem mista e retenção cumulativa até o Conjunto 3.' },

    { id: 'FA_P_1', setNum: 4, letter: 'P', varIdx: '1', title: 'P (/p/)', desc: 'Conjunto 4 • Oclusiva bilabial surda /p/.' },
    { id: 'FA_B_1', setNum: 4, letter: 'B', varIdx: '1', title: 'B (/b/)', desc: 'Conjunto 4 • Oclusiva bilabial sonora /b/.' },
    { id: 'FA_K_1', setNum: 4, letter: 'K', varIdx: '1', title: 'K (/k/)', desc: 'Conjunto 4 • Oclusiva velar surda /k/.' },
    { id: 'FA_CHK_4', setNum: 4, letter: 'P', varIdx: '1', isCheckpoint: true, title: '★ Avaliar Conjunto 4 (P, B, K)', desc: 'Sondagem mista e retenção cumulativa até o Conjunto 4.' },

    { id: 'FA_L_1', setNum: 5, letter: 'L', varIdx: '1', title: 'L (Inicial /l/)', desc: 'Conjunto 5 • Lateral alveolar /l/.' },
    { id: 'FA_L_2', setNum: 5, letter: 'L', varIdx: '2', title: 'L (Final /w/)', desc: 'Conjunto 5 • L em coda silábica /w/.' },
    { id: 'FA_V_1', setNum: 5, letter: 'V', varIdx: '1', title: 'V (/v/)', desc: 'Conjunto 5 • Fricativa labiodental sonora /v/.' },
    { id: 'FA_X_1', setNum: 5, letter: 'X', varIdx: '1', title: 'X (/ʃ/)', desc: 'Conjunto 5 • Fricativa pós-alveolar surda /ʃ/.' },
    { id: 'FA_CHK_5', setNum: 5, letter: 'L', varIdx: '1', isCheckpoint: true, title: '★ Avaliar Conjunto 5 (L, V, X)', desc: 'Sondagem mista e retenção cumulativa até o Conjunto 5.' },

    { id: 'FA_C_1', setNum: 6, letter: 'C', varIdx: '1', title: 'C (Forte /k/)', desc: 'Conjunto 6 • Oclusiva velar surda /k/.' },
    { id: 'FA_C_2', setNum: 6, letter: 'C', varIdx: '2', title: 'C (Brando /s/)', desc: 'Conjunto 6 • Fricativa surda /s/ antes de E, I.' },
    { id: 'FA_G_1', setNum: 6, letter: 'G', varIdx: '1', title: 'G (Forte /g/)', desc: 'Conjunto 6 • Oclusiva velar sonora /g/.' },
    { id: 'FA_G_2', setNum: 6, letter: 'G', varIdx: '2', title: 'G (Brando /ʒ/)', desc: 'Conjunto 6 • Fricativa sonora /ʒ/ antes de E, I.' },
    { id: 'FA_F_1', setNum: 6, letter: 'F', varIdx: '1', title: 'F (/f/)', desc: 'Conjunto 6 • Fricativa labiodental surda /f/.' },
    { id: 'FA_J_1', setNum: 6, letter: 'J', varIdx: '1', title: 'J (/ʒ/)', desc: 'Conjunto 6 • Fricativa pós-alveolar sonora /ʒ/.' },
    { id: 'FA_CHK_6', setNum: 6, letter: 'C', varIdx: '1', isCheckpoint: true, title: '★ Avaliar Conjunto 6 (C, G, F, J)', desc: 'Sondagem mista e retenção cumulativa até o Conjunto 6.' },

    { id: 'FA_R_1', setNum: 7, letter: 'R', varIdx: '1', title: 'R (Forte /x/)', desc: 'Conjunto 7 • R inicial ou duplo forte /x/.' },
    { id: 'FA_R_2', setNum: 7, letter: 'R', varIdx: '2', title: 'R (Brando /ɾ/)', desc: 'Conjunto 7 • Tepe alveolar intervocálico /ɾ/.' },
    { id: 'FA_S_1', setNum: 7, letter: 'S', varIdx: '1', title: 'S (Surdo /s/)', desc: 'Conjunto 7 • Fricativa alveolar surda /s/.' },
    { id: 'FA_S_2', setNum: 7, letter: 'S', varIdx: '2', title: 'S (Intervocálico /z/)', desc: 'Conjunto 7 • S intervocálico sonoro /z/.' },
    { id: 'FA_Q_1', setNum: 7, letter: 'Q', varIdx: '1', title: 'Q (/k/)', desc: 'Conjunto 7 • Oclusiva velar /k/.' },
    { id: 'FA_W_1', setNum: 7, letter: 'W', varIdx: '1', title: 'W (/w/)', desc: 'Conjunto 7 • Aproximante labiovelar /w/.' },
    { id: 'FA_CHK_7', setNum: 7, letter: 'R', varIdx: '1', isCheckpoint: true, title: '★ Avaliar Conjunto 7 (Domínio Total)', desc: 'Sondagem final de todos os 7 Conjuntos Fonêmicos.' }
];

function getEffectivePhonologicalModules() {
    if (typeof PHONOLOGICAL_ALPHABET_MODULES !== 'undefined' &&
        Array.isArray(PHONOLOGICAL_ALPHABET_MODULES) &&
        PHONOLOGICAL_ALPHABET_MODULES.some(m => m.isCheckpoint)) {
        return PHONOLOGICAL_ALPHABET_MODULES;
    }
    return DEFAULT_PHONEME_SETS_MODULES;
}

const DEFAULT_PALAVRARIO_DRAWERS = [
    { id: 'PAL_1', code: 'GAVETA 1', title: 'Dissílabas CV (Conj. 1 e 2)', desc: 'Palavras dissílabas formadas por T, L, M, F, B, R.', variations: { 1: ['TATU', 'LATA', 'MALA', 'FACA', 'BOLA', 'RATO'], 2: ['TELA', 'MOLA', 'FOCA', 'BOLO', 'BOTA', 'RODA'] } },
    { id: 'PAL_2', code: 'GAVETA 2', title: 'Dissílabas CV (Conj. 3 a 6)', desc: 'Palavras dissílabas com P, N, V, S, D, J, X, Z, C, G.', variations: { 1: ['PATO', 'VACA', 'SAPO', 'DADO', 'CASA', 'GATO'], 2: ['PIPA', 'LUVA', 'SUCO', 'DEDO', 'CAMA', 'GALO'] } },
    { id: 'PAL_3', code: 'GAVETA 3', title: 'Trissílabas Simples', desc: 'Palavras de 3 sílabas abertas controladas por extensão.', variations: { 1: ['TOMATE', 'PANELA', 'CAVALO', 'MACACO', 'SAPATO', 'BONECA'], 2: ['JANELA', 'TAPETE', 'BATATA', 'SALADA', 'CANECA', 'TUCANO'] } },
    { id: 'PAL_4', code: 'GAVETA 4', title: 'Encontros Vocálicos e Nasais', desc: 'Vocábulos com ditongos orais e vogais ou ditongos nasais.', variations: { 1: ['MÃO', 'PÃO', 'LEÃO', 'AVIÃO', 'VIOLÃO', 'LIMÃO'], 2: ['MEIA', 'TEIA', 'LEITE', 'CAIXA', 'PEIXE', 'MELÃO'] } },
    { id: 'PAL_5', code: 'GAVETA 5', title: 'Sílabas Travadas (CVC)', desc: 'Palavras com coda silábica em R, S, L, M, N.', variations: { 1: ['PORTA', 'BARCO', 'GARFO', 'URSO', 'SOL', 'PASTA'], 2: ['ESCOVA', 'FORMIGA', 'TAMBOR', 'PENTE', 'PONTE', 'NUVEM'] } },
    { id: 'PAL_6', code: 'GAVETA 6', title: 'Encontros Consonantais (CCV)', desc: 'Sílabas complexas com grupos consonantais em R e L.', variations: { 1: ['PRATO', 'BRUXA', 'LIVRO', 'PLANTA', 'BLUSA', 'ZEBRA'], 2: ['TREM', 'TRATOR', 'TIGRE', 'COBRA', 'FLOR', 'FLAUTA'] } },
    { id: 'PAL_7', code: 'GAVETA 7', title: 'Dígrafos', desc: 'Palavras com CH, LH, NH, RR, SS, QU e GU.', variations: { 1: ['CHAVE', 'ABELHA', 'NINHO', 'CARRO', 'OSSO', 'QUEIJO'], 2: ['CHUVA', 'MILHO', 'GALINHA', 'VASSOURA', 'PÁSSARO', 'FOGUETE'] } },
    { id: 'PAL_8', code: 'GAVETA 8', title: 'Irregulares e Contextuais', desc: 'Casos de CE/CI, GE/GI, Ç, S com som de Z e valores do X.', variations: { 1: ['MAÇÃ', 'LAÇO', 'GELO', 'GIRAFA', 'XÍCARA', 'CASA'], 2: ['DOCE', 'CEBOLA', 'RELÓGIO', 'PEIXE', 'TÁXI', 'ROSA'] } }
];

function getEffectivePalavrarioDrawers() {
    if (typeof PALAVRARIO_DRAWERS !== 'undefined' && Array.isArray(PALAVRARIO_DRAWERS) && PALAVRARIO_DRAWERS.length > 0) {
        return PALAVRARIO_DRAWERS;
    }
    return DEFAULT_PALAVRARIO_DRAWERS;
}

function getDefaultTokensClone() {
    if (typeof DEFAULT_TOKEN_STATE !== 'undefined') {
        return JSON.parse(JSON.stringify(DEFAULT_TOKEN_STATE));
    }
    return {
        balance: 0,
        totalEarned: 0,
        rules: {
            enabled: true,
            pointsPerMasteryBlock: 2,
            bonusConsecutiveStreak: 5,
            enableImmediateMiniReward: false,
            immediateMiniRewardDurationSec: 20,
            requirePinOnRocket: true
        },
        ledger: [],
        catalog: [
            { id: 'vouch_1', title: '5 Min de Massinha', cost: 4, mediaType: 'EMOJI', mediaVal: '🎨', desc: 'Tempo livre supervisionado.' },
            { id: 'vouch_2', title: 'Bolhas de Sabão', cost: 3, mediaType: 'EMOJI', mediaVal: '🫧', desc: 'Brincadeira sensorial.' }
        ]
    };
}

function createFreshStudentState(firstName = 'ALUNO') {
    const cleanFirst = String(firstName || 'ALUNO').trim().split(/\s+/)[0].toUpperCase() || 'ALUNO';
    const unlockedInit = [
        'VOGAIS', 'ENCONTROS', 'T',
        'PAL_1', 'PAL_2',
        'E1_1', 'E1_2', 'E1_3', 'E1_4', 'E1_5', 'E1_6', 'R_N1_EXTRA',
        'FA_A_1', 'FA_I_1', 'FA_O_1', 'FA_E_1', 'FA_U_1', 'FA_CHK_1',
        'EX_TYPO_GEN'
    ];
    getEffectiveEidosModules().filter(m => m.level === 'N1').forEach(m => {
        if (!unlockedInit.includes(m.id)) unlockedInit.push(m.id);
    });
    return {
        setupDone: true,
        student: cleanFirst,
        manualProgressionOverride: false,
        activeSyllabaryGear: 'GEAR_1',
        gearSnapshots: {},
        unlocked: unlockedInit,
        moduleProgress: {},
        phonemeMastery: {},
        customCurriculum: {},
        customSyllablesMap: {},
        customWordMedia: {},
        customModules: [],
        tokens: getDefaultTokensClone(),
        taskSettings: {},
        minimalPairSwaps: { 'F/V': 0, 'P/B': 0, 'T/D': 0, 'C/G': 0 },
        settings: {
            clinicalPreset: 'REGULAR',
            autoEntryProbe: false,
            crit: 90,
            consecDays: 2,
            strictDay: true,
            errorless: true,
            topoVar: false,
            topoMode: 'AUTO',
            opts: 3,
            dragToModelMTS: false,
            dragToModelMultiMTS: false,
            dragToModelCRMTS: false,
            holdToSelectMs: 0,
            holdOnCRMTS: false,
            dockSafetyLock: false,
            sylComplex: { ccv: false, cvcL: false, cvcS: false, cvcM: false },
            themeColor: '#3B82F6',
            latency: 400,
            security: { enabled: false, pin: '', analystPin: '', applicatorPin: '', lockExit: false },
            timer: { enabled: false, min: 30 },
            stages: { c1: true, c2: true, c3: true, c4: true },
            useMic: true
        },
        customWords: 'BOLA, GATO, BOLO, SAPATO, FACA, VACA',
        log: [],
        session: { expired: false, endTime: null, configuredMin: 30 },
        reviewHighlights: {}
    };
}

let tenantsIndex = JSON.parse(localStorage.getItem('alfamts_tenants_index')) || null;

function initTenantsAndActiveStudent() {
    const legacyRaw = localStorage.getItem('eidos_mts_state');
    if (!tenantsIndex || !Array.isArray(tenantsIndex.students) || tenantsIndex.students.length === 0) {
        let initialState = null;
        if (legacyRaw) {
            try { initialState = JSON.parse(legacyRaw); } catch (e) {}
        }
        if (!initialState) initialState = createFreshStudentState('MIGUEL');
        const firstName = String(initialState.student || 'MIGUEL').trim().split(/\s+/)[0].toUpperCase() || 'MIGUEL';
        initialState.student = firstName;
        const firstId = 'stu_' + Date.now();
        tenantsIndex = {
            activeStudentId: firstId,
            analystPin: (initialState.settings && initialState.settings.security && initialState.settings.security.pin) ? initialState.settings.security.pin : '',
            applicatorPin: '',
            lockExit: !!(initialState.settings && initialState.settings.security && initialState.settings.security.lockExit),
            students: [{ id: firstId, firstName, createdAt: new Date().toLocaleDateString('pt-BR') }]
        };
        localStorage.setItem('alfamts_tenants_index', JSON.stringify(tenantsIndex));
        localStorage.setItem('alfamts_student_' + firstId, JSON.stringify(initialState));
    }
    const activeId = tenantsIndex.activeStudentId || tenantsIndex.students[0].id;
    tenantsIndex.activeStudentId = activeId;
    const stuRaw = localStorage.getItem('alfamts_student_' + activeId);
    let loaded = null;
    if (stuRaw) {
        try { loaded = JSON.parse(stuRaw); } catch (e) {}
    }
    if (!loaded) {
        const meta = tenantsIndex.students.find(s => s.id === activeId) || { firstName: 'ALUNO' };
        loaded = createFreshStudentState(meta.firstName);
    }
    normalizeStudentState(loaded);
    return loaded;
}

function normalizeStudentState(st) {
    if (!st.activeSyllabaryGear || !getEffectiveSyllabaryGears()[st.activeSyllabaryGear]) {
        st.activeSyllabaryGear = 'GEAR_1';
    }
    if (!st.gearSnapshots || typeof st.gearSnapshots !== 'object') {
        st.gearSnapshots = {};
    }
    if (!st.moduleProgress) st.moduleProgress = {};
    if (!st.phonemeMastery) st.phonemeMastery = {};
    if (!st.customCurriculum) st.customCurriculum = {};
    if (!st.customSyllablesMap) st.customSyllablesMap = {};
    if (!st.customWordMedia) st.customWordMedia = {};
    if (!Array.isArray(st.customModules)) st.customModules = [];
    if (!st.tokens || typeof st.tokens !== 'object') {
        st.tokens = getDefaultTokensClone();
    } else {
        const defTok = getDefaultTokensClone();
        if (typeof st.tokens.balance !== 'number') st.tokens.balance = 0;
        if (typeof st.tokens.totalEarned !== 'number') st.tokens.totalEarned = 0;
        if (!st.tokens.rules) st.tokens.rules = defTok.rules;
        if (!Array.isArray(st.tokens.catalog)) st.tokens.catalog = defTok.catalog;
        if (!Array.isArray(st.tokens.ledger)) st.tokens.ledger = [];
    }
    if (!st.taskSettings) st.taskSettings = {};
    if (!st.minimalPairSwaps) st.minimalPairSwaps = { 'F/V': 0, 'P/B': 0, 'T/D': 0, 'C/G': 0 };
    if (!st.settings) st.settings = createFreshStudentState(st.student).settings;
    if (!st.settings.clinicalPreset) st.settings.clinicalPreset = 'REGULAR';
    if (typeof st.settings.autoEntryProbe !== 'boolean') st.settings.autoEntryProbe = false;
    if (typeof st.settings.dragToModelMTS !== 'boolean') st.settings.dragToModelMTS = false;
    if (typeof st.settings.dragToModelMultiMTS !== 'boolean') st.settings.dragToModelMultiMTS = false;
    if (typeof st.settings.dragToModelCRMTS !== 'boolean') st.settings.dragToModelCRMTS = false;
    if (typeof st.settings.holdToSelectMs !== 'number') st.settings.holdToSelectMs = 0;
    if (typeof st.settings.holdOnCRMTS !== 'boolean') st.settings.holdOnCRMTS = false;
    if (typeof st.settings.dockSafetyLock !== 'boolean') st.settings.dockSafetyLock = false;
    if (!st.settings.consecDays) st.settings.consecDays = 2;
    if (typeof st.settings.strictDay !== 'boolean') st.settings.strictDay = true;
    if (!st.settings.topoMode) st.settings.topoMode = 'AUTO';
    if (!st.settings.themeColor || !String(st.settings.themeColor).startsWith('#')) {
        st.settings.themeColor = '#3B82F6';
    }
    if (!st.settings.sylComplex) st.settings.sylComplex = { ccv: false, cvcL: false, cvcS: false, cvcM: false };
    if (!st.settings.security) st.settings.security = { enabled: false, pin: '', analystPin: '', applicatorPin: '', lockExit: false };
    if (!st.session) st.session = { expired: false, endTime: null, configuredMin: st.settings.timer ? st.settings.timer.min : 30 };
    if (!Array.isArray(st.unlocked)) st.unlocked = [];

    const activeGear = getEffectiveSyllabaryGears()[st.activeSyllabaryGear] || getEffectiveSyllabaryGears().GEAR_1;
    const baseUnlocks = [
        ...(activeGear.initialUnlocked || ['T']),
        'PAL_1', 'PAL_2',
        'FA_A_1', 'FA_I_1', 'FA_O_1', 'FA_E_1', 'FA_U_1', 'FA_CHK_1',
        'EX_TYPO_GEN'
    ];
    baseUnlocks.forEach(baseId => {
        if (!st.unlocked.includes(baseId)) st.unlocked.push(baseId);
    });
    getEffectiveEidosModules().filter(m => m.level === 'N1').forEach(m => {
        if (!st.unlocked.includes(m.id)) st.unlocked.push(m.id);
    });
    st.customModules.forEach(cm => {
        if (cm && cm.id && !st.unlocked.includes(cm.id)) st.unlocked.push(cm.id);
    });
    st.student = String(st.student || 'ALUNO').trim().split(/\s+/)[0].toUpperCase() || 'ALUNO';
}

let state = initTenantsAndActiveStudent();

/* TROCA DISJUNTA DE GEAR DO SILABÁRIO COM SNAPSHOTS + BOTTOM SHEET MINIMALISTA */
function switchSyllabaryGear(newGearId) {
    const gears = getEffectiveSyllabaryGears();
    if (!gears[newGearId]) return;
    const oldGearId = getActiveSyllabaryGearId();
    if (oldGearId === newGearId) {
        closeSyllabaryGearSheet();
        return;
    }

    if (!state.gearSnapshots) state.gearSnapshots = {};

    const oldProgress = {};
    const oldUnlocked = [];
    ALL_SYLLABARY_KEYS.forEach(k => {
        if (state.moduleProgress && state.moduleProgress[k]) {
            oldProgress[k] = JSON.parse(JSON.stringify(state.moduleProgress[k]));
        }
        if (Array.isArray(state.unlocked) && state.unlocked.includes(k)) {
            oldUnlocked.push(k);
        }
    });
    state.gearSnapshots[oldGearId] = {
        moduleProgress: oldProgress,
        unlocked: oldUnlocked,
        savedAt: new Date().toLocaleDateString('pt-BR')
    };

    ALL_SYLLABARY_KEYS.forEach(k => {
        if (state.moduleProgress && state.moduleProgress[k]) {
            delete state.moduleProgress[k];
        }
    });
    state.unlocked = (state.unlocked || []).filter(id => !ALL_SYLLABARY_KEYS.includes(id));

    state.activeSyllabaryGear = newGearId;
    const targetGear = gears[newGearId];
    const snap = state.gearSnapshots[newGearId];

    if (snap && snap.moduleProgress) {
        Object.keys(snap.moduleProgress).forEach(k => {
            state.moduleProgress[k] = JSON.parse(JSON.stringify(snap.moduleProgress[k]));
        });
        (snap.unlocked || []).forEach(k => {
            if (!state.unlocked.includes(k)) state.unlocked.push(k);
        });
    }

    const mustUnlock = targetGear.initialUnlocked || [targetGear.order[0]];
    mustUnlock.forEach(k => {
        if (k && !state.unlocked.includes(k)) state.unlocked.push(k);
    });

    saveState();
    playSound('win');
    closeSyllabaryGearSheet();
    renderGrid();
}

function getGearShortTag(gearObj) {
    if (gearObj && gearObj.shortTag) return gearObj.shortTag;
    const map = {
        GEAR_1: 'CV • CVV',
        GEAR_2: 'CVC • R / L',
        GEAR_3: 'CVC • M/N / S',
        GEAR_4: 'CCV • CCVC'
    };
    return map[gearObj.id] || '';
}

function getGearCleanTitle(gearObj) {
    if (!gearObj || !gearObj.title) return 'Gear';
    return String(gearObj.title).replace(/\s*\([^)]*\)\s*$/, '').trim();
}

function ensureSyllabaryGearSheetDOM() {
    let modal = document.getElementById('modal-gear-selector');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'modal-gear-selector';
    modal.className = 'modal-overlay bottom-sheet-overlay';
    modal.setAttribute('data-backdrop-close', 'true');
    modal.style.zIndex = '360';
    modal.innerHTML = `
        <div class="bottom-sheet-content">
            <div class="bottom-sheet-drag-zone">
                <div class="bottom-sheet-handle"></div>
                <div class="modal-clean-header" style="margin-bottom:14px;">
                    <h2 class="modal-title" style="margin:0; font-size:1.22rem;">Gears do Silabário</h2>
                    <button type="button" class="icon-circle-btn" onclick="closeSyllabaryGearSheet()" title="Fechar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>
            </div>
            <div id="gear-selector-list" class="gear-selector-list"></div>
        </div>
    `;
    modal.addEventListener('mousedown', (e) => { backdropMouseDownTarget = e.target; });
    modal.addEventListener('mouseup', (e) => {
        if (e.target === modal && backdropMouseDownTarget === modal) closeSyllabaryGearSheet();
        backdropMouseDownTarget = null;
    });
    document.body.appendChild(modal);

    if (window.AlfaAnimations && typeof window.AlfaAnimations.bindDraggableSheet === 'function') {
        window.AlfaAnimations.bindDraggableSheet(modal, closeSyllabaryGearSheet);
    }
    return modal;
}

function openSyllabaryGearSheet() {
    if (activeRole !== 'ANALYST') return;
    playSound('click');
    const modal = ensureSyllabaryGearSheetDOM();
    const listEl = document.getElementById('gear-selector-list');
    if (listEl) {
        listEl.innerHTML = '';
        const gears = getEffectiveSyllabaryGears();
        const activeId = getActiveSyllabaryGearId();

        Object.values(gears).forEach(g => {
            const isCurrent = (g.id === activeId);
            const hasSnap = !!(state.gearSnapshots && state.gearSnapshots[g.id]);
            const card = document.createElement('div');
            card.className = `gear-option-card ${isCurrent ? 'active' : ''}`;
            card.onclick = () => switchSyllabaryGear(g.id);

            const statusBadge = isCurrent
                ? `<span class="meta-chip" style="background:var(--primary); color:#FFFFFF;">Ativa</span>`
                : (hasSnap ? `<span class="meta-chip" style="background:var(--success-light); color:#065F46;">Salvo</span>` : '');

            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
                    <div>
                        <strong style="font-size:0.98rem; color:var(--text); display:block;">${getGearCleanTitle(g)}</strong>
                        <span style="font-size:0.76rem; font-weight:800; color:var(--text-light);">${getGearShortTag(g)}</span>
                    </div>
                    ${statusBadge}
                </div>
            `;
            listEl.appendChild(card);
        });
    }

    if (window.AlfaAnimations && typeof window.AlfaAnimations.openBottomSheet === 'function') {
        window.AlfaAnimations.openBottomSheet(modal);
    } else {
        modal.style.display = 'flex';
    }
}

function closeSyllabaryGearSheet() {
    const modal = document.getElementById('modal-gear-selector');
    if (!modal) return;
    if (window.AlfaAnimations && typeof window.AlfaAnimations.closeBottomSheet === 'function') {
        window.AlfaAnimations.closeBottomSheet(modal);
    } else {
        modal.style.display = 'none';
    }
}

let currentLevelTab = 'N1';
let isReviewMode = false;
let isConfigMode = false;
let blockClicks = false;
let timerInterval = null;
let trialStartTime = 0;
let fluencyTimerInterval = null;
let responseTimeoutTimer = null;
let responseCountdownInterval = null;
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
    if (tenantsIndex && tenantsIndex.activeStudentId) {
        const activeMeta = tenantsIndex.students.find(s => s.id === tenantsIndex.activeStudentId);
        if (activeMeta && state.student) {
            activeMeta.firstName = String(state.student).trim().split(/\s+/)[0].toUpperCase();
        }
        localStorage.setItem('alfamts_tenants_index', JSON.stringify(tenantsIndex));
        localStorage.setItem('alfamts_student_' + tenantsIndex.activeStudentId, JSON.stringify(state));
    }
    localStorage.setItem('eidos_mts_state', JSON.stringify(state));
}

function switchActiveStudent(studentId) {
    if (!tenantsIndex) return;
    const targetMeta = tenantsIndex.students.find(s => s.id === studentId);
    if (!targetMeta) return;
    saveState();
    tenantsIndex.activeStudentId = studentId;
    localStorage.setItem('alfamts_tenants_index', JSON.stringify(tenantsIndex));

    const raw = localStorage.getItem('alfamts_student_' + studentId);
    let loaded = null;
    if (raw) {
        try { loaded = JSON.parse(raw); } catch (e) {}
    }
    if (!loaded) loaded = createFreshStudentState(targetMeta.firstName);
    normalizeStudentState(loaded);
    state = loaded;
    saveState();
    applyTheme();
    if (document.getElementById('screen-home').classList.contains('active')) renderGrid();
    if (document.getElementById('screen-dashboard').classList.contains('active')) renderDashboard();
    if (document.getElementById('screen-complements') && document.getElementById('screen-complements').classList.contains('active')) {
        renderStudioSavedModulesList();
        renderTokensManagementUI();
        if (currentComplementsView === 'PRINTKIT' && typeof initPrintStudioCascades === 'function') {
            initPrintStudioCascades();
        }
    }
}

function createNewStudentTenant(rawName) {
    const firstName = String(rawName || '').trim().split(/\s+/)[0].toUpperCase();
    if (!firstName) return false;
    const newId = 'stu_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    const fresh = createFreshStudentState(firstName);
    fresh.settings.themeColor = state.settings.themeColor || '#3B82F6';
    tenantsIndex.students.push({ id: newId, firstName, createdAt: new Date().toLocaleDateString('pt-BR') });
    localStorage.setItem('alfamts_student_' + newId, JSON.stringify(fresh));
    switchActiveStudent(newId);
    return true;
}

function deleteStudentTenant(studentId) {
    if (!tenantsIndex || tenantsIndex.students.length <= 1) {
        customAlert("Ação Bloqueada", "É necessário manter pelo menos um perfil cadastrado.");
        return;
    }
    tenantsIndex.students = tenantsIndex.students.filter(s => s.id !== studentId);
    localStorage.removeItem('alfamts_student_' + studentId);
    if (tenantsIndex.activeStudentId === studentId) {
        switchActiveStudent(tenantsIndex.students[0].id);
    } else {
        localStorage.setItem('alfamts_tenants_index', JSON.stringify(tenantsIndex));
    }
    renderStudentSwitcherModalList();
}

function getTaskConfig(modId) {
    if (!state.taskSettings[modId]) {
        state.taskSettings[modId] = {
            font: 'GLOBAL',
            dmtsDelay: 0,
            responseTimeout: 0,
            colorCV: false,
            sylBox: false,
            rewardTokens: -1,
            opts: 0,
            forceProbeMode: 'AUTO',
            stages: { c1: true, c2: true, c3: true, c4: true }
        };
    }
    const cfg = state.taskSettings[modId];
    if (typeof cfg.rewardTokens !== 'number') cfg.rewardTokens = -1;
    if (typeof cfg.opts !== 'number') cfg.opts = 0;
    if (!cfg.forceProbeMode) cfg.forceProbeMode = 'AUTO';
    if (!cfg.stages || typeof cfg.stages !== 'object') {
        cfg.stages = { c1: true, c2: true, c3: true, c4: true };
    }
    return cfg;
}

/* MATRIZ DE CAPACIDADES DINÂMICAS DO MODAL DE CADA TAREFA */
function getTaskCapabilities(modId) {
    const idStr = String(modId || '');
    const eMod = getEffectiveEidosModules().find(m => m.id === idStr) || null;
    const isSyl = ALL_SYLLABARY_KEYS.includes(idStr) && !['VOGAIS', 'ENCONTROS'].includes(idStr);
    const isPal = idStr.startsWith('PAL_');
    const isPhon = idStr.startsWith('FA_');
    const isCustom = idStr.startsWith('CUST_');
    const isTypoGen = (idStr === 'EX_TYPO_GEN');
    const hasVar = !!(typeof DEFAULT_MODULE_VARIATIONS !== 'undefined' && DEFAULT_MODULE_VARIATIONS[idStr] && DEFAULT_MODULE_VARIATIONS[idStr].editable) || isPal || isCustom || isTypoGen;

    const cap = {
        canEditStimuli: hasVar,
        canChangeFont: true,
        canColorCV: true,
        canSylBox: true,
        canChangeOpts: true,
        canUseDMTS: true,
        canUseProbeMode: true,
        cyclesLabels: [
            { key: 'c1', label: 'Ciclo 1: Identidade Visual (C → C)' },
            { key: 'c2', label: 'Ciclo 2: Discriminação Auditiva (A → C)' },
            { key: 'c3', label: 'Ciclo 3: Leitura Oral (C → D)' }
        ]
    };

    if (isPhon) {
        cap.canEditStimuli = false;
        cap.canColorCV = false;
        cap.canSylBox = false;
        cap.canUseDMTS = false;
        if (idStr.startsWith('FA_CHK_')) {
            cap.canChangeOpts = false;
            cap.canUseProbeMode = false;
            cap.cyclesLabels = [];
        } else {
            cap.cyclesLabels = [
                { key: 'c1', label: 'C0 & C1: Sonda a Frio + Modelagem com Slide' },
                { key: 'c2', label: 'C2: Discriminação Auditiva (Bocas e Letras)' },
                { key: 'c3', label: 'C3: Produção Autônoma (Slide sem Modelo)' },
                { key: 'c4', label: 'C4 & C5: Revisão Cumulativa + Fusão Silábica' }
            ];
        }
        return cap;
    }

    if (isSyl) {
        cap.canColorCV = false;
        cap.canSylBox = false;
        cap.cyclesLabels = [
            { key: 'c1', label: 'Passo 1: Sílabas Estruturadas' },
            { key: 'c2', label: 'Passo 2: Palavras Cumulativas Estruturadas' },
            { key: 'c3', label: 'Passo 3: Desmame Tipográfico (Cor → Preto)' },
            { key: 'c4', label: 'Passo 4: Sondagem de Leitura e Compreensão' }
        ];
        return cap;
    }

    if (isPal) {
        cap.canColorCV = false;
        cap.canSylBox = false;
        cap.canUseDMTS = false;
        cap.cyclesLabels = [
            { key: 'c1', label: 'Etapa 1: Pareamento Composto (BC → C)' },
            { key: 'c2', label: 'Etapa 2: Construção por Sílabas (CRMTS)' },
            { key: 'c3', label: 'Etapa 3: Desmame para Texto Preto (3x3)' }
        ];
        return cap;
    }

    if (!eMod) return cap;

    switch (eMod.subType) {
        case 'TRACKING':
            cap.canSylBox = false; cap.canChangeOpts = false; cap.canUseDMTS = false; cap.canUseProbeMode = false; cap.cyclesLabels = [];
            break;
        case 'SYM_DISC':
            cap.canColorCV = false; cap.canSylBox = false; cap.canUseProbeMode = false; cap.cyclesLabels = [];
            break;
        case 'MIRROR_GRAPH':
            cap.canChangeFont = false; cap.canColorCV = false; cap.canSylBox = false; cap.canUseProbeMode = false; cap.cyclesLabels = [];
            break;
        case 'VOWELS_PURE':
        case 'VOCAL_ENCOUNTERS':
            cap.canColorCV = false; cap.canSylBox = false;
            break;
        case 'WORD_IDENT_MM':
            cap.cyclesLabels = [
                { key: 'c1', label: 'Ciclo 1: Pareamento Simples (1x3)' },
                { key: 'c2', label: 'Ciclo 2: Pareamento Multimodelo (3x3)' }
            ];
            break;
        case 'EQUIV_4STEPS_MM':
            cap.canColorCV = false; cap.canSylBox = false; cap.canChangeOpts = false; cap.canUseDMTS = false;
            cap.cyclesLabels = [
                { key: 'c1', label: 'Treino 1: Nomeação de Figuras (B → D)' },
                { key: 'c2', label: 'Treino 2: Pareamento Composto (BC → C)' }
            ];
            break;
        case 'SYL_BUILD_SLIDER':
            cap.canColorCV = false; cap.canSylBox = false; cap.canUseDMTS = false;
            cap.cyclesLabels = [
                { key: 'c1', label: 'Ciclo 1: Fusão no Slide Silábico' },
                { key: 'c2', label: 'Ciclo 2: Discriminação Auditiva (A → C)' },
                { key: 'c3', label: 'Ciclo 3: Leitura Oral (C → D)' }
            ];
            break;
        case 'SYL_WORD_BUILD':
            cap.canSylBox = false; cap.canChangeOpts = false; cap.canUseDMTS = false;
            cap.cyclesLabels = [
                { key: 'c1', label: 'Ciclo 1: Montagem por Sílabas (CRMTS)' },
                { key: 'c2', label: 'Ciclo 2: Sondagem de Leitura Limpa (C → D)' }
            ];
            break;
        case 'FADEOUT_COLOR_MM':
            cap.canColorCV = false; cap.canSylBox = false; cap.canChangeOpts = false; cap.canUseDMTS = false; cap.cyclesLabels = [];
            break;
        case 'CASE_GEN_MM':
        case 'TYPO_GEN_MM':
            cap.canChangeFont = false; cap.canColorCV = false; cap.canSylBox = false; cap.canChangeOpts = false; cap.canUseDMTS = false; cap.cyclesLabels = [];
            break;
        case 'COPY_CRMTS':
            cap.canSylBox = false; cap.canChangeOpts = false; cap.cyclesLabels = [];
            break;
        case 'DICT_CRMTS':
            cap.canSylBox = false; cap.canChangeOpts = false; cap.canUseDMTS = false; cap.cyclesLabels = [];
            break;
        case 'RECOMB_STT':
        case 'SPRINT_3S':
        case 'SYNTACTIC_GROUP':
            cap.canColorCV = false; cap.canSylBox = false; cap.canChangeOpts = false; cap.canUseDMTS = false; cap.cyclesLabels = [];
            break;
        case 'WORD_SPACE':
        case 'SENTENCE_BUILD':
        case 'INTRUDER_WORD':
        case 'CHRONO_SEQ':
        case 'NARRATIVE_COHERENCE':
            cap.canSylBox = false; cap.canChangeOpts = false; cap.canUseDMTS = false; cap.cyclesLabels = [];
            break;
        case 'SYNTACTIC_WH':
            cap.canColorCV = false; cap.canSylBox = false; cap.cyclesLabels = [];
            break;
        case 'CLASS_VC':
            cap.canColorCV = false; cap.canSylBox = false; cap.canChangeOpts = false;
            cap.cyclesLabels = [
                { key: 'c1', label: 'Ciclo 1: Classificação Visual' },
                { key: 'c2', label: 'Ciclo 2: Classificação Auditiva' }
            ];
            break;
        case 'MIN_PAIRS':
            cap.canChangeOpts = false; cap.canUseDMTS = false; cap.cyclesLabels = [];
            break;
        case 'WORDS_EQ':
            cap.cyclesLabels.push({ key: 'c4', label: 'Ciclos 4 e 5: Figura ↔ Palavra (B ↔ C)' });
            break;
    }
    return cap;
}

function getEffectiveOptsForCurrentSession() {
    if (!session || !session.phase) return 3;
    if (ALL_SYLLABARY_KEYS.includes(session.phase)) {
        return parseInt(state.settings.opts) || 3;
    }
    const tCfg = getTaskConfig(session.phase);
    if (tCfg && tCfg.opts >= 2) return parseInt(tCfg.opts);
    return parseInt(state.settings.opts) || 3;
}

function getEffectiveStagesForModule(modId, isSyllabary = false) {
    if (isSyllabary || ALL_SYLLABARY_KEYS.includes(modId)) {
        return state.settings.stages || { c1: true, c2: true, c3: true, c4: true };
    }
    const tCfg = getTaskConfig(modId);
    return tCfg.stages || { c1: true, c2: true, c3: true, c4: true };
}

function getModuleVariationsMap(modId) {
    if (state.customCurriculum && state.customCurriculum[modId]) {
        return state.customCurriculum[modId];
    }
    const customMod = (state.customModules || []).find(m => m.id === modId);
    if (customMod && Array.isArray(customMod.targets)) {
        return { 1: [...customMod.targets] };
    }
    const palDrawer = getEffectivePalavrarioDrawers().find(d => d.id === modId);
    if (palDrawer && palDrawer.variations) {
        return JSON.parse(JSON.stringify(palDrawer.variations));
    }
    const activeGear = getActiveSyllabaryGearObj();
    if (activeGear && activeGear.words && activeGear.words[modId] && !Array.isArray(activeGear.words[modId])) {
        return JSON.parse(JSON.stringify(activeGear.words[modId]));
    }
    if (typeof DEFAULT_MODULE_VARIATIONS !== 'undefined' && DEFAULT_MODULE_VARIATIONS[modId]) {
        return JSON.parse(JSON.stringify(DEFAULT_MODULE_VARIATIONS[modId].variations));
    }
    if (modId === 'EX_TYPO_GEN') {
        return {
            1: ['BOLA', 'GATO', 'MALA', 'SAPO', 'FACA', 'BOLO'],
            2: ['CASA', 'PATO', 'VACA', 'DADO', 'RATO', 'VELA']
        };
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
            mode: 'TRAIN',
            bestAcc: 0,
            avgLatency: 0,
            activeVar: 1,
            pendingVar: null,
            pendingVarDate: '',
            preTestCompletedVars: []
        };
    }
    if (!state.moduleProgress[modId].activeVar) state.moduleProgress[modId].activeVar = 1;
    if (!state.moduleProgress[modId].mode) state.moduleProgress[modId].mode = 'TRAIN';
    if (!Array.isArray(state.moduleProgress[modId].preTestCompletedVars)) state.moduleProgress[modId].preTestCompletedVars = [];
    return state.moduleProgress[modId];
}

function isModuleInProbeMode(modId) {
    const tCfg = getTaskConfig(modId);
    if (tCfg && tCfg.forceProbeMode === 'PROBE') return true;
    if (tCfg && tCfg.forceProbeMode === 'TRAIN') return false;
    const prog = getModuleProgress(modId);
    return prog.mode === 'PROBE';
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

function registerMasteryAttempt(modId, accuracy, avgLatencySec, probeGateFailed = false) {
    const prog = getModuleProgress(modId);
    const wasMastered = (prog.status === 'mastered');
    const wasInProbe = (session && session.isProbeMode);
    const todayStr = new Date().toLocaleDateString('pt-BR');
    const targetDays = state.settings.consecDays || 2;
    const crit = state.settings.crit || 90;
    const availKeys = getAvailableVariationKeys(modId);

    if (accuracy > prog.bestAcc) prog.bestAcc = Math.round(accuracy);
    if (avgLatencySec > 0) prog.avgLatency = avgLatencySec;

    let earnedTokensNow = 0;
    prog.revertedToTrain = false;
    prog.promotedToProbe = false;

    if (wasInProbe && (probeGateFailed || accuracy < crit)) {
        prog.mode = 'TRAIN';
        prog.status = 'in_progress';
        prog.streak = Math.max(0, targetDays - 1);
        prog.revertedToTrain = true;
        prog.lastEarnedTokens = 0;
        saveState();
        return prog;
    }

    if (accuracy >= crit && !probeGateFailed) {
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

        if (state.tokens && state.tokens.rules && state.tokens.rules.enabled) {
            const tCfg = getTaskConfig(modId);
            const customMod = (state.customModules || []).find(m => m.id === modId);
            let blockReward = state.tokens.rules.pointsPerMasteryBlock;
            if (tCfg && typeof tCfg.rewardTokens === 'number' && tCfg.rewardTokens >= 0) {
                blockReward = tCfg.rewardTokens;
            } else if (customMod && typeof customMod.rewardTokens === 'number' && customMod.rewardTokens >= 0) {
                blockReward = customMod.rewardTokens;
            }
            earnedTokensNow += blockReward;
        }

        if (prog.streak >= targetDays) {
            if (prog.mode === 'TRAIN' && !wasInProbe) {
                prog.mode = 'PROBE';
                prog.promotedToProbe = true;
            }
            prog.status = 'mastered';
            if (!wasMastered && state.tokens && state.tokens.rules && state.tokens.rules.enabled) {
                earnedTokensNow += (state.tokens.rules.bonusConsecutiveStreak || 0);
            }
            if (!state.manualProgressionOverride) {
                unlockNextInSequence(modId);
            }
        }

        if (earnedTokensNow > 0) {
            awardTokensToActiveStudent(earnedTokensNow, `Meta atingida no módulo ${modId}`);
        }
    } else {
        if (prog.status !== 'mastered') {
            prog.streak = 0;
        }
    }
    prog.lastEarnedTokens = earnedTokensNow;
    saveState();
    return prog;
}

function unlockNextInSequence(modId) {
    const allEidos = getEffectiveEidosModules();
    const modObj = allEidos.find(m => m.id === modId);
    if (modObj && Array.isArray(modObj.unlockSyl)) {
        modObj.unlockSyl.forEach(s => {
            if (!state.unlocked.includes(s)) state.unlocked.push(s);
        });
    }
    if (modObj && Array.isArray(modObj.alsoUnlock)) {
        modObj.alsoUnlock.forEach(id => {
            if (!state.unlocked.includes(id)) state.unlocked.push(id);
        });
    }

    const eIdx = allEidos.findIndex(m => m.id === modId);
    if (eIdx >= 0) {
        let cursor = eIdx + 1;
        while (cursor < allEidos.length) {
            const candidate = allEidos[cursor];
            if (!state.unlocked.includes(candidate.id)) state.unlocked.push(candidate.id);
            if (candidate.alsoUnlock && Array.isArray(candidate.alsoUnlock)) {
                candidate.alsoUnlock.forEach(sibId => {
                    if (!state.unlocked.includes(sibId)) state.unlocked.push(sibId);
                });
            }
            if (candidate.engine === 'REWARD_PORTAL') {
                if (Array.isArray(candidate.unlockTargets)) {
                    candidate.unlockTargets.forEach(t => {
                        if (!state.unlocked.includes(t)) state.unlocked.push(t);
                    });
                }
                cursor++;
            } else {
                break;
            }
        }
    }

    const sylList = getEffectiveSyllabaryOrder();
    const sIdx = sylList.indexOf(modId);
    if (sIdx >= 0 && sIdx < sylList.length - 1) {
        const nextSyl = sylList[sIdx + 1];
        if (!state.unlocked.includes(nextSyl)) state.unlocked.push(nextSyl);
    }

    const palList = getEffectivePalavrarioDrawers().map(d => d.id);
    const pIdx = palList.indexOf(modId);
    if (pIdx >= 0 && pIdx < palList.length - 1) {
        const nextPal = palList[pIdx + 1];
        if (!state.unlocked.includes(nextPal)) state.unlocked.push(nextPal);
    }
}

let session = {
    phase: '',
    eidosMod: null,
    activeVar: 1,
    activeGear: null,
    isProbeMode: false,
    isFastTrackEntryProbe: false,
    isPreTestChain: false,
    preTestErrorsCount: 0,
    probeGateFailed: false,
    isStructuredSyllabary: false,
    isPalavrarioDrawer: false,
    isPhonemeCheckpoint: false,
    sylData: null,
    phonData: null,
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
    itemsLog: [],
    stats: {
        c0: { indep: 0, dica: 0, erro: 0, total: 0 },
        c1: { indep: 0, dica: 0, erro: 0, total: 0 },
        c2: { indep: 0, dica: 0, erro: 0, total: 0 },
        c3: { indep: 0, dica: 0, erro: 0, total: 0 },
        c4: { indep: 0, dica: 0, erro: 0, total: 0 },
        c5: { indep: 0, dica: 0, erro: 0, total: 0 },
        c6: { indep: 0, dica: 0, erro: 0, total: 0 }
    }
};

/* ============================================================================
   6. ÁUDIO SINTÉTICO, TTS COM ONDA SONORA, MOEDA 3D E HOLD-TO-SELECT
   ============================================================================ */
let audioCtx = null;

window.addEventListener('contextmenu', e => e.preventDefault(), { capture: true });
window.addEventListener('dragstart', e => e.preventDefault(), { capture: true });

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
    if (window.AlfaAnimations && typeof window.AlfaAnimations.triggerAudioWave === 'function') {
        window.AlfaAnimations.triggerAudioWave(null, 1200);
    }
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

function getActiveFirstName() {
    const raw = state.student || 'ALUNO';
    return String(raw).trim().split(/\s+/)[0].toUpperCase() || 'ALUNO';
}

function updateTokenBalanceUI() {
    const bal = (state && state.tokens && typeof state.tokens.balance === 'number') ? state.tokens.balance : 0;
    const tot = (state && state.tokens && typeof state.tokens.totalEarned === 'number') ? state.tokens.totalEarned : 0;
    document.querySelectorAll('.token-balance-count').forEach(el => {
        el.innerText = bal;
    });
    const totLbl = document.getElementById('token-total-earned-label');
    if (totLbl) totLbl.innerText = tot;
}

function applyDynamicThemeColor(hexColor) {
    const cleanHex = /^#[0-9A-Fa-f]{6}$/.test(hexColor) ? hexColor : '#3B82F6';
    const r = parseInt(cleanHex.slice(1, 3), 16);
    const g = parseInt(cleanHex.slice(3, 5), 16);
    const b = parseInt(cleanHex.slice(5, 7), 16);

    const darkR = Math.max(0, Math.round(r * 0.78));
    const darkG = Math.max(0, Math.round(g * 0.78));
    const darkB = Math.max(0, Math.round(b * 0.78));

    const root = document.documentElement;
    root.style.setProperty('--primary', cleanHex);
    root.style.setProperty('--primary-dark', `rgb(${darkR}, ${darkG}, ${darkB})`);
    root.style.setProperty('--primary-light', `rgba(${r}, ${g}, ${b}, 0.13)`);
}

function applyTheme() {
    applyDynamicThemeColor(state.settings.themeColor || '#3B82F6');
    const first = getActiveFirstName();
    document.querySelectorAll('.student-first-name-label').forEach(el => {
        el.innerText = first;
    });
    updateTokenBalanceUI();
}

function awardTokensToActiveStudent(amount, reason = '') {
    if (!state.tokens) state.tokens = getDefaultTokensClone();
    const val = parseInt(amount, 10) || 0;
    if (val === 0) return;

    state.tokens.balance = Math.max(0, (state.tokens.balance || 0) + val);
    if (val > 0) {
        state.tokens.totalEarned = (state.tokens.totalEarned || 0) + val;
    }
    state.tokens.ledger.unshift({
        date: new Date().toLocaleDateString('pt-BR') + ' ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        delta: val,
        reason: reason || (val > 0 ? 'Crédito' : 'Resgate')
    });
    if (state.tokens.ledger.length > 40) state.tokens.ledger.pop();
    saveState();

    // Se for ganho de fichas, congela o contador visual até a moeda 3D pousar no saldo
    if (val > 0 && window.AlfaAnimations && typeof window.AlfaAnimations.playCoinReward === 'function') {
        window.AlfaAnimations.playCoinReward(val, () => {
            updateTokenBalanceUI();
        });
    } else {
        updateTokenBalanceUI();
    }
}

/* MOTOR DE PRESSÃO SUSTENTADA (HOLD-TO-SELECT — APENAS NA RESPOSTA, TOLERÂNCIA 24PX) */
function isHoldEnabledForCRMTS() {
    const holdMs = (state.settings && typeof state.settings.holdToSelectMs === 'number') ? state.settings.holdToSelectMs : 0;
    return holdMs > 0 && !!(state.settings && state.settings.holdOnCRMTS);
}

function attachHoldToSelectBehavior(cardEl, onSelectCallback, forceDisableHold = false) {
    const holdMs = (!forceDisableHold && state.settings && typeof state.settings.holdToSelectMs === 'number')
        ? state.settings.holdToSelectMs
        : 0;

    if (!holdMs || holdMs <= 0) {
        cardEl.onclick = (e) => {
            if (blockClicks) return;
            onSelectCallback(e);
        };
        return;
    }

    let pressTimer = null;
    let startX = 0, startY = 0;
    let fillLayer = cardEl.querySelector('.hold-progress-fill');
    if (!fillLayer) {
        fillLayer = document.createElement('div');
        fillLayer.className = 'hold-progress-fill';
        cardEl.style.position = 'relative';
        cardEl.style.overflow = 'hidden';
        cardEl.appendChild(fillLayer);
    }

    const clearPress = () => {
        if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
        fillLayer.style.transition = 'width 0.14s ease';
        fillLayer.style.width = '0%';
    };

    cardEl.addEventListener('pointerdown', (e) => {
        if (blockClicks) return;
        startX = e.clientX;
        startY = e.clientY;
        fillLayer.style.transition = `width ${holdMs}ms linear`;
        fillLayer.style.width = '100%';

        pressTimer = setTimeout(() => {
            clearPress();
            onSelectCallback(e);
        }, holdMs);
    });

    cardEl.addEventListener('pointermove', (e) => {
        if (!pressTimer) return;
        const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
        if (dist > 24) {
            clearPress();
        }
    });

    cardEl.addEventListener('pointerup', clearPress);
    cardEl.addEventListener('pointercancel', clearPress);
    cardEl.addEventListener('pointerleave', clearPress);
}

/* ============================================================================
   7. SPLASH, GATEKEEPER, NAVEGAÇÃO, COMPLEMENTOS, MANUAIS .MD E ARCADE
   ============================================================================ */
let authCallback = null;
let expectedAuthPin = '';
let alertCallback = null;
let backdropMouseDownTarget = null;
let arcadeCountdownInterval = null;
let currentComplementsView = 'HUB';
let activeSliderKeyHandler = null;
let arcadeCatalogList = (typeof DEFAULT_ARCADE_MANIFEST !== 'undefined') ? [...DEFAULT_ARCADE_MANIFEST] : [];

/* MOTOR DE MANUAIS EM MARKDOWN (assets/manuais/index.json + *.md) */
let manualsCatalogList = [];
let isManualReaderOpen = false;

function getArcadeCustomOverrides() {
    try {
        return JSON.parse(localStorage.getItem('alfamts_arcade_overrides')) || {};
    } catch (e) {
        return {};
    }
}

function applyArcadeOverridesToList() {
    const ov = getArcadeCustomOverrides();
    arcadeCatalogList.forEach(g => {
        if (ov[g.id]) {
            if (typeof ov[g.id].durationSec === 'number' && ov[g.id].durationSec >= 5) {
                g.durationSec = ov[g.id].durationSec;
            }
            if (typeof ov[g.id].cost === 'number' && ov[g.id].cost >= 0) {
                g.cost = ov[g.id].cost;
            }
        }
    });
}

function updateArcadeGameParam(gameId, field, rawVal) {
    const num = Math.max(field === 'durationSec' ? 5 : 0, parseInt(rawVal) || 0);
    const ov = getArcadeCustomOverrides();
    if (!ov[gameId]) ov[gameId] = {};
    ov[gameId][field] = num;
    localStorage.setItem('alfamts_arcade_overrides', JSON.stringify(ov));
    applyArcadeOverridesToList();
}

function dismissSplashScreen() {
    const splash = document.getElementById('splash-screen');
    if (splash && !splash.classList.contains('fade-out')) {
        splash.classList.add('fade-out');
        setTimeout(() => splash.remove(), 480);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(dismissSplashScreen, 900);
});
setTimeout(dismissSplashScreen, 3000);

document.addEventListener('keydown', (e) => {
    let modalOpen = false;
    document.querySelectorAll('.modal-overlay').forEach(m => { if (m.style.display === 'flex') modalOpen = true; });
    if (modalOpen) return;
    if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    const gameActive = document.getElementById('screen-game') && document.getElementById('screen-game').classList.contains('active');
    if (gameActive && typeof activeSliderKeyHandler === 'function') {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            activeSliderKeyHandler(e.key);
            return;
        }
    }

    const homeActive = document.getElementById('screen-home') && document.getElementById('screen-home').classList.contains('active');
    if (!homeActive) return;

    if (e.key === 'ArrowRight') {
        e.preventDefault();
        stepCarouselLevel(1);
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stepCarouselLevel(-1);
    }
});

window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'ARCADE_EXIT') {
        closeArcadeSandbox();
    }
});

async function loadArcadeManifest() {
    try {
        const res = await fetch('arcade/manifest.json');
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                arcadeCatalogList = data;
            }
        }
    } catch (e) {}
    applyArcadeOverridesToList();
}

function clearAllTrialTimers() {
    activeSliderKeyHandler = null;
    if (fluencyTimerInterval) { clearInterval(fluencyTimerInterval); fluencyTimerInterval = null; }
    if (responseTimeoutTimer) { clearTimeout(responseTimeoutTimer); responseTimeoutTimer = null; }
    if (responseCountdownInterval) { clearInterval(responseCountdownInterval); responseCountdownInterval = null; }
    if (dmtsDelayTimer) { clearTimeout(dmtsDelayTimer); dmtsDelayTimer = null; }
    if (phonemeDoublePlayTimer) { clearTimeout(phonemeDoublePlayTimer); phonemeDoublePlayTimer = null; }
    if (activePhonemeAudioObj) {
        try { activePhonemeAudioObj.pause(); activePhonemeAudioObj.currentTime = 0; } catch (e) {}
        activePhonemeAudioObj = null;
    }
    const latPill = document.getElementById('latency-countdown-pill');
    if (latPill) latPill.style.display = 'none';
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
    document.querySelectorAll('.modal-overlay').forEach(m => {
        if (m.classList.contains('bottom-sheet-overlay')) {
            if (window.AlfaAnimations && typeof window.AlfaAnimations.closeBottomSheet === 'function') {
                window.AlfaAnimations.closeBottomSheet(m);
            } else {
                m.classList.remove('sheet-open');
                m.style.display = 'none';
            }
        } else {
            m.style.display = 'none';
        }
    });
    closeAuth();
}

function openGatekeeper() {
    clearAllTrialTimers();
    hideAllScreens();
    applyTheme();
    const gk = document.getElementById('screen-gatekeeper');
    if (gk) {
        gk.classList.add('active');
    } else {
        goSplash();
    }
}

function selectRoleProfile(role) {
    playSound('click');
    const analystPin = (tenantsIndex && tenantsIndex.analystPin) ? String(tenantsIndex.analystPin).trim() : '';
    const applicatorPin = (tenantsIndex && tenantsIndex.applicatorPin) ? String(tenantsIndex.applicatorPin).trim() : '';

    if (role === 'ANALYST') {
        const proceedAnalyst = () => {
            activeRole = 'ANALYST';
            syncRoleUIElements();
            goSplash();
        };
        if (analystPin.length > 0) {
            promptPinWithExpected(analystPin, proceedAnalyst);
        } else {
            proceedAnalyst();
        }
    } else {
        const proceedApplicator = () => {
            activeRole = 'APPLICATOR';
            isConfigMode = false;
            syncRoleUIElements();
            openGrid();
        };
        if (applicatorPin.length > 0) {
            promptPinWithExpected(applicatorPin, proceedApplicator);
        } else {
            proceedApplicator();
        }
    }
}

function syncRoleUIElements() {
    const isAnalyst = (activeRole === 'ANALYST');
    const cfgBtn = document.getElementById('btn-config-mode');
    const mgrBtn = document.getElementById('btn-modules-mgr');
    const homeSwitcher = document.getElementById('analyst-home-switcher');
    const gridSwitcher = document.getElementById('applicator-grid-switcher');

    if (cfgBtn) cfgBtn.style.display = isAnalyst ? 'inline-flex' : 'none';
    if (mgrBtn) mgrBtn.style.display = isAnalyst ? 'inline-flex' : 'none';
    if (homeSwitcher) homeSwitcher.style.display = isAnalyst ? 'inline-flex' : 'none';
    if (gridSwitcher) gridSwitcher.style.display = isAnalyst ? 'none' : 'inline-flex';
    updateTokenBalanceUI();
}

function handleGridBackNavigation() {
    playSound('click');
    if (activeRole === 'APPLICATOR') {
        openGatekeeper();
    } else {
        goSplash();
    }
}

function goSplash() {
    clearAllTrialTimers();
    if (activeRole === 'APPLICATOR') {
        openGrid();
        return;
    }
    hideAllScreens();
    applyTheme();
    syncRoleUIElements();
    updateLobbyButton();
    document.getElementById('screen-splash').classList.add('active');
}

function openGrid() {
    if (state.settings.timer.enabled && state.session.expired) {
        updateLobbyButton();
        customAlert("Tempo de Sessão Esgotado", "Desbloqueie a sessão na tela inicial informando o PIN do Analista.");
        return;
    }
    hideAllScreens();
    applyTheme();
    syncRoleUIElements();
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

/* TELA DE COMPLEMENTOS (HUB + OFICINA + FICHAS + ARCADE + PRINTKIT + MANUAIS .MD) */
let studioCyclesDraft = [];

function openComplements(initialSection = 'HUB') {
    playSound('click');
    hideAllScreens();
    applyTheme();
    const sc = document.getElementById('screen-complements');
    if (sc) sc.classList.add('active');
    if (studioCyclesDraft.length === 0) resetStudioForm();
    renderStudioSavedModulesList();
    renderTokensManagementUI();
    renderAnalystArcadeFreeTestGrid();
    switchComplementsSection(initialSection);
}

function handleComplementsBack() {
    playSound('click');
    if (currentComplementsView === 'MANUALS' && isManualReaderOpen) {
        closeManualReader();
        return;
    }
    if (currentComplementsView !== 'HUB') {
        switchComplementsSection('HUB');
    } else {
        goSplash();
    }
}

function switchComplementsSection(sec) {
    playSound('click');
    currentComplementsView = sec;
    isManualReaderOpen = false;

    const hub = document.getElementById('comp-section-hub');
    const studio = document.getElementById('comp-section-studio');
    const tokens = document.getElementById('comp-section-tokens');
    const arcade = document.getElementById('comp-section-arcade');
    const printkit = document.getElementById('comp-section-printkit');
    const manuals = document.getElementById('comp-section-manuals');
    const headerTitle = document.getElementById('complements-header-title');

    if (hub) hub.style.display = (sec === 'HUB') ? 'grid' : 'none';
    if (studio) studio.style.display = (sec === 'STUDIO') ? 'block' : 'none';
    if (tokens) tokens.style.display = (sec === 'TOKENS') ? 'block' : 'none';
    if (arcade) arcade.style.display = (sec === 'ARCADE') ? 'block' : 'none';
    if (printkit) printkit.style.display = (sec === 'PRINTKIT') ? 'block' : 'none';
    if (manuals) manuals.style.display = (sec === 'MANUALS') ? 'block' : 'none';

    if (headerTitle) {
        if (sec === 'STUDIO') headerTitle.innerText = 'Oficina de Tarefas';
        else if (sec === 'TOKENS') headerTitle.innerText = 'Economia de Fichas';
        else if (sec === 'ARCADE') headerTitle.innerText = 'Arcade';
        else if (sec === 'PRINTKIT') headerTitle.innerText = 'Materiais Concretos';
        else if (sec === 'MANUALS') headerTitle.innerText = 'Manuais de Uso';
        else headerTitle.innerText = 'Complementos';
    }
    if (sec === 'STUDIO') renderStudioTargetsMediaChips();
    if (sec === 'ARCADE') renderAnalystArcadeFreeTestGrid();
    if (sec === 'PRINTKIT' && typeof initPrintStudioCascades === 'function') {
        initPrintStudioCascades();
    }
    if (sec === 'MANUALS') {
        loadManualsCatalog();
    }
}

/* PARSER LEVE DE MARKDOWN (.MD) E LEITOR OFFLINE DE MANUAIS */
function escapeHTMLSafe(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function parseMarkdownInline(text) {
    let out = escapeHTMLSafe(text);
    out = out.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, rawSrc) => {
        let src = rawSrc.trim();
        if (!/^(https?:|data:|\/|\.\/|assets\/)/i.test(src)) {
            src = `./assets/manuais/${src}`;
        }
        return `<figure class="md-figure"><img src="${src}" alt="${alt}" draggable="false"><figcaption>${alt}</figcaption></figure>`;
    });
    out = out.replace(/`([^`]+)`/g, '<code class="md-inline-code">$1</code>');
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return out;
}

function parseMarkdownToHTML(mdText) {
    const lines = String(mdText || '').replace(/\r\n/g, '\n').split('\n');
    let html = '';
    let inUl = false;
    let inOl = false;

    const closeLists = () => {
        if (inUl) { html += '</ul>'; inUl = false; }
        if (inOl) { html += '</ol>'; inOl = false; }
    };

    lines.forEach(rawLine => {
        const line = rawLine.trim();
        if (!line) {
            closeLists();
            return;
        }
        if (/^---+$/.test(line) || /^\*\*\*+$/.test(line)) {
            closeLists();
            html += '<hr class="md-hr">';
            return;
        }
        if (line.startsWith('### ')) {
            closeLists();
            html += `<h3 class="md-h3">${parseMarkdownInline(line.slice(4))}</h3>`;
            return;
        }
        if (line.startsWith('## ')) {
            closeLists();
            html += `<h2 class="md-h2">${parseMarkdownInline(line.slice(3))}</h2>`;
            return;
        }
        if (line.startsWith('# ')) {
            closeLists();
            html += `<h1 class="md-h1">${parseMarkdownInline(line.slice(2))}</h1>`;
            return;
        }
        if (line.startsWith('> ')) {
            closeLists();
            html += `<blockquote class="md-quote">${parseMarkdownInline(line.slice(2))}</blockquote>`;
            return;
        }
        if (/^[-*]\s+/.test(line)) {
            if (inOl) { html += '</ol>'; inOl = false; }
            if (!inUl) { html += '<ul class="md-ul">'; inUl = true; }
            html += `<li>${parseMarkdownInline(line.replace(/^[-*]\s+/, ''))}</li>`;
            return;
        }
        if (/^\d+\.\s+/.test(line)) {
            if (inUl) { html += '</ul>'; inUl = false; }
            if (!inOl) { html += '<ol class="md-ol">'; inOl = true; }
            html += `<li>${parseMarkdownInline(line.replace(/^\d+\.\s+/, ''))}</li>`;
            return;
        }
        closeLists();
        html += `<p class="md-p">${parseMarkdownInline(line)}</p>`;
    });

    closeLists();
    return html;
}

async function loadManualsCatalog() {
    const listGrid = document.getElementById('manuals-list-grid');
    const readerPanel = document.getElementById('manual-reader-panel');
    if (readerPanel) readerPanel.style.display = 'none';
    if (listGrid) {
        listGrid.style.display = 'grid';
        listGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:28px; color:var(--text-light); font-weight:700;">Carregando manuais...</div>`;
    }
    isManualReaderOpen = false;

    try {
        const res = await fetch('./assets/manuais/index.json');
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data)) {
                manualsCatalogList = data.map((item, idx) => {
                    if (typeof item === 'string') {
                        return { id: `man_${idx}`, title: item.replace(/\.md$/i, ''), desc: 'Documento de orientação em Markdown.', file: item };
                    }
                    return {
                        id: item.id || `man_${idx}`,
                        title: item.title || 'Manual',
                        desc: item.desc || 'Guia de referência do AlfaMTS.',
                        file: item.file || ''
                    };
                }).filter(m => m.file);
            }
        } else {
            manualsCatalogList = [];
        }
    } catch (e) {
        manualsCatalogList = [];
    }

    renderManualsListUI();
}

function renderManualsListUI() {
    const listGrid = document.getElementById('manuals-list-grid');
    if (!listGrid) return;
    listGrid.innerHTML = '';

    if (manualsCatalogList.length === 0) {
        listGrid.innerHTML = `
            <div style="grid-column:1/-1; background:#FFFFFF; border:1.5px dashed var(--border); border-radius:18px; padding:30px 20px; text-align:center; color:var(--text-light); font-weight:700; line-height:1.6;">
                Nenhum manual encontrado em <strong>assets/manuais/index.json</strong>.<br>
                Adicione os arquivos <code>.md</code> e o índice JSON na pasta de manuais para leitura offline e exportação em PDF.
            </div>
        `;
        return;
    }

    manualsCatalogList.forEach(man => {
        const card = document.createElement('div');
        card.className = 'complement-hub-card';
        card.style.padding = '24px 20px';
        card.onclick = () => openManualDocument(man.file, man.title);
        card.innerHTML = `
            <div class="hub-icon-box" style="width:54px; height:54px; background:var(--primary-light); color:var(--primary-dark);">
                ${UI_SVGS.bookOpen}
            </div>
            <h3>${escapeHTMLSafe(man.title)}</h3>
            <p>${escapeHTMLSafe(man.desc)}</p>
        `;
        listGrid.appendChild(card);
    });
}

async function openManualDocument(fileName, titleLabel) {
    playSound('click');
    const listGrid = document.getElementById('manuals-list-grid');
    const readerPanel = document.getElementById('manual-reader-panel');
    const titleEl = document.getElementById('manual-reader-title');
    const bodyEl = document.getElementById('manual-reader-body');
    if (!readerPanel || !bodyEl) return;

    if (listGrid) listGrid.style.display = 'none';
    readerPanel.style.display = 'flex';
    isManualReaderOpen = true;
    if (titleEl) titleEl.innerText = titleLabel || 'Manual';
    bodyEl.innerHTML = `<p style="color:var(--text-light); font-weight:700;">Carregando documento...</p>`;

    try {
        const res = await fetch(`./assets/manuais/${fileName}`);
        if (!res.ok) throw new Error('Arquivo não encontrado');
        const mdText = await res.text();
        bodyEl.innerHTML = parseMarkdownToHTML(mdText);
    } catch (e) {
        bodyEl.innerHTML = `<p style="color:var(--danger); font-weight:800;">Não foi possível carregar o arquivo <code>assets/manuais/${escapeHTMLSafe(fileName)}</code>.</p>`;
    }
}

function closeManualReader() {
    playSound('click');
    isManualReaderOpen = false;
    const listGrid = document.getElementById('manuals-list-grid');
    const readerPanel = document.getElementById('manual-reader-panel');
    if (readerPanel) readerPanel.style.display = 'none';
    if (listGrid) listGrid.style.display = 'grid';
}

function printActiveManual() {
    playSound('click');
    document.body.classList.add('printing-manual');
    const cleanup = () => {
        document.body.classList.remove('printing-manual');
        window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    window.print();
    setTimeout(cleanup, 1500);
}

function renderAnalystArcadeFreeTestGrid() {
    const grid = document.getElementById('analyst-arcade-test-grid');
    if (!grid) return;
    grid.innerHTML = '';
    applyArcadeOverridesToList();

    arcadeCatalogList.forEach(game => {
        const card = document.createElement('div');
        card.className = 'store-item-card';
        card.innerHTML = `
            <div style="text-align:left;">
                <strong style="font-size:1.05rem; color:var(--text); display:block;">${game.title}</strong>
                <span style="font-size:0.78rem; color:var(--text-light); font-weight:600;">${game.desc || ''}</span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; background:#F8FAFC; padding:10px; border-radius:12px; border:1px solid var(--border);">
                <div style="text-align:left;">
                    <label style="font-size:0.72rem; font-weight:800; color:var(--text-light); display:block; margin-bottom:4px;">Duração (s):</label>
                    <input type="number" class="compact-input-num" style="width:100%; padding:6px;" min="10" max="600" value="${game.durationSec || 60}" onchange="updateArcadeGameParam('${game.id}', 'durationSec', this.value)">
                </div>
                <div style="text-align:left;">
                    <label style="font-size:0.72rem; font-weight:800; color:var(--text-light); display:block; margin-bottom:4px;">Fichas:</label>
                    <input type="number" class="compact-input-num" style="width:100%; padding:6px;" min="0" max="100" value="${game.cost ?? 3}" onchange="updateArcadeGameParam('${game.id}', 'cost', this.value)">
                </div>
            </div>
            <button type="button" class="btn-action" style="width:100%; padding:10px;" onclick="redeemArcadeGame('${game.id}', true)">
                Testar Jogo
            </button>
        `;
        grid.appendChild(card);
    });
}

function openComplementsMediaBankModal() {
    playSound('click');
    editorSession.modId = null;
    editorSession.hasEditableStimuli = false;
    document.getElementById('stim-editor-title').innerText = 'Galeria de Figuras';
    document.getElementById('tab-btn-stim').style.display = 'none';
    document.getElementById('tab-btn-topo').style.display = 'none';
    document.getElementById('tab-btn-aba').style.display = 'none';
    switchTaskEditorTab('IMG');
    document.getElementById('modal-stimuli-editor').style.display = 'flex';
}

function renderStudioTargetsMediaChips() {
    const bar = document.getElementById('studio-targets-media-bar');
    const inp = document.getElementById('studio-targets-input');
    if (!bar || !inp) return;
    bar.innerHTML = '';

    const items = inp.value.split(',').map(s => s.trim().toUpperCase()).filter(s => s.length > 0);
    if (items.length === 0) {
        bar.innerHTML = `<span style="font-size:0.8rem; color:var(--text-light); font-weight:600;">Nenhum estímulo informado.</span>`;
        return;
    }

    [...new Set(items)].forEach(rawItem => {
        extractExplicitSyllables(rawItem);
        const cleanKey = getNormalizedWordKey(rawItem);
        const hasMedia = hasValidVisualRepresentation(rawItem);
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'studio-stim-chip';
        if (hasMedia) {
            chip.style.borderColor = 'var(--primary)';
        }
        chip.innerHTML = `
            ${UI_SVGS.imageMini}
            <span>${rawItem}</span>
            ${hasMedia ? `<span style="color:var(--success); display:inline-flex;">${UI_SVGS.check}</span>` : ''}
        `;
        chip.onclick = () => {
            playSound('click');
            openStimulusMediaAssignPicker(cleanKey);
        };
        bar.appendChild(chip);
    });
}

function resetStudioForm() {
    const idInp = document.getElementById('studio-edit-id');
    const tInp = document.getElementById('studio-title');
    const dInp = document.getElementById('studio-desc');
    const rInp = document.getElementById('studio-reward-tokens');
    const tgInp = document.getElementById('studio-targets-input');
    if (idInp) idInp.value = '';
    if (tInp) tInp.value = '';
    if (dInp) dInp.value = '';
    if (rInp) rInp.value = '2';
    if (tgInp) tgInp.value = '';

    studioCyclesDraft = [
        {
            mechanic: 'MTS',
            sdMode: 'SIMPLE',
            sdChannel1: 'IMAGE',
            sdChannel2: 'TEXT',
            compChannel: 'TEXT',
            crmtsAutoLetters: true,
            crmtsSplitMode: 'LETTERS',
            commandText: '',
            dmtsDelay: 0,
            timeoutSec: 0,
            errorless: true
        }
    ];
    renderStudioTargetsMediaChips();
    renderStudioCyclesDraftUI();
}

function addStudioCycleRow() {
    playSound('click');
    if (studioCyclesDraft.length >= 5) {
        customAlert("Limite de Ciclos", "Cada tarefa personalizada comporta até 5 ciclos sequenciais.");
        return;
    }
    studioCyclesDraft.push({
        mechanic: 'MTS',
        sdMode: 'SIMPLE',
        sdChannel1: 'AUDIO',
        sdChannel2: 'TEXT',
        compChannel: 'TEXT',
        crmtsAutoLetters: true,
        crmtsSplitMode: 'LETTERS',
        commandText: '',
        dmtsDelay: 0,
        timeoutSec: 0,
        errorless: true
    });
    renderStudioCyclesDraftUI();
}

function removeStudioCycleRow(idx) {
    if (studioCyclesDraft.length <= 1) return;
    playSound('click');
    studioCyclesDraft.splice(idx, 1);
    renderStudioCyclesDraftUI();
}

function renderStudioCyclesDraftUI() {
    const container = document.getElementById('studio-cycles-list');
    if (!container) return;
    container.innerHTML = '';

    studioCyclesDraft.forEach((cyc, idx) => {
        if (typeof cyc.crmtsAutoLetters !== 'boolean') cyc.crmtsAutoLetters = true;
        if (!cyc.crmtsSplitMode) cyc.crmtsSplitMode = 'LETTERS';
        if (typeof cyc.commandText !== 'string') cyc.commandText = '';

        const card = document.createElement('div');
        card.className = 'studio-cycle-card';
        const showChannel2 = (cyc.sdMode === 'COMPOUND');
        const showCompChannel = (cyc.mechanic === 'MTS' || cyc.mechanic === 'MULTIMTS');
        const isCRMTS = (cyc.mechanic === 'CRMTS');
        const isExpressive = (cyc.mechanic === 'EXPRESSIVE');

        card.innerHTML = `
            <div class="studio-cycle-header">
                <strong style="font-size:0.95rem; color:var(--primary-dark);">Ciclo ${idx + 1}</strong>
                ${studioCyclesDraft.length > 1 ? `<button type="button" class="btn-icon-del" style="width:28px; height:28px;" onclick="removeStudioCycleRow(${idx})" title="Remover Ciclo"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>` : ''}
            </div>
            <div class="studio-grid-2col">
                <div class="input-group" style="margin-bottom:0;">
                    <label>Mecânica:</label>
                    <select class="compact-select" style="width:100%;" onchange="studioCyclesDraft[${idx}].mechanic = this.value; renderStudioCyclesDraftUI();">
                        <option value="MTS" ${cyc.mechanic === 'MTS' ? 'selected' : ''}>Pareamento</option>
                        <option value="MULTIMTS" ${cyc.mechanic === 'MULTIMTS' ? 'selected' : ''}>Pareamento em Colunas</option>
                        <option value="CRMTS" ${cyc.mechanic === 'CRMTS' ? 'selected' : ''}>Construção</option>
                        <option value="EXPRESSIVE" ${cyc.mechanic === 'EXPRESSIVE' ? 'selected' : ''}>Expressivo / Comando</option>
                    </select>
                </div>
                <div class="input-group" style="margin-bottom:0;">
                    <label>Apresentação do Modelo:</label>
                    <select class="compact-select" style="width:100%;" onchange="studioCyclesDraft[${idx}].sdMode = this.value; renderStudioCyclesDraftUI();">
                        <option value="SIMPLE" ${cyc.sdMode === 'SIMPLE' ? 'selected' : ''}>Estímulo Simples</option>
                        <option value="COMPOUND" ${cyc.sdMode === 'COMPOUND' ? 'selected' : ''}>Estímulo Duplo</option>
                    </select>
                </div>
            </div>
            <div class="studio-grid-2col">
                <div class="input-group" style="margin-bottom:0;">
                    <label>Canal do Modelo:</label>
                    <select class="compact-select" style="width:100%;" onchange="studioCyclesDraft[${idx}].sdChannel1 = this.value;">
                        <option value="TEXT" ${cyc.sdChannel1 === 'TEXT' ? 'selected' : ''}>Texto Impresso</option>
                        <option value="IMAGE" ${cyc.sdChannel1 === 'IMAGE' ? 'selected' : ''}>Figura</option>
                        <option value="AUDIO" ${cyc.sdChannel1 === 'AUDIO' ? 'selected' : ''}>Áudio</option>
                    </select>
                </div>
                ${showChannel2 ? `
                <div class="input-group" style="margin-bottom:0;">
                    <label>Segundo Canal do Modelo:</label>
                    <select class="compact-select" style="width:100%;" onchange="studioCyclesDraft[${idx}].sdChannel2 = this.value;">
                        <option value="TEXT" ${cyc.sdChannel2 === 'TEXT' ? 'selected' : ''}>Texto Impresso</option>
                        <option value="IMAGE" ${cyc.sdChannel2 === 'IMAGE' ? 'selected' : ''}>Figura</option>
                        <option value="AUDIO" ${cyc.sdChannel2 === 'AUDIO' ? 'selected' : ''}>Áudio</option>
                    </select>
                </div>` : ''}
                ${showCompChannel ? `
                <div class="input-group" style="margin-bottom:0;">
                    <label>Canal das Alternativas:</label>
                    <select class="compact-select" style="width:100%;" onchange="studioCyclesDraft[${idx}].compChannel = this.value;">
                        <option value="TEXT" ${cyc.compChannel === 'TEXT' ? 'selected' : ''}>Texto Impresso</option>
                        <option value="IMAGE" ${cyc.compChannel === 'IMAGE' ? 'selected' : ''}>Figura</option>
                    </select>
                </div>` : ''}
            </div>

            ${isCRMTS ? `
            <div style="background:#FFFFFF; border:1.5px solid var(--border); border-radius:12px; padding:12px 14px;">
                <label style="display:flex; align-items:center; gap:10px; font-weight:800; font-size:0.9rem; cursor:pointer;">
                    <input type="checkbox" ${cyc.crmtsAutoLetters ? 'checked' : ''} style="width:20px; height:20px;" onchange="studioCyclesDraft[${idx}].crmtsAutoLetters = this.checked; studioCyclesDraft[${idx}].crmtsSplitMode = this.checked ? 'LETTERS' : 'CUSTOM'; renderStudioCyclesDraftUI();">
                    <span>Quebrar estímulo em letras automaticamente</span>
                </label>
                ${!cyc.crmtsAutoLetters ? `
                <div style="margin-top:10px;">
                    <label style="font-size:0.82rem; font-weight:800; color:var(--text-light); display:block; margin-bottom:6px;">Fragmentação:</label>
                    <select class="compact-select" style="width:100%;" onchange="studioCyclesDraft[${idx}].crmtsSplitMode = this.value;">
                        <option value="CUSTOM" ${cyc.crmtsSplitMode === 'CUSTOM' ? 'selected' : ''}>Por Hífen ou Dicionário Silábico</option>
                        <option value="WORDS" ${cyc.crmtsSplitMode === 'WORDS' ? 'selected' : ''}>Por Espaços</option>
                    </select>
                </div>` : ''}
            </div>` : ''}

            ${isExpressive ? `
            <div class="input-group" style="margin-bottom:0;">
                <label>Comando para o Aplicador:</label>
                <input type="text" placeholder="Instrução exibida na tela" value="${cyc.commandText || ''}" oninput="studioCyclesDraft[${idx}].commandText = this.value;">
            </div>` : ''}

            <div class="studio-grid-2col" style="padding-top:6px; border-top:1px dashed var(--border);">
                <div class="input-group" style="margin-bottom:0;">
                    <label>Atraso do Modelo (s):</label>
                    <input type="number" class="compact-input-num" style="width:100%;" min="0" max="5" value="${cyc.dmtsDelay || 0}" onchange="studioCyclesDraft[${idx}].dmtsDelay = parseInt(this.value) || 0;">
                </div>
                <div class="input-group" style="margin-bottom:0;">
                    <label>Tempo Limite (s):</label>
                    <input type="number" class="compact-input-num" style="width:100%;" min="0" max="60" value="${cyc.timeoutSec || 0}" onchange="studioCyclesDraft[${idx}].timeoutSec = parseInt(this.value) || 0;">
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function saveStudioCustomModule() {
    const titleVal = (document.getElementById('studio-title').value || '').trim();
    const descVal = (document.getElementById('studio-desc').value || '').trim() || 'Tarefa personalizada.';
    const rewardTok = Math.max(0, parseInt(document.getElementById('studio-reward-tokens').value) || 0);
    const rawTargets = (document.getElementById('studio-targets-input').value || '').split(',').map(s => s.trim().toUpperCase()).filter(s => s.length > 0);
    const editId = document.getElementById('studio-edit-id').value;

    if (!titleVal) {
        customAlert("Título Obrigatório", "Informe um nome para identificar a tarefa.");
        return;
    }
    if (rawTargets.length < 1) {
        customAlert("Estímulos Insuficientes", "Insira pelo menos 1 estímulo alvo.");
        return;
    }

    rawTargets.forEach(rt => extractExplicitSyllables(rt));

    if (!Array.isArray(state.customModules)) state.customModules = [];
    const modId = editId || ('CUST_' + Date.now());
    const moduleObj = {
        id: modId,
        code: 'PERS',
        level: 'PERSONALIZADOS',
        title: titleVal,
        desc: descVal,
        engine: 'CUSTOM_STUDIO',
        subType: 'CUSTOM_STUDIO',
        rewardTokens: rewardTok,
        targets: [...new Set(rawTargets)],
        cyclesConfig: JSON.parse(JSON.stringify(studioCyclesDraft))
    };

    const existingIdx = state.customModules.findIndex(m => m.id === modId);
    if (existingIdx >= 0) {
        state.customModules[existingIdx] = moduleObj;
    } else {
        state.customModules.push(moduleObj);
    }

    if (!state.unlocked.includes(modId)) state.unlocked.push(modId);
    state.customCurriculum[modId] = { 1: [...moduleObj.targets] };
    saveState();
    playSound('win');
    resetStudioForm();
    renderStudioSavedModulesList();
    customAlert("Tarefa Salva!", `A atividade "${titleVal}" já está disponível na aba Personalizados.`);
}

function editStudioCustomModule(modId) {
    const mod = (state.customModules || []).find(m => m.id === modId);
    if (!mod) return;
    playSound('click');
    document.getElementById('studio-edit-id').value = mod.id;
    document.getElementById('studio-title').value = mod.title;
    document.getElementById('studio-desc').value = mod.desc || '';
    document.getElementById('studio-reward-tokens').value = (typeof mod.rewardTokens === 'number') ? mod.rewardTokens : 2;
    document.getElementById('studio-targets-input').value = (mod.targets || []).join(', ');
    studioCyclesDraft = JSON.parse(JSON.stringify(mod.cyclesConfig || []));
    renderStudioTargetsMediaChips();
    renderStudioCyclesDraftUI();
}

function deleteStudioCustomModule(modId) {
    playSound('click');
    state.customModules = (state.customModules || []).filter(m => m.id !== modId);
    delete state.customCurriculum[modId];
    delete state.moduleProgress[modId];
    saveState();
    renderStudioSavedModulesList();
}

function renderStudioSavedModulesList() {
    const box = document.getElementById('studio-saved-modules-list');
    if (!box) return;
    box.innerHTML = '';
    const list = state.customModules || [];
    if (list.length === 0) {
        box.innerHTML = `<p style="color:var(--text-light); font-size:0.88rem; font-weight:700; text-align:center; padding:16px;">Nenhuma tarefa personalizada cadastrada.</p>`;
        return;
    }
    list.forEach(m => {
        const row = document.createElement('div');
        row.className = 'tenant-list-item';
        row.innerHTML = `
            <div style="text-align:left;">
                <strong style="font-size:0.98rem; color:var(--text); display:block;">${m.title}</strong>
                <span style="font-size:0.76rem; color:var(--text-light); font-weight:700;">${(m.cyclesConfig || []).length} Ciclo(s) • Estímulos: ${(m.targets || []).join(', ')} • +${m.rewardTokens} Fichas</span>
            </div>
            <div style="display:flex; gap:8px;">
                <button type="button" class="btn-action" style="padding:7px 12px; font-size:0.8rem;" onclick="startCustomStudioModule('${m.id}')">Testar</button>
                <button type="button" class="btn-action btn-cancel" style="padding:7px 12px; font-size:0.8rem;" onclick="editStudioCustomModule('${m.id}')">Editar</button>
                <button type="button" class="btn-icon-del" onclick="deleteStudioCustomModule('${m.id}')" title="Excluir"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
            </div>
        `;
        box.appendChild(row);
    });
}

function renderTokensManagementUI() {
    if (!state.tokens) state.tokens = getDefaultTokensClone();
    updateTokenBalanceUI();
    const r = state.tokens.rules;
    const chkEn = document.getElementById('tok-rule-enabled');
    const inpBlk = document.getElementById('tok-rule-per-block');
    const inpBon = document.getElementById('tok-rule-bonus-mastery');
    const chkPin = document.getElementById('tok-rule-pin-rocket');
    const chkImm = document.getElementById('tok-rule-imm-enable');
    const inpImmS = document.getElementById('tok-rule-imm-sec');

    if (chkEn) chkEn.checked = r.enabled !== false;
    if (inpBlk) inpBlk.value = r.pointsPerMasteryBlock ?? 2;
    if (inpBon) inpBon.value = r.bonusConsecutiveStreak ?? 5;
    if (chkPin) chkPin.checked = r.requirePinOnRocket !== false;
    if (chkImm) chkImm.checked = !!r.enableImmediateMiniReward;
    if (inpImmS) inpImmS.value = r.immediateMiniRewardDurationSec || 20;

    const catGrid = document.getElementById('analyst-catalog-list');
    if (catGrid) {
        catGrid.innerHTML = '';
        (state.tokens.catalog || []).forEach(item => {
            const card = document.createElement('div');
            card.className = 'store-item-card';
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:2rem;">${item.mediaVal || '🎁'}</span>
                    <span class="token-balance-pill" style="height:30px; padding:4px 10px; font-size:0.8rem;">${UI_SVGS.coin} ${item.cost}</span>
                </div>
                <div style="text-align:left;">
                    <strong style="font-size:0.95rem; color:var(--text); display:block;">${item.title}</strong>
                    <span style="font-size:0.75rem; color:var(--text-light); font-weight:600;">${item.desc || ''}</span>
                </div>
                <button type="button" class="btn-action btn-cancel" style="width:100%; padding:7px; font-size:0.78rem; color:var(--danger);" onclick="deleteCatalogStoreItem('${item.id}')">Remover Item</button>
            `;
            catGrid.appendChild(card);
        });
    }
}

function saveTokenRulesFromUI() {
    if (!state.tokens) state.tokens = getDefaultTokensClone();
    state.tokens.rules = {
        enabled: document.getElementById('tok-rule-enabled').checked,
        pointsPerMasteryBlock: Math.max(0, parseInt(document.getElementById('tok-rule-per-block').value) || 0),
        bonusConsecutiveStreak: Math.max(0, parseInt(document.getElementById('tok-rule-bonus-mastery').value) || 0),
        requirePinOnRocket: document.getElementById('tok-rule-pin-rocket').checked,
        enableImmediateMiniReward: document.getElementById('tok-rule-imm-enable').checked,
        immediateMiniRewardDurationSec: Math.max(5, parseInt(document.getElementById('tok-rule-imm-sec').value) || 20)
    };
    saveState();
}

function injectManualTokens() {
    const amtInp = document.getElementById('token-grant-amount');
    const rsnInp = document.getElementById('token-grant-reason');
    const val = parseInt(amtInp ? amtInp.value : 0) || 0;
    if (val === 0) return;
    const reason = (rsnInp && rsnInp.value.trim()) ? rsnInp.value.trim() : 'Concessão manual';
    awardTokensToActiveStudent(val, reason);
    playSound('win');
    if (rsnInp) rsnInp.value = '';
    customAlert("Saldo Atualizado", `Foram ${val > 0 ? 'adicionadas' : 'debitadas'} ${Math.abs(val)} ficha(s). Saldo atual: ${state.tokens.balance}.`);
}

function addCatalogStoreItem() {
    const title = (document.getElementById('store-new-title').value || '').trim();
    const cost = Math.max(1, parseInt(document.getElementById('store-new-cost').value) || 3);
    const icon = (document.getElementById('store-new-icon').value || '').trim() || '🎁';
    const desc = (document.getElementById('store-new-desc').value || '').trim();
    if (!title) {
        customAlert("Nome Obrigatório", "Informe o nome do prêmio.");
        return;
    }
    state.tokens.catalog.push({
        id: 'vouch_' + Date.now(),
        title,
        cost,
        mediaType: 'EMOJI',
        mediaVal: icon,
        desc
    });
    saveState();
    playSound('win');
    document.getElementById('store-new-title').value = '';
    document.getElementById('store-new-desc').value = '';
    renderTokensManagementUI();
}

function deleteCatalogStoreItem(itemId) {
    playSound('click');
    state.tokens.catalog = (state.tokens.catalog || []).filter(i => i.id !== itemId);
    saveState();
    renderTokensManagementUI();
}

function handleRocketRewardClick() {
    playSound('click');
    const needPin = state.tokens && state.tokens.rules && state.tokens.rules.requirePinOnRocket && getEffectiveMasterPin().length > 0 && activeRole === 'APPLICATOR';
    if (needPin) {
        requireAuth(openRewardStoreCheckoutModal);
    } else {
        openRewardStoreCheckoutModal();
    }
}

function openRewardStoreCheckoutModal() {
    updateTokenBalanceUI();
    applyArcadeOverridesToList();
    const arcGrid = document.getElementById('checkout-arcade-grid');
    const vchGrid = document.getElementById('checkout-vouchers-grid');
    const bal = (state.tokens && typeof state.tokens.balance === 'number') ? state.tokens.balance : 0;

    if (arcGrid) {
        arcGrid.innerHTML = '';
        arcadeCatalogList.forEach(game => {
            const canAfford = bal >= game.cost;
            const card = document.createElement('div');
            card.className = 'store-item-card';
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="meta-chip" style="background:var(--primary-light); color:var(--primary-dark);">${game.durationSec}s</span>
                    <span class="token-balance-pill" style="height:30px; padding:4px 10px; font-size:0.8rem;">${UI_SVGS.coin} ${game.cost}</span>
                </div>
                <div style="text-align:left;">
                    <strong style="font-size:1rem; color:var(--text); display:block;">${game.title}</strong>
                    <span style="font-size:0.76rem; color:var(--text-light); font-weight:600;">${game.desc || ''}</span>
                </div>
                <button type="button" class="btn-action" style="width:100%; padding:9px;" ${canAfford ? '' : 'disabled'} onclick="redeemArcadeGame('${game.id}', false)">
                    ${canAfford ? 'Jogar Agora' : 'Fichas Insuficientes'}
                </button>
            `;
            arcGrid.appendChild(card);
        });
    }

    if (vchGrid) {
        vchGrid.innerHTML = '';
        (state.tokens.catalog || []).forEach(v => {
            const canAfford = bal >= v.cost;
            const card = document.createElement('div');
            card.className = 'store-item-card';
            card.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:2rem;">${v.mediaVal || '🎁'}</span>
                    <span class="token-balance-pill" style="height:30px; padding:4px 10px; font-size:0.8rem;">${UI_SVGS.coin} ${v.cost}</span>
                </div>
                <div style="text-align:left;">
                    <strong style="font-size:0.95rem; color:var(--text); display:block;">${v.title}</strong>
                    <span style="font-size:0.75rem; color:var(--text-light); font-weight:600;">${v.desc || ''}</span>
                </div>
                <button type="button" class="btn-action" style="width:100%; padding:9px; background:var(--success);" ${canAfford ? '' : 'disabled'} onclick="redeemPhysicalVoucher('${v.id}')">
                    ${canAfford ? 'Resgatar Prêmio' : 'Fichas Insuficientes'}
                </button>
            `;
            vchGrid.appendChild(card);
        });
    }

    document.getElementById('modal-store-checkout').style.display = 'flex';
}

function redeemPhysicalVoucher(vouchId) {
    const item = (state.tokens.catalog || []).find(i => i.id === vouchId);
    if (!item) return;
    if ((state.tokens.balance || 0) < item.cost) return;

    closeModals();
    customAlert(
        "Confirmar Resgate",
        `Deseja descontar ${item.cost} ficha(s) para liberar "${item.title}" ao aluno?`,
        () => {
            awardTokensToActiveStudent(-item.cost, `Resgate: ${item.title}`);
            playSound('win');
            customAlert("Prêmio Liberado!", `O prêmio "${item.title}" foi resgatado com sucesso.`);
        },
        true
    );
}

function redeemArcadeGame(gameId, isFreeTestOrImmediate = false, customDurationSec = null) {
    applyArcadeOverridesToList();
    const game = arcadeCatalogList.find(g => g.id === gameId) || arcadeCatalogList[0];
    if (!game) return;

    if (!isFreeTestOrImmediate) {
        if ((state.tokens.balance || 0) < game.cost) return;
        awardTokensToActiveStudent(-game.cost, `Jogo Arcade: ${game.title}`);
    }

    closeModals();
    const duration = customDurationSec || game.durationSec || 45;
    launchArcadeSandboxIframe(game.title, game.entry, duration);
}

function launchArcadeSandboxIframe(title, entryUrl, durationSec) {
    const modal = document.getElementById('modal-reward-arcade');
    const frame = document.getElementById('arcade-game-frame');
    const titleEl = document.getElementById('arcade-active-title');
    const countEl = document.getElementById('arcade-countdown-text');
    if (!modal || !frame) return;

    if (arcadeCountdownInterval) { clearInterval(arcadeCountdownInterval); arcadeCountdownInterval = null; }
    let remaining = parseInt(durationSec) || 45;
    if (titleEl) titleEl.innerText = title || 'Reforço Ativo';
    if (countEl) countEl.innerText = `${remaining}s`;

    const sep = entryUrl.includes('?') ? '&' : '?';
    frame.src = `${entryUrl}${sep}time=${remaining}`;
    modal.style.display = 'flex';

    arcadeCountdownInterval = setInterval(() => {
        remaining--;
        if (countEl) countEl.innerText = `${Math.max(0, remaining)}s`;
        if (remaining <= 0) {
            clearInterval(arcadeCountdownInterval);
            arcadeCountdownInterval = null;
            try {
                if (frame.contentWindow) {
                    frame.contentWindow.postMessage({ type: 'ARCADE_TIME_UP' }, '*');
                }
            } catch (e) {}
            setTimeout(() => closeArcadeSandbox(), 1500);
        }
    }, 1000);
}

function closeArcadeSandbox() {
    if (arcadeCountdownInterval) { clearInterval(arcadeCountdownInterval); arcadeCountdownInterval = null; }
    const modal = document.getElementById('modal-reward-arcade');
    const frame = document.getElementById('arcade-game-frame');
    if (frame) frame.src = 'about:blank';
    if (modal) modal.style.display = 'none';
}

function getEffectiveMasterPin() {
    if (tenantsIndex && tenantsIndex.analystPin && String(tenantsIndex.analystPin).trim().length > 0) {
        return String(tenantsIndex.analystPin).trim();
    }
    if (state.settings.security && state.settings.security.pin && String(state.settings.security.pin).trim().length > 0) {
        return String(state.settings.security.pin).trim();
    }
    return '';
}

function promptPinWithExpected(pinStr, callback) {
    expectedAuthPin = pinStr;
    authCallback = callback;
    const input = document.getElementById('auth-pin-input');
    input.value = '';
    document.getElementById('auth-error').innerText = '';
    document.getElementById('modal-auth').style.display = 'flex';
    setTimeout(() => input.focus(), 100);
}

function requireAuth(callback) {
    const analystPin = getEffectiveMasterPin();
    if (!analystPin) {
        callback();
    } else {
        promptPinWithExpected(analystPin, callback);
    }
}

function closeAuth() {
    document.getElementById('modal-auth').style.display = 'none';
    authCallback = null;
    expectedAuthPin = '';
}

function confirmAuth() {
    const input = document.getElementById('auth-pin-input');
    const pinToMatch = expectedAuthPin || getEffectiveMasterPin();
    if (input.value === pinToMatch) {
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
    const lockExit = (tenantsIndex && tenantsIndex.lockExit) || (state.settings.security.enabled && state.settings.security.lockExit);
    const activePin = getEffectiveMasterPin() || (tenantsIndex && tenantsIndex.applicatorPin);
    if (lockExit && activePin) {
        promptPinWithExpected(activePin, abortGame);
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
    const clock = document.getElementById('header-timer-icon');
    if (!state.settings.timer.enabled) {
        if (clock) clock.style.display = 'none';
        return;
    }
    if (state.session.expired) {
        if (clock) clock.style.display = 'none';
        return;
    }
    if (state.session.endTime) {
        const remaining = state.session.endTime - Date.now();
        if (remaining <= 0) {
            state.session.expired = true;
            state.session.endTime = null;
            saveState();
            if (clock) clock.style.display = 'none';
            triggerTimeUp();
        } else {
            if (clock) clock.style.display = 'flex';
            const mins = Math.floor(remaining / 60000);
            const secs = Math.floor((remaining % 60000) / 1000);
            const txt = document.getElementById('header-timer-text');
            if (txt) txt.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
    }
}

function triggerTimeUp() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    clearAllTrialTimers();
    updateLobbyButton();
    document.getElementById('modal-timesup').style.display = 'flex';
}

function updateLobbyButton() {
    const btn = document.getElementById('btn-start-game');
    const clock = document.getElementById('header-timer-icon');
    if (!btn) return;
    if (state.settings.timer.enabled && state.session.expired) {
        btn.innerHTML = `<span class="splash-btn-label">Sessão Finalizada</span><div class="icon-wrapper"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>`;
        btn.onclick = () => {
            requireAuth(() => {
                state.session.expired = false;
                state.session.endTime = Date.now() + ((state.settings.timer.min || 30) * 60000);
                state.session.configuredMin = state.settings.timer.min || 30;
                saveState();
                if (!timerInterval) timerInterval = setInterval(checkTimer, 1000);
                checkTimer();
                updateLobbyButton();
                customAlert("Sessão Liberada", `O cronômetro de ${state.settings.timer.min} minutos foi reiniciado.`);
            });
        };
        if (clock) clock.style.display = 'none';
    } else {
        btn.innerHTML = `<span class="splash-btn-label">Iniciar Sessão</span><div class="icon-wrapper"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg></div>`;
        btn.onclick = openGrid;
        if (clock) {
            clock.style.display = (state.settings.timer.enabled && state.session.endTime && !state.session.expired) ? 'flex' : 'none';
        }
    }
}

function openStudentSwitcherModal() {
    playSound('click');
    renderStudentSwitcherModalList();
    const inp = document.getElementById('new-tenant-name-input');
    if (inp) inp.value = '';
    const modal = document.getElementById('modal-student-switcher');
    if (modal) modal.style.display = 'flex';
}

function renderStudentSwitcherModalList() {
    const listEl = document.getElementById('tenant-students-list');
    if (!listEl || !tenantsIndex) return;
    listEl.innerHTML = '';

    tenantsIndex.students.forEach(stu => {
        const isCurrent = (stu.id === tenantsIndex.activeStudentId);
        const row = document.createElement('div');
        row.className = `tenant-list-item ${isCurrent ? 'active' : ''}`;
        row.onclick = () => {
            playSound('click');
            switchActiveStudent(stu.id);
            closeModals();
        };

        const left = document.createElement('div');
        left.style.display = 'flex';
        left.style.alignItems = 'center';
        left.style.gap = '10px';
        left.innerHTML = `
            <div style="width:32px; height:32px; border-radius:50%; background:#FFFFFF; border:1.5px solid var(--border); display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.85rem; color:var(--text);">
                ${stu.firstName.charAt(0)}
            </div>
            <div style="text-align:left;">
                <strong style="display:block; font-size:0.98rem; color:var(--text);">${stu.firstName}</strong>
                <span style="font-size:0.74rem; color:var(--text-light); font-weight:600;">Perfil do Aluno</span>
            </div>
        `;

        const right = document.createElement('div');
        right.style.display = 'flex';
        right.style.alignItems = 'center';
        right.style.gap = '8px';

        if (isCurrent) {
            right.innerHTML += `<span class="meta-chip" style="background:var(--primary); color:#fff;">Ativo</span>`;
        }
        if (activeRole === 'ANALYST' && tenantsIndex.students.length > 1) {
            const delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'btn-icon-del';
            delBtn.title = 'Remover Aluno';
            delBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
            delBtn.onclick = (e) => {
                e.stopPropagation();
                playSound('click');
                deleteStudentTenant(stu.id);
            };
            right.appendChild(delBtn);
        }

        row.appendChild(left);
        row.appendChild(right);
        listEl.appendChild(row);
    });
}

function handleAddStudentFromModal() {
    const inp = document.getElementById('new-tenant-name-input');
    if (!inp || !inp.value.trim()) return;
    if (createNewStudentTenant(inp.value.trim())) {
        playSound('win');
        inp.value = '';
        closeModals();
    }
}

function openTelemetryOptionsModal() {
    playSound('click');
    const modal = document.getElementById('modal-telemetry-options');
    if (modal) modal.style.display = 'flex';
}

function exportStudentProfileJSON() {
    closeModals();
    saveState();
    const payload = {
        alfamtsBackupVersion: 3,
        exportedAt: new Date().toISOString(),
        studentProfile: state
    };
    const jsonStr = JSON.stringify(payload, null, 2);
    const fileName = `Backup_${getActiveFirstName()}_AlfaMTS.json`;

    try {
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 250);
        playSound('win');
    } catch (e) {
        document.getElementById('report-modal-title').innerText = "Backup Completo (JSON)";
        document.getElementById('report-modal-desc').innerText = "Copie o código abaixo para salvar seu backup:";
        document.getElementById('json-output').value = jsonStr;
        document.getElementById('modal-report').style.display = 'flex';
    }
}

function triggerImportStudentProfileJSON() {
    closeModals();
    const fileInp = document.getElementById('backup-json-file-input');
    if (fileInp) {
        fileInp.value = '';
        fileInp.click();
    }
}

function handleImportStudentProfileFile(fileList) {
    if (!fileList || fileList.length === 0) return;
    const file = fileList[0];
    const reader = new FileReader();
    reader.onload = (ev) => {
        try {
            const parsed = JSON.parse(ev.target.result);
            const importedState = (parsed && parsed.studentProfile) ? parsed.studentProfile : parsed;
            if (!importedState || typeof importedState !== 'object' || !importedState.settings) {
                customAlert("Arquivo Inválido", "O arquivo selecionado não contém um perfil válido do AlfaMTS.");
                return;
            }
            normalizeStudentState(importedState);
            const firstName = importedState.student || 'ALUNO';
            const existing = tenantsIndex.students.find(s => s.firstName === firstName);
            let targetId = existing ? existing.id : ('stu_' + Date.now());
            if (!existing) {
                tenantsIndex.students.push({
                    id: targetId,
                    firstName,
                    createdAt: new Date().toLocaleDateString('pt-BR')
                });
            }
            localStorage.setItem('alfamts_student_' + targetId, JSON.stringify(importedState));
            switchActiveStudent(targetId);
            playSound('win');
            renderDashboard();
            customAlert("Backup Restaurado!", `O perfil e o histórico de "${firstName}" foram carregados com sucesso.`);
        } catch (err) {
            customAlert("Erro na Importação", "Não foi possível ler o arquivo JSON.");
        }
    };
    reader.readAsText(file);
}

/* ============================================================================
   8. CARROSSEL DE 10 GUIAS, GATILHO DE GEARS NO SILABÁRIO E PUSH-TO-VIEW
   ============================================================================ */
const CAROUSEL_LEVELS = [
    { key: 'N1', title: 'Nível 1' },
    { key: 'N2', title: 'Nível 2' },
    { key: 'N3', title: 'Nível 3' },
    { key: 'N4', title: 'Nível 4' },
    { key: 'N5', title: 'Nível 5' },
    { key: 'FONOLOGICO', title: 'Alfabeto Fonológico' },
    { key: 'SILABARIO', title: 'Silabário' },
    { key: 'PALAVRARIO', title: 'Palavrário' },
    { key: 'EXTRAS', title: 'Extras' },
    { key: 'PERSONALIZADOS', title: 'Personalizados' }
];

let lastCarouselPageIdx = -1;
let pushHoldTimer = null;
let isPushModalOpen = false;
let pointerDownCoords = { x: 0, y: 0 };

function selectLevelTab(lvl) {
    playSound('click');
    currentLevelTab = lvl;
    const idx = CAROUSEL_LEVELS.findIndex(l => l.key === lvl);
    if (idx >= 0) scrollToLevelIndex(idx);
}

function stepCarouselLevel(delta) {
    playSound('click');
    const curIdx = Math.max(0, CAROUSEL_LEVELS.findIndex(l => l.key === currentLevelTab));
    const nextIdx = Math.min(CAROUSEL_LEVELS.length - 1, Math.max(0, curIdx + delta));
    scrollToLevelIndex(nextIdx);
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
    if (activeRole !== 'ANALYST') return;
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
}

function renderDotsHTML(modId, hasVariations = false) {
    if (String(modId).startsWith('R_')) return '';
    const prog = getModuleProgress(modId);
    const target = state.settings.consecDays || 2;
    const activeV = getActiveVariationForModule(modId);
    const tCfg = getTaskConfig(modId);
    const inProbe = isModuleInProbeMode(modId);

    let dots = '';
    for (let i = 0; i < target; i++) {
        const filled = (prog.status === 'mastered' || i < prog.streak) ? 'filled' : '';
        dots += `<span class="day-dot ${filled}"></span>`;
    }
    const probeBadge = inProbe
        ? `<span class="var-pill-tag" style="background:#EDE9FE; color:#6D28D9;">SONDA</span>`
        : '';
    const dmtsBadge = (tCfg.dmtsDelay > 0 && getTaskCapabilities(modId).canUseDMTS)
        ? `<span class="var-pill-tag" style="background:#FEF3C7; color:#92400E;">${tCfg.dmtsDelay}s</span>`
        : '';
    const varBadge = hasVariations ? `<span class="var-pill-tag">Var ${activeV}</span>` : '';
    const statusText = prog.status === 'mastered'
        ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
        : `${Math.min(prog.streak, target)}/${target}`;

    return `<div class="card-footer-mastery"><div class="days-dots">${dots}</div><span class="day-label">${probeBadge}${dmtsBadge}${varBadge} ${statusText}</span></div>`;
}

function scrollToLevelIndex(idx) {
    const viewport = document.getElementById('levels-carousel');
    if (!viewport) return;
    viewport.scrollTo({ left: idx * viewport.clientWidth, behavior: 'smooth' });
}

function onCarouselScroll() {
    const viewport = document.getElementById('levels-carousel');
    if (!viewport || viewport.clientWidth === 0) return;
    if (pushHoldTimer) { clearTimeout(pushHoldTimer); pushHoldTimer = null; }

    const pageIdx = Math.round(viewport.scrollLeft / viewport.clientWidth);
    const pageChanged = (pageIdx !== lastCarouselPageIdx);
    lastCarouselPageIdx = pageIdx;

    const lvlObj = CAROUSEL_LEVELS[pageIdx] || CAROUSEL_LEVELS[0];
    currentLevelTab = lvlObj.key;

    const titleEl = document.getElementById('carousel-level-title');
    if (titleEl) {
        if (lvlObj.key === 'SILABARIO') {
            const gear = getActiveSyllabaryGearObj();
            const isAnalyst = (activeRole === 'ANALYST');
            if (isAnalyst) {
                titleEl.classList.add('gear-trigger-title');
                titleEl.style.pointerEvents = 'auto';
                titleEl.style.cursor = 'pointer';
                titleEl.title = 'Toque para trocar a Gear do Silabário';
                titleEl.innerHTML = `<span>Silabário</span> <span class="gear-header-chip">${gear.shortLabel} ${UI_SVGS.chevronDown}</span>`;
                titleEl.onclick = () => openSyllabaryGearSheet();
            } else {
                titleEl.classList.remove('gear-trigger-title');
                titleEl.style.pointerEvents = 'none';
                titleEl.style.cursor = 'default';
                titleEl.title = '';
                titleEl.innerHTML = `<span>Silabário • ${gear.shortLabel}</span>`;
                titleEl.onclick = null;
            }
        } else {
            titleEl.classList.remove('gear-trigger-title');
            titleEl.style.pointerEvents = 'none';
            titleEl.style.cursor = 'default';
            titleEl.title = '';
            titleEl.innerText = lvlObj.title;
            titleEl.onclick = null;
        }
        if (pageChanged && window.AlfaAnimations && typeof window.AlfaAnimations.animateTitleSwap === 'function') {
            window.AlfaAnimations.animateTitleSwap(titleEl);
        }
    }

    document.querySelectorAll('#carousel-dots .page-dot').forEach((d, i) => {
        d.classList.toggle('active', i === pageIdx);
    });

    const leftArrow = document.getElementById('carousel-arrow-left');
    const rightArrow = document.getElementById('carousel-arrow-right');
    if (leftArrow) leftArrow.style.opacity = pageIdx <= 0 ? '0.25' : '1';
    if (rightArrow) rightArrow.style.opacity = pageIdx >= CAROUSEL_LEVELS.length - 1 ? '0.25' : '1';
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
        pointerDownCoords = { x: e.clientX, y: e.clientY };
        pushHoldTimer = setTimeout(() => {
            isPushModalOpen = true;
            playSound('click');
            document.getElementById('push-det-code').innerText = metaInfo.codeBadge;
            document.getElementById('push-det-title').innerText = metaInfo.title;
            document.getElementById('push-det-desc').innerText = metaInfo.desc;
            document.getElementById('push-det-method').innerText = metaInfo.methodText;
            document.getElementById('modal-push-details').style.display = 'flex';
        }, 320);
    });

    cardEl.addEventListener('pointermove', (e) => {
        if (!pushHoldTimer) return;
        const dist = Math.hypot(e.clientX - pointerDownCoords.x, e.clientY - pointerDownCoords.y);
        if (dist > 6) {
            clearTimeout(pushHoldTimer);
            pushHoldTimer = null;
        }
    });

    cardEl.addEventListener('touchmove', () => {
        if (pushHoldTimer) { clearTimeout(pushHoldTimer); pushHoldTimer = null; }
    }, { passive: true });

    cardEl.addEventListener('wheel', clearHold, { passive: true });
    cardEl.addEventListener('pointerup', clearHold);
    cardEl.addEventListener('pointercancel', clearHold);
    cardEl.addEventListener('pointerleave', clearHold);
}

function getMethodExplanation(engine) {
    if (engine === 'PHON_CHECKPOINT') return 'Check-point de Conjunto: avalia a retenção mista sem dica de todos os fonemas do conjunto. 100% libera o próximo conjunto; falhas iniciam retreino misto.';
    if (engine === 'PALAVRARIO_ENGINE') return 'Gaveta Lexical do Palavrário: integra Treino (Equivalência BC-C + Montagem Silábica + Desmame Tipográfico) e Sondagem Condicional (B-C → C-B → C-D → A-C).';
    if (engine === 'CUSTOM_STUDIO') return 'Tarefa personalizada configurada na Oficina de Tarefas.';
    if (engine === 'REWARD_PORTAL') return 'Portal de acesso rápido para desbloquear e abrir módulos nos Hubs e Extras.';
    if (engine === 'PHON_MODEL') return '5 Micro-Ciclos Fônicos: Sondagem a Frio → Boca+Slide → Discriminação Receptiva → Slide Autônomo → Revisão Cumulativa e Fusão CV.';
    if (engine === 'SYL_SLIDER') return 'Fusão silábica progressiva (Consoante + Vogal → Sílaba) seguida de seleção auditiva e leitura.';
    if (engine === 'MULTIMTS') return 'Ensino direto em linhas horizontais com transição automática para Sondagem de Equivalência.';
    if (engine === 'CRMTS') return 'Construção ativa de unidades (sílabas, letras ou palavras) a partir do modelo.';
    if (engine === 'FLUENCY') return 'Leitura ágil sob controle de latência (< 3s).';
    if (engine === 'DTT') return 'Apresentação direta com registro imediato pelo aplicador.';
    return 'Ensino estruturado com suporte a aprendizagem sem erro e sondagem sem dica.';
}

function executeRewardPortalAction(modId) {
    const mod = getEffectiveEidosModules().find(m => m.id === modId);
    if (!mod) return;
    playSound('win');

    if (Array.isArray(mod.unlockTargets)) {
        mod.unlockTargets.forEach(t => {
            if (!state.unlocked.includes(t)) state.unlocked.push(t);
        });
    }
    if (mod.targetTab === 'SILABARIO') {
        getEffectiveSyllabaryOrder().slice(0, 5).forEach(s => {
            if (!state.unlocked.includes(s)) state.unlocked.push(s);
        });
    }
    if (mod.targetTab === 'PALAVRARIO') {
        ['PAL_1', 'PAL_2', 'PAL_3'].forEach(p => {
            if (!state.unlocked.includes(p)) state.unlocked.push(p);
        });
    }
    if (mod.targetTab === 'FONOLOGICO') {
        getEffectivePhonologicalModules().filter(pm => pm.setNum === 1).forEach(pm => {
            if (!state.unlocked.includes(pm.id)) state.unlocked.push(pm.id);
        });
    }
    const prog = getModuleProgress(mod.id);
    prog.status = 'mastered';
    saveState();

    if (mod.targetTab) {
        selectLevelTab(mod.targetTab);
        setTimeout(() => {
            if (mod.openModuleId) {
                startEidosModule(mod.openModuleId);
            }
        }, 380);
    }
}

function buildCleanCardElement(itemData) {
    const isPortal = (itemData.engine === 'REWARD_PORTAL');
    const isCheckpoint = (itemData.engine === 'PHON_CHECKPOINT');
    const isPivot = !!itemData.isPivot;
    const card = document.createElement('div');
    card.className = `phase-card clean-card ${itemData.isUnlocked ? '' : 'locked'} ${itemData.isMastered ? 'mastered' : ''} ${isPortal || isCheckpoint ? 'reward-portal-card' : ''}`;

    if (isPortal) {
        const portalBtn = itemData.isUnlocked
            ? `<button type="button" class="card-play-btn" style="background:var(--warning); color:#1E293B;" title="Abrir Portal" onclick="event.stopPropagation(); executeRewardPortalAction('${itemData.id}')">
                   ${UI_SVGS.arrowRight}
               </button>`
            : '';
        card.innerHTML = `
            <span class="code-tag" style="background:var(--warning-light); color:#92400E; width:fit-content;">PORTAL • DESBLOQUEIO</span>
            <div class="clean-card-body">
                <h3 class="clean-card-title">${itemData.title}</h3>
                ${portalBtn}
            </div>
        `;
        if (itemData.isUnlocked) {
            card.onclick = () => executeRewardPortalAction(itemData.id);
        }
        attachPushToViewEvents(card, {
            codeBadge: itemData.codeBadge,
            title: itemData.title,
            desc: itemData.desc,
            methodText: itemData.methodText
        });
        return card;
    }

    const playBtnHTML = itemData.isUnlocked
        ? `<button type="button" class="card-play-btn" style="${isCheckpoint ? 'background:#6D28D9;' : ''}" title="Iniciar Atividade" onclick="event.stopPropagation(); triggerCardPlay('${itemData.id}', ${itemData.isEidos}, true)">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
           </button>`
        : '';

    const topBadge = isCheckpoint
        ? `<span class="code-tag" style="background:#EDE9FE; color:#6D28D9; width:fit-content;">CHECK-POINT DE CONJUNTO</span>`
        : (isPivot ? `<span class="code-tag" style="background:var(--primary-light); color:var(--primary-dark); width:fit-content;">PIVÔ DE REVISÃO</span>` : '');

    card.innerHTML = `
        ${topBadge}
        <div class="clean-card-body">
            <h3 class="clean-card-title">${itemData.title}</h3>
            ${playBtnHTML}
        </div>
        ${renderDotsHTML(itemData.id, itemData.hasVar)}
    `;

    if (itemData.isUnlocked) {
        card.onclick = (e) => {
            if (e.target.closest('.card-play-btn')) return;
            if (isConfigMode || isReviewMode) {
                triggerCardPlay(itemData.id, itemData.isEidos, false);
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

function triggerCardPlay(id, isEidos, forceDirectPlay = false) {
    playSound('click');
    if (!forceDirectPlay && isConfigMode && activeRole === 'ANALYST') {
        requireAuth(() => openStimuliEditor(id));
        return;
    }
    if (!forceDirectPlay && isReviewMode) {
        openReview(id);
        return;
    }
    if (String(id).startsWith('FA_')) {
        startPhonologicalModelingModule(id);
    } else if (String(id).startsWith('CUST_')) {
        startCustomStudioModule(id);
    } else if (String(id).startsWith('PAL_')) {
        startPalavrarioDrawer(id);
    } else if (isEidos || getEffectiveEidosModules().some(m => m.id === id)) {
        startEidosModule(id);
    } else {
        startStructuredSyllabary(id);
    }
}

function getSyllableSetLabel(sylKey) {
    const activeGear = getActiveSyllabaryGearObj();
    if (activeGear && activeGear.id !== 'GEAR_1') {
        const isPivot = Array.isArray(activeGear.pivots) && activeGear.pivots.includes(sylKey);
        return isPivot
            ? `${activeGear.shortLabel} • Pivô de Revisão`
            : `${activeGear.title}`;
    }
    if (['T', 'L', 'M'].includes(sylKey)) return 'Conjunto 1 • Sílabas + Palavras Cumulativas';
    if (['F', 'B', 'R'].includes(sylKey)) return 'Conjunto 2 • Sílabas + Palavras Cumulativas';
    if (['P', 'N', 'V'].includes(sylKey)) return 'Conjunto 3 • Sílabas + Palavras Cumulativas';
    if (['S', 'D', 'J'].includes(sylKey)) return 'Conjunto 4 • Sílabas + Palavras Cumulativas';
    if (['X', 'Z'].includes(sylKey)) return 'Conjunto 5 • Sílabas + Palavras Cumulativas';
    if (['C', 'G', 'Q'].includes(sylKey)) return 'Conjunto 6 • Sílabas Regulares + Cumulativas';
    return 'Base Vocal';
}

function renderGrid() {
    ensureHeaderConfigModeBtn();
    syncRoleUIElements();
    const track = document.getElementById('carousel-track');
    const dotsBox = document.getElementById('carousel-dots');
    if (!track || !dotsBox) return;

    track.innerHTML = '';
    dotsBox.innerHTML = '';
    const allEidos = getEffectiveEidosModules();
    const activeGear = getActiveSyllabaryGearObj();

    CAROUSEL_LEVELS.forEach((lvl, idx) => {
        const page = document.createElement('div');
        page.className = 'carousel-page';
        page.addEventListener('scroll', () => {
            if (pushHoldTimer) { clearTimeout(pushHoldTimer); pushHoldTimer = null; }
        }, { passive: true });

        if (['N1', 'N2', 'N3', 'N4', 'N5'].includes(lvl.key)) {
            const modules = allEidos.filter(m => m.level === lvl.key);
            modules.forEach(mod => {
                const isUnlocked = state.unlocked.includes(mod.id);
                const prog = getModuleProgress(mod.id);
                const isEditable = !!(typeof DEFAULT_MODULE_VARIATIONS !== 'undefined' && DEFAULT_MODULE_VARIATIONS[mod.id] && DEFAULT_MODULE_VARIATIONS[mod.id].editable);
                const hasVar = isEditable || ['E5_6'].includes(mod.id);

                page.appendChild(buildCleanCardElement({
                    id: mod.id,
                    title: mod.title,
                    desc: mod.desc,
                    engine: mod.engine,
                    codeBadge: `${mod.code} • ${mod.engine}`,
                    methodText: getMethodExplanation(mod.engine),
                    isUnlocked,
                    isMastered: prog.status === 'mastered',
                    canConfigure: mod.engine !== 'REWARD_PORTAL',
                    hasVar,
                    isEidos: true
                }));
            });
        } else if (lvl.key === 'FONOLOGICO') {
            getEffectivePhonologicalModules().forEach(pm => {
                const isUnlocked = state.unlocked.includes(pm.id);
                const prog = getModuleProgress(pm.id);
                const eng = pm.isCheckpoint ? 'PHON_CHECKPOINT' : 'PHON_MODEL';
                page.appendChild(buildCleanCardElement({
                    id: pm.id,
                    title: pm.title,
                    desc: pm.desc,
                    engine: eng,
                    codeBadge: `CONJUNTO ${pm.setNum || 1} • ${pm.isCheckpoint ? 'CHECK-POINT' : 'FONEMA'}`,
                    methodText: getMethodExplanation(eng),
                    isUnlocked,
                    isMastered: prog.status === 'mastered',
                    canConfigure: !pm.isCheckpoint,
                    hasVar: false,
                    isEidos: false
                }));
            });
        } else if (lvl.key === 'SILABARIO') {
            const gearOrder = getEffectiveSyllabaryOrder();
            const isAdvancedGear = (activeGear.id !== 'GEAR_1');

            gearOrder.forEach(p => {
                const isUnlocked = state.unlocked.includes(p);
                const prog = getModuleProgress(p);
                const isPivot = isAdvancedGear && Array.isArray(activeGear.pivots) && activeGear.pivots.includes(p);
                let displayDesc = `${getSyllableSetLabel(p)}: Passos 1 a 4 (Sílabas → Palavras Estruturadas → Desmame Preto → Compreensão).`;
                if (p === 'VOGAIS') displayDesc = "Identificação e leitura das vogais A, E, I, O, U.";
                else if (p === 'ENCONTROS') displayDesc = "Encontros vocálicos AI, EI, OI, UI, AU, EU, OU, ÃO.";
                else if (isPivot) displayDesc = `Revisão estratégica em espiral da ${activeGear.title}.`;

                page.appendChild(buildCleanCardElement({
                    id: p,
                    title: p,
                    desc: displayDesc,
                    engine: 'MTS',
                    codeBadge: getSyllableSetLabel(p),
                    methodText: displayDesc,
                    isUnlocked,
                    isMastered: prog.status === 'mastered',
                    isPivot,
                    canConfigure: true,
                    hasVar: isAdvancedGear,
                    isEidos: false
                }));
            });
        } else if (lvl.key === 'PALAVRARIO') {
            getEffectivePalavrarioDrawers().forEach(drawer => {
                const isUnlocked = state.unlocked.includes(drawer.id);
                const prog = getModuleProgress(drawer.id);

                page.appendChild(buildCleanCardElement({
                    id: drawer.id,
                    title: drawer.title,
                    desc: drawer.desc,
                    engine: 'PALAVRARIO_ENGINE',
                    codeBadge: `${drawer.code} • PALAVRÁRIO`,
                    methodText: getMethodExplanation('PALAVRARIO_ENGINE'),
                    isUnlocked,
                    isMastered: prog.status === 'mastered',
                    canConfigure: true,
                    hasVar: true,
                    isEidos: false
                }));
            });
        } else if (lvl.key === 'EXTRAS') {
            const extraEidosMods = allEidos.filter(m => m.level === 'EXTRAS');
            extraEidosMods.forEach(mod => {
                const isUnlocked = state.unlocked.includes(mod.id);
                const prog = getModuleProgress(mod.id);
                const isEditable = !!(typeof DEFAULT_MODULE_VARIATIONS !== 'undefined' && DEFAULT_MODULE_VARIATIONS[mod.id] && DEFAULT_MODULE_VARIATIONS[mod.id].editable) || mod.id === 'EX_TYPO_GEN';

                page.appendChild(buildCleanCardElement({
                    id: mod.id,
                    title: mod.title,
                    desc: mod.desc,
                    engine: mod.engine,
                    codeBadge: `${mod.code}`,
                    methodText: getMethodExplanation(mod.engine),
                    isUnlocked,
                    isMastered: prog.status === 'mastered',
                    canConfigure: true,
                    hasVar: isEditable || ['EX_RHYME', 'EX_ALLIT', 'EX_MIN_PAIRS', 'EX_TYPO_GEN'].includes(mod.id),
                    isEidos: true
                }));
            });

            extraModules.forEach(p => {
                const isUnlocked = state.unlocked.includes(p);
                const prog = getModuleProgress(p);
                const title = (p === 'PALAVRAS') ? 'PALAVRAS LIVRES' : p;
                const desc = (p === 'PSEUDOPALAVRAS')
                    ? 'Decodificação fonológica de pseudopalavras.'
                    : 'Treino customizado com lista aberta de palavras.';

                page.appendChild(buildCleanCardElement({
                    id: p,
                    title,
                    desc,
                    engine: 'MTS',
                    codeBadge: `EXTRA`,
                    methodText: getMethodExplanation('MTS'),
                    isUnlocked,
                    isMastered: prog.status === 'mastered',
                    canConfigure: true,
                    hasVar: false,
                    isEidos: false
                }));
            });
        } else if (lvl.key === 'PERSONALIZADOS') {
            const customList = state.customModules || [];
            if (customList.length === 0) {
                const emptyBox = document.createElement('div');
                emptyBox.style.cssText = 'grid-column: 1 / -1; text-align:center; padding:40px 20px; color:var(--text-light); font-weight:700;';
                emptyBox.innerHTML = `Nenhuma tarefa personalizada criada.<br>${activeRole === 'ANALYST' ? '<button type="button" class="btn-action" style="margin-top:12px;" onclick="openComplements(\'STUDIO\')">Abrir Oficina de Tarefas</button>' : ''}`;
                page.appendChild(emptyBox);
            } else {
                customList.forEach(cm => {
                    const prog = getModuleProgress(cm.id);
                    page.appendChild(buildCleanCardElement({
                        id: cm.id,
                        title: cm.title,
                        desc: cm.desc || 'Tarefa personalizada.',
                        engine: 'CUSTOM_STUDIO',
                        codeBadge: `PERSONALIZADO • ${(cm.cyclesConfig || []).length} CICLO(S)`,
                        methodText: getMethodExplanation('CUSTOM_STUDIO'),
                        isUnlocked: true,
                        isMastered: prog.status === 'mastered',
                        canConfigure: true,
                        hasVar: false,
                        isEidos: true
                    }));
                });
            }
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
   9. PAINEL INTELIGENTE DA TAREFA, CATÁLOGO DE FONTES E ATUALIZAÇÃO PWA
   ============================================================================ */
let editorSession = {
    modId: null,
    activeVarKey: 1,
    hasEditableStimuli: false,
    tempMap: {}
};

let activeMediaTargetWord = null;

function switchTaskEditorTab(tabName) {
    playSound('click');
    ['STIM', 'TOPO', 'ABA', 'IMG'].forEach(t => {
        const btn = document.getElementById('tab-btn-' + t.toLowerCase());
        const pane = document.getElementById('task-tab-content-' + t.toLowerCase());
        if (btn) btn.classList.toggle('active', tabName === t);
        if (pane) pane.style.display = (tabName === t) ? 'block' : 'none';
    });
    if (tabName === 'IMG') {
        renderCustomImagesBankGallery();
    }
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

function syncFontCatalogSelectorUI() {
    const fontSel = document.getElementById('task-cfg-font');
    if (!fontSel) return;
    const prev = fontSel.value;
    fontSel.innerHTML = CUSTOM_FONTS_CATALOG.map(f =>
        `<option value="${f.id}">${f.label}</option>`
    ).join('');
    if (prev && CUSTOM_FONTS_CATALOG.some(f => f.id === prev)) {
        fontSel.value = prev;
    }
}

function ensureProbeModeSelectorInTaskModal(modId) {
    const abaTab = document.getElementById('task-tab-content-aba');
    if (!abaTab) return;
    let probeRow = document.getElementById('task-probe-mode-row');
    if (!probeRow) {
        probeRow = document.createElement('div');
        probeRow.id = 'task-probe-mode-row';
        probeRow.className = 'compact-param-row';
        probeRow.innerHTML = `
            <div class="param-label-group">
                <span>Modo de Execução</span>
            </div>
            <select id="task-cfg-probe-mode" class="compact-select">
                <option value="AUTO">Automático</option>
                <option value="TRAIN">Forçar Modo Treino</option>
                <option value="PROBE">Forçar Pré-Teste / Sondagem</option>
            </select>
        `;
        abaTab.insertBefore(probeRow, abaTab.firstChild);
    }
    const tCfg = getTaskConfig(modId);
    const sel = document.getElementById('task-cfg-probe-mode');
    if (sel) sel.value = tCfg.forceProbeMode || 'AUTO';
}

function openStimuliEditor(modId) {
    const customMod = (state.customModules || []).find(m => m.id === modId);
    const palDrawer = getEffectivePalavrarioDrawers().find(d => d.id === modId);
    const chkSet = getPhonemeSetsCatalog().find(s => s.id === modId);
    const mod = getEffectiveEidosModules().find(m => m.id === modId)
        || getEffectivePhonologicalModules().find(m => m.id === modId)
        || chkSet
        || palDrawer
        || customMod
        || { id: modId, title: String(modId), isAudioModel: false };

    const cap = getTaskCapabilities(modId);
    const meta = (typeof DEFAULT_MODULE_VARIATIONS !== 'undefined' && DEFAULT_MODULE_VARIATIONS[modId])
        ? DEFAULT_MODULE_VARIATIONS[modId]
        : ((customMod || palDrawer || modId === 'EX_TYPO_GEN') ? { editable: true, min: 3, max: 20 } : null);

    editorSession.modId = modId;
    editorSession.hasEditableStimuli = !!(cap.canEditStimuli && meta && meta.editable);

    const hasAnyPresentationControl = (cap.canChangeFont || cap.canColorCV || cap.canSylBox);
    document.getElementById('tab-btn-topo').style.display = hasAnyPresentationControl ? 'inline-flex' : 'none';
    document.getElementById('tab-btn-aba').style.display = 'inline-flex';

    syncFontCatalogSelectorUI();
    ensureProbeModeSelectorInTaskModal(modId);

    const fontSel = document.getElementById('task-cfg-font');
    const chkCV = document.getElementById('task-cfg-color-cv');
    const chkBox = document.getElementById('task-cfg-syl-box');
    if (fontSel && fontSel.closest('.compact-param-row')) {
        fontSel.closest('.compact-param-row').style.display = cap.canChangeFont ? 'flex' : 'none';
    }
    if (chkCV && chkCV.closest('.compact-param-row')) {
        chkCV.closest('.compact-param-row').style.display = cap.canColorCV ? 'flex' : 'none';
    }
    if (chkBox && chkBox.closest('.compact-param-row')) {
        chkBox.closest('.compact-param-row').style.display = cap.canSylBox ? 'flex' : 'none';
    }

    const probeRow = document.getElementById('task-probe-mode-row');
    if (probeRow) probeRow.style.display = cap.canUseProbeMode ? 'flex' : 'none';

    const optsSel = document.getElementById('task-cfg-opts');
    if (optsSel && optsSel.closest('.compact-param-row')) {
        optsSel.closest('.compact-param-row').style.display = cap.canChangeOpts ? 'flex' : 'none';
    }

    const dmtsBox = document.getElementById('dmts-config-box');
    if (dmtsBox) dmtsBox.style.display = cap.canUseDMTS ? 'flex' : 'none';

    let ftBtnBox = document.getElementById('task-fast-track-btn-box');
    if (!ftBtnBox) {
        const abaPane = document.getElementById('task-tab-content-aba');
        if (abaPane) {
            ftBtnBox = document.createElement('div');
            ftBtnBox.id = 'task-fast-track-btn-box';
            ftBtnBox.style.marginBottom = '10px';
            abaPane.insertBefore(ftBtnBox, abaPane.firstChild);
        }
    }
    if (ftBtnBox) {
        ftBtnBox.style.display = cap.canUseProbeMode ? 'block' : 'none';
        ftBtnBox.innerHTML = `
            <button type="button" class="btn-action" style="width:100%; background:#6D28D9; padding:10px;" onclick="startFastTrackEntryProbe('${modId}')">
                ${UI_SVGS.zap} Aplicar Pré-Teste / Sonda Rápida Agora
            </button>
        `;
    }

    const c1El = document.getElementById('task-cfg-c1');
    const c2El = document.getElementById('task-cfg-c2');
    const c3El = document.getElementById('task-cfg-c3');
    const c4El = document.getElementById('task-cfg-c4');
    const cyclesWrapper = c1El ? c1El.closest('div[style*="background:#F8FAFC"]') : null;

    if (cyclesWrapper) {
        if (!cap.cyclesLabels || cap.cyclesLabels.length === 0) {
            cyclesWrapper.style.display = 'none';
        } else {
            cyclesWrapper.style.display = 'block';
            [
                { el: c1El, key: 'c1' },
                { el: c2El, key: 'c2' },
                { el: c3El, key: 'c3' },
                { el: c4El, key: 'c4' }
            ].forEach(item => {
                if (!item.el || !item.el.parentElement) return;
                const match = cap.cyclesLabels.find(cl => cl.key === item.key);
                if (match) {
                    item.el.parentElement.style.display = 'flex';
                    item.el.parentElement.innerHTML = `<input type="checkbox" id="task-cfg-${item.key}" checked style="width:18px; height:18px;"> <span>${match.label}</span>`;
                } else {
                    item.el.parentElement.style.display = 'none';
                }
            });
        }
    }

    const tCfg = getTaskConfig(modId);
    if (fontSel) fontSel.value = tCfg.font || 'GLOBAL';
    if (chkCV) chkCV.checked = !!tCfg.colorCV;
    if (chkBox) chkBox.checked = !!tCfg.sylBox;
    if (optsSel) optsSel.value = String(tCfg.opts || 0);

    const stg = tCfg.stages || { c1: true, c2: true, c3: true, c4: true };
    if (document.getElementById('task-cfg-c1')) document.getElementById('task-cfg-c1').checked = stg.c1 !== false;
    if (document.getElementById('task-cfg-c2')) document.getElementById('task-cfg-c2').checked = stg.c2 !== false;
    if (document.getElementById('task-cfg-c3')) document.getElementById('task-cfg-c3').checked = stg.c3 !== false;
    if (document.getElementById('task-cfg-c4')) document.getElementById('task-cfg-c4').checked = stg.c4 !== false;

    document.getElementById('task-cfg-dmts').value = tCfg.dmtsDelay || 0;
    document.getElementById('dmts-val-label').innerText = (tCfg.dmtsDelay > 0) ? `${tCfg.dmtsDelay}s` : '0s';
    document.getElementById('task-cfg-timeout').value = tCfg.responseTimeout || 0;
    const tokInp = document.getElementById('task-cfg-tokens');
    if (tokInp) tokInp.value = (typeof tCfg.rewardTokens === 'number') ? tCfg.rewardTokens : -1;

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
        switchTaskEditorTab(hasAnyPresentationControl ? 'TOPO' : 'ABA');
    }

    document.getElementById('modal-stimuli-editor').style.display = 'flex';
}

function renderStimuliEditorUI() {
    if (!editorSession.hasEditableStimuli) return;
    const meta = (typeof DEFAULT_MODULE_VARIATIONS !== 'undefined' && DEFAULT_MODULE_VARIATIONS[editorSession.modId])
        ? DEFAULT_MODULE_VARIATIONS[editorSession.modId]
        : { min: 3, max: 20 };

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
    let hasUnhyphenatedUnknown = false;

    items.forEach((itemVal, idx) => {
        const row = document.createElement('div');
        row.className = 'stim-editor-row';

        const inp = document.createElement('input');
        inp.type = 'text';
        inp.value = itemVal;
        inp.oninput = (e) => {
            editorSession.tempMap[editorSession.activeVarKey][idx] = e.target.value;
        };

        const rawStr = String(itemVal || '').trim();
        const cleanKey = getNormalizedWordKey(rawStr);
        if (cleanKey.length >= 4 && !rawStr.includes(' ') && !rawStr.includes('-') && !rawStr.includes('/') && (typeof WORD_BANK === 'undefined' || !WORD_BANK[cleanKey])) {
            hasUnhyphenatedUnknown = true;
        }

        const mediaBtn = document.createElement('button');
        mediaBtn.type = 'button';
        mediaBtn.className = 'icon-circle-btn';
        mediaBtn.style.width = '34px';
        mediaBtn.style.height = '34px';
        mediaBtn.title = 'Associar Figura';
        const hasCustom = hasValidVisualRepresentation(cleanKey);
        if (hasCustom) {
            mediaBtn.style.borderColor = 'var(--primary)';
            mediaBtn.style.background = 'var(--primary-light)';
        }
        mediaBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
        mediaBtn.onclick = () => {
            playSound('click');
            const currentWord = getNormalizedWordKey(editorSession.tempMap[editorSession.activeVarKey][idx]);
            if (!currentWord) return;
            openStimulusMediaAssignPicker(currentWord);
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
        row.appendChild(mediaBtn);
        row.appendChild(delBtn);
        listContainer.appendChild(row);
    });

    let hintEl = document.getElementById('stim-hyphen-hint');
    if (!hintEl && listContainer.parentNode) {
        hintEl = document.createElement('div');
        hintEl.id = 'stim-hyphen-hint';
        hintEl.style.cssText = 'font-size:0.76rem; font-weight:700; color:#B45309; background:#FEF3C7; padding:6px 10px; border-radius:8px; margin-bottom:10px; display:none;';
        listContainer.parentNode.insertBefore(hintEl, listContainer.nextSibling);
    }
    if (hintEl) {
        if (hasUnhyphenatedUnknown) {
            hintEl.style.display = 'block';
            hintEl.innerText = 'Dica: use hífen (ex: RI-NO-CE-RON-TE) se desejar divisão silábica automática para palavras novas.';
        } else {
            hintEl.style.display = 'none';
        }
    }

    const addBtn = document.getElementById('stim-btn-add');
    if (addBtn) addBtn.disabled = items.length >= meta.max;
}

async function handleBatchImageUpload(fileList) {
    if (!fileList || fileList.length === 0) return;
    const scaleSelect = document.getElementById('img-upload-scale');
    const scaleVal = scaleSelect ? parseFloat(scaleSelect.value) : 0.5;
    const statusEl = document.getElementById('img-upload-status');
    if (statusEl) statusEl.innerText = `Processando ${fileList.length} imagem(ns)...`;

    let count = 0;
    for (let i = 0; i < fileList.length; i++) {
        const f = fileList[i];
        if (!f.type.startsWith('image/')) continue;
        try {
            const rec = await compressAndConvertImageToWebP(f, scaleVal, 0.82);
            await saveCustomImageToIndexedDB(rec);
            count++;
        } catch (e) {}
    }

    playSound('win');
    if (statusEl) statusEl.innerText = `${count} imagem(ns) salva(s)!`;
    const fileInp = document.getElementById('img-upload-input');
    if (fileInp) fileInp.value = '';
    renderCustomImagesBankGallery();
    renderStudioTargetsMediaChips();
}

function renderCustomImagesBankGallery() {
    const grid = document.getElementById('custom-images-gallery-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const list = Object.values(customImagesCache);
    if (list.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:24px; color:var(--text-light); font-size:0.88rem; font-weight:700;">Nenhuma figura cadastrada.</div>`;
        return;
    }

    list.forEach(item => {
        const card = document.createElement('div');
        card.style.cssText = 'border:1.5px solid var(--border); border-radius:12px; padding:8px; background:#fff; display:flex; flex-direction:column; align-items:center; gap:6px; position:relative;';
        card.innerHTML = `
            <img src="${item.dataUrl}" alt="${item.name}" style="width:68px; height:68px; object-fit:contain; border-radius:8px;">
            <strong style="font-size:0.74rem; color:var(--text); max-width:90px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${item.name}</strong>
            <span style="font-size:0.65rem; color:var(--text-light); font-weight:700;">${item.width}x${item.height}</span>
        `;
        const del = document.createElement('button');
        del.type = 'button';
        del.className = 'btn-icon-del';
        del.style.cssText = 'position:absolute; top:4px; right:4px; width:24px; height:24px; border-radius:6px;';
        del.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
        del.onclick = async () => {
            playSound('click');
            await deleteCustomImageFromIndexedDB(item.id);
            renderCustomImagesBankGallery();
            renderStudioTargetsMediaChips();
        };
        card.appendChild(del);
        grid.appendChild(card);
    });
}

function openStimulusMediaAssignPicker(wordStr) {
    activeMediaTargetWord = getNormalizedWordKey(wordStr);
    const titleEl = document.getElementById('media-picker-word-title');
    if (titleEl) titleEl.innerText = `Associar Figura: "${activeMediaTargetWord}"`;

    const curMedia = state.customWordMedia && state.customWordMedia[activeMediaTargetWord];
    const emojiInp = document.getElementById('media-picker-emoji-input');
    if (emojiInp) emojiInp.value = (curMedia && curMedia.type === 'EMOJI') ? curMedia.val : '';

    const searchInp = document.getElementById('media-picker-search-input');
    if (searchInp) searchInp.value = '';
    renderMediaPickerUnifiedGallery('');

    const modal = document.getElementById('modal-media-picker');
    if (modal) modal.style.display = 'flex';
}

function renderMediaPickerUnifiedGallery(queryStr = '') {
    const gal = document.getElementById('media-picker-idb-grid');
    if (!gal) return;
    gal.innerHTML = '';

    const cleanQuery = toCleanSlug(queryStr);
    const curMedia = state.customWordMedia && state.customWordMedia[activeMediaTargetWord];

    const idbList = Object.values(customImagesCache).filter(item =>
        !cleanQuery || toCleanSlug(item.name).includes(cleanQuery)
    );

    idbList.forEach(imgItem => {
        const isSel = curMedia && curMedia.type === 'IDB' && curMedia.val === imgItem.id;
        const box = document.createElement('div');
        box.style.cssText = `border:2px solid ${isSel ? 'var(--primary)' : 'var(--border)'}; background:${isSel ? 'var(--primary-light)' : '#fff'}; border-radius:12px; padding:8px; display:flex; flex-direction:column; align-items:center; gap:4px; cursor:pointer;`;
        box.innerHTML = `
            <img src="${imgItem.dataUrl}" style="width:58px; height:58px; object-fit:contain; border-radius:8px;">
            <span style="font-size:0.7rem; font-weight:800; color:var(--text); max-width:80px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${imgItem.name}</span>
        `;
        box.onclick = () => {
            playSound('win');
            state.customWordMedia[activeMediaTargetWord] = { type: 'IDB', val: imgItem.id };
            saveState();
            closeMediaAssignPicker();
            renderStimuliEditorUI();
            renderStudioTargetsMediaChips();
        };
        gal.appendChild(box);
    });

    const repoFiltered = repoWordsCatalog.filter(slug =>
        !cleanQuery || slug.includes(cleanQuery)
    );

    repoFiltered.forEach(slug => {
        const isSel = (curMedia && curMedia.type === 'REPO' && curMedia.val === slug) || (!curMedia && toCleanSlug(activeMediaTargetWord) === slug);
        const src = getRepoWordWebpPath(slug);
        const box = document.createElement('div');
        box.style.cssText = `border:2px solid ${isSel ? 'var(--primary)' : 'var(--border)'}; background:${isSel ? 'var(--primary-light)' : '#fff'}; border-radius:12px; padding:8px; display:flex; flex-direction:column; align-items:center; gap:4px; cursor:pointer;`;
        box.innerHTML = `
            <img src="${src}" style="width:58px; height:58px; object-fit:contain; border-radius:8px;" onerror="this.parentElement.style.display='none';">
            <span style="font-size:0.7rem; font-weight:800; color:var(--text); max-width:80px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; text-transform:uppercase;">${slug}</span>
        `;
        box.onclick = () => {
            playSound('win');
            state.customWordMedia[activeMediaTargetWord] = { type: 'REPO', val: slug };
            saveState();
            closeMediaAssignPicker();
            renderStimuliEditorUI();
            renderStudioTargetsMediaChips();
        };
        gal.appendChild(box);
    });

    if (idbList.length === 0 && repoFiltered.length === 0) {
        gal.innerHTML = `<p style="grid-column:1/-1; color:var(--text-light); font-size:0.85rem; font-weight:700; text-align:center; padding:16px;">Nenhuma figura encontrada para "${queryStr}".</p>`;
    }
}

function saveEmojiForActiveWord() {
    if (!activeMediaTargetWord) return;
    const emojiInp = document.getElementById('media-picker-emoji-input');
    const val = emojiInp ? emojiInp.value.trim() : '';
    if (val) {
        state.customWordMedia[activeMediaTargetWord] = { type: 'EMOJI', val };
    } else {
        delete state.customWordMedia[activeMediaTargetWord];
    }
    saveState();
    playSound('win');
    closeMediaAssignPicker();
    renderStimuliEditorUI();
    renderStudioTargetsMediaChips();
}

function clearCustomMediaForActiveWord() {
    if (!activeMediaTargetWord) return;
    delete state.customWordMedia[activeMediaTargetWord];
    saveState();
    playSound('click');
    closeMediaAssignPicker();
    renderStimuliEditorUI();
    renderStudioTargetsMediaChips();
}

function closeMediaAssignPicker() {
    const modal = document.getElementById('modal-media-picker');
    if (modal) modal.style.display = 'none';
    activeMediaTargetWord = null;
}

function addStimulusItemToEditor() {
    if (!editorSession.hasEditableStimuli) return;
    const meta = (typeof DEFAULT_MODULE_VARIATIONS !== 'undefined' && DEFAULT_MODULE_VARIATIONS[editorSession.modId])
        ? DEFAULT_MODULE_VARIATIONS[editorSession.modId]
        : { min: 3, max: 20 };
    const inp = document.getElementById('stim-new-input');
    const raw = inp.value.trim();
    if (!raw) return;

    const currentList = editorSession.tempMap[editorSession.activeVarKey];
    if (currentList.length >= meta.max) {
        customAlert("Limite Atingido", `Cada variação deste módulo comporta no máximo ${meta.max} itens.`);
        return;
    }

    const needsUpper = !['E5_3'].includes(editorSession.modId);
    const formatted = needsUpper ? raw.toUpperCase() : raw;
    extractExplicitSyllables(formatted);

    currentList.push(formatted);
    inp.value = '';
    playSound('click');
    renderStimuliEditorUI();
}

function saveStimuliEditorChanges() {
    const modId = editorSession.modId;
    if (!modId) {
        closeModals();
        return;
    }

    if (editorSession.hasEditableStimuli) {
        const meta = (typeof DEFAULT_MODULE_VARIATIONS !== 'undefined' && DEFAULT_MODULE_VARIATIONS[modId])
            ? DEFAULT_MODULE_VARIATIONS[modId]
            : { min: 3, max: 20 };
        for (const k of Object.keys(editorSession.tempMap)) {
            const cleaned = editorSession.tempMap[k].map(s => s.trim()).filter(s => s.length > 0);
            if (cleaned.length < meta.min) {
                customAlert("Quantidade Insuficiente", `A Variação ${k} precisa ter pelo menos ${meta.min} estímulo(s) válido(s).`);
                return;
            }
            cleaned.forEach(item => extractExplicitSyllables(item));
            editorSession.tempMap[k] = cleaned;
        }
        state.customCurriculum[modId] = JSON.parse(JSON.stringify(editorSession.tempMap));
    }

    const cap = getTaskCapabilities(modId);
    const chkCV = document.getElementById('task-cfg-color-cv');
    const chkBox = document.getElementById('task-cfg-syl-box');
    const tokInp = document.getElementById('task-cfg-tokens');
    const tokVal = tokInp ? parseInt(tokInp.value) : -1;
    const optsSel = document.getElementById('task-cfg-opts');
    const optsVal = (cap.canChangeOpts && optsSel) ? (parseInt(optsSel.value) || 0) : 0;
    const probeSel = document.getElementById('task-cfg-probe-mode');
    const forceProbeMode = (cap.canUseProbeMode && probeSel) ? probeSel.value : 'AUTO';

    let c1 = document.getElementById('task-cfg-c1') ? document.getElementById('task-cfg-c1').checked : true;
    let c2 = document.getElementById('task-cfg-c2') ? document.getElementById('task-cfg-c2').checked : true;
    let c3 = document.getElementById('task-cfg-c3') ? document.getElementById('task-cfg-c3').checked : true;
    let c4 = document.getElementById('task-cfg-c4') ? document.getElementById('task-cfg-c4').checked : true;
    if (!c1 && !c2 && !c3 && !c4) c1 = true;

    state.taskSettings[modId] = {
        font: cap.canChangeFont ? (document.getElementById('task-cfg-font').value || 'GLOBAL') : 'GLOBAL',
        colorCV: (cap.canColorCV && chkCV) ? chkCV.checked : false,
        sylBox: (cap.canSylBox && chkBox) ? chkBox.checked : false,
        opts: optsVal,
        forceProbeMode,
        stages: { c1, c2, c3, c4 },
        dmtsDelay: cap.canUseDMTS ? (parseInt(document.getElementById('task-cfg-dmts').value) || 0) : 0,
        responseTimeout: parseInt(document.getElementById('task-cfg-timeout').value) || 0,
        rewardTokens: isNaN(tokVal) ? -1 : tokVal
    };

    if (forceProbeMode === 'PROBE') {
        getModuleProgress(modId).mode = 'PROBE';
    } else if (forceProbeMode === 'TRAIN') {
        getModuleProgress(modId).mode = 'TRAIN';
    }

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
    prog.mode = 'TRAIN';
    saveState();
    playSound('click');
    closeModals();
    renderGrid();
}

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
            stimText = `Fonema ${t.title || t.letter}`;
            ansText = `Emitir ou identificar o som de ${t.letter}`;
        } else if (t.target && t.match) {
            stimText = `Alvo: ${t.target}`;
            ansText = `Correto: ${t.match}`;
        } else if (t.target && t.distractor) {
            stimText = `Alvo (${t.contrast || ''}): ${t.target}`;
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
        } else if (Array.isArray(t.words)) {
            stimText = t.words.join(' | ');
            ansText = t.words.join(' ');
        } else {
            stimText = JSON.stringify(t);
            ansText = stimText;
        }
    } else {
        stimText = String(t);
        const syls = extractExplicitSyllables(stimText);
        if (session.eidosMod && session.eidosMod.subType === 'SYL_COUNT') {
            const cnt = getExplicitSyllableCount(stimText);
            ansText = `${getNormalizedWordKey(stimText)} (${cnt} sílabas)`;
        } else if (session.isPreReq) {
            ansText = `${stimText} → ${getCategory(stimText)}`;
        } else {
            ansText = syls.length > 1 ? `${getNormalizedWordKey(stimText)} (${syls.join('-')})` : stimText;
        }
    }

    document.getElementById('peek-stimulus-text').innerText = stimText;
    document.getElementById('peek-answer-text').innerText = ansText;
    document.getElementById('modal-quick-peek').style.display = 'flex';
}

/* VERIFICAÇÃO DE ATUALIZAÇÕES PWA SEM PERDA DE DADOS (PRESERVA LOCALSTORAGE E INDEXEDDB) */
async function checkAppUpdatesWithoutDataLoss() {
    playSound('click');
    saveState();

    try {
        if ('serviceWorker' in navigator) {
            const regs = await navigator.serviceWorker.getRegistrations();
            await Promise.all(regs.map(r => r.update().catch(() => {})));
        }
        if ('caches' in window) {
            const keys = await caches.keys();
            await Promise.all(keys.map(k => caches.delete(k)));
        }
    } catch (e) {}

    customAlert(
        "Atualização Aplicada",
        "O cache de arquivos foi renovado mantendo todos os perfis, configurações e histórico intactos. O aplicativo será recarregado agora.",
        () => {
            window.location.reload();
        }
    );
}

function hardResetAppCache() {
    closeModals();
    customAlert(
        "Limpar Todo o Cache e Dados?",
        "Isso apagará todo o histórico local, configurações e recarregará o aplicativo limpo.",
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
   ALFAMTS - MOTOR PRINCIPAL (app.js - PARTE 2 DE 3: SEÇÕES 10 A 13)
   GEARS DO SILABÁRIO • SYLBOX HORIZONTAL • DRAG SEM A->C • FUSÃO • EX_TYPO_GEN
   ============================================================================ */

/* ============================================================================
   10. GERADORES DE SÍLABAS POR GEAR, POOLS E GAVETAS DO PALAVRÁRIO
   ============================================================================ */
function generateSyllables(cons) {
    const k = String(cons || '').toUpperCase().trim();
    const gearId = getActiveSyllabaryGearId();

    if (gearId === 'GEAR_2') {
        // Fechadas em R e L (CV, CVV, CVC) + pivôs R e L
        if (k === 'R') return ['BAR', 'POR', 'GAR', 'CAR', 'MAR', 'TOR'];
        if (k === 'L') return ['SOL', 'BAL', 'POL', 'GOL', 'FAL', 'SAL'];
        const rList = vowels.map(v => k + v + 'R');
        const lList = vowels.map(v => k + v + 'L');
        return [...new Set([...rList, ...lList])];
    }

    if (gearId === 'GEAR_3') {
        // Fechadas em M/N e S + pivôs M, N e S
        if (k === 'M') return ['MAN', 'MON', 'MUN', 'BAM', 'TAM', 'CAM'];
        if (k === 'N') return ['DEN', 'PON', 'CIN', 'PEN', 'BAN', 'VEN'];
        if (k === 'S') return ['PAS', 'VES', 'COS', 'FES', 'DIS', 'LAS'];
        const nList = vowels.map(v => k + v + 'N');
        const sList = vowels.map(v => k + v + 'S');
        return [...new Set([...nList, ...sList])];
    }

    if (gearId === 'GEAR_4') {
        // Encontros Inseparáveis (R e L) + pivôs R e L
        if (k === 'R') return ['TRA', 'PRA', 'BRA', 'FRA', 'CRA', 'GRA', 'DRA'];
        if (k === 'L') return ['PLA', 'BLA', 'FLA', 'CLA', 'GLA', 'PLO', 'BLO'];
        let ccvPool = [];
        if (['T', 'D', 'V'].includes(k)) {
            ccvPool = vowels.map(v => k + 'R' + v);
        } else if (['P', 'B', 'F', 'C', 'G'].includes(k)) {
            ccvPool = vowels.map(v => k + 'R' + v).concat(vowels.map(v => k + 'L' + v));
        } else {
            ccvPool = vowels.map(v => k + 'R' + v);
        }
        return [...new Set(ccvPool)];
    }

    // GEAR_1 (Base: CV puro)
    let pool = vowels.map(v => k + v);
    if (k === 'Q') pool = ['QUA', 'QUE', 'QUI', 'QUO'];
    else if (k === 'C') pool = ['CA', 'CO', 'CU'];
    else if (k === 'G') pool = ['GA', 'GO', 'GU'];
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

function getModuleVariationItems(modId, specificVarKey = null) {
    const activeV = specificVarKey || getActiveVariationForModule(modId);
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

function getPhasePool(phaseId, specificVarKey = null) {
    const customMod = (state.customModules || []).find(m => m.id === phaseId);
    if (customMod) {
        const map = getModuleVariationsMap(phaseId);
        const vk = specificVarKey || 1;
        return (map && map[vk]) ? [...map[vk]] : [...(customMod.targets || [])];
    }
    const palDrawer = getEffectivePalavrarioDrawers().find(d => d.id === phaseId);
    if (palDrawer) {
        return getModuleVariationItems(phaseId, specificVarKey);
    }
    const pMod = getEffectivePhonologicalModules().find(m => m.id === phaseId);
    if (pMod) {
        if (pMod.isCheckpoint) {
            return getEffectivePhonologicalModules()
                .filter(m => !m.isCheckpoint && m.setNum === pMod.setNum)
                .map(m => m.title);
        }
        return [pMod.letter];
    }
    const eMod = getEffectiveEidosModules().find(m => m.id === phaseId);
    if (eMod) {
        const activeV = specificVarKey || getActiveVariationForModule(phaseId);
        if ((typeof DEFAULT_MODULE_VARIATIONS !== 'undefined' && DEFAULT_MODULE_VARIATIONS[phaseId]) || phaseId === 'EX_TYPO_GEN') {
            return getModuleVariationItems(phaseId, activeV);
        }
        if (eMod.subType === 'SYM_DISC') return ['A', 'B', 'E', 'M', 'P', 'S'];
        if (eMod.subType === 'MIRROR_GRAPH') return ['b', 'd', 'p', 'q', 'E', 'S'];
        if (eMod.subType === 'VOWELS_PURE') return ['A', 'E', 'I', 'O', 'U'];
        if (eMod.subType === 'VOCAL_ENCOUNTERS') return ['AI', 'EI', 'OI', 'UI', 'AU', 'EU', 'OU', 'ÃO'];
        if (eMod.subType === 'CLASS_VC') return ['F','V','M','N','S','L','P','B','T','D', ...vowels];
        if (eMod.subType === 'RHYME') {
            const rList = RHYME_VARIATIONS[activeV] || RHYME_VARIATIONS[1];
            return rList.map(r => r.target);
        }
        if (eMod.subType === 'ALLITERATION') {
            const aList = ALLIT_VARIATIONS[activeV] || ALLIT_VARIATIONS[1];
            return aList.map(a => a.target);
        }
        if (eMod.subType === 'CLASS_SP') return ['FA','MA','LA','SA','BO','TA', 'BOLA','MALA','FACA','SAPO','BOLO','GATO'];
        if (eMod.subType === 'CLASS_TOTAL_MM') return ['A','E','I','O','U','F','M','L','P','B','FA','MA','LA','BO','BOLA','GATO','MALA','FACA'];
        if (eMod.subType === 'MIN_PAIRS') {
            return MINIMAL_PAIRS_DB.filter(p => !p.var || p.var === activeV).map(p => p.target);
        }
        if (eMod.subType === 'WORDS_EQ') {
            return Object.values(WORD_BANK).filter(w => w.struct === eMod.filterStruct).map(w => w.word);
        }
        if (eMod.subType === 'SYNTACTIC_WH') return ['O menino comeu o bolo na cozinha.', 'A menina chutou a bola no parque.', 'O gato bebeu o leite na sala.'];
        if (eMod.subType === 'NARRATIVE_COHERENCE') {
            return activeV === 2
                ? NARRATIVES_DB.flatMap(n => n.steps)
                : NARRATIVES_DB.map(n => n.intruderSentence.join(' '));
        }
        if (eMod.subType === 'INTRUDER_WORD') return NARRATIVES_DB.map(n => n.intruderSentence.join(' '));
        if (eMod.subType === 'CHRONO_SEQ') return NARRATIVES_DB.flatMap(n => n.steps);
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
   11. INICIALIZADOR UNIFICADO: PRÉ-TESTE EM CADEIA (VAR 1 -> VAR N),
       FONOLÓGICO (5 CICLOS), SILABÁRIO POR GEAR, PALAVRÁRIO E TRILHA N1-N5
   ============================================================================ */
function ensureSessionTimerStarted() {
    if (state.settings.timer.enabled) {
        if (state.session.expired) {
            triggerTimeUp();
            return false;
        }
        const cfgMin = state.settings.timer.min || 30;
        if (!state.session.endTime || state.session.configuredMin !== cfgMin) {
            state.session.endTime = Date.now() + (cfgMin * 60000);
            state.session.configuredMin = cfgMin;
            saveState();
        }
        if (!timerInterval) timerInterval = setInterval(checkTimer, 1000);
        checkTimer();
    } else {
        const clock = document.getElementById('header-timer-icon');
        if (clock) clock.style.display = 'none';
    }
    return true;
}

function resetSessionStats(activeCycles, trialCount) {
    return {
        c0: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(0) ? trialCount : 0 },
        c1: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(1) ? trialCount : 0 },
        c2: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(2) ? trialCount : 0 },
        c3: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(3) ? trialCount : 0 },
        c4: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(4) ? trialCount : 0 },
        c5: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(5) ? trialCount : 0 },
        c6: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(6) ? trialCount : 0 }
    };
}

function filterCyclesByTaskConfig(modId, candidateCycles, isSyllabary = false) {
    const stg = getEffectiveStagesForModule(modId, isSyllabary);
    const filtered = candidateCycles.filter(c => {
        if (c === 0 || c === 1) return stg.c1 !== false;
        if (c === 2) return stg.c2 !== false;
        if (c === 3) return stg.c3 !== false;
        if (c >= 4) return stg.c4 !== false;
        return true;
    });
    return filtered.length > 0 ? filtered : [candidateCycles[0] || 1];
}

/* ESCOPO CLÍNICO DO PRÉ-TESTE EM CADEIA POR VARIAÇÃO (VAR 1 -> VAR N) */
function isModuleEligibleForDefaultPreTestChain(modId) {
    const idStr = String(modId || '');
    const tCfg = getTaskConfig(idStr);
    if (tCfg && tCfg.forceProbeMode === 'TRAIN') return false;
    if (tCfg && tCfg.forceProbeMode === 'PROBE') return true;

    if (/^E1_/.test(idStr) || /^E5_/.test(idStr) || ['E3_2', 'E3_3', 'E3_6', 'VOGAIS', 'ENCONTROS', 'EX_TYPO_GEN'].includes(idStr)) {
        return false;
    }
    const isSylCons = ALL_SYLLABARY_KEYS.includes(idStr) && !['VOGAIS', 'ENCONTROS'].includes(idStr);
    const isPal = idStr.startsWith('PAL_');
    const isN4 = /^E4_/.test(idStr);
    return isSylCons || isPal || isN4;
}

function shouldAutoStartPreTestChain(modId) {
    const prog = getModuleProgress(modId);
    if (prog.status === 'mastered' || prog.streak > 0) return false;
    return isModuleEligibleForDefaultPreTestChain(modId);
}

/* SONDA RÁPIDA / PRÉ-TESTE EM CADEIA (VAR 1 -> VAR 2 -> ... -> VAR N) */
function startFastTrackEntryProbe(modId, specificVarKey = null) {
    closeModals();
    const isEidos = getEffectiveEidosModules().some(m => m.id === modId);
    const tCfg = getTaskConfig(modId);
    const prevForce = tCfg.forceProbeMode;
    tCfg.forceProbeMode = 'PROBE';

    if (specificVarKey !== null) {
        getModuleProgress(modId).activeVar = specificVarKey;
    }

    if (String(modId).startsWith('FA_')) {
        startPhonologicalModelingModule(modId, true);
    } else if (String(modId).startsWith('PAL_')) {
        startPalavrarioDrawer(modId, true);
    } else if (isEidos) {
        startEidosModule(modId, true);
    } else {
        startStructuredSyllabary(modId, true);
    }

    session.isFastTrackEntryProbe = true;
    session.isPreTestChain = true;
    session.preTestErrorsCount = 0;
    tCfg.forceProbeMode = prevForce;
}

function startCustomStudioModule(modId) {
    const customMod = (state.customModules || []).find(m => m.id === modId);
    if (!customMod) return;
    if (!ensureSessionTimerStarted()) return;

    const inProbe = isModuleInProbeMode(modId);
    const pool = getPhasePool(modId);
    const targets = shuffleArray(pool).slice(0, 6);
    const cyclesCfg = Array.isArray(customMod.cyclesConfig) && customMod.cyclesConfig.length > 0
        ? customMod.cyclesConfig
        : [{ mechanic: 'MTS', sdMode: 'SIMPLE', sdChannel1: 'TEXT', compChannel: 'TEXT', dmtsDelay: 0, timeoutSec: 0 }];

    const baseCycles = cyclesCfg.map((_, idx) => idx + 1);
    const activeCycles = filterCyclesByTaskConfig(modId, baseCycles, false);

    undoSnapshot = null;
    session = {
        phase: customMod.id,
        eidosMod: customMod,
        activeVar: 1,
        activeGear: null,
        isProbeMode: inProbe,
        isFastTrackEntryProbe: false,
        isPreTestChain: false,
        preTestErrorsCount: 0,
        probeGateFailed: false,
        isStructuredSyllabary: false,
        isPalavrarioDrawer: false,
        isPhonemeCheckpoint: false,
        sylData: null,
        phonData: null,
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
        itemsLog: [],
        stats: resetSessionStats(activeCycles, targets.length)
    };
    openGame();
    renderTrial();
}

/* MOTOR DE GAVETAS DO PALAVRÁRIO (CAP. 4 & 5: PRÉ-TESTE EM CADEIA + TREINO + SONDAGEM) */
function startPalavrarioDrawer(drawerId, forcePreTest = false) {
    const drawer = getEffectivePalavrarioDrawers().find(d => d.id === drawerId);
    if (!drawer) return;
    if (!ensureSessionTimerStarted()) return;

    const autoPreTest = forcePreTest || shouldAutoStartPreTestChain(drawerId);
    const activeVar = getActiveVariationForModule(drawerId);
    const inProbe = autoPreTest || isModuleInProbeMode(drawerId);
    const wordsPool = shuffleArray(getModuleVariationItems(drawerId, activeVar)).slice(0, 6);

    const group3x3 = [wordsPool.slice(0, 3), wordsPool.slice(3, 6)].filter(g => g.length > 0);
    const activeCycles = autoPreTest
        ? [5]
        : (inProbe ? [3, 4, 5, 6] : filterCyclesByTaskConfig(drawerId, [1, 2, 3], false));
    const firstCycle = activeCycles[0];
    const initialTrials = autoPreTest
        ? group3x3
        : ((!inProbe && firstCycle === 2) ? [...wordsPool] : group3x3);

    const modDescriptor = {
        id: drawer.id,
        code: drawer.code,
        level: 'PALAVRARIO',
        title: drawer.title,
        desc: drawer.desc,
        engine: 'PALAVRARIO_ENGINE',
        subType: inProbe ? 'EQUIV_4STEPS_MM' : 'PALAVRARIO_TRAIN',
        isAudioModel: false
    };

    undoSnapshot = null;
    session = {
        phase: drawer.id,
        eidosMod: modDescriptor,
        activeVar,
        activeGear: null,
        isProbeMode: inProbe,
        isFastTrackEntryProbe: autoPreTest,
        isPreTestChain: autoPreTest,
        preTestErrorsCount: 0,
        probeGateFailed: false,
        isStructuredSyllabary: false,
        isPalavrarioDrawer: true,
        isPhonemeCheckpoint: false,
        sylData: {
            words: wordsPool,
            groups: group3x3
        },
        phonData: null,
        pool: wordsPool,
        trials: initialTrials,
        activeCycles,
        currentCycleIdx: 0,
        currentCycle: firstCycle,
        isOnlyCycle3: false,
        isPreReq: false,
        currentTrialIdx: 0,
        attemptsOnCurrent: 0,
        currentRenderedOptions: null,
        isRepeating: false,
        latencies: [],
        itemsLog: [],
        stats: inProbe
            ? resetSessionStats(activeCycles, initialTrials.length)
            : {
                c0: { indep: 0, dica: 0, erro: 0, total: 0 },
                c1: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(1) ? group3x3.length : 0 },
                c2: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(2) ? wordsPool.length : 0 },
                c3: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(3) ? group3x3.length : 0 },
                c4: { indep: 0, dica: 0, erro: 0, total: 0 },
                c5: { indep: 0, dica: 0, erro: 0, total: 0 },
                c6: { indep: 0, dica: 0, erro: 0, total: 0 }
            }
    };
    openGame();
    renderTrial();
}

/* MOTOR ESTRUTURADO DO SILABÁRIO CUMULATIVO POR GEAR (GEARS 1 A 4) */
function startStructuredSyllabary(phaseId, forcePreTest = false) {
    if (phaseId === 'PALAVRAS') {
        document.getElementById('custom-words-input').value = state.customWords || '';
        checkWordsInput();
        document.getElementById('modal-words').style.display = 'flex';
        return;
    }
    if (!ensureSessionTimerStarted()) return;

    const isBaseVocal = (phaseId === 'VOGAIS' || phaseId === 'ENCONTROS');
    const isPseudo = (phaseId === 'PSEUDOPALAVRAS');
    const autoPreTest = forcePreTest || (!isBaseVocal && !isPseudo && shouldAutoStartPreTestChain(phaseId));
    const inProbe = autoPreTest || isModuleInProbeMode(phaseId);
    const activeGearId = getActiveSyllabaryGearId();
    const activeGearObj = getActiveSyllabaryGearObj();

    if (isBaseVocal || isPseudo) {
        const pool = getPhasePool(phaseId);
        const targets = shuffleArray(pool).slice(0, isPseudo ? 10 : 5);
        const baseCycles = isPseudo ? [3] : (inProbe ? [3, 2] : [1, 2, 3]);
        const activeCycles = isPseudo ? [3] : filterCyclesByTaskConfig(phaseId, baseCycles, true);

        undoSnapshot = null;
        session = {
            phase: phaseId,
            eidosMod: null,
            activeVar: 1,
            activeGear: isBaseVocal ? activeGearId : null,
            isProbeMode: inProbe,
            isFastTrackEntryProbe: false,
            isPreTestChain: false,
            preTestErrorsCount: 0,
            probeGateFailed: false,
            isStructuredSyllabary: false,
            isPalavrarioDrawer: false,
            isPhonemeCheckpoint: false,
            sylData: null,
            phonData: null,
            pool,
            trials: targets,
            activeCycles,
            currentCycleIdx: 0,
            currentCycle: activeCycles[0],
            isOnlyCycle3: isPseudo,
            isPreReq: false,
            currentTrialIdx: 0,
            attemptsOnCurrent: 0,
            currentRenderedOptions: null,
            isRepeating: false,
            latencies: [],
            itemsLog: [],
            stats: resetSessionStats(activeCycles, targets.length)
        };
        openGame();
        renderTrial();
        return;
    }

    const activeVar = getActiveVariationForModule(phaseId);
    const familySyllables = shuffleArray(generateSyllables(phaseId)).slice(0, 6);
    const cumulativeWords = shuffleArray(getCumulativeWordsForSyllableFamily(phaseId, activeVar)).slice(0, 6);
    const candidateCycles = inProbe ? [4] : [1, 2, 3, 4];
    const activeCycles = inProbe ? [4] : filterCyclesByTaskConfig(phaseId, candidateCycles, true);

    const firstCycle = activeCycles[0];
    const initialTrials = (firstCycle === 1)
        ? [...familySyllables]
        : (firstCycle === 3 ? [cumulativeWords.slice(0, 3), cumulativeWords.slice(3, 6)].filter(g => g.length > 0) : [...cumulativeWords]);

    undoSnapshot = null;
    session = {
        phase: phaseId,
        eidosMod: null,
        activeVar,
        activeGear: activeGearId,
        isProbeMode: inProbe,
        isFastTrackEntryProbe: autoPreTest,
        isPreTestChain: autoPreTest,
        preTestErrorsCount: 0,
        probeGateFailed: false,
        isStructuredSyllabary: true,
        isPalavrarioDrawer: false,
        isPhonemeCheckpoint: false,
        sylData: {
            consonant: phaseId,
            gearId: activeGearId,
            gearShort: activeGearObj.shortLabel || 'Gear 1',
            syllables: familySyllables,
            words: cumulativeWords
        },
        phonData: null,
        pool: [...familySyllables, ...cumulativeWords],
        trials: initialTrials,
        activeCycles,
        currentCycleIdx: 0,
        currentCycle: firstCycle,
        isOnlyCycle3: false,
        isPreReq: false,
        currentTrialIdx: 0,
        attemptsOnCurrent: 0,
        currentRenderedOptions: null,
        isRepeating: false,
        latencies: [],
        itemsLog: [],
        stats: {
            c0: { indep: 0, dica: 0, erro: 0, total: 0 },
            c1: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(1) ? familySyllables.length : 0 },
            c2: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(2) ? cumulativeWords.length : 0 },
            c3: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(3) ? Math.max(1, [cumulativeWords.slice(0, 3), cumulativeWords.slice(3, 6)].filter(g => g.length > 0).length) : 0 },
            c4: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(4) ? cumulativeWords.length : 0 },
            c5: { indep: 0, dica: 0, erro: 0, total: 0 },
            c6: { indep: 0, dica: 0, erro: 0, total: 0 }
        }
    };
    openGame();
    renderTrial();
}

const startLegacyGame = startStructuredSyllabary;

/* MOTOR DO ALFABETO FONOLÓGICO: CICLO 0 ISOLADO + 5 CICLOS + CHECK-POINT */
function startPhonologicalModelingModule(modId, forceColdProbe = false) {
    if (!ensureSessionTimerStarted()) return;

    const chkSet = getPhonemeSetsCatalog().find(s => s.id === modId);
    if (chkSet) {
        startPhonemeSetCheckpoint(chkSet);
        return;
    }

    const allPhon = getEffectivePhonologicalModules().filter(m => !m.isCheckpoint);
    const pm = allPhon.find(m => m.id === modId);
    if (!pm) return;

    const isConsonant = !vowels.includes(pm.letter.toUpperCase());
    const pmIdx = allPhon.findIndex(m => m.id === modId);
    const priorPhonemes = allPhon.slice(0, Math.max(0, pmIdx));
    const overlearningSample = shuffleArray(priorPhonemes.length > 0 ? priorPhonemes : []).slice(0, 3);
    const distractorsPool = shuffleArray(
        allPhon.filter(m => m.letter !== pm.letter)
    ).slice(0, 6);

    const vowelsSet = getPhonemeSetsCatalog()[0];
    const vowelsMastered = vowelsSet.members.every(vId => {
        const p = getModuleProgress(vId);
        return p.streak > 0 || p.status === 'mastered';
    });

    const stg = getEffectiveStagesForModule(modId, false);
    const activeCycles = [];
    if (stg.c1 !== false) {
        activeCycles.push(0);
        activeCycles.push(1);
    }
    if (stg.c2 !== false) activeCycles.push(2);
    if (stg.c3 !== false) activeCycles.push(3);
    if (stg.c4 !== false) {
        if (overlearningSample.length > 0) activeCycles.push(4);
        if (isConsonant && (vowelsMastered || pmIdx >= 5)) activeCycles.push(5);
    }
    if (activeCycles.length === 0) activeCycles.push(1);

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

    const firstCycle = activeCycles[0];
    const initialTrials = getPhonemeCycleTrials(pm, firstCycle, overlearningSample);

    undoSnapshot = null;
    session = {
        phase: pm.id,
        eidosMod: modDescriptor,
        activeVar: 1,
        activeGear: null,
        isProbeMode: forceColdProbe,
        isFastTrackEntryProbe: forceColdProbe,
        isPreTestChain: false,
        preTestErrorsCount: 0,
        probeGateFailed: false,
        isStructuredSyllabary: false,
        isPalavrarioDrawer: false,
        isPhonemeCheckpoint: false,
        sylData: null,
        phonData: {
            targetPhoneme: pm,
            overlearningList: overlearningSample,
            distractors: distractorsPool,
            failedInCheckpoint: []
        },
        pool: allPhon.map(m => m.letter),
        trials: initialTrials,
        activeCycles,
        currentCycleIdx: 0,
        currentCycle: firstCycle,
        isOnlyCycle3: false,
        isPreReq: false,
        currentTrialIdx: 0,
        attemptsOnCurrent: 0,
        currentRenderedOptions: null,
        isRepeating: false,
        latencies: [],
        itemsLog: [],
        stats: {
            c0: { indep: 0, dica: 0, erro: 0, total: 0 },
            c1: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(1) ? 1 : 0 },
            c2: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(2) ? 2 : 0 },
            c3: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(3) ? 1 : 0 },
            c4: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(4) ? overlearningSample.length : 0 },
            c5: { indep: 0, dica: 0, erro: 0, total: activeCycles.includes(5) ? 5 : 0 },
            c6: { indep: 0, dica: 0, erro: 0, total: 0 }
        }
    };
    openGame();
    renderTrial();
}

function getPhonemeCycleTrials(pm, cycleNum, overlearningSample) {
    if (cycleNum === 0 || cycleNum === 1 || cycleNum === 3) {
        return [{ letter: pm.letter, varIdx: pm.varIdx, title: pm.title, id: pm.id }];
    }
    if (cycleNum === 2) {
        return [
            { letter: pm.letter, varIdx: pm.varIdx, title: pm.title, discMode: 'MOUTH' },
            { letter: pm.letter, varIdx: pm.varIdx, title: pm.title, discMode: 'LETTER' }
        ];
    }
    if (cycleNum === 4) {
        return overlearningSample.map(item => ({
            letter: item.letter,
            varIdx: item.varIdx,
            title: item.title,
            id: item.id
        }));
    }
    if (cycleNum === 5) {
        const cons = pm.letter.toUpperCase();
        return vowels.map(v => `${cons}${v}`);
    }
    return [{ letter: pm.letter, varIdx: pm.varIdx, title: pm.title, id: pm.id }];
}

function startPhonemeSetCheckpoint(chkSetOrId) {
    const chkSet = (typeof chkSetOrId === 'string')
        ? getPhonemeSetsCatalog().find(s => s.id === chkSetOrId)
        : chkSetOrId;
    if (!chkSet) return;

    const allPhon = getEffectivePhonologicalModules().filter(m => !m.isCheckpoint);
    const currentSetItems = chkSet.members
        .map(id => allPhon.find(m => m.id === id))
        .filter(Boolean);

    const priorSetsMembers = getPhonemeSetsCatalog()
        .filter(s => s.setNum < chkSet.setNum)
        .flatMap(s => s.members)
        .map(id => allPhon.find(m => m.id === id))
        .filter(Boolean);

    const maintenanceCount = Math.max(0, Math.ceil(priorSetsMembers.length * 0.2));
    const maintenanceSample = shuffleArray(priorSetsMembers).slice(0, maintenanceCount);
    const fullProbeBattery = shuffleArray([...currentSetItems, ...maintenanceSample]);

    const modDescriptor = {
        id: chkSet.id,
        code: `CONJ ${chkSet.setNum}`,
        level: 'FONOLOGICO',
        title: chkSet.title,
        desc: 'Sondagem mista de retenção dos fonemas do conjunto.',
        engine: 'PHON_MODEL',
        subType: 'PHON_CHECKPOINT',
        setNum: chkSet.setNum,
        isAudioModel: false
    };

    undoSnapshot = null;
    session = {
        phase: chkSet.id,
        eidosMod: modDescriptor,
        activeVar: 1,
        activeGear: null,
        isProbeMode: true,
        isFastTrackEntryProbe: false,
        isPreTestChain: false,
        preTestErrorsCount: 0,
        probeGateFailed: false,
        isStructuredSyllabary: false,
        isPalavrarioDrawer: false,
        isPhonemeCheckpoint: true,
        sylData: null,
        phonData: {
            setObj: chkSet,
            failedPhonemes: [],
            isRetrainingErrors: false
        },
        pool: fullProbeBattery.map(m => m.letter),
        trials: fullProbeBattery,
        activeCycles: [1],
        currentCycleIdx: 0,
        currentCycle: 1,
        isOnlyCycle3: false,
        isPreReq: false,
        currentTrialIdx: 0,
        attemptsOnCurrent: 0,
        currentRenderedOptions: null,
        isRepeating: false,
        latencies: [],
        itemsLog: [],
        stats: resetSessionStats([1], fullProbeBattery.length)
    };
    openGame();
    renderTrial();
}

function startEidosModule(modId, forcePreTest = false) {
    const mod = getEffectiveEidosModules().find(m => m.id === modId);
    if (!mod) return;
    if (mod.engine === 'REWARD_PORTAL') {
        executeRewardPortalAction(modId);
        return;
    }
    if (!ensureSessionTimerStarted()) return;

    const autoPreTest = forcePreTest || shouldAutoStartPreTestChain(modId);
    const activeVar = getActiveVariationForModule(modId);
    const inProbe = autoPreTest || isModuleInProbeMode(modId);
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
        case 'MIRROR_GRAPH':
            trials = ['b', 'd', 'p', 'q', 'E', 'S'];
            break;
        case 'VOWELS_PURE':
        case 'VOCAL_ENCOUNTERS':
        case 'SYL_RECOG_CV':
        case 'CV_FUSION':
        case 'CG_ALL_SOUNDS':
        case 'QU_GU_SOUNDS': {
            trials = shuffleArray(pool).slice(0, 6);
            const baseOrder = autoPreTest ? [3] : (inProbe ? [3, 2] : [1, 2, 3]);
            activeCycles = autoPreTest ? [3] : filterCyclesByTaskConfig(modId, baseOrder, false);
            break;
        }
        case 'WORD_IDENT_MM': {
            const wList = shuffleArray(getModuleVariationItems(modId));
            trials = [
                wList.slice(0, 3),
                shuffleArray(wList).slice(0, 3),
                shuffleArray(wList).slice(0, 3)
            ];
            activeCycles = filterCyclesByTaskConfig(modId, [1, 2], false);
            break;
        }
        case 'SYL_BUILD_SLIDER':
            trials = shuffleArray(getModuleVariationItems(modId)).slice(0, 5);
            activeCycles = autoPreTest ? [3] : (inProbe ? [3, 2] : filterCyclesByTaskConfig(modId, [1, 2, 3], false));
            break;
        case 'CLASS_VC':
        case 'CLASS_SP':
            isPreReq = true;
            trials = shuffleArray(pool).slice(0, 8);
            activeCycles = filterCyclesByTaskConfig(modId, [1, 2], false);
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
            activeCycles = inProbe ? [2] : filterCyclesByTaskConfig(modId, [1, 2], false);
            break;
        case 'FADEOUT_COLOR_MM':
        case 'CASE_GEN_MM': {
            const mmWords = shuffleArray(getModuleVariationItems(modId));
            trials = [
                mmWords.slice(0, 3),
                shuffleArray(mmWords).slice(0, 3),
                shuffleArray(mmWords).slice(0, 3)
            ];
            activeCycles = [1];
            break;
        }
        case 'TYPO_GEN_MM': {
            const tgWords = shuffleArray(getModuleVariationItems(modId));
            const safePool = tgWords.length >= 3 ? tgWords : ['BOLA', 'GATO', 'MALA', 'SAPO', 'FACA', 'BOLO'];
            trials = [
                { words: safePool.slice(0, 3), pairMode: 'UPPER_CURSIVE' },
                { words: shuffleArray(safePool).slice(0, 3), pairMode: 'LOWER_CURSIVE' },
                { words: shuffleArray(safePool).slice(0, 3), pairMode: 'CURSIVE_UPPER' }
            ];
            activeCycles = [1];
            break;
        }
        case 'EQUIV_4STEPS_MM': {
            const eqList = shuffleArray(getModuleVariationItems(modId));
            trials = [
                eqList.slice(0, 3),
                shuffleArray(eqList).slice(0, 3)
            ];
            activeCycles = inProbe ? [3, 4, 5, 6] : filterCyclesByTaskConfig(modId, [1, 2], false);
            break;
        }
        case 'FIG_WORD_MM': {
            const fwList = shuffleArray(getModuleVariationItems(modId));
            trials = [
                fwList.slice(0, 3),
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
            const allHaveIcons = trials.every(w => hasValidVisualRepresentation(w));
            if (autoPreTest) {
                activeCycles = [3];
            } else if (inProbe) {
                activeCycles = allHaveIcons ? [4, 5, 3, 2] : [3, 2];
            } else {
                const baseEq = allHaveIcons ? [1, 2, 3, 4, 5] : [1, 2, 3];
                activeCycles = filterCyclesByTaskConfig(modId, baseEq, false);
            }
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
        case 'NARRATIVE_COHERENCE':
            if (activeVar === 2) {
                trials = NARRATIVES_DB.map(n => ({ steps: n.steps }));
            } else {
                trials = NARRATIVES_DB.map(n => ({
                    words: n.intruderSentence,
                    intruder: n.intruderWord,
                    fix: n.correctReplacement,
                    distractors: n.distractorReplacements || ['PEDRA', 'JANELA']
                }));
            }
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
        activeGear: null,
        isProbeMode: inProbe,
        isFastTrackEntryProbe: autoPreTest,
        isPreTestChain: autoPreTest,
        preTestErrorsCount: 0,
        probeGateFailed: false,
        isStructuredSyllabary: false,
        isPalavrarioDrawer: false,
        isPhonemeCheckpoint: false,
        sylData: null,
        phonData: null,
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
        itemsLog: [],
        stats: resetSessionStats(activeCycles, trials.length)
    };
    openGame();
    renderTrial();
}

function getActiveFontKeyForModule(modId = null) {
    const id = modId || (session ? session.phase : '');
    if (!id) return 'GLOBAL';
    const tCfg = getTaskConfig(id);
    if (!tCfg || !tCfg.font || tCfg.font === 'GLOBAL') return 'GLOBAL';
    return tCfg.font;
}

function getTopographicClasses(modId = null) {
    const fontKey = getActiveFontKeyForModule(modId);
    if (fontKey === 'MIX') {
        const mixPool = CUSTOM_FONTS_CATALOG.filter(f => f.id !== 'MIX').map(f => f.cssClass);
        return mixPool[Math.floor(Math.random() * mixPool.length)] || '';
    }
    const found = CUSTOM_FONTS_CATALOG.find(f => f.id === fontKey);
    return found ? (found.cssClass || '') : '';
}

/* ============================================================================
   12. MOTOR DE RENDERIZAÇÃO, DRAG (SEM A->C), HOLD OPCIONAL NO CRMTS E DMTS
   ============================================================================ */
function ensureLatencyCountdownPill() {
    let pill = document.getElementById('latency-countdown-pill');
    if (!pill) {
        const fluPill = document.getElementById('fluency-timer-pill');
        if (fluPill && fluPill.parentNode) {
            pill = document.createElement('div');
            pill.id = 'latency-countdown-pill';
            pill.className = 'trial-progress-pill';
            pill.style.cssText = 'display:none; border-color:var(--danger); color:var(--danger); background:var(--danger-light); font-weight:900;';
            fluPill.parentNode.insertBefore(pill, fluPill);
        }
    }
    return pill;
}

function startResponseTimeoutIfConfigured(overrideTimeoutSec = null) {
    if (responseTimeoutTimer) { clearTimeout(responseTimeoutTimer); responseTimeoutTimer = null; }
    if (responseCountdownInterval) { clearInterval(responseCountdownInterval); responseCountdownInterval = null; }
    const pill = ensureLatencyCountdownPill();
    if (pill) pill.style.display = 'none';

    const tCfg = getTaskConfig(session.phase);
    const timeoutVal = (overrideTimeoutSec !== null && overrideTimeoutSec !== undefined)
        ? parseInt(overrideTimeoutSec)
        : (tCfg && tCfg.responseTimeout ? parseInt(tCfg.responseTimeout) : 0);

    if (!timeoutVal || timeoutVal <= 0) return;

    let remainingSec = timeoutVal;
    const clockSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;

    if (pill) {
        pill.style.display = 'inline-flex';
        pill.innerHTML = `${clockSvg} <span>${remainingSec}s</span>`;
    }

    responseCountdownInterval = setInterval(() => {
        remainingSec--;
        if (pill && remainingSec >= 0) {
            pill.innerHTML = `${clockSvg} <span>${remainingSec}s</span>`;
        }
        if (remainingSec <= 0) {
            clearInterval(responseCountdownInterval);
            responseCountdownInterval = null;
        }
    }, 1000);

    responseTimeoutTimer = setTimeout(() => {
        if (responseCountdownInterval) { clearInterval(responseCountdownInterval); responseCountdownInterval = null; }
        if (pill) pill.style.display = 'none';
        if (blockClicks) return;
        blockClicks = true;
        playSound('click');
        const cat = getCurrentStatCat();
        if (!session.isRepeating && session.stats[cat]) session.stats[cat].erro++;
        if (typeof logCurrentTrialOutcome === 'function') logCurrentTrialOutcome('N');
        if (session.isProbeMode && session.eidosMod && session.eidosMod.subType === 'EQUIV_4STEPS_MM' && session.currentCycle === 3) {
            session.probeGateFailed = true;
        }
        advanceTrial();
    }, timeoutVal * 1000);
}

function applyDMTSWrapperIfEnabled(modelArea, compArea, isVisualModel, overrideDmtsSec = null, overrideTimeoutSec = null) {
    const cap = getTaskCapabilities(session.phase);
    const tCfg = getTaskConfig(session.phase);
    const delaySec = (overrideDmtsSec !== null && overrideDmtsSec !== undefined)
        ? parseInt(overrideDmtsSec)
        : (cap.canUseDMTS && tCfg && tCfg.dmtsDelay ? parseInt(tCfg.dmtsDelay) : 0);

    if (!isVisualModel || !delaySec || delaySec <= 0) {
        setTimeout(() => {
            blockClicks = false;
            startResponseTimeoutIfConfigured(overrideTimeoutSec);
        }, state.settings.latency);
        return;
    }

    compArea.style.display = 'none';
    blockClicks = false;

    const modelCardEl = modelArea.querySelector('.model-card');
    if (modelCardEl) {
        modelCardEl.style.cursor = 'pointer';
        modelCardEl.onclick = () => {
            modelCardEl.onclick = null;
            playSound('click');
            modelArea.innerHTML = `
                <div class="model-card" style="border-style:dotted; color:var(--text-light); font-size:1.35rem; gap:8px;">
                    ${UI_SVGS.hourglass}
                    <span>${delaySec}s</span>
                </div>
            `;
            dmtsDelayTimer = setTimeout(() => {
                modelArea.innerHTML = '';
                compArea.style.display = 'flex';
                if (window.AlfaAnimations && typeof window.AlfaAnimations.animateTrialEnter === 'function') {
                    window.AlfaAnimations.animateTrialEnter(null, compArea);
                }
                trialStartTime = Date.now();
                startResponseTimeoutIfConfigured(overrideTimeoutSec);
            }, delaySec * 1000);
        };
    } else {
        compArea.style.display = 'flex';
        startResponseTimeoutIfConfigured(overrideTimeoutSec);
    }
}

/* DETECÇÃO PRECISA POR MAIOR ÁREA DE INTERSEÇÃO */
function getIntersectionArea(r1, r2) {
    const xOverlap = Math.max(0, Math.min(r1.right, r2.right) - Math.max(r1.left, r2.left));
    const yOverlap = Math.max(0, Math.min(r1.bottom, r2.bottom) - Math.max(r1.top, r2.top));
    return xOverlap * yOverlap;
}

function findBestDropZone(cardRect, zones) {
    let bestZone = null;
    let bestArea = 0;

    for (const z of (zones || [])) {
        if (!z || !z.el) continue;
        const zRect = z.el.getBoundingClientRect();
        const area = getIntersectionArea(cardRect, zRect);
        if (area > bestArea) {
            bestArea = area;
            bestZone = z;
        }
    }
    return bestArea > 0 ? bestZone : null;
}

function attachDragToTargetBehavior(cardEl, getDropZonesFn, onDropOnZoneFn, allowTapFallback = false, onTapFallbackFn = null) {
    let dragging = false;
    let movedEnough = false;
    let startX = 0, startY = 0;

    cardEl.style.touchAction = 'none';
    cardEl.classList.add('draggable-card');

    cardEl.addEventListener('pointerdown', (e) => {
        if (blockClicks || cardEl.classList.contains('paired') || cardEl.classList.contains('docked-hidden') || cardEl.classList.contains('used')) return;
        dragging = true;
        movedEnough = false;
        startX = e.clientX;
        startY = e.clientY;
        cardEl.style.transition = 'none';
        cardEl.style.zIndex = '1000';
        cardEl.classList.add('dragging-active');
        if (cardEl.setPointerCapture) { try { cardEl.setPointerCapture(e.pointerId); } catch (err) {} }
    });

    cardEl.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (Math.hypot(dx, dy) > 8) movedEnough = true;
        cardEl.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(1.04)`;
    });

    const endDrag = (e) => {
        if (!dragging) return;
        dragging = false;
        cardEl.classList.remove('dragging-active');

        if (!movedEnough && allowTapFallback && typeof onTapFallbackFn === 'function') {
            cardEl.style.transform = 'translate3d(0, 0, 0)';
            cardEl.style.zIndex = '';
            onTapFallbackFn(e);
            return;
        }

        const cardRect = cardEl.getBoundingClientRect();
        const zones = getDropZonesFn() || [];
        const matchedZone = findBestDropZone(cardRect, zones);

        if (matchedZone) {
            const accepted = onDropOnZoneFn(matchedZone, cardEl);
            if (!accepted) {
                cardEl.style.transition = 'transform 0.24s cubic-bezier(0.22, 1, 0.36, 1)';
                cardEl.style.transform = 'translate3d(0, 0, 0)';
                setTimeout(() => { cardEl.style.zIndex = ''; }, 240);
            } else {
                cardEl.style.transition = 'transform 0.18s ease';
                cardEl.style.transform = 'translate3d(0, 0, 0)';
                cardEl.style.zIndex = '';
            }
        } else {
            cardEl.style.transition = 'transform 0.24s cubic-bezier(0.22, 1, 0.36, 1)';
            cardEl.style.transform = 'translate3d(0, 0, 0)';
            setTimeout(() => { cardEl.style.zIndex = ''; }, 240);
        }
    };

    cardEl.addEventListener('pointerup', endDrag);
    cardEl.addEventListener('pointercancel', endDrag);
}

/* LIGAÇÃO UNIFICADA PARA CARTÕES DO MTS SIMPLES (SEM DRAG EM CICLOS AUDITIVOS A -> C) */
function bindMTSCardInteraction(btn, isCorrect, onBeforeAnswer = null) {
    const useDrag = !!(state.settings && state.settings.dragToModelMTS);
    const visualModelCard = document.querySelector('#model-area .model-card');

    if (useDrag && visualModelCard) {
        attachDragToTargetBehavior(
            btn,
            () => {
                const mEl = document.querySelector('#model-area .model-card');
                return mEl ? [{ el: mEl }] : [];
            },
            () => {
                if (typeof onBeforeAnswer === 'function') onBeforeAnswer();
                handleAnswer(isCorrect, btn);
                return isCorrect;
            }
        );
    } else {
        attachHoldToSelectBehavior(btn, () => {
            if (typeof onBeforeAnswer === 'function') onBeforeAnswer();
            handleAnswer(isCorrect, btn);
        });
    }
}

/* LIGAÇÃO UNIFICADA PARA PEÇAS MÓVEIS DO CRMTS (HOLD DESATIVADO POR PADRÃO, COM FALLBACK) */
function attachCRMTSUnitInteraction(tileBtn, getSlotsTargetElFn, onSelectFn) {
    const useDrag = !!(state.settings && state.settings.dragToModelCRMTS);
    if (useDrag) {
        attachDragToTargetBehavior(
            tileBtn,
            () => {
                const el = typeof getSlotsTargetElFn === 'function' ? getSlotsTargetElFn() : null;
                return el ? [{ el }] : [];
            },
            () => {
                onSelectFn();
                return true;
            },
            true,
            () => onSelectFn()
        );
    } else {
        attachHoldToSelectBehavior(tileBtn, onSelectFn, !isHoldEnabledForCRMTS());
    }
}

/* MOTOR UNIFICADO DO MULTI-MTS ESTRITAMENTE HORIZONTAL */
function renderHorizontalMultiMTSBoard(compArea, pairs, options = {}) {
    const {
        topoClass = '',
        onModelTap = null,
        isMatchFn = (mData, cData) => mData.id === cData.id,
        onPairSuccess = null,
        onPairError = null,
        onAllPaired = null
    } = options;

    const useDrag = !!(state.settings && state.settings.dragToModelMultiMTS);

    const board = document.createElement('div');
    board.className = 'multimodel-board horizontal-mm';
    board.style.cssText = 'display:flex; flex-direction:column; gap:20px; width:100%; max-width:880px; align-items:center;';

    const rowModels = document.createElement('div');
    rowModels.className = 'mm-row mm-row-models';
    rowModels.style.cssText = 'display:flex; flex-direction:row; justify-content:center; align-items:stretch; gap:16px; width:100%; flex-wrap:nowrap;';

    const rowComps = document.createElement('div');
    rowComps.className = 'mm-row mm-row-comps';
    rowComps.style.cssText = 'display:flex; flex-direction:row; justify-content:center; align-items:stretch; gap:16px; width:100%; flex-wrap:nowrap;';

    let selectedModel = null;
    let completedCount = 0;
    const modelZoneObjs = [];
    const dockedPairs = new Map();

    const shuffledModels = shuffleArray(pairs);
    const shuffledComps = shuffleArray(pairs);

    const undockModelZone = (zoneObj) => {
        const existing = dockedPairs.get(zoneObj);
        if (!existing) return;
        dockedPairs.delete(zoneObj);
        existing.compCardEl.classList.remove('docked-hidden');
        existing.compCardEl.style.visibility = 'visible';
        existing.compCardEl.style.opacity = '1';
        existing.compCardEl.style.pointerEvents = 'auto';

        zoneObj.el.classList.remove('mm-has-docked');
        const dockSlot = zoneObj.el.querySelector('.mm-docked-pair-slot');
        if (dockSlot) dockSlot.remove();
        playSound('click');
    };

    const dockCompIntoModel = (zoneObj, compData, cardC) => {
        if (dockedPairs.has(zoneObj)) {
            undockModelZone(zoneObj);
        }
        dockedPairs.set(zoneObj, { compData, compCardEl: cardC });
        cardC.classList.add('docked-hidden');
        cardC.style.visibility = 'hidden';
        cardC.style.pointerEvents = 'none';

        zoneObj.el.classList.add('mm-has-docked');
        const dockSlot = document.createElement('div');
        dockSlot.className = 'mm-docked-pair-slot';
        dockSlot.innerHTML = `
            <div class="mm-docked-content ${compData.rightExtraClass || topoClass}">${compData.rightHTML}</div>
            <button type="button" class="mm-undock-btn" title="Devolver carta">${UI_SVGS.undoMini}</button>
        `;
        dockSlot.querySelector('.mm-undock-btn').onclick = (e) => {
            e.stopPropagation();
            if (blockClicks) return;
            undockModelZone(zoneObj);
        };
        zoneObj.el.appendChild(dockSlot);
        if (window.AlfaAnimations && typeof window.AlfaAnimations.animateSlotFill === 'function') {
            window.AlfaAnimations.animateSlotFill(dockSlot);
        }
        playSound('click');
        return true;
    };

    shuffledModels.forEach(p => {
        const cardM = document.createElement('div');
        cardM.className = `mm-card mm-square-card ${p.leftExtraClass || topoClass}`;
        cardM.style.cssText = 'flex:1; min-width:130px; min-height:126px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; position:relative;';
        cardM.innerHTML = `<div style="display:flex; align-items:center; justify-content:center; width:100%;">${p.leftHTML}</div>`;

        const zoneObj = { data: p, el: cardM };
        modelZoneObjs.push(zoneObj);

        cardM.onclick = () => {
            if (blockClicks || cardM.classList.contains('paired')) return;
            if (!useDrag) {
                playSound('click');
                rowModels.querySelectorAll('.mm-card').forEach(c => c.classList.remove('selected'));
                cardM.classList.add('selected');
                selectedModel = zoneObj;
            }
            if (typeof onModelTap === 'function') onModelTap(p, cardM);
        };
        rowModels.appendChild(cardM);
    });

    const processTouchMatchAttempt = (mObj, compData, cardC) => {
        if (isMatchFn(mObj.data, compData)) {
            playSound(session.isProbeMode ? 'click' : 'win');
            mObj.el.classList.remove('selected');
            mObj.el.classList.add('paired');
            cardC.classList.add('paired');
            const chk = cardC.querySelector('.chk-icon');
            if (chk) chk.style.color = 'var(--success)';
            if (typeof onPairSuccess === 'function') onPairSuccess(mObj.data, mObj.el, cardC);
            selectedModel = null;
            completedCount++;
            if (completedCount === pairs.length) {
                if (typeof onAllPaired === 'function') onAllPaired(board);
                else handleAnswer(true, board);
            }
            return true;
        } else {
            session.attemptsOnCurrent++;
            playSound('click');
            if (!session.isProbeMode) {
                cardC.classList.add('feedback-error');
                if (window.AlfaAnimations && typeof window.AlfaAnimations.shakeElement === 'function') {
                    window.AlfaAnimations.shakeElement(cardC);
                }
                setTimeout(() => cardC.classList.remove('feedback-error'), 380);
            }
            if (typeof onPairError === 'function') {
                onPairError(cardC, board);
            } else if (session.isProbeMode || session.attemptsOnCurrent >= 3) {
                handleAnswer(false, board);
            }
            return false;
        }
    };

    shuffledComps.forEach(p => {
        const cardC = document.createElement('div');
        cardC.className = `mm-card mm-square-card ${p.rightExtraClass || topoClass}`;
        cardC.style.cssText = 'flex:1; min-width:130px; min-height:126px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; position:relative;';
        cardC.innerHTML = `<div style="display:flex; align-items:center; justify-content:center; width:100%;">${p.rightHTML}</div><span class="chk-icon" style="position:absolute; top:8px; right:8px; color:var(--border);">${UI_SVGS.checkCircle}</span>`;

        if (useDrag) {
            attachDragToTargetBehavior(
                cardC,
                () => modelZoneObjs,
                (matchedZone) => dockCompIntoModel(matchedZone, p, cardC)
            );
        } else {
            attachHoldToSelectBehavior(cardC, () => {
                if (blockClicks || cardC.classList.contains('paired') || !selectedModel) return;
                processTouchMatchAttempt(selectedModel, p, cardC);
            });
        }
        rowComps.appendChild(cardC);
    });

    board.appendChild(rowModels);
    board.appendChild(rowComps);
    compArea.appendChild(board);
    return board;
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

    const triggerStageEnterAnim = () => {
        if (window.AlfaAnimations && typeof window.AlfaAnimations.animateTrialEnter === 'function') {
            window.AlfaAnimations.animateTrialEnter(modelArea, compArea);
        }
    };

    if (session.eidosMod && session.eidosMod.subType === 'CUSTOM_STUDIO') {
        renderCustomStudioTrial(target, modelArea, compArea, badge, abaDock);
        triggerStageEnterAnim();
        return;
    }

    if (session.isStructuredSyllabary && session.sylData) {
        renderStructuredSyllabaryTrial(target, modelArea, compArea, badge, abaDock);
        triggerStageEnterAnim();
        return;
    }

    const stdSubTypes = ['VOWELS_PURE', 'VOCAL_ENCOUNTERS', 'SYL_RECOG_CV', 'CV_FUSION', 'WORDS_EQ', 'CG_ALL_SOUNDS', 'QU_GU_SOUNDS', 'CLASS_VC', 'CLASS_SP', 'RECOMB_STT'];
    if (session.eidosMod && !stdSubTypes.includes(session.eidosMod.subType)) {
        renderSpecializedEidosTrial(session.eidosMod.subType, target, modelArea, compArea, badge, abaDock, fluencyPill);
        triggerStageEnterAnim();
        return;
    }

    const cleanTarget = getNormalizedWordKey(target);
    const isHighlighted = !session.isProbeMode && state.reviewHighlights && state.reviewHighlights[cleanTarget];
    const highlightStyle = isHighlighted ? 'border-color: var(--warning); background-color: var(--warning-light);' : '';
    const topoClass = getTopographicClasses();
    const probePrefix = session.isPreTestChain ? `PRÉ-TESTE VAR ${session.activeVar} • ` : (session.isProbeMode ? 'SONDA • ' : '');
    const forceCue = (session.eidosMod && session.eidosMod.subType === 'SYL_RECOG_CV' && !session.isProbeMode);

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
        badge.innerText = `${probePrefix}${session.isPreReq ? "Ciclo 1: Classifique" : "Ciclo 1: Identidade Visual"}`;
        modelArea.innerHTML = `<div class="model-card ${topoClass}" style="${highlightStyle}">${formatStimulusTextHTML(target, session.phase, forceCue, false)}</div>`;
        optionsToRender.forEach(opt => {
            const cleanOpt = getNormalizedWordKey(opt);
            const btn = document.createElement('div');
            btn.className = `comp-card ${getTopographicClasses()}`;
            if (!session.isProbeMode && state.reviewHighlights && state.reviewHighlights[cleanOpt]) {
                btn.style.borderColor = 'var(--warning)';
                btn.style.backgroundColor = 'var(--warning-light)';
            }
            btn.innerHTML = formatStimulusTextHTML(opt, session.phase, forceCue, false);
            const isCorrect = session.isPreReq ? (getCategory(cleanTarget) === cleanOpt) : (cleanOpt === cleanTarget);
            btn.dataset.correct = isCorrect;
            bindMTSCardInteraction(btn, isCorrect);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
    } else if (session.currentCycle === 2) {
        badge.innerText = `${probePrefix}Auditivo → Escrita (A → C)`;
        const spokenModel = getPhoneticAudioModel(cleanTarget);
        modelArea.innerHTML = `<button type="button" class="model-audio-btn" onclick="speakTTS('${spokenModel}')">${UI_SVGS.volume}</button>`;
        speakTTS(spokenModel);
        optionsToRender.forEach(opt => {
            const cleanOpt = getNormalizedWordKey(opt);
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            if (!session.isProbeMode && state.reviewHighlights && state.reviewHighlights[cleanOpt]) {
                btn.style.borderColor = 'var(--warning)';
                btn.style.backgroundColor = 'var(--warning-light)';
            }
            btn.innerHTML = formatStimulusTextHTML(opt, session.phase, forceCue, false);
            const isCorrect = session.isPreReq ? (getCategory(cleanTarget) === cleanOpt) : (cleanOpt === cleanTarget);
            btn.dataset.correct = isCorrect;
            bindMTSCardInteraction(btn, isCorrect);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, false);
    } else if (session.currentCycle === 3) {
        badge.innerText = `${probePrefix}${(session.eidosMod && session.eidosMod.subType === 'RECOMB_STT') ? '3.6 Leitura Recombinativa' : 'Leitura Oral (C → D)'}`;
        modelArea.innerHTML = `<div class="model-card ${topoClass}" style="${highlightStyle}">${formatStimulusTextHTML(target, session.phase, false, session.isProbeMode)}</div>`;
        abaDock.style.display = 'flex';

        if (state.settings.useMic) {
            compArea.innerHTML = `
                <div class="stt-area">
                    <input type="text" id="ghost-stt" class="ghost-input" tabindex="-1">
                    <p id="mic-feedback" style="display:none;"></p>
                    <div class="stt-controls">
                        <button type="button" class="stt-btn" id="mic-btn" onmousedown="startMicrophone()" onmouseup="stopMicrophone()" onmouseleave="stopMicrophone()" ontouchstart="event.preventDefault(); startMicrophone()" ontouchend="event.preventDefault(); stopMicrophone()">
                            ${UI_SVGS.mic}
                        </button>
                    </div>
                </div>`;
        }
        setTimeout(() => {
            blockClicks = false;
            startResponseTimeoutIfConfigured();
        }, state.settings.latency);
    } else if (session.currentCycle === 4) {
        badge.innerText = `${probePrefix}Figura → Palavra (B → C)`;
        modelArea.innerHTML = `<div class="model-card" style="padding:16px;">${getWordVisualRepresentationHTML(cleanTarget, 4.6)}</div>`;
        optionsToRender.forEach(opt => {
            const cleanOpt = getNormalizedWordKey(opt);
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            btn.innerHTML = formatStimulusTextHTML(opt);
            const isCorrect = (cleanOpt === cleanTarget);
            btn.dataset.correct = isCorrect;
            bindMTSCardInteraction(btn, isCorrect);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
    } else if (session.currentCycle === 5) {
        badge.innerText = `${probePrefix}Palavra → Figura (C → B)`;
        modelArea.innerHTML = `<div class="model-card ${topoClass}">${formatStimulusTextHTML(target)}</div>`;
        optionsToRender.forEach(opt => {
            const cleanOpt = getNormalizedWordKey(opt);
            const btn = document.createElement('div');
            btn.className = 'comp-card img-only';
            btn.innerHTML = getWordVisualRepresentationHTML(cleanOpt, 3.8);
            const isCorrect = (cleanOpt === cleanTarget);
            btn.dataset.correct = isCorrect;
            bindMTSCardInteraction(btn, isCorrect);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
    }

    triggerStageEnterAnim();
}

/* RENDERIZADOR DOS 4 PASSOS DO SILABÁRIO CUMULATIVO POR GEAR */
function renderStructuredSyllabaryTrial(target, modelArea, compArea, badge, abaDock) {
    const topoClass = getTopographicClasses();
    const cons = session.sylData.consonant;
    const gearTag = session.sylData.gearShort ? `${session.sylData.gearShort} • ` : '';
    const cyc = session.currentCycle;

    if (cyc === 1) {
        badge.innerText = `${gearTag}Família ${cons} • Passo 1: Sílabas`;
        const sylStr = String(target || '').trim().toUpperCase();
        modelArea.style.minHeight = '145px';
        modelArea.innerHTML = `
            <div class="model-card ${topoClass}" style="display:flex; flex-direction:row; align-items:center; gap:18px;">
                <button type="button" class="model-audio-btn" style="width:74px; height:74px;" onclick="event.stopPropagation(); speakTTS('${sylStr}')">${UI_SVGS.volumeSm}</button>
                <span>${formatStimulusTextHTML(sylStr, session.phase, true, false)}</span>
            </div>
        `;
        speakTTS(sylStr);

        const opts = shuffleArray([sylStr, ...shuffleArray(session.sylData.syllables.filter(s => s !== sylStr)).slice(0, getEffectiveOptsForCurrentSession() - 1)]);
        opts.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            btn.innerHTML = formatStimulusTextHTML(opt, session.phase, true, false);
            const isCorrect = (opt === sylStr);
            btn.dataset.correct = isCorrect;
            bindMTSCardInteraction(btn, isCorrect);
            compArea.appendChild(btn);
        });
        abaDock.style.display = 'flex';
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
        return;
    }

    if (cyc === 2) {
        badge.innerText = `${gearTag}Família ${cons} • Passo 2: Palavras`;
        const wordStr = getNormalizedWordKey(target);
        modelArea.style.minHeight = '145px';
        modelArea.innerHTML = `
            <div class="model-card ${topoClass}">
                ${formatStimulusTextHTML(target, session.phase, true, false)}
            </div>
        `;

        const distWords = shuffleArray(session.sylData.words.filter(w => getNormalizedWordKey(w) !== wordStr)).slice(0, getEffectiveOptsForCurrentSession() - 1);
        const opts = shuffleArray([target, ...distWords]);
        opts.forEach(opt => {
            const cleanOpt = getNormalizedWordKey(opt);
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            btn.style.fontSize = '2.1rem';
            btn.innerHTML = formatStimulusTextHTML(opt, session.phase, true, false);
            const isCorrect = (cleanOpt === wordStr);
            btn.dataset.correct = isCorrect;
            bindMTSCardInteraction(btn, isCorrect, () => {
                if (isCorrect) speakTTS(wordStr);
            });
            compArea.appendChild(btn);
        });
        abaDock.style.display = 'flex';
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
        return;
    }

    if (cyc === 3) {
        badge.innerText = `${gearTag}Família ${cons} • Passo 3: Texto Preto`;
        const groupWords = Array.isArray(target) ? target : session.sylData.words.slice(0, 3);
        modelArea.style.minHeight = '0px';

        const pairs = groupWords.map(w => {
            const cleanW = getNormalizedWordKey(w);
            return {
                id: cleanW,
                leftHTML: formatStimulusTextHTML(w, session.phase, true, false),
                rightHTML: `<span style="color:#0F172A;">${formatStimulusTextHTML(cleanW, session.phase, false, true)}</span>`,
                speak: cleanW
            };
        });

        renderHorizontalMultiMTSBoard(compArea, pairs, {
            topoClass,
            onPairSuccess: (mData) => speakTTS(mData.speak)
        });
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    badge.innerText = session.isPreTestChain
        ? `PRÉ-TESTE • ${gearTag}Família ${cons}`
        : `${gearTag}Família ${cons} • Passo 4: Sondagem`;
    const wordStr = getNormalizedWordKey(target);
    modelArea.style.minHeight = '145px';
    modelArea.innerHTML = `
        <div class="model-card ${topoClass}" style="border-style:solid;">
            ${formatStimulusTextHTML(wordStr, session.phase, false, true)}
        </div>
    `;

    const distWords = shuffleArray(session.sylData.words.filter(w => getNormalizedWordKey(w) !== wordStr)).slice(0, getEffectiveOptsForCurrentSession() - 1);
    const opts = shuffleArray([wordStr, ...distWords.map(d => getNormalizedWordKey(d))]);
    opts.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'comp-card img-only';
        btn.innerHTML = getWordVisualRepresentationHTML(opt, 3.6);
        const isCorrect = (opt === wordStr);
        btn.dataset.correct = isCorrect;
        bindMTSCardInteraction(btn, isCorrect);
        compArea.appendChild(btn);
    });
    abaDock.style.display = 'flex';
    setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
}

/* RENDERIZADOR UNIVERSAL DE TAREFAS DA OFICINA (ARENA LIMPA + DRAG CRMTS) */
function renderStudioChannelStimulusHTML(itemStr, channelType, topoClass, sizeRem = 3.2) {
    const raw = String(itemStr || '').trim().toUpperCase();
    const clean = getNormalizedWordKey(raw);
    if (channelType === 'IMAGE') {
        return getWordVisualRepresentationHTML(clean, sizeRem);
    }
    if (channelType === 'AUDIO') {
        return `<button type="button" class="model-audio-btn" style="width:86px; height:86px;" onclick="event.stopPropagation(); speakTTS('${clean}')">${UI_SVGS.volumeSm}</button>`;
    }
    return `<span class="${topoClass}">${formatStimulusTextHTML(raw)}</span>`;
}

function extractCRMTSUnitsFromStudioTarget(rawTarget, cycCfg) {
    const str = String(rawTarget || '').trim().toUpperCase();
    if (cycCfg.crmtsAutoLetters !== false || cycCfg.crmtsSplitMode === 'LETTERS') {
        return getNormalizedWordKey(str).split('');
    }
    if (cycCfg.crmtsSplitMode === 'WORDS') {
        return str.split(/\s+/).filter(Boolean);
    }
    return extractExplicitSyllables(str);
}

function renderCustomStudioTrial(target, modelArea, compArea, badge, abaDock) {
    const customMod = session.eidosMod;
    const cycIdx = Math.max(0, (session.currentCycle || 1) - 1);
    const cycCfg = (customMod.cyclesConfig && customMod.cyclesConfig[cycIdx])
        ? customMod.cyclesConfig[cycIdx]
        : { mechanic: 'MTS', sdMode: 'SIMPLE', sdChannel1: 'TEXT', compChannel: 'TEXT', crmtsAutoLetters: true, crmtsSplitMode: 'LETTERS', commandText: '', dmtsDelay: 0, timeoutSec: 0 };

    const topoClass = getTopographicClasses();
    const rawTarget = String(target || '').trim().toUpperCase();
    const cleanTarget = getNormalizedWordKey(rawTarget);
    badge.innerText = `${customMod.title} • Ciclo ${cycIdx + 1}`;

    const hasAudioSD = (cycCfg.sdChannel1 === 'AUDIO' || (cycCfg.sdMode === 'COMPOUND' && cycCfg.sdChannel2 === 'AUDIO'));
    if (hasAudioSD) {
        speakTTS(cleanTarget);
    }

    if (cycCfg.mechanic === 'MULTIMTS') {
        const subset = shuffleArray([rawTarget, ...session.pool.filter(x => x !== rawTarget)]).slice(0, Math.min(3, session.pool.length));
        modelArea.style.minHeight = '0px';

        const pairs = subset.map(w => ({
            id: getNormalizedWordKey(w),
            leftHTML: (cycCfg.sdMode === 'COMPOUND')
                ? `<div style="display:flex; align-items:center; gap:10px;">${renderStudioChannelStimulusHTML(w, cycCfg.sdChannel1, topoClass, 2.2)} ${renderStudioChannelStimulusHTML(w, cycCfg.sdChannel2, topoClass, 2.2)}</div>`
                : renderStudioChannelStimulusHTML(w, cycCfg.sdChannel1, topoClass, 2.6),
            rightHTML: renderStudioChannelStimulusHTML(w, cycCfg.compChannel || 'TEXT', topoClass, 2.6)
        }));

        renderHorizontalMultiMTSBoard(compArea, pairs, { topoClass });
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(cycCfg.timeoutSec); }, state.settings.latency);
        return;
    }

    modelArea.style.minHeight = '140px';
    if (cycCfg.sdMode === 'COMPOUND') {
        modelArea.innerHTML = `
            <div class="model-card ${topoClass}" style="display:flex; flex-direction:row; align-items:center; justify-content:center; gap:20px; padding:18px 28px;">
                <div>${renderStudioChannelStimulusHTML(rawTarget, cycCfg.sdChannel1, topoClass, 3.4)}</div>
                <div>${renderStudioChannelStimulusHTML(rawTarget, cycCfg.sdChannel2, topoClass, 3.4)}</div>
            </div>
        `;
    } else {
        if (cycCfg.sdChannel1 === 'AUDIO') {
            modelArea.innerHTML = `<button type="button" class="model-audio-btn" onclick="speakTTS('${cleanTarget}')">${UI_SVGS.volume}</button>`;
        } else {
            modelArea.innerHTML = `<div class="model-card ${topoClass}">${renderStudioChannelStimulusHTML(rawTarget, cycCfg.sdChannel1, topoClass, 3.8)}</div>`;
        }
    }

    if (cycCfg.mechanic === 'EXPRESSIVE') {
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(cycCfg.timeoutSec); }, state.settings.latency);
        return;
    }

    if (cycCfg.mechanic === 'CRMTS') {
        const units = extractCRMTSUnitsFromStudioTarget(rawTarget, cycCfg);
        const isLetters = (cycCfg.crmtsAutoLetters !== false || cycCfg.crmtsSplitMode === 'LETTERS');
        const fallbackDistractors = isLetters
            ? ['A','E','O','M','P','B','T','L','S']
            : ['FA','LA','MA','BO','TA','SA','PA'];
        const extraDist = shuffleArray(fallbackDistractors.filter(c => !units.includes(c))).slice(0, 3);
        const tilePool = shuffleArray([...units, ...extraDist]);

        let built = [];
        let slotErrors = 0;
        const allTileBtns = [];

        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex; flex-direction:column; align-items:center;';
        const slotsDiv = document.createElement('div');
        slotsDiv.className = 'crmts-slots';
        const poolDiv = document.createElement('div');
        poolDiv.className = 'crmts-pool';

        const refreshSlots = (animateIdx = -1) => {
            slotsDiv.innerHTML = '';
            units.forEach((_, i) => {
                const s = document.createElement('div');
                s.className = `crmts-slot ${topoClass} ${built[i] ? 'filled' : ''}`;
                s.innerHTML = built[i] ? formatStimulusTextHTML(built[i]) : '';
                slotsDiv.appendChild(s);
                if (i === animateIdx && window.AlfaAnimations && typeof window.AlfaAnimations.animateSlotFill === 'function') {
                    window.AlfaAnimations.animateSlotFill(s);
                }
            });
        };

        tilePool.forEach(ch => {
            const t = document.createElement('button');
            t.type = 'button';
            t.className = `letter-tile ${topoClass}`;
            t.innerHTML = formatStimulusTextHTML(ch);
            t.dataset.rawUnit = ch;
            attachCRMTSUnitInteraction(t, () => slotsDiv, () => {
                if (blockClicks || built.length >= units.length) return;
                const expectedUnit = units[built.length];
                if (ch === expectedUnit) {
                    playSound('click');
                    slotErrors = 0;
                    t.classList.add('used');
                    built.push(ch);
                    refreshSlots(built.length - 1);
                    if (built.length === units.length) handleAnswer(true, slotsDiv);
                } else {
                    slotErrors++;
                    session.attemptsOnCurrent++;
                    playSound('click');
                    if (session.isProbeMode) {
                        handleAnswer(false, slotsDiv);
                        return;
                    }
                    t.classList.add('feedback-error');
                    if (window.AlfaAnimations && typeof window.AlfaAnimations.shakeElement === 'function') {
                        window.AlfaAnimations.shakeElement(t);
                    }
                    setTimeout(() => t.classList.remove('feedback-error'), 350);

                    if (slotErrors >= 2) {
                        slotErrors = 0;
                        const rightBtn = allTileBtns.find(b => !b.classList.contains('used') && b.dataset.rawUnit === expectedUnit);
                        if (rightBtn) {
                            rightBtn.classList.add('errorless-prompt');
                            setTimeout(() => {
                                rightBtn.classList.remove('errorless-prompt');
                                rightBtn.classList.add('used');
                                built.push(expectedUnit);
                                refreshSlots(built.length - 1);
                                if (built.length === units.length) handleAnswer(true, slotsDiv);
                            }, 420);
                        }
                    }
                }
            });
            allTileBtns.push(t);
            poolDiv.appendChild(t);
        });

        refreshSlots();
        wrap.appendChild(slotsDiv);
        wrap.appendChild(poolDiv);
        compArea.appendChild(wrap);
        abaDock.style.display = 'flex';
        applyDMTSWrapperIfEnabled(modelArea, compArea, cycCfg.sdChannel1 !== 'AUDIO', cycCfg.dmtsDelay, cycCfg.timeoutSec);
        return;
    }

    const opts = generateComparisons(rawTarget);
    opts.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = `comp-card ${cycCfg.compChannel === 'IMAGE' ? 'img-only' : topoClass}`;
        btn.innerHTML = renderStudioChannelStimulusHTML(opt, cycCfg.compChannel || 'TEXT', topoClass, 3.6);
        const isCorrect = (getNormalizedWordKey(opt) === cleanTarget);
        btn.dataset.correct = isCorrect;
        bindMTSCardInteraction(btn, isCorrect);
        compArea.appendChild(btn);
    });
    applyDMTSWrapperIfEnabled(modelArea, compArea, cycCfg.sdChannel1 !== 'AUDIO', cycCfg.dmtsDelay, cycCfg.timeoutSec);
}

function isVowelChar(ch) {
    return /^[AEIOUÁÉÍÓÚÂÊÔÃÕÜ]$/i.test(ch);
}

/* FORMATAÇÃO VISUAL: WRAPPER HORIZONTAL ANTI-QUEBRA DE SÍLABAS + CURSIVA + b/d/p/q */
function formatStimulusTextHTML(text, modId, forceVisualCue = false, forcePlainBlack = false) {
    const rawStr = String(text || '').trim();
    if (!rawStr) return '';

    const activeModId = modId || (session ? session.phase : '');
    const fontKey = getActiveFontKeyForModule(activeModId);

    const isSingleCharLower = (rawStr.length === 1 && rawStr === rawStr.toLowerCase() && rawStr !== rawStr.toUpperCase());
    const strippedStr = isSingleCharLower
        ? rawStr
        : (rawStr.includes(' ') ? rawStr : rawStr.replace(/[;\/\-]+\s*/g, ''));

    const cleanDisplayStr = isSingleCharLower
        ? strippedStr
        : formatTextForFontCase(strippedStr, fontKey);

    if (forcePlainBlack || isSingleCharLower || (session && (session.isProbeMode || session.isPreTestChain) && !forceVisualCue)) {
        return cleanDisplayStr;
    }

    const cap = getTaskCapabilities(activeModId);
    const tCfg = getTaskConfig(activeModId);
    const useColorCV = forceVisualCue || (cap.canColorCV && tCfg && tCfg.colorCV);
    const useSylBox = forceVisualCue || (cap.canSylBox && tCfg && tCfg.sylBox);
    if (!useColorCV && !useSylBox) return cleanDisplayStr;

    const colorizeSegment = (seg) => {
        if (!useColorCV) return seg;
        return seg.split('').map(ch => {
            if (!/[A-ZÁÉÍÓÚÂÊÔÃÕÇÜ]/i.test(ch)) return ch;
            const colorHex = isVowelChar(ch) ? '#EF4444' : '#0F172A';
            return `<span style="color:${colorHex};">${ch}</span>`;
        }).join('');
    };

    const boxStyle = `display:inline-flex; align-items:center; justify-content:center; border:2.5px solid #2563EB; border-radius:10px; padding:1px 7px; background:#fff; white-space:nowrap;`;

    if (useSylBox && !rawStr.includes(' ')) {
        const explicitSyls = extractExplicitSyllables(rawStr);
        let scaleStyle = '';
        if (explicitSyls.length >= 4) scaleStyle = 'font-size:0.72em;';
        else if (explicitSyls.length === 3) scaleStyle = 'font-size:0.84em;';

        const innerBoxes = explicitSyls.map((s, idx) => {
            let displaySyl = s;
            if (fontKey === 'SCHOOL') {
                if (explicitSyls.length > 1 && idx === 0 && strippedStr.length >= 3) {
                    const low = s.toLowerCase();
                    displaySyl = low.charAt(0).toUpperCase() + low.slice(1);
                } else {
                    displaySyl = s.toLowerCase();
                }
            } else if (fontKey === 'LOWER') {
                displaySyl = s.toLowerCase();
            }
            return `<span class="syl-box-item" style="${boxStyle}">${colorizeSegment(displaySyl)}</span>`;
        }).join('');

        return `<span class="syl-boxes-row" style="display:inline-flex; flex-wrap:nowrap; align-items:center; justify-content:center; gap:6px; white-space:nowrap; ${scaleStyle}">${innerBoxes}</span>`;
    }

    return `<span style="display:inline-flex; flex-wrap:nowrap; align-items:center; justify-content:center; white-space:nowrap;">${colorizeSegment(cleanDisplayStr)}</span>`;
}

function getPhoneticAudioModel(target) {
    return getNormalizedWordKey(target);
}

/* ============================================================================
   13. RENDERIZADORES ESPECIALIZADOS (SLIDE CONTÍNUO, ENCAIXE CRMTS, EX_TYPO_GEN)
   ============================================================================ */
function showPhonemeCorrectivePopup(letter, varIdx, onDismissCallback) {
    playPhonemeAudioFile(letter, varIdx, true);
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed; inset:0; background:rgba(15,23,42,0.65); z-index:9200; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(4px);';
    overlay.innerHTML = `
        <div style="background:#fff; border-radius:24px; padding:26px 32px; max-width:420px; width:90%; text-align:center; box-shadow:0 20px 50px rgba(0,0,0,0.25); border:2px solid var(--warning);">
            <div class="mouth-articulatory-box" style="margin:8px auto 14px auto; width:190px; height:190px;">
                ${buildMouthImgTagWithFallback(letter, varIdx)}
                <div style="display:none; flex-direction:column; align-items:center; justify-content:center; color:var(--primary-dark); font-weight:900;">
                    <span style="font-size:4rem;">${letter}</span>
                </div>
            </div>
            <div style="display:flex; gap:10px; justify-content:center; margin-top:14px;">
                <button type="button" class="btn-action btn-cancel" id="btn-corr-replay" style="flex:1;">${UI_SVGS.volumeSm} Ouvir</button>
                <button type="button" class="btn-action" id="btn-corr-continue" style="flex:1; background:var(--success);">Continuar</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('#btn-corr-replay').onclick = () => playPhonemeAudioFile(letter, varIdx, true);
    overlay.querySelector('#btn-corr-continue').onclick = () => {
        overlay.remove();
        if (typeof onDismissCallback === 'function') onDismissCallback();
    };
}

function renderSpecializedEidosTrial(subType, target, modelArea, compArea, badge, abaDock, fluencyPill) {
    const topoClass = getTopographicClasses();
    const numOpts = getEffectiveOptsForCurrentSession();

    if (window.AlfaAnimations && typeof window.AlfaAnimations.stopHoldSlide === 'function') {
        window.AlfaAnimations.stopHoldSlide();
    }

    if (subType === 'PHON_CHECKPOINT') {
        const letter = target.letter || 'A';
        const varIdx = target.varIdx || '1';
        const displayLetter = formatStimulusTextHTML(letter, session.phase, false, true);
        const isRetrain = session.phonData && session.phonData.isRetrainingErrors;
        badge.innerText = isRetrain
            ? `${session.eidosMod.title} • Retreino`
            : `${session.eidosMod.title} • Sondagem (${session.currentTrialIdx + 1}/${session.trials.length})`;

        modelArea.style.minHeight = '160px';
        modelArea.innerHTML = `
            <div class="model-card ${topoClass}" style="font-size:5.2rem; min-width:210px; min-height:150px; border-style:solid;">
                ${displayLetter}
            </div>
        `;

        compArea.innerHTML = `
            <div style="display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
                <button type="button" class="btn-action" id="chk-btn-fail" style="background:var(--danger); padding:16px 28px; font-size:1.1rem;">
                    ✕ Reforçar
                </button>
                <button type="button" class="btn-action" id="chk-btn-pass" style="background:var(--success); padding:16px 28px; font-size:1.1rem;">
                    ✓ Dominou
                </button>
            </div>
        `;

        document.getElementById('chk-btn-pass').onclick = () => {
            if (blockClicks) return;
            blockClicks = true;
            playSound('win');
            if (!state.phonemeMastery) state.phonemeMastery = {};
            state.phonemeMastery[target.id] = 'RETIDO_SEM_MODELO';
            session.stats.c1.indep++;
            if (typeof logCurrentTrialOutcome === 'function') logCurrentTrialOutcome('I');
            advanceTrial();
        };

        document.getElementById('chk-btn-fail').onclick = () => {
            if (blockClicks) return;
            blockClicks = true;
            playSound('click');
            session.probeGateFailed = true;
            session.stats.c1.erro++;
            if (typeof logCurrentTrialOutcome === 'function') logCurrentTrialOutcome('N');
            if (!state.reviewHighlights) state.reviewHighlights = {};
            state.reviewHighlights[letter] = true;
            if (!state.phonemeMastery) state.phonemeMastery = {};
            state.phonemeMastery[target.id] = 'PRECISA_REFORCO';
            if (session.phonData && !session.phonData.failedPhonemes.some(f => f.id === target.id)) {
                session.phonData.failedPhonemes.push(target);
            }
            showPhonemeCorrectivePopup(letter, varIdx, () => {
                advanceTrial();
            });
        };

        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    if (subType === 'PHON_MODELING') {
        const cyc = session.currentCycle;

        if (cyc === 5) {
            renderSpecializedEidosTrial('SYL_BUILD_SLIDER', target, modelArea, compArea, badge, abaDock, fluencyPill);
            badge.innerText = `Ciclo 5: Fusão Silábica (${target})`;
            return;
        }

        const letter = target.letter || (session.eidosMod ? session.eidosMod.letter : 'A');
        const varIdx = target.varIdx || (session.eidosMod ? session.eidosMod.varIdx : '1');
        const titleLabel = target.title || letter;
        const displayLetter = formatStimulusTextHTML(letter, session.phase, false, true);

        if (cyc === 0) {
            badge.innerText = `Pré-Teste: ${titleLabel}`;
            modelArea.style.minHeight = '160px';
            modelArea.innerHTML = `<div class="model-card ${topoClass}" style="font-size:5rem; border-style:solid;">${displayLetter}</div>`;
            abaDock.style.display = 'flex';
            setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
            return;
        }

        if (cyc === 1) {
            badge.innerText = `Ciclo 1: Modelagem (${titleLabel})`;
            modelArea.style.minHeight = '210px';
            modelArea.innerHTML = `
                <div style="display:flex; align-items:center; justify-content:center; gap:22px; flex-wrap:wrap;">
                    <div class="mouth-articulatory-box" style="width:190px; height:190px;">
                        ${buildMouthImgTagWithFallback(letter, varIdx)}
                        <div style="display:none; flex-direction:column; align-items:center; justify-content:center; color:var(--primary-dark); font-weight:900;">
                            <span style="font-size:4rem;" class="${topoClass}">${displayLetter}</span>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center; gap:10px;">
                        <div class="model-card ${topoClass}" style="min-width:130px; min-height:110px; font-size:3.8rem; padding:12px 24px;">${displayLetter}</div>
                        <button type="button" class="btn-action" id="btn-listen-train-phoneme" style="padding:10px 20px; font-size:0.95rem; border-radius:14px;">
                            ${UI_SVGS.volumeSm} Ouvir
                        </button>
                    </div>
                </div>
            `;

            compArea.innerHTML = `
                <div style="width:100%; max-width:660px; display:flex; flex-direction:column; align-items:center;">
                    <div id="phon-drag-track" class="drag-track">
                        <div id="phon-drag-fill" style="position:absolute; left:0; top:0; bottom:0; width:0px; background:var(--primary-light); pointer-events:none;"></div>
                        <div style="position:absolute; right:22px; display:flex; align-items:center; gap:6px; color:var(--text-light); font-weight:900; font-size:0.95rem; pointer-events:none;">
                            ${UI_SVGS.checkCircle}
                        </div>
                        <div id="phon-drag-box" class="drag-box ${topoClass}" style="transform:translateX(0px);">${displayLetter}</div>
                    </div>
                </div>
            `;

            document.getElementById('btn-listen-train-phoneme').onclick = () => {
                playSound('click');
                playPhonemeAudioFile(letter, varIdx, true);
            };

            playPhonemeAudioFile(letter, varIdx, true);
            abaDock.style.display = 'flex';
            bindPhonemeSliderEvents('phon-drag-track', 'phon-drag-box', 'phon-drag-fill');
            setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
            return;
        }

        if (cyc === 2) {
            const isMouthMode = (target.discMode === 'MOUTH');
            badge.innerText = isMouthMode
                ? `Ciclo 2: Som → Boca (${titleLabel})`
                : `Ciclo 2: Som → Letra (${titleLabel})`;

            modelArea.style.minHeight = '135px';
            modelArea.innerHTML = `<button type="button" class="model-audio-btn" id="btn-phon-disc-audio">${UI_SVGS.volume}</button>`;
            document.getElementById('btn-phon-disc-audio').onclick = () => playPhonemeAudioFile(letter, varIdx, false);
            playPhonemeAudioFile(letter, varIdx, false);

            const allPhon = getEffectivePhonologicalModules().filter(m => !m.isCheckpoint);
            const distItems = shuffleArray(
                (session.phonData && session.phonData.distractors.length >= 2)
                    ? session.phonData.distractors
                    : allPhon.filter(m => m.letter !== letter)
            ).slice(0, 2);

            const choices = shuffleArray([
                { letter, varIdx, isCorrect: true },
                ...distItems.map(d => ({ letter: d.letter, varIdx: d.varIdx || '1', isCorrect: false }))
            ]);

            choices.forEach(ch => {
                const btn = document.createElement('div');
                btn.className = `comp-card ${topoClass}`;
                const chDisp = formatStimulusTextHTML(ch.letter, session.phase, false, true);
                if (isMouthMode) {
                    btn.style.padding = '10px';
                    btn.innerHTML = `
                        <div style="width:115px; height:115px; display:flex; align-items:center; justify-content:center;">
                            ${buildMouthImgTagWithFallback(ch.letter, ch.varIdx, 'width:110px; height:110px; object-fit:contain; border-radius:14px;')}
                            <span style="display:none; font-size:2.4rem; font-weight:900;">${chDisp}</span>
                        </div>
                    `;
                } else {
                    btn.innerHTML = chDisp;
                }
                btn.dataset.correct = ch.isCorrect;
                bindMTSCardInteraction(btn, ch.isCorrect);
                compArea.appendChild(btn);
            });

            setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
            return;
        }

        const isOverlearning = (cyc === 4);
        badge.innerText = isOverlearning
            ? `Ciclo 4: Revisão (${titleLabel})`
            : `Ciclo 3: Produção Autônoma (${titleLabel})`;

        modelArea.style.minHeight = '20px';

        compArea.innerHTML = `
            <div style="width:100%; max-width:680px; display:flex; flex-direction:column; align-items:center; padding:10px 0;">
                <div id="phon-drag-track" class="drag-track">
                    <div id="phon-drag-fill" style="position:absolute; left:0; top:0; bottom:0; width:0px; background:var(--primary-light); pointer-events:none;"></div>
                    <div style="position:absolute; right:22px; display:flex; align-items:center; gap:6px; color:var(--text-light); font-weight:900; font-size:0.95rem; pointer-events:none;">
                        ${UI_SVGS.checkCircle}
                    </div>
                    <div id="phon-drag-box" class="drag-box ${topoClass}" style="transform:translateX(0px);">${displayLetter}</div>
                </div>
            </div>
        `;

        abaDock.style.display = 'flex';
        bindPhonemeSliderEvents('phon-drag-track', 'phon-drag-box', 'phon-drag-fill');
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    if (subType === 'PALAVRARIO_TRAIN') {
        if (session.currentCycle === 1) {
            const prevCycle = session.currentCycle;
            session.currentCycle = 2;
            renderSpecializedEidosTrial('EQUIV_4STEPS_MM', target, modelArea, compArea, badge, abaDock, fluencyPill);
            session.currentCycle = prevCycle;
            badge.innerText = `${session.eidosMod.title} • Etapa 1/3: Composto (BC → C)`;
            return;
        }
        if (session.currentCycle === 2) {
            const prevCycle = session.currentCycle;
            session.currentCycle = 1;
            renderSpecializedEidosTrial('SYL_WORD_BUILD', target, modelArea, compArea, badge, abaDock, fluencyPill);
            session.currentCycle = prevCycle;
            badge.innerText = `${session.eidosMod.title} • Etapa 2/3: Construção`;
            return;
        }
        if (session.currentCycle === 3) {
            renderSpecializedEidosTrial('FADEOUT_COLOR_MM', target, modelArea, compArea, badge, abaDock, fluencyPill);
            badge.innerText = `${session.eidosMod.title} • Etapa 3/3: Desmame Preto`;
            return;
        }
    }

    if (subType === 'FADEOUT_COLOR_MM') {
        badge.innerText = `3.2 Desmame (Cor → Preto)`;
        const groupWords = Array.isArray(target) ? target : ['BOLA', 'MALA', 'SAPO'];
        modelArea.style.minHeight = '0px';

        const pairs = groupWords.map(w => {
            const cleanW = getNormalizedWordKey(w);
            return {
                id: cleanW,
                leftHTML: formatStimulusTextHTML(w, session.phase, true, false),
                rightHTML: `<span style="color:#0F172A;">${formatStimulusTextHTML(cleanW, session.phase, false, true)}</span>`,
                speak: cleanW
            };
        });

        renderHorizontalMultiMTSBoard(compArea, pairs, {
            topoClass,
            onPairSuccess: (mData) => { if (!session.isProbeMode) speakTTS(mData.speak); }
        });
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    if (subType === 'CASE_GEN_MM') {
        badge.innerText = `3.3 MAIÚSCULA ↔ minúscula`;
        const groupWords = Array.isArray(target) ? target : ['BOLA', 'GATO', 'SAPO'];
        modelArea.style.minHeight = '0px';

        const pairs = groupWords.map(w => {
            const cleanW = getNormalizedWordKey(w);
            return {
                id: cleanW,
                leftHTML: `<span style="text-transform:uppercase;">${cleanW}</span>`,
                rightHTML: `<span class="topo-lower">${cleanW.toLowerCase()}</span>`,
                rightExtraClass: 'topo-lower',
                speak: cleanW
            };
        });

        renderHorizontalMultiMTSBoard(compArea, pairs, {
            topoClass: '',
            onPairSuccess: (mData) => { if (!session.isProbeMode) speakTTS(mData.speak); }
        });
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    if (subType === 'TYPO_GEN_MM') {
        const pairMode = (target && target.pairMode) ? target.pairMode : 'UPPER_CURSIVE';
        const groupWords = (target && Array.isArray(target.words)) ? target.words : (Array.isArray(target) ? target : ['BOLA', 'GATO', 'MALA']);
        modelArea.style.minHeight = '0px';

        let modeTitle = 'Bastão ↔ Cursiva';
        if (pairMode === 'LOWER_CURSIVE') modeTitle = 'minúscula ↔ Cursiva';
        else if (pairMode === 'CURSIVE_UPPER') modeTitle = 'Cursiva ↔ Bastão';
        badge.innerText = `Generalização Tipográfica • ${modeTitle}`;

        const pairs = groupWords.map(w => {
            const cleanW = getNormalizedWordKey(w);
            const cursiveStr = formatTextForFontCase(cleanW, 'SCHOOL');

            if (pairMode === 'LOWER_CURSIVE') {
                return {
                    id: cleanW,
                    leftHTML: `<span class="topo-lower">${cleanW.toLowerCase()}</span>`,
                    leftExtraClass: 'topo-lower',
                    rightHTML: `<span class="topo-school">${cursiveStr}</span>`,
                    rightExtraClass: 'topo-school',
                    speak: cleanW
                };
            }
            if (pairMode === 'CURSIVE_UPPER') {
                return {
                    id: cleanW,
                    leftHTML: `<span class="topo-school">${cursiveStr}</span>`,
                    leftExtraClass: 'topo-school',
                    rightHTML: `<span style="text-transform:uppercase;">${cleanW}</span>`,
                    rightExtraClass: '',
                    speak: cleanW
                };
            }
            return {
                id: cleanW,
                leftHTML: `<span style="text-transform:uppercase;">${cleanW}</span>`,
                leftExtraClass: '',
                rightHTML: `<span class="topo-school">${cursiveStr}</span>`,
                rightExtraClass: 'topo-school',
                speak: cleanW
            };
        });

        renderHorizontalMultiMTSBoard(compArea, pairs, {
            topoClass: '',
            onPairSuccess: (mData) => { if (!session.isProbeMode) speakTTS(mData.speak); }
        });
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    if (subType === 'NARRATIVE_COHERENCE') {
        if (target && Array.isArray(target.steps)) {
            renderSpecializedEidosTrial('CHRONO_SEQ', target, modelArea, compArea, badge, abaDock, fluencyPill);
            return;
        } else {
            renderSpecializedEidosTrial('INTRUDER_WORD', target, modelArea, compArea, badge, abaDock, fluencyPill);
            return;
        }
    }

    /* SLIDE SILÁBICO INTELIGENTE: FUSÃO PROGRESSIVA CONSOANTE -> VOGAL -> SÍLABA (ECO APÓS 300ms) */
    if (subType === 'SYL_BUILD_SLIDER') {
        const sylStr = String(target || 'FA').trim().toUpperCase();
        const consChar = sylStr.charAt(0) || 'F';
        const vowChar = sylStr.slice(1) || 'A';
        const dispCons = formatStimulusTextHTML(consChar, session.phase, false, true);
        const dispVow = formatStimulusTextHTML(vowChar, session.phase, false, true);
        const dispSyl = formatStimulusTextHTML(sylStr, session.phase, false, true);
        const modTitle = session.eidosMod ? session.eidosMod.title : 'Fusão Silábica';

        if (session.currentCycle === 1 || session.currentCycle === 5) {
            badge.innerText = `${modTitle} • Fusão (${sylStr})`;
            modelArea.style.minHeight = '30px';

            compArea.innerHTML = `
                <div class="syl-fusion-wrapper">
                    <div id="syl-fusion-track" class="drag-track syl-fusion-track">
                        <div id="syl-fusion-fill" class="syl-fusion-fill"></div>
                        <div id="syl-fusion-cons" class="drag-box syl-fusion-cons ${topoClass}" style="transform:translateX(0px);">${dispCons}</div>
                        <div id="syl-fusion-vow" class="syl-fusion-vow ${topoClass}">${dispVow}</div>
                        <div id="syl-fusion-result" class="syl-fusion-result ${topoClass}" style="display:none;">
                            <span>${dispSyl}</span>
                            <button type="button" id="btn-syl-fusion-replay" class="syl-fusion-replay-btn" title="Repetir fusão">${UI_SVGS.replay}</button>
                        </div>
                    </div>
                </div>
            `;

            abaDock.style.display = 'flex';
            bindSyllableFusionSlider('syl-fusion-track', 'syl-fusion-cons', 'syl-fusion-vow', 'syl-fusion-fill', 'syl-fusion-result', sylStr);
            setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
            return;
        } else if (session.currentCycle === 2) {
            badge.innerText = `${modTitle} • Auditivo`;
            modelArea.innerHTML = `<button type="button" class="model-audio-btn" onclick="speakTTS('${sylStr}')">${UI_SVGS.volume}</button>`;
            speakTTS(sylStr);
            const opts = generateComparisons(sylStr);
            opts.forEach(opt => {
                const btn = document.createElement('div');
                btn.className = `comp-card ${topoClass}`;
                btn.innerHTML = formatStimulusTextHTML(opt, session.phase, true, false);
                const isCorrect = (opt === sylStr);
                btn.dataset.correct = isCorrect;
                bindMTSCardInteraction(btn, isCorrect);
                compArea.appendChild(btn);
            });
            applyDMTSWrapperIfEnabled(modelArea, compArea, false);
            return;
        } else {
            badge.innerText = `${modTitle} • Leitura Oral`;
            modelArea.innerHTML = `<div class="model-card ${topoClass}" style="font-size:4.5rem;">${formatStimulusTextHTML(sylStr, session.phase, !session.isProbeMode, session.isProbeMode)}</div>`;
            abaDock.style.display = 'flex';
            setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
            return;
        }
    }

    if (subType === 'TRACKING') {
        badge.innerText = `1.1 Rastreio Visual`;
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

    if (subType === 'SYM_DISC') {
        badge.innerText = `1.2 Discriminação de Símbolos`;
        const isHighlighted = !session.isProbeMode && state.reviewHighlights && state.reviewHighlights[target];
        const highlightStyle = isHighlighted ? 'border-color: var(--warning); background-color: var(--warning-light);' : '';

        modelArea.innerHTML = `<div class="model-card" style="font-size:2.2rem; ${highlightStyle}">LETRA</div>`;
        const distractors = shuffleArray(['7', '4', '9', '★', '☀', '♣', '8', '♥']).slice(0, numOpts - 1);
        const opts = shuffleArray([target, ...distractors]);
        opts.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            if (opt === target && isHighlighted) {
                btn.style.borderColor = 'var(--warning)';
                btn.style.backgroundColor = 'var(--warning-light)';
            }
            btn.innerHTML = formatStimulusTextHTML(opt);
            const isCorrect = (opt === target);
            btn.dataset.correct = isCorrect;
            bindMTSCardInteraction(btn, isCorrect);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
        return;
    }

    if (['WORD_IDENT_MM', 'CLASS_TOTAL_MM', 'FIG_WORD_MM', 'SEMANTIC_CAT_MM'].includes(subType)) {
        if (subType === 'WORD_IDENT_MM' && session.currentCycle === 1) {
            badge.innerText = `1.5 Identidade de Palavras • Simples`;
            const wordsArr = Array.isArray(target) ? target : [String(target || 'BOLA')];
            const singleWord = getNormalizedWordKey(wordsArr[0]);
            const isHighlighted = !session.isProbeMode && state.reviewHighlights && state.reviewHighlights[singleWord];
            const highlightStyle = isHighlighted ? 'border-color: var(--warning); background-color: var(--warning-light);' : '';

            modelArea.style.minHeight = '135px';
            modelArea.innerHTML = `<div class="model-card ${topoClass}" style="${highlightStyle}">${formatStimulusTextHTML(singleWord)}</div>`;
            const distractors = shuffleArray(session.pool.map(w => getNormalizedWordKey(w)).filter(w => w !== singleWord)).slice(0, numOpts - 1);
            const opts = shuffleArray([singleWord, ...distractors]);
            opts.forEach(opt => {
                const btn = document.createElement('div');
                btn.className = `comp-card ${topoClass}`;
                btn.innerHTML = formatStimulusTextHTML(opt);
                const isCorrect = (opt === singleWord);
                btn.dataset.correct = isCorrect;
                bindMTSCardInteraction(btn, isCorrect);
                compArea.appendChild(btn);
            });
            applyDMTSWrapperIfEnabled(modelArea, compArea, true);
            return;
        }

        let pairs = [];
        if (subType === 'WORD_IDENT_MM') {
            badge.innerText = `1.5 Identidade de Palavras • Multi-MTS`;
            const words = Array.isArray(target) ? target : ['BOLA', 'MALA', 'SAPO'];
            pairs = words.map(w => {
                const cw = getNormalizedWordKey(w);
                return { id: cw, leftHTML: formatStimulusTextHTML(w), rightHTML: formatStimulusTextHTML(w), speak: cw };
            });
        } else if (subType === 'CLASS_TOTAL_MM') {
            badge.innerText = `Estrutura Total`;
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
            badge.innerText = `Relação Figura-Palavra`;
            const words = Array.isArray(target) ? target : ['BOLA', 'GATO', 'BOLO'];
            pairs = words.map(w => {
                const cw = getNormalizedWordKey(w);
                return {
                    id: cw,
                    leftHTML: getWordVisualRepresentationHTML(cw, 3.2),
                    rightHTML: formatStimulusTextHTML(w),
                    speak: cw
                };
            });
        } else if (subType === 'SEMANTIC_CAT_MM') {
            badge.innerText = `Categorização Semântica`;
            const words = Array.isArray(target) ? target : ['GATO', 'BOLO', 'BOLA'];
            pairs = words.map((w, idx) => {
                const cw = getNormalizedWordKey(w);
                const wObj = WORD_BANK[cw] || { cat: 'OBJETO' };
                return { id: `${cw}_${idx}`, matchCat: wObj.cat, leftHTML: formatStimulusTextHTML(w), rightHTML: wObj.cat, speak: cw };
            });
        }

        modelArea.style.minHeight = '0px';
        renderHorizontalMultiMTSBoard(compArea, pairs, {
            topoClass,
            onModelTap: (p) => { if (p.speak && !session.isProbeMode) speakTTS(p.speak); },
            isMatchFn: (mData, cData) => (subType === 'SEMANTIC_CAT_MM')
                ? (mData.matchCat === cData.matchCat)
                : (mData.id === cData.id)
        });
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    if (subType === 'MIRROR_GRAPH') {
        badge.innerText = `1.3 Orientação Espacial`;
        modelArea.innerHTML = `<div class="model-card" style="font-size:4.4rem;">${target}</div>`;
        const transforms = [
            { label: target, style: '', correct: true },
            { label: target, style: 'transform: scaleX(-1);', correct: false },
            { label: target, style: 'transform: scaleY(-1);', correct: false },
            { label: target, style: 'transform: rotate(180deg);', correct: false }
        ].slice(0, numOpts);
        shuffleArray(transforms).forEach(item => {
            const btn = document.createElement('div');
            btn.className = 'comp-card';
            btn.innerHTML = `<span style="display:inline-block; ${item.style}">${item.label}</span>`;
            btn.dataset.correct = item.correct;
            bindMTSCardInteraction(btn, item.correct);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
        return;
    }

    if (subType === 'RHYME' || subType === 'ALLITERATION') {
        const isRhyme = subType === 'RHYME';
        badge.innerText = isRhyme ? `Rimas` : `Aliteração`;
        modelArea.innerHTML = `<button type="button" class="model-audio-btn" onclick="speakTTS('${target.target}')">${UI_SVGS.volume}</button>`;
        speakTTS(target.target);

        const rawOpts = [target.match, ...target.distractors.slice(0, numOpts - 1)];
        shuffleArray(rawOpts).forEach(wKey => {
            const btn = document.createElement('div');
            if (hasValidVisualRepresentation(wKey)) {
                btn.className = 'comp-card img-only';
                btn.innerHTML = getWordVisualRepresentationHTML(wKey, 3.8);
            } else {
                btn.className = `comp-card ${topoClass}`;
                btn.innerHTML = formatStimulusTextHTML(wKey);
            }
            const isCorrect = (wKey === target.match);
            btn.dataset.correct = isCorrect;
            bindMTSCardInteraction(btn, isCorrect);
            compArea.appendChild(btn);
        });
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    if (subType === 'SYL_COUNT') {
        badge.innerText = `Segmentação Silábica`;
        const cleanWord = getNormalizedWordKey(target);
        const expectedCount = getExplicitSyllableCount(target);
        let tapCount = 0;
        modelArea.innerHTML = `<button type="button" class="model-audio-btn" onclick="speakTTS('${cleanWord}')">${UI_SVGS.volume}</button>`;
        speakTTS(cleanWord);
        compArea.innerHTML = `
            <div style="display:flex; align-items:center; gap:18px;">
                <button type="button" id="drum-tap-btn" class="btn-action" style="font-size:1.5rem; padding:22px 36px; border-radius:24px;">
                    ${UI_SVGS.touch}
                    <span id="drum-count-val">0</span>
                </button>
                <button type="button" id="drum-reset-btn" class="btn-action btn-cancel" style="padding:22px;">Zerar</button>
                <button type="button" id="drum-confirm-btn" class="btn-action" style="background:var(--success); padding:22px 30px;">
                    ${UI_SVGS.check}
                </button>
            </div>
        `;
        abaDock.style.display = 'flex';
        document.getElementById('drum-tap-btn').onclick = () => {
            tapCount++;
            playSound('click');
            const valEl = document.getElementById('drum-count-val');
            valEl.innerText = tapCount;
            if (window.AlfaAnimations && typeof window.AlfaAnimations.pulseTarget === 'function') {
                window.AlfaAnimations.pulseTarget(valEl);
            }
        };
        document.getElementById('drum-reset-btn').onclick = () => {
            tapCount = 0;
            document.getElementById('drum-count-val').innerText = 0;
        };
        document.getElementById('drum-confirm-btn').onclick = (e) => {
            handleAnswer(tapCount === expectedCount, e.currentTarget);
        };
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    if (subType === 'SYL_WORD_BUILD') {
        const cleanWord = getNormalizedWordKey(target || 'MALA');
        const syllables = extractExplicitSyllables(target || 'MALA');

        if (session.currentCycle === 2) {
            badge.innerText = `3.1 Leitura Limpa`;
            modelArea.style.minHeight = '145px';
            modelArea.innerHTML = `<div class="model-card ${topoClass}" style="font-size:4.4rem;">${formatStimulusTextHTML(cleanWord, session.phase, false, true)}</div>`;
            abaDock.style.display = 'flex';
            setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
            return;
        }

        badge.innerText = `3.1 Construção por Sílabas`;
        const visualHTML = getWordVisualRepresentationHTML(cleanWord, 3.6);
        modelArea.style.minHeight = '140px';
        modelArea.innerHTML = `
            <div id="crmts-top-prompt-box" style="display:flex; align-items:center; gap:18px;">
                <button type="button" class="model-audio-btn" style="width:88px; height:88px;" onclick="speakTTS('${cleanWord}')">
                    ${UI_SVGS.volumeSm}
                </button>
                <div style="background:#fff; border:2px solid var(--border); border-radius:20px; padding:12px 18px; box-shadow:var(--shadow-card);">
                    ${visualHTML}
                </div>
            </div>
        `;
        speakTTS(cleanWord);

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

        function refreshSylSlots(animateIdx = -1) {
            slotsDiv.innerHTML = '';
            syllables.forEach((_, idx) => {
                const s = document.createElement('div');
                s.className = `crmts-slot ${topoClass} ${built[idx] ? 'filled' : ''}`;
                s.innerHTML = built[idx] ? formatStimulusTextHTML(built[idx].syl, session.phase, true, false) : '';
                slotsDiv.appendChild(s);
                if (idx === animateIdx && window.AlfaAnimations && typeof window.AlfaAnimations.animateSlotFill === 'function') {
                    window.AlfaAnimations.animateSlotFill(s);
                }
            });
        }

        function triggerReadingWithoutCueGate() {
            const promptBox = document.getElementById('crmts-top-prompt-box');
            if (promptBox) promptBox.style.display = 'none';
            poolDiv.innerHTML = '';
        }

        tilePool.forEach(syl => {
            const t = document.createElement('button');
            t.type = 'button';
            t.className = `letter-tile ${topoClass}`;
            t.innerHTML = formatStimulusTextHTML(syl, session.phase, true, false);
            t.dataset.rawSyl = syl;
            attachCRMTSUnitInteraction(t, () => slotsDiv, () => {
                if (blockClicks || built.length >= syllables.length) return;
                const expectedSyl = syllables[built.length];
                if (syl === expectedSyl) {
                    playSound('click');
                    slotErrors = 0;
                    t.classList.add('used');
                    built.push({ syl, tileEl: t });
                    refreshSylSlots(built.length - 1);
                    if (built.length === syllables.length) {
                        playSound('win');
                        triggerReadingWithoutCueGate();
                    }
                } else {
                    slotErrors++;
                    session.attemptsOnCurrent++;
                    playSound('click');
                    t.classList.add('feedback-error');
                    if (window.AlfaAnimations && typeof window.AlfaAnimations.shakeElement === 'function') {
                        window.AlfaAnimations.shakeElement(t);
                    }
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
                                refreshSylSlots(built.length - 1);
                                if (built.length === syllables.length) {
                                    triggerReadingWithoutCueGate();
                                }
                            }, 420);
                        }
                    }
                }
            });
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

    if (subType === 'EQUIV_4STEPS_MM') {
        const rawWords = Array.isArray(target) ? target : ['BOLA', 'GATO', 'BOLO'];
        const words = rawWords.map(w => getNormalizedWordKey(w));
        abaDock.style.display = 'flex';

        if (session.currentCycle === 5) {
            badge.innerText = session.isPreTestChain
                ? `PRÉ-TESTE VAR ${session.activeVar} • Leitura (C → D)`
                : `SONDA 3/4 • Leitura Oral (C → D)`;
            modelArea.style.minHeight = '10px';
            const row = document.createElement('div');
            row.style.cssText = 'display:flex; gap:18px; flex-wrap:wrap; justify-content:center;';
            words.forEach(w => {
                const c = document.createElement('div');
                c.className = `comp-card ${topoClass}`;
                c.style.minWidth = '200px';
                c.innerHTML = formatStimulusTextHTML(w, session.phase, false, true);
                row.appendChild(c);
            });
            compArea.appendChild(row);
            setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
            return;
        }

        if (session.currentCycle === 6) {
            badge.innerText = `SONDA 4/4 • Auditiva (A → C)`;
            const targetW = words[0];
            modelArea.style.minHeight = '140px';
            modelArea.innerHTML = `<button type="button" class="model-audio-btn" onclick="speakTTS('${targetW}')">${UI_SVGS.volume}</button>`;
            speakTTS(targetW);

            shuffleArray(words).forEach(opt => {
                const btn = document.createElement('div');
                btn.className = `comp-card ${topoClass}`;
                btn.innerHTML = formatStimulusTextHTML(opt, session.phase, false, true);
                const isCorrect = (opt === targetW);
                btn.dataset.correct = isCorrect;
                bindMTSCardInteraction(btn, isCorrect);
                compArea.appendChild(btn);
            });
            setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
            return;
        }

        let pairs = [];
        if (session.currentCycle === 1) {
            badge.innerText = `TREINO 1/2 • Figuras (B → D)`;
            pairs = words.map(w => ({
                id: w,
                leftHTML: getWordVisualRepresentationHTML(w, 3.2),
                rightHTML: getWordVisualRepresentationHTML(w, 3.2)
            }));
        } else if (session.currentCycle === 2) {
            badge.innerText = `TREINO 2/2 • Composto (BC → C)`;
            pairs = words.map(w => ({
                id: w,
                leftHTML: `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
                        ${getWordVisualRepresentationHTML(w, 2.7)}
                        <span class="bc-masked-word" style="font-size:1.15rem; background:#E2E8F0; color:transparent; padding:2px 8px; border-radius:8px; border:1.5px dashed #94A3B8; transition:0.2s;">${formatStimulusTextHTML(w)}</span>
                    </div>
                `,
                rightHTML: formatStimulusTextHTML(w)
            }));
        } else if (session.currentCycle === 3) {
            badge.innerText = `SONDA 1/4 • Figura → Palavra (B → C)`;
            pairs = words.map(w => ({
                id: w,
                leftHTML: getWordVisualRepresentationHTML(w, 3.2),
                rightHTML: formatStimulusTextHTML(w, session.phase, false, true)
            }));
        } else {
            badge.innerText = `SONDA 2/4 • Palavra → Figura (C → B)`;
            pairs = words.map(w => ({
                id: w,
                leftHTML: formatStimulusTextHTML(w, session.phase, false, true),
                rightHTML: getWordVisualRepresentationHTML(w, 3.2)
            }));
        }

        modelArea.style.minHeight = '0px';
        renderHorizontalMultiMTSBoard(compArea, pairs, {
            topoClass,
            onModelTap: (p, cardM) => {
                if (session.currentCycle === 2 || (session.isPalavrarioDrawer && !session.isProbeMode && session.currentCycle === 1)) {
                    const masked = cardM.querySelector('.bc-masked-word');
                    if (masked) {
                        masked.style.background = '#FEF3C7';
                        masked.style.color = '#0F172A';
                        masked.style.borderStyle = 'solid';
                        setTimeout(() => {
                            if (!cardM.classList.contains('paired')) {
                                masked.style.background = '#E2E8F0';
                                masked.style.color = 'transparent';
                            }
                        }, 1600);
                    }
                }
            },
            onPairSuccess: (mData, cardM) => {
                const masked = cardM.querySelector('.bc-masked-word');
                if (masked) {
                    masked.style.background = '#FFFFFF';
                    masked.style.color = '#065F46';
                }
            },
            onPairError: (cardC, board) => {
                if (session.isProbeMode && session.currentCycle === 3) {
                    session.probeGateFailed = true;
                    handleAnswer(false, board);
                    return;
                }
                if (session.isProbeMode || session.attemptsOnCurrent >= 3) {
                    handleAnswer(false, board);
                }
            },
            onAllPaired: (board) => {
                if (session.currentCycle === 1 && !session.isPalavrarioDrawer) {
                    // Aguarda registro oral na dock
                } else {
                    handleAnswer(true, board);
                }
            }
        });
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    if (subType === 'COPY_CRMTS' || subType === 'DICT_CRMTS') {
        const isCopy = (subType === 'COPY_CRMTS');
        const cleanWord = getNormalizedWordKey(target);
        badge.innerText = isCopy ? `3.4 Transcrição e Cópia` : `3.5 Escrita sob Ditado`;

        if (isCopy) {
            modelArea.innerHTML = `<div class="model-card ${topoClass}">${formatStimulusTextHTML(cleanWord)}</div>`;
        } else {
            modelArea.innerHTML = `<button type="button" class="model-audio-btn" onclick="speakTTS('${cleanWord}')">${UI_SVGS.volume}</button>`;
            speakTTS(cleanWord);
        }

        const letters = cleanWord.split('');
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

        function refreshCRMTS(animateIdx = -1) {
            slotsDiv.innerHTML = '';
            letters.forEach((_, idx) => {
                const s = document.createElement('div');
                s.className = `crmts-slot ${topoClass} ${built[idx] ? 'filled' : ''}`;
                s.innerHTML = built[idx] ? formatStimulusTextHTML(built[idx].char) : '';
                slotsDiv.appendChild(s);
                if (idx === animateIdx && window.AlfaAnimations && typeof window.AlfaAnimations.animateSlotFill === 'function') {
                    window.AlfaAnimations.animateSlotFill(s);
                }
            });
        }

        tilePool.forEach(ch => {
            const t = document.createElement('button');
            t.type = 'button';
            t.className = `letter-tile ${topoClass}`;
            t.innerHTML = formatStimulusTextHTML(ch);
            t.dataset.rawChar = ch;
            attachCRMTSUnitInteraction(t, () => slotsDiv, () => {
                if (blockClicks || built.length >= letters.length) return;
                const expectedChar = letters[built.length];

                if (ch === expectedChar) {
                    playSound('click');
                    slotErrors = 0;
                    t.classList.add('used');
                    built.push({ char: ch, tileEl: t });
                    refreshCRMTS(built.length - 1);
                    if (built.length === letters.length) {
                        handleAnswer(true, slotsDiv);
                    }
                } else {
                    slotErrors++;
                    session.attemptsOnCurrent++;
                    playSound('click');
                    if (session.isProbeMode) {
                        handleAnswer(false, slotsDiv);
                        return;
                    }
                    t.classList.add('feedback-error');
                    if (window.AlfaAnimations && typeof window.AlfaAnimations.shakeElement === 'function') {
                        window.AlfaAnimations.shakeElement(t);
                    }
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
                                refreshCRMTS(built.length - 1);
                                if (built.length === letters.length) {
                                    handleAnswer(true, slotsDiv);
                                }
                            }, 420);
                        }
                    }
                }
            });
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

    if (subType === 'WORD_SPACE') {
        badge.innerText = `5.2 Segmentação Lexical`;
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
                        if (window.AlfaAnimations && typeof window.AlfaAnimations.pulseTarget === 'function') {
                            window.AlfaAnimations.pulseTarget(gapBtn);
                        }
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

    if (subType === 'MIN_PAIRS') {
        badge.innerText = `Pares Mínimos (${target.contrast})`;
        modelArea.innerHTML = `<button type="button" class="model-audio-btn" onclick="speakTTS('${target.target}')">${UI_SVGS.volume}</button>`;
        speakTTS(target.target);

        const pairOpts = shuffleArray([target.target, target.distractor]);
        pairOpts.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            btn.innerHTML = formatStimulusTextHTML(opt);
            const isCorrect = (opt === target.target);
            btn.dataset.correct = isCorrect;
            bindMTSCardInteraction(btn, isCorrect, () => {
                if (!isCorrect) {
                    state.minimalPairSwaps[target.contrast] = (state.minimalPairSwaps[target.contrast] || 0) + 1;
                    saveState();
                }
            });
            compArea.appendChild(btn);
        });
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    if (subType === 'SPRINT_3S') {
        badge.innerText = `5.1 Fluência (< 3s)`;
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

    if (subType === 'SYNTACTIC_GROUP') {
        badge.innerText = `5.3 Agrupamento Sintático`;
        modelArea.innerHTML = `<div class="model-card sentence-mode ${topoClass}">${formatStimulusTextHTML(target)}</div>`;
        abaDock.style.display = 'flex';
        setTimeout(() => { blockClicks = false; startResponseTimeoutIfConfigured(); }, state.settings.latency);
        return;
    }

    if (subType === 'SENTENCE_BUILD') {
        badge.innerText = `5.4 Composição de Frases`;
        const spokenPhrase = target.shortSpoken || target.wordsArray.join(' ');

        modelArea.innerHTML = `
            <div style="display:flex; align-items:center; gap:16px; width:100%; justify-content:center;">
                <button type="button" class="model-audio-btn" style="width:84px; height:84px; flex-shrink:0;" onclick="speakTTS('${spokenPhrase}')">${UI_SVGS.volumeSm}</button>
                <div class="model-card sentence-mode ${topoClass}" id="sentence-drop-zone" style="font-size:1.6rem; flex:1; max-width:680px;">
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
        spaceBtn.innerHTML = `${UI_SVGS.spaceBar} ESPAÇO`;

        function setSpaceButtonPendingState(isSpaceLocked) {
            waitingForSpace = !isSpaceLocked;
            if (isSpaceLocked) {
                spaceBtn.classList.add('space-active-locked');
                spaceBtn.innerHTML = `${UI_SVGS.check} ESPAÇO ATIVO`;
            } else {
                spaceBtn.classList.remove('space-active-locked');
                spaceBtn.innerHTML = `${UI_SVGS.spaceBar} ESPAÇO`;
            }
        }

        function updatePreview() {
            const prev = document.getElementById('built-sentence-preview');
            if (prev) {
                prev.innerHTML = builtWords.map(w => formatStimulusTextHTML(w)).join(' ');
                if (builtWords.length > 0 && window.AlfaAnimations && typeof window.AlfaAnimations.pulseTarget === 'function') {
                    window.AlfaAnimations.pulseTarget(prev);
                }
            }
        }

        wordsShuffled.forEach(w => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `letter-tile ${topoClass}`;
            btn.style.fontSize = '1.35rem';
            btn.innerHTML = formatStimulusTextHTML(w);
            btn.dataset.rawWord = w;
            attachCRMTSUnitInteraction(btn, () => document.getElementById('sentence-drop-zone'), () => {
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
                    if (window.AlfaAnimations && typeof window.AlfaAnimations.shakeElement === 'function') {
                        window.AlfaAnimations.shakeElement(btn);
                    }
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
            });
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
        clearBtn.innerHTML = `${UI_SVGS.backspace} <span style="margin-left:6px;">Limpar</span>`;
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

    if (subType === 'SYNTACTIC_WH') {
        badge.innerText = `5.5 Compreensão (WH)`;
        modelArea.innerHTML = `
            <div class="model-card sentence-mode ${topoClass}" style="margin-bottom:8px;">
                <div>${formatStimulusTextHTML(target.sentence)}</div>
                <div style="font-size:1.35rem; color:var(--primary-dark); margin-top:10px;">${target.question}</div>
            </div>
        `;
        const opts = shuffleArray([target.correct, ...target.distractors.slice(0, numOpts - 1)]);
        opts.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = `comp-card ${topoClass}`;
            btn.style.fontSize = '1.6rem';
            btn.innerHTML = formatStimulusTextHTML(opt);
            const isCorrect = (opt === target.correct);
            btn.dataset.correct = isCorrect;
            bindMTSCardInteraction(btn, isCorrect);
            compArea.appendChild(btn);
        });
        applyDMTSWrapperIfEnabled(modelArea, compArea, true);
        return;
    }

    if (subType === 'INTRUDER_WORD') {
        badge.innerText = `5.6 Coerência Semântica`;
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
            attachHoldToSelectBehavior(rBtn, () => {
                handleAnswer(rWord === target.fix, rBtn);
            });
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

    if (subType === 'CHRONO_SEQ') {
        badge.innerText = `5.6 Sequência Narrativa`;
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

/* CONTROLADOR DO SLIDE FONOLÓGICO (TOQUE + MOUSE + SEGURAR SETA PARA DESLIZE CONTÍNUO ~1s) */
function bindPhonemeSliderEvents(trackId, boxId, fillId) {
    const trackEl = document.getElementById(trackId);
    const boxEl = document.getElementById(boxId);
    const fillEl = document.getElementById(fillId);
    if (!trackEl || !boxEl || !fillEl) return;

    let isDragging = false, startX = 0, currentX = 0, completedSlide = false;
    let heldKey = null;

    const getMaxSlide = () => Math.max(80, trackEl.clientWidth - boxEl.offsetWidth - 16);

    const applyX = (x) => {
        const m = getMaxSlide();
        currentX = Math.max(0, Math.min(m, x));
        boxEl.style.transform = `translateX(${currentX}px)`;
        fillEl.style.width = `${currentX > 0 ? currentX + (boxEl.offsetWidth / 2) : 0}px`;
    };

    const resetDragPosition = () => {
        isDragging = false;
        heldKey = null;
        if (window.AlfaAnimations && typeof window.AlfaAnimations.stopHoldSlide === 'function') {
            window.AlfaAnimations.stopHoldSlide();
        }
        currentX = 0;
        boxEl.style.transition = 'transform 0.25s ease';
        fillEl.style.transition = 'width 0.25s ease';
        boxEl.style.transform = 'translateX(0px)';
        fillEl.style.width = '0px';
    };

    const triggerSlideCompletion = (finalX = null) => {
        if (completedSlide) return;
        completedSlide = true;
        isDragging = false;
        heldKey = null;
        if (window.AlfaAnimations && typeof window.AlfaAnimations.stopHoldSlide === 'function') {
            window.AlfaAnimations.stopHoldSlide();
        }
        const m = finalX !== null ? finalX : getMaxSlide();
        boxEl.style.transition = 'none';
        fillEl.style.transition = 'none';
        boxEl.style.transform = `translateX(${m}px)`;
        fillEl.style.width = '100%';
        fillEl.style.background = 'var(--success-light)';
        boxEl.style.background = 'var(--success)';
        playSound('win');
        setTimeout(() => {
            completedSlide = false;
            fillEl.style.background = 'var(--primary-light)';
            boxEl.style.background = 'var(--primary)';
            resetDragPosition();
        }, 650);
    };

    boxEl.onpointerdown = (e) => {
        if (blockClicks || completedSlide) return;
        isDragging = true;
        heldKey = null;
        if (window.AlfaAnimations && typeof window.AlfaAnimations.stopHoldSlide === 'function') {
            window.AlfaAnimations.stopHoldSlide();
        }
        boxEl.style.transition = 'none';
        fillEl.style.transition = 'none';
        startX = e.clientX - currentX;
        if (boxEl.setPointerCapture) { try { boxEl.setPointerCapture(e.pointerId); } catch (err) {} }
    };

    boxEl.onpointermove = (e) => {
        if (!isDragging || completedSlide) return;
        const m = getMaxSlide();
        applyX(e.clientX - startX);
        if (currentX >= m * 0.94) {
            triggerSlideCompletion(m);
        }
    };

    boxEl.onpointerup = () => { if (isDragging && !completedSlide) resetDragPosition(); };
    boxEl.onpointercancel = () => { if (isDragging && !completedSlide) resetDragPosition(); };

    const onKeyUpHold = (ev) => {
        if (!document.body.contains(trackEl)) {
            window.removeEventListener('keyup', onKeyUpHold);
            return;
        }
        if (ev.key === heldKey) {
            heldKey = null;
            if (window.AlfaAnimations && typeof window.AlfaAnimations.stopHoldSlide === 'function') {
                window.AlfaAnimations.stopHoldSlide();
            }
        }
    };

    if (window._alfaSliderKeyUpFn) {
        window.removeEventListener('keyup', window._alfaSliderKeyUpFn);
    }
    window._alfaSliderKeyUpFn = onKeyUpHold;
    window.addEventListener('keyup', onKeyUpHold);

    activeSliderKeyHandler = (key) => {
        if (blockClicks || completedSlide) return;
        if (heldKey === key) return;
        heldKey = key;

        boxEl.style.transition = 'none';
        fillEl.style.transition = 'none';

        const dir = key === 'ArrowRight' ? 1 : -1;
        if (window.AlfaAnimations && typeof window.AlfaAnimations.startHoldSlide === 'function') {
            window.AlfaAnimations.startHoldSlide(
                dir,
                () => ({ currentX, maxSlide: getMaxSlide(), durationMs: 900, threshold: 0.94 }),
                (nextX) => applyX(nextX),
                (endX) => triggerSlideCompletion(endX)
            );
        }
    };
}

/* CONTROLADOR DO SLIDE SILÁBICO INTELIGENTE (FUSÃO C -> V -> CV + SEGURAR SETA ~1s + ECO 300ms) */
function bindSyllableFusionSlider(trackId, consId, vowId, fillId, resultId, sylStr) {
    const trackEl = document.getElementById(trackId);
    const consEl = document.getElementById(consId);
    const vowEl = document.getElementById(vowId);
    const fillEl = document.getElementById(fillId);
    const resultEl = document.getElementById(resultId);
    const replayBtn = document.getElementById('btn-syl-fusion-replay');
    if (!trackEl || !consEl || !vowEl || !fillEl || !resultEl) return;

    let isDragging = false, startX = 0, currentX = 0, fused = false;
    let heldKey = null;
    const trialToken = `${session.phase}_${session.currentCycle}_${session.currentTrialIdx}`;

    const getMaxSlide = () => {
        const vowWidth = vowEl.offsetWidth || 96;
        return Math.max(80, trackEl.clientWidth - consEl.offsetWidth - vowWidth - 12);
    };

    const applyX = (x) => {
        const m = getMaxSlide();
        currentX = Math.max(0, Math.min(m, x));
        consEl.style.transform = `translateX(${currentX}px)`;
        fillEl.style.width = `${currentX > 0 ? currentX + (consEl.offsetWidth / 2) : 0}px`;
    };

    const resetFusion = () => {
        fused = false;
        isDragging = false;
        heldKey = null;
        if (window.AlfaAnimations && typeof window.AlfaAnimations.stopHoldSlide === 'function') {
            window.AlfaAnimations.stopHoldSlide();
        }
        currentX = 0;
        consEl.style.display = 'flex';
        vowEl.style.display = 'flex';
        resultEl.style.display = 'none';
        trackEl.classList.remove('fused-state');
        consEl.style.transition = 'transform 0.24s ease';
        fillEl.style.transition = 'width 0.24s ease';
        consEl.style.transform = 'translateX(0px)';
        fillEl.style.width = '0px';
    };

    const completeFusion = () => {
        if (fused) return;
        fused = true;
        isDragging = false;
        heldKey = null;
        if (window.AlfaAnimations && typeof window.AlfaAnimations.stopHoldSlide === 'function') {
            window.AlfaAnimations.stopHoldSlide();
        }
        fillEl.style.transition = 'width 0.18s ease';
        fillEl.style.width = '100%';
        consEl.style.display = 'none';
        vowEl.style.display = 'none';
        resultEl.style.display = 'flex';
        trackEl.classList.add('fused-state');
        if (window.AlfaAnimations && typeof window.AlfaAnimations.pulseTarget === 'function') {
            window.AlfaAnimations.pulseTarget(resultEl);
        }
        playSound('win');

        setTimeout(() => {
            const nowToken = `${session.phase}_${session.currentCycle}_${session.currentTrialIdx}`;
            if (fused && nowToken === trialToken) {
                speakTTS(sylStr);
            }
        }, 300);
    };

    if (replayBtn) {
        replayBtn.onclick = (e) => {
            e.stopPropagation();
            playSound('click');
            resetFusion();
        };
    }

    consEl.onpointerdown = (e) => {
        if (blockClicks || fused) return;
        isDragging = true;
        heldKey = null;
        if (window.AlfaAnimations && typeof window.AlfaAnimations.stopHoldSlide === 'function') {
            window.AlfaAnimations.stopHoldSlide();
        }
        consEl.style.transition = 'none';
        fillEl.style.transition = 'none';
        startX = e.clientX - currentX;
        if (consEl.setPointerCapture) { try { consEl.setPointerCapture(e.pointerId); } catch (err) {} }
    };

    consEl.onpointermove = (e) => {
        if (!isDragging || fused) return;
        const maxSlide = getMaxSlide();
        applyX(e.clientX - startX);
        if (currentX >= maxSlide * 0.88) {
            completeFusion();
        }
    };

    const endPointer = () => {
        if (!isDragging || fused) return;
        isDragging = false;
        currentX = 0;
        consEl.style.transition = 'transform 0.24s ease';
        fillEl.style.transition = 'width 0.24s ease';
        consEl.style.transform = 'translateX(0px)';
        fillEl.style.width = '0px';
    };

    consEl.onpointerup = endPointer;
    consEl.onpointercancel = endPointer;

    const onKeyUpHold = (ev) => {
        if (!document.body.contains(trackEl)) {
            window.removeEventListener('keyup', onKeyUpHold);
            return;
        }
        if (ev.key === heldKey) {
            heldKey = null;
            if (window.AlfaAnimations && typeof window.AlfaAnimations.stopHoldSlide === 'function') {
                window.AlfaAnimations.stopHoldSlide();
            }
        }
    };

    if (window._alfaSliderKeyUpFn) {
        window.removeEventListener('keyup', window._alfaSliderKeyUpFn);
    }
    window._alfaSliderKeyUpFn = onKeyUpHold;
    window.addEventListener('keyup', onKeyUpHold);

    activeSliderKeyHandler = (key) => {
        if (blockClicks) return;
        if (fused) {
            if (key === 'ArrowLeft') resetFusion();
            return;
        }
        if (heldKey === key) return;
        heldKey = key;

        consEl.style.transition = 'none';
        fillEl.style.transition = 'none';

        const dir = key === 'ArrowRight' ? 1 : -1;
        if (window.AlfaAnimations && typeof window.AlfaAnimations.startHoldSlide === 'function') {
            window.AlfaAnimations.startHoldSlide(
                dir,
                () => ({ currentX, maxSlide: getMaxSlide(), durationMs: 900, threshold: 0.88 }),
                (nextX) => applyX(nextX),
                () => completeFusion()
            );
        }
    };
}

/* ============================================================================
   ALFAMTS - MOTOR PRINCIPAL (app.js - PARTE 3 DE 3: SEÇÕES 14 A 19)
   RESPOSTAS • TRAVA DO DOCK • TELEMETRIA CLÍNICA (JANELA RECENTE) • ESTÚDIO A4
   ============================================================================ */

/* ============================================================================
   14. RESPOSTAS, LOG GRANULAR (itemsLog), PRÉ-TESTE, CICLO 0 ISOLADO E UNDO
   ============================================================================ */
function generateComparisons(target) {
    const desiredCount = getEffectiveOptsForCurrentSession();
    const cleanTarget = getNormalizedWordKey(target);
    let opts = [target];
    let available = session.pool.filter(x => getNormalizedWordKey(x) !== cleanTarget);
    available = shuffleArray(available);
    while (opts.length < desiredCount) {
        if (available.length > 0) opts.push(available.pop());
        else {
            const fallback = ['BA','CA','DA','FA','LA','MA','PA','SA','BOLA','GATO'].filter(x => !opts.includes(x));
            opts.push(fallback[Math.floor(Math.random() * fallback.length)] || 'TA');
        }
    }
    return shuffleArray(opts);
}

function extractStimulusKeysFromTrial(trialVal) {
    if (trialVal === undefined || trialVal === null) return [];
    if (Array.isArray(trialVal)) {
        return trialVal.map(it => getNormalizedWordKey(typeof it === 'object' ? (it.target || it.word || it.letter || '') : it)).filter(Boolean);
    }
    if (typeof trialVal === 'object') {
        if (Array.isArray(trialVal.words)) {
            return trialVal.words.map(w => getNormalizedWordKey(w)).filter(Boolean);
        }
        const raw = trialVal.target || trialVal.word || trialVal.letter || trialVal.shortSpoken || '';
        const k = getNormalizedWordKey(raw);
        return k ? [k] : [];
    }
    const str = String(trialVal).trim();
    if (!str) return [];
    if (str.includes(' ')) {
        const tokens = str.replace(/[.!?,;:\/]/g, '').split(/\s+/).map(w => getNormalizedWordKey(w)).filter(Boolean);
        const bankMatches = tokens.filter(w => typeof WORD_BANK !== 'undefined' && WORD_BANK[w]);
        return bankMatches.length > 0 ? bankMatches : [getNormalizedWordKey(str)];
    }
    const clean = getNormalizedWordKey(str);
    return clean ? [clean] : [];
}

function logCurrentTrialOutcome(outcomeCode) {
    if (session.isRepeating) return;
    if (!Array.isArray(session.itemsLog)) session.itemsLog = [];
    const curTrial = session.trials[session.currentTrialIdx];
    const keys = extractStimulusKeysFromTrial(curTrial);
    const isProbeFlag = !!(session.isProbeMode || session.isPreTestChain || session.isFastTrackEntryProbe || session.isPhonemeCheckpoint);
    const cyc = (session.currentCycle !== undefined && session.currentCycle !== null) ? session.currentCycle : 1;

    keys.forEach(itemKey => {
        session.itemsLog.push({
            item: itemKey,
            cycle: cyc,
            outcome: outcomeCode,
            isProbe: isProbeFlag
        });
    });
}

function saveUndoSnapshot() {
    undoSnapshot = JSON.parse(JSON.stringify({
        currentTrialIdx: session.currentTrialIdx,
        currentCycleIdx: session.currentCycleIdx,
        currentCycle: session.currentCycle,
        currentRenderedOptions: session.currentRenderedOptions,
        stats: session.stats,
        latencies: session.latencies,
        preTestErrorsCount: session.preTestErrorsCount || 0,
        itemsLogLength: Array.isArray(session.itemsLog) ? session.itemsLog.length : 0
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
    session.preTestErrorsCount = undoSnapshot.preTestErrorsCount || 0;
    if (Array.isArray(session.itemsLog) && typeof undoSnapshot.itemsLogLength === 'number') {
        session.itemsLog = session.itemsLog.slice(0, undoSnapshot.itemsLogLength);
    }
    const restoredOpts = undoSnapshot.currentRenderedOptions;
    undoSnapshot = null;
    renderTrial(restoredOpts);
}

function getCurrentStatCat() {
    const c = (session.currentCycle !== undefined && session.currentCycle !== null) ? session.currentCycle : 1;
    return `c${c}`;
}

function highlightCurrentTrialStimulusForReview() {
    if (!state.reviewHighlights) state.reviewHighlights = {};
    const cur = session.trials[session.currentTrialIdx];
    const keys = extractStimulusKeysFromTrial(cur);
    keys.forEach(k => {
        if (k) state.reviewHighlights[k] = true;
    });
}

function abortPreTestChainAndSwitchToTraining() {
    const modId = session.phase;
    const failedVar = session.activeVar || 1;
    const prog = getModuleProgress(modId);
    prog.mode = 'TRAIN';
    prog.activeVar = failedVar;
    prog.pendingVar = null;
    saveState();

    const tCfg = getTaskConfig(modId);
    const prevForce = tCfg.forceProbeMode;

    customAlert(
        `Pré-Teste Var ${failedVar} → Iniciando Treino`,
        `A variação ${failedVar} requer ensino assistido. Os itens com erro foram destacados e o Ciclo 1 do Modo Treino será aberto agora.`,
        () => {
            tCfg.forceProbeMode = 'TRAIN';
            repeatLesson();
            tCfg.forceProbeMode = prevForce;
        }
    );
}

function handleAnswer(isCorrect, element) {
    if (blockClicks) return;
    if (isListening) stopMicrophone();
    if (responseTimeoutTimer) { clearTimeout(responseTimeoutTimer); responseTimeoutTimer = null; }
    if (responseCountdownInterval) { clearInterval(responseCountdownInterval); responseCountdownInterval = null; }
    const pill = document.getElementById('latency-countdown-pill');
    if (pill) pill.style.display = 'none';

    const elapsedSec = Number(((Date.now() - trialStartTime) / 1000).toFixed(2));
    const modelCard = document.querySelector('.model-card') || document.querySelector('.model-audio-btn');
    const compArea = document.getElementById('comparisons-area');
    const cat = getCurrentStatCat();
    if (!session.stats[cat]) session.stats[cat] = { indep: 0, dica: 0, erro: 0, total: 1 };

    const isProbeNow = session.isProbeMode || session.isPreTestChain || (session.isStructuredSyllabary && session.currentCycle === 4);

    if (session.isPreTestChain || session.isFastTrackEntryProbe) {
        blockClicks = true;
        if (compArea) compArea.classList.add('locked-pointer');
        saveUndoSnapshot();
        session.latencies.push(elapsedSec);
        playSound('click');

        if (isCorrect) {
            session.preTestErrorsCount = 0;
            if (!session.isRepeating && session.stats[cat]) session.stats[cat].indep++;
            logCurrentTrialOutcome('I');
        } else {
            session.preTestErrorsCount = (session.preTestErrorsCount || 0) + 1;
            highlightCurrentTrialStimulusForReview();
            if (!session.isRepeating && session.stats[cat]) session.stats[cat].erro++;
            logCurrentTrialOutcome('N');
            saveState();

            if (session.preTestErrorsCount >= 3) {
                abortPreTestChainAndSwitchToTraining();
                return;
            }
        }
        advanceTrial();
        return;
    }

    if (isProbeNow) {
        blockClicks = true;
        if (compArea) compArea.classList.add('locked-pointer');
        saveUndoSnapshot();
        session.latencies.push(elapsedSec);
        playSound('click');

        if (!session.isRepeating && session.stats[cat]) {
            if (isCorrect) {
                session.stats[cat].indep++;
                logCurrentTrialOutcome('I');
            } else {
                session.stats[cat].erro++;
                logCurrentTrialOutcome('N');
                if (session.eidosMod && session.eidosMod.subType === 'EQUIV_4STEPS_MM' && session.currentCycle === 3) {
                    session.probeGateFailed = true;
                }
            }
        }
        advanceTrial();
        return;
    }

    if (isCorrect) {
        blockClicks = true;
        if (compArea) compArea.classList.add('locked-pointer');
        saveUndoSnapshot();
        session.latencies.push(elapsedSec);
        playSound('win');
        if (element) element.classList.add('feedback-success');
        if (modelCard) modelCard.classList.add('feedback-success');

        const outcome = session.attemptsOnCurrent === 0 ? 'I' : 'D';
        if (!session.isRepeating && session.stats[cat]) {
            if (outcome === 'I') session.stats[cat].indep++;
            else session.stats[cat].dica++;
        }
        logCurrentTrialOutcome(outcome);
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
            if (!session.isRepeating && session.stats[cat]) session.stats[cat].erro++;
            logCurrentTrialOutcome('N');
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
    if (responseCountdownInterval) { clearInterval(responseCountdownInterval); responseCountdownInterval = null; }
    const pill = document.getElementById('latency-countdown-pill');
    if (pill) pill.style.display = 'none';
    saveUndoSnapshot();

    const elapsedSec = Number(((Date.now() - trialStartTime) / 1000).toFixed(2));
    session.latencies.push(elapsedSec);
    const cat = getCurrentStatCat();
    if (!session.stats[cat]) session.stats[cat] = { indep: 0, dica: 0, erro: 0, total: 1 };

    if (session.eidosMod && session.eidosMod.subType === 'SPRINT_3S' && code === 'I' && elapsedSec > 3.0) {
        code = 'D';
    }

    if (session.eidosMod && session.eidosMod.subType === 'PHON_MODELING') {
        const curTrial = session.trials[session.currentTrialIdx] || {};
        const letter = curTrial.letter || session.eidosMod.letter || 'A';
        const varIdx = curTrial.varIdx || session.eidosMod.varIdx || '1';

        if (!state.phonemeMastery) state.phonemeMastery = {};

        if (session.currentCycle === 0) {
            if (code === 'I') {
                playSound('win');
                state.phonemeMastery[session.phase] = 'RETIDO_SEM_MODELO';

                if (session.stats.c1) session.stats.c1.total = 0;
                if (session.stats.c2) session.stats.c2.total = 0;
                if (session.stats.c3) session.stats.c3.total = 0;

                const jumpIdx = session.activeCycles.findIndex(c => c >= 4);
                if (jumpIdx >= 0) {
                    session.currentCycleIdx = jumpIdx - 1;
                    finishCycle();
                    return;
                } else {
                    session.phonemePreTestMastered = true;
                    checkBlockMastery();
                    return;
                }
            } else {
                playSound('click');
                state.phonemeMastery[session.phase] = 'EM_MODELAGEM';
                finishCycle();
                return;
            }
        }

        if ((session.currentCycle === 3 || session.currentCycle === 4) && code !== 'I' && session.attemptsOnCurrent === 0) {
            session.attemptsOnCurrent++;
            playSound('click');
            state.phonemeMastery[session.phase] = 'DOMINADO_COM_MODELO';
            showPhonemeCorrectivePopup(letter, varIdx, () => {
                blockClicks = false;
                renderTrial();
            });
            return;
        }

        if (code === 'I') {
            if (session.currentCycle === 5) state.phonemeMastery[session.phase] = 'FUNDIDO_EM_SILABAS';
            else if (session.currentCycle >= 3) state.phonemeMastery[session.phase] = 'RETIDO_SEM_MODELO';
            else state.phonemeMastery[session.phase] = 'DOMINADO_COM_MODELO';
        }
    }

    if (session.isPreTestChain || session.isFastTrackEntryProbe) {
        if (code === 'I') {
            playSound('click');
            session.preTestErrorsCount = 0;
            if (!session.isRepeating && session.stats[cat]) session.stats[cat].indep++;
            logCurrentTrialOutcome('I');
        } else {
            playSound('click');
            session.preTestErrorsCount = (session.preTestErrorsCount || 0) + 1;
            highlightCurrentTrialStimulusForReview();
            if (!session.isRepeating && session.stats[cat]) {
                if (code === 'D') session.stats[cat].dica++;
                else session.stats[cat].erro++;
            }
            logCurrentTrialOutcome(code === 'D' ? 'D' : 'N');
            saveState();

            if (session.preTestErrorsCount >= 3) {
                abortPreTestChainAndSwitchToTraining();
                return;
            }
        }
        advanceTrial();
        return;
    }

    if (!session.isRepeating && session.stats[cat]) {
        if (code === 'I') {
            playSound(session.isProbeMode ? 'click' : 'win');
            session.stats[cat].indep++;
            logCurrentTrialOutcome('I');
        } else if (code === 'D') {
            playSound('click');
            session.stats[cat].dica++;
            logCurrentTrialOutcome('D');
            if (session.isProbeMode && session.eidosMod && session.eidosMod.subType === 'EQUIV_4STEPS_MM' && session.currentCycle === 3) {
                session.probeGateFailed = true;
            }
        } else {
            playSound('click');
            session.stats[cat].erro++;
            logCurrentTrialOutcome('N');
            if (session.isProbeMode && session.eidosMod && session.eidosMod.subType === 'EQUIV_4STEPS_MM' && session.currentCycle === 3) {
                session.probeGateFailed = true;
            }
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

/* TRAVA DE SEGURANÇA NO DOCK DO APLICADOR (SEGURAR 200ms + ARRASTAR 20px PARA BAIXO) */
function syncDockSafetyLockVisual() {
    const dock = document.getElementById('aba-dock');
    if (!dock) return;
    const isLocked = !!(state && state.settings && state.settings.dockSafetyLock);
    dock.classList.toggle('dock-locked-mode', isLocked);
    const lbl = dock.querySelector('.dock-label');
    if (lbl) {
        lbl.innerText = isLocked ? 'Segure e puxe para baixo' : 'Registro do Aplicador';
    }
}

function setupDockSafetyLock() {
    const dock = document.getElementById('aba-dock');
    if (!dock) return;

    const mapActionFromBtn = (btn) => {
        if (btn.id === 'btn-dock-undo' || btn.classList.contains('undo')) return 'UNDO';
        if (btn.classList.contains('erro')) return 'N';
        if (btn.classList.contains('dica')) return 'D';
        if (btn.classList.contains('indep')) return 'I';
        return '';
    };

    const runDockAction = (actionCode) => {
        if (actionCode === 'UNDO') undoLastTrial();
        else if (['I', 'D', 'N'].includes(actionCode)) recordMediatedTrial(actionCode);
    };

    dock.querySelectorAll('.btn-aba').forEach(btn => {
        if (btn.dataset.dockBound === 'true') return;
        const actionCode = mapActionFromBtn(btn);
        if (!actionCode) return;

        btn.removeAttribute('onclick');
        btn.dataset.dockBound = 'true';
        btn.dataset.dockAction = actionCode;

        let holdTimer = null;
        let armed = false;
        let triggered = false;
        let startX = 0;
        let startY = 0;

        const resetGesture = () => {
            if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
            armed = false;
            btn.classList.remove('dock-btn-armed');
            btn.style.transition = 'transform 0.16s ease';
            btn.style.transform = '';
        };

        btn.addEventListener('click', (e) => {
            if (state && state.settings && state.settings.dockSafetyLock) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            runDockAction(actionCode);
        });

        btn.addEventListener('pointerdown', (e) => {
            if (!state || !state.settings || !state.settings.dockSafetyLock) return;
            if (blockClicks) return;
            triggered = false;
            armed = false;
            startX = e.clientX;
            startY = e.clientY;
            btn.style.transition = 'none';
            if (btn.setPointerCapture) {
                try { btn.setPointerCapture(e.pointerId); } catch (err) {}
            }
            holdTimer = setTimeout(() => {
                armed = true;
                btn.classList.add('dock-btn-armed');
            }, 200);
        });

        btn.addEventListener('pointermove', (e) => {
            if (!state || !state.settings || !state.settings.dockSafetyLock) return;
            if (triggered) return;

            const dx = Math.abs(e.clientX - startX);
            const dy = e.clientY - startY;

            if (!armed) {
                if (holdTimer && Math.hypot(dx, dy) > 14) {
                    resetGesture();
                }
                return;
            }

            const clampedY = Math.max(0, Math.min(28, dy));
            btn.style.transform = `translateY(${clampedY}px)`;

            if (dy >= 20) {
                triggered = true;
                resetGesture();
                runDockAction(actionCode);
            }
        });

        btn.addEventListener('pointerup', resetGesture);
        btn.addEventListener('pointercancel', resetGesture);
    });

    syncDockSafetyLockVisual();
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
        if (fb) fb.innerText = transcript;
    };
    rec.onerror = function() {
        isListening = false;
        let btn = document.getElementById('mic-btn');
        if (btn) btn.classList.remove('listening');
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
    const ghostInput = document.getElementById('ghost-stt');
    if (btn) btn.classList.add('listening');
    if (ghostInput) ghostInput.value = "";
    playSound('click');
    if (window.AppInventor) {
        window.AppInventor.setWebViewString("Ouvir_Mic");
    } else {
        sttRecognition = initSpeechRecognition();
        if (sttRecognition) {
            try { sttRecognition.start(); } catch(err) {}
        }
    }
}

function stopMicrophone() {
    if (!isListening) return;
    isListening = false;
    const btn = document.getElementById('mic-btn');
    if (btn) btn.classList.remove('listening');
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
    const rawTarget = session.trials[session.currentTrialIdx];
    const cleanTarget = getNormalizedWordKey(rawTarget);

    if (!transcript || transcript.trim() === "") return;

    let currentSpeech = removeAccents(transcript);
    let expectedTarget = session.isPreReq ? getCategory(cleanTarget) : cleanTarget;
    let targetClean = removeAccents(expectedTarget);
    let acceptedTerms = [targetClean];

    if (!session.isPreReq && phoneticsMap[targetClean]) acceptedTerms = acceptedTerms.concat(phoneticsMap[targetClean]);
    if (session.isPreReq && preReqTerms[targetClean]) acceptedTerms = acceptedTerms.concat(preReqTerms[targetClean]);

    const regexStr = '(^|\\s)(' + acceptedTerms.join('|') + ')($|\\s)';
    const regex = new RegExp(regexStr);

    if (regex.test(currentSpeech)) {
        blockClicks = false;
        setTimeout(() => { handleAnswer(true, null); }, 350);
    } else {
        session.attemptsOnCurrent++;
        const cat = getCurrentStatCat();
        if (session.isProbeMode || session.isPreTestChain || session.attemptsOnCurrent >= 2) {
            logCurrentTrialOutcome('N');
            if (session.isPreTestChain) {
                session.preTestErrorsCount = (session.preTestErrorsCount || 0) + 1;
                highlightCurrentTrialStimulusForReview();
                saveState();
                if (session.preTestErrorsCount >= 3) {
                    abortPreTestChainAndSwitchToTraining();
                    return;
                }
            }
            if (!session.isRepeating && session.stats[cat]) session.stats[cat].erro++;
            advanceTrial();
        }
    }
}
window.receberTextoDoKodular = function(transcript) { processSpeech(transcript); };

/* ============================================================================
   16. FECHAMENTO DE CICLO, ENCADEAMENTO VAR 1 -> VAR N E MAESTRIA ESTRITA
   ============================================================================ */
function finishCycle() {
    if (session.isPhonemeCheckpoint && session.phonData && !session.phonData.isRetrainingErrors) {
        const failed = session.phonData.failedPhonemes || [];
        if (failed.length > 0) {
            session.phonData.isRetrainingErrors = true;
            const allPhon = getEffectivePhonologicalModules().filter(m => !m.isCheckpoint);
            const strongDistractor = allPhon.find(m => !failed.some(f => f.id === m.id)) || failed[0];
            session.trials = shuffleArray([...failed, strongDistractor]);
            session.currentTrialIdx = 0;
            renderTrial();
            return;
        }
    }

    if (session.isProbeMode && session.eidosMod && session.eidosMod.subType === 'EQUIV_4STEPS_MM' && session.currentCycle === 3) {
        const c3Stats = session.stats.c3 || { indep: 0, total: 0, erro: 0, dica: 0 };
        if (session.probeGateFailed || c3Stats.erro > 0 || c3Stats.dica > 0 || c3Stats.indep < c3Stats.total) {
            session.probeGateFailed = true;
            if (session.stats.c4) session.stats.c4.total = 0;
            if (session.stats.c5) session.stats.c5.total = 0;
            if (session.stats.c6) session.stats.c6.total = 0;
            checkBlockMastery();
            return;
        }
    }

    session.currentTrialIdx = 0;
    session.currentCycleIdx++;
    if (session.currentCycleIdx >= session.activeCycles.length) {
        checkBlockMastery();
    } else {
        session.currentCycle = session.activeCycles[session.currentCycleIdx];

        if (session.eidosMod && session.eidosMod.subType === 'PHON_MODELING' && session.phonData) {
            session.trials = getPhonemeCycleTrials(
                session.phonData.targetPhoneme,
                session.currentCycle,
                session.phonData.overlearningList
            );
        } else if (session.isStructuredSyllabary && session.sylData) {
            if (session.currentCycle === 1) {
                session.trials = [...session.sylData.syllables];
            } else if (session.currentCycle === 2 || session.currentCycle === 4) {
                session.trials = shuffleArray([...session.sylData.words]);
            } else if (session.currentCycle === 3) {
                const w = shuffleArray([...session.sylData.words]);
                session.trials = [w.slice(0, 3), w.slice(3, 6)].filter(g => g.length > 0);
            }
        } else if (session.isPalavrarioDrawer && !session.isProbeMode && session.sylData) {
            if (session.currentCycle === 2) {
                session.trials = shuffleArray([...session.sylData.words]);
            } else {
                const w = shuffleArray([...session.sylData.words]);
                session.trials = [w.slice(0, 3), w.slice(3, 6)].filter(g => g.length > 0);
            }
        }
        renderTrial();
    }
}

function checkBlockMastery() {
    clearAllTrialTimers();

    const s = session.stats;
    const c6 = s.c6 || { indep: 0, dica: 0, erro: 0, total: 0 };
    const totalTrials = s.c1.total + s.c2.total + s.c3.total + s.c4.total + s.c5.total + c6.total;
    const totalIndep = s.c1.indep + s.c2.indep + s.c3.indep + s.c4.indep + s.c5.indep + c6.indep;
    const totalDica = s.c1.dica + s.c2.dica + s.c3.dica + s.c4.dica + s.c5.dica + c6.dica;
    const totalErro = s.c1.erro + s.c2.erro + s.c3.erro + s.c4.erro + s.c5.erro + c6.erro;

    let accuracy = totalTrials > 0 ? Math.round((totalIndep / totalTrials) * 100) : 0;
    if (session.phonemePreTestMastered && totalTrials === 0) {
        accuracy = 100;
    }

    const avgLatency = session.latencies.length > 0
        ? Number((session.latencies.reduce((a, b) => a + b, 0) / session.latencies.length).toFixed(2))
        : 0;

    let prog = getModuleProgress(session.phase);
    const usedVar = session.activeVar || 1;
    const hasExplicitVariations = getModuleVariationsMap(session.phase) !== null;
    const availVars = getAvailableVariationKeys(session.phase);
    const isProbeSession = !!(session.isProbeMode || session.isPreTestChain || session.isFastTrackEntryProbe || session.isPhonemeCheckpoint || session.phonemePreTestMastered);

    if (!session.isRepeating) {
        if (session.isPreTestChain || session.isFastTrackEntryProbe) {
            if (accuracy === 100 && !session.probeGateFailed) {
                if (!prog.preTestCompletedVars.includes(usedVar)) {
                    prog.preTestCompletedVars.push(usedVar);
                }
                const curVarIdx = availVars.indexOf(usedVar);
                const nextVar = (hasExplicitVariations && curVarIdx >= 0 && curVarIdx < availVars.length - 1) ? availVars[curVarIdx + 1] : null;

                if (nextVar !== null && !String(session.phase).startsWith('FA_')) {
                    prog.activeVar = nextVar;
                    saveState();
                    playSound('win');
                    startFastTrackEntryProbe(session.phase, nextVar);
                    return;
                }

                prog.streak = state.settings.consecDays || 2;
                prog.status = 'mastered';
                prog.mode = 'PROBE';
                prog.bestAcc = 100;
                prog.lastDate = new Date().toLocaleDateString('pt-BR');
                if (!state.manualProgressionOverride) unlockNextInSequence(session.phase);
                saveState();
            } else {
                abortPreTestChainAndSwitchToTraining();
                return;
            }
        } else if (session.phonemePreTestMastered) {
            prog.streak = state.settings.consecDays || 2;
            prog.status = 'mastered';
            prog.bestAcc = 100;
            prog.lastDate = new Date().toLocaleDateString('pt-BR');
            saveState();
        } else {
            prog = registerMasteryAttempt(session.phase, accuracy, avgLatency, session.probeGateFailed);

            if (session.isPhonemeCheckpoint && accuracy === 100 && !session.probeGateFailed && session.phonData && session.phonData.setObj) {
                const curSet = session.phonData.setObj;
                curSet.members.forEach(mId => {
                    const mp = getModuleProgress(mId);
                    mp.status = 'mastered';
                    if (!state.unlocked.includes(mId)) state.unlocked.push(mId);
                });
                const nextSet = getPhonemeSetsCatalog().find(st => st.setNum === curSet.setNum + 1);
                if (nextSet) {
                    if (!state.unlocked.includes(nextSet.id)) state.unlocked.push(nextSet.id);
                    nextSet.members.forEach(mId => {
                        if (!state.unlocked.includes(mId)) state.unlocked.push(mId);
                    });
                }
                saveState();
            }
        }

        const gearUsed = session.activeGear || (ALL_SYLLABARY_KEYS.includes(session.phase) ? getActiveSyllabaryGearId() : null);
        const gearLabelTag = gearUsed ? ` (${getEffectiveSyllabaryGears()[gearUsed]?.shortLabel || gearUsed})` : '';
        const modTitle = session.eidosMod ? `${session.eidosMod.code} ${session.eidosMod.title}` : `${session.phase}${gearLabelTag}`;
        const modeTag = (session.isPreTestChain || session.isFastTrackEntryProbe || session.phonemePreTestMastered)
            ? ' [PRÉ-TESTE]'
            : (session.isProbeMode ? ' [SONDA]' : ' [TREINO]');
        const dataObj = {
            n: state.student || "ALUNO",
            d: new Date().toLocaleDateString('pt-BR'),
            h: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            tipo: session.eidosMod ? session.eidosMod.engine : (session.isPreReq ? "PRE_REQUISITO" : "SILABARIO"),
            modId: session.phase,
            modLabel: modTitle,
            gear: gearUsed,
            eidosCode: session.eidosMod ? session.eidosMod.code : null,
            fase: modTitle + modeTag,
            isProbe: isProbeSession,
            itemsLog: Array.isArray(session.itemsLog) ? [...session.itemsLog] : [],
            variacao: usedVar,
            nv: session.eidosMod ? session.eidosMod.level : "SILABARIO",
            crit: state.settings.crit,
            acc: accuracy,
            lat: avgLatency,
            streak: `${prog.streak}/${state.settings.consecDays}`,
            status: prog.revertedToTrain
                ? 'Retorno ao Treino'
                : (prog.status === 'mastered' ? 'Consolidado' : (accuracy >= state.settings.crit ? 'Meta Atingida' : 'Em Treino')),
            resumoABA: { I: totalIndep, D: totalDica, N: totalErro, T: totalTrials },
            ciclos: session.stats
        };
        state.log.push(dataObj);
        saveState();
    }

    showResultModal(accuracy >= state.settings.crit && !session.probeGateFailed, accuracy, avgLatency, prog);
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
    const targetDays = state.settings.consecDays || 2;

    if (session.isPhonemeCheckpoint && session.probeGateFailed) {
        const failedNames = (session.phonData && session.phonData.failedPhonemes)
            ? session.phonData.failedPhonemes.map(f => f.letter).join(', ')
            : '';
        iconBox.innerHTML = `<div style="background:var(--warning-light); padding:18px; border-radius:50%; display:inline-flex;">${UI_SVGS.target}</div>`;
        title.innerText = "Fonemas Marcados para Reforço";
        desc.innerText = `Sons que precisam de consolidação antes de avançar: ${failedNames}`;
    } else if (prog.revertedToTrain) {
        iconBox.innerHTML = `<div style="background:var(--warning-light); padding:18px; border-radius:50%; display:inline-flex;">${UI_SVGS.target}</div>`;
        title.innerText = "Retorno ao Modo Treino";
        desc.innerText = session.probeGateFailed
            ? `A relação de entrada (B → C) exigia 100% na sonda. Sondagem interrompida para reensino.`
            : `Desempenho na sondagem (${accuracy}%) abaixo da meta (${state.settings.crit}%).`;
    } else if (isSuccess) {
        iconBox.innerHTML = `<div style="background:var(--success-light); padding:18px; border-radius:50%; display:inline-flex;">${UI_SVGS.trophy}</div>`;
        title.innerText = (session.isPreTestChain || session.isFastTrackEntryProbe || session.phonemePreTestMastered)
            ? "Consolidado por Pré-Teste!"
            : (prog.promotedToProbe ? "Sondagem Liberada!" : (prog.status === 'mastered' ? "Habilidade Consolidada!" : "Meta do Dia Atingida!"));
        desc.innerText = `Precisão Independente: ${accuracy}% | Latência Média: ${avgLatency}s`;
    } else {
        iconBox.innerHTML = `<div style="background:var(--warning-light); padding:18px; border-radius:50%; display:inline-flex;">${UI_SVGS.target}</div>`;
        title.innerText = "Continue Praticando";
        desc.innerText = `Precisão Independente: ${accuracy}% (Meta: ${state.settings.crit}%)`;
    }

    const earnedNow = (isSuccess && prog.lastEarnedTokens > 0)
        ? `<div style="margin-top:8px; color:#92400E; background:#FEF3C7; padding:6px 14px; border-radius:999px; display:inline-flex; align-items:center; gap:6px; font-weight:900;">${UI_SVGS.coin} +${prog.lastEarnedTokens} Ficha(s) Ganha(s)!</div>`
        : '';

    const probeStatusInfo = prog.revertedToTrain
        ? `<div style="margin-top:6px; color:var(--danger); font-size:0.88rem;">O módulo retornou automaticamente para o Modo Treino para consolidação.</div>`
        : (prog.promotedToProbe ? `<div style="margin-top:6px; color:#6D28D9; font-size:0.88rem;">Próxima sessão neste módulo executará a Sondagem sem dicas.</div>` : '');

    const nextVarInfo = (!state.settings.strictDay && isSuccess)
        ? ` | Próxima repetição: Variação ${prog.activeVar}`
        : (state.settings.strictDay && prog.pendingVar ? ` | Revisão agendada para amanhã (Var ${prog.pendingVar})` : '');

    banner.innerHTML = (prog.status === 'mastered'
        ? `<div>Critério de ${targetDays}/${targetDays} concluído!${nextVarInfo}</div>`
        : `<div>Retenção Multi-Dias: <strong>${prog.streak} de ${targetDays}</strong>${nextVarInfo}</div>`) + probeStatusInfo + earnedNow;

    const immEnabled = isSuccess && state.tokens && state.tokens.rules && state.tokens.rules.enableImmediateMiniReward;
    const immSec = (state.tokens && state.tokens.rules && state.tokens.rules.immediateMiniRewardDurationSec) || 20;

    actions.innerHTML = `
        <button type="button" class="btn-action btn-cancel" style="flex:1;" onclick="closeResult(); openGrid()">
            ${UI_SVGS.grid} Atividades
        </button>
        <button type="button" class="btn-action" style="flex:1; background:var(--primary-dark);" onclick="closeResult(); repeatLesson()">
            ${UI_SVGS.replay} Jogar Novamente
        </button>
        ${immEnabled ? `<button type="button" class="btn-action" style="width:100%; background:var(--success);" onclick="closeResult(); openGrid(); redeemArcadeGame('baloes', true, ${immSec})">Abrir Jogo de Reforço (${immSec}s)</button>` : ''}
    `;
    document.getElementById('modal-result').style.display = 'flex';
}

function closeResult() {
    document.getElementById('modal-result').style.display = 'none';
}

function repeatLesson() {
    if (String(session.phase).startsWith('FA_')) {
        startPhonologicalModelingModule(session.phase);
    } else if (String(session.phase).startsWith('CUST_')) {
        startCustomStudioModule(session.phase);
    } else if (String(session.phase).startsWith('PAL_')) {
        startPalavrarioDrawer(session.phase);
    } else if (session.eidosMod) {
        startEidosModule(session.phase);
    } else {
        startStructuredSyllabary(session.phase);
    }
}


/* ============================================================================
   17. TELEMETRIA (3 ABAS), REPERTÓRIO LEXICAL (JANELA RECENTE) E PDF FILTRADO
   ============================================================================ */
let telemetryActiveTab = 'DTT';       // 'DTT' | 'LEXICAL' | 'HISTORY'
let telemetryDttMode = 'TRAIN';       // 'TRAIN' | 'PROBE'
let telemetrySelectedTaskId = '';
let telemetryLexSort = 'APPEARANCE';  // 'APPEARANCE' | 'ACC_DESC' | 'ERR_DESC'

function normalizeLogEntryForTelemetry(entry) {
    if (!entry || typeof entry !== 'object') return null;
    const rawFase = String(entry.fase || entry.modId || 'Atividade');
    const cleanLabel = entry.modLabel
        ? String(entry.modLabel)
        : rawFase.replace(/\s*\[(TREINO|SONDA|SONDA ENTRADA|PRÉ-TESTE)\]\s*/gi, '').trim();

    let isProbe = false;
    if (typeof entry.isProbe === 'boolean') {
        isProbe = entry.isProbe;
    } else {
        isProbe = /\[(SONDA|SONDA ENTRADA|PRÉ-TESTE)\]|CHECK-POINT/i.test(rawFase) || String(entry.modId || '').startsWith('FA_CHK_');
    }

    const r = entry.resumoABA || { I: 0, D: 0, N: 0, T: 0 };
    const total = r.T || (r.I + r.D + r.N) || 0;
    const itemsLog = Array.isArray(entry.itemsLog) ? entry.itemsLog : [];
    const taskKey = entry.gear ? `${entry.modId}__${entry.gear}` : (entry.modId || cleanLabel);

    return {
        ...entry,
        taskKey,
        modId: entry.modId || cleanLabel,
        modLabel: cleanLabel,
        gear: entry.gear || null,
        isProbe,
        itemsLog,
        resumoABA: { I: r.I || 0, D: r.D || 0, N: r.N || 0, T: total }
    };
}

function getNormalizedTelemetryLogs() {
    return (state.log || []).map(normalizeLogEntryForTelemetry).filter(Boolean);
}

function switchTelemetryTab(tabKey) {
    playSound('click');
    telemetryActiveTab = tabKey;
    ['DTT', 'LEXICAL', 'HISTORY'].forEach(t => {
        const btn = document.getElementById(`tel-tab-btn-${t.toLowerCase()}`);
        const pane = document.getElementById(`tel-pane-${t.toLowerCase()}`);
        if (btn) btn.classList.toggle('active', tabKey === t);
        if (pane) pane.style.display = (tabKey === t) ? 'block' : 'none';
    });

    if (tabKey === 'DTT') renderTelemetryDttView();
    else if (tabKey === 'LEXICAL') renderTelemetryLexicalView();
    else renderTelemetryHistoryView();
}

function setTelemetryDttMode(mode) {
    playSound('click');
    telemetryDttMode = (mode === 'PROBE') ? 'PROBE' : 'TRAIN';
    const bTrain = document.getElementById('tel-mode-train');
    const bProbe = document.getElementById('tel-mode-probe');
    if (bTrain) bTrain.classList.toggle('active', telemetryDttMode === 'TRAIN');
    if (bProbe) bProbe.classList.toggle('active', telemetryDttMode === 'PROBE');
    renderTelemetryDttView();
}

function onTelemetryTaskSelectChange(taskKey) {
    telemetrySelectedTaskId = taskKey;
    renderTelemetryDttView();
}

function onTelemetryLexSortChange(sortKey) {
    telemetryLexSort = sortKey || 'APPEARANCE';
    renderTelemetryLexicalView();
}

function renderDashboard() {
    const logs = getNormalizedTelemetryLogs();
    const taskSel = document.getElementById('tel-task-select');

    if (taskSel) {
        const taskMap = new Map();
        logs.forEach(l => {
            if (!taskMap.has(l.taskKey)) {
                taskMap.set(l.taskKey, l.modLabel);
            }
        });

        taskSel.innerHTML = '';
        if (taskMap.size === 0) {
            const opt = document.createElement('option');
            opt.value = '';
            opt.innerText = 'Nenhuma tarefa registrada ainda';
            taskSel.appendChild(opt);
            telemetrySelectedTaskId = '';
        } else {
            taskMap.forEach((label, id) => {
                const opt = document.createElement('option');
                opt.value = id;
                opt.innerText = label;
                taskSel.appendChild(opt);
            });
            if (!telemetrySelectedTaskId || !taskMap.has(telemetrySelectedTaskId)) {
                telemetrySelectedTaskId = logs[logs.length - 1].taskKey;
            }
            taskSel.value = telemetrySelectedTaskId;
        }
    }

    const bTrain = document.getElementById('tel-mode-train');
    const bProbe = document.getElementById('tel-mode-probe');
    if (bTrain) bTrain.classList.toggle('active', telemetryDttMode === 'TRAIN');
    if (bProbe) bProbe.classList.toggle('active', telemetryDttMode === 'PROBE');

    switchTelemetryTab(telemetryActiveTab || 'DTT');
}

/* ABA 1: POR TAREFA (DTT) — DATAS NAS COLUNAS DA ESQUERDA PARA A DIREITA */
function renderTelemetryDttView() {
    const tableWrap = document.getElementById('tel-dtt-table-wrap');
    const critLabel = document.getElementById('chart-crit-label');
    if (critLabel) critLabel.innerText = `--- Meta: ${state.settings.crit}%`;
    if (!tableWrap) return;

    const logs = getNormalizedTelemetryLogs();
    const wantProbe = (telemetryDttMode === 'PROBE');
    const filtered = logs.filter(l => l.taskKey === telemetrySelectedTaskId && l.isProbe === wantProbe);

    if (!telemetrySelectedTaskId || filtered.length === 0) {
        tableWrap.innerHTML = `
            <div style="text-align:center; padding:34px 16px; color:var(--text-light); font-weight:800; font-size:0.92rem;">
                Nenhum registro de <strong>${wantProbe ? 'Sondagem' : 'Treino'}</strong> para esta tarefa ainda.
            </div>
        `;
        drawProgressChart([]);
        return;
    }

    const pct = (part, tot) => (tot > 0 ? Math.round((part / tot) * 100) : 0);

    const colHeadersHTML = filtered.map((e, idx) => `
        <th class="dtt-date-col">
            <div style="font-size:0.78rem; font-weight:900; color:var(--text);">${e.d}</div>
            <div style="font-size:0.68rem; font-weight:700; color:var(--text-light);">S${idx + 1} ${e.h || ''}</div>
        </th>
    `).join('');

    let rowsHTML = '';
    if (!wantProbe) {
        rowsHTML = `
            <tr>
                <th class="dtt-metric-sticky">Var</th>
                ${filtered.map(e => `<td>Var ${e.variacao || 1}</td>`).join('')}
            </tr>
            <tr>
                <th class="dtt-metric-sticky">Tentativas</th>
                ${filtered.map(e => `<td><strong>${e.resumoABA.T}</strong></td>`).join('')}
            </tr>
            <tr>
                <th class="dtt-metric-sticky" style="color:var(--success);">Indep. (I)</th>
                ${filtered.map(e => `<td style="color:#065F46; font-weight:800;">${e.resumoABA.I} (${pct(e.resumoABA.I, e.resumoABA.T)}%)</td>`).join('')}
            </tr>
            <tr>
                <th class="dtt-metric-sticky" style="color:#B45309;">Dica (D)</th>
                ${filtered.map(e => `<td style="color:#B45309; font-weight:800;">${e.resumoABA.D} (${pct(e.resumoABA.D, e.resumoABA.T)}%)</td>`).join('')}
            </tr>
            <tr>
                <th class="dtt-metric-sticky" style="color:var(--danger);">Erro (N)</th>
                ${filtered.map(e => `<td style="color:#B91C1C; font-weight:800;">${e.resumoABA.N} (${pct(e.resumoABA.N, e.resumoABA.T)}%)</td>`).join('')}
            </tr>
            <tr>
                <th class="dtt-metric-sticky">Status</th>
                ${filtered.map(e => {
                    const ok = e.acc >= (e.crit || state.settings.crit);
                    return `<td><span class="tel-status-pill ${ok ? 'ok' : 'warn'}">${e.status || (ok ? 'Meta Atingida' : 'Em Treino')}</span></td>`;
                }).join('')}
            </tr>
        `;
    } else {
        rowsHTML = `
            <tr>
                <th class="dtt-metric-sticky">Var</th>
                ${filtered.map(e => `<td>Var ${e.variacao || 1}</td>`).join('')}
            </tr>
            <tr>
                <th class="dtt-metric-sticky">Tentativas</th>
                ${filtered.map(e => `<td><strong>${e.resumoABA.T}</strong></td>`).join('')}
            </tr>
            <tr>
                <th class="dtt-metric-sticky" style="color:var(--success);">Acerto (I)</th>
                ${filtered.map(e => `<td style="color:#065F46; font-weight:800;">${e.resumoABA.I}</td>`).join('')}
            </tr>
            <tr>
                <th class="dtt-metric-sticky" style="color:var(--danger);">Erro (N)</th>
                ${filtered.map(e => `<td style="color:#B91C1C; font-weight:800;">${e.resumoABA.N}</td>`).join('')}
            </tr>
            <tr>
                <th class="dtt-metric-sticky">Precisão (%)</th>
                ${filtered.map(e => `<td><strong>${e.acc}%</strong></td>`).join('')}
            </tr>
            <tr>
                <th class="dtt-metric-sticky">Resultado</th>
                ${filtered.map(e => {
                    const isRev = (e.status === 'Retorno ao Treino');
                    const isPass = !isRev && e.acc >= (e.crit || state.settings.crit);
                    const label = isRev ? 'Retorno ao Treino' : (isPass ? 'Aprovado' : 'Reprovado');
                    return `<td><span class="tel-status-pill ${isPass ? 'ok' : 'err'}">${label}</span></td>`;
                }).join('')}
            </tr>
        `;
    }

    tableWrap.innerHTML = `
        <div class="dtt-table-scroll">
            <table class="dtt-matrix-table">
                <thead>
                    <tr>
                        <th class="dtt-metric-sticky">Data / Sessão</th>
                        ${colHeadersHTML}
                    </tr>
                </thead>
                <tbody>
                    ${rowsHTML}
                </tbody>
            </table>
        </div>
    `;

    drawProgressChart(filtered);
}

/* ABA 2: REPERTÓRIO LEXICAL — JANELA RECENTE (ÚLTIMAS 5) + MÍNIMO DE 3 EXPOSIÇÕES */
function buildLexicalTelemetryMap() {
    const logs = getNormalizedTelemetryLogs();
    const wordStats = new Map();
    let appearanceCounter = 0;

    logs.forEach(entry => {
        (entry.itemsLog || []).forEach(rec => {
            const key = getNormalizedWordKey(rec.item);
            if (!key || typeof WORD_BANK === 'undefined' || !WORD_BANK[key]) return;
            if (!wordStats.has(key)) {
                wordStats.set(key, {
                    word: key,
                    firstOrder: appearanceCounter++,
                    total: 0,
                    I: 0,
                    D: 0,
                    N: 0,
                    history: []
                });
            }
            const st = wordStats.get(key);
            st.total++;
            if (rec.outcome === 'I') st.I++;
            else if (rec.outcome === 'D') st.D++;
            else st.N++;

            st.history.push({
                date: entry.d,
                hour: entry.h || '',
                task: entry.modLabel,
                cycle: rec.cycle || 1,
                outcome: rec.outcome,
                isProbe: !!rec.isProbe
            });
        });
    });

    return wordStats;
}

function evaluateLexicalClinicalStatus(item) {
    const crit = state.settings.crit || 90;
    const recentWindow = item.history.slice(-5);
    const recentI = recentWindow.filter(h => h.outcome === 'I').length;
    const recentAcc = recentWindow.length > 0 ? Math.round((recentI / recentWindow.length) * 100) : 0;

    const last3 = item.history.slice(-3);
    const has3ConsecI = (last3.length === 3 && last3.every(h => h.outcome === 'I'));

    if (item.total >= 3 && (recentAcc >= crit || has3ConsecI)) {
        return { acc: recentAcc, statusClass: 'status-mastered', statusText: 'Consolidada' };
    }
    if (item.total < 3) {
        if (recentAcc < 50 && item.N >= 2) {
            return { acc: recentAcc, statusClass: 'status-attention', statusText: 'Atenção' };
        }
        return { acc: recentAcc, statusClass: 'status-learning', statusText: 'Em Aquisição' };
    }
    if (recentAcc < 60) {
        return { acc: recentAcc, statusClass: 'status-attention', statusText: 'Atenção' };
    }
    return { acc: recentAcc, statusClass: 'status-learning', statusText: 'Em Aquisição' };
}

function getSortedLexicalList() {
    const map = buildLexicalTelemetryMap();
    const list = Array.from(map.values()).map(item => {
        const evalRes = evaluateLexicalClinicalStatus(item);
        return {
            ...item,
            acc: evalRes.acc,
            statusClass: evalRes.statusClass,
            statusText: evalRes.statusText
        };
    });

    if (telemetryLexSort === 'ACC_DESC') {
        list.sort((a, b) => (b.acc - a.acc) || (b.total - a.total));
    } else if (telemetryLexSort === 'ERR_DESC') {
        list.sort((a, b) => (b.N - a.N) || (a.acc - b.acc));
    } else {
        list.sort((a, b) => a.firstOrder - b.firstOrder);
    }
    return list;
}

function renderTelemetryLexicalView() {
    const countEl = document.getElementById('tel-lex-count');
    const gridEl = document.getElementById('tel-lexical-grid');
    const sortSel = document.getElementById('tel-lex-sort');
    if (sortSel) sortSel.value = telemetryLexSort;
    if (!gridEl) return;

    const list = getSortedLexicalList();

    if (countEl) {
        countEl.innerText = `${list.length} ${list.length === 1 ? 'palavra trabalhada' : 'palavras trabalhadas'}`;
    }

    if (list.length === 0) {
        gridEl.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:42px 16px; color:var(--text-light); font-weight:800;">Nenhuma palavra do banco lexical foi apresentada ao aluno ainda.</div>`;
        return;
    }

    gridEl.innerHTML = '';

    list.forEach(item => {
        const card = document.createElement('div');
        card.className = `lex-word-card ${item.statusClass}`;
        card.onclick = () => openWordTelemetryModal(item.word);
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; width:100%; gap:8px;">
                <span class="lex-word-title-wrap">
                    <span class="lex-status-dot"></span>
                    <strong class="lex-word-title">${item.word}</strong>
                </span>
                <span class="lex-acc-badge">${item.acc}%</span>
            </div>
            <div class="lex-progress-bar">
                <div class="lex-progress-fill" style="width:${item.acc}%;"></div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; width:100%; font-size:0.72rem; font-weight:800; color:var(--text-light);">
                <span>${item.statusText}</span>
                <span>${item.total}x</span>
            </div>
        `;
        gridEl.appendChild(card);
    });
}

function openWordTelemetryModal(wordKey) {
    playSound('click');
    const map = buildLexicalTelemetryMap();
    const item = map.get(wordKey);
    if (!item) return;

    const modal = document.getElementById('modal-word-telemetry');
    if (!modal) return;

    document.getElementById('wt-word-title').innerText = item.word;
    document.getElementById('wt-kpi-total').innerText = item.total;
    document.getElementById('wt-kpi-i').innerText = item.I;
    document.getElementById('wt-kpi-d').innerText = item.D;
    document.getElementById('wt-kpi-n').innerText = item.N;

    const listEl = document.getElementById('wt-history-list');
    if (listEl) {
        listEl.innerHTML = '';
        [...item.history].reverse().forEach(h => {
            const pillColor = h.outcome === 'I' ? 'var(--success)' : (h.outcome === 'D' ? 'var(--warning)' : 'var(--danger)');
            const outcomeLabel = h.outcome === 'I' ? 'Independente (I)' : (h.outcome === 'D' ? 'Com Dica (D)' : 'Erro (N)');
            const row = document.createElement('div');
            row.className = 'wt-history-row';
            row.innerHTML = `
                <div style="text-align:left;">
                    <strong style="font-size:0.88rem; color:var(--text); display:block;">${h.task} • Ciclo ${h.cycle}${h.isProbe ? ' (Sonda)' : ''}</strong>
                    <span style="font-size:0.74rem; color:var(--text-light); font-weight:700;">${h.date} ${h.hour}</span>
                </div>
                <span class="log-badge" style="background:${pillColor}; font-size:0.74rem; padding:4px 10px;">${outcomeLabel}</span>
            `;
            listEl.appendChild(row);
        });
    }

    modal.style.display = 'flex';
}

/* ABA 3: HISTÓRICO ENXUTO */
function getFilteredHistoryLogs() {
    const queryEl = document.getElementById('tel-history-filter');
    const q = queryEl ? queryEl.value.trim().toLowerCase() : '';
    return getNormalizedTelemetryLogs().filter(e => {
        if (!q) return true;
        return String(e.fase || '').toLowerCase().includes(q) || String(e.d || '').toLowerCase().includes(q);
    });
}

function renderTelemetryHistoryView() {
    const container = document.getElementById('dashboard-content');
    if (!container) return;
    container.innerHTML = '';

    const logs = getFilteredHistoryLogs();

    if (logs.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:44px 0; color:var(--text-light); font-weight:800;">Nenhuma sessão encontrada.</div>`;
        return;
    }

    [...logs].reverse().forEach(entry => {
        const card = document.createElement('div');
        const isSuccess = entry.acc >= (entry.crit || state.settings.crit);
        card.className = 'log-card';
        card.style.borderLeftColor = isSuccess ? 'var(--success)' : 'var(--danger)';

        const r = entry.resumoABA || { I: 0, D: 0, N: 0 };
        const varLabel = entry.variacao ? ` (Var ${entry.variacao})` : '';
        card.innerHTML = `
            <div class="log-card-top">
                <div>
                    <h3 style="font-size:1.08rem; font-weight:900;">${entry.fase}${varLabel}</h3>
                    <span style="font-size:0.82rem; color:var(--text-light); font-weight:700;">Data: ${entry.d} ${entry.h || ''} | Latência: ${entry.lat || 0}s</span>
                </div>
                <span class="log-badge" style="background:${isSuccess ? 'var(--success)' : 'var(--danger)'}">${entry.acc}%</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; font-size:0.86rem; font-weight:800;">
                <div>
                    <span style="color:var(--success);">[I] ${r.I}</span> &nbsp;|&nbsp;
                    ${entry.isProbe ? '' : `<span style="color:#D97706;">[D] ${r.D}</span> &nbsp;|&nbsp;`}
                    <span style="color:var(--danger);">[N] ${r.N}</span>
                </div>
                <div style="color:var(--primary-dark);">${entry.streak || '-'} (${entry.status || '-'})</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function drawProgressChart(filteredSeries = null) {
    const canvas = document.getElementById('aba-progress-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || 700;
    const h = 170;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
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
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillText(`${val}%`, 6, y + 4);
    });

    const crit = state.settings.crit || 90;
    const critY = padT + plotH - (crit / 100) * plotH;
    ctx.save();
    ctx.strokeStyle = '#EF4444';
    ctx.setLineDash([6, 4]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padL, critY);
    ctx.lineTo(w - padR, critY);
    ctx.stroke();
    ctx.restore();

    const series = Array.isArray(filteredSeries) ? filteredSeries : state.log.slice(-15);
    if (series.length === 0) return;

    ctx.strokeStyle = state.settings.themeColor || '#3B82F6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    series.forEach((item, idx) => {
        const x = padL + (series.length === 1 ? plotW / 2 : (idx / (series.length - 1)) * plotW);
        const y = padT + plotH - ((item.acc || 0) / 100) * plotH;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    series.forEach((item, idx) => {
        const x = padL + (series.length === 1 ? plotW / 2 : (idx / (series.length - 1)) * plotW);
        const y = padT + plotH - ((item.acc || 0) / 100) * plotH;
        ctx.fillStyle = item.acc >= crit ? '#10B981' : '#EF4444';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#64748B';
        ctx.font = 'bold 10px Inter, sans-serif';
        const shortDate = String(item.d || '').slice(0, 5);
        ctx.fillText(shortDate, x - 14, h - 8);
    });
}

function copyWhatsAppSummary() {
    closeModals();
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
        text += `- *${item.fase}${vInfo}:* ${item.acc}% Independente | ${item.streak || '1/2'} ${statusMark}\n`;
    });

    document.getElementById('report-modal-title').innerText = "Resumo em Texto";
    document.getElementById('report-modal-desc').innerText = "Copie o texto abaixo para enviar.";
    document.getElementById('json-output').value = text;
    document.getElementById('modal-report').style.display = 'flex';
}

/* PDF DA TELEMETRIA ALINHADO EXATAMENTE À ABA, TAREFA E MODALIDADE ATIVAS */
function exportSessionLogPDF() {
    closeModals();
    const { jsPDF } = window.jspdf;
    const studentSafe = (state.student || 'Aluno').replace(/\s+/g, '_');
    const todayStr = new Date().toLocaleDateString('pt-BR');

    if (telemetryActiveTab === 'DTT') {
        const logs = getNormalizedTelemetryLogs();
        const wantProbe = (telemetryDttMode === 'PROBE');
        const filtered = logs.filter(l => l.taskKey === telemetrySelectedTaskId && l.isProbe === wantProbe);

        if (!telemetrySelectedTaskId || filtered.length === 0) {
            customAlert("Sem Dados no Filtro", `Não há registros de ${wantProbe ? 'Sondagem' : 'Treino'} para a tarefa selecionada.`);
            return;
        }

        const taskTitle = filtered[0].modLabel || telemetrySelectedTaskId;
        const modeLabel = wantProbe ? 'Sondagem' : 'Treino';
        const doc = new jsPDF({ orientation: filtered.length > 5 ? 'landscape' : 'portrait' });
        doc.setFontSize(15);
        doc.setTextColor(59, 130, 246);
        doc.text(`Telemetria DTT — ${taskTitle} (${modeLabel})`, 14, 18);
        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        doc.text(`Aluno(a): ${state.student || 'NÃO INFORMADO'}   |   Critério: ${state.settings.crit}%   |   Emissão: ${todayStr}`, 14, 26);

        const pct = (part, tot) => (tot > 0 ? Math.round((part / tot) * 100) : 0);
        const headRow = ['Métrica', ...filtered.map((e, idx) => `${e.d} (S${idx + 1})`)];

        let bodyRows = [];
        if (!wantProbe) {
            bodyRows = [
                ['Variação', ...filtered.map(e => `Var ${e.variacao || 1}`)],
                ['Tentativas', ...filtered.map(e => String(e.resumoABA.T))],
                ['Indep. (I)', ...filtered.map(e => `${e.resumoABA.I} (${pct(e.resumoABA.I, e.resumoABA.T)}%)`)],
                ['Dica (D)', ...filtered.map(e => `${e.resumoABA.D} (${pct(e.resumoABA.D, e.resumoABA.T)}%)`)],
                ['Erro (N)', ...filtered.map(e => `${e.resumoABA.N} (${pct(e.resumoABA.N, e.resumoABA.T)}%)`)],
                ['Status', ...filtered.map(e => e.status || '-')]
            ];
        } else {
            bodyRows = [
                ['Variação', ...filtered.map(e => `Var ${e.variacao || 1}`)],
                ['Tentativas', ...filtered.map(e => String(e.resumoABA.T))],
                ['Acerto (I)', ...filtered.map(e => String(e.resumoABA.I))],
                ['Erro (N)', ...filtered.map(e => String(e.resumoABA.N))],
                ['Precisão (%)', ...filtered.map(e => `${e.acc}%`)],
                ['Resultado', ...filtered.map(e => {
                    const isRev = (e.status === 'Retorno ao Treino');
                    const isPass = !isRev && e.acc >= (e.crit || state.settings.crit);
                    return isRev ? 'Retorno ao Treino' : (isPass ? 'Aprovado' : 'Reprovado');
                })]
            ];
        }

        doc.autoTable({
            startY: 32,
            head: [headRow],
            body: bodyRows,
            theme: 'grid',
            headStyles: { fillColor: [59, 130, 246] },
            styles: { fontSize: 8.5, halign: 'center' },
            columnStyles: { 0: { halign: 'left', fontStyle: 'bold', fillColor: [248, 250, 252] } }
        });

        const fileName = `DTT_${studentSafe}_${toCleanSlug(taskTitle)}_${modeLabel}.pdf`;
        if (window.AppInventor) {
            window.AppInventor.setWebViewString("SALVAR_PDF:" + fileName + "|" + doc.output('datauristring'));
        } else {
            doc.save(fileName);
        }
        return;
    }

    if (telemetryActiveTab === 'LEXICAL') {
        const list = getSortedLexicalList();
        if (list.length === 0) {
            customAlert("Sem Dados", "Nenhuma palavra do Repertório Lexical foi registrada ainda.");
            return;
        }
        const doc = new jsPDF();
        doc.setFontSize(15);
        doc.setTextColor(59, 130, 246);
        doc.text("Repertório Lexical — AlfaMTS", 14, 18);
        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        doc.text(`Aluno(a): ${state.student || 'NÃO INFORMADO'}   |   Palavras trabalhadas: ${list.length}   |   Janela Recente (Últimas 5)   |   Emissão: ${todayStr}`, 14, 26);

        const rows = list.map(it => [
            it.word,
            String(it.total),
            String(it.I),
            String(it.D),
            String(it.N),
            `${it.acc}%`,
            it.statusText
        ]);

        doc.autoTable({
            startY: 32,
            head: [['Palavra', 'Alvos', 'Indep. (I)', 'Dica (D)', 'Erro (N)', 'Recente', 'Status']],
            body: rows,
            theme: 'grid',
            headStyles: { fillColor: [15, 23, 42] },
            styles: { fontSize: 8.5 }
        });

        const fileName = `Repertorio_Lexical_${studentSafe}_AlfaMTS.pdf`;
        if (window.AppInventor) {
            window.AppInventor.setWebViewString("SALVAR_PDF:" + fileName + "|" + doc.output('datauristring'));
        } else {
            doc.save(fileName);
        }
        return;
    }

    const filteredHistory = getFilteredHistoryLogs();
    if (filteredHistory.length === 0) {
        customAlert("Aviso", "Nenhum dado encontrado no filtro atual para exportar.");
        return;
    }
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.setTextColor(59, 130, 246);
    doc.text("Histórico de Sessões — AlfaMTS", 14, 20);
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    const filterQ = (document.getElementById('tel-history-filter')?.value || '').trim();
    doc.text(`Aluno(a): ${state.student || 'NÃO INFORMADO'} | Emissão: ${todayStr}${filterQ ? ' | Filtro: ' + filterQ : ''}`, 14, 28);

    const rows = [...filteredHistory].reverse().map(e => [
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
        headStyles: { fillColor: [59, 130, 246] },
        styles: { fontSize: 8.5 }
    });

    const fileName = `Historico_${studentSafe}_AlfaMTS.pdf`;
    if (window.AppInventor) {
        window.AppInventor.setWebViewString("SALVAR_PDF:" + fileName + "|" + doc.output('datauristring'));
    } else {
        doc.save(fileName);
    }
}

function exportEidosChecklistPDF() {
    closeModals();
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(15);
    doc.setTextColor(59, 130, 246);
    doc.text("PROTOCOLO DE AVALIAÇÃO E LINHA DE BASE", 14, 18);
    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);
    doc.text(`Aluno(a): ${state.student || 'NÃO INFORMADO'}   |   Data: ${new Date().toLocaleDateString('pt-BR')}   |   Critério: ${state.settings.crit}% (${state.settings.consecDays}x)`, 14, 26);

    const validModules = getEffectiveEidosModules().filter(m => m.engine !== 'REWARD_PORTAL');
    const tableRows = validModules.map(m => {
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
   18. CONFIGURAÇÕES GLOBAIS (CONTROLE MOTOR, IMPULSIVIDADE E UPDATE PWA)
   ============================================================================ */
function togglePasswordField() {
    const chk = document.getElementById('set-sec-enable');
    const pinGrp = document.getElementById('pin-group');
    if (!chk || !pinGrp) return;
    const isEnabled = chk.checked;
    pinGrp.style.display = isEnabled ? 'block' : 'none';
    if (!isEnabled && document.getElementById('set-timer-enable') && document.getElementById('set-timer-enable').checked) {
        document.getElementById('set-timer-enable').checked = false;
        toggleTimerField();
    }
}

function toggleTimerField() {
    const chk = document.getElementById('set-timer-enable');
    const tGrp = document.getElementById('timer-group');
    if (!chk || !tGrp) return;
    const isEnabled = chk.checked;
    tGrp.style.display = isEnabled ? 'block' : 'none';
    if (isEnabled && document.getElementById('set-sec-enable') && !document.getElementById('set-sec-enable').checked) {
        document.getElementById('set-sec-enable').checked = true;
        togglePasswordField();
    }
}

function syncHoldCRMTSVisibility() {
    const holdSel = document.getElementById('set-hold-ms');
    const wrap = document.getElementById('set-hold-crmts-wrap');
    if (!holdSel || !wrap) return;
    const active = (parseInt(holdSel.value) || 0) > 0;
    wrap.style.display = active ? 'flex' : 'none';
}

function applyClinicalPresetToSettingsUI(presetKey) {
    if (presetKey === 'INTENSIVO') {
        document.getElementById('set-consec-days').value = '3';
        document.getElementById('set-opts').value = '2';
        document.getElementById('set-errorless').checked = true;
        document.getElementById('set-strict-day').checked = true;
    } else if (presetKey === 'REGULAR') {
        document.getElementById('set-consec-days').value = '2';
        document.getElementById('set-opts').value = '3';
        document.getElementById('set-errorless').checked = true;
        document.getElementById('set-strict-day').checked = true;
    } else if (presetKey === 'AVANCADO') {
        document.getElementById('set-consec-days').value = '1';
        document.getElementById('set-opts').value = '4';
        document.getElementById('set-errorless').checked = false;
        document.getElementById('set-strict-day').checked = false;
    }
}

function ensureTactileControlsInSettingsUI() {
    const holdSel = document.getElementById('set-hold-ms');
    if (holdSel) {
        holdSel.onchange = syncHoldCRMTSVisibility;
    }

    // Garante botão "Verificar Atualizações" sem perda de dados no card Sistema e Memória Local
    if (!document.getElementById('btn-check-pwa-updates')) {
        const resetBtn = document.querySelector('#screen-settings button[onclick*="hardResetAppCache"]');
        if (resetBtn && resetBtn.parentElement) {
            const updBtn = document.createElement('button');
            updBtn.type = 'button';
            updBtn.id = 'btn-check-pwa-updates';
            updBtn.className = 'btn-action';
            updBtn.style.cssText = 'flex:1; background:var(--primary);';
            updBtn.onclick = checkAppUpdatesWithoutDataLoss;
            updBtn.innerHTML = `${UI_SVGS.replay} Verificar Atualizações`;
            resetBtn.parentElement.insertBefore(updBtn, resetBtn);
        }
    }
}

function openSettings() {
    ensureTactileControlsInSettingsUI();
    document.getElementById('set-name').value = getActiveFirstName();
    document.getElementById('set-crit').value = state.settings.crit;
    document.getElementById('set-consec-days').value = state.settings.consecDays || 2;
    document.getElementById('set-strict-day').checked = state.settings.strictDay !== false;
    document.getElementById('set-errorless').checked = state.settings.errorless !== false;
    document.getElementById('set-topo-mode').value = state.settings.topoMode || 'AUTO';
    document.getElementById('set-opts').value = state.settings.opts || 3;
    document.getElementById('set-latency').value = state.settings.latency;

    if (document.getElementById('set-clinical-preset')) {
        document.getElementById('set-clinical-preset').value = state.settings.clinicalPreset || 'REGULAR';
    }
    if (document.getElementById('set-hold-ms')) {
        document.getElementById('set-hold-ms').value = String(state.settings.holdToSelectMs || 0);
    }
    if (document.getElementById('set-hold-crmts')) {
        document.getElementById('set-hold-crmts').checked = !!state.settings.holdOnCRMTS;
    }
    if (document.getElementById('set-dock-lock')) {
        document.getElementById('set-dock-lock').checked = !!state.settings.dockSafetyLock;
    }
    if (document.getElementById('set-drag-mts')) {
        document.getElementById('set-drag-mts').checked = !!state.settings.dragToModelMTS;
    }
    if (document.getElementById('set-drag-multimts')) {
        document.getElementById('set-drag-multimts').checked = !!state.settings.dragToModelMultiMTS;
    }
    if (document.getElementById('set-drag-crmts')) {
        document.getElementById('set-drag-crmts').checked = !!state.settings.dragToModelCRMTS;
    }
    syncHoldCRMTSVisibility();

    const colorInp = document.getElementById('set-theme-color');
    if (colorInp) colorInp.value = state.settings.themeColor || '#3B82F6';

    const sc = state.settings.sylComplex || {};
    if (document.getElementById('set-syl-ccv')) document.getElementById('set-syl-ccv').checked = !!sc.ccv;
    if (document.getElementById('set-syl-cvcl')) document.getElementById('set-syl-cvcl').checked = !!sc.cvcL;
    if (document.getElementById('set-syl-cvcs')) document.getElementById('set-syl-cvcs').checked = !!sc.cvcS;
    if (document.getElementById('set-syl-cvcm')) document.getElementById('set-syl-cvcm').checked = !!sc.cvcM;

    document.getElementById('set-stg-c1').checked = state.settings.stages.c1 !== false;
    document.getElementById('set-stg-c2').checked = state.settings.stages.c2 !== false;
    document.getElementById('set-stg-c3').checked = state.settings.stages.c3 !== false;
    document.getElementById('set-use-mic').checked = state.settings.useMic !== false;

    const analystPinVal = (tenantsIndex && tenantsIndex.analystPin) ? tenantsIndex.analystPin : (state.settings.security.pin || '');
    const applicatorPinVal = (tenantsIndex && tenantsIndex.applicatorPin) ? tenantsIndex.applicatorPin : '';
    const lockExitVal = (tenantsIndex && typeof tenantsIndex.lockExit === 'boolean') ? tenantsIndex.lockExit : !!state.settings.security.lockExit;

    const elAnalystPin = document.getElementById('set-analyst-pin');
    const elApplicatorPin = document.getElementById('set-applicator-pin');
    const elSecEnable = document.getElementById('set-sec-enable');

    if (elAnalystPin) elAnalystPin.value = analystPinVal;
    if (elApplicatorPin) elApplicatorPin.value = applicatorPinVal;
    if (elSecEnable) elSecEnable.checked = !!(analystPinVal || applicatorPinVal);

    const elKioskExit = document.getElementById('set-kiosk-exit');
    if (elKioskExit) elKioskExit.checked = lockExitVal;
    togglePasswordField();

    document.getElementById('set-timer-enable').checked = state.settings.timer.enabled;
    document.getElementById('set-timer-min').value = state.settings.timer.min;
    toggleTimerField();

    hideAllScreens();
    document.getElementById('screen-settings').classList.add('active');
}

function saveSettings() {
    const elAnalystPin = document.getElementById('set-analyst-pin');
    const elApplicatorPin = document.getElementById('set-applicator-pin');
    const elSecEnable = document.getElementById('set-sec-enable');
    const isTimerEnabled = document.getElementById('set-timer-enable').checked;

    let analystPin = '';
    let applicatorPin = '';

    if (elSecEnable && elSecEnable.checked) {
        analystPin = elAnalystPin ? elAnalystPin.value.trim() : '';
        applicatorPin = elApplicatorPin ? elApplicatorPin.value.trim() : '';
        if (!analystPin && !applicatorPin) {
            customAlert("PIN Obrigatório", "Informe o código PIN do Analista para ativar a proteção por senha.");
            return;
        }
    }

    if (isTimerEnabled && !analystPin) {
        document.getElementById('set-sec-enable').checked = true;
        togglePasswordField();
        customAlert("Senha Obrigatória", "Para usar o Timer de Sessão, defina um PIN para o Analista.");
        if (elAnalystPin) setTimeout(() => elAnalystPin.focus(), 200);
        return;
    }

    let c1 = document.getElementById('set-stg-c1').checked;
    let c2 = document.getElementById('set-stg-c2').checked;
    let c3 = document.getElementById('set-stg-c3').checked;
    if (!c1 && !c2 && !c3) c1 = true;

    const firstName = String(document.getElementById('set-name').value || "ALUNO").trim().split(/\s+/)[0].toUpperCase() || "ALUNO";
    state.student = firstName;
    state.settings.crit = parseInt(document.getElementById('set-crit').value) || 90;
    state.settings.consecDays = parseInt(document.getElementById('set-consec-days').value) || 2;
    state.settings.strictDay = document.getElementById('set-strict-day').checked;
    state.settings.errorless = document.getElementById('set-errorless').checked;
    state.settings.topoMode = document.getElementById('set-topo-mode').value || 'AUTO';
    state.settings.opts = parseInt(document.getElementById('set-opts').value) || 3;
    state.settings.clinicalPreset = document.getElementById('set-clinical-preset') ? document.getElementById('set-clinical-preset').value : 'REGULAR';
    state.settings.holdToSelectMs = document.getElementById('set-hold-ms') ? (parseInt(document.getElementById('set-hold-ms').value) || 0) : 0;
    state.settings.holdOnCRMTS = document.getElementById('set-hold-crmts') ? document.getElementById('set-hold-crmts').checked : false;
    state.settings.dockSafetyLock = document.getElementById('set-dock-lock') ? document.getElementById('set-dock-lock').checked : false;
    state.settings.dragToModelMTS = document.getElementById('set-drag-mts') ? document.getElementById('set-drag-mts').checked : false;
    state.settings.dragToModelMultiMTS = document.getElementById('set-drag-multimts') ? document.getElementById('set-drag-multimts').checked : false;
    state.settings.dragToModelCRMTS = document.getElementById('set-drag-crmts') ? document.getElementById('set-drag-crmts').checked : false;

    state.settings.sylComplex = {
        ccv: document.getElementById('set-syl-ccv') ? document.getElementById('set-syl-ccv').checked : false,
        cvcL: document.getElementById('set-syl-cvcl') ? document.getElementById('set-syl-cvcl').checked : false,
        cvcS: document.getElementById('set-syl-cvcs') ? document.getElementById('set-syl-cvcs').checked : false,
        cvcM: document.getElementById('set-syl-cvcm') ? document.getElementById('set-syl-cvcm').checked : false
    };

    const colorInp = document.getElementById('set-theme-color');
    state.settings.themeColor = (colorInp && colorInp.value) ? colorInp.value : '#3B82F6';
    state.settings.latency = parseInt(document.getElementById('set-latency').value) || 400;
    state.settings.stages = { c1, c2, c3, c4: true };
    state.settings.useMic = document.getElementById('set-use-mic').checked;

    const lockExit = document.getElementById('set-kiosk-exit') ? document.getElementById('set-kiosk-exit').checked : false;
    state.settings.security = {
        enabled: !!(analystPin || applicatorPin),
        pin: analystPin,
        analystPin,
        applicatorPin,
        lockExit
    };
    if (tenantsIndex) {
        tenantsIndex.analystPin = analystPin;
        tenantsIndex.applicatorPin = applicatorPin;
        tenantsIndex.lockExit = lockExit;
    }

    const newTimerMin = Math.max(1, parseInt(document.getElementById('set-timer-min').value) || 30);
    const wasTimerEnabled = state.settings.timer.enabled;
    const oldTimerMin = state.settings.timer.min;

    state.settings.timer = {
        enabled: isTimerEnabled,
        min: newTimerMin
    };

    if (!isTimerEnabled) {
        state.session.expired = false;
        state.session.endTime = null;
        if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
        const clock = document.getElementById('header-timer-icon');
        if (clock) clock.style.display = 'none';
    } else if (!wasTimerEnabled || oldTimerMin !== newTimerMin || state.session.expired || !state.session.endTime) {
        state.session.expired = false;
        state.session.endTime = Date.now() + (newTimerMin * 60000);
        state.session.configuredMin = newTimerMin;
        if (!timerInterval) timerInterval = setInterval(checkTimer, 1000);
        checkTimer();
    }

    state.setupDone = true;
    saveState();
    applyTheme();
    syncDockSafetyLockVisual();
    goSplash();
}

function openReview(phaseId) {
    let pool = getPhasePool(phaseId);
    if (ALL_SYLLABARY_KEYS.includes(phaseId) && !['VOGAIS', 'ENCONTROS'].includes(phaseId)) {
        pool = [...generateSyllables(phaseId), ...getCumulativeWordsForSyllableFamily(phaseId)];
    }
    const mod = getEffectiveEidosModules().find(m => m.id === phaseId)
        || getEffectivePhonologicalModules().find(m => m.id === phaseId)
        || getEffectivePalavrarioDrawers().find(d => d.id === phaseId)
        || (state.customModules || []).find(m => m.id === phaseId);
    document.getElementById('review-title').innerText = mod ? `Revisão: ${mod.title}` : `Revisão: ${phaseId}`;
    const grid = document.getElementById('review-grid');
    grid.innerHTML = '';

    pool.forEach(item => {
        const rawLabel = typeof item === 'object' ? (item.sentence || item.text || JSON.stringify(item)) : String(item);
        const cleanKey = getNormalizedWordKey(rawLabel);
        const isMarked = state.reviewHighlights && state.reviewHighlights[cleanKey];
        const chip = document.createElement('div');
        chip.innerHTML = formatStimulusTextHTML(rawLabel, phaseId);
        chip.style.padding = "12px 20px";
        chip.style.borderRadius = "14px";
        chip.style.fontSize = "1.15rem";
        chip.style.fontWeight = "900";
        chip.style.cursor = "pointer";
        chip.style.border = "2.5px solid " + (isMarked ? "var(--warning)" : "var(--border)");
        chip.style.background = isMarked ? "var(--warning-light)" : "#fff";
        chip.onclick = () => {
            playSound('click');
            if (state.reviewHighlights[cleanKey]) delete state.reviewHighlights[cleanKey];
            else state.reviewHighlights[cleanKey] = true;
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
    const gearShort = getActiveSyllabaryGearObj().shortLabel;
    const allItems = [
        ...getEffectiveEidosModules().map(m => ({ id: m.id, label: `${m.code} - ${m.title}` })),
        ...getEffectivePalavrarioDrawers().map(d => ({ id: d.id, label: `Palavrário: ${d.title}` })),
        ...(state.customModules || []).map(cm => ({ id: cm.id, label: `Personalizado: ${cm.title}` })),
        ...getEffectivePhonologicalModules().map(pm => ({ id: pm.id, label: `Fonológico: ${pm.title}` })),
        ...getEffectiveSyllabaryOrder().map(c => ({ id: c, label: `Silabário (${gearShort}): ${c}` })),
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
        "A liberação manual de módulos desativará a progressão automática da trilha deste aluno. Deseja aplicar?",
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
    pool.forEach(w => extractExplicitSyllables(w));
    pool = [...new Set(pool)];
    const targets = shuffleArray(pool);
    const activeCycles = filterCyclesByTaskConfig('PALAVRAS', [1, 2, 3], false);

    undoSnapshot = null;
    session = {
        phase: 'PALAVRAS',
        eidosMod: null,
        activeVar: 1,
        activeGear: null,
        isProbeMode: isModuleInProbeMode('PALAVRAS'),
        isFastTrackEntryProbe: false,
        isPreTestChain: false,
        preTestErrorsCount: 0,
        probeGateFailed: false,
        isStructuredSyllabary: false,
        isPalavrarioDrawer: false,
        isPhonemeCheckpoint: false,
        sylData: null,
        phonData: null,
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
        itemsLog: [],
        stats: resetSessionStats(activeCycles, targets.length)
    };
    openGame();
    renderTrial();
}

function openReport() {
    closeModals();
    document.getElementById('report-modal-title').innerText = "Dados Estruturados";
    document.getElementById('report-modal-desc').innerText = `Histórico completo do aluno: ${getActiveFirstName()}`;
    document.getElementById('json-output').value = state.log.length === 0
        ? "Nenhum dado registrado."
        : JSON.stringify(state.log, null, 2);
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
    hardResetAppCache();
}

/* ============================================================================
   19. ESTÚDIO DE MATERIAIS CONCRETOS (ESQUEMA DE REFORÇAMENTO DETALHADO A4)
   ============================================================================ */
let printStudioExcludedCards = new Set();

function ensureDetailedReinforcementControlsInSidebar() {
    const reinfModeSel = document.getElementById('pk-reinf-mode');
    if (!reinfModeSel) return;
    const section3 = reinfModeSel.closest('.print-sidebar-section');
    if (section3 && !document.getElementById('pk-reinf-social-input')) {
        const extraDiv = document.createElement('div');
        extraDiv.style.cssText = 'display:flex; flex-direction:column; gap:8px; margin-top:6px; border-top:1px dashed var(--border); padding-top:8px;';
        extraDiv.innerHTML = `
            <div class="input-group" style="margin-bottom:0;">
                <label style="font-size:0.78rem;">Reforço Contínuo (Social / Imediato):</label>
                <input type="text" id="pk-reinf-social-input" value="Elogio social descritivo ('Muito bem!')" oninput="renderLivePrintStudioPreview()" style="padding:8px 10px; font-size:0.82rem;">
            </div>
            <div class="input-group" style="margin-bottom:0;">
                <label style="font-size:0.78rem;">Intermitente (Frequência e Duração):</label>
                <input type="text" id="pk-reinf-interm-input" value="VR-3 (1 ficha a cada 3 acertos) | 45s de jogo" oninput="renderLivePrintStudioPreview()" style="padding:8px 10px; font-size:0.82rem;">
            </div>
            <div class="input-group" style="margin-bottom:0;">
                <label style="font-size:0.78rem;">Momento de Entrega:</label>
                <select id="pk-reinf-moment-select" class="compact-select" style="width:100%; padding:8px; font-size:0.82rem;" onchange="renderLivePrintStudioPreview()">
                    <option value="ITEM">A cada item / tentativa correta</option>
                    <option value="CYCLE" selected>Ao final de cada ciclo concluído</option>
                    <option value="TASK">Ao concluir a tarefa completa</option>
                </select>
            </div>
        `;
        section3.appendChild(extraDiv);
    }
}

function initPrintStudioCascades() {
    ensureDetailedReinforcementControlsInSidebar();
    const catSel = document.getElementById('pk-cat-select');
    if (!catSel) return;
    if (!Array.from(catSel.options).some(o => o.value === 'PALAVRARIO')) {
        const palOpt = document.createElement('option');
        palOpt.value = 'PALAVRARIO';
        palOpt.innerText = 'Palavrário';
        const sylOpt = Array.from(catSel.options).find(o => o.value === 'SILABARIO');
        if (sylOpt && sylOpt.nextSibling) {
            catSel.insertBefore(palOpt, sylOpt.nextSibling);
        } else {
            catSel.appendChild(palOpt);
        }
    }
    if (!catSel.value) catSel.value = 'N1';
    onPrintStudioCategoryChange();
}

function onPrintStudioCategoryChange() {
    const catSel = document.getElementById('pk-cat-select');
    const modSel = document.getElementById('pk-mod-select');
    if (!catSel || !modSel) return;

    const cat = catSel.value;
    modSel.innerHTML = '';
    let options = [];
    const allEidos = getEffectiveEidosModules();

    if (['N1', 'N2', 'N3', 'N4', 'N5'].includes(cat)) {
        options = allEidos.filter(m => m.level === cat && m.engine !== 'REWARD_PORTAL').map(m => ({
            id: m.id,
            label: `${m.code} — ${m.title}`
        }));
    } else if (cat === 'SILABARIO') {
        options = getEffectiveSyllabaryOrder().map(s => ({
            id: s,
            label: ['VOGAIS', 'ENCONTROS'].includes(s) ? s : `Família ${s} (${getSyllableSetLabel(s).split('•')[0].trim()})`
        }));
    } else if (cat === 'PALAVRARIO') {
        options = getEffectivePalavrarioDrawers().map(d => ({
            id: d.id,
            label: `${d.code} — ${d.title}`
        }));
    } else if (cat === 'EXTRAS') {
        options = [
            ...allEidos.filter(m => m.level === 'EXTRAS').map(m => ({ id: m.id, label: `${m.code} — ${m.title}` })),
            ...extraModules.map(e => ({ id: e, label: e === 'PALAVRAS' ? 'Palavras Livres' : e }))
        ];
    } else if (cat === 'PERSONALIZADOS') {
        options = (state.customModules || []).map(cm => ({
            id: cm.id,
            label: cm.title
        }));
    }

    if (options.length === 0) {
        const opt = document.createElement('option');
        opt.value = '';
        opt.innerText = 'Nenhuma tarefa nesta categoria';
        modSel.appendChild(opt);
    } else {
        options.forEach(o => {
            const opt = document.createElement('option');
            opt.value = o.id;
            opt.innerText = o.label;
            modSel.appendChild(opt);
        });
    }

    onPrintStudioModuleChange();
}

function onPrintStudioModuleChange() {
    const modSel = document.getElementById('pk-mod-select');
    const varSel = document.getElementById('pk-var-select');
    const waitInp = document.getElementById('pk-wait-sec');
    const sdInp = document.getElementById('pk-custom-sd');
    if (!modSel || !varSel) return;

    printStudioExcludedCards.clear();
    const modId = modSel.value;
    varSel.innerHTML = '';

    if (!modId) {
        renderLivePrintStudioPreview();
        return;
    }

    const availVars = getAvailableVariationKeys(modId);
    const activeV = getActiveVariationForModule(modId);
    availVars.forEach(vk => {
        const opt = document.createElement('option');
        opt.value = String(vk);
        opt.innerText = `Variação ${vk}`;
        if (vk === activeV) opt.selected = true;
        varSel.appendChild(opt);
    });

    const tCfg = getTaskConfig(modId);
    if (waitInp) {
        waitInp.value = (tCfg && tCfg.responseTimeout > 0) ? tCfg.responseTimeout : 5;
    }
    if (sdInp) {
        sdInp.value = '';
    }

    renderLivePrintStudioPreview();
}

function mapStudioChannelToCode(ch) {
    if (ch === 'AUDIO') return 'A';
    if (ch === 'IMAGE') return 'B';
    return 'C';
}

function parseStudioCycleToFormula(cyc) {
    let sdCode = mapStudioChannelToCode(cyc.sdChannel1);
    if (cyc.sdMode === 'COMPOUND') {
        const sd2 = mapStudioChannelToCode(cyc.sdChannel2);
        if (sd2 !== sdCode) sdCode = `${sdCode}${sd2}`;
    }

    let rCode = 'C';
    if (cyc.mechanic === 'EXPRESSIVE') {
        rCode = 'D';
    } else if (cyc.mechanic === 'CRMTS') {
        rCode = 'E';
    } else {
        rCode = mapStudioChannelToCode(cyc.compChannel || 'TEXT');
    }

    return {
        formula: `${sdCode} → ${rCode}`,
        sdCode,
        rCode,
        mechanic: cyc.mechanic,
        customCommand: cyc.commandText || ''
    };
}

function extractModuleFormulasForStudent(modId) {
    const customMod = (state.customModules || []).find(m => m.id === modId);
    const palDrawer = getEffectivePalavrarioDrawers().find(d => d.id === modId);
    const isSyl = ALL_SYLLABARY_KEYS.includes(modId);
    const stg = getEffectiveStagesForModule(modId, isSyl);

    if (customMod) {
        const rawCycles = Array.isArray(customMod.cyclesConfig) && customMod.cyclesConfig.length > 0
            ? customMod.cyclesConfig
            : [{ mechanic: 'MTS', sdMode: 'SIMPLE', sdChannel1: 'TEXT', compChannel: 'TEXT' }];

        return rawCycles
            .map((c, idx) => ({ idx: idx + 1, ...parseStudioCycleToFormula(c) }))
            .filter(item => {
                if (item.idx === 1) return stg.c1 !== false;
                if (item.idx === 2) return stg.c2 !== false;
                if (item.idx === 3) return stg.c3 !== false;
                return stg.c4 !== false;
            });
    }

    if (palDrawer) {
        return [
            { idx: 1, formula: 'Treino: BC → C', sdCode: 'BC', rCode: 'C', customCommand: 'Ensino direto: nomear a figura (B → D), revelar a palavra do modelo composto para observação e parear com a palavra igual (BC → C).' },
            { idx: 2, formula: 'Treino: AB → E', sdCode: 'AB', rCode: 'E', customCommand: 'Construção silábica: apresentar a figura, ditar a palavra e entregar as sílabas móveis para montagem e leitura.' },
            { idx: 3, formula: 'Desmame: C(Cor)→C', sdCode: 'C', rCode: 'C', customCommand: 'Generalização tipográfica: parear a palavra estruturada colorida com a palavra em texto preto puro.' },
            { idx: 4, formula: 'Sonda: B→C | C→D', sdCode: 'B', rCode: 'C', customCommand: 'Sondagem sem ajuda: testar B → C (exige 100%), Simetria (C → B), Leitura Oral (C → D, antes do áudio) e Ditado (A → C).' }
        ];
    }

    if (isSyl && !['VOGAIS', 'ENCONTROS'].includes(modId)) {
        const listSyl = [];
        if (stg.c1 !== false) listSyl.push({ idx: 1, formula: 'C → C (Sílabas)', sdCode: 'C', rCode: 'C', customCommand: 'Apresentar as sílabas com apoio visual intrassilábico para leitura e pareamento.' });
        if (stg.c2 !== false) listSyl.push({ idx: 2, formula: 'C → D (Palavras)', sdCode: 'C', rCode: 'D', customCommand: 'Apresentar as palavras cumulativas estruturadas e fornecer modelo fluente após leitura silabada.' });
        if (stg.c3 !== false) listSyl.push({ idx: 3, formula: 'C(Cor) → C(Preto)', sdCode: 'C', rCode: 'C', customCommand: 'Dispor as palavras estruturadas coloridas de um lado e parear com as palavras em texto preto puro.' });
        if (stg.c4 !== false) listSyl.push({ idx: 4, formula: 'C → B / C → D', sdCode: 'C', rCode: 'B', customCommand: 'Sondagem sem dica visual: leitura da palavra em preto puro e pareamento com a figura correspondente.' });
        return listSyl.length > 0 ? listSyl : [{ idx: 1, formula: 'C → C', sdCode: 'C', rCode: 'C' }];
    }

    const eMod = getEffectiveEidosModules().find(m => m.id === modId);
    const subType = eMod ? eMod.subType : (modId === 'PSEUDOPALAVRAS' ? 'RECOMB_STT' : 'SYLLABARY_STD');
    const list = [];

    switch (subType) {
        case 'TRACKING':
        case 'SPRINT_3S':
        case 'RECOMB_STT':
        case 'SYNTACTIC_GROUP':
            list.push({ idx: 1, formula: 'C → D', sdCode: 'C', rCode: 'D' });
            break;
        case 'FADEOUT_COLOR_MM':
            list.push({ idx: 1, formula: 'C(Cor) → C(Preto)', sdCode: 'C', rCode: 'C', customCommand: 'Dispor 3 palavras estruturadas e solicitar o pareamento com as palavras em texto preto puro.' });
            break;
        case 'CASE_GEN_MM':
            list.push({ idx: 1, formula: 'C(MAIÚSC) → C(minúsc)', sdCode: 'C', rCode: 'C', customCommand: 'Dispor 3 palavras em CAIXA ALTA e solicitar o pareamento com suas correspondentes em minúscula.' });
            break;
        case 'TYPO_GEN_MM':
            list.push({ idx: 1, formula: 'Bastão/minúsc → Cursiva', sdCode: 'C', rCode: 'C', customCommand: 'Dispor 3 palavras em letra de imprensa (maiúscula ou minúscula) e parear com suas correspondentes em letra cursiva escolar.' });
            break;
        case 'COPY_CRMTS':
        case 'WORD_SPACE':
        case 'INTRUDER_WORD':
        case 'CHRONO_SEQ':
        case 'NARRATIVE_COHERENCE':
            list.push({ idx: 1, formula: 'C → E', sdCode: 'C', rCode: 'E' });
            break;
        case 'DICT_CRMTS':
        case 'SENTENCE_BUILD':
            list.push({ idx: 1, formula: 'A → E', sdCode: 'A', rCode: 'E' });
            break;
        case 'MIN_PAIRS':
            list.push({ idx: 1, formula: 'A → C', sdCode: 'A', rCode: 'C' });
            break;
        case 'RHYME':
        case 'ALLITERATION':
            list.push({ idx: 1, formula: 'A → B', sdCode: 'A', rCode: 'B' });
            break;
        case 'SYL_COUNT':
            list.push({ idx: 1, formula: 'A → D', sdCode: 'A', rCode: 'D' });
            break;
        case 'SYL_WORD_BUILD':
            if (stg.c1 !== false) list.push({ idx: 1, formula: 'AB → E', sdCode: 'AB', rCode: 'E' });
            if (stg.c2 !== false) list.push({ idx: 2, formula: 'C → D', sdCode: 'C', rCode: 'D' });
            break;
        case 'EQUIV_4STEPS_MM':
            list.push({ idx: 1, formula: 'Treino: B → D / BC → C', sdCode: 'BC', rCode: 'C', customCommand: 'Ensino direto: solicitar nomeação da figura (B → D), revelar palavra modelo para observação e parear com a palavra igual (BC → C).' });
            list.push({ idx: 2, formula: 'Sonda Gate: B → C', sdCode: 'B', rCode: 'C', customCommand: 'Porta de entrada da Sondagem (exige 100% sem ajuda): parear Figura com Palavra escrita.' });
            list.push({ idx: 3, formula: 'Sondas: C→B | C→D | A→C', sdCode: 'C', rCode: 'D', customCommand: 'Se B → C = 100%, aplicar em ordem: Simetria (C → B), Leitura Oral pura (C → D) e Ditado (A → C).' });
            break;
        case 'SYL_BUILD_SLIDER':
            if (stg.c1 !== false) list.push({ idx: 1, formula: 'C → E', sdCode: 'C', rCode: 'E' });
            if (stg.c2 !== false) list.push({ idx: 2, formula: 'A → C', sdCode: 'A', rCode: 'C' });
            if (stg.c3 !== false) list.push({ idx: 3, formula: 'C → D', sdCode: 'C', rCode: 'D' });
            break;
        case 'CLASS_VC':
        case 'CLASS_SP':
            if (stg.c1 !== false) list.push({ idx: 1, formula: 'C → C', sdCode: 'C', rCode: 'C' });
            if (stg.c2 !== false) list.push({ idx: 2, formula: 'A → C', sdCode: 'A', rCode: 'C' });
            break;
        case 'WORDS_EQ':
            if (stg.c1 !== false) list.push({ idx: 1, formula: 'C → C', sdCode: 'C', rCode: 'C' });
            if (stg.c3 !== false) list.push({ idx: 2, formula: 'C → D', sdCode: 'C', rCode: 'D' });
            if (stg.c2 !== false) list.push({ idx: 3, formula: 'A → C', sdCode: 'A', rCode: 'C' });
            if (stg.c4 !== false) {
                list.push({ idx: 4, formula: 'B → C', sdCode: 'B', rCode: 'C' });
                list.push({ idx: 5, formula: 'C → B', sdCode: 'C', rCode: 'B' });
            }
            break;
        default:
            if (stg.c1 !== false) list.push({ idx: 1, formula: 'C → C', sdCode: 'C', rCode: 'C' });
            if (stg.c3 !== false) list.push({ idx: 2, formula: 'C → D', sdCode: 'C', rCode: 'D' });
            if (stg.c2 !== false) list.push({ idx: 3, formula: 'A → C', sdCode: 'A', rCode: 'C' });
            break;
    }

    if (list.length === 0) {
        list.push({ idx: 1, formula: 'C → C', sdCode: 'C', rCode: 'C' });
    }
    return list;
}

function synthesizeProcedureFromFormula(sdCode, rCode, numOpts, customCmd = '') {
    if (customCmd && customCmd.trim()) {
        return customCmd.trim();
    }
    let leftPart = '';
    if (sdCode === 'A') leftPart = 'Ditar o estímulo em voz alta (sem mostrar cartão).';
    else if (sdCode === 'B') leftPart = 'Apresentar o cartão da Figura no topo da mesa.';
    else if (sdCode === 'C') leftPart = 'Apresentar o cartão da Palavra/Texto no topo da mesa.';
    else if (sdCode === 'BC' || sdCode === 'CB') leftPart = 'Apresentar Figura + Palavra juntas como modelo.';
    else if (sdCode === 'AB' || sdCode === 'BA') leftPart = 'Apresentar a Figura e ditar o estímulo em voz alta.';
    else leftPart = 'Apresentar o estímulo modelo ao aluno.';

    let rightPart = '';
    if (rCode === 'BD') {
        rightPart = `Dispor ${numOpts} figuras na mesa para pareamento e solicitar a nomeação oral.`;
    } else if (rCode === 'B') {
        rightPart = `Dispor ${numOpts} cartões de figuras na mesa e solicitar que aponte ou pareie a correspondente.`;
    } else if (rCode === 'C') {
        rightPart = `Dispor ${numOpts} cartões de texto na mesa e solicitar que aponte ou pareie o correspondente.`;
    } else if (rCode === 'D') {
        rightPart = 'Sem opções na mesa. Solicitar leitura ou nomeação oral.';
    } else if (rCode === 'E') {
        rightPart = 'Entregar as peças móveis e solicitar a montagem na ordem correta.';
    }

    return `${leftPart} ${rightPart}`;
}

function removeCardFromPrintPreview(cardKey) {
    playSound('click');
    printStudioExcludedCards.add(cardKey);
    renderLivePrintStudioPreview();
}

function renderLivePrintStudioPreview() {
    const printRoot = document.getElementById('print-root');
    const modSel = document.getElementById('pk-mod-select');
    const varSel = document.getElementById('pk-var-select');
    if (!printRoot || !modSel) return;

    printRoot.innerHTML = '';
    const modId = modSel.value;
    if (!modId) {
        printRoot.innerHTML = `<div style="color:#E2E8F0; font-weight:800; padding:60px 20px; text-align:center;">Selecione uma tarefa na barra lateral esquerda para gerar o documento A4.</div>`;
        return;
    }

    const chosenVar = parseInt(varSel ? varSel.value : '1') || 1;
    const showProto = document.getElementById('pk-page-proto')?.checked !== false;
    const showSheet = document.getElementById('pk-page-sheet')?.checked !== false;
    const showBoard = document.getElementById('pk-page-board')?.checked !== false;
    const showCards = document.getElementById('pk-page-cards')?.checked !== false;

    const customSD = (document.getElementById('pk-custom-sd')?.value || '').trim();
    const waitSec = parseInt(document.getElementById('pk-wait-sec')?.value) || 5;
    const reinfSocial = (document.getElementById('pk-reinf-social-input')?.value || "Elogio social descritivo ('Muito bem!')").trim();
    const reinfInterm = (document.getElementById('pk-reinf-interm-input')?.value || "VR-3 (1 ficha a cada 3 acertos) | 45s de jogo").trim();
    const reinfMoment = document.getElementById('pk-reinf-moment-select')?.value || 'CYCLE';

    const selectedTips = [];
    if (document.getElementById('pk-tip-gestural')?.checked) selectedTips.push('Dica Gestual (Apontar)');
    if (document.getElementById('pk-tip-verbal')?.checked) selectedTips.push('Dica Verbal / Ecoica');
    if (document.getElementById('pk-tip-partial')?.checked) selectedTips.push('Dica Física Parcial');
    if (document.getElementById('pk-tip-full')?.checked) selectedTips.push('Dica Física Total');

    const customMod = (state.customModules || []).find(m => m.id === modId);
    const palDrawer = getEffectivePalavrarioDrawers().find(d => d.id === modId);
    const eMod = getEffectiveEidosModules().find(m => m.id === modId);
    const isSylFamily = ALL_SYLLABARY_KEYS.includes(modId) && !['VOGAIS', 'ENCONTROS'].includes(modId);
    const isPalDrawer = !!palDrawer;

    const modCode = eMod ? eMod.code : (palDrawer ? palDrawer.code : (customMod ? 'PERS' : 'SIL'));
    const modTitle = eMod ? eMod.title : (palDrawer ? palDrawer.title : (customMod ? customMod.title : `Família ${modId} (${getActiveSyllabaryGearObj().shortLabel})`));

    const tCfg = getTaskConfig(modId);
    const numOpts = ALL_SYLLABARY_KEYS.includes(modId)
        ? (parseInt(state.settings.opts) || 3)
        : ((tCfg && tCfg.opts >= 2) ? parseInt(tCfg.opts) : (parseInt(state.settings.opts) || 3));

    const studentName = getActiveFirstName();
    let rawPool = getPhasePool(modId, chosenVar);
    if (isSylFamily) {
        rawPool = [...generateSyllables(modId), ...getCumulativeWordsForSyllableFamily(modId, chosenVar)];
    }
    const cleanPool = rawPool.map(it => {
        if (typeof it === 'object') return it.target || it.sentence || JSON.stringify(it);
        return String(it).trim();
    }).filter(Boolean);

    const formulas = extractModuleFormulasForStudent(modId);

    if (showProto) {
        const page1 = document.createElement('div');
        page1.className = 'a4-sheet';

        const cyclesRowsHTML = formulas.map((f, i) => {
            const procText = synthesizeProcedureFromFormula(
                f.sdCode,
                f.rCode,
                numOpts,
                customSD || f.customCommand || ''
            );
            return `
                <tr>
                    <td style="font-weight:900; width:75px; text-align:center;">Etapa ${i + 1}</td>
                    <td style="font-weight:900; width:130px; text-align:center; color:#1E293B;">${f.formula}</td>
                    <td contenteditable="true">${procText}</td>
                </tr>
            `;
        }).join('');

        const tipsHTML = selectedTips.length > 0
            ? selectedTips.map(tp => `
                <div class="print-chk-line">
                    <span class="print-square"></span>
                    <span contenteditable="true">${tp}</span>
                </div>
            `).join('')
            : `<div style="font-size:0.8rem; font-weight:700; color:#475569;">Apenas Resposta Independente (Sondagem sem dicas)</div>`;

        page1.innerHTML = `
            <div>
                <div class="doc-header">
                    <div>
                        <span style="font-size:0.72rem; font-weight:900; color:#475569; text-transform:uppercase;">AlfaMTS • Protocolo de Instrução em Mesa</span>
                        <h2 contenteditable="true" style="font-size:1.35rem; font-weight:900; color:#0F172A; margin-top:2px;">${modCode} — ${modTitle} (Var ${chosenVar})</h2>
                    </div>
                    <div style="text-align:right; font-size:0.8rem; font-weight:800; color:#0F172A;">
                        <div>Aluno(a): <strong>${studentName}</strong></div>
                        <div style="margin-top:3px;">Critério: ${state.settings.crit}% (${state.settings.consecDays} sessões)</div>
                    </div>
                </div>

                <div class="doc-legend-strip">
                    <span><strong>A:</strong> Auditivo / Ditado</span>
                    <span><strong>B:</strong> Figura</span>
                    <span><strong>C:</strong> Palavra / Texto</span>
                    <span><strong>D:</strong> Resposta Oral</span>
                    <span><strong>E:</strong> Escrita / Montagem</span>
                </div>

                <table class="doc-table">
                    <thead>
                        <tr>
                            <th style="text-align:center;">Etapa</th>
                            <th style="text-align:center;">Relação (SD → R)</th>
                            <th>Procedimento na Mesa</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cyclesRowsHTML}
                    </tbody>
                </table>

                <div class="doc-box-grid">
                    <div class="doc-panel">
                        <h4>Parâmetros da Tentativa</h4>
                        <div class="print-chk-line">
                            <span class="print-square filled"></span>
                            <span contenteditable="true">Tempo de Espera (Latência): ${waitSec} segundos</span>
                        </div>
                        <div class="print-chk-line">
                            <span class="print-square filled"></span>
                            <span contenteditable="true">Alternativas dispostas na mesa: ${numOpts} opções</span>
                        </div>
                        <div class="print-chk-line" style="margin-bottom:0;">
                            <span class="print-square"></span>
                            <span contenteditable="true">Em Sonda: registrar de forma neutra sem dica</span>
                        </div>
                    </div>

                    <div class="doc-panel">
                        <h4>Hierarquia de Dicas Autorizadas</h4>
                        ${tipsHTML}
                    </div>
                </div>

                <div class="doc-panel" style="margin-bottom:12px;">
                    <h4>Esquema de Reforçamento (Contínuo, Intermitente e Momento de Entrega)</h4>
                    <div class="print-chk-line">
                        <span class="print-square filled"></span>
                        <span contenteditable="true"><strong>Contínuo (CRF / Social):</strong> ${reinfSocial}</span>
                    </div>
                    <div class="print-chk-line">
                        <span class="print-square filled"></span>
                        <span contenteditable="true"><strong>Intermitente / Tangível (Frequência e Duração):</strong> ${reinfInterm}</span>
                    </div>
                    <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap; margin-top:6px; padding-top:6px; border-top:1px dashed #CBD5E1; font-size:0.78rem; font-weight:800;">
                        <span>Entregar Fichas / Acesso ao Reforçador:</span>
                        <span style="display:inline-flex; align-items:center; gap:5px;"><span class="print-square ${reinfMoment === 'ITEM' ? 'filled' : ''}"></span> Por item/tentativa</span>
                        <span style="display:inline-flex; align-items:center; gap:5px;"><span class="print-square ${reinfMoment === 'CYCLE' ? 'filled' : ''}"></span> Ao final de cada ciclo</span>
                        <span style="display:inline-flex; align-items:center; gap:5px;"><span class="print-square ${reinfMoment === 'TASK' ? 'filled' : ''}"></span> Ao fim da tarefa completa</span>
                    </div>
                </div>

                <div class="doc-panel">
                    <h4>Estímulos Alvo (${modTitle})</h4>
                    <div contenteditable="true" style="font-size:0.86rem; font-weight:800; color:#0F172A; line-height:1.5;">
                        ${cleanPool.map(s => getNormalizedWordKey(s)).join('  •  ')}
                    </div>
                </div>
            </div>

            <div style="border-top:1.5px solid #0F172A; padding-top:6px; display:flex; justify-content:space-between; font-size:0.7rem; font-weight:800; color:#334155;">
                <span>AlfaMTS • Material Concreto</span>
                <span>Aluno: ${studentName} • ${modCode} (Var ${chosenVar}) • Página 1: Protocolo</span>
            </div>
        `;
        printRoot.appendChild(page1);
    }

    if (showSheet) {
        const page2 = document.createElement('div');
        page2.className = 'a4-sheet';

        const rows10 = [];
        for (let i = 0; i < 10; i++) {
            const targetItem = getNormalizedWordKey(cleanPool[i % Math.max(1, cleanPool.length)] || '');
            rows10.push(`
                <tr>
                    <td style="width:42px; font-weight:900;">${String(i + 1).padStart(2, '0')}</td>
                    <td contenteditable="true" style="font-weight:900; width:170px;">${targetItem}</td>
                    <td style="width:155px;">
                        <div style="display:inline-flex; align-items:center; gap:10px;">
                            <span class="print-square"></span> + &nbsp;
                            <span class="print-square"></span> - &nbsp;
                            <span class="print-square"></span> 0
                        </div>
                    </td>
                    <td style="width:140px;"></td>
                    <td></td>
                </tr>
            `);
        }

        page2.innerHTML = `
            <div>
                <div class="doc-header">
                    <div>
                        <span style="font-size:0.72rem; font-weight:900; color:#475569; text-transform:uppercase;">Folha de Registro em Mesa</span>
                        <h2 contenteditable="true" style="font-size:1.3rem; font-weight:900; color:#0F172A; margin-top:2px;">${modCode} — ${modTitle} (Var ${chosenVar})</h2>
                    </div>
                    <div style="text-align:right; font-size:0.8rem; font-weight:800; color:#0F172A;">
                        <div>Aluno(a): <strong>${studentName}</strong></div>
                        <div style="margin-top:4px;">Data: ____/____/202___</div>
                    </div>
                </div>

                <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:800; margin-bottom:10px; padding:6px 10px; border:1.5px solid #0F172A; border-radius:8px;">
                    <span>Aplicador(a): ____________________________________</span>
                    <span>Modalidade: [ &nbsp; ] Treino &nbsp; [ &nbsp; ] Sondagem</span>
                </div>

                <table class="doc-table doc-datasheet-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Modelo (Alvo)</th>
                            <th>Resposta (+ / - / 0)</th>
                            <th>Dica Utilizada</th>
                            <th>Observações</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows10.join('')}
                    </tbody>
                </table>

                <div class="doc-panel" style="margin-top:10px;">
                    <h4>Fechamento da Sessão</h4>
                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; font-size:0.82rem; font-weight:800;">
                        <div>Acertos Independentes (+): ____ / 10</div>
                        <div>Precisão Final: ______ %</div>
                        <div style="display:flex; align-items:center; gap:8px;">
                            Meta Atingida: <span class="print-square"></span> Sim &nbsp; <span class="print-square"></span> Não
                        </div>
                    </div>
                </div>
            </div>

            <div style="border-top:1.5px solid #0F172A; padding-top:6px; display:flex; justify-content:space-between; font-size:0.7rem; font-weight:800; color:#334155;">
                <span>AlfaMTS • Folha de Registro</span>
                <span>Aluno: ${studentName} • ${modCode} (Var ${chosenVar}) • Página 2: Registro</span>
            </div>
        `;
        printRoot.appendChild(page2);
    }

    if (showBoard) {
        const page3 = document.createElement('div');
        page3.className = 'a4-sheet';

        let compZonesHTML = '';
        for (let c = 0; c < numOpts; c++) {
            compZonesHTML += `
                <div class="workboard-comp-zone">
                    <span style="font-size:0.78rem; font-weight:900; color:#64748B; text-transform:uppercase;">Comparação ${c + 1}</span>
                </div>
            `;
        }

        page3.innerHTML = `
            <div>
                <div class="doc-header">
                    <div>
                        <span style="font-size:0.72rem; font-weight:900; color:#475569; text-transform:uppercase;">Prancha de Trabalho em Mesa</span>
                        <h2 contenteditable="true" style="font-size:1.25rem; font-weight:900; color:#0F172A;">${modCode} — ${modTitle} (${numOpts} Alternativas)</h2>
                    </div>
                    <span style="font-size:0.75rem; font-weight:800; color:#475569;">Base para Plastificação</span>
                </div>

                <div style="margin-top:8mm;">
                    <span style="font-size:0.8rem; font-weight:900; text-transform:uppercase; color:#0F172A; display:block; margin-bottom:3mm; text-align:center;">Zona do Estímulo Modelo</span>
                    <div class="workboard-model-zone">
                        <span style="font-size:0.85rem; font-weight:900; color:#64748B; text-transform:uppercase;">Posicione o Estímulo Modelo Aqui</span>
                    </div>

                    <span style="font-size:0.8rem; font-weight:900; text-transform:uppercase; color:#0F172A; display:block; margin-bottom:3mm; text-align:center;">Zona das Comparações</span>
                    <div class="workboard-comp-grid" style="grid-template-columns: repeat(${numOpts}, 1fr);">
                        ${compZonesHTML}
                    </div>
                </div>
            </div>

            <div style="border-top:1.5px solid #0F172A; padding-top:6px; display:flex; justify-content:space-between; font-size:0.7rem; font-weight:800; color:#334155;">
                <span>AlfaMTS • Prancha de Trabalho</span>
                <span>Aluno: ${studentName} • ${modCode} • Página 3: Prancha</span>
            </div>
        `;
        printRoot.appendChild(page3);
    }

    if (showCards) {
        const allCards = [];
        const uniqueStimuli = [...new Set(cleanPool)];
        const needsImageCards = isSylFamily || isPalDrawer || formulas.some(f => f.sdCode.includes('B') || f.rCode.includes('B'));
        const needsFragments = isPalDrawer || formulas.some(f => f.rCode === 'E');
        const isCaseGen = (eMod && eMod.subType === 'CASE_GEN_MM');
        const isTypoGen = (eMod && eMod.subType === 'TYPO_GEN_MM');
        const isFadeoutColor = (eMod && eMod.subType === 'FADEOUT_COLOR_MM');

        uniqueStimuli.forEach((stim, sIdx) => {
            const cleanW = getNormalizedWordKey(stim);
            const isLongSentence = cleanW.length > 18 || cleanW.includes(' ');

            if ((isSylFamily || isPalDrawer || isFadeoutColor) && cleanW.length >= 3 && !isLongSentence) {
                const structKey = `struct_${sIdx}_${cleanW}`;
                if (!printStudioExcludedCards.has(structKey)) {
                    allCards.push({
                        key: structKey,
                        sizeClass: '',
                        label: `${cleanW} [Estruturada]`,
                        html: `<span contenteditable="true">${formatStimulusTextHTML(stim, modId, true, false)}</span>`
                    });
                }
                const plainKey = `plain_${sIdx}_${cleanW}`;
                if (!printStudioExcludedCards.has(plainKey)) {
                    allCards.push({
                        key: plainKey,
                        sizeClass: '',
                        label: `${cleanW} [Preto]`,
                        html: `<span contenteditable="true">${formatStimulusTextHTML(cleanW, modId, false, true)}</span>`
                    });
                }
            } else if (isCaseGen) {
                const upKey = `up_${sIdx}_${cleanW}`;
                if (!printStudioExcludedCards.has(upKey)) {
                    allCards.push({
                        key: upKey,
                        sizeClass: '',
                        label: `${cleanW} [MAIÚSC]`,
                        html: `<span contenteditable="true">${cleanW.toUpperCase()}</span>`
                    });
                }
                const lowKey = `low_${sIdx}_${cleanW}`;
                if (!printStudioExcludedCards.has(lowKey)) {
                    allCards.push({
                        key: lowKey,
                        sizeClass: '',
                        label: `${cleanW.toLowerCase()} [minúsc]`,
                        html: `<span contenteditable="true" class="topo-lower">${cleanW.toLowerCase()}</span>`
                    });
                }
            } else if (isTypoGen) {
                const upKey = `t_up_${sIdx}_${cleanW}`;
                if (!printStudioExcludedCards.has(upKey)) {
                    allCards.push({
                        key: upKey,
                        sizeClass: '',
                        label: `${cleanW} [Bastão]`,
                        html: `<span contenteditable="true">${cleanW.toUpperCase()}</span>`
                    });
                }
                const curKey = `t_cur_${sIdx}_${cleanW}`;
                if (!printStudioExcludedCards.has(curKey)) {
                    allCards.push({
                        key: curKey,
                        sizeClass: '',
                        label: `${cleanW} [Cursiva]`,
                        html: `<span contenteditable="true" class="topo-school">${formatTextForFontCase(cleanW, 'SCHOOL')}</span>`
                    });
                }
            } else {
                const textKey = `txt_${sIdx}_${cleanW}`;
                if (!printStudioExcludedCards.has(textKey)) {
                    allCards.push({
                        key: textKey,
                        sizeClass: isLongSentence ? 'wide-sentence-card' : '',
                        label: cleanW,
                        html: `<span contenteditable="true">${formatStimulusTextHTML(stim, modId, isSylFamily, false)}</span>`
                    });
                }
            }

            if ((needsImageCards || hasValidVisualRepresentation(cleanW)) && !isLongSentence && !isTypoGen && cleanW.length >= 3 && hasValidVisualRepresentation(cleanW)) {
                const imgKey = `img_${sIdx}_${cleanW}`;
                if (!printStudioExcludedCards.has(imgKey)) {
                    allCards.push({
                        key: imgKey,
                        sizeClass: '',
                        label: `${cleanW} (Fig)`,
                        html: getWordVisualRepresentationHTML(cleanW, 3.2)
                    });
                }
            }

            if (needsFragments && !isLongSentence) {
                const explicitSyls = extractExplicitSyllables(stim);
                const frags = explicitSyls.length > 1
                    ? explicitSyls
                    : (cleanW.length <= 8 ? cleanW.split('') : []);

                frags.forEach((fg, fIdx) => {
                    const fgKey = `frag_${sIdx}_${fIdx}_${fg}`;
                    if (!printStudioExcludedCards.has(fgKey)) {
                        allCards.push({
                            key: fgKey,
                            sizeClass: '',
                            label: `${cleanW} [${fg}]`,
                            html: `<span contenteditable="true">${formatStimulusTextHTML(fg, modId)}</span>`
                        });
                    }
                });
            }
        });

        const pagesBuckets = [];
        let currentBucket = [];
        let currentWeight = 0;

        allCards.forEach(card => {
            const weight = card.sizeClass === 'wide-sentence-card' ? 3 : 1;
            if (currentWeight + weight > 9 && currentBucket.length > 0) {
                pagesBuckets.push(currentBucket);
                currentBucket = [];
                currentWeight = 0;
            }
            currentBucket.push(card);
            currentWeight += weight;
        });
        if (currentBucket.length > 0) pagesBuckets.push(currentBucket);

        pagesBuckets.forEach((bucket, bIdx) => {
            const cardSheet = document.createElement('div');
            cardSheet.className = 'a4-sheet';

            cardSheet.innerHTML = `
                <div>
                    <div class="doc-header">
                        <div>
                            <span style="font-size:0.72rem; font-weight:900; color:#475569; text-transform:uppercase;">Cartões de Estímulos e Fichas Móveis</span>
                            <h2 contenteditable="true" style="font-size:1.2rem; font-weight:900; color:#0F172A;">${modCode} — ${modTitle} (Var ${chosenVar})</h2>
                        </div>
                        <span style="font-size:0.75rem; font-weight:800; color:#475569;">Folha de Recorte ${bIdx + 1}/${pagesBuckets.length}</span>
                    </div>

                    <div class="cutout-cards-flex" style="margin-top:4mm;">
                        ${bucket.map(c => `
                            <div class="cutout-card ${c.sizeClass}">
                                <button type="button" class="card-remove-preview-btn" title="Remover este cartão" onclick="removeCardFromPrintPreview('${c.key}')">×</button>
                                <div class="cutout-card-main ${getTopographicClasses(modId)}">
                                    ${c.html}
                                </div>
                                <div class="cutout-card-footer">
                                    ${modCode} • Var ${chosenVar} • ${c.label}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div style="border-top:1.5px solid #0F172A; padding-top:6px; display:flex; justify-content:space-between; font-size:0.7rem; font-weight:800; color:#334155;">
                    <span>AlfaMTS • Cartões para Plastificação</span>
                    <span>Aluno: ${studentName} • ${modCode} (Var ${chosenVar})</span>
                </div>
            `;
            printRoot.appendChild(cardSheet);
        });
    }
}

window.handleAndroidBack = function() {
    const arcadeModal = document.getElementById('modal-reward-arcade');
    if (arcadeModal && arcadeModal.style.display === 'flex') {
        closeArcadeSandbox();
        return;
    }
    let modalOpen = false;
    document.querySelectorAll('.modal-overlay').forEach(m => { if (m.style.display === 'flex') modalOpen = true; });
    if (modalOpen) { closeModals(); return; }
    if (document.getElementById('screen-game').classList.contains('active')) { requestAbortGame(); return; }
    if (document.getElementById('screen-home').classList.contains('active')) { handleGridBackNavigation(); return; }
    if (document.getElementById('screen-complements') && document.getElementById('screen-complements').classList.contains('active')) {
        handleComplementsBack();
        return;
    }
    if (
        document.getElementById('screen-dashboard').classList.contains('active') ||
        document.getElementById('screen-settings').classList.contains('active')
    ) {
        goSplash();
        return;
    }
    if (document.getElementById('screen-splash').classList.contains('active')) {
        const gk = document.getElementById('screen-gatekeeper');
        if (gk) { openGatekeeper(); return; }
    }
    if (window.AppInventor) window.AppInventor.setWebViewString("VOLTAR_MENU");
};

window.onload = async function() {
    setupBackdropClosing();
    setupDockSafetyLock();
    await loadAllCustomImagesIntoCache();
    await loadRepoWordsCatalog();
    await loadArcadeManifest();
    applyTheme();
    if (state.settings.timer && state.settings.timer.enabled && !state.session.expired && state.session.endTime) {
        if (!timerInterval) timerInterval = setInterval(checkTimer, 1000);
        checkTimer();
    }
    updateLobbyButton();
    const gk = document.getElementById('screen-gatekeeper');
    if (gk) {
        openGatekeeper();
    } else {
        goSplash();
    }
};
