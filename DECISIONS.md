# Decisões

## DEC-001 — Escopo e autorização de AI-001

Em 2026-09-11, o usuário autorizou configurar a base de engenharia do Technetalks, criar padrões reutilizáveis para Codex, Claude Code e GitHub Copilot, disponibilizar Matt Pocock por padrão, documentar e realizar commit/push no remote existente `https://github.com/arthurfjadecastro/technetalks.git`.
O produto ainda não foi especificado. AI-002 exige definição de escopo própria.

## DEC-002 — Kit portável e estado no repositório

O protocolo do clone local `C:/sistemas/NT - PSI - SUGRC - c150713` (remote tematicprod) fundamenta a continuidade. Regras de NT, PDF, Word, tamanho e DEC-069/070 pertencem à referência e não são herdadas.
`AGENTS.md` será canônico; os adaptadores dos assistentes apontarão para ele. Templates Markdown e Python 3.10+ sem dependências de execução formarão o kit. Arquivos existentes serão preservados; conflitos de instalação exigirão integração explícita.

## DEC-003 — Padrões para novos projetos

Tracker local versionado em `.scratch/`, backlog canônico na raiz, labels padrão Matt Pocock e domínio single-context em `CONTEXT.md` com ADRs em `docs/adr/`.
Skills Matt Pocock de engineering e productivity serão copiadas com recursos e licença, fixadas por commit e inventário SHA-256. Misc e in-progress são opcionais fora desta primeira versão. Nenhum hook de commit, push, cobrança ou tracker remoto será ativado pelo instalador.
Novos projetos terão autorização registrada somente para o bootstrap; entrega de produto e destino de push são decisões próprias. A autorização deste repositório não viaja nos templates.

## DEC-004 — Distribuição

`ai-kit/` é a fonte autocontida da skill `project-bootstrap`. O CLI também funciona por caminho absoluto, sem instalação global. A instalação pessoal disponibiliza bootstrap em `~/.agents/skills` para Codex/Copilot e um adaptador em `~/.claude/skills`. Projetos recebem runtime local e skills versionadas para retomada em outra máquina. Nada depende do cache do usuário após a instalação.

## DEC-005 — Auto-hospedagem do runtime

Em 2026-09-12, na revisão de AI-001, o instalador passou a reconhecer o destino que já contém o próprio kit. Nesse caso o runtime não é copiado para `tools/ai-kit` e permanece fora do inventário do manifesto.
Motivo: neste repositório o runtime é código-fonte em evolução, e uma segunda cópia criaria duas verdades divergindo em silêncio, já que o manifesto vigiaria apenas uma delas. DEC-004 continua valendo para os projetos gerados, que recebem a cópia local justamente para retomar por clone.
Consequência: as skills importadas e os adaptadores seguem protegidos por checksum; os arquivos de `ai-kit/` são revisados por diff e testes, como qualquer código do projeto.

## DEC-006 — AI-002: organização de evento

Em 2026-09-12, o usuário definiu que Technetalks servirá à organização de um evento e autorizou avançar o próximo item P0, com entendimento do anexo “O que eu considero prioridade agora”, pesquisa, perguntas, cronograma macro, checklist macro/micro e atividades dentro do prazo. AI-002 é o primeiro item aberto do backlog e recebe P0; AI-003 permanece separado e sem autorização.
Esta decisão complementa DEC-001: a indefinição anterior do produto passa a ser descoberta e planejamento de um encontro de tecnologia. Não altera DEC-002 a DEC-005 nem reabre AI-001.
O anexo é insumo de planejamento, não confirmação de reservas, palestrantes ou orçamento. A data 17/10/2026 será cenário de trabalho até confirmação (o anexo não explicita o ano); local, horário, financiamento, capacidade total e visita de 12/09 exigem esclarecimento. Responsáveis e datas sugeridos não comprovam aceite das pessoas citadas.
Autorização abrange arquivos locais e registros de continuidade. Não concede envio de mensagens, convites, contratação, compra, transmissão ou divulgação de endereço privado/dados pessoais. A aprovação final do plano e das decisões pendentes continua com os organizadores.

## DEC-007 — Base do evento confirmada por Arthur

Fonte: respostas diretas do usuário em 2026-09-12, complementando as pendências de DEC-006 sem apagar seu registro histórico.

