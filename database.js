/* ============================================================================
   ALFAMTS - BANCO DE DADOS CURRICULAR E LEXICAL (database.js)
   TRILHA N1-N5 • 4 GEARS DO SILABÁRIO • PALAVRÁRIO • FONOLÓGICO • WORD_BANK
   ============================================================================ */

const vowels = ['A', 'E', 'I', 'O', 'U'];
const encounters = ['AI', 'EI', 'OI', 'UI', 'AU', 'EU', 'OU', 'ÃO'];
const extraModules = ['PSEUDOPALAVRAS', 'PALAVRAS'];

/* MAPA DE ÁUDIOS FONÊMICOS (.OGG) */
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
    'W': { '1': 'c-w-1.ogg' },
    'X': { '1': 'c-x-1.ogg' },
    'Z': { '1': 'c-z-1.ogg' }
};

/* MAPA DE ACEITAÇÃO FONÉTICA PARA RECONHECIMENTO DE VOZ (STT) */
const phoneticsMap = {
    'A': ['A', 'AH', 'HA'],
    'E': ['E', 'EH', 'HE'],
    'I': ['I', 'IH', 'HI', 'Y'],
    'O': ['O', 'OH', 'HO'],
    'U': ['U', 'UH', 'HU'],
    'BA': ['BA', 'BAH'], 'BE': ['BE', 'BEH'], 'BI': ['BI'], 'BO': ['BO', 'BOH'], 'BU': ['BU'],
    'CA': ['CA', 'KA'], 'CO': ['CO', 'KO'], 'CU': ['CU', 'KU'],
    'DA': ['DA'], 'DE': ['DE'], 'DI': ['DI'], 'DO': ['DO'], 'DU': ['DU'],
    'FA': ['FA'], 'FE': ['FE'], 'FI': ['FI'], 'FO': ['FO'], 'FU': ['FU'],
    'GA': ['GA'], 'GO': ['GO'], 'GU': ['GU'],
    'LA': ['LA'], 'LE': ['LE'], 'LI': ['LI'], 'LO': ['LO'], 'LU': ['LU'],
    'MA': ['MA'], 'ME': ['ME'], 'MI': ['MI'], 'MO': ['MO'], 'MU': ['MU'],
    'NA': ['NA'], 'NE': ['NE'], 'NI': ['NI'], 'NO': ['NO'], 'NU': ['NU'],
    'PA': ['PA'], 'PE': ['PE'], 'PI': ['PI'], 'PO': ['PO'], 'PU': ['PU'],
    'RA': ['RA'], 'RE': ['RE'], 'RI': ['RI'], 'RO': ['RO'], 'RU': ['RU'],
    'SA': ['SA'], 'SE': ['SE'], 'SI': ['SI'], 'SO': ['SO'], 'SU': ['SU'],
    'TA': ['TA'], 'TE': ['TE'], 'TI': ['TI'], 'TO': ['TO'], 'TU': ['TU'],
    'VA': ['VA'], 'VE': ['VE'], 'VI': ['VI'], 'VO': ['VO'], 'VU': ['VU']
};

const preReqTerms = {
    'VOGAL': ['VOGAL', 'VOGAIS'],
    'CONSOANTE': ['CONSOANTE', 'CONSOANTES'],
    'SILABA': ['SILABA', 'SILABAS'],
    'PALAVRA': ['PALAVRA', 'PALAVRAS']
};

/* ============================================================================
   CONSTRUTOR DO WORD_BANK (COM SEPARAÇÃO SILÁBICA EXPLÍCITA PARA TODAS AS GEARS)
   ============================================================================ */
const WORD_BANK = {};

function registerBankWords(entries, defaultStruct = 'CV', defaultCat = 'OBJETO') {
    entries.forEach(item => {
        const raw = typeof item === 'string' ? item : item[0];
        const struct = (typeof item === 'object' && item[1]) ? item[1] : defaultStruct;
        const cat = (typeof item === 'object' && item[2]) ? item[2] : defaultCat;
        const syllables = String(raw).trim().toUpperCase().split('-').filter(Boolean);
        const word = syllables.join('');
        if (!word) return;
        WORD_BANK[word] = {
            word,
            syllables,
            count: syllables.length,
            struct,
            cat
        };
    });
}

