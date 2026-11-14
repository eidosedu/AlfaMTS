/* ============================================================================
   ALFAMTS - BANCO DE DADOS E CURRÍCULO ESTRUTURADO (database.js)
   DICIONÁRIO SILÁBICO MANUAL ESTRITO (ZERO REGEX • ZERO EMOJIS)
   TRILHA N1–N5 • ALFABETO FONOLÓGICO • SILABÁRIO (6 CONJ.) • PALAVRÁRIO (8 GAVETAS)
   ============================================================================ */

/* 1. BASES VOCÁLICAS E ORDEM CUMULATIVA DOS 6 CONJUNTOS SILÁBICOS (CAP. 5) */
const vowels = ['A', 'E', 'I', 'O', 'U'];
const encounters = ['AI', 'EI', 'OI', 'UI', 'AU', 'EU', 'OU', 'ÃO'];

const syllabaryOrder = [
    'VOGAIS', 'ENCONTROS',
    'T', 'L', 'M',     // Conjunto 1
    'F', 'B', 'R',     // Conjunto 2
    'P', 'N', 'V',     // Conjunto 3
    'S', 'D', 'J',     // Conjunto 4
    'X', 'Z',          // Conjunto 5
    'C', 'G', 'Q'      // Conjunto 6
];

const extraModules = ['PSEUDOPALAVRAS', 'PALAVRAS'];
const curriculumOrder = [...syllabaryOrder, ...extraModules];

/* 2. CATÁLOGO DE SLUGS .WEBP DO REPOSITÓRIO (assets/img/palavras/[slug].webp) */
const REPO_WORDS_CATALOG = [
    'abacaxi', 'abelha', 'aquario', 'arvore', 'aviao', 'azeite', 'banana', 'barco',
    'batata', 'bebe', 'blusa', 'boca', 'bola', 'bolo', 'boneca', 'bota', 'bruxa',
    'bule', 'buzina', 'cabide', 'cachorro', 'caixa', 'caju', 'cama', 'caneca', 'caqui',
    'carro', 'casa', 'cavalo', 'cebola', 'chave', 'chuva', 'cobra', 'cola', 'copo',
    'dado', 'dedo', 'dente', 'dia', 'doce', 'escova', 'espada', 'estrela', 'faca',
    'fala', 'familia', 'figo', 'fita', 'flauta', 'flor', 'foca', 'fofo', 'fogo',
    'foguete', 'folha', 'formiga', 'galinha', 'galo', 'garfo', 'gato', 'gelo', 'girafa',
    'gota', 'guitarra', 'ilha', 'jacare', 'janela', 'jiboia', 'jogo', 'laco', 'lago',
    'lama', 'lata', 'leao', 'leite', 'leque', 'limao', 'livro', 'lixo', 'lobo',
    'lote', 'lua', 'luta', 'luva', 'maca', 'macaco', 'mala', 'mao', 'martelo',
    'mato', 'meia', 'melao', 'menina', 'menino', 'mesa', 'milho', 'mola', 'moto',
    'muleta', 'navio', 'ninho', 'nuvem', 'olho', 'osso', 'ovelha', 'ovo', 'panela',
    'pao', 'passaro', 'pasta', 'pato', 'paz', 'pe', 'peixe', 'pente', 'peteca',
    'pipa', 'pirulito', 'planta', 'ponte', 'porta', 'pote', 'prato', 'quatro', 'queijo',
    'quiabo', 'rato', 'rede', 'rei', 'relogio', 'roda', 'rosa', 'roupa', 'rua',
    'salada', 'sapato', 'sapo', 'sino', 'sofa', 'sol', 'suco', 'tambor', 'tapete',
    'tatu', 'taxi', 'teia', 'tela', 'teto', 'tia', 'tigre', 'tijolo', 'tio',
    'tomate', 'trator', 'trem', 'tucano', 'tudo', 'urso', 'uva', 'vaca', 'vassoura',
    'vela', 'violao', 'xale', 'xicara', 'zebra', 'zero'
];