- Data: 17 de outubro, no contexto de 2026; sábado.
- Local: casa de Henrique, Gama/DF. A grafia do setor/bairro citada pelo usuário não foi normalizada nem publicada como endereço; orientação completa será compartilhada privadamente pelos organizadores.
- Horário do público: 10h30–17h; almoço previsto para 12h30; lanche incluído.
- Público de planejamento: 16–20 pessoas totais, incluindo Arthur, Henrique e os dois palestrantes, conforme a pergunta respondida. Não vender ou liberar 20 vagas adicionais sem recalcular esse total.
- Participação gratuita. Recursos: R$ 250 de Henrique + R$ 250 de Arthur = R$ 500 de teto total. O aporte foi declarado; transferência/caixa disponível ainda não foi comprovado.
- Almoço preparado por pessoa próxima, sem cobrar mão de obra; nome, menu, compras, utensílios e logística ainda precisam ser fechados.
- Arthur e Henrique são responsáveis pelas decisões. Critério de desempate ainda será acordado na reunião.
- Dois palestrantes confirmados: Francisco Figueiredo, “VIRUS”, sobre IA no dia a dia; Matheus Henrique, “Coatio”, sobre design thinking, UI/UX e apresentação do aplicativo CARANGA, em piloto. Títulos, sinopses, formato de demonstração e necessidades serão coletados em questionário.
- A expressão “uso concorrente” na descrição da palestra de IA permanece a esclarecer com VIRUS; não presumir um significado técnico.
- Visita/reunião de 12/09 ainda ocorrerá hoje; vinte cadeiras confirmadas disponíveis e em condições de uso.

Propostas para revisão, ainda não decisões fechadas: 25 min de conteúdo + 15 min de perguntas e 5 min de transição por palestra, Mesa 360 de 45 min, reserva de R$ 50, distribuição do restante por categorias, responsáveis operacionais e datas internas do cronograma. Nenhum formulário foi publicado ou enviado; o usuário solicitou elaborar o questionário e as orientações para os palestrantes.

## DEC-008 — Publicação de AI-002 e dados do projeto

Em 2026-09-12, o usuário autorizou commit/push das entregas de AI-002 no remote existente `https://github.com/arthurfjadecastro/technetalks.git` (`main`). Declarou que o repositório é público e que todo e qualquer dado deste projeto pode ser versionado e publicado nele.
Esta decisão substitui, apenas para o versionamento neste repositório, a restrição de DEC-006 sobre divulgação de endereço privado e dados pessoais. Continuam fora do escopo do assistente: envio de mensagens, convites, contratação e compras. Arquivos alheios à tarefa, como o resíduo sem rastreamento `.agents/skills/project-continuity-claude/`, não entram nos commits sem decisão própria.

## DEC-009 — Resultado da reunião de 12/09

Fonte: ata de Arthur (`docs/evento/ATA_REUNIAO_12-09.md`) e respostas às perguntas de conferência em 2026-09-14. Complementa DEC-007; onde houver conflito, vale esta decisão.

- **Horário:** a divulgação pede chegada às 10h30; o evento começa de fato às 11h e vai até 17h.
- **Roteiro:** 11h–12h30 recepção, check-in, apresentação do dia e dinâmicas de integração (aproximar quem estiver isolado e formar grupos); 12h30–14h almoço, com preparação do primeiro palestrante das 13h30 às 13h45; 14h–14h45 VIRUS; 14h45–15h intervalo e preparação; 15h–15h45 Coatio; 15h45–16h15 lanche; 16h15–17h Mesa 360 conduzida por Arthur e Henrique, fechamento e sorteio.
- **Público:** mínimo de 11 e máximo de 20 pessoas no total, incluindo organizadores e palestrantes. Alimentação é dimensionada nos cenários de 11, 16 e 20.
- **Inscrições:** encerram em 10/10/2026. Quem não está no grupo do WhatsApp só entra com avaliação da organização, acompanhado de alguém do grupo que o conheça, e também precisa se inscrever.
- **Orçamento:** R$ 500 passa a ser **previsão**, não teto rígido. Os organizadores gastam nesta primeira edição e fecham o balanço depois; a divisão igual entre Arthur e Henrique (DEC-007) continua. Valores anotados por categoria: almoço 250, lanche 200, bebidas 70, café 30, banner 60, brinde 70 (soma R$ 680, acima da previsão; a planilha mostra a diferença).
- **Ordem dos gastos:** primeiro banner e brinde. Alimentação só depois do quantitativo confirmado, uma semana antes do evento (encerramento das inscrições em 10/10).
- **Alimentação:** almoço com lasanha, estrogonofe, arroz, batata palha, salada, refrigerantes e sucos; lanche encomendado na padaria (pãezinhos, assados, café). Henrique define as proporções por cenário.
- **Espaço:** Henrique desenha e disponibiliza a planta em três versões (seca, com móveis, com móveis e pessoas), com 20 lugares preenchidos: telas → sofá → 2 mesas com cadeiras → 2 mesas de plástico extras, quadro de vidro móvel, lanche e café embaixo da escada. Ventilação com 2 ou 3 ventiladores cruzados.
- **Tela:** projetor e telão como principal; TV como plano B. Arthur e Henrique decidem até 27/09; sem projetor garantido, a TV vira principal.
- **Registro:** Guilherme Reis para fotos e vídeos pelo celular; Henrique faz o convite com o flyer. Até o aceite, fica "a confirmar".
- **Divulgação:** pelo grupo do WhatsApp. Primeiro disparo muda nome, foto e descrição do grupo e envia o flyer 1. Sequência: divulgação, palestra 1, palestrante 2, vagas acabando. Claude redige os textos dos flyers, do quiz e do formulário de feedback; arte e envio ficam com os organizadores.
- **Sorteio:** 2 canecas, com quiz por QR code que pontua.
- **Planilha:** simplificar para o essencial.