// Base CV e Encontros (Gear 1, N1-N4, Palavrário)
registerBankWords([
    ['BO-LA', 'CV', 'OBJETO'], ['GA-TO', 'CV', 'ANIMAL'], ['BO-LO', 'CV', 'COMIDA'],
    ['SA-PO', 'CV', 'ANIMAL'], ['FA-CA', 'CV', 'OBJETO'], ['MA-LA', 'CV', 'OBJETO'],
    ['PA-TO', 'CV', 'ANIMAL'], ['VA-CA', 'CV', 'ANIMAL'], ['DA-DO', 'CV', 'OBJETO'],
    ['CA-SA', 'CV', 'LUGAR'], ['CA-MA', 'CV', 'OBJETO'], ['CO-PO', 'CV', 'OBJETO'],
    ['RA-TO', 'CV', 'ANIMAL'], ['RO-DA', 'CV', 'OBJETO'], ['RE-DE', 'CV', 'OBJETO'],
    ['RU-A', 'CV', 'LUGAR'], ['REI', 'CV', 'PESSOA'], ['ROU-PA', 'CV', 'OBJETO'],
    ['TA-TU', 'CV', 'ANIMAL'], ['TE-TO', 'CV', 'LUGAR'], ['TI-A', 'CV', 'PESSOA'],
    ['TI-O', 'CV', 'PESSOA'], ['TEI-A', 'CV', 'NATUREZA'], ['TU-DO', 'CV', 'OBJETO'],
    ['LA-TA', 'CV', 'OBJETO'], ['LU-TA', 'CV', 'AÇÃO'], ['TE-LA', 'CV', 'OBJETO'],
    ['LU-A', 'CV', 'NATUREZA'], ['LEI-TE', 'CV', 'COMIDA'], ['LO-TE', 'CV', 'LUGAR'],
    ['MA-TO', 'CV', 'NATUREZA'], ['MO-LA', 'CV', 'OBJETO'], ['TO-MA-TE', 'CV', 'COMIDA'],
    ['MU-LE-TA', 'CV', 'OBJETO'], ['LA-MA', 'CV', 'NATUREZA'], ['FI-TA', 'CV', 'OBJETO'],
    ['FO-GO', 'CV', 'NATUREZA'], ['FA-MÍ-LIA', 'CV', 'PESSOA'], ['FA-LA', 'CV', 'AÇÃO'],
    ['FO-FO', 'CV', 'OBJETO'], ['FO-CA', 'CV', 'ANIMAL'], ['BO-TA', 'CV', 'OBJETO'],
    ['BU-LE', 'CV', 'OBJETO'], ['LO-BO', 'CV', 'ANIMAL'], ['BE-BÊ', 'CV', 'PESSOA'],
    ['PI-PA', 'CV', 'OBJETO'], ['PA-NE-LA', 'CV', 'OBJETO'], ['PE-TE-CA', 'CV', 'OBJETO'],
    ['PO-TE', 'CV', 'OBJETO'], ['PÉ', 'CV', 'CORPO'], ['NA-VI-O', 'CV', 'OBJETO'],
    ['BO-NE-CA', 'CV', 'OBJETO'], ['CA-NE-CA', 'CV', 'OBJETO'], ['ME-NI-NO', 'CV', 'PESSOA'],
    ['ME-NI-NA', 'CV', 'PESSOA'], ['VE-LA', 'CV', 'OBJETO'], ['LU-VA', 'CV', 'OBJETO'],
    ['VI-O-LÃO', 'CV', 'OBJETO'], ['O-VO', 'CV', 'COMIDA'], ['A-VI-ÃO', 'CV', 'OBJETO'],
    ['SU-CO', 'CV', 'COMIDA'], ['SO-FÁ', 'CV', 'OBJETO'], ['SA-LA-DA', 'CV', 'COMIDA'],
    ['SA-PA-TO', 'CV', 'OBJETO'], ['SI-NO', 'CV', 'OBJETO'], ['DE-DO', 'CV', 'CORPO'],
    ['CA-BI-DE', 'CV', 'OBJETO'], ['DO-CE', 'CV', 'COMIDA'], ['DI-A', 'CV', 'NATUREZA'],
    ['JA-CA-RÉ', 'CV', 'ANIMAL'], ['JA-NE-LA', 'CV', 'OBJETO'], ['TI-JO-LO', 'CV', 'OBJETO'],
    ['CA-JU', 'CV', 'COMIDA'], ['JO-GO', 'CV', 'OBJETO'], ['JI-BOI-A', 'CV', 'ANIMAL'],
    ['LI-XO', 'CV', 'OBJETO'], ['XÍ-CA-RA', 'CV', 'OBJETO'], ['XA-LE', 'CV', 'OBJETO'],
    ['A-BA-CA-XI', 'CV', 'COMIDA'], ['CAI-XA', 'CV', 'OBJETO'], ['PEI-XE', 'CV', 'ANIMAL'],
    ['ZE-RO', 'CV', 'OBJETO'], ['BU-ZI-NA', 'CV', 'OBJETO'], ['A-ZEI-TE', 'CV', 'COMIDA'],
    ['DEZ', 'CVC', 'OBJETO'], ['PAZ', 'CVC', 'OBJETO'], ['CA-VA-LO', 'CV', 'ANIMAL'],
    ['MA-CA-CO', 'CV', 'ANIMAL'], ['TU-CA-NO', 'CV', 'ANIMAL'], ['GA-LO', 'CV', 'ANIMAL'],
    ['GO-TA', 'CV', 'NATUREZA'], ['LA-GO', 'CV', 'NATUREZA'], ['FI-GO', 'CV', 'COMIDA'],
    ['CA-QUI', 'DIGR', 'COMIDA'], ['TA-PE-TE', 'CV', 'OBJETO'], ['BA-TA-TA', 'CV', 'COMIDA'],
    ['MÃO', 'CV', 'CORPO'], ['PÃO', 'CV', 'COMIDA'], ['LE-ÃO', 'CV', 'ANIMAL'],
    ['LI-MÃO', 'CV', 'COMIDA'], ['MEI-A', 'CV', 'OBJETO'], ['ME-LÃO', 'CV', 'COMIDA'],
    ['MA-ÇÃ', 'CV', 'COMIDA'], ['LA-ÇO', 'CV', 'OBJETO'], ['GE-LO', 'CV', 'NATUREZA'],
    ['GI-RA-FA', 'CV', 'ANIMAL'], ['CE-BO-LA', 'CV', 'COMIDA'], ['RE-LÓ-GIO', 'CV', 'OBJETO'],
    ['TÁ-XI', 'CV', 'OBJETO'], ['RO-SA', 'CV', 'NATUREZA'], ['BA-NA-NA', 'CV', 'COMIDA'],
    ['ME-SA', 'CV', 'OBJETO'], ['BO-CA', 'CV', 'CORPO'], ['BI-CO', 'CV', 'CORPO'],
    ['FA-DA', 'CV', 'PESSOA'], ['FI-LA', 'CV', 'OBJETO'], ['VI-LA', 'CV', 'LUGAR'],
    ['U-VA', 'CV', 'COMIDA'], ['PI-A', 'CV', 'OBJETO'], ['GA-LO', 'CV', 'ANIMAL']
], 'CV', 'OBJETO');

