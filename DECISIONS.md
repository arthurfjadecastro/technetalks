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