Continuam fora do escopo do assistente: envio de mensagens, convites, compras e contratação. Datas internas dos flyers e responsáveis não citados na ata são propostas até o aceite dos organizadores.

## DEC-010 — AI-004: várias máquinas e assistentes

Em 2026-09-14, o usuário pediu o melhor arranjo para trabalhar com Codex, GitHub Copilot e Claude Code em máquinas Windows e macOS, com os dois dispositivos fazendo pull e push de forma sucessiva, e autorizou o que for necessário como boa prática. Abrange o kit (templates, CLI, testes, versão) e este repositório, a CI, a remoção de resíduos locais não versionados do Codex nesta máquina, configuração Git local do clone e commit/push em `origin/main`.

- O remoto é o ponto de encontro: sessão começa com `git pull --ff-only` e termina com push conferido. Histórico publicado não é reescrito (`push --force` proibido).
- Texto é UTF-8 e LF em todas as máquinas via `.gitattributes`; binários são declarados. WORKLOG, só de acréscimos, usa merge por união.
- Arquivos binários editáveis (planilhas) são alterados por uma máquina de cada vez.
- Scripts versionados não dependem de runtime privado de um assistente, links/junctions ou caminhos absolutos.
- Configurações exclusivas de uma máquina (identidade Git, credencial, `xcode-select`) ficam documentadas em `docs/agents/workflow.md` e são aplicadas em cada máquina; não viajam pelo repositório.

Não altera DEC-001 a DEC-009 nem autoriza AI-003.

## DEC-011 — Commit e push permanentes

Em 2026-09-14, depois de fechar o Excel, o usuário pediu para integrar a planilha, fazer commit e push "sempre". Fica autorizado, sem nova pergunta, commit e push em `origin/main` ao fim de cada entrega autorizada e ao integrar edições dos organizadores em arquivos do projeto (planilha, textos), seguindo o protocolo de DEC-010: pull antes, conferência do conteúdo e dos travamentos do Office, validação, push e `git ls-remote`.
Não autoriza iniciar tarefas novas, `push --force`, reescrever histórico nem versionar arquivos abertos por outro programa ou de conteúdo não inspecionado.

## DEC-012 — Gestão contínua e formulários online

Em 2026-09-14, o usuário definiu que o assistente faz a gestão do evento: tudo o que for informado na conversa atualiza, no mesmo momento, decisões, plano, documentos e a planilha `outputs/AI-002/planejamento-evento.xlsx`, com commit/push conforme DEC-011. As skills Matt Pocock são usadas quando o assistente julgar útil. AI-002 passa a cobrir a gestão até o fechamento do evento; cada rodada termina em READY_FOR_REVIEW, aguardando a próxima informação.

Arthur criou em 14/09 três formulários no forms.app:

- Palestrante VIRUS: <https://go.forms.app/arthurdecastro/questionario-do-palestrante-virus>
- Palestrante Coatio: <https://go.forms.app/arthurdecastro/questionario-do-palestrante-coatio>
- Inscrição: <https://go.forms.app/arthurdecastro/inscricao-techne-talks-encontro-n-02>

