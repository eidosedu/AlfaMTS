/* ============================================================================
   1. BANCO DE PALAVRAS, CATEGORIAS SEMÂNTICAS E ÍCONES PICTÓRICOS
   ============================================================================ */
const WORD_BANK = {
    'BOLA': { word: 'BOLA', syllables: ['BO','LA'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '⚽' },
    'COLA': { word: 'COLA', syllables: ['CO','LA'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '🧴' },
    'MOLA': { word: 'MOLA', syllables: ['MO','LA'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '🌀' },
    'GOLA': { word: 'GOLA', syllables: ['GO','LA'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '👕' },
    'BOLO': { word: 'BOLO', syllables: ['BO','LO'], count: 2, struct: 'CVCV', cat: 'COMIDA', icon: '🎂' },
    'BOTA': { word: 'BOTA', syllables: ['BO','TA'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '🥾' },
    'BOCA': { word: 'BOCA', syllables: ['BO','CA'], count: 2, struct: 'CVCV', cat: 'CORPO', icon: '👄' },
    'GATO': { word: 'GATO', syllables: ['GA','TO'], count: 2, struct: 'CVCV', cat: 'ANIMAL', icon: '🐱' },
    'PATO': { word: 'PATO', syllables: ['PA','TO'], count: 2, struct: 'CVCV', cat: 'ANIMAL', icon: '🦆' },
    'RATO': { word: 'RATO', syllables: ['RA','TO'], count: 2, struct: 'CVCV', cat: 'ANIMAL', icon: '🐭' },
    'MATO': { word: 'MATO', syllables: ['MA','TO'], count: 2, struct: 'CVCV', cat: 'NATUREZA', icon: '🌿' },
    'SAPO': { word: 'SAPO', syllables: ['SA','PO'], count: 2, struct: 'CVCV', cat: 'ANIMAL', icon: '🐸' },
    'SAPATO': { word: 'SAPATO', syllables: ['SA','PA','TO'], count: 3, struct: 'CVCV', cat: 'OBJETO', icon: '👟' },
    'MACACO': { word: 'MACACO', syllables: ['MA','CA','CO'], count: 3, struct: 'CVCV', cat: 'ANIMAL', icon: '🐒' },
    'MALETA': { word: 'MALETA', syllables: ['MA','LE','TA'], count: 3, struct: 'CVCV', cat: 'OBJETO', icon: '💼' },
    'BONECA': { word: 'BONECA', syllables: ['BO','NE','CA'], count: 3, struct: 'CVCV', cat: 'OBJETO', icon: '🪆' },
    'PIPOCA': { word: 'PIPOCA', syllables: ['PI','PO','CA'], count: 3, struct: 'CVCV', cat: 'COMIDA', icon: '🍿' },
    'CAVALO': { word: 'CAVALO', syllables: ['CA','VA','LO'], count: 3, struct: 'CVCV', cat: 'ANIMAL', icon: '🐴' },
    'PANELA': { word: 'PANELA', syllables: ['PA','NE','LA'], count: 3, struct: 'CVCV', cat: 'OBJETO', icon: '🍲' },
    'JANELA': { word: 'JANELA', syllables: ['JA','NE','LA'], count: 3, struct: 'CVCV', cat: 'OBJETO', icon: '🪟' },
    'FACA': { word: 'FACA', syllables: ['FA','CA'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '🔪' },
    'VACA': { word: 'VACA', syllables: ['VA','CA'], count: 2, struct: 'CVCV', cat: 'ANIMAL', icon: '🐄' },
    'FOGO': { word: 'FOGO', syllables: ['FO','GO'], count: 2, struct: 'CVCV', cat: 'NATUREZA', icon: '🔥' },
    'TETO': { word: 'TETO', syllables: ['TE','TO'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '🏠' },
    'DEDO': { word: 'DEDO', syllables: ['DE','DO'], count: 2, struct: 'CVCV', cat: 'CORPO', icon: '☝️' },
    'DADO': { word: 'DADO', syllables: ['DA','DO'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '🎲' },
    'MALA': { word: 'MALA', syllables: ['MA','LA'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '🧳' },
    'SALA': { word: 'SALA', syllables: ['SA','LA'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '🛋️' },
    'LUVA': { word: 'LUVA', syllables: ['LU','VA'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '🧤' },
    'VELA': { word: 'VELA', syllables: ['VE','LA'], count: 2, struct: 'CVCV', cat: 'OBJETO', icon: '🕯️' },
    'MÃO': { word: 'MÃO', syllables: ['MÃO'], count: 1, struct: 'VOG', cat: 'CORPO', icon: '✋' },
    'PÃO': { word: 'PÃO', syllables: ['PÃO'], count: 1, struct: 'VOG', cat: 'COMIDA', icon: '🍞' },
    'CÃO': { word: 'CÃO', syllables: ['CÃO'], count: 1, struct: 'VOG', cat: 'ANIMAL', icon: '🐕' },
    'LEÃO': { word: 'LEÃO', syllables: ['LE','ÃO'], count: 2, struct: 'VOG', cat: 'ANIMAL', icon: '🦁' },
    'AVIÃO': { word: 'AVIÃO', syllables: ['A','VI','ÃO'], count: 3, struct: 'VOG', cat: 'OBJETO', icon: '✈️' },
    'BARCO': { word: 'BARCO', syllables: ['BAR','CO'], count: 2, struct: 'CVC', cat: 'OBJETO', icon: '⛵' },
    'PORTA': { word: 'PORTA', syllables: ['POR','TA'], count: 2, struct: 'CVC', cat: 'OBJETO', icon: '🚪' },
    'PORCO': { word: 'PORCO', syllables: ['POR','CO'], count: 2, struct: 'CVC', cat: 'ANIMAL', icon: '🐷' },
    'SOL': { word: 'SOL', syllables: ['SOL'], count: 1, struct: 'CVC', cat: 'NATUREZA', icon: '☀️' },
    'PASTA': { word: 'PASTA', syllables: ['PAS','TA'], count: 2, struct: 'CVC', cat: 'OBJETO', icon: '🪥' },
    'TAMBOR': { word: 'TAMBOR', syllables: ['TAM','BOR'], count: 2, struct: 'CVC', cat: 'OBJETO', icon: '🥁' },
    'CARTA': { word: 'CARTA', syllables: ['CAR','TA'], count: 2, struct: 'CVC', cat: 'OBJETO', icon: '✉️' },
    'BOLSA': { word: 'BOLSA', syllables: ['BOL','SA'], count: 2, struct: 'CVC', cat: 'OBJETO', icon: '👜' },
    'PRATO': { word: 'PRATO', syllables: ['PRA','TO'], count: 2, struct: 'CCV', cat: 'OBJETO', icon: '🍽️' },
    'BRUXA': { word: 'BRUXA', syllables: ['BRU','XA'], count: 2, struct: 'CCV', cat: 'PESSOA', icon: '🧙‍♀️' },
    'FLORESTA': { word: 'FLORESTA', syllables: ['FLO','RES','TA'], count: 3, struct: 'CCV', cat: 'NATUREZA', icon: '🌲' },
    'CLIMA': { word: 'CLIMA', syllables: ['CLI','MA'], count: 2, struct: 'CCV', cat: 'NATUREZA', icon: '⛅' },
    'LIVRO': { word: 'LIVRO', syllables: ['LI','VRO'], count: 2, struct: 'CCV', cat: 'OBJETO', icon: '📖' },
    'TREM': { word: 'TREM', syllables: ['TREM'], count: 1, struct: 'CCV', cat: 'OBJETO', icon: '🚆' },
    'PLANTA': { word: 'PLANTA', syllables: ['PLAN','TA'], count: 2, struct: 'CCV', cat: 'NATUREZA', icon: '🪴' },
    'BLUSA': { word: 'BLUSA', syllables: ['BLU','SA'], count: 2, struct: 'CCV', cat: 'OBJETO', icon: '👚' },
    'NINHO': { word: 'NINHO', syllables: ['NI','NHO'], count: 2, struct: 'DIG', cat: 'NATUREZA', icon: '🪺' },
    'MILHO': { word: 'MILHO', syllables: ['MI','LHO'], count: 2, struct: 'DIG', cat: 'COMIDA', icon: '🌽' },
    'CHAVE': { word: 'CHAVE', syllables: ['CHA','VE'], count: 2, struct: 'DIG', cat: 'OBJETO', icon: '🔑' },
    'CHUVA': { word: 'CHUVA', syllables: ['CHU','VA'], count: 2, struct: 'DIG', cat: 'NATUREZA', icon: '🌧️' },
    'ABELHA': { word: 'ABELHA', syllables: ['A','BE','LHA'], count: 3, struct: 'DIG', cat: 'ANIMAL', icon: '🐝' },
    'OLHO': { word: 'OLHO', syllables: ['O','LHO'], count: 2, struct: 'DIG', cat: 'CORPO', icon: '👁️' },
    'GALINHA': { word: 'GALINHA', syllables: ['GA','LI','NHA'], count: 3, struct: 'DIG', cat: 'ANIMAL', icon: '🐔' },
    'CHAPÉU': { word: 'CHAPÉU', syllables: ['CHA','PÉU'], count: 2, struct: 'DIG', cat: 'OBJETO', icon: '🎩' },
    'CARRO': { word: 'CARRO', syllables: ['CAR','RO'], count: 2, struct: 'RR_SS', cat: 'OBJETO', icon: '🚗' },
    'TORRE': { word: 'TORRE', syllables: ['TOR','RE'], count: 2, struct: 'RR_SS', cat: 'OBJETO', icon: '🗼' },
    'PÁSSARO': { word: 'PÁSSARO', syllables: ['PÁS','SA','RO'], count: 3, struct: 'RR_SS', cat: 'ANIMAL', icon: '🐦' },
    'OSSO': { word: 'OSSO', syllables: ['OS','SO'], count: 2, struct: 'RR_SS', cat: 'OBJETO', icon: '🦴' },
    'TERRA': { word: 'TERRA', syllables: ['TER','RA'], count: 2, struct: 'RR_SS', cat: 'NATUREZA', icon: '🌍' },
    'JARRA': { word: 'JARRA', syllables: ['JAR','RA'], count: 2, struct: 'RR_SS', cat: 'OBJETO', icon: '🫗' },
    'VASSOURA': { word: 'VASSOURA', syllables: ['VAS','SOU','RA'], count: 3, struct: 'RR_SS', cat: 'OBJETO', icon: '🧹' },
    'PÊSSEGO': { word: 'PÊSSEGO', syllables: ['PÊS','SE','GO'], count: 3, struct: 'RR_SS', cat: 'COMIDA', icon: '🍑' },
    'MAÇÃ': { word: 'MAÇÃ', syllables: ['MA','ÇÃ'], count: 2, struct: 'IRREG', cat: 'COMIDA', icon: '🍎' },
    'LAÇO': { word: 'LAÇO', syllables: ['LA','ÇO'], count: 2, struct: 'IRREG', cat: 'OBJETO', icon: '🎀' },
    'GELO': { word: 'GELO', syllables: ['GE','LO'], count: 2, struct: 'IRREG', cat: 'NATUREZA', icon: '🧊' },
    'GIRAFA': { word: 'GIRAFA', syllables: ['GI','RA','FA'], count: 3, struct: 'IRREG', cat: 'ANIMAL', icon: '🦒' },
    'XÍCARA': { word: 'XÍCARA', syllables: ['XÍ','CA','RA'], count: 3, struct: 'IRREG', cat: 'OBJETO', icon: '☕' },
    'TÁXI': { word: 'TÁXI', syllables: ['TÁ','XI'], count: 2, struct: 'IRREG', cat: 'OBJETO', icon: '🚕' },
    'PEIXE': { word: 'PEIXE', syllables: ['PEI','XE'], count: 2, struct: 'IRREG', cat: 'ANIMAL', icon: '🐟' },
    'RELÓGIO': { word: 'RELÓGIO', syllables: ['RE','LÓ','GIO'], count: 3, struct: 'IRREG', cat: 'OBJETO', icon: '⌚' },
    'QUEIJO': { word: 'QUEIJO', syllables: ['QUEI','JO'], count: 2, struct: 'QU_GU', cat: 'COMIDA', icon: '🧀' },
    'LEQUE': { word: 'LEQUE', syllables: ['LE','QUE'], count: 2, struct: 'QU_GU', cat: 'OBJETO', icon: '🪭' },
    'FOGUETE': { word: 'FOGUETE', syllables: ['FO','GUE','TE'], count: 3, struct: 'QU_GU', cat: 'OBJETO', icon: '🚀' },
    'GUITARRA': { word: 'GUITARRA', syllables: ['GUI','TAR','RA'], count: 3, struct: 'QU_GU', cat: 'OBJETO', icon: '🎸' }
};

/* ============================================================================
   2. PRESETS DE VARIAÇÕES NATIVAS PARA TODOS OS MÓDULOS EDITÁVEIS
   ============================================================================ */
const DEFAULT_MODULE_VARIATIONS = {
    'E1_1': {
        editable: true, min: 3, max: 10, unit: 'Frase de 2-3 linhas',
        variations: {
            1: [
                'O GATO BRANCO BEBEU TODO O LEITE MORNO NA BACIA DA COZINHA',
                'A MENINA PEQUENA CHUTOU A BOLA COLORIDA PARA PERTO DO PORTÃO',
                'O SOL AMARELO BRILHA FORTE NO CÉU AZUL DURANTE A MANHÃ',
                'O MACACO ESPERTO COMEU A BANANA MADURA NO ALTO DA ÁRVORE',
                'O PATO AMARELO NADA CALMO NA LAGOA FRESCA DA FAZENDA'
            ],
            2: [
                'O CACHORRO MARROM CORREU ATRÁS DA BOLA PELO GRAMADO VERDE',
                'O PADEIRO ASSOU O PÃO QUENTINHO NO FORNO GRANDE DA PADARIA',
                'A CHUVA FINA MOLHOU AS FLORES DO JARDIM DA NOSSA ESCOLA',
                'O CAVALO FORTE PUXOU A CARROÇA CHEIA DE MILHO PELO CAMINHO',
                'A CORUJA DORMIU QUIETA NO GALHO ALTO DA FLORESTA ESCURA'
            ]
        }
    },
    'E1_3': {
        editable: true, min: 3, max: 12, unit: 'Palavra para Pareamento Multimodelo',
        variations: {
            1: ['BOLA', 'MALA', 'SAPO', 'FACA', 'BOLO', 'GATO'],
            2: ['PATO', 'VACA', 'COLA', 'BOTA', 'DEDO', 'LUVA']
        }
    },
    'E2_3': {
        editable: true, min: 4, max: 12, unit: 'Palavra para Contagem Silábica',
        variations: {
            1: ['MÃO', 'SOL', 'BOLA', 'GATO', 'MACACO', 'SAPATO'],
            2: ['PÃO', 'CÃO', 'FACA', 'BOLO', 'PANELA', 'CAVALO']
        }
    },
    'E2_5': {
        editable: true, min: 5, max: 16, unit: 'Sílaba Contínua (F,V,M,N,S,Z,L)',
        variations: {
            1: ['FA', 'FE', 'VA', 'VO', 'MA', 'ME', 'LA', 'LU', 'SA', 'SO'],
            2: ['FI', 'FO', 'VI', 'VU', 'MI', 'MO', 'LE', 'LI', 'SE', 'ZA']
        }
    },
    'E2_6': {
        editable: true, min: 4, max: 12, unit: 'Palavra Dissílaba (Sílabas Contínuas)',
        variations: {
            1: ['MALA', 'FACA', 'SALA', 'LUVA', 'VELA'],
            2: ['MOLA', 'FOGO', 'SAPO', 'VACA', 'BOLA']
        }
    },
    'E3_2': {
        editable: true, min: 3, max: 12, unit: 'Palavra com Figura (Multimodelo)',
        variations: {
            1: ['BOLA', 'GATO', 'BOLO', 'SAPO', 'FACA', 'MACACO'],
            2: ['COLA', 'PATO', 'BOTA', 'VACA', 'DEDO', 'PANELA']
        }
    },
    'E3_3': {
        editable: true, min: 3, max: 12, unit: 'Palavra Categorizável',
        variations: {
            1: ['GATO', 'BOLO', 'BOLA', 'PATO', 'PIPOCA', 'SAPATO'],
            2: ['VACA', 'PÃO', 'CHAVE', 'MACACO', 'MAÇÃ', 'PANELA']
        }
    },
    'E3_4': {
        editable: true, min: 4, max: 12, unit: 'Palavra para Cópia',
        variations: {
            1: ['BOLA', 'GATO', 'BOLO', 'FACA', 'SAPO'],
            2: ['PATO', 'VACA', 'COLA', 'BOTA', 'DADO']
        }
    },
    'E3_5': {
        editable: true, min: 4, max: 12, unit: 'Palavra para Ditado',
        variations: {
            1: ['BOLA', 'GATO', 'BOLO', 'FACA', 'SAPO'],
            2: ['MOLA', 'RATO', 'BOTA', 'VACA', 'DEDO']
        }
    },
    'E3_6': {
        editable: true, min: 3, max: 10, unit: 'Frase para Espaçamento',
        variations: {
            1: [
                'O GATO BOTA O OVO',
                'A MENINA COMEU O BOLO',
                'O SAPO PULOU NA LAGOA',
                'O MENINO CHUTOU A BOLA'
            ],
            2: [
                'A VACA BEBEU A ÁGUA',
                'O PATO NADA NO RIO',
                'O RATO ROEU O QUEIJO',
                'O CÃO MORDEU O OSSO'
            ]
        }
    },
    'E4_2': {
        editable: true, min: 6, max: 16, unit: 'Sílaba ou Palavra de C e G (Todos os Sons)',
        variations: {
            1: ['CA', 'CE', 'CI', 'CO', 'CU', 'GA', 'GE', 'GI', 'GO', 'GU'],
            2: ['CASA', 'CEBOLA', 'CINEMA', 'COLA', 'GATO', 'GELO', 'GIRAFA', 'GOLA']
        }
    },
    'E4_3': {
        editable: true, min: 5, max: 14, unit: 'Sílaba ou Palavra com QU e GU',
        variations: {
            1: ['QUA', 'QUE', 'QUI', 'GUA', 'GUE', 'GUI'],
            2: ['QUEIJO', 'LEQUE', 'QUILO', 'ÁGUA', 'FOGUETE', 'GUITARRA']
        }
    },
    'E4_4': {
        editable: true, min: 4, max: 12, unit: 'Palavra CVC',
        variations: {
            1: ['BARCO', 'PORTA', 'SOL', 'PASTA'],
            2: ['PORCO', 'TAMBOR', 'CARTA', 'BOLSA']
        }
    },
    'E4_5': {
        editable: true, min: 4, max: 12, unit: 'Palavra CCV',
        variations: {
            1: ['PRATO', 'CLIMA', 'LIVRO', 'PLANTA'],
            2: ['BRUXA', 'FLORESTA', 'TREM', 'BLUSA']
        }
    },
    'E4_6': {
        editable: true, min: 4, max: 12, unit: 'Palavra Contextual (Ç, X, RR, SS, NH, LH)',
        variations: {
            1: ['CARRO', 'PÁSSARO', 'MAÇÃ', 'XÍCARA', 'NINHO', 'CHAVE'],
            2: ['TORRE', 'VASSOURA', 'LAÇO', 'PEIXE', 'ABELHA', 'CHUVA']
        }
    },
    'E4_7': {
        editable: true, min: 5, max: 15, unit: 'Palavra de Fluência (< 3s)',
        variations: {
            1: ['BOLA', 'GATO', 'BARCO', 'PRATO', 'CHAVE', 'SAPATO', 'PORTA', 'LIVRO'],
            2: ['FACA', 'PATO', 'PORCO', 'PLANTA', 'CHUVA', 'PANELA', 'CARTA', 'BLUSA']
        }
    },
    'E4_8': {
        editable: true, min: 5, max: 15, unit: 'Palavra Nova Recombinativa',
        variations: {
            1: ['MATA', 'CABO', 'TELA', 'BOTE', 'LATA', ' MAPA'],
            2: ['TOCA', 'GALO', 'POTE', 'FITA', 'RODA', 'CAMA']
        }
    },
    'E5_1': {
        editable: true, min: 3, max: 10, unit: 'Frase em Blocos Sintáticos',
        variations: {
            1: [
                '[O menino pequeno] [comeu o bolo]',
                '[A menina bonita] [achou a chave]',
                '[O cachorro marrom] [correu no parque]',
                '[O gato branco] [bebeu o leite]'
            ],
            2: [
                '[O cavalo forte] [puxou a carroça]',
                '[O padeiro alegre] [assou o pão]',
                '[A chuva fria] [molhou a rua]',
                '[O sapo verde] [pulou na lagoa]'
            ]
        }
    },
    'E5_2': {
        editable: true, min: 3, max: 10, unit: 'Frase para Composição Sintática',
        variations: {
            1: [
                'O MENINO COMEU O BOLO',
                'A MENINA CHUTOU A BOLA',
                'O GATO BEBEU O LEITE',
                'O CACHORRO MORDEU O PÃO',
                'O PADEIRO CORTOU O QUEIJO'
            ],
            2: [
                'O MACACO COMEU A MAÇÃ',
                'A MENINA BEBEU O SUCO',
                'O MENINO ACHOU A CHAVE',
                'O CACHORRO ACHOU O SAPATO',
                'O PADEIRO COMEU A PIPOCA'
            ]
        }
    }
};

const MINIMAL_PAIRS_DB = [
    { contrast: 'F/V', target: 'FACA', distractor: 'VACA', var: 1 },
    { contrast: 'F/V', target: 'VACA', distractor: 'FACA', var: 2 },
    { contrast: 'F/V', target: 'FILA', distractor: 'VILA', var: 1 },
    { contrast: 'P/B', target: 'PATO', distractor: 'BATO', var: 1 },
    { contrast: 'P/B', target: 'BOTE', distractor: 'POTE', var: 2 },
    { contrast: 'P/B', target: 'BOLA', distractor: 'POLA', var: 2 },
    { contrast: 'T/D', target: 'TETO', distractor: 'DEDO', var: 1 },
    { contrast: 'T/D', target: 'DEDO', distractor: 'TETO', var: 2 },
    { contrast: 'T/D', target: 'DADO', distractor: 'TADO', var: 1 },
    { contrast: 'C/G', target: 'COLA', distractor: 'GOLA', var: 1 },
    { contrast: 'C/G', target: 'GATO', distractor: 'CATO', var: 2 },
    { contrast: 'C/G', target: 'GALO', distractor: 'CALO', var: 2 }
];

const RHYME_VARIATIONS = {
    1: [
        { target: 'MÃO', match: 'PÃO', distractors: ['BOLA', 'SAPO', 'FACA'] },
        { target: 'GATO', match: 'PATO', distractors: ['BOLO', 'MÃO', 'CHAVE'] },
        { target: 'BOLA', match: 'COLA', distractors: ['RATO', 'GELO', 'SOL'] },
        { target: 'JANELA', match: 'PANELA', distractors: ['BOTA', 'VACA', 'OSSO'] },
        { target: 'FACA', match: 'VACA', distractors: ['PIPOCA', 'CARRO', 'LEÃO'] }
    ],
    2: [
        { target: 'PÃO', match: 'CÃO', distractors: ['GATO', 'BOTA', 'LIVRO'] },
        { target: 'RATO', match: 'MATO', distractors: ['COLA', 'SOL', 'CHUVA'] },
        { target: 'MOLA', match: 'GOLA', distractors: ['PATO', 'DEDO', 'MAÇÃ'] },
        { target: 'BONECA', match: 'MALETA', distractors: ['CARRO', 'SOL', 'PÃO'] },
        { target: 'LEÃO', match: 'AVIÃO', distractors: ['PORTA', 'SAPO', 'GELO'] }
    ]
};

const ALLIT_VARIATIONS = {
    1: [
        { target: 'BOLO', match: 'BOTA', distractors: ['GATO', 'PATO', 'FACA'] },
        { target: 'MACACO', match: 'MALETA', distractors: ['SAPO', 'BOLA', 'CHUVA'] },
        { target: 'SAPO', match: 'SAPATO', distractors: ['COLA', 'VACA', 'MILHO'] },
        { target: 'FACA', match: 'FOGO', distractors: ['DEDO', 'BOLO', 'PORTA'] },
        { target: 'DEDO', match: 'DADO', distractors: ['TETO', 'GATO', 'LAÇO'] }
    ],
    2: [
        { target: 'BOLA', match: 'BOCA', distractors: ['RATO', 'VACA', 'SOL'] },
        { target: 'PATO', match: 'PANELA', distractors: ['GATO', 'MOLA', 'OSSO'] },
        { target: 'COLA', match: 'CAVALO', distractors: ['FACA', 'BOTA', 'CHAVE'] },
        { target: 'CHAVE', match: 'CHUVA', distractors: ['BOLO', 'PATO', 'MAÇÃ'] },
        { target: 'GELO', match: 'GIRAFA', distractors: ['SAPO', 'DEDO', 'PORTA'] }
    ]
};

/* ============================================================================
   3. MATRIZ SINTÁTICA PARA COMPREENSÃO WH (5.3) E NARRATIVAS (NÍVEL 5)
   ============================================================================ */
const SYNTACTIC_MATRIX = {
    agents: [
        { text: 'O menino', gender: 'M', tag: 'HUMAN' },
        { text: 'A menina', gender: 'F', tag: 'HUMAN' },
        { text: 'O macaco', gender: 'M', tag: 'ANIMAL' },
        { text: 'O cachorro', gender: 'M', tag: 'ANIMAL' },
        { text: 'O gato', gender: 'M', tag: 'ANIMAL' },
        { text: 'O padeiro', gender: 'M', tag: 'HUMAN' }
    ],
    actions: [
        { verb: 'comeu', reqObj: 'FOOD_SOLID' },
        { verb: 'mordeu', reqObj: 'FOOD_SOLID' },
        { verb: 'cortou', reqObj: 'FOOD_CUT' },
        { verb: 'bebeu', reqObj: 'LIQUID' },
        { verb: 'chutou', reqObj: 'TOY_KICK' },
        { verb: 'achou', reqObj: 'OBJECT_ANY' }
    ],
    objects: [
        { text: 'o bolo', tag: 'FOOD_SOLID' },
        { text: 'a maçã', tag: 'FOOD_SOLID' },
        { text: 'o pão', tag: 'FOOD_SOLID' },
        { text: 'a pipoca', tag: 'FOOD_SOLID' },
        { text: 'o queijo', tag: 'FOOD_CUT' },
        { text: 'o suco', tag: 'LIQUID' },
        { text: 'o leite', tag: 'LIQUID' },
        { text: 'a bola', tag: 'TOY_KICK' },
        { text: 'o sapato', tag: 'OBJECT_ANY' },
        { text: 'a chave', tag: 'OBJECT_ANY' }
    ],
    places: [
        { text: 'na cozinha' },
        { text: 'na sala' },
        { text: 'no quintal' },
        { text: 'na escola' },
        { text: 'no parque' }
    ]
};

function generateLogicalSentenceTrial() {
    const agent = SYNTACTIC_MATRIX.agents[Math.floor(Math.random() * SYNTACTIC_MATRIX.agents.length)];
    const action = SYNTACTIC_MATRIX.actions[Math.floor(Math.random() * SYNTACTIC_MATRIX.actions.length)];
    const validObjs = SYNTACTIC_MATRIX.objects.filter(o => o.tag === action.reqObj);
    const obj = validObjs[Math.floor(Math.random() * validObjs.length)];
    const place = SYNTACTIC_MATRIX.places[Math.floor(Math.random() * SYNTACTIC_MATRIX.places.length)];

    const sentence = `${agent.text} ${action.verb} ${obj.text} ${place.text}.`;
    const shortSpoken = `${agent.text} ${action.verb} ${obj.text}.`;
    const wordsArray = `${agent.text} ${action.verb} ${obj.text}`.toUpperCase().split(' ');

    const whTypes = ['WHO', 'WHAT', 'WHERE'];
    const chosenWH = whTypes[Math.floor(Math.random() * whTypes.length)];
    let question = '';
    let correct = '';
    let distractors = [];

    if (chosenWH === 'WHO') {
        question = `Quem ${action.verb} ${obj.text}?`;
        correct = agent.text;
        distractors = SYNTACTIC_MATRIX.agents.filter(a => a.text !== agent.text).map(a => a.text);
    } else if (chosenWH === 'WHAT') {
        question = `O que ${agent.text.toLowerCase()} ${action.verb}?`;
        correct = obj.text;
        distractors = SYNTACTIC_MATRIX.objects.filter(o => o.text !== obj.text).map(o => o.text);
    } else {
        question = `Onde ${agent.text.toLowerCase()} ${action.verb} ${obj.text}?`;
        correct = place.text;
        distractors = SYNTACTIC_MATRIX.places.filter(p => p.text !== place.text).map(p => p.text);
    }

    return {
        sentence,
        shortSpoken,
        wordsArray,
        question,
        correct,
        distractors: shuffleArray([...new Set(distractors)]).slice(0, 3)
    };
}

const NARRATIVES_DB = [
    {
        id: 'NARR_1',
        steps: [
            '1º: Beto colocou o milho na panela.',
            '2º: O milho estourou no fogo quente.',
            '3º: Ele comeu toda a pipoca salgada.'
        ],
        intruderSentence: ['O', 'MENINO', 'COMEU', 'A', 'PANELA', 'QUENTINHA.'],
        intruderWord: 'PANELA',
        correctReplacement: 'PIPOCA',
        distractorReplacements: ['SAPATO', 'JANELA']
    },
    {
        id: 'NARR_2',
        steps: [
            '1º: Ana plantou a semente na terra.',
            '2º: Ela colocou água todos os dias.',
            '3º: Uma linda flor amarela nasceu.'
        ],
        intruderSentence: ['A', 'MENINA', 'BEBEU', 'UM', 'SAPATO', 'GELADO.'],
        intruderWord: 'SAPATO',
        correctReplacement: 'SUCO',
        distractorReplacements: ['MARTELO', 'TAPETE']
    },
    {
        id: 'NARR_3',
        steps: [
            '1º: O cachorro viu a bola no jardim.',
            '2º: Ele correu atrás da bola azul.',
            '3º: O cachorro levou a bola para o dono.'
        ],
        intruderSentence: ['O', 'GATO', 'SUBIU', 'NO', 'PEIXE', 'DA', 'CASA.'],
        intruderWord: 'PEIXE',
        correctReplacement: 'TELHADO',
        distractorReplacements: ['QUEIJO', 'GARFO']
    }
];

/* ============================================================================
   4. CURRÍCULO FINAL REPAGINADO (NÍVEIS 1 A 5, SILABÁRIO E EXTRAS)
   ============================================================================ */
const EIDOS_MODULES = [
    // NÍVEL 1: Prontidão, Símbolos e Vogais
    { id: 'E1_1', code: '1.1', level: 'N1', title: 'Rastreio Visual', desc: 'Varredura esquerda-direita e cima-baixo em 2-3 linhas.', engine: 'DTT', subType: 'TRACKING' },
    { id: 'E1_2', code: '1.2', level: 'N1', title: 'Discriminação de Símbolos', desc: 'Separar letras de números e formas.', engine: 'MTS', subType: 'SYM_DISC' },
    { id: 'E1_3', code: '1.3', level: 'N1', title: 'Identidade de Palavras', desc: 'Parear 3 palavras impressas idênticas simultaneamente.', engine: 'MULTIMTS', subType: 'WORD_IDENT_MM' },
    { id: 'E1_4', code: '1.4', level: 'N1', title: 'Orientação do Grafema', desc: 'Identificar letras espelhadas (b/d, p/q).', engine: 'MTS', subType: 'MIRROR_GRAPH' },
    { id: 'E1_5', code: '1.5', level: 'N1', title: 'Vogais Puras', desc: 'Identificação e nomeação de A, E, I, O, U.', engine: 'MTS', subType: 'VOWELS_PURE' },
    { id: 'E1_6', code: '1.6', level: 'N1', title: 'Classificação 1: Vogal vs. Consoante', desc: 'Discriminação visual estrutural de letras.', engine: 'MTS', subType: 'CLASS_VC', unlockSyl: ['VOGAIS', 'ENCONTROS'] },

    // NÍVEL 2: Consciência Fonológica e Primeiras Sílabas
    { id: 'E2_1', code: '2.1', level: 'N2', title: 'Rimas', desc: 'Figuras que terminam com o mesmo som.', engine: 'MTS', subType: 'RHYME', isAudioModel: true },
    { id: 'E2_2', code: '2.2', level: 'N2', title: 'Aliteração', desc: 'Figuras que começam com o mesmo som.', engine: 'MTS', subType: 'ALLITERATION', isAudioModel: true },
    { id: 'E2_3', code: '2.3', level: 'N2', title: 'Segmentação Silábica', desc: 'Contagem de sílabas da palavra ouvida.', engine: 'DTT', subType: 'SYL_COUNT', isAudioModel: true },
    { id: 'E2_4', code: '2.4', level: 'N2', title: 'Consoantes Contínuas', desc: 'Discriminação de F, V, M, N, S, Z, L.', engine: 'MTS', subType: 'CONT_PHON' },
    { id: 'E2_5', code: '2.5', level: 'N2', title: 'Reconhecimento de Sílabas', desc: 'Discriminação de sílabas contínuas inteiras (FA, MA, LA).', engine: 'MTS', subType: 'CV_FUSION' },
    { id: 'E2_6', code: '2.6', level: 'N2', title: 'Formação de Primeiras Palavras', desc: 'Juntar sílabas nos slots e realizar leitura vocal via microfone.', engine: 'CRMTS', subType: 'SYL_WORD_BUILD' },
    { id: 'E2_7', code: '2.7', level: 'N2', title: 'Classificação 2: Sílaba vs. Palavra', desc: 'Categorização por extensão e unidade.', engine: 'MTS', subType: 'CLASS_SP' },
    { id: 'E2_8', code: '2.8', level: 'N2', title: 'Classificação 3: Estrutura Total', desc: 'Pareamento Multimodelo: Vogal, Consoante, Sílaba e Palavra.', engine: 'MULTIMTS', subType: 'CLASS_TOTAL_MM', unlockSyl: ['F','V','M','N','S','Z','L','R','X','J'] },

    // NÍVEL 3: Oclusivas Regulares, Compreensão Lexical e Espaçamento
    { id: 'E3_1', code: '3.1', level: 'N3', title: 'Consoantes Oclusivas Regulares', desc: 'Discriminação de P, B, T, D.', engine: 'MTS', subType: 'OCCL_PHON' },
    { id: 'E3_2', code: '3.2', level: 'N3', title: 'Relação Figura-Palavra', desc: 'Conectar 3 figuras simultaneamente a 3 palavras escritas.', engine: 'MULTIMTS', subType: 'FIG_WORD_MM' },
    { id: 'E3_3', code: '3.3', level: 'N3', title: 'Categorização Semântica', desc: 'Parear palavras lidas às suas categorias (Animal, Comida, Objeto).', engine: 'MULTIMTS', subType: 'SEMANTIC_CAT_MM' },
    { id: 'E3_4', code: '3.4', level: 'N3', title: 'Transcrição e Cópia', desc: 'Montar palavra com letras móveis a partir do modelo visual.', engine: 'CRMTS', subType: 'COPY_CRMTS' },
    { id: 'E3_5', code: '3.5', level: 'N3', title: 'Escrita sob Ditado', desc: 'Montar palavra com letras móveis a partir do áudio.', engine: 'CRMTS', subType: 'DICT_CRMTS', isAudioModel: true },
    { id: 'E3_6', code: '3.6', level: 'N3', title: 'Espaço na Frase', desc: 'Segmentar a sentença aglutinada tocando nos limites das palavras.', engine: 'CRMTS', subType: 'WORD_SPACE', unlockSyl: ['P','B','T','D'] },

    // NÍVEL 4: Dificuldades Ortográficas, Pares Mínimos e Recombinação
    { id: 'E4_1', code: '4.1', level: 'N4', title: 'Pares Mínimos Auditivos', desc: 'Contraste auditivo fino (F/V, P/B, T/D, C/G).', engine: 'MTS', subType: 'MIN_PAIRS', isAudioModel: true },
    { id: 'E4_2', code: '4.2', level: 'N4', title: 'Variações Sonoras do C e G', desc: 'Discriminar mudança sonora com E/I (CA, CE, CI, CO, CU / GA, GE, GI, GO, GU).', engine: 'MTS', subType: 'CG_ALL_SOUNDS', unlockSyl: ['C','G'] },
    { id: 'E4_3', code: '4.3', level: 'N4', title: 'Dígrafos Oclusivos QU e GU', desc: 'Discriminação de QUA, QUE, QUI e GUA, GUE, GUI.', engine: 'MTS', subType: 'QU_GU_SOUNDS', unlockSyl: ['Q'] },
    { id: 'E4_4', code: '4.4', level: 'N4', title: 'Sílabas Fechadas (CVC)', desc: 'Palavras terminadas em L, S, R, M, N.', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'CVC' },
    { id: 'E4_5', code: '4.5', level: 'N4', title: 'Encontros Consonantais (CCV)', desc: 'Encontros com L e R (PRATO, CLIMA). Sugere ativação no Silabário.', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'CCV', promptSylComplex: true },
    { id: 'E4_6', code: '4.6', level: 'N4', title: 'Sons Contextuais', desc: 'Palavras com Ç, X, RR, SS, NH, LH.', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'IRREG' },
    { id: 'E4_7', code: '4.7', level: 'N4', title: 'Fluência de Palavras Isoladas', desc: 'Leitura ágil cronometrada (< 3 segundos por palavra).', engine: 'FLUENCY', subType: 'SPRINT_3S' },
    { id: 'E4_8', code: '4.8', level: 'N4', title: 'Leitura Recombinativa', desc: 'Leitura vocal de palavras novas recombinadas para atestar abstração.', engine: 'DTT', subType: 'RECOMB_STT' },

    // NÍVEL 5: Sintaxe e Produção Lógica
    { id: 'E5_1', code: '5.1', level: 'N5', title: 'Agrupamento Sintático', desc: 'Leitura de frases em blocos visuais de sentido.', engine: 'DTT', subType: 'SYNTACTIC_GROUP' },
    { id: 'E5_2', code: '5.2', level: 'N5', title: 'Composição Sintática sob Ditado', desc: 'Montar frase ditada utilizando palavras e espaço.', engine: 'CRMTS', subType: 'SENTENCE_BUILD', isAudioModel: true },
    { id: 'E5_3', code: '5.3', level: 'N5', title: 'Compreensão WH', desc: 'Responder Quem?, O que fez? e Onde? após leitura.', engine: 'MTS', subType: 'SYNTACTIC_WH' },
    { id: 'E5_4', code: '5.4', level: 'N5', title: 'Autocorreção Semântica', desc: 'Localizar palavra intrusa absurda na frase e substituir pela correta.', engine: 'CRMTS', subType: 'INTRUDER_WORD' },
    { id: 'E5_5', code: '5.5', level: 'N5', title: 'Sequência Lógica', desc: 'Ordenar frases cronologicamente em 1º, 2º e 3º.', engine: 'CRMTS', subType: 'CHRONO_SEQ' }
];

// Ordem do Silabário repaginada: Vogais -> Contínuas -> Oclusivas Regulares -> C, G, Q no final
const syllabaryOrder = ['VOGAIS', 'ENCONTROS', 'F','V','M','N','S','Z','L','R','X','J', 'P','B','T','D', 'C','G','Q'];
const extraModules = ['PSEUDOPALAVRAS', 'PALAVRAS'];
const curriculumOrder = [...syllabaryOrder, ...extraModules];
const vowels = ['A','E','I','O','U'];
const encounters = ['AI','EI','OI','UI','AU','EU','OU','ÃO'];

const phoneticsMap = {
    'AU': ['AO'], 'AO': ['AU'], 'OU': ['O'], 'ÃO': ['AM', 'AO', 'AUM'], 'EI': ['E'],
    'B': ['BE', 'BÊ'], 'C': ['CE', 'CÊ', 'QUE'], 'D': ['DE', 'DÊ'], 'F': ['EFE', 'FFF', 'FE'], 'G': ['GE', 'GÊ', 'GUE'], 'J': ['JOTA', 'JE'], 'L': ['ELE', 'LLL', 'LE'], 'M': ['EME', 'MMM', 'ME'], 'N': ['ENE', 'NNN', 'NE'], 'P': ['PE', 'PÊ'], 'R': ['ERRE', 'RE'], 'S': ['ESSE', 'SSS', 'SE'], 'T': ['TE', 'TÊ'], 'V': ['VE', 'VÊ', 'VVV'], 'X': ['XIS', 'XE'], 'Z': ['ZE', 'ZÊ', 'ZZZ'], 'Y': ['IPSLON', 'IPISLON'], 'W': ['DABLIU'],
    'CA': ['K', 'KA'], 'CE': ['SE', 'C'], 'CI': ['SI', 'SEI', 'CY', 'SY'], 'CO': ['KO'],
    'CU': ['C\\*', 'C\\*\\*', 'C\\*\\*\\*', 'KU', 'C...'],
    'GE': ['JE'], 'GI': ['JI'], 'QUE': ['KE', 'K', 'Q'], 'QUI': ['KI'], 'QUA': ['KUA'],
    'GUA': ['GUA'], 'GUE': ['GE', 'GUE'], 'GUI': ['GI', 'GUI'],
    'XA': ['CHA'], 'XE': ['CHE'], 'XI': ['CHI'], 'XO': ['CHO'], 'XU': ['CHU'],
    'CHA': ['XA'], 'CHE': ['XE'], 'CHI': ['XI'], 'CHO': ['XO'], 'CHU': ['XU'],
    'SE': ['CE'], 'SI': ['CI'], 'JE': ['GE'], 'JI': ['GI']
};
const preReqTerms = {
    'VOGAL': ['VOGAL', 'VOGAIS'],
    'CONSOANTE': ['CONSOANTE', 'CONSOANTES'],
    'SÍLABA': ['SILABA', 'SÍLABA', 'SILABAS'],
    'PALAVRA': ['PALAVRA', 'PALAVRAS']
};