// Gear 2 — Fechadas em R e L (CV, CVV, CVC)
registerBankWords([
    ['TAR-TA-RU-GA', 'CVC', 'ANIMAL'], ['TOR-TA', 'CVC', 'COMIDA'], ['TOR-NEI-RA', 'CVC', 'OBJETO'],
    ['TAR-DE', 'CVC', 'NATUREZA'], ['TAL-CO', 'CVC', 'OBJETO'], ['TUR-BI-NA', 'CVC', 'OBJETO'],
    ['TA-LHER', 'CVC', 'OBJETO'], ['TOR-PE-DO', 'CVC', 'OBJETO'], ['MAR-TE-LO', 'CVC', 'OBJETO'],
    ['MAR-CA-DOR', 'CVC', 'OBJETO'], ['MAR', 'CVC', 'NATUREZA'], ['MEL', 'CVC', 'COMIDA'],
    ['MOR-CE-GO', 'CVC', 'ANIMAL'], ['MU-RA-LHA', 'CVC', 'LUGAR'], ['MOL-DU-RA', 'CVC', 'OBJETO'],
    ['MER-GU-LHO', 'CVC', 'AÇÃO'], ['BAR-CO', 'CVC', 'OBJETO'], ['BAL-DE', 'CVC', 'OBJETO'],
    ['BOL-SA', 'CVC', 'OBJETO'], ['BOR-BO-LE-TA', 'CVC', 'ANIMAL'], ['BAL-CÃO', 'CVC', 'OBJETO'],
    ['BAR-BA', 'CVC', 'CORPO'], ['BER-ÇO', 'CVC', 'OBJETO'], ['BUL-BO', 'CVC', 'NATUREZA'],
    ['BOR-DA-DO', 'CVC', 'OBJETO'], ['POR-TA', 'CVC', 'OBJETO'], ['POL-VO', 'CVC', 'ANIMAL'],
    ['PAR-DAL', 'CVC', 'ANIMAL'], ['PER-NA', 'CVC', 'CORPO'], ['POR-CO', 'CVC', 'ANIMAL'],
    ['PAL-CO', 'CVC', 'LUGAR'], ['PAR-QUE', 'CVC', 'LUGAR'], ['POR-TO', 'CVC', 'LUGAR'],
    ['PUL-GA', 'CVC', 'ANIMAL'], ['UR-SO', 'CVC', 'ANIMAL'], ['ÁR-VO-RE', 'CVC', 'NATUREZA'],
    ['GAR-FO', 'CVC', 'OBJETO'], ['CAR-TA', 'CVC', 'OBJETO'], ['COR-VO', 'CVC', 'ANIMAL'],
    ['FOR-MI-GA', 'CVC', 'ANIMAL'], ['FA-ROL', 'CVC', 'OBJETO'], ['FIL-ME', 'CVC', 'OBJETO'],
    ['FU-RA-CÃO', 'CVC', 'NATUREZA'], ['FAL-CÃO', 'CVC', 'ANIMAL'], ['FOR-NO', 'CVC', 'OBJETO'],
    ['FOL-GA', 'CVC', 'AÇÃO'], ['FUR-GÃO', 'CVC', 'OBJETO'], ['CAR-NE', 'CVC', 'COMIDA'],
    ['CO-LHER', 'CVC', 'OBJETO'], ['CE-LU-LAR', 'CVC', 'OBJETO'], ['COR-DA', 'CVC', 'OBJETO'],
    ['CAL-ÇA', 'CVC', 'OBJETO'], ['CA-RA-COL', 'CVC', 'ANIMAL'], ['CO-BER-TOR', 'CVC', 'OBJETO'],
    ['CAR-TEI-RA', 'CVC', 'OBJETO'], ['GOL-FI-NHO', 'CVC', 'ANIMAL'], ['GAL-PÃO', 'CVC', 'LUGAR'],
    ['GAR-GA-LO', 'CVC', 'OBJETO'], ['GUAR-DA', 'CVC', 'PESSOA'], ['GOR-RO', 'CVC', 'OBJETO'],
    ['GAR-RA-FA', 'CVC', 'OBJETO'], ['GI-RAS-SOL', 'CVC', 'NATUREZA'], ['DAR-DO', 'CVC', 'OBJETO'],
    ['DE-DAL', 'CVC', 'OBJETO'], ['DOR-MIR', 'CVC', 'AÇÃO'], ['DOR-SO', 'CVC', 'CORPO'],
    ['SOR-VE-TE', 'CVC', 'COMIDA'], ['SAR-DI-NHA', 'CVC', 'ANIMAL'], ['SER-RA', 'CVC', 'OBJETO'],
    ['SOL', 'CVC', 'NATUREZA'], ['SER-RO-TE', 'CVC', 'OBJETO'], ['SOL-DA-DO', 'CVC', 'PESSOA'],
    ['SEL-VA', 'CVC', 'NATUREZA'], ['SAL-MÃO', 'CVC', 'ANIMAL'], ['JOR-NAL', 'CVC', 'OBJETO'],
    ['JAR-RA', 'CVC', 'OBJETO'], ['JAR-DI-NEI-RO', 'CVC', 'PESSOA'], ['JO-GA-DOR', 'CVC', 'PESSOA'],
    ['JOR-NA-DA', 'CVC', 'AÇÃO'], ['AL-FA-CE', 'CVC', 'COMIDA'], ['SAL', 'CVC', 'COMIDA']
], 'CVC', 'OBJETO');

// Gear 3 — Fechadas em M/N e S
registerBankWords([
    ['TAM-BOR', 'CVC', 'OBJETO'], ['TÊ-NIS', 'CVC', 'OBJETO'], ['TIN-TA', 'CVC', 'OBJETO'],
    ['TAM-PA', 'CVC', 'OBJETO'], ['TES-TA', 'CVC', 'CORPO'], ['TOM-BO', 'CVC', 'AÇÃO'],
    ['TAN-QUE', 'CVC', 'OBJETO'], ['TOS-SE', 'CVC', 'AÇÃO'], ['BAN-CO', 'CVC', 'OBJETO'],
    ['BOM-BA', 'CVC', 'OBJETO'], ['BIS-COI-TO', 'CVC', 'COMIDA'], ['BAM-BU', 'CVC', 'NATUREZA'],
    ['BÚS-SO-LA', 'CVC', 'OBJETO'], ['BON-DE', 'CVC', 'OBJETO'], ['BEN-GA-LA', 'CVC', 'OBJETO'],
    ['BAN-DO', 'CVC', 'ANIMAL'], ['PAS-TA', 'CVC', 'OBJETO'], ['PEN-TE', 'CVC', 'OBJETO'],
    ['PON-TE', 'CVC', 'LUGAR'], ['POM-BO', 'CVC', 'ANIMAL'], ['PÁS-SA-RO', 'CVC', 'ANIMAL'],
    ['PIN-GUIM', 'CVC', 'ANIMAL'], ['PIS-CI-NA', 'CVC', 'LUGAR'], ['PIN-TO', 'CVC', 'ANIMAL'],
    ['PU-DIM', 'CVC', 'COMIDA'], ['PAN-TE-RA', 'CVC', 'ANIMAL'], ['MAN-GA', 'CVC', 'COMIDA'],
    ['MUN-DO', 'CVC', 'NATUREZA'], ['MAN-TEI-GA', 'CVC', 'COMIDA'], ['MON-TE', 'CVC', 'NATUREZA'],
    ['MO-RAN-GO', 'CVC', 'COMIDA'], ['MEN-SA-GEM', 'CVC', 'OBJETO'], ['MAN-TA', 'CVC', 'OBJETO'],
    ['MAN-GUEI-RA', 'CVC', 'OBJETO'], ['LÁ-PIS', 'CVC', 'OBJETO'], ['LEN-TI-LHA', 'CVC', 'COMIDA'],
    ['LAN-CHE', 'CVC', 'COMIDA'], ['LES-MA', 'CVC', 'ANIMAL'], ['LAN-TER-NA', 'CVC', 'OBJETO'],
    ['LEN-ÇO', 'CVC', 'OBJETO'], ['LEN-TE', 'CVC', 'OBJETO'], ['LIS-TA', 'CVC', 'OBJETO'],
    ['FAN-TAS-MA', 'CVC', 'PESSOA'], ['FES-TA', 'CVC', 'LUGAR'], ['FUS-CA', 'CVC', 'OBJETO'],
    ['FÓS-FO-RO', 'CVC', 'OBJETO'], ['FON-TE', 'CVC', 'LUGAR'], ['FUN-GOS', 'CVC', 'NATUREZA'],
    ['FEN-DA', 'CVC', 'NATUREZA'], ['FA-ZEN-DA', 'CVC', 'LUGAR'], ['DEN-TE', 'CVC', 'CORPO'],
    ['DIS-CO', 'CVC', 'OBJETO'], ['DAN-ÇA', 'CVC', 'AÇÃO'], ['DEN-TIS-TA', 'CVC', 'PESSOA'],
    ['DU-EN-DE', 'CVC', 'PESSOA'], ['DES-FI-LE', 'CVC', 'AÇÃO'], ['DEN-GUE', 'CVC', 'ANIMAL'],
    ['DE-SER-TO', 'CVC', 'NATUREZA'], ['NU-VEM', 'CVC', 'NATUREZA'], ['E-LE-FAN-TE', 'CVC', 'ANIMAL'],
    ['CIN-TO', 'CVC', 'OBJETO'], ['ES-PON-JA', 'CVC', 'OBJETO'], ['CIN-CO', 'CVC', 'OBJETO'],
    ['CUS-CUZ', 'CVC', 'COMIDA'], ['CAM-PO', 'CVC', 'LUGAR'], ['CES-TO', 'CVC', 'OBJETO'],
    ['CAS-TE-LO', 'CVC', 'LUGAR'], ['CON-CHA', 'CVC', 'NATUREZA'], ['CAN-GU-RU', 'CVC', 'ANIMAL'],
    ['COS-TE-LA', 'CVC', 'COMIDA'], ['CI-MEN-TO', 'CVC', 'OBJETO'], ['GAN-SO', 'CVC', 'ANIMAL'],
    ['GOS-MA', 'CVC', 'OBJETO'], ['GAM-BÁ', 'CVC', 'ANIMAL'], ['GA-RA-GEM', 'CVC', 'LUGAR'],
    ['GEN-TE', 'CVC', 'PESSOA'], ['GI-GAN-TE', 'CVC', 'PESSOA'], ['GEN-GI-VA', 'CVC', 'CORPO'],
    ['GÔN-DO-LA', 'CVC', 'OBJETO'], ['VAS-SOU-RA', 'CVC', 'OBJETO'], ['VEN-TO', 'CVC', 'NATUREZA'],
    ['VES-TI-DO', 'CVC', 'OBJETO'], ['VAM-PI-RO', 'CVC', 'PESSOA'], ['VEN-TO-SA', 'CVC', 'OBJETO'],
    ['VA-GEM', 'CVC', 'COMIDA'], ['VES-PA', 'CVC', 'ANIMAL'], ['VIS-TA', 'CVC', 'CORPO'],
    ['RAM-PA', 'CVC', 'LUGAR'], ['ROS-TO', 'CVC', 'CORPO'], ['ROS-CA', 'CVC', 'COMIDA'],
    ['RAS-TE-LO', 'CVC', 'OBJETO'], ['RON-CO', 'CVC', 'AÇÃO'], ['REN-DA', 'CVC', 'OBJETO'],
    ['RIS-CO', 'CVC', 'OBJETO'], ['ROM-BO', 'CVC', 'OBJETO'], ['JAN-TAR', 'CVC', 'COMIDA'],
    ['JAN-GA-DA', 'CVC', 'OBJETO'], ['JU-MEN-TO', 'CVC', 'ANIMAL'], ['JAS-MIM', 'CVC', 'NATUREZA'],
    ['ES-CO-VA', 'CVC', 'OBJETO'], ['ES-CA-DA', 'CVC', 'OBJETO'], ['OS-SO', 'DIGR', 'CORPO'],
    ['ES-QUI-LO', 'CVC', 'ANIMAL'], ['ES-TO-JO', 'CVC', 'OBJETO']
], 'CVC', 'OBJETO');