Status: **criados, aguardando aprovação de Arthur e Henrique para envio e divulgação**. A inscrição passa a ser pelo formulário (decide a tarefa "link ou lista"). Os formulários usam o nome "TECHNE Talks | Encontro nº 02" e propõem aos palestrantes título, agenda e materiais até 21/09 e gravação do ensaio com roteiro até 03/10; nome público e esses prazos seguem como propostas até a aprovação. Revisão e ajustes sugeridos em `docs/evento/FORMULARIOS.md`.

## DEC-013 — Nome, prazos dos palestrantes, responsáveis e inscrições

Respostas de Arthur em 2026-09-14 às decisões pendentes de DEC-012:

- **Nome público:** TECHNE Talks · Encontro nº 02. É o segundo encontro; "Technetalks" continua só como nome do repositório.
- **Palestrantes:** material de apoio até 21/09, junto com título, agenda e sinopse. Ensaio no começo de outubro; os formulários pedem a gravação do ensaio com o roteiro até 03/10. Substitui materiais em 14/10 e ensaio em 16/10.
- **Responsáveis:** Arthur envia os links aos palestrantes; Arthur e Henrique acompanham as inscrições.
- **Inscrição:** incluir no formulário a pergunta de restrição alimentar, com intolerância à lactose e doença celíaca/glúten entre as opções. Arthur, Henrique, VIRUS e Coatio também se inscrevem como participantes, então o limite do formulário é **20**, o mesmo total do evento (DEC-009). Quem vier só como apoio e almoçar sem se inscrever reduz esse limite.

Os três formulários continuam aguardando aprovação para envio e divulgação.

## DEC-014 — Inscrição simplificada e backlog de formulários

Em 2026-09-14, Arthur refez o formulário de inscrição (mesmo link, versão 2) para ser simples e rápido: só **nome completo, telefone/WhatsApp com DDD e e-mail, os três obrigatórios**, sem nenhuma outra pergunta ou etapa.

- **Descrição:** "Tecnologia se aprende em boa companhia. Preencha seus dados para confirmar seu interesse no segundo encontro do TECHNE Talks e receber informações importantes sobre o evento e futuras edições."
- **Mensagem após o envio:** "Obrigado pelo interesse! Seus dados foram registrados. Em breve, enviaremos as informações complementares do TECHNE Talks."
- **Telefone:** Brasil (+55) como país padrão; se não for possível, a orientação "Selecione Brasil (+55) antes de informar o número".
- **Estética:** fundo claro ou creme, tipografia elegante e legível, detalhes em azul-escuro e terracota, layout minimalista.
- **Backlog, formulário de feedback e relacionamento:** área ou momento profissional, como conheceu, temas para próximos encontros, expectativa, participação no primeiro encontro, autorização de contato, avaliação geral, notas (palestras, dinâmica, alimentação, organização), momento favorito, sugestões, interesse em voltar e recomendação. É enviado no encerramento por QR code ou depois por e-mail/WhatsApp.
- **Restrição alimentar:** sai desta edição e fica no backlog para os próximos eventos. Substitui o item correspondente de DEC-013; o limite de 20 inscrições continua.

A inscrição segue aguardando aprovação para divulgação.

## DEC-015 — Lançamento de 14/09 e mecanismo de comunicação

Em 2026-09-14, Arthur e Henrique aprovaram as artes e os textos finais e **lançaram o encontro no grupo do WhatsApp**, uma semana antes da data proposta (21/09). O que foi executado:

- **Nome do grupo:** `TΞKHNE Talks - 2ª Edição`, com o Ξ da identidade visual. O nome público nos textos e nas artes continua TECHNE Talks · Encontro nº 02 (DEC-013); as duas grafias convivem.
- **Foto e descrição do grupo** trocadas pela logo e pelo texto integral registrado em `docs/evento/DIVULGACAO.md`.
- **Grupo restrito a mensagens de admins**, de forma declaradamente temporária, para a primeira rodada de informação não se perder. A reabertura vira tarefa com data.
- **Duas artes publicadas:** peça 1, convite, e peça 2, programação do dia. Substituem o flyer 1 único previsto em DEC-009. As peças de palestra passam a 3 e 4, e "vagas acabando" a 5.
- **Endereço completo divulgado na arte** (Residencial Alvorada, Casa 18, Rua JK, 07, Ponte Alta Norte, Gama/DF). Cai a premissa de DEC-007 e DEC-009 de endereço só aos inscritos; o lembrete de 15/10 deixa de ser o primeiro contato com o endereço.
- **Inscrição divulgada** com o link do forms.app: os três formulários estão aprovados na prática, encerrando a etapa de aprovação de DEC-012. Os ajustes pendentes do formulário (campos obrigatórios, Brasil +55, DDD, descrição, mensagem final, cores, encerramento e limite) continuam a fazer, agora com o formulário já em uso.
- **Palestrantes não anunciados:** as duas artes dizem "Tema e convidado a divulgar". Os links dos questionários foram enviados a VIRUS e Coatio.

