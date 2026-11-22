# AlfaMTS

Alfabetização baseada em evidências

# 📋 Sobre o Projeto

AlfaMTS é uma aplicação web progressiva (Progressive Web App — PWA) desenvolvida com rigor clínico e educacional para o ensino sistematizado da leitura e escrita. Fundamentado nos paradigmas de Emparelhamento com o Modelo (Matching-to-Sample — MTS), Emparelhamento com o Modelo por Resposta Construída (CRMTS), Equivalência de Estímulos e Instrução Fônica Sistemática, o sistema foi projetado para atender crianças em fase de alfabetização, estudantes com Transtorno do Espectro Autista (TEA), apraxia de fala ou dificuldades de aprendizagem, tanto em ambientes clínicos quanto escolares.Diferente de jogos educativos genéricos, o AlfaMTS atua como um instrumento de precisão comportamental: automatiza o controle de antecedentes, previne o aprendizado de erros, mensura latência e independência tentativa a tentativa e gera materiais concretos prontos para intervenção em mesa.

# ✨ Principais Funcionalidades. 

1.Controle de Acesso Dual e Gestão Multi-Aluno (Multi-Tenant)Gatekeeper de Perfis:

Separação clara entre o perfil Analista (gestão curricular, parâmetros ABA, telemetria e criação de tarefas) e o perfil Aplicador (execução direta e fluida das sessões).Perfis Isolados por Aluno: Alternância rápida entre múltiplos aprendizes no mesmo dispositivo, mantendo progresso, histórico de sessões, banco de imagens personalizadas, saldo de fichas e curvas de desempenho totalmente independentes.Modo Kiosk e Timer de Sessão: Bloqueio opcional de saída da atividade por PIN numérico e temporizador configurável de sessão.

# 2. Currículo Estruturado em 10 Trilhas Progressivas

A trilha pedagógica é organizada em um carrossel horizontal com progressão condicionada à maestria:Níveis 1 a 5 (Trilha Principal): Rastreio visual com âncoras espaciais, discriminação de símbolos e letras espelhadas (b/d/p/q), pareamento simples e multimodelo (Multi-MTS horizontal), consciência fonológica (rimas, aliteração, segmentação), equivalência em 4 etapas ($B \rightarrow C$, $C \rightarrow B$, $C \rightarrow D$, $A \rightarrow C$), desmame de cor e caixa tipográfica, fluência sob controle de latência (< 3s), segmentação lexical, composição de frases, compreensão (WH) e coerência narrativa.Alfabeto Fonológico (7 Conjuntos + Check-points): Ensino articulatório fônico em 5 micro-ciclos com referência visual de boca (.webp), áudios fonêmicos isolados (.ogg), sliders táteis de fusão silábica e check-points cumulativos com retreino automático de falhas.Silabário Cumulativo: Famílias silábicas organizadas por conjuntos de complexidade crescente com pistas visuais intrassilábicas (consoantes em preto, vogais em vermelho e molduras silábicas) e transição gradual para texto preto puro.Palavrário (8 Gavetas Lexicais): Treino intensivo por estrutura silábica (dissílabas, trissílabas, encontros vocálicos/nasais, CVC, CCV, dígrafos e irregulares).Extras & Personalizados: Pares mínimos contrastivos (F/V, P/B, T/D, C/G), pseudopalavras, palavras livres e atividades criadas na Oficina de Tarefas.

# 3. Ergonomia Tátil e Protocolos Comportamentais

Pré-Teste em Cadeia (Var 1 → Var N): Sondagem diagnóstica automática na entrada de módulos elegíveis; consolida imediatamente habilidades já dominadas (100%) ou chaveia para o Modo Treino após corte de erros, destacando os estímulos que exigem ensino.Aprendizagem Sem Erro (Errorless Learning): Dica visual diferencial automática após erro na primeira tentativa, evitando a fixação de respostas incorretas.Controles Motores Calibrados:Hold-to-Select: Pressão sustentada configurável (300ms a 1500ms) com barra de progresso visual nas respostas para inibir cliques impulsivos sem sobrecarregar o modelo.Drag-to-Model Reversível: Arraste físico opcional para MTS simples, Multi-MTS (com encaixe visual e botão de devolução de carta antes da validação) e peças móveis do CRMTS.Tipografia Escolar Offline: Suporte nativo à fonte cursiva MamaeQueNosFaz com conversão inteligente para caixa mista (Bola, Gato), além de caixa alta, minúsculas e serifada.

# 4. Telemetria Clínica em 3 Dimensões