// Gear 4 — Encontros Inseparáveis (CCV / CCVC com R e L) + Dígrafos
registerBankWords([
    ['TREM', 'CCV', 'OBJETO'], ['TRA-TOR', 'CCV', 'OBJETO'], ['TRI-ÂN-GU-LO', 'CCV', 'OBJETO'],
    ['TRI-LHO', 'CCV', 'OBJETO'], ['TRU-TA', 'CCV', 'ANIMAL'], ['TRA-BA-LHAR', 'CCV', 'AÇÃO'],
    ['TRO-FÉU', 'CCV', 'OBJETO'], ['TRA-VES-SEI-RO', 'CCV', 'OBJETO'], ['TRIN-CA', 'CCV', 'OBJETO'],
    ['TRON-CO', 'CCV', 'NATUREZA'], ['TRI-CI-CLO', 'CCV', 'OBJETO'], ['TRU-QUE', 'CCV', 'AÇÃO'],
    ['PRA-TO', 'CCV', 'OBJETO'], ['PLAN-TA', 'CCV', 'NATUREZA'], ['PLA-CA', 'CCV', 'OBJETO'],
    ['PRE-SEN-TE', 'CCV', 'OBJETO'], ['PRE-GO', 'CCV', 'OBJETO'], ['PLA-NE-TA', 'CCV', 'NATUREZA'],
    ['PRIN-CE-SA', 'CCV', 'PESSOA'], ['PRA-TE-LEI-RA', 'CCV', 'OBJETO'], ['PRO-VA', 'CCV', 'OBJETO'],
    ['PLÁS-TI-CO', 'CCV', 'OBJETO'], ['PLAN-TAR', 'CCV', 'AÇÃO'], ['PRÁ-TI-CA', 'CCV', 'AÇÃO'],
    ['BRU-XA', 'CCV', 'PESSOA'], ['BLU-SA', 'CCV', 'OBJETO'], ['BRÓ-CO-LIS', 'CCV', 'COMIDA'],
    ['BRIN-QUE-DO', 'CCV', 'OBJETO'], ['BRIN-CO', 'CCV', 'OBJETO'], ['BLO-CO', 'CCV', 'OBJETO'],
    ['BRAN-CO', 'CCV', 'OBJETO'], ['BRI-GA-DEI-RO', 'CCV', 'COMIDA'], ['BRON-ZE', 'CCV', 'OBJETO'],
    ['BRIN-CAR', 'CCV', 'AÇÃO'], ['BLIN-DA-DO', 'CCV', 'OBJETO'], ['BRI-LHO', 'CCV', 'NATUREZA'],
    ['FRU-TA', 'CCV', 'COMIDA'], ['CRO-CO-DI-LO', 'CCV', 'ANIMAL'], ['GRA-VA-TA', 'CCV', 'OBJETO'],
    ['FRAN-GO', 'CCV', 'COMIDA'], ['DRA-GÃO', 'CCV', 'ANIMAL'], ['GRI-LO', 'CCV', 'ANIMAL'],
    ['FLOR', 'CCV', 'NATUREZA'], ['FLAU-TA', 'CCV', 'OBJETO'], ['FLA-MIN-GO', 'CCV', 'ANIMAL'],
    ['FRI-GI-DEI-RA', 'CCV', 'OBJETO'], ['FLE-CHA', 'CCV', 'OBJETO'], ['FLO-RES-CER', 'CCV', 'AÇÃO'],
    ['FRES-CA', 'CCV', 'NATUREZA'], ['FRI-TAR', 'CCV', 'AÇÃO'], ['FRON-TAL', 'CCV', 'OBJETO'],
    ['FLU-TU-AR', 'CCV', 'AÇÃO'], ['CO-BRA', 'CCV', 'ANIMAL'], ['CLA-VÍ-CU-LA', 'CCV', 'CORPO'],
    ['CRI-AN-ÇA', 'CCV', 'PESSOA'], ['CRUZ', 'CCV', 'OBJETO'], ['CLI-MA', 'CCV', 'NATUREZA'],
    ['CRIS-TAL', 'CCV', 'NATUREZA'], ['CRE-ME', 'CCV', 'COMIDA'], ['CLU-BE', 'CCV', 'LUGAR'],
    ['CLAS-SE', 'CCV', 'LUGAR'], ['CRI-AR', 'CCV', 'AÇÃO'], ['CROS-TA', 'CCV', 'NATUREZA'],
    ['GLO-BO', 'CCV', 'OBJETO'], ['GRAN-DE', 'CCV', 'OBJETO'], ['GRA-DE', 'CCV', 'OBJETO'],
    ['GLA-DI-A-DOR', 'CCV', 'PESSOA'], ['GROS-SO', 'CCV', 'OBJETO'], ['GRA-VAR', 'CCV', 'AÇÃO'],
    ['GRU-PO', 'CCV', 'PESSOA'], ['GLI-CI-NA', 'CCV', 'NATUREZA'], ['GRAU', 'CCV', 'OBJETO'],
    ['GRU-TA', 'CCV', 'NATUREZA'], ['DRO-GA-RI-A', 'CCV', 'LUGAR'], ['DRE-NA-GEM', 'CCV', 'LUGAR'],
    ['LI-VRO', 'CCV', 'OBJETO'], ['VI-DRO', 'CCV', 'OBJETO'], ['ZE-BRA', 'CCV', 'ANIMAL'],
    ['TI-GRE', 'CCV', 'ANIMAL'], ['PE-DRA', 'CCV', 'NATUREZA'],
    // Dígrafos (Palavrário 7 / N4)
    ['CHA-VE', 'DIGR', 'OBJETO'], ['A-BE-LHA', 'DIGR', 'ANIMAL'], ['NI-NHO', 'DIGR', 'NATUREZA'],
    ['CAR-RO', 'DIGR', 'OBJETO'], ['QUEI-JO', 'DIGR', 'COMIDA'], ['CHU-VA', 'DIGR', 'NATUREZA'],
    ['MI-LHO', 'DIGR', 'COMIDA'], ['GA-LI-NHA', 'DIGR', 'ANIMAL'], ['FO-GUE-TE', 'DIGR', 'OBJETO'],
    ['QUI-A-BO', 'DIGR', 'COMIDA'], ['QUA-TRO', 'DIGR', 'OBJETO'], ['A-QUÁ-RIO', 'DIGR', 'OBJETO'],
    ['LE-QUE', 'DIGR', 'OBJETO'], ['CA-CHOR-RO', 'DIGR', 'ANIMAL'], ['O-LHO', 'DIGR', 'CORPO'],
    ['FO-LHA', 'DIGR', 'NATUREZA'], ['I-LHA', 'DIGR', 'NATUREZA']
], 'CCV', 'OBJETO');