Decisões novas:

- **Mecanismo de comunicação reutilizável.** `docs/evento/COMUNICACAO.md` guarda a ordem padrão das mensagens, o gatilho de cada uma, o canal e o responsável, mais um **radar** dos assuntos que ainda vão precisar ser comunicados. A execução é acompanhada na aba **Comunicação** da planilha, marcada peça a peça. Próximas edições copiam o arquivo e trocam datas, nomes e temas.
- **Restrição alimentar fica no backlog de comunicação.** Não entra na inscrição nem no lembrete desta edição, confirmando DEC-014. O risco permanece registrado: o cardápio tem glúten e lactose em quase tudo e ninguém foi perguntado.
- **Prazos dos palestrantes, propostos até o aceite:** inscrição no formulário até **19/09**; título, sinopse e minibio até **21/09**, como em DEC-013; **rascunho inicial** do material de apresentação até **28/09**; versão final e gravação do ensaio com roteiro até **03/10**. Substitui, em DEC-013, o material de apoio completo em 21/09.

Continuam fora do escopo do assistente: envio de mensagens, convites, compras e contratação.

## DEC-016 — Confirmações de 15/09

Respostas de Arthur às pendências abertas em DEC-015:

- **Nome do grupo:** grafia padronizada com C, alinhada ao nome público TECHNE Talks. O grupo passa a se chamar `TΞCHNE Talks - 2ª Edição`; o Ξ da identidade visual continua. Encerra a divergência TΞKHNE/TECHNE.
- **Prazos dos palestrantes confirmados**, deixando de ser propostas: inscrição no formulário até **19/09**; título, sinopse e minibio até **21/09**; rascunho inicial do material até **28/09**; versão final e gravação do ensaio com roteiro até **03/10**.
- **Formulário de inscrição fica como está.** Os ajustes pendentes do forms.app (campos obrigatórios, Brasil +55, DDD, descrição, mensagem final, cores, encerramento e limite de 20) não serão aplicados. Arthur faz o **controle à mão**: confere cada inscrição recebida, conta as 20 vagas e encerra a lista em 10/10. As tarefas 36 e 41 passam a "Não se aplica"; a tabela de conferência de FORMULARIOS.md continua como referência para a próxima edição.
- **Reabertura do grupo:** noite de **16/09**, encerrando a fase só de admins.
- **Responsáveis de divulgação confirmados:** Arthur, como estava atribuído por inferência na aba Comunicação.
- **Convite a Guilherme Reis** mantido para 21/09, com a peça 1.

Não altera o risco registrado em DEC-015 sobre restrição alimentar, que continua fora desta edição.

## DEC-017 — Respostas do Coatio e anúncio do primeiro convidado

Em 2026-09-23, Matheus Coatio respondeu ao questionário (01h08, dois dias depois do prazo de 21/09) e enviou uma foto para a divulgação. As respostas na íntegra estão em `docs/evento/RESPOSTAS_PALESTRANTES.md`. O VIRUS ainda não respondeu.

Fatos que substituem o que estava registrado:

- **Nome público do palestrante:** **Matheus Coatio**, como ele pediu. Substitui "Matheus Henrique, 'Coatio'" de DEC-007 nos textos e nas peças.
- **Tema:** deixa de ser "design thinking, UI/UX e o app CARANGA" (DEC-007 e DEC-009) e passa a ser a construção do Caranga do zero — validação com usuários reais, priorização com poucos recursos, erros e consistência. Título enviado: "Da ideia à realidade: aprendizados de quem está construindo".
- **Formato:** slides, conversa e **demonstração do piloto** do Caranga, com exercício de 2 minutos no fim. Aceita 30 + 15 minutos e o horário de **15h–15h45**.
- **Equipamento:** ele precisa de **projetor e cabo HDMI**, fornecidos pela organização, e não leva mais nada.
- **Autorizações:** materiais aos participantes em canal privado, fotos e gravação — as duas últimas com divulgação pública **somente mediante aprovação dele**.