Painel analítico completo para tomada de decisão baseada em dados:Por Tarefa (DTT Evolutivo): Filtro por atividade e alternância entre Treino e Sondagem (isolando métricas de dica quando em sonda), exibindo matriz cronológica por sessão/data e curva gráfica com linha de critério.Repertório Lexical (WORD_BANK): Mapeamento automático de todas as palavras já trabalhadas com o aluno, porcentagem de independência e modal individual com histórico de apresentações (I, D, N) por palavra.Histórico & Exportação: Log filtrado de sessões, resumo rápido em texto, exportação de Laudo de Linha de Base e Histórico em PDF, além de backup completo portável em .json.
5. Suíte de Complementos IntegradosOficina de Tarefas: Editor no-code para criar atividades customizadas com até 5 ciclos sequenciais, escolha de mecânica (MTS, Multi-MTS, CRMTS, Expressivo), canais de estímulo (texto, imagem, áudio), parser silábico por hífen e upload em lote de imagens otimizadas em WebP via IndexedDB.Economia de Fichas & Arcade: Sistema configurável de reforçamento tokenizado com bônus por consolidação, loja de prêmios tangíveis e sandbox isolado de mini-jogos digitais temporizados.Estúdio de Materiais Concretos (A4): Gerador em tempo real com pré-visualização editável e impressão pronta em formato A4 contendo:Página 1: Protocolo de instrução em mesa (relações $SD \rightarrow R$, dicas e esquema de reforçamento contínuo/intermitente).Página 2: Folha de registro de 10 tentativas (+, -, 0).Página 3: Prancha de trabalho para plastificação.Páginas 4+: Cartões de estímulos e fichas móveis recortáveis.

# 🏗️ Arquitetura e Estrutura do Projeto

O projeto foi construído em Vanilla JavaScript (ES6+), HTML5 e CSS3 sem dependência de frameworks pesados, garantindo carregamento instantâneo, máxima compatibilidade com WebViews móveis e operação 100% offline via Service Worker e IndexedDB.AlfaMTS/

├── index.html        .       Estrutura SPA, telas, dock de mediação e modais
├── style.css         .       Design system responsivo, tipografia cursiva e layout @media print A4
├── app.js            .       Motor principal (estados, renderizadores, telemetria, estúdio A4)
├── database.js       .       Currículo EIDOS, banco lexical (WORD_BANK), pares mínimos e narrativas
├── sw.js             .       Service Worker para cache offline de assets e fontes
├── manifest.json     .       Manifesto PWA instalável
├── arcade/           .       Mini-jogos reforçadores em sandbox isolado
└── assets/

    ├── fontes/
    │   └── MamaeQueNosFaz.ttf
    ├── img/
    │   ├── palavras/        Banco visual (~400 ilustrações padronizadas em .webp)
    │   └── bocas/           Referências articulatórias por fonema (.webp)
    └── audio/
        └── fonemas/         Pronúncias isoladas de vogais e consoantes (.ogg)
        
# 🚀 Como Executar Localmente

Por utilizar Service Workers, fetch de manifestos e IndexedDB, recomenda-se servir os arquivos através de um servidor HTTP local (evitando abrir via file://):# 1. Clone o repositório
git clone https://github.com/eidosedu/AlfaMTS.git

2. Acesse o diretório do projeto
cd AlfaMTS

3. Inicie um servidor local simples (ex: Python, Node ou Live Server do VS Code)
npx serve .ou python -m http.server 8080

Acesse http://localhost:8080 no navegador (preferencialmente em modo paisagem / tablet).🗺️ 
Roadmap & Visão Futura
[x] Motor curricular completo (Níveis 1–5, Alfabeto Fonológico, Silabário Cumulativo e Palavrário)
[x] Controles táteis anti-impulsividade (Hold-to-Select) e Drag-to-Model reversível
[x] Telemetria analítica em 3 abas (DTT Evolutivo, Repertório Lexical e Histórico)
[x] Estúdio de Materiais Concretos A4 com edição ao vivo e exportação PDF
[ ] Refinamento de escala fluida (clamp) para telas compactas
[ ] Validação empírica em contexto clínico e escolar
[ ] Portabilidade nativa multiplataforma (Flutter/Dart para Android, iOS/iPadOS e Windows) com reconhecimento de fala offline embarcado

📄 Licença e Autoria

Desenvolvido como ferramenta de tecnologia assistiva e educacional baseada em evidências científicas na área de Análise do Comportamento Aplicada (ABA) e Alfabetização.
Todos os direitos reservados ao autor.