/* 3. MATRIZ DE PALAVRAS CUMULATIVAS POR FAMÍLIA SILÁBICA (CAP. 5) */
const SYLLABARY_CUMULATIVE_WORDS = {
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

/* 4. AS 8 GAVETAS LEXICAIS DO PALAVRÁRIO */
const PALAVRARIO_DRAWERS = [
    {
        id: 'PAL_1',
        code: 'GAVETA 1',
        title: 'Dissílabas CV (Conj. 1 e 2)',
        desc: 'Palavras dissílabas formadas por T, L, M, F, B, R.',
        variations: {
            1: ['TATU', 'LATA', 'MALA', 'FACA', 'BOLA', 'RATO'],
            2: ['TELA', 'MOLA', 'FOCA', 'BOLO', 'BOTA', 'RODA']
        }
    },
    {
        id: 'PAL_2',
        code: 'GAVETA 2',
        title: 'Dissílabas CV (Conj. 3 a 6)',
        desc: 'Palavras dissílabas com P, N, V, S, D, J, X, Z, C, G.',
        variations: {
            1: ['PATO', 'VACA', 'SAPO', 'DADO', 'CASA', 'GATO'],
            2: ['PIPA', 'LUVA', 'SUCO', 'DEDO', 'CAMA', 'GALO']
        }
    },
    {
        id: 'PAL_3',
        code: 'GAVETA 3',
        title: 'Trissílabas Simples',
        desc: 'Palavras de 3 sílabas abertas controladas por extensão.',
        variations: {
            1: ['TOMATE', 'PANELA', 'CAVALO', 'MACACO', 'SAPATO', 'BONECA'],
            2: ['JANELA', 'TAPETE', 'BATATA', 'SALADA', 'CANECA', 'TUCANO']
        }
    },
    {
        id: 'PAL_4',
        code: 'GAVETA 4',
        title: 'Encontros Vocálicos e Nasais',
        desc: 'Vocábulos com ditongos orais e vogais/ditongos nasais.',
        variations: {
            1: ['MÃO', 'PÃO', 'LEÃO', 'AVIÃO', 'VIOLÃO', 'LIMÃO'],
            2: ['MEIA', 'TEIA', 'LEITE', 'CAIXA', 'PEIXE', 'MELÃO']
        }
    },
    {
        id: 'PAL_5',
        code: 'GAVETA 5',
        title: 'Sílabas Travadas (CVC)',
        desc: 'Palavras com coda silábica em R, S, L, M, N.',
        variations: {
            1: ['PORTA', 'BARCO', 'GARFO', 'URSO', 'SOL', 'PASTA'],
            2: ['ESCOVA', 'FORMIGA', 'TAMBOR', 'PENTE', 'PONTE', 'NUVEM']
        }
    },
    {
        id: 'PAL_6',
        code: 'GAVETA 6',
        title: 'Encontros Consonantais (CCV)',
        desc: 'Sílabas complexas com grupos consonantais em R e L.',
        variations: {
            1: ['PRATO', 'BRUXA', 'LIVRO', 'PLANTA', 'BLUSA', 'ZEBRA'],
            2: ['TREM', 'TRATOR', 'TIGRE', 'COBRA', 'FLOR', 'FLAUTA']
        }
    },
    {
        id: 'PAL_7',
        code: 'GAVETA 7',
        title: 'Dígrafos',
        desc: 'Palavras com CH, LH, NH, RR, SS, QU e GU.',
        variations: {
            1: ['CHAVE', 'ABELHA', 'NINHO', 'CARRO', 'OSSO', 'QUEIJO'],
            2: ['CHUVA', 'MILHO', 'GALINHA', 'VASSOURA', 'PÁSSARO', 'FOGUETE']
        }
    },
    {
        id: 'PAL_8',
        code: 'GAVETA 8',
        title: 'Irregulares e Contextuais',
        desc: 'Casos de CE/CI, GE/GI, Ç, S com som de Z e valores do X.',
        variations: {
            1: ['MAÇÃ', 'LAÇO', 'GELO', 'GIRAFA', 'XÍCARA', 'CASA'],
            2: ['DOCE', 'CEBOLA', 'RELÓGIO', 'PEIXE', 'TÁXI', 'ROSA']
        }
    }
];

/* 5. MAPEAMENTO DE ÁUDIOS FONÊMICOS E ALFABETO FONOLÓGICO */
const FONEMAS_AUDIO_MAP = {
    'A': { '1': 'v-a-1.ogg', '2': 'v-a-2.ogg' },
    'E': { '1': 'v-e-1.ogg', '2': 'v-e-2.ogg' },
    'I': { '1': 'v-i-1.ogg' },
    'O': { '1': 'v-o-1.ogg', '2': 'v-o-2.ogg' },
    'U': { '1': 'v-u-1.ogg' },
    'B': { '1': 'c-b-1.ogg' },
    'C': { '1': 'c-c-1.ogg', '2': 'c-c-2.ogg' },
    'D': { '1': 'c-d-1.ogg' },
    'F': { '1': 'c-f-1.ogg' },
    'G': { '1': 'c-g-1.ogg', '2': 'c-g-2.ogg' },
    'J': { '1': 'c-j-1.ogg' },
    'K': { '1': 'c-k-1.ogg' },
    'L': { '1': 'c-l-1.ogg', '2': 'c-l-2.ogg' },
    'M': { '1': 'c-m-1.ogg' },
    'N': { '1': 'c-n-1.ogg' },
    'P': { '1': 'c-p-1.ogg' },
    'Q': { '1': 'c-q-1.ogg' },
    'R': { '1': 'c-r-1.ogg', '2': 'c-r-2.ogg' },
    'S': { '1': 'c-s-1.ogg', '2': 'c-s-2.ogg' },
    'T': { '1': 'c-t-1.ogg' },
    'V': { '1': 'c-v-1.ogg' },
    'W': { '1': 'c-w-1.ogg', '2': 'c-w-2.ogg' },
    'X': { '1': 'c-x-1.ogg' },
    'Y': { '1': 'c-y-1.ogg' },
    'Z': { '1': 'c-z-1.ogg' }
};

const PHONOLOGICAL_ALPHABET_MODULES = [
    { id: 'FA_A_1', letter: 'A', varIdx: '1', title: 'A (Aberto)', desc: 'Vogal oral aberta /a/.' },
    { id: 'FA_A_2', letter: 'A', varIdx: '2', title: 'A (Fechado)', desc: 'Vogal reduzida /ɐ/.' },
    { id: 'FA_E_1', letter: 'E', varIdx: '1', title: 'E (Aberto)', desc: 'Vogal aberta /ɛ/.' },
    { id: 'FA_E_2', letter: 'E', varIdx: '2', title: 'E (Fechado)', desc: 'Vogal fechada /e/.' },
    { id: 'FA_I_1', letter: 'I', varIdx: '1', title: 'I', desc: 'Vogal anterior alta /i/.' },
    { id: 'FA_O_1', letter: 'O', varIdx: '1', title: 'O (Aberto)', desc: 'Vogal aberta /ɔ/.' },
    { id: 'FA_O_2', letter: 'O', varIdx: '2', title: 'O (Fechado)', desc: 'Vogal fechada /o/.' },
    { id: 'FA_U_1', letter: 'U', varIdx: '1', title: 'U', desc: 'Vogal posterior alta /u/.' },
    { id: 'FA_F_1', letter: 'F', varIdx: '1', title: 'F', desc: 'Fricativa labiodental surda /f/.' },
    { id: 'FA_V_1', letter: 'V', varIdx: '1', title: 'V', desc: 'Fricativa labiodental sonora /v/.' },
    { id: 'FA_M_1', letter: 'M', varIdx: '1', title: 'M', desc: 'Nasal bilabial /m/.' },
    { id: 'FA_N_1', letter: 'N', varIdx: '1', title: 'N', desc: 'Nasal alveolar /n/.' },
    { id: 'FA_S_1', letter: 'S', varIdx: '1', title: 'S ( /s/ )', desc: 'Fricativa alveolar surda /s/.' },
    { id: 'FA_S_2', letter: 'S', varIdx: '2', title: 'S ( /z/ )', desc: 'S intervocálico com som de /z/.' },
    { id: 'FA_Z_1', letter: 'Z', varIdx: '1', title: 'Z', desc: 'Fricativa alveolar sonora /z/.' },
    { id: 'FA_L_1', letter: 'L', varIdx: '1', title: 'L (Inicial)', desc: 'Lateral alveolar /l/.' },
    { id: 'FA_L_2', letter: 'L', varIdx: '2', title: 'L (Final /u/)', desc: 'L em coda silábica /w/.' },
    { id: 'FA_R_1', letter: 'R', varIdx: '1', title: 'R (Forte)', desc: 'R inicial /x/.' },
    { id: 'FA_R_2', letter: 'R', varIdx: '2', title: 'R (Brando)', desc: 'Tepe alveolar intervocálico /ɾ/.' },
    { id: 'FA_X_1', letter: 'X', varIdx: '1', title: 'X', desc: 'Fricativa pós-alveolar surda /ʃ/.' },
    { id: 'FA_J_1', letter: 'J', varIdx: '1', title: 'J', desc: 'Fricativa pós-alveolar sonora /ʒ/.' },
    { id: 'FA_P_1', letter: 'P', varIdx: '1', title: 'P', desc: 'Oclusiva bilabial surda /p/.' },
    { id: 'FA_B_1', letter: 'B', varIdx: '1', title: 'B', desc: 'Oclusiva bilabial sonora /b/.' },
    { id: 'FA_T_1', letter: 'T', varIdx: '1', title: 'T', desc: 'Oclusiva alveolar surda /t/.' },
    { id: 'FA_D_1', letter: 'D', varIdx: '1', title: 'D', desc: 'Oclusiva alveolar sonora /d/.' },
    { id: 'FA_C_1', letter: 'C', varIdx: '1', title: 'C ( /k/ )', desc: 'Oclusiva velar surda /k/.' },
    { id: 'FA_C_2', letter: 'C', varIdx: '2', title: 'C ( /s/ )', desc: 'Fricativa surda /s/ antes de E, I.' },
    { id: 'FA_G_1', letter: 'G', varIdx: '1', title: 'G ( /g/ )', desc: 'Oclusiva velar sonora /g/.' },
    { id: 'FA_G_2', letter: 'G', varIdx: '2', title: 'G ( /ʒ/ )', desc: 'Fricativa sonora /ʒ/ antes de E, I.' },
    { id: 'FA_Q_1', letter: 'Q', varIdx: '1', title: 'Q', desc: 'Oclusiva velar /k/.' }
];

/* 6. DICIONÁRIO EXPLÍCITO DE PALAVRAS (SEPARAÇÃO SILÁBICA MANUAL • ZERO REGEX • ZERO EMOJIS) */
const WORD_BANK = {
    // Conjunto 1 (T, L, M)
    'TATU':     { word: 'TATU',     syllables: ['TA', 'TU'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/tatu.webp' },
    'TETO':     { word: 'TETO',     syllables: ['TE', 'TO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/teto.webp' },
    'TIA':      { word: 'TIA',      syllables: ['TI', 'A'],            count: 2, struct: 'CV_SIMPLE',   cat: 'PESSOA',    img: 'assets/img/palavras/tia.webp' },
    'TIO':      { word: 'TIO',      syllables: ['TI', 'O'],            count: 2, struct: 'CV_SIMPLE',   cat: 'PESSOA',    img: 'assets/img/palavras/tio.webp' },
    'TEIA':     { word: 'TEIA',     syllables: ['TEI', 'A'],           count: 2, struct: 'CV_SIMPLE',   cat: 'NATUREZA',  img: 'assets/img/palavras/teia.webp' },
    'TUDO':     { word: 'TUDO',     syllables: ['TU', 'DO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'CONCEITO',  img: 'assets/img/palavras/tudo.webp' },
    'LATA':     { word: 'LATA',     syllables: ['LA', 'TA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/lata.webp' },
    'LUTA':     { word: 'LUTA',     syllables: ['LU', 'TA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ESPORTE',   img: 'assets/img/palavras/luta.webp' },
    'TELA':     { word: 'TELA',     syllables: ['TE', 'LA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/tela.webp' },
    'LUA':      { word: 'LUA',      syllables: ['LU', 'A'],            count: 2, struct: 'CV_SIMPLE',   cat: 'NATUREZA',  img: 'assets/img/palavras/lua.webp' },
    'LEITE':    { word: 'LEITE',    syllables: ['LEI', 'TE'],          count: 2, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/leite.webp' },
    'LOTE':     { word: 'LOTE',     syllables: ['LO', 'TE'],           count: 2, struct: 'CV_SIMPLE',   cat: 'LUGAR',     img: 'assets/img/palavras/lote.webp' },
    'MALA':     { word: 'MALA',     syllables: ['MA', 'LA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/mala.webp' },
    'MATO':     { word: 'MATO',     syllables: ['MA', 'TO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'NATUREZA',  img: 'assets/img/palavras/mato.webp' },
    'MOLA':     { word: 'MOLA',     syllables: ['MO', 'LA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/mola.webp' },
    'TOMATE':   { word: 'TOMATE',   syllables: ['TO', 'MA', 'TE'],     count: 3, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/tomate.webp' },
    'MULETA':   { word: 'MULETA',   syllables: ['MU', 'LE', 'TA'],     count: 3, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/muleta.webp' },
    'LAMA':     { word: 'LAMA',     syllables: ['LA', 'MA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'NATUREZA',  img: 'assets/img/palavras/lama.webp' },
    'MOTO':     { word: 'MOTO',     syllables: ['MO', 'TO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'VEÍCULO',   img: 'assets/img/palavras/moto.webp' },
    'MEIA':     { word: 'MEIA',     syllables: ['MEI', 'A'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ROUPA',     img: 'assets/img/palavras/meia.webp' },

    // Conjunto 2 (F, B, R)
    'FACA':     { word: 'FACA',     syllables: ['FA', 'CA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/faca.webp' },
    'FITA':     { word: 'FITA',     syllables: ['FI', 'TA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/fita.webp' },
    'FOGO':     { word: 'FOGO',     syllables: ['FO', 'GO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'NATUREZA',  img: 'assets/img/palavras/fogo.webp' },
    'FAMÍLIA':  { word: 'FAMÍLIA',  syllables: ['FA', 'MÍ', 'LIA'],    count: 3, struct: 'CV_SIMPLE',   cat: 'PESSOA',    img: 'assets/img/palavras/familia.webp' },
    'FALA':     { word: 'FALA',     syllables: ['FA', 'LA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'AÇÃO',      img: 'assets/img/palavras/fala.webp' },
    'FOFO':     { word: 'FOFO',     syllables: ['FO', 'FO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'QUALIDADE', img: 'assets/img/palavras/fofo.webp' },
    'FOCA':     { word: 'FOCA',     syllables: ['FO', 'CA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/foca.webp' },
    'BOLA':     { word: 'BOLA',     syllables: ['BO', 'LA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'BRINQUEDO', img: 'assets/img/palavras/bola.webp' },
    'BOLO':     { word: 'BOLO',     syllables: ['BO', 'LO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/bolo.webp' },
    'BOTA':     { word: 'BOTA',     syllables: ['BO', 'TA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ROUPA',     img: 'assets/img/palavras/bota.webp' },
    'BULE':     { word: 'BULE',     syllables: ['BU', 'LE'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/bule.webp' },
    'LOBO':     { word: 'LOBO',     syllables: ['LO', 'BO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/lobo.webp' },
    'BEBÊ':     { word: 'BEBÊ',     syllables: ['BE', 'BÊ'],           count: 2, struct: 'CV_SIMPLE',   cat: 'PESSOA',    img: 'assets/img/palavras/bebe.webp' },
    'BOCA':     { word: 'BOCA',     syllables: ['BO', 'CA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'CORPO',     img: 'assets/img/palavras/boca.webp' },
    'RATO':     { word: 'RATO',     syllables: ['RA', 'TO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/rato.webp' },
    'RODA':     { word: 'RODA',     syllables: ['RO', 'DA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/roda.webp' },
    'REDE':     { word: 'REDE',     syllables: ['RE', 'DE'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/rede.webp' },
    'RUA':      { word: 'RUA',      syllables: ['RU', 'A'],            count: 2, struct: 'CV_SIMPLE',   cat: 'LUGAR',     img: 'assets/img/palavras/rua.webp' },
    'REI':      { word: 'REI',      syllables: ['REI'],                count: 1, struct: 'CV_SIMPLE',   cat: 'PESSOA',    img: 'assets/img/palavras/rei.webp' },
    'ROUPA':    { word: 'ROUPA',    syllables: ['ROU', 'PA'],          count: 2, struct: 'CV_SIMPLE',   cat: 'ROUPA',     img: 'assets/img/palavras/roupa.webp' },

    // Conjunto 3 (P, N, V)
    'PATO':     { word: 'PATO',     syllables: ['PA', 'TO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/pato.webp' },
    'PIPA':     { word: 'PIPA',     syllables: ['PI', 'PA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'BRINQUEDO', img: 'assets/img/palavras/pipa.webp' },
    'PANELA':   { word: 'PANELA',   syllables: ['PA', 'NE', 'LA'],     count: 3, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/panela.webp' },
    'PETECA':   { word: 'PETECA',   syllables: ['PE', 'TE', 'CA'],     count: 3, struct: 'CV_SIMPLE',   cat: 'BRINQUEDO', img: 'assets/img/palavras/peteca.webp' },
    'POTE':     { word: 'POTE',     syllables: ['PO', 'TE'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/pote.webp' },
    'PÉ':       { word: 'PÉ',       syllables: ['PÉ'],                 count: 1, struct: 'CV_SIMPLE',   cat: 'CORPO',     img: 'assets/img/palavras/pe.webp' },
    'PÃO':      { word: 'PÃO',      syllables: ['PÃO'],                count: 1, struct: 'CVM_NASAL',   cat: 'ALIMENTO',  img: 'assets/img/palavras/pao.webp' },
    'PIRULITO': { word: 'PIRULITO', syllables: ['PI','RU','LI','TO'],  count: 4, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/pirulito.webp' },
    'NAVIO':    { word: 'NAVIO',    syllables: ['NA', 'VI', 'O'],      count: 3, struct: 'CV_SIMPLE',   cat: 'VEÍCULO',   img: 'assets/img/palavras/navio.webp' },
    'BONECA':   { word: 'BONECA',   syllables: ['BO', 'NE', 'CA'],     count: 3, struct: 'CV_SIMPLE',   cat: 'BRINQUEDO', img: 'assets/img/palavras/boneca.webp' },
    'CANECA':   { word: 'CANECA',   syllables: ['CA', 'NE', 'CA'],     count: 3, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/caneca.webp' },
    'MENINO':   { word: 'MENINO',   syllables: ['ME', 'NI', 'NO'],     count: 3, struct: 'CV_SIMPLE',   cat: 'PESSOA',    img: 'assets/img/palavras/menino.webp' },
    'MENINA':   { word: 'MENINA',   syllables: ['ME', 'NI', 'NA'],     count: 3, struct: 'CV_SIMPLE',   cat: 'PESSOA',    img: 'assets/img/palavras/menina.webp' },
    'NUVEM':    { word: 'NUVEM',    syllables: ['NU', 'VEM'],          count: 2, struct: 'CVM_NASAL',   cat: 'NATUREZA',  img: 'assets/img/palavras/nuvem.webp' },
    'BANANA':   { word: 'BANANA',   syllables: ['BA', 'NA', 'NA'],     count: 3, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/banana.webp' },
    'VACA':     { word: 'VACA',     syllables: ['VA', 'CA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/vaca.webp' },
    'VELA':     { word: 'VELA',     syllables: ['VE', 'LA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/vela.webp' },
    'LUVA':     { word: 'LUVA',     syllables: ['LU', 'VA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ROUPA',     img: 'assets/img/palavras/luva.webp' },
    'VIOLÃO':   { word: 'VIOLÃO',   syllables: ['VI', 'O', 'LÃO'],     count: 3, struct: 'CVM_NASAL',   cat: 'OBJETO',    img: 'assets/img/palavras/violao.webp' },
    'OVO':      { word: 'OVO',      syllables: ['O', 'VO'],            count: 2, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/ovo.webp' },
    'AVIÃO':    { word: 'AVIÃO',    syllables: ['A', 'VI', 'ÃO'],      count: 3, struct: 'CVM_NASAL',   cat: 'VEÍCULO',   img: 'assets/img/palavras/aviao.webp' },
    'UVA':      { word: 'UVA',      syllables: ['U', 'VA'],            count: 2, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/uva.webp' },

    // Conjunto 4 (S, D, J)
    'SAPO':     { word: 'SAPO',     syllables: ['SA', 'PO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/sapo.webp' },
    'SUCO':     { word: 'SUCO',     syllables: ['SU', 'CO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/suco.webp' },
    'SOFÁ':     { word: 'SOFÁ',     syllables: ['SO', 'FÁ'],           count: 2, struct: 'CV_SIMPLE',   cat: 'MÓVEL',     img: 'assets/img/palavras/sofa.webp' },
    'SALADA':   { word: 'SALADA',   syllables: ['SA', 'LA', 'DA'],     count: 3, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/salada.webp' },
    'SAPATO':   { word: 'SAPATO',   syllables: ['SA', 'PA', 'TO'],     count: 3, struct: 'CV_SIMPLE',   cat: 'ROUPA',     img: 'assets/img/palavras/sapato.webp' },
    'SINO':     { word: 'SINO',     syllables: ['SI', 'NO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/sino.webp' },
    'DADO':     { word: 'DADO',     syllables: ['DA', 'DO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'BRINQUEDO', img: 'assets/img/palavras/dado.webp' },
    'DEDO':     { word: 'DEDO',     syllables: ['DE', 'DO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'CORPO',     img: 'assets/img/palavras/dedo.webp' },
    'DENTE':    { word: 'DENTE',    syllables: ['DEN', 'TE'],          count: 2, struct: 'CVM_NASAL',   cat: 'CORPO',     img: 'assets/img/palavras/dente.webp' },
    'CABIDE':   { word: 'CABIDE',   syllables: ['CA', 'BI', 'DE'],     count: 3, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/cabide.webp' },
    'DOCE':     { word: 'DOCE',     syllables: ['DO', 'CE'],           count: 2, struct: 'IRREGULAR',   cat: 'ALIMENTO',  img: 'assets/img/palavras/doce.webp' },
    'DIA':      { word: 'DIA',      syllables: ['DI', 'A'],            count: 2, struct: 'CV_SIMPLE',   cat: 'TEMPO',     img: 'assets/img/palavras/dia.webp' },
    'JACARÉ':   { word: 'JACARÉ',   syllables: ['JA', 'CA', 'RÉ'],     count: 3, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/jacare.webp' },
    'JANELA':   { word: 'JANELA',   syllables: ['JA', 'NE', 'LA'],     count: 3, struct: 'CV_SIMPLE',   cat: 'CASA',      img: 'assets/img/palavras/janela.webp' },
    'TIJOLO':   { word: 'TIJOLO',   syllables: ['TI', 'JO', 'LO'],     count: 3, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/tijolo.webp' },
    'CAJU':     { word: 'CAJU',     syllables: ['CA', 'JU'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/caju.webp' },
    'JOGO':     { word: 'JOGO',     syllables: ['JO', 'GO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'BRINQUEDO', img: 'assets/img/palavras/jogo.webp' },
    'JIBOIA':   { word: 'JIBOIA',   syllables: ['JI', 'BOI', 'A'],     count: 3, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/jiboia.webp' },

    // Conjunto 5 (X, Z)
    'LIXO':     { word: 'LIXO',     syllables: ['LI', 'XO'],           count: 2, struct: 'IRREGULAR',   cat: 'OBJETO',    img: 'assets/img/palavras/lixo.webp' },
    'XÍCARA':   { word: 'XÍCARA',   syllables: ['XÍ', 'CA', 'RA'],     count: 3, struct: 'IRREGULAR',   cat: 'OBJETO',    img: 'assets/img/palavras/xicara.webp' },
    'XALE':     { word: 'XALE',     syllables: ['XA', 'LE'],           count: 2, struct: 'IRREGULAR',   cat: 'ROUPA',     img: 'assets/img/palavras/xale.webp' },
    'TÁXI':     { word: 'TÁXI',     syllables: ['TÁ', 'XI'],           count: 2, struct: 'IRREGULAR',   cat: 'VEÍCULO',   img: 'assets/img/palavras/taxi.webp' },
    'ABACAXI':  { word: 'ABACAXI',  syllables: ['A','BA','CA','XI'],   count: 4, struct: 'IRREGULAR',   cat: 'ALIMENTO',  img: 'assets/img/palavras/abacaxi.webp' },
    'CAIXA':    { word: 'CAIXA',    syllables: ['CAI', 'XA'],          count: 2, struct: 'IRREGULAR',   cat: 'OBJETO',    img: 'assets/img/palavras/caixa.webp' },
    'PEIXE':    { word: 'PEIXE',    syllables: ['PEI', 'XE'],          count: 2, struct: 'IRREGULAR',   cat: 'ANIMAL',    img: 'assets/img/palavras/peixe.webp' },
    'ZEBRA':    { word: 'ZEBRA',    syllables: ['ZE', 'BRA'],          count: 2, struct: 'CCV',         cat: 'ANIMAL',    img: 'assets/img/palavras/zebra.webp' },
    'ZERO':     { word: 'ZERO',     syllables: ['ZE', 'RO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'NÚMERO',    img: 'assets/img/palavras/zero.webp' },
    'BUZINA':   { word: 'BUZINA',   syllables: ['BU', 'ZI', 'NA'],     count: 3, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/buzina.webp' },
    'AZEITE':   { word: 'AZEITE',   syllables: ['A', 'ZEI', 'TE'],     count: 3, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/azeite.webp' },
    'DEZ':      { word: 'DEZ',      syllables: ['DEZ'],                count: 1, struct: 'CVC',         cat: 'NÚMERO',    img: 'assets/img/palavras/dez.webp' },
    'PAZ':      { word: 'PAZ',      syllables: ['PAZ'],                count: 1, struct: 'CVC',         cat: 'CONCEITO',  img: 'assets/img/palavras/paz.webp' },

    // Conjunto 6 (C, G, Q)
    'CASA':     { word: 'CASA',     syllables: ['CA', 'SA'],           count: 2, struct: 'IRREGULAR',   cat: 'LUGAR',     img: 'assets/img/palavras/casa.webp' },
    'CAMA':     { word: 'CAMA',     syllables: ['CA', 'MA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'MÓVEL',     img: 'assets/img/palavras/cama.webp' },
    'COPO':     { word: 'COPO',     syllables: ['CO', 'PO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/copo.webp' },
    'COLA':     { word: 'COLA',     syllables: ['CO', 'LA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'OBJETO',    img: 'assets/img/palavras/cola.webp' },
    'CAVALO':   { word: 'CAVALO',   syllables: ['CA', 'VA', 'LO'],     count: 3, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/cavalo.webp' },
    'MACACO':   { word: 'MACACO',   syllables: ['MA', 'CA', 'CO'],     count: 3, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/macaco.webp' },
    'TUCANO':   { word: 'TUCANO',   syllables: ['TU', 'CA', 'NO'],     count: 3, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/tucano.webp' },
    'GATO':     { word: 'GATO',     syllables: ['GA', 'TO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/gato.webp' },
    'GALO':     { word: 'GALO',     syllables: ['GA', 'LO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ANIMAL',    img: 'assets/img/palavras/galo.webp' },
    'GOTA':     { word: 'GOTA',     syllables: ['GO', 'TA'],           count: 2, struct: 'CV_SIMPLE',   cat: 'NATUREZA',  img: 'assets/img/palavras/gota.webp' },
    'LAGO':     { word: 'LAGO',     syllables: ['LA', 'GO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'NATUREZA',  img: 'assets/img/palavras/lago.webp' },
    'FIGO':     { word: 'FIGO',     syllables: ['FI', 'GO'],           count: 2, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/figo.webp' },
    'QUEIJO':   { word: 'QUEIJO',   syllables: ['QUEI', 'JO'],         count: 2, struct: 'QU_GU',       cat: 'ALIMENTO',  img: 'assets/img/palavras/queijo.webp' },
    'QUIABO':   { word: 'QUIABO',   syllables: ['QUI', 'A', 'BO'],     count: 3, struct: 'QU_GU',       cat: 'ALIMENTO',  img: 'assets/img/palavras/quiabo.webp' },
    'QUATRO':   { word: 'QUATRO',   syllables: ['QUA', 'TRO'],         count: 2, struct: 'QU_GU',       cat: 'NÚMERO',    img: 'assets/img/palavras/quatro.webp' },
    'AQUÁRIO':  { word: 'AQUÁRIO',  syllables: ['A', 'QUÁ', 'RIO'],    count: 3, struct: 'QU_GU',       cat: 'OBJETO',    img: 'assets/img/palavras/aquario.webp' },
    'LEQUE':    { word: 'LEQUE',    syllables: ['LE', 'QUE'],          count: 2, struct: 'QU_GU',       cat: 'OBJETO',    img: 'assets/img/palavras/leque.webp' },
    'CAQUI':    { word: 'CAQUI',    syllables: ['CA', 'QUI'],          count: 2, struct: 'QU_GU',       cat: 'ALIMENTO',  img: 'assets/img/palavras/caqui.webp' },
    'FOGUETE':  { word: 'FOGUETE',  syllables: ['FO', 'GUE', 'TE'],    count: 3, struct: 'QU_GU',       cat: 'VEÍCULO',   img: 'assets/img/palavras/foguete.webp' },
    'GUITARRA': { word: 'GUITARRA', syllables: ['GUI', 'TAR', 'RA'],   count: 3, struct: 'QU_GU',       cat: 'OBJETO',    img: 'assets/img/palavras/guitarra.webp' },

    // Dígrafos Palatais e Fricativos (CH, LH, NH, RR, SS - Nível 4.3 & Gaveta 7)
    'CHAVE':    { word: 'CHAVE',    syllables: ['CHA', 'VE'],          count: 2, struct: 'DIGRAPH',     cat: 'OBJETO',    img: 'assets/img/palavras/chave.webp' },
    'CHUVA':    { word: 'CHUVA',    syllables: ['CHU', 'VA'],          count: 2, struct: 'DIGRAPH',     cat: 'NATUREZA',  img: 'assets/img/palavras/chuva.webp' },
    'CACHORRO': { word: 'CACHORRO', syllables: ['CA', 'CHOR', 'RO'],   count: 3, struct: 'DIGRAPH',     cat: 'ANIMAL',    img: 'assets/img/palavras/cachorro.webp' },
    'ABELHA':   { word: 'ABELHA',   syllables: ['A', 'BE', 'LHA'],     count: 3, struct: 'DIGRAPH',     cat: 'ANIMAL',    img: 'assets/img/palavras/abelha.webp' },
    'MILHO':    { word: 'MILHO',    syllables: ['MI', 'LHO'],          count: 2, struct: 'DIGRAPH',     cat: 'ALIMENTO',  img: 'assets/img/palavras/milho.webp' },
    'OLHO':     { word: 'OLHO',     syllables: ['O', 'LHO'],           count: 2, struct: 'DIGRAPH',     cat: 'CORPO',     img: 'assets/img/palavras/olho.webp' },
    'ILHA':     { word: 'ILHA',     syllables: ['I', 'LHA'],           count: 2, struct: 'DIGRAPH',     cat: 'NATUREZA',  img: 'assets/img/palavras/ilha.webp' },
    'FOLHA':    { word: 'FOLHA',    syllables: ['FO', 'LHA'],          count: 2, struct: 'DIGRAPH',     cat: 'NATUREZA',  img: 'assets/img/palavras/folha.webp' },
    'OVELHA':   { word: 'OVELHA',   syllables: ['O', 'VE', 'LHA'],     count: 3, struct: 'DIGRAPH',     cat: 'ANIMAL',    img: 'assets/img/palavras/ovelha.webp' },
    'NINHO':    { word: 'NINHO',    syllables: ['NI', 'NHO'],          count: 2, struct: 'DIGRAPH',     cat: 'NATUREZA',  img: 'assets/img/palavras/ninho.webp' },
    'GALINHA':  { word: 'GALINHA',  syllables: ['GA', 'LI', 'NHA'],    count: 3, struct: 'DIGRAPH',     cat: 'ANIMAL',    img: 'assets/img/palavras/galinha.webp' },
    'CARRO':    { word: 'CARRO',    syllables: ['CAR', 'RO'],          count: 2, struct: 'DIGRAPH',     cat: 'VEÍCULO',   img: 'assets/img/palavras/carro.webp' },
    'OSSO':     { word: 'OSSO',     syllables: ['OS', 'SO'],           count: 2, struct: 'DIGRAPH',     cat: 'CORPO',     img: 'assets/img/palavras/osso.webp' },
    'PÁSSARO':  { word: 'PÁSSARO',  syllables: ['PÁS', 'SA', 'RO'],    count: 3, struct: 'DIGRAPH',     cat: 'ANIMAL',    img: 'assets/img/palavras/passaro.webp' },
    'VASSOURA': { word: 'VASSOURA', syllables: ['VAS', 'SOU', 'RA'],   count: 3, struct: 'DIGRAPH',     cat: 'OBJETO',    img: 'assets/img/palavras/vassoura.webp' },

    // Casos Contextuais e Irregulares (CE/CI, GE/GI, Ç, S=Z - Nível 4.1, 4.4 & Gaveta 8)
    'CEBOLA':   { word: 'CEBOLA',   syllables: ['CE', 'BO', 'LA'],     count: 3, struct: 'IRREGULAR',   cat: 'ALIMENTO',  img: 'assets/img/palavras/cebola.webp' },
    'GELO':     { word: 'GELO',     syllables: ['GE', 'LO'],           count: 2, struct: 'IRREGULAR',   cat: 'NATUREZA',  img: 'assets/img/palavras/gelo.webp' },
    'GIRAFA':   { word: 'GIRAFA',   syllables: ['GI', 'RA', 'FA'],     count: 3, struct: 'IRREGULAR',   cat: 'ANIMAL',    img: 'assets/img/palavras/girafa.webp' },
    'RELÓGIO':  { word: 'RELÓGIO',  syllables: ['RE', 'LÓ', 'GIO'],    count: 3, struct: 'IRREGULAR',   cat: 'OBJETO',    img: 'assets/img/palavras/relogio.webp' },
    'MAÇÃ':     { word: 'MAÇÃ',     syllables: ['MA', 'ÇÃ'],           count: 2, struct: 'IRREGULAR',   cat: 'ALIMENTO',  img: 'assets/img/palavras/maca.webp' },
    'LAÇO':     { word: 'LAÇO',     syllables: ['LA', 'ÇO'],           count: 2, struct: 'IRREGULAR',   cat: 'OBJETO',    img: 'assets/img/palavras/laco.webp' },
    'MESA':     { word: 'MESA',     syllables: ['ME', 'SA'],           count: 2, struct: 'IRREGULAR',   cat: 'MÓVEL',     img: 'assets/img/palavras/mesa.webp' },
    'ROSA':     { word: 'ROSA',     syllables: ['RO', 'SA'],           count: 2, struct: 'IRREGULAR',   cat: 'PLANTA',    img: 'assets/img/palavras/rosa.webp' },

    // Sílabas Fechadas / Travadas (CVC - Nível 4.5 & Gaveta 5)
    'PORTA':    { word: 'PORTA',    syllables: ['POR', 'TA'],          count: 2, struct: 'CVC',         cat: 'CASA',      img: 'assets/img/palavras/porta.webp' },
    'BARCO':    { word: 'BARCO',    syllables: ['BAR', 'CO'],          count: 2, struct: 'CVC',         cat: 'VEÍCULO',   img: 'assets/img/palavras/barco.webp' },
    'GARFO':    { word: 'GARFO',    syllables: ['GAR', 'FO'],          count: 2, struct: 'CVC',         cat: 'OBJETO',    img: 'assets/img/palavras/garfo.webp' },
    'URSO':     { word: 'URSO',     syllables: ['UR', 'SO'],           count: 2, struct: 'CVC',         cat: 'ANIMAL',    img: 'assets/img/palavras/urso.webp' },
    'SOL':      { word: 'SOL',      syllables: ['SOL'],                count: 1, struct: 'CVC',         cat: 'NATUREZA',  img: 'assets/img/palavras/sol.webp' },
    'PASTA':    { word: 'PASTA',    syllables: ['PAS', 'TA'],          count: 2, struct: 'CVC',         cat: 'OBJETO',    img: 'assets/img/palavras/pasta.webp' },
    'ESCOVA':   { word: 'ESCOVA',   syllables: ['ES', 'CO', 'VA'],     count: 3, struct: 'CVC',         cat: 'OBJETO',    img: 'assets/img/palavras/escova.webp' },
    'FORMIGA':  { word: 'FORMIGA',  syllables: ['FOR', 'MI', 'GA'],    count: 3, struct: 'CVC',         cat: 'ANIMAL',    img: 'assets/img/palavras/formiga.webp' },
    'TAMBOR':   { word: 'TAMBOR',   syllables: ['TAM', 'BOR'],         count: 2, struct: 'CVC',         cat: 'OBJETO',    img: 'assets/img/palavras/tambor.webp' },
    'MARTELO':  { word: 'MARTELO',  syllables: ['MAR', 'TE', 'LO'],    count: 3, struct: 'CVC',         cat: 'OBJETO',    img: 'assets/img/palavras/martelo.webp' },
    'ÁRVORE':   { word: 'ÁRVORE',   syllables: ['ÁR', 'VO', 'RE'],     count: 3, struct: 'CVC',         cat: 'NATUREZA',  img: 'assets/img/palavras/arvore.webp' },
    'ESPADA':   { word: 'ESPADA',   syllables: ['ES', 'PA', 'DA'],     count: 3, struct: 'CVC',         cat: 'OBJETO',    img: 'assets/img/palavras/espada.webp' },
    'PENTE':    { word: 'PENTE',    syllables: ['PEN', 'TE'],          count: 2, struct: 'CVC',         cat: 'OBJETO',    img: 'assets/img/palavras/pente.webp' },
    'PONTE':    { word: 'PONTE',    syllables: ['PON', 'TE'],          count: 2, struct: 'CVC',         cat: 'LUGAR',     img: 'assets/img/palavras/ponte.webp' },

    // Encontros Consonantais (CCV - Nível 4.6 & Gaveta 6)
    'PRATO':    { word: 'PRATO',    syllables: ['PRA', 'TO'],          count: 2, struct: 'CCV',         cat: 'OBJETO',    img: 'assets/img/palavras/prato.webp' },
    'BRUXA':    { word: 'BRUXA',    syllables: ['BRU', 'XA'],          count: 2, struct: 'CCV',         cat: 'PESSOA',    img: 'assets/img/palavras/bruxa.webp' },
    'LIVRO':    { word: 'LIVRO',    syllables: ['LI', 'VRO'],          count: 2, struct: 'CCV',         cat: 'OBJETO',    img: 'assets/img/palavras/livro.webp' },
    'PLANTA':   { word: 'PLANTA',   syllables: ['PLAN', 'TA'],         count: 2, struct: 'CCV',         cat: 'NATUREZA',  img: 'assets/img/palavras/planta.webp' },
    'BLUSA':    { word: 'BLUSA',    syllables: ['BLU', 'SA'],          count: 2, struct: 'CCV',         cat: 'ROUPA',     img: 'assets/img/palavras/blusa.webp' },
    'TREM':     { word: 'TREM',     syllables: ['TREM'],               count: 1, struct: 'CCV',         cat: 'VEÍCULO',   img: 'assets/img/palavras/trem.webp' },
    'TRATOR':   { word: 'TRATOR',   syllables: ['TRA', 'TOR'],         count: 2, struct: 'CCV',         cat: 'VEÍCULO',   img: 'assets/img/palavras/trator.webp' },
    'TIGRE':    { word: 'TIGRE',    syllables: ['TI', 'GRE'],          count: 2, struct: 'CCV',         cat: 'ANIMAL',    img: 'assets/img/palavras/tigre.webp' },
    'COBRA':    { word: 'COBRA',    syllables: ['CO', 'BRA'],          count: 2, struct: 'CCV',         cat: 'ANIMAL',    img: 'assets/img/palavras/cobra.webp' },
    'FLOR':     { word: 'FLOR',     syllables: ['FLOR'],               count: 1, struct: 'CCV',         cat: 'NATUREZA',  img: 'assets/img/palavras/flor.webp' },
    'FLAUTA':   { word: 'FLAUTA',   syllables: ['FLAU', 'TA'],         count: 2, struct: 'CCV',         cat: 'OBJETO',    img: 'assets/img/palavras/flauta.webp' },
    'ESTRELA':  { word: 'ESTRELA',  syllables: ['ES', 'TRE', 'LA'],    count: 3, struct: 'CCV',         cat: 'NATUREZA',  img: 'assets/img/palavras/estrela.webp' },

    // Complementares Gerais
    'TAPETE':   { word: 'TAPETE',   syllables: ['TA', 'PE', 'TE'],     count: 3, struct: 'CV_SIMPLE',   cat: 'CASA',      img: 'assets/img/palavras/tapete.webp' },
    'BATATA':   { word: 'BATATA',   syllables: ['BA', 'TA', 'TA'],     count: 3, struct: 'CV_SIMPLE',   cat: 'ALIMENTO',  img: 'assets/img/palavras/batata.webp' },
    'MÃO':      { word: 'MÃO',      syllables: ['MÃO'],                count: 1, struct: 'CVM_NASAL',   cat: 'CORPO',     img: 'assets/img/palavras/mao.webp' },
    'LEÃO':     { word: 'LEÃO',     syllables: ['LE', 'ÃO'],           count: 2, struct: 'CVM_NASAL',   cat: 'ANIMAL',    img: 'assets/img/palavras/leao.webp' },
    'LIMÃO':    { word: 'LIMÃO',    syllables: ['LI', 'MÃO'],          count: 2, struct: 'CVM_NASAL',   cat: 'ALIMENTO',  img: 'assets/img/palavras/limao.webp' },
    'MELÃO':    { word: 'MELÃO',    syllables: ['ME', 'LÃO'],          count: 2, struct: 'CVM_NASAL',   cat: 'ALIMENTO',  img: 'assets/img/palavras/melao.webp' }
};

/* 7. VARIAÇÕES PADRÃO DA TRILHA PRINCIPAL (1.1 A 5.6 + EXTRAS) */
const DEFAULT_MODULE_VARIATIONS = {
    // NÍVEL 1
    'E1_1': {
        editable: true, min: 3, max: 10,
        variations: {
            1: ['O SOL BRILHA NO CÉU AZUL', 'O GATO DORME NO SOFÁ DA SALA', 'A MENINA CHUTOU A BOLA VERMELHA', 'O PATO NADA NA LAGOA CALMA', 'JOÃO COMEU O BOLO DE CHOCOLATE'],
            2: ['A VACA COME CAPIM NO CAMPO', 'O MENINO ABRIU A PORTA DE MADEIRA', 'O SAPO PULOU NA ÁGUA FRIA', 'MARIA LEU UM LIVRO DE HISTÓRIA', 'O CACHORRO CORREU PELO JARDIM']
        }
    },
    'E1_5': {
        editable: true, min: 3, max: 12,
        variations: {
            1: ['BOLA', 'GATO', 'MALA', 'PATO', 'SAPO', 'FACA'],
            2: ['SAPATO', 'CAVALO', 'PANELA', 'TOMATE', 'BONECA', 'JANELA']
        }
    },
    'E1_6': {
        editable: true, min: 3, max: 12,
        variations: {
            1: ['BOLA', 'GATO', 'PATO', 'SAPO', 'FACA', 'VACA'],
            2: ['SAPATO', 'CAVALO', 'PANELA', 'TOMATE', 'JACARÉ', 'BATATA']
        }
    },

    // NÍVEL 2
    'E2_1': {
        editable: true, min: 4, max: 10,
        variations: {
            1: ['AI', 'EI', 'OI', 'UI', 'AU', 'EU', 'OU', 'ÃO'],
            2: ['OU', 'ÃO', 'AI', 'EI', 'UI', 'AU', 'OI', 'EU']
        }
    },
    'E2_2': {
        editable: true, min: 4, max: 12,
        variations: {
            1: ['FA', 'LA', 'MA', 'SA', 'VA', 'RA'],
            2: ['FE', 'LI', 'MO', 'SU', 'VE', 'RO']
        }
    },
    'E2_3': {
        editable: true, min: 4, max: 12,
        variations: {
            1: ['TA', 'BA', 'PA', 'DA', 'CA', 'GA'],
            2: ['TU', 'BO', 'PI', 'DE', 'CO', 'GU']
        }
    },
    'E2_4': {
        editable: true, min: 4, max: 12,
        variations: {
            1: ['TA', 'LA', 'MA', 'FA', 'BA', 'RA', 'PA', 'NA'],
            2: ['VA', 'SA', 'DA', 'JA', 'XA', 'ZA', 'CA', 'GA']
        }
    },

    // NÍVEL 3 (VOCABULÁRIOS EXCLUSIVOS POR MÓDULO PARA EVITAR REDUNDÂNCIA)
    'E3_1': {
        editable: true, min: 4, max: 10,
        variations: {
            1: ['TATU', 'LATA', 'MALA', 'FACA', 'BOLA', 'RATO'],
            2: ['PATO', 'VACA', 'SAPO', 'DADO', 'CASA', 'GATO']
        }
    },
    'E3_2': {
        editable: true, min: 3, max: 12,
        variations: {
            1: ['TELA', 'MOLA', 'FOCA', 'BOLO', 'BOTA', 'RODA'],
            2: ['PIPA', 'LUVA', 'SUCO', 'DEDO', 'CAMA', 'GALO']
        }
    },
    'E3_3': {
        editable: true, min: 3, max: 12,
        variations: {
            1: ['BOLA', 'GATO', 'MALA', 'PATO', 'SAPO', 'FACA'],
            2: ['TOMATE', 'PANELA', 'CAVALO', 'MACACO', 'SAPATO', 'BONECA']
        }
    },
    'E3_4': {
        editable: true, min: 4, max: 10,
        variations: {
            1: ['LUA', 'TETO', 'MATO', 'FITA', 'LOBO', 'REDE'],
            2: ['POTE', 'VELA', 'SINO', 'CAJU', 'COPO', 'LAGO']
        }
    },
    'E3_5': {
        editable: true, min: 4, max: 10,
        variations: {
            1: ['TIA', 'LOTE', 'LAMA', 'FOGO', 'BULE', 'RUA'],
            2: ['OVO', 'DIA', 'JOGO', 'LIXO', 'ZERO', 'GOTA']
        }
    },
    'E3_6': {
        editable: true, min: 4, max: 10,
        variations: {
            1: ['MULETA', 'SALADA', 'CABIDE', 'TIJOLO', 'BUZINA', 'TUCANO'],
            2: ['PETECA', 'CANECA', 'JANELA', 'TAPETE', 'BATATA', 'MENINO']
        }
    },

    // NÍVEL 4 (DIFICULDADES DA LÍNGUA E SÍLABAS COMPLEXAS - CAP. 6.2)
    'E4_1': {
        editable: true, min: 3, max: 10,
        variations: {
            1: ['CASA', 'COPO', 'DOCE', 'CEBOLA', 'GATO', 'GOTA', 'GELO', 'GIRAFA'],
            2: ['CAMA', 'CAVALO', 'CEBOLA', 'DOCE', 'GALO', 'LAGO', 'GIRAFA', 'RELÓGIO']
        }
    },
    'E4_2': {
        editable: true, min: 3, max: 10,
        variations: {
            1: ['QUEIJO', 'QUIABO', 'QUATRO', 'LEQUE', 'FOGUETE', 'GUITARRA'],
            2: ['AQUÁRIO', 'CAQUI', 'QUEIJO', 'QUATRO', 'FOGUETE', 'GUITARRA']
        }
    },
    'E4_3': {
        editable: true, min: 3, max: 10,
        variations: {
            1: ['CHAVE', 'ABELHA', 'NINHO', 'CARRO', 'OSSO', 'PÁSSARO'],
            2: ['CHUVA', 'MILHO', 'GALINHA', 'CACHORRO', 'VASSOURA', 'OVELHA']
        }
    },
    'E4_4': {
        editable: true, min: 3, max: 10,
        variations: {
            1: ['MAÇÃ', 'LAÇO', 'CASA', 'MESA', 'XÍCARA', 'PEIXE'],
            2: ['ROSA', 'XALE', 'TÁXI', 'CAIXA', 'ABACAXI', 'LIXO']
        }
    },
    'E4_5': {
        editable: true, min: 3, max: 10,
        variations: {
            1: ['PORTA', 'BARCO', 'GARFO', 'URSO', 'SOL', 'PASTA'],
            2: ['ESCOVA', 'FORMIGA', 'TAMBOR', 'MARTELO', 'PENTE', 'PONTE']
        }
    },
    'E4_6': {
        editable: true, min: 3, max: 10,
        variations: {
            1: ['PRATO', 'BRUXA', 'LIVRO', 'PLANTA', 'BLUSA', 'ZEBRA'],
            2: ['TREM', 'TRATOR', 'TIGRE', 'COBRA', 'FLOR', 'ESTRELA']
        }
    },

    // NÍVEL 5 (FLUÊNCIA, SINTAXE E INTERPRETAÇÃO - CAP. 6.3 E 6.4)
    'E5_1': {
        editable: true, min: 4, max: 12,
        variations: {
            1: ['BOLA', 'GATO', 'FACA', 'SAPO', 'MALA', 'PATO', 'VACA', 'BOLO'],
            2: ['PORTA', 'PRATO', 'CHAVE', 'QUEIJO', 'CAVALO', 'SAPATO', 'JANELA', 'TOMATE']
        }
    },
    'E5_2': {
        editable: true, min: 3, max: 8,
        variations: {
            1: ['O GATO BEBEU LEITE', 'A BOLA CAIU NO MATO', 'O PATO NADA NA LAGOA', 'A MENINA COMEU O BOLO'],
            2: ['O SAPO PULOU NO LAGO', 'A VACA COME NO CAMPO', 'O MENINO CHUTOU A BOLA', 'O RATO ROEU A ROUPA']
        }
    },
    'E5_3': {
        editable: true, min: 3, max: 8,
        variations: {
            1: ['O gato preto / dorme no sofá.', 'A menina feliz / comeu a maçã.', 'O cachorro grande / correu no parque.', 'O sol brilhante / aquece a manhã.'],
            2: ['O pato amarelo / nada na lagoa.', 'O menino esperto / abriu a janela.', 'A vaca malhada / come no pasto.', 'A chuva fina / molhou o jardim.']
        }
    },
    'E5_4': {
        editable: true, min: 3, max: 8,
        variations: {
            1: ['O MENINO COMEU O BOLO', 'A MENINA CHUTOU A BOLA', 'O GATO BEBEU O LEITE', 'O SAPO PULOU NA LAGOA', 'A VACA COME O CAPIM'],
            2: ['O PATO NADA NO LAGO', 'O RATO ROEU A ROUPA', 'A BOLA CAIU NO MATO', 'O SOL BRILHA NO CÉU', 'JOÃO ABRIU A PORTA']
        }
    },

    // EXTRAS EDITÁVEIS
    'EX_SYL_COUNT': {
        editable: true, min: 4, max: 12,
        variations: {
            1: ['SOL', 'PÉ', 'BOLA', 'GATO', 'SAPATO', 'PANELA', 'PIRULITO'],
            2: ['MÃO', 'TREM', 'FACA', 'MALA', 'CAVALO', 'TOMATE', 'ABACAXI']
        }
    },
    'EX_FIG_WORD': {
        editable: true, min: 3, max: 10,
        variations: {
            1: ['BOLA', 'GATO', 'BOLO', 'FACA', 'SAPO', 'PATO'],
            2: ['VACA', 'MALA', 'RATO', 'PIPA', 'LATA', 'CASA']
        }
    },
    'EX_SEM': {
        editable: true, min: 3, max: 10,
        variations: {
            1: ['GATO', 'BOLO', 'BOLA', 'VACA', 'MAÇÃ', 'PIPA'],
            2: ['SAPO', 'UVA', 'DADO', 'PATO', 'OVO', 'MALA']
        }
    }
};

/* 8. RIMAS, ALITERAÇÃO, PARES MÍNIMOS E NARRATIVAS */
const RHYME_VARIATIONS = {
    1: [
        { target: 'GATO', match: 'PATO', distractors: ['BOLA', 'CASA'] },
        { target: 'MALA', match: 'BOLA', distractors: ['SAPO', 'REDE'] },
        { target: 'FACA', match: 'VACA', distractors: ['BOLO', 'PIPA'] },
        { target: 'MÃO',  match: 'LEÃO', distractors: ['COPO', 'BOTA'] }
    ],
    2: [
        { target: 'PATO', match: 'RATO', distractors: ['LUA', 'FOGO'] },
        { target: 'BOTA', match: 'GOTA', distractors: ['CAMA', 'REI'] },
        { target: 'LATA', match: 'MATA', distractors: ['SINO', 'OVO'] },
        { target: 'MELÃO',match: 'VIOLÃO',distractors:['URSO', 'DADO'] }
    ]
};

const ALLIT_VARIATIONS = {
    1: [
        { target: 'BOLA', match: 'BOLO', distractors: ['GATO', 'FACA'] },
        { target: 'MALA', match: 'MACACO', distractors: ['PATO', 'SOL'] },
        { target: 'SAPO', match: 'SAPATO', distractors: ['VACA', 'LUA'] },
        { target: 'FACA', match: 'FOCA', distractors: ['RODA', 'CAMA'] }
    ],
    2: [
        { target: 'PATO', match: 'PANELA', distractors: ['LOBO', 'DEDO'] },
        { target: 'GATO', match: 'GALO', distractors: ['BOTA', 'REDE'] },
        { target: 'CASA', match: 'CAVALO', distractors: ['SINO', 'TATU'] },
        { target: 'LATA', match: 'LUVA', distractors: ['PIPA', 'FOGO'] }
    ]
};

const MINIMAL_PAIRS_DB = [
    { contrast: 'F/V', target: 'FACA', distractor: 'VACA', var: 1 },
    { contrast: 'P/B', target: 'POTE', distractor: 'BOTE', var: 1 },
    { contrast: 'T/D', target: 'TIA',  distractor: 'DIA',  var: 1 },
    { contrast: 'C/G', target: 'COLA', distractor: 'GOLA', var: 1 },
    { contrast: 'F/V', target: 'FILA', distractor: 'VILA', var: 2 },
    { contrast: 'P/B', target: 'PATO', distractor: 'BATO', var: 2 },
    { contrast: 'T/D', target: 'TADO', distractor: 'DADO', var: 2 },
    { contrast: 'C/G', target: 'CATO', distractor: 'GATO', var: 2 }
];

const NARRATIVES_DB = [
    {
        intruderSentence: ['O', 'MENINO', 'COMEU', 'A', 'PEDRA', 'NA', 'COZINHA'],
        intruderWord: 'PEDRA',
        correctReplacement: 'MAÇÃ',
        distractorReplacements: ['PORTA', 'SAPATO'],
        steps: [
            '1º: O menino pegou a maçã na cesta.',
            '2º: Ele lavou a fruta na torneira.',
            '3º: Ele comeu a maçã toda.'
        ]
    },
    {
        intruderSentence: ['A', 'MENINA', 'VESTIU', 'A', 'PANELA', 'NO', 'PÉ'],
        intruderWord: 'PANELA',
        correctReplacement: 'MEIA',
        distractorReplacements: ['COLHER', 'JANELA'],
        steps: [
            '1º: A menina calçou a meia e o tênis.',
            '2º: Ela pegou sua bola no quarto.',
            '3º: Ela foi brincar no quintal.'
        ]
    },
    {
        intruderSentence: ['O', 'GATO', 'BEBEU', 'O', 'SAPATO', 'NO', 'PIRES'],
        intruderWord: 'SAPATO',
        correctReplacement: 'LEITE',
        distractorReplacements: ['CADERNO', 'TIJOLO'],
        steps: [
            '1º: O gato sentiu sede na sala.',
            '2º: Ele caminhou até o pires branco.',
            '3º: Ele bebeu todo o leite.'
        ]
    }
];

function generateLogicalSentenceTrial() {
    const scenarios = [
        {
            sentence: 'O MENINO COMEU O BOLO NA COZINHA.',
            question: 'QUEM COMEU O BOLO?',
            correct: 'O MENINO',
            distractors: ['O GATO', 'A MENINA', 'O PATO']
        },
        {
            sentence: 'A MENINA CHUTOU A BOLA NO PARQUE.',
            question: 'O QUE A MENINA CHUTOU?',
            correct: 'A BOLA',
            distractors: ['A PANELA', 'O SAPATO', 'A CAMA']
        },
        {
            sentence: 'O GATO DORMIU NO SOFÁ DA SALA.',
            question: 'ONDE O GATO DORMIU?',
            correct: 'NO SOFÁ',
            distractors: ['NA LAGOA', 'NA ÁRVORE', 'NO TELHADO']
        },
        {
            sentence: 'MARIA BEBEU O SUCO DE UVA.',
            question: 'O QUE MARIA BEBEU?',
            correct: 'O SUCO',
            distractors: ['A BOLA', 'O LÁPIS', 'O PRATO']
        },
        {
            sentence: 'O SAPO PULOU NA LAGOA AZUL.',
            question: 'QUEM PULOU NA LAGOA?',
            correct: 'O SAPO',
            distractors: ['O LEÃO', 'A VACA', 'O CAVALO']
        }
    ];
    return scenarios[Math.floor(Math.random() * scenarios.length)];
}

/* 9. DICIONÁRIOS FONÉTICOS PARA RECONHECIMENTO DE VOZ (STT) */
const phoneticsMap = {
    'A': ['A', 'AH', 'Á'],
    'E': ['E', 'EH', 'É', 'Ê'],
    'I': ['I', 'IH', 'Í'],
    'O': ['O', 'OH', 'Ó', 'Ô'],
    'U': ['U', 'UH', 'Ú'],
    'F': ['EFE', 'F', 'FFF', 'FE'],
    'V': ['VE', 'VÊ', 'V', 'VVV'],
    'M': ['EME', 'M', 'MMM', 'ME'],
    'N': ['ENE', 'N', 'NNN', 'NE'],
    'S': ['ESSE', 'S', 'SSS', 'SE'],
    'Z': ['ZE', 'ZÊ', 'Z', 'ZZZ'],
    'L': ['ELE', 'L', 'LLL', 'LE'],
    'R': ['ERRE', 'R', 'RRR', 'RE'],
    'X': ['XIS', 'X', 'CH', 'XE'],
    'J': ['JOTA', 'J', 'JJJ', 'JE'],
    'P': ['PE', 'PÊ', 'P'],
    'B': ['BE', 'BÊ', 'B'],
    'T': ['TE', 'TÊ', 'T'],
    'D': ['DE', 'DÊ', 'D'],
    'C': ['CE', 'CÊ', 'C', 'CA'],
    'G': ['GE', 'GÊ', 'G', 'GA'],
    'Q': ['QUE', 'QUÊ', 'Q']
};

const preReqTerms = {
    'VOGAL': ['VOGAL', 'VOGAIS'],
    'CONSOANTE': ['CONSOANTE', 'CONSOANTES'],
    'SÍLABA': ['SILABA', 'SÍLABA', 'SILABAS'],
    'PALAVRA': ['PALAVRA', 'PALAVRAS']
};

/* 10. CURRÍCULO DETALHADO DA TRILHA PRINCIPAL (1.1 A 5.6 + PORTAIS + EXTRAS) */
const EIDOS_MODULES = [
    // NÍVEL 1: PRÉ-REQUISITOS VISUAIS E LEITURA RUDIMENTAR (CAP. 3 E 4)
    { id: 'E1_1', code: '1.1', level: 'N1', title: 'Rastreio Visual', desc: 'Controle ocular esquerda-direita em linhas com marcadores de início e fim.', engine: 'DTT', subType: 'TRACKING', isAudioModel: false },
    { id: 'E1_2', code: '1.2', level: 'N1', title: 'Discriminação de Símbolos', desc: 'Diferenciação visual entre letras, números e formas gráficas.', engine: 'MTS', subType: 'SYM_DISC', isAudioModel: false },
    { id: 'E1_3', code: '1.3', level: 'N1', title: 'Orientação Espacial (b/d, p/q)', desc: 'Identidade fina de grafemas espelhados e rotacionados.', engine: 'MTS', subType: 'MIRROR_GRAPH', isAudioModel: false },
    { id: 'E1_4', code: '1.4', level: 'N1', title: 'Vogais Puras', desc: 'Identidade, reconhecimento auditivo e leitura oral de A, E, I, O, U.', engine: 'MTS', subType: 'VOWELS_PURE', isAudioModel: false },
    { id: 'E1_5', code: '1.5', level: 'N1', title: 'Identidade de Palavras', desc: 'Ciclo 1: Pareamento simples (1x3) | Ciclo 2: Multimodelo (3x3).', engine: 'MULTIMTS', subType: 'WORD_IDENT_MM', isAudioModel: false },
    { id: 'E1_6', code: '1.6', level: 'N1', title: 'Leitura Rudimentar (Equivalência)', desc: 'Treino direto (B-D e BC-C) e Sondagem condicional (B-C → C-B → C-D → A-C).', engine: 'MULTIMTS', subType: 'EQUIV_4STEPS_MM', isAudioModel: false, alsoUnlock: ['R_N1_EXTRA', 'R_N2_FON', 'E2_1'] },
    { id: 'R_N1_EXTRA', code: '★ PORTAL', level: 'N1', title: 'Portal Extra N1: Vogal vs. Consoante', desc: 'Desbloqueia nos Extras a classificação estrutural Vogal vs. Consoante.', engine: 'REWARD_PORTAL', targetTab: 'EXTRAS', unlockTargets: ['EX_VC', 'R_N2_FON', 'E2_1'] },

    // NÍVEL 2: DO FONEMA À SÍLABA SIMPLES (ENGENHARIA DO CAP. 5)
    { id: 'R_N2_FON', code: '★ PORTAL', level: 'N2', title: 'Portal: Alfabeto Fonológico', desc: 'Modelagem articulatória dos fonemas (Boca + Áudio + Sustentação).', engine: 'REWARD_PORTAL', targetTab: 'FONOLOGICO', unlockTargets: ['E2_1'] },
    { id: 'E2_1', code: '2.1', level: 'N2', title: 'Encontros Vocálicos', desc: 'Fusão e leitura de AI, EI, OI, UI, AU, EU, OU, ÃO.', engine: 'MTS', subType: 'VOCAL_ENCOUNTERS', isAudioModel: false },
    { id: 'E2_2', code: '2.2', level: 'N2', title: 'Fusão Silábica: Contínuas', desc: 'Triplo Slider juntando consoante contínua preta + vogal vermelha.', engine: 'SYL_SLIDER', subType: 'SYL_BUILD_SLIDER', isAudioModel: false },
    { id: 'E2_3', code: '2.3', level: 'N2', title: 'Fusão Silábica: Oclusivas', desc: 'Triplo Slider juntando consoante oclusiva preta + vogal vermelha.', engine: 'SYL_SLIDER', subType: 'SYL_BUILD_SLIDER', isAudioModel: false },
    { id: 'E2_4', code: '2.4', level: 'N2', title: 'Reconhecimento de Sílabas (CV)', desc: 'Pareamento e leitura de sílabas canônicas com suporte visual.', engine: 'MTS', subType: 'SYL_RECOG_CV', isAudioModel: false, unlockSyl: ['T', 'L', 'M'], alsoUnlock: ['R_N2_SIL', 'E3_1'] },
    { id: 'R_N2_SIL', code: '★ PORTAL', level: 'N2', title: 'Portal: Silabário & Extras Fonológicos', desc: 'Abre o Silabário (Conjuntos 1 a 6) e libera Rimas, Aliteração e Segmentação.', engine: 'REWARD_PORTAL', targetTab: 'SILABARIO', unlockTargets: ['T', 'L', 'M', 'F', 'B', 'R', 'EX_RHYME', 'EX_ALLIT', 'EX_SYL_COUNT', 'E3_1'] },

    // NÍVEL 3: CONSTRUÇÃO LEXICAL, ESCRITA E RECOMBINAÇÃO
    { id: 'E3_1', code: '3.1', level: 'N3', title: 'Construção por Sílabas', desc: 'Montagem silábica ativa com apoio pictórico/auditivo e sondagem limpa.', engine: 'CRMTS', subType: 'SYL_WORD_BUILD', isAudioModel: true },
    { id: 'E3_2', code: '3.2', level: 'N3', title: 'Desmame de Pista Visual (Cor → Preto)', desc: 'Pareamento 3x3 entre palavra estruturada colorida e texto preto puro.', engine: 'MULTIMTS', subType: 'FADEOUT_COLOR_MM', isAudioModel: false },
    { id: 'E3_3', code: '3.3', level: 'N3', title: 'Generalização MAIÚSCULA ↔ minúscula', desc: 'Pareamento 3x3 transferindo leitura da caixa alta para imprensa minúscula.', engine: 'MULTIMTS', subType: 'CASE_GEN_MM', isAudioModel: false },
    { id: 'E3_4', code: '3.4', level: 'N3', title: 'Transcrição e Cópia (Letras)', desc: 'Construção ativa letra a letra a partir do modelo visual.', engine: 'CRMTS', subType: 'COPY_CRMTS', isAudioModel: false },
    { id: 'E3_5', code: '3.5', level: 'N3', title: 'Escrita sob Ditado (Letras)', desc: 'Construção ativa letra a letra a partir da palavra ditada.', engine: 'CRMTS', subType: 'DICT_CRMTS', isAudioModel: true },
    { id: 'E3_6', code: '3.6', level: 'N3', title: 'Leitura Recombinativa Simples', desc: 'Sondagem oral (C → D) de vocábulos inéditos formados por sílabas simples.', engine: 'DTT', subType: 'RECOMB_STT', isAudioModel: false, alsoUnlock: ['R_N3_PAL', 'E4_1'] },
    { id: 'R_N3_PAL', code: '★ PORTAL', level: 'N3', title: 'Portal: Palavrário & Extras de Estrutura', desc: 'Abre o Palavrário (Gavetas 1 a 4) e libera Sílaba vs. Palavra e Categorização.', engine: 'REWARD_PORTAL', targetTab: 'PALAVRARIO', unlockTargets: ['PAL_1', 'PAL_2', 'PAL_3', 'PAL_4', 'EX_SP', 'EX_TOT', 'EX_SEM', 'EX_FIG_WORD', 'E4_1'] },

    // NÍVEL 4: DIFICULDADES DA LÍNGUA E SÍLABAS COMPLEXAS (CAP. 6.2)
    { id: 'E4_1', code: '4.1', level: 'N4', title: 'Mudança Sonora do C e G', desc: 'Contraste entre CA/CO/CU vs. CE/CI e GA/GO/GU vs. GE/GI.', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'IRREGULAR', isAudioModel: false },
    { id: 'E4_2', code: '4.2', level: 'N4', title: 'Dígrafos QU e GU', desc: 'Leitura e compreensão de palavras com QUA/QUE/QUI e GUA/GUE/GUI.', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'QU_GU', isAudioModel: false },
    { id: 'E4_3', code: '4.3', level: 'N4', title: 'Dígrafos CH, LH, NH, RR, SS', desc: 'Equivalência e leitura de dígrafos palatais e fricativos.', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'DIGRAPH', isAudioModel: false },
    { id: 'E4_4', code: '4.4', level: 'N4', title: 'Casos do Ç, S=Z e Sons do X', desc: 'Leitura de palavras com cedilha, S intervocálico e valores do X.', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'IRREGULAR', isAudioModel: false },
    { id: 'E4_5', code: '4.5', level: 'N4', title: 'Sílabas Fechadas / Travadas (CVC)', desc: 'Equivalência completa com coda em R, S, L, M, N (BARCO, PORTA, SOL).', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'CVC', isAudioModel: false },
    { id: 'E4_6', code: '4.6', level: 'N4', title: 'Encontros Consonantais (CCV)', desc: 'Sílabas complexas com PR, BR, TR, CR, FL, PL, BL.', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'CCV', promptSylComplex: true, isAudioModel: false, alsoUnlock: ['R_N4_PAL', 'E5_1'] },
    { id: 'R_N4_PAL', code: '★ PORTAL', level: 'N4', title: 'Portal: Palavrário Complexo & Pares Mínimos', desc: 'Libera as Gavetas 5 a 8 no Palavrário, Pares Mínimos e Pseudopalavras.', engine: 'REWARD_PORTAL', targetTab: 'PALAVRARIO', unlockTargets: ['PAL_5', 'PAL_6', 'PAL_7', 'PAL_8', 'EX_MIN_PAIRS', 'PSEUDOPALAVRAS', 'PALAVRAS', 'E5_1'] },

    // NÍVEL 5: FLUÊNCIA, SINTAXE E INTERPRETAÇÃO (CAP. 6.3 E 6.4)
    { id: 'E5_1', code: '5.1', level: 'N5', title: 'Fluência de Palavras (< 3s)', desc: 'Leitura cronometrada de vocábulos simples e complexos.', engine: 'FLUENCY', subType: 'SPRINT_3S', isAudioModel: false },
    { id: 'E5_2', code: '5.2', level: 'N5', title: 'Segmentação Lexical (Espaço na Frase)', desc: 'Identificação das fronteiras entre palavras dentro da frase.', engine: 'CRMTS', subType: 'WORD_SPACE', isAudioModel: false },
    { id: 'E5_3', code: '5.3', level: 'N5', title: 'Agrupamento Sintático', desc: 'Leitura de frases em blocos prosódicos de sentido.', engine: 'DTT', subType: 'SYNTACTIC_GROUP', isAudioModel: false },
    { id: 'E5_4', code: '5.4', level: 'N5', title: 'Composição de Frases sob Ditado', desc: 'Construção sintática de frases palavra por palavra.', engine: 'CRMTS', subType: 'SENTENCE_BUILD', isAudioModel: true },
    { id: 'E5_5', code: '5.5', level: 'N5', title: 'Compreensão de Frases (Quem / O quê / Onde)', desc: 'Leitura de frases com resposta a perguntas literais WH.', engine: 'MTS', subType: 'SYNTACTIC_WH', isAudioModel: false },
    { id: 'E5_6', code: '5.6', level: 'N5', title: 'Coerência e Sequência Narrativa', desc: 'Var 1: Substituição de Palavra Intrusa | Var 2: Ordem Cronológica 1º, 2º, 3º.', engine: 'CRMTS', subType: 'NARRATIVE_COHERENCE', isAudioModel: false },

    // GUIA EXTRAS (JOGOS COMPLEMENTARES DE CONSCIÊNCIA FONOLÓGICA, ESTRUTURA E CATEGORIZAÇÃO)
    { id: 'EX_RHYME',     code: 'EX.1', level: 'EXTRAS', title: 'Rimas',                        desc: 'Identificação auditiva de palavras que terminam com o mesmo som.', engine: 'MTS',      subType: 'RHYME',           isAudioModel: true },
    { id: 'EX_ALLIT',     code: 'EX.2', level: 'EXTRAS', title: 'Aliteração',                   desc: 'Identificação auditiva de palavras que iniciam com o mesmo fonema.', engine: 'MTS',    subType: 'ALLITERATION',    isAudioModel: true },
    { id: 'EX_SYL_COUNT', code: 'EX.3', level: 'EXTRAS', title: 'Segmentação Silábica',         desc: 'Contagem motora de sílabas a partir da palavra falada.', engine: 'DTT',                subType: 'SYL_COUNT',       isAudioModel: true },
    { id: 'EX_MIN_PAIRS', code: 'EX.4', level: 'EXTRAS', title: 'Pares Mínimos Auditivos',      desc: 'Discriminação fina de oposições surdo/sonoro (F/V, P/B, T/D, C/G).', engine: 'MTS',    subType: 'MIN_PAIRS',       isAudioModel: true },
    { id: 'EX_VC',        code: 'EX.5', level: 'EXTRAS', title: 'Vogal vs. Consoante',          desc: 'Classificação estrutural entre vogais e consoantes.', engine: 'MTS',                   subType: 'CLASS_VC',        isAudioModel: false },
    { id: 'EX_SP',        code: 'EX.6', level: 'EXTRAS', title: 'Sílaba vs. Palavra',           desc: 'Classificação estrutural entre sílabas isoladas e palavras.', engine: 'MTS',           subType: 'CLASS_SP',        isAudioModel: false },
    { id: 'EX_TOT',       code: 'EX.7', level: 'EXTRAS', title: 'Estrutura Total 4x4',          desc: 'Pareamento simultâneo entre Vogal, Consoante, Sílaba e Palavra.', engine: 'MULTIMTS',  subType: 'CLASS_TOTAL_MM',  isAudioModel: false },
    { id: 'EX_SEM',       code: 'EX.8', level: 'EXTRAS', title: 'Categorização Semântica',      desc: 'Associação entre palavras escritas e suas categorias semânticas.', engine: 'MULTIMTS', subType: 'SEMANTIC_CAT_MM', isAudioModel: false },
    { id: 'EX_FIG_WORD',  code: 'EX.9', level: 'EXTRAS', title: 'Pareamento Figura-Palavra',    desc: 'Emparelhamento direto em colunas entre figuras e palavras.', engine: 'MULTIMTS',       subType: 'FIG_WORD_MM',     isAudioModel: false }
];

/* 11. ESTADO PADRÃO DE ECONOMIA DE FICHAS E MANIFESTO ARCADE */
const DEFAULT_TOKEN_STATE = {
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

const DEFAULT_ARCADE_MANIFEST = [
    {
        id: 'baloes',
        title: 'Estourar Balões',
        desc: 'Toque nos balões coloridos que sobem pela tela antes que escapem!',
        cost: 3,
        durationSec: 45,
        entry: 'arcade/baloes/index.html'
    },
    {
        id: 'superchef',
        title: 'Super Chef: Esteira Maluca',
        desc: 'Monte os lanches tocando nos ingredientes certos na esteira em movimento!',
        cost: 4,
        durationSec: 60,
        entry: 'arcade/superchef/index.html'
    },
    {
        id: 'cosmojump',
        title: 'Cosmo Jump',
        desc: 'Pule pelos asteroides no espaço! Toque nas laterais da tela para guiar o astronauta.',
        cost: 4,
        durationSec: 60,
        entry: 'arcade/cosmojump/index.html'
    },
    {
        id: 'guardiao',
        title: 'Guardião da Orb',
        desc: 'Gire o escudo 360° arrastando o dedo para proteger o núcleo de energia!',
        cost: 4,
        durationSec: 60,
        entry: 'arcade/guardiao/index.html'
    }
];