Decisões de Arthur nesta rodada:

- **Anunciar o Coatio agora, sem numerar a palestra.** O anúncio sai como convidado confirmado, não como "Palestra 2", para que a ausência do VIRUS não pareça desistência. O horário de 15h continua na peça e na programação já publicada. As peças mantêm o número do palestrante: a **peça 4** (Coatio) sai antes da **peça 3** (VIRUS), que espera as respostas dele.
- **Título encurtado para "Da ideia à realidade: bastidores do Caranga"** (43 caracteres) nas peças. Os 59 caracteres enviados não cabem na arte e o formulário pedia 30. Como é reescrita da organização, **depende do aval do Coatio antes de publicar**.
- **Foto tratada em preto e branco e recortada** em 4:5, para os post-its coloridos não competirem com a identidade visual. Arquivos em `outputs/AI-002/`. A publicação depende da aprovação dele, conforme a autorização que ele mesmo marcou.
- **Entrega desta rodada:** textos, como em DEC-009. Arte e envio continuam com os organizadores.

Pendências abertas por esta decisão: aval do Coatio ao título curto e à foto; confirmação dos prazos de 28/09 e 03/10, cujo campo ficou em branco no formulário; aviso a ele se a TV vencer a decisão de 27/09; plano B da demonstração; e a cobrança do questionário do VIRUS, agora atrasado.

Continuam fora do escopo do assistente: envio de mensagens, convites, compras e contratação.

## DEC-018 — Fechamento das inscrições e ajustes de 12/10

Em 2026-10-12, no último dia de inscrições, Arthur percorreu o checklist item a item no chat e respondeu a cada pendência. Complementa DEC-009, DEC-016 e DEC-017; onde houver conflito, vale esta decisão.

**Inscrições**

- **Prazo:** o encerramento passa de 10/10 para **hoje, 12/10, às 23h59**. Arthur confirmou a data ao pedir o fechamento; o plano de DEC-009 marcava 10/10.
- **Número:** 17 inscritos às 20h, contando Arthur, Henrique, Coatio e Jonatas. Restam 3 vagas dentro do limite de 20. Nenhum convidado de fora do grupo pediu entrada.
- **Encerramento:** a lista fecha às 23h59, com aviso no grupo em disparo separado do anúncio do palestrante. A peça 5 (últimas vagas) deixa de existir; o aviso de encerramento a substitui.
- **Quantitativo:** travado em **13/10**, com o número final. Almoço e lanche são dimensionados nele, e a encomenda do lanche passa de 12/10 para 13/10.
- **Confirmação de presença:** mensagem privada a cada inscrito, hoje e ao longo da semana, junto com o lembrete.

**Palestrantes**

- **Jonatas substitui Francisco Figueiredo, "VIRUS"**, na palestra das 14h às 14h45. Jonatas está inscrito e, segundo Arthur, tem título, sinopse, minibio e foto; esses dados ainda não foram registrados no repositório. A cobrança ao VIRUS e a dúvida sobre "uso concorrente" (DEC-007) ficam sem objeto. Não foi dito se o VIRUS foi avisado da troca.
- **A peça 3 passa a anunciar o Jonatas e precisa sair hoje.** O anúncio do Coatio já saiu, e o Jonatas ainda não foi anunciado.
- **Coatio:** aprovou o título curto e a foto tratada, e a peça 4 foi publicada. Com a aprovação, as três fotos tratadas entram no repositório.
- **Material e ensaio:** os dois palestrantes entregaram o material e ensaiaram. Os prazos de 28/09 e 03/10 estão cumpridos.

**Espaço e equipamento**

- **Tela:** o projetor foi emprestado ao Henrique, e a retirada é hoje ou amanhã, com um amigo dele. Arthur e Henrique decidem depois de retirá-lo; a TV segue como reserva. O teste notebook → tela e o aviso ao Coatio esperam essa retirada.
- **Planta:** basta uma versão; as três de DEC-009 foram dispensadas.
- **Mesas extras e ventiladores:** na véspera, 16/10.

**Pessoas e alimentação**

