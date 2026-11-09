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
   2. PRESETS DE VARIAÇÕES NATIVAS PARA OS MÓDULOS EDITÁVEIS
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
        editable: true, min: 3, max: 12, unit: 'Palavra (Ciclo 1: MTS | Ciclo 2: Multi-MTS)',
        variations: {
            1: ['BOLA', 'MALA', 'SAPO', 'FACA', 'BOLO', 'GATO'],
            2: ['PATO', 'VACA', 'COLA', 'BOTA', 'DEDO', 'LUVA']
        }
    },
    'E2_3': {
        editable: true, min: 4, max: 12, unit: 'Consoante Contínua (Som -> Boca -> Letra)',
        variations: {
            1: ['F', 'V', 'S', 'Z', 'M', 'N'],
            2: ['L', 'R', 'X', 'J', 'F', 'S']
        }
    },
    'E2_4': {
        editable: true, min: 4, max: 12, unit: 'Consoante Oclusiva Regular (Som -> Boca -> Letra)',
        variations: {
            1: ['P', 'B', 'T', 'D'],
            2: ['C', 'K', 'G', 'P', 'B', 'T']
        }
    },
    'E2_5': {
        editable: true, min: 4, max: 12, unit: 'Palavra para Contagem Silábica',
        variations: {
            1: ['MÃO', 'SOL', 'BOLA', 'GATO', 'MACACO', 'SAPATO'],
            2: ['PÃO', 'CÃO', 'FACA', 'BOLO', 'PANELA', 'CAVALO']
        }
    },
    'E2_6': {
        editable: true, min: 4, max: 14, unit: 'Sílaba CV (Var 1: Contínuas | Var 2: Oclusivas)',
        variations: {
            1: ['FA', 'VE', 'MA', 'NO', 'SA', 'LA', 'ZE', 'XI', 'JA', 'RO'],
            2: ['PA', 'BE', 'TI', 'DO', 'CA', 'GO', 'PU', 'BO', 'TA', 'DE']
        }
    },
    'E2_7': {
        editable: true, min: 5, max: 16, unit: 'Sílaba Direta para Discriminação',
        variations: {
            1: ['FA', 'FE', 'VA', 'VO', 'MA', 'ME', 'LA', 'LU', 'SA', 'SO'],
            2: ['PA', 'PE', 'BO', 'BU', 'TA', 'TE', 'DA', 'DO', 'CA', 'GO']
        }
    },
    'E3_1': {
        editable: true, min: 4, max: 12, unit: 'Palavra para Construção (CRMTS + Sondagem Limpa)',
        variations: {
            1: ['MALA', 'FACA', 'SALA', 'LUVA', 'VELA', 'BOLA'],
            2: ['MOLA', 'FOGO', 'SAPO', 'VACA', 'BOLO', 'GATO']
        }
    },
    'E3_2': {
        editable: true, min: 3, max: 12, unit: 'Palavra com Figura (Equivalência em 4 Ciclos)',
        variations: {
            1: ['BOLA', 'GATO', 'BOLO', 'SAPO', 'FACA', 'MACACO'],
            2: ['COLA', 'PATO', 'BOTA', 'VACA', 'DEDO', 'PANELA']
        }
    },
    'E3_3': {
        editable: true, min: 4, max: 12, unit: 'Palavra para Transcrição e Cópia',
        variations: {
            1: ['BOLA', 'GATO', 'BOLO', 'FACA', 'SAPO'],
            2: ['PATO', 'VACA', 'COLA', 'BOTA', 'DADO']
        }
    },
    'E3_4': {
        editable: true, min: 4, max: 12, unit: 'Palavra para Escrita sob Ditado',
        variations: {
            1: ['BOLA', 'GATO', 'BOLO', 'FACA', 'SAPO'],
            2: ['MOLA', 'RATO', 'BOTA', 'VACA', 'DEDO']
        }
    },
    'E3_5': {
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
    'EX_CAT_SEM': {
        editable: true, min: 3, max: 12, unit: 'Palavra Categorizável (Extras)',
        variations: {
            1: ['GATO', 'BOLO', 'BOLA', 'PATO', 'PIPOCA', 'SAPATO'],
            2: ['VACA', 'PÃO', 'CHAVE', 'MACACO', 'MAÇÃ', 'PANELA']
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
            1: ['MATA', 'CABO', 'TELA', 'BOTE', 'LATA', 'MAPA'],
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
        distractors: [...new Set(distractors)].sort(() => 0.5 - Math.random()).slice(0, 3)
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
   4. CURRÍCULO REESTRUTURADO (COM PORTAIS DE RECOMPENSA E EXTRAS)
   ============================================================================ */
const EIDOS_MODULES = [
    // NÍVEL 1: Prontidão, Símbolos e Vogais
    { id: 'E1_1', code: '1.1', level: 'N1', title: 'Rastreio Visual', desc: 'Varredura esquerda-direita e cima-baixo em 2-3 linhas.', engine: 'DTT', subType: 'TRACKING' },
    { id: 'E1_2', code: '1.2', level: 'N1', title: 'Discriminação de Símbolos', desc: 'Separar letras de números e formas.', engine: 'MTS', subType: 'SYM_DISC' },
    { id: 'E1_3', code: '1.3', level: 'N1', title: 'Identidade de Palavras', desc: 'Ciclo 1: MTS simples (treino de mecânica) + Ciclo 2: Pareamento Multimodelo 3x3.', engine: 'MULTIMTS', subType: 'WORD_IDENT_MM' },
    { id: 'E1_4', code: '1.4', level: 'N1', title: 'Orientação do Grafema', desc: 'Identificar letras espelhadas (b/d, p/q).', engine: 'MTS', subType: 'MIRROR_GRAPH' },
    { id: 'E1_5', code: '1.5', level: 'N1', title: 'Vogais Puras', desc: 'Identificação e nomeação de A, E, I, O, U.', engine: 'MTS', subType: 'VOWELS_PURE', unlockSyl: ['VOGAIS', 'ENCONTROS'], alsoUnlock: ['R_N1_VC', 'EX_CLASS_VC', 'E2_1'] },
    { id: 'R_N1_VC', code: '★', level: 'N1', title: 'Desbloquear Extra: Vogal vs. Consoante', desc: 'Atalho opcional de recompensa para a atividade de classificação estrutural nos Extras.', engine: 'REWARD_PORTAL', targetTab: 'EXTRAS', openModuleId: 'EX_CLASS_VC', unlockTargets: ['EX_CLASS_VC', 'E2_1'] },

    // NÍVEL 2: Consciência Fonológica, Consoantes (Contínuas e Oclusivas) e Sílabas
    { id: 'E2_1', code: '2.1', level: 'N2', title: 'Rimas', desc: 'Figuras que terminam com o mesmo som.', engine: 'MTS', subType: 'RHYME', isAudioModel: true },
    { id: 'E2_2', code: '2.2', level: 'N2', title: 'Aliteração', desc: 'Figuras que começam com o mesmo som.', engine: 'MTS', subType: 'ALLITERATION', isAudioModel: true, alsoUnlock: ['R_N2_FON', 'E2_3'] },
    { id: 'R_N2_FON', code: '★', level: 'N2', title: 'Abrir Alfabeto Fonológico', desc: 'Portal de recompensa: leva diretamente para o treino articulatório de bocas e sons.', engine: 'REWARD_PORTAL', targetTab: 'FONOLOGICO', unlockTargets: ['E2_3'] },
    { id: 'E2_3', code: '2.3', level: 'N2', title: 'Consoantes Contínuas', desc: 'Discriminação Som -> Boca -> Letra (Var 1: F,V,S,Z,M,N | Var 2: L,R,X,J,F,S).', engine: 'MTS', subType: 'CONT_PHON', unlockSyl: ['F','V','M','N','S','Z','L','R','X','J'] },
    { id: 'E2_4', code: '2.4', level: 'N2', title: 'Consoantes Oclusivas Regulares', desc: 'Discriminação Som -> Boca -> Letra (Var 1: P,B,T,D | Var 2: C,K,G,P,B,T).', engine: 'MTS', subType: 'OCCL_PHON', unlockSyl: ['P','B','T','D'] },
    { id: 'E2_5', code: '2.5', level: 'N2', title: 'Segmentação Silábica', desc: 'Contagem de sílabas da palavra ouvida.', engine: 'DTT', subType: 'SYL_COUNT', isAudioModel: true },
    { id: 'E2_6', code: '2.6', level: 'N2', title: 'Formação de Sílabas', desc: 'Ciclo 1: Triplo Slider (Consoante + Vogal -> Sílaba) | Ciclo 2: Ouvir e Selecionar | Ciclo 3: Ler.', engine: 'SYL_SLIDER', subType: 'SYL_BUILD_SLIDER' },
    { id: 'E2_7', code: '2.7', level: 'N2', title: 'Reconhecimento de Sílabas', desc: 'Discriminação de sílabas diretas contínuas e oclusivas.', engine: 'MTS', subType: 'CV_FUSION', alsoUnlock: ['R_N2_SIL', 'R_N2_SP', 'EX_CLASS_SP', 'EX_CLASS_TOT', 'E3_1', 'E3_2'] },
    { id: 'R_N2_SIL', code: '★', level: 'N2', title: 'Abrir Guia do Silabário', desc: 'Portal de recompensa: desbloqueia e leva direto para o treino das famílias silábicas.', engine: 'REWARD_PORTAL', targetTab: 'SILABARIO', unlockTargets: ['E3_1', 'E3_2'] },
    { id: 'R_N2_SP', code: '★', level: 'N2', title: 'Desbloquear Extra: Sílaba vs. Palavra', desc: 'Atalho opcional para os jogos de classificação estrutural na guia Extras.', engine: 'REWARD_PORTAL', targetTab: 'EXTRAS', openModuleId: 'EX_CLASS_SP', unlockTargets: ['EX_CLASS_SP', 'EX_CLASS_TOT', 'E3_1', 'E3_2'] },

    // NÍVEL 3: Construção de Palavras, Equivalência em 4 Ciclos e Escrita
    { id: 'E3_1', code: '3.1', level: 'N3', title: 'Construção de Palavras', desc: 'Montar sílabas nos slots com apoio de imagem e realizar leitura limpa (sem figura/som).', engine: 'CRMTS', subType: 'SYL_WORD_BUILD', alsoUnlock: ['E3_2'] },
    { id: 'E3_2', code: '3.2', level: 'N3', title: 'Equivalência Figura-Palavra', desc: '4 Ciclos: 1. Identidade de Figuras + Nomear | 2. BC->C com dica | 3. B->C sem dica | 4. Ler palavras.', engine: 'MULTIMTS', subType: 'EQUIV_4STEPS_MM', alsoUnlock: ['E3_3'] },
    { id: 'E3_3', code: '3.3', level: 'N3', title: 'Transcrição e Cópia', desc: 'Montar palavra com letras móveis a partir do modelo visual.', engine: 'CRMTS', subType: 'COPY_CRMTS' },
    { id: 'E3_4', code: '3.4', level: 'N3', title: 'Escrita sob Ditado', desc: 'Montar palavra com letras móveis a partir do áudio.', engine: 'CRMTS', subType: 'DICT_CRMTS', isAudioModel: true },
    { id: 'E3_5', code: '3.5', level: 'N3', title: 'Espaço na Frase', desc: 'Segmentar a sentença aglutinada tocando nos limites das palavras.', engine: 'CRMTS', subType: 'WORD_SPACE', alsoUnlock: ['R_N3_CAT', 'EX_CAT_SEM', 'E4_1'] },
    { id: 'R_N3_CAT', code: '★', level: 'N3', title: 'Desbloquear Extra: Categorização Semântica', desc: 'Portal de recompensa para o jogo de categorias semânticas (Animal, Comida, Objeto) nos Extras.', engine: 'REWARD_PORTAL', targetTab: 'EXTRAS', openModuleId: 'EX_CAT_SEM', unlockTargets: ['EX_CAT_SEM', 'E4_1'] },

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
    { id: 'E5_5', code: '5.5', level: 'N5', title: 'Sequência Lógica', desc: 'Ordenar frases cronologicamente em 1º, 2º e 3º.', engine: 'CRMTS', subType: 'CHRONO_SEQ' },

    // GUIA EXTRAS: Atividades Complementares de Classificação e Categorização
    { id: 'EX_CLASS_VC', code: 'EX.1', level: 'EXTRAS', title: 'Classificação 1: Vogal vs. Consoante', desc: 'Discriminação visual estrutural entre vogais e consoantes.', engine: 'MTS', subType: 'CLASS_VC' },
    { id: 'EX_CLASS_SP', code: 'EX.2', level: 'EXTRAS', title: 'Classificação 2: Sílaba vs. Palavra', desc: 'Categorização por extensão e unidade gráfica.', engine: 'MTS', subType: 'CLASS_SP' },
    { id: 'EX_CLASS_TOT', code: 'EX.3', level: 'EXTRAS', title: 'Classificação 3: Estrutura Total', desc: 'Pareamento Multimodelo: Vogal, Consoante, Sílaba e Palavra.', engine: 'MULTIMTS', subType: 'CLASS_TOTAL_MM' },
    { id: 'EX_CAT_SEM', code: 'EX.4', level: 'EXTRAS', title: 'Categorização Semântica', desc: 'Parear palavras lidas às suas categorias (Animal, Comida, Objeto).', engine: 'MULTIMTS', subType: 'SEMANTIC_CAT_MM' }
];

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

/* ============================================================================
   5. MAPA DE ÁUDIOS FONÊMICOS E MÓDULOS DO ALFABETO FONOLÓGICO (MINIMALISTA)
   ============================================================================ */
const FONEMAS_AUDIO_MAP = {
    'B': 'c-b-1.ogg',
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

    'C': { '1': 'c-c-1.ogg', '2': 'c-c-2.ogg' },
    'G': { '1': 'c-g-1.ogg', '2': 'c-g-2.ogg' },
    'L': { '1': 'c-l-1.ogg', '2': 'c-l-2.ogg' },
    'R': { '1': 'c-r-1.ogg', '2': 'c-r-2.ogg', '3': 'c-r-3.ogg' },
    'S': { '1': 'c-s-1.ogg', '2': 'c-s-2.ogg' },
    'W': { '2': 'c-w-2.ogg' },
    'X': { '1': 'c-x-1.ogg', '2': 'c-x-2.ogg', '3': 'c-x-3.ogg', '4': 'c-x-4.ogg' },

    'A': { '1': 'v-a-1.ogg', '3': 'v-a-3.ogg' },
    'E': { '1': 'v-e-1.ogg', '2': 'v-e-2.ogg', '3': 'v-e-3.ogg' },
    'I': { '1': 'v-i-1.ogg', '3': 'v-i-3.ogg' },
    'O': { '1': 'v-o-1.ogg', '2': 'v-o-2.ogg', '3': 'v-o-3.ogg' },
    'U': { '1': 'v-u-1.ogg', '3': 'v-u-3.ogg' }
};

const PHONOLOGICAL_ALPHABET_MODULES = [
    { id: 'FA_A_1', letter: 'A', varIdx: '1', title: 'A - Som 1', desc: 'Modelagem articulatória e sustentação da vogal A aberta.' },
    { id: 'FA_A_3', letter: 'A', varIdx: '3', title: 'A - Som 2', desc: 'Modelagem articulatória e sustentação da vogal A nasal.' },
    { id: 'FA_E_1', letter: 'E', varIdx: '1', title: 'E - Som 1', desc: 'Modelagem articulatória e sustentação da vogal E aberta.' },
    { id: 'FA_E_2', letter: 'E', varIdx: '2', title: 'E - Som 2', desc: 'Modelagem articulatória e sustentação da vogal E fechada.' },
    { id: 'FA_E_3', letter: 'E', varIdx: '3', title: 'E - Som 3', desc: 'Modelagem articulatória e sustentação da vogal E nasal.' },
    { id: 'FA_I_1', letter: 'I', varIdx: '1', title: 'I - Som 1', desc: 'Modelagem articulatória e sustentação da vogal I oral.' },
    { id: 'FA_I_3', letter: 'I', varIdx: '3', title: 'I - Som 2', desc: 'Modelagem articulatória e sustentação da vogal I nasal.' },
    { id: 'FA_O_1', letter: 'O', varIdx: '1', title: 'O - Som 1', desc: 'Modelagem articulatória e sustentação da vogal O aberta.' },
    { id: 'FA_O_2', letter: 'O', varIdx: '2', title: 'O - Som 2', desc: 'Modelagem articulatória e sustentação da vogal O fechada.' },
    { id: 'FA_O_3', letter: 'O', varIdx: '3', title: 'O - Som 3', desc: 'Modelagem articulatória e sustentação da vogal O nasal.' },
    { id: 'FA_U_1', letter: 'U', varIdx: '1', title: 'U - Som 1', desc: 'Modelagem articulatória e sustentação da vogal U oral.' },
    { id: 'FA_U_3', letter: 'U', varIdx: '3', title: 'U - Som 2', desc: 'Modelagem articulatória e sustentação da vogal U nasal.' },

    { id: 'FA_F_1', letter: 'F', varIdx: '1', title: 'F', desc: 'Modelagem articulatória labiodental surda /f/.' },
    { id: 'FA_V_1', letter: 'V', varIdx: '1', title: 'V', desc: 'Modelagem articulatória labiodental sonora /v/.' },
    { id: 'FA_S_1', letter: 'S', varIdx: '1', title: 'S - Som 1', desc: 'Modelagem articulatória alveolar surda /s/.' },
    { id: 'FA_S_2', letter: 'S', varIdx: '2', title: 'S - Som 2', desc: 'Modelagem articulatória intervocálica sonora /z/.' },
    { id: 'FA_Z_1', letter: 'Z', varIdx: '1', title: 'Z', desc: 'Modelagem articulatória alveolar sonora /z/.' },
    { id: 'FA_X_1', letter: 'X', varIdx: '1', title: 'X - Som 1', desc: 'Modelagem articulatória fricativa palatal (ex: Xícara).' },
    { id: 'FA_X_2', letter: 'X', varIdx: '2', title: 'X - Som 2', desc: 'Modelagem articulatória sonora (ex: Exame).' },
    { id: 'FA_X_3', letter: 'X', varIdx: '3', title: 'X - Som 3', desc: 'Modelagem articulatória sibilante (ex: Texto).' },
    { id: 'FA_X_4', letter: 'X', varIdx: '4', title: 'X - Som 4', desc: 'Modelagem articulatória dupla (ex: Táxi).' },
    { id: 'FA_J_1', letter: 'J', varIdx: '1', title: 'J', desc: 'Modelagem articulatória palatal sonora /ʒ/.' },
    { id: 'FA_M_1', letter: 'M', varIdx: '1', title: 'M', desc: 'Modelagem articulatória bilabial nasal /m/.' },
    { id: 'FA_N_1', letter: 'N', varIdx: '1', title: 'N', desc: 'Modelagem articulatória alveolar nasal /n/.' },
    { id: 'FA_L_1', letter: 'L', varIdx: '1', title: 'L - Som 1', desc: 'Modelagem articulatória lateral alveolar (ex: Lata).' },
    { id: 'FA_L_2', letter: 'L', varIdx: '2', title: 'L - Som 2', desc: 'Modelagem articulatória velarizada final (ex: Sol).' },
    { id: 'FA_R_1', letter: 'R', varIdx: '1', title: 'R - Som 1', desc: 'Modelagem articulatória vibrante forte (ex: Rato).' },
    { id: 'FA_R_2', letter: 'R', varIdx: '2', title: 'R - Som 2', desc: 'Modelagem articulatória branda intervocálica (ex: Arara).' },
    { id: 'FA_R_3', letter: 'R', varIdx: '3', title: 'R - Som 3', desc: 'Modelagem articulatória em coda silábica (ex: Mar).' },
    { id: 'FA_W_2', letter: 'W', varIdx: '2', title: 'W', desc: 'Modelagem articulatória aproximante /w/.' },

    { id: 'FA_P_1', letter: 'P', varIdx: '1', title: 'P', desc: 'Modelagem articulatória oclusiva bilabial surda /p/.' },
    { id: 'FA_B_1', letter: 'B', varIdx: '1', title: 'B', desc: 'Modelagem articulatória oclusiva bilabial sonora /b/.' },
    { id: 'FA_T_1', letter: 'T', varIdx: '1', title: 'T', desc: 'Modelagem articulatória oclusiva linguodental surda /t/.' },
    { id: 'FA_D_1', letter: 'D', varIdx: '1', title: 'D', desc: 'Modelagem articulatória oclusiva linguodental sonora /d/.' },
    { id: 'FA_C_1', letter: 'C', varIdx: '1', title: 'C - Som 1', desc: 'Modelagem articulatória oclusiva velar (CA, CO, CU).' },
    { id: 'FA_C_2', letter: 'C', varIdx: '2', title: 'C - Som 2', desc: 'Modelagem articulatória fricativa alveolar (CE, CI).' },
    { id: 'FA_K_1', letter: 'K', varIdx: '1', title: 'K', desc: 'Modelagem articulatória oclusiva velar /k/.' },
    { id: 'FA_G_1', letter: 'G', varIdx: '1', title: 'G - Som 1', desc: 'Modelagem articulatória velar sonora (GA, GO, GU).' },
    { id: 'FA_G_2', letter: 'G', varIdx: '2', title: 'G - Som 2', desc: 'Modelagem articulatória palatal sonora (GE, GI).' }
];