/* ============================================================================
   SILABÁRIO CUMULATIVO — 4 GEARS (DISJUNÇÃO EXCLUSIVA + PIVÔS DE REVISÃO)
   ============================================================================ */
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

const SYLLABARY_GEARS = {
    GEAR_1: {
        id: 'GEAR_1',
        shortLabel: 'Gear 1',
        title: 'Gear 1 — Base (CV e CVV)',
        desc: 'Sílabas simples abertas (CV) e encontros vocálicos (CVV) com vocabulário cumulativo inicial.',
        order: ['VOGAIS', 'ENCONTROS', 'T', 'L', 'M', 'F', 'B', 'R', 'P', 'N', 'V', 'S', 'D', 'J', 'X', 'Z', 'C', 'G', 'Q'],
        pivots: [],
        initialUnlocked: ['VOGAIS', 'ENCONTROS', 'T'],
        words: null
    },
    GEAR_2: {
        id: 'GEAR_2',
        shortLabel: 'Gear 2',
        title: 'Gear 2 — Fechadas em R e L',
        desc: 'Sílabas CV, CVV e CVC travadas em R e L, com R e L posicionados como pivôs de revisão.',
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
        title: 'Gear 3 — Fechadas em M/N e S',
        desc: 'Sílabas CV, CVV, VC e CVC travadas em M, N e S, com M, N e S como pivôs de revisão.',
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
        title: 'Gear 4 — Encontros Inseparáveis (R e L)',
        desc: 'Grupos consonantais CCV e CCVC com R e L, com R e L atuando como pivôs de revisão.',
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

/* ============================================================================
   TRILHA ESTRUTURADA EIDOS (NÍVEIS 1 A 5 + EXTRAS COM EX_TYPO_GEN)
   ============================================================================ */
const EIDOS_MODULES = [
    // NÍVEL 1 — PRÉ-REQUISITOS E BASE VISUAL
    { id: 'E1_1', code: '1.1', level: 'N1', title: 'Rastreio Visual', desc: 'Leitura direcional da esquerda para a direita com âncoras visuais.', engine: 'DTT', subType: 'TRACKING' },
    { id: 'E1_2', code: '1.2', level: 'N1', title: 'Discriminação de Símbolos', desc: 'Diferenciar letras de números e símbolos gráficos.', engine: 'MTS', subType: 'SYM_DISC' },
    { id: 'E1_3', code: '1.3', level: 'N1', title: 'Orientação Espacial', desc: 'Discriminação fina de grafemas espelhados (b, d, p, q).', engine: 'MTS', subType: 'MIRROR_GRAPH' },
    { id: 'E1_4', code: '1.4', level: 'N1', title: 'Vogais Puras', desc: 'Identidade visual, discriminação auditiva e leitura de A, E, I, O, U.', engine: 'MTS', subType: 'VOWELS_PURE' },
    { id: 'E1_5', code: '1.5', level: 'N1', title: 'Identidade de Palavras', desc: 'Pareamento visual simples e multimodelo (3x3) de palavras.', engine: 'MULTIMTS', subType: 'WORD_IDENT_MM' },
    { id: 'E1_6', code: '1.6', level: 'N1', title: 'Encontros Vocálicos', desc: 'Fusão e leitura dos ditongos orais e nasais (AI, EI, OI, AU, ÃO).', engine: 'MTS', subType: 'VOCAL_ENCOUNTERS' },
    { id: 'R_N1_EXTRA', code: 'PORTAL', level: 'N1', title: 'Explorar Alfabeto Fonológico', desc: 'Abre os primeiros fonemas articulatórios no Alfabeto Fonológico.', engine: 'REWARD_PORTAL', targetTab: 'FONOLOGICO' },

    // NÍVEL 2 — CONSCIÊNCIA FONOLÓGICA E FUSÃO SILÁBICA
    { id: 'E2_1', code: '2.1', level: 'N2', title: 'Vogal vs. Consoante', desc: 'Classificação visual e auditiva entre vogais e consoantes.', engine: 'MTS', subType: 'CLASS_VC' },
    { id: 'E2_2', code: '2.2', level: 'N2', title: 'Segmentação Silábica', desc: 'Contagem rítmica do número de sílabas em palavras ditadas.', engine: 'DTT', subType: 'SYL_COUNT' },
    { id: 'E2_3', code: '2.3', level: 'N2', title: 'Fusão Silábica (Slide)', desc: 'Fusão progressiva Consoante + Vogal formando sílabas CV.', engine: 'SYL_SLIDER', subType: 'SYL_BUILD_SLIDER' },
    { id: 'E2_4', code: '2.4', level: 'N2', title: 'Sílabas vs. Palavras', desc: 'Classificação estrutural entre sílabas isoladas e palavras inteiras.', engine: 'MTS', subType: 'CLASS_SP' },
    { id: 'E2_5', code: '2.5', level: 'N2', title: 'Estrutura Total (4x4)', desc: 'Classificação simultânea de Vogal, Consoante, Sílaba e Palavra.', engine: 'MULTIMTS', subType: 'CLASS_TOTAL_MM' },
    { id: 'R_N2_SIL', code: 'PORTAL', level: 'N2', title: 'Abrir Silabário Cumulativo', desc: 'Libera o acesso inicial às famílias do Silabário.', engine: 'REWARD_PORTAL', targetTab: 'SILABARIO' },

    // NÍVEL 3 — DECODIFICAÇÃO, EQUIVALÊNCIA E ESCRITA
    { id: 'E3_1', code: '3.1', level: 'N3', title: 'Construção por Sílabas', desc: 'Montagem ativa de palavras por sílabas móveis (CRMTS) e leitura.', engine: 'CRMTS', subType: 'SYL_WORD_BUILD' },
    { id: 'E3_2', code: '3.2', level: 'N3', title: 'Desmame de Cor (Cor → Preto)', desc: 'Transferência de controle da palavra colorida para texto preto puro.', engine: 'MULTIMTS', subType: 'FADEOUT_COLOR_MM' },
    { id: 'E3_3', code: '3.3', level: 'N3', title: 'MAIÚSCULA ↔ minúscula', desc: 'Generalização de caixa tipográfica em pareamento horizontal.', engine: 'MULTIMTS', subType: 'CASE_GEN_MM' },
    { id: 'E3_4', code: '3.4', level: 'N3', title: 'Transcrição e Cópia', desc: 'Construção letra a letra a partir do modelo visual impresso.', engine: 'CRMTS', subType: 'COPY_CRMTS' },
    { id: 'E3_5', code: '3.5', level: 'N3', title: 'Escrita sob Ditado', desc: 'Construção letra a letra a partir do estímulo puramente auditivo.', engine: 'CRMTS', subType: 'DICT_CRMTS' },
    { id: 'E3_6', code: '3.6', level: 'N3', title: 'Leitura Recombinativa', desc: 'Leitura oral de palavras novas recombinadas a partir de sílabas conhecidas.', engine: 'DTT', subType: 'RECOMB_STT' },
    { id: 'R_N3_PAL', code: 'PORTAL', level: 'N3', title: 'Explorar Palavrário', desc: 'Desbloqueia as primeiras gavetas lexicais do Palavrário.', engine: 'REWARD_PORTAL', targetTab: 'PALAVRARIO' },

    // NÍVEL 4 — EQUIVALÊNCIA DE ESTÍMULOS E COMPLEXIDADE ORTOGRÁFICA
    { id: 'E4_1', code: '4.1', level: 'N4', title: 'Equivalência 4 Passos (CV)', desc: 'Treino composto BC→C e sondagem condicional de equivalência.', engine: 'MULTIMTS', subType: 'EQUIV_4STEPS_MM' },
    { id: 'E4_2', code: '4.2', level: 'N4', title: 'Relação Figura-Palavra', desc: 'Pareamento horizontal entre figuras e palavras escritas.', engine: 'MULTIMTS', subType: 'FIG_WORD_MM' },
    { id: 'E4_3', code: '4.3', level: 'N4', title: 'Categorização Semântica', desc: 'Agrupar palavras lidas conforme sua categoria semântica.', engine: 'MULTIMTS', subType: 'SEMANTIC_CAT_MM' },
    { id: 'E4_4', code: '4.4', level: 'N4', title: 'Palavras com Sílabas Travadas', desc: 'Ciclos completos de leitura e equivalência em palavras CVC.', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'CVC' },
    { id: 'E4_5', code: '4.5', level: 'N4', title: 'Encontros Consonantais (CCV)', desc: 'Leitura e compreensão de palavras com grupos em R e L.', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'CCV' },
    { id: 'E4_6', code: '4.6', level: 'N4', title: 'Dígrafos e Contextuais', desc: 'Domínio de CH, LH, NH, RR, SS, QU e GU em vocábulos concretos.', engine: 'MTS', subType: 'WORDS_EQ', filterStruct: 'DIGR' },

    // NÍVEL 5 — FLUÊNCIA, SINTAXE E COMPREENSÃO TEXTUAL
    { id: 'E5_1', code: '5.1', level: 'N5', title: 'Sprint de Fluência (< 3s)', desc: 'Decodificação rápida sob controle de latência inferior a 3 segundos.', engine: 'FLUENCY', subType: 'SPRINT_3S' },
    { id: 'E5_2', code: '5.2', level: 'N5', title: 'Segmentação Lexical', desc: 'Inserir espaços separando palavras aglutinadas em uma frase.', engine: 'CRMTS', subType: 'WORD_SPACE' },
    { id: 'E5_3', code: '5.3', level: 'N5', title: 'Agrupamento Sintático', desc: 'Leitura prosódica de frases curtas com pausas naturais.', engine: 'DTT', subType: 'SYNTACTIC_GROUP' },
    { id: 'E5_4', code: '5.4', level: 'N5', title: 'Composição de Frases', desc: 'Montagem ordenada de frases ditadas com marcação de espaço.', engine: 'CRMTS', subType: 'SENTENCE_BUILD' },
    { id: 'E5_5', code: '5.5', level: 'N5', title: 'Compreensão (Perguntas WH)', desc: 'Responder Quem, O quê e Onde a partir de sentenças lidas.', engine: 'MTS', subType: 'SYNTACTIC_WH' },
    { id: 'E5_6', code: '5.6', level: 'N5', title: 'Coerência e Narrativa', desc: 'Identificar palavra intrusa e ordenar sequência cronológica.', engine: 'CRMTS', subType: 'NARRATIVE_COHERENCE' },

    // EXTRAS — MÓDULOS COMPLEMENTARES
    { id: 'EX_RHYME', code: 'EX.1', level: 'EXTRAS', title: 'Consciência de Rimas', desc: 'Identificar figuras cujos nomes terminam com o mesmo som.', engine: 'MTS', subType: 'RHYME' },
    { id: 'EX_ALLIT', code: 'EX.2', level: 'EXTRAS', title: 'Aliteração Inicial', desc: 'Identificar figuras cujos nomes começam com a mesma sílaba.', engine: 'MTS', subType: 'ALLITERATION' },
    { id: 'EX_MIN_PAIRS', code: 'EX.3', level: 'EXTRAS', title: 'Pares Mínimos (Surdas/Sonoras)', desc: 'Discriminação auditiva fina entre F/V, P/B, T/D e C/G.', engine: 'MTS', subType: 'MIN_PAIRS' },
    { id: 'EX_TYPO_GEN', code: 'EX.4', level: 'EXTRAS', title: 'Generalização Tipográfica', desc: 'Transferência de controle entre Bastão Maiúscula, imprensa minúscula e Cursiva.', engine: 'MULTIMTS', subType: 'TYPO_GEN_MM' }
];

/* ============================================================================
   VARIAÇÕES PADRÃO DOS MÓDULOS EDITÁVEIS (VAR 1 E VAR 2)
   ============================================================================ */
const DEFAULT_MODULE_VARIATIONS = {
    'E1_1': { editable: true, min: 3, max: 12, variations: { 1: ['BOLA GATO SAPO MALA', 'PATO VACA DADO CASA', 'FACA BOLO RATO VELAS', 'TOMATE PANELA SAPATO', 'MENINO MENINA BONECA'], 2: ['LUA TELA LATA LUTA', 'MOLA MATO LAMA BULE', 'COPO CAMA REDE RODA', 'CAVALO MACACO TUCANO', 'JANELA TAPETE BATATA'] } },
    'E1_5': { editable: true, min: 3, max: 12, variations: { 1: ['BOLA', 'GATO', 'MALA', 'SAPO', 'FACA', 'BOLO'], 2: ['PATO', 'VACA', 'DADO', 'CASA', 'RATO', 'VELA'] } },
    'E2_2': { editable: true, min: 3, max: 12, variations: { 1: ['PÉ', 'BOLA', 'TOMATE', 'PANELA', 'SAPATO', 'ABACAXI'], 2: ['SOL', 'GATO', 'CAVALO', 'MACACO', 'BONECA', 'BORBOLETA'] } },
    'E2_3': { editable: true, min: 3, max: 12, variations: { 1: ['FA', 'MA', 'LA', 'SA', 'BO', 'TA'], 2: ['PA', 'VA', 'MO', 'LE', 'SI', 'TU'] } },
    'E3_1': { editable: true, min: 3, max: 12, variations: { 1: ['BO-LA', 'MA-LA', 'GA-TO', 'SA-PO', 'PA-TO', 'FA-CA'], 2: ['CA-SA', 'BO-LO', 'VE-LA', 'DA-DO', 'RA-TO', 'VA-CA'] } },
    'E3_2': { editable: true, min: 3, max: 12, variations: { 1: ['BO-LA', 'MA-LA', 'SA-PO', 'GA-TO', 'FA-CA', 'PA-TO'], 2: ['CA-SA', 'BO-LO', 'DA-DO', 'RA-TO', 'VE-LA', 'VA-CA'] } },
    'E3_3': { editable: true, min: 3, max: 12, variations: { 1: ['BOLA', 'GATO', 'SAPO', 'MALA', 'FACA', 'PATO'], 2: ['CASA', 'BOLO', 'DADO', 'RATO', 'VELA', 'VACA'] } },
    'E3_4': { editable: true, min: 3, max: 12, variations: { 1: ['BOLA', 'GATO', 'MALA', 'PATO', 'SAPO'], 2: ['CASA', 'BOLO', 'FACA', 'VACA', 'DADO'] } },
    'E3_5': { editable: true, min: 3, max: 12, variations: { 1: ['BOLA', 'MALA', 'SAPO', 'PATO', 'GATO'], 2: ['CASA', 'DADO', 'FACA', 'BOLO', 'VELA'] } },
    'E3_6': { editable: true, min: 3, max: 12, variations: { 1: ['BOLO', 'LATA', 'MOLA', 'TELA', 'FITA', 'BULE'], 2: ['POTE', 'FALA', 'LOTE', 'MATO', 'BOTA', 'RODA'] } },
    'E4_1': { editable: true, min: 3, max: 12, variations: { 1: ['BOLA', 'GATO', 'BOLO', 'MALA', 'SAPO', 'FACA'], 2: ['PATO', 'VACA', 'DADO', 'CASA', 'RATO', 'VELA'] } },
    'E4_2': { editable: true, min: 3, max: 12, variations: { 1: ['BOLA', 'GATO', 'BOLO', 'SAPO', 'MALA', 'PATO'], 2: ['CASA', 'VACA', 'DADO', 'RATO', 'VELA', 'FACA'] } },
    'E4_3': { editable: true, min: 3, max: 12, variations: { 1: ['GATO', 'BOLO', 'BOLA', 'PATO', 'SUCO', 'MALA'], 2: ['VACA', 'TOMATE', 'COPO', 'SAPO', 'SALADA', 'FACA'] } },
    'E5_1': { editable: true, min: 4, max: 16, variations: { 1: ['BOLA', 'GATO', 'SAPO', 'MALA', 'PATO', 'CASA', 'BOLO', 'FACA'], 2: ['PORTA', 'BARCO', 'PRATO', 'LIVRO', 'CHAVE', 'CARRO', 'DENTE', 'PASTA'] } },
    'E5_2': { editable: true, min: 2, max: 10, variations: { 1: ['O GATO PULOU', 'A BOLA ROLOU', 'O SAPO PULOU', 'A VACA COMEU'], 2: ['O PATO NADOU', 'O MENINO LEU', 'A MENINA RIU', 'O BOLO ASSOU'] } },
    'E5_3': { editable: true, min: 2, max: 10, variations: { 1: ['O gato bebeu o leite.', 'A menina chutou a bola.', 'O menino comeu o bolo.', 'O sapo pulou no lago.'], 2: ['O pato nadou no rio.', 'A vaca comeu o mato.', 'O rato fugiu do gato.', 'O lobo uivou na lua.'] } },
    'E5_4': { editable: true, min: 2, max: 10, variations: { 1: ['O GATO BEBEU LEITE', 'A MENINA CHUTOU A BOLA', 'O MENINO COMEU BOLO', 'O SAPO PULOU NO LAGO', 'O PATO NADOU NO RIO'], 2: ['A VACA COMEU MATO', 'O RATO FUGIU DO GATO', 'A BONECA CAIU DA CAMA', 'O BOLO ESTA NA MESA', 'A MALA ESTA NA SALA'] } },
    'EX_TYPO_GEN': { editable: true, min: 3, max: 12, variations: { 1: ['BOLA', 'GATO', 'MALA', 'SAPO', 'FACA', 'BOLO'], 2: ['CASA', 'PATO', 'VACA', 'DADO', 'RATO', 'VELA'] } }
};

/* ============================================================================
   BANCOS AUXILIARES (RIMAS, ALITERAÇÃO, PARES MÍNIMOS, NARRATIVAS E WH)
   ============================================================================ */
const RHYME_VARIATIONS = {
    1: [
        { target: 'BOLA', match: 'MOLA', distractors: ['GATO', 'FACA', 'SAPO'] },
        { target: 'GATO', match: 'PATO', distractors: ['BOLA', 'VELA', 'DADO'] },
        { target: 'FACA', match: 'VACA', distractors: ['BOLO', 'MALA', 'COPO'] },
        { target: 'MALA', match: 'FALA', distractors: ['SAPO', 'RATO', 'BULE'] },
        { target: 'PÃO', match: 'MÃO', distractors: ['SOL', 'LUA', 'PEIXE'] }
    ],
    2: [
        { target: 'PATO', match: 'RATO', distractors: ['BOLA', 'FACA', 'VELA'] },
        { target: 'JANELA', match: 'PANELA', distractors: ['CAVALO', 'SAPATO', 'BONECA'] },
        { target: 'ANEL', match: 'MEL', distractors: ['BOLO', 'CASA', 'DADO'] },
        { target: 'AVIÃO', match: 'LEÃO', distractors: ['GATO', 'SAPO', 'MALA'] },
        { target: 'BOTA', match: 'GOTA', distractors: ['PATO', 'VACA', 'COPO'] }
    ]
};

const ALLIT_VARIATIONS = {
    1: [
        { target: 'BOLA', match: 'BOLO', distractors: ['GATO', 'FACA', 'SAPO'] },
        { target: 'FACA', match: 'FADA', distractors: ['MALA', 'PATO', 'VACA'] },
        { target: 'MALA', match: 'MATO', distractors: ['BOLA', 'DADO', 'VELA'] },
        { target: 'PATO', match: 'PANELA', distractors: ['GATO', 'RODA', 'LATA'] },
        { target: 'SAPO', match: 'SAPATO', distractors: ['CASA', 'BULE', 'FITA'] }
    ],
    2: [
        { target: 'CASA', match: 'CAMA', distractors: ['BOLA', 'PATO', 'VELA'] },
        { target: 'GATO', match: 'GALO', distractors: ['FACA', 'MALA', 'DADO'] },
        { target: 'LATA', match: 'LAMA', distractors: ['SAPO', 'RATO', 'COPO'] },
        { target: 'VACA', match: 'VASSOURA', distractors: ['BOLO', 'TETO', 'PIPA'] },
        { target: 'DADO', match: 'DEDO', distractors: ['LUA', 'MÃO', 'REI'] }
    ]
};

const MINIMAL_PAIRS_DB = [
    { target: 'FACA', distractor: 'VACA', contrast: 'F/V', var: 1 },
    { target: 'FILA', distractor: 'VILA', contrast: 'F/V', var: 1 },
    { target: 'PATO', distractor: 'BATO', contrast: 'P/B', var: 1 },
    { target: 'POTE', distractor: 'BOTE', contrast: 'P/B', var: 1 },
    { target: 'TIA', distractor: 'DIA', contrast: 'T/D', var: 1 },
    { target: 'COLA', distractor: 'GOLA', contrast: 'C/G', var: 1 },
    { target: 'FALA', distractor: 'VALA', contrast: 'F/V', var: 2 },
    { target: 'PICO', distractor: 'BICO', contrast: 'P/B', var: 2 },
    { target: 'TATO', distractor: 'DADO', contrast: 'T/D', var: 2 },
    { target: 'CALO', distractor: 'GALO', contrast: 'C/G', var: 2 }
];

const NARRATIVES_DB = [
    {
        intruderSentence: ['O', 'MENINO', 'COMEU', 'O', 'TIJOLO', 'DOCE.'],
        intruderWord: 'TIJOLO',
        correctReplacement: 'BOLO',
        distractorReplacements: ['PEDRA', 'SAPATO'],
        steps: ['1º: O menino pegou o prato.', '2º: Ele colocou o bolo no prato.', '3º: Ele comeu todo o bolo.']
    },
    {
        intruderSentence: ['A', 'MENINA', 'CHUTOU', 'A', 'PANELA', 'NO', 'CAMPO.'],
        intruderWord: 'PANELA',
        correctReplacement: 'BOLA',
        distractorReplacements: ['JANELA', 'CAMA'],
        steps: ['1º: A menina foi ao parque.', '2º: Ela chutou a bola bem alto.', '3º: A bola entrou no gol.']
    },
    {
        intruderSentence: ['O', 'GATO', 'BEBEU', 'O', 'MARTELO', 'QUENTE.'],
        intruderWord: 'MARTELO',
        correctReplacement: 'LEITE',
        distractorReplacements: ['LÁPIS', 'COPO'],
        steps: ['1º: O gato sentiu sede.', '2º: Ele achou a tigela de leite.', '3º: O gato bebeu todo o leite.']
    }
];

function generateLogicalSentenceTrial() {
    const scenarios = [
        { sentence: 'O menino comeu o bolo na cozinha.', question: 'O que o menino comeu?', correct: 'O BOLO', distractors: ['A BOLA', 'O SAPATO', 'A MALA'] },
        { sentence: 'A menina chutou a bola no parque.', question: 'Onde a menina chutou a bola?', correct: 'NO PARQUE', distractors: ['NA CAMA', 'NO LAGO', 'NO TETO'] },
        { sentence: 'O gato bebeu o leite na sala.', question: 'Quem bebeu o leite?', correct: 'O GATO', distractors: ['O SAPO', 'O PATO', 'A VACA'] },
        { sentence: 'O pato nadou no lago azul.', question: 'Onde o pato nadou?', correct: 'NO LAGO', distractors: ['NA MESA', 'NA CAIXA', 'NO SOFÁ'] },
        { sentence: 'O sapo pulou na folha verde.', question: 'Quem pulou na folha?', correct: 'O SAPO', distractors: ['O LOBO', 'O RATO', 'O GALO'] }
    ];
    return scenarios[Math.floor(Math.random() * scenarios.length)];
}

/* ============================================================================
   ECONOMIA DE FICHAS E MANIFESTO PADRÃO DOS 4 JOGOS ARCADE
   ============================================================================ */
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
    { id: 'baloes', title: 'Estoura Balões', desc: 'Toque nos balões coloridos antes que subam.', entry: 'arcade/baloes/index.html', cost: 2, durationSec: 45 },
    { id: 'superchef', title: 'Super Chef', desc: 'Monte pedidos rápidos na cozinha.', entry: 'arcade/superchef/index.html', cost: 3, durationSec: 60 },
    { id: 'cosmojump', title: 'Cosmo Jump', desc: 'Pule entre plataformas no espaço.', entry: 'arcade/cosmojump/index.html', cost: 3, durationSec: 60 },
    { id: 'guardiao', title: 'Guardião', desc: 'Proteja a base desviando dos obstáculos.', entry: 'arcade/guardiao/index.html', cost: 3, durationSec: 60 }
];