- **Registro do dia:** Junim Reis, confirmado. Substitui Guilherme Reis em DEC-009.
- **Almoço:** Agda prepara, arranjo feito por Henrique. As proporções por cenário estão prontas.
- **Lanche:** o pedido da padaria está levantado; a encomenda sai em 13/10 com o número final.
- **Restrição alimentar:** segue fora desta edição, com o risco aceito (DEC-014 e DEC-015). Ninguém avisou por conta própria.

**Compras**

- **Banner:** a arte está pronta e Arthur negocia a impressão por **R$ 54,50, mais entrega ainda a definir**. A previsão era R$ 60. Arthur passa a ser o responsável; impressão e entrega até 15/10.
- **Brinde:** foram feitas **4 canecas mágicas foscas de 325 ml, sublimadas, por R$ 209,00** (R$ 52,25 cada, com 5% de desconto): 2 para o sorteio, 1 de Arthur e 1 de Henrique. Retirada em 24/09. Substitui "2 canecas, R$ 70" de DEC-009 e deixa o brinde R$ 139 acima da previsão. Fica a decidir se as 2 canecas pessoais (R$ 104,50) entram no balanço dividido.
- **Soma anotada:** R$ 813,50, sem a entrega do banner, contra a previsão de R$ 500. O balanço continua depois do evento, dividido igualmente (DEC-009).

**Dinâmicas e backlog**

- **Quiz do QR code e formulário de feedback:** nenhum está montado. Arthur monta os dois até 14/10.
- **Pergunta de abertura da Mesa 360:** na véspera.
- **Dinâmica de integração da recepção:** vai para o backlog, a ver depois.
- **Backlog das dinâmicas de Arthur, sem data:** dinâmica de abertura do amassador de batatas; a dinâmica do sushi (texto de Arthur: "parágrafo de todos, parágrafo de IA", reflexão sobre não domínio, a IA como complemento e não para fazer por você); a dinâmica do psiquiatra ("prev ver relatório clinica", anotação a esclarecer); e o quiz do QR code, as dinâmicas e o formulário de feedback como um conjunto.
- **Pix aberto:** QR code de Pix, qualquer valor, ao final do formulário de feedback e no encerramento do dia. Fica em backlog para debater com Henrique antes de qualquer uso. Não altera a participação gratuita de DEC-007.

**Comunicação:** o grupo foi reaberto e os convidados foram adicionados.

Continuam fora do escopo do assistente: envio de mensagens, convites, compras e contratação.

## DEC-019 — Roteiro do dia revisto em 14/10

Em 2026-10-14, Arthur reviu o cronograma do dia. Complementa DEC-009 e DEC-018; onde houver conflito, vale esta decisão.

- **Recepção (11h–12h30):** check-in, apresentação do dia (cronograma) e a **dinâmica do amassador de batatas**, conduzida por Arthur, para aproximar as pessoas e deixar o ambiente leve e divertido. Sai do backlog de DEC-018 e substitui a dinâmica de integração genérica de DEC-009 ("aproximar quem estiver isolado e formar grupos").
- **Almoço (12h30–14h):** responsáveis Henrique e Arthur; Agda segue preparando (DEC-018). Das 13h30 às 13h45 a equipe prepara o equipamento do primeiro palestrante.
- **Mesa 360 (16h15–17h):** **dinâmica do sushi**, sorteio, uma **apresentação do Henrique** e o fechamento. A dinâmica do sushi sai do backlog de DEC-018. O assunto e a duração da apresentação do Henrique, e o tempo de cada parte, **ainda não foram definidos**.
- **Despedida (17h em diante):** o fim oficial **continua às 17h**, como divulgado. A despedida vem logo depois, informal, para quem quiser ficar, com o **QR code do Pix aberto** e o **QR code do formulário de feedback**.
- **Pix aberto:** Arthur já conversou com o Henrique, e o Pix entra no roteiro. Falta decidir **como será a dinâmica**. Substitui o "backlog a debater" de DEC-018 e não altera a participação gratuita de DEC-007.
- **Dinâmica do psiquiatra:** segue no backlog, sem data, com a anotação a esclarecer.
- **Exercício de 2 minutos do Coatio:** é o exercício que ele propôs para o fim da palestra, dentro dos 45 minutos dele e antes das perguntas — cada pessoa escreve o primeiro passo concreto da própria ideia. Falta combinar com ele se é no papel ou no celular.

Continuam fora do escopo do assistente: envio de mensagens, convites, compras e contratação.

## DEC-020 — Inscrições fechadas em 20, balanço 50/50 e situação de 14/10

Respostas de Arthur em 2026-10-14 às pendências de DEC-018 e DEC-019, registradas em 16/10. Complementa DEC-018; onde houver conflito, vale esta decisão.

- **Inscrições:** fecharam com **20 inscritos, lotado**. O número final substitui os 17 de 12/10 às 20h, e o cenário de compra é o de **20 pessoas**.
- **Comunicação:** a peça 3 (Jonatas) e o aviso de encerramento **saíram**. Arthur criou a arte e o texto da peça 3. Os dados do Jonatas não foram enviados ao repositório.
- **Lanche:** encomendado.
- **Projetor:** em 14/10 ainda não tinha sido retirado nem testado; a decisão da tela e o aviso ao Coatio seguiam pendentes.
- **VIRUS:** foi avisado da troca.
- **Balanço:** tudo é dividido **50/50 depois do evento**, e as **2 canecas pessoais entram** no balanço (as 4 canecas, R$ 209,00). Resolve a pendência de DEC-018. Pela soma anotada de R$ 813,50, sem a entrega do banner, cada parte seria de R$ 406,75; os valores reais substituem as previsões à medida que forem lançados.

Pendente nesta decisão: quem pagou as canecas e o lanche, e se Agda e Junim Reis estão entre os 20 inscritos ou se almoçam fora da contagem.

Continuam fora do escopo do assistente: envio de mensagens, convites, compras e contratação.

## DEC-021 — Véspera e dia do evento (16 e 17/10)

Respostas de Arthur em 16/10 e dados da planilha de respostas do Jonathan, lida em 17/10. Complementa DEC-018 a DEC-020; onde houver conflito, vale esta decisão.

**Palestrante da palestra 1.** O nome que ele pediu para a programação é **Jonathan Moura**; "Jonatas" nos registros anteriores é o mesmo palestrante. Título: **"O Estado da IA em 2026"**, baseado no State of AI Report 2026. Formato: só slides, sem demonstração, perguntas somente ao final. Fotos autorizadas, materiais aos participantes em canal privado autorizados, e **a gravação em áudio ou vídeo da palestra NÃO é autorizada**. Ninguém grava a palestra dele, inclusive quem faz o registro do dia. O Coatio autorizou fotos e gravação, com divulgação pública mediante aprovação dele.

**Tela e equipamento.** O projetor não foi retirado, então a **TV é a tela principal** (regra de DEC-009). O Coatio deve ser avisado; o teste de notebook, cabo e TV acontece no dia, às 13h30 com o Jonathan e às 13h45 com o Coatio, e os dois chegam até 12h45.

**Material.** O banner chegou: R$ 54,90 mais R$ 15,00 de entrega, **R$ 69,90**. Mesas extras, ventiladores e compras do almoço estão prontos. A Agda ajudou no almoço e **não estará presente**; o Junim Reis está entre os 20 inscritos. O lanche, encomendado para 20, é retirado perto das 15h; o responsável não foi informado.

**Check-in** digital: QR code no banner leva a um formulário do forms.app, com a lista do painel como reserva.

**Mesa 360 (16h15–17h):** dinâmica do sushi 15 min, apresentação do Henrique 10, quiz 5, sorteio e resultado 5, fechamento 10. O assunto da apresentação do Henrique segue a anunciar.

**Dinâmica do sushi:** a IA vem **depois** das pessoas. Antes do evento guarda-se a resposta da IA sobre um tema da área do grupo; no evento o grupo responde primeiro, e compara-se. O tema ficou em aberto, em backlog por último, e deve ser decidido antes das 16h15. A dinâmica do amassador de batatas estava quase pronta.

**Pix aberto:** a arte criada por Arthur vai **só dentro do formulário de feedback**, de forma individual; **não** aparece na TV nem na despedida. O valor recebido **abate o custo desta edição** antes da divisão 50/50. O recebedor não foi informado. Substitui, em DEC-019, o QR code do Pix na despedida.

**Quiz e formulário de feedback** ainda não estavam prontos na véspera; o conteúdo de ambos foi entregue em `docs/evento/SORTEIO_E_FEEDBACK.md` para Arthur montar.

Continuam fora do escopo do assistente: envio de mensagens, convites, compras e contratação.
