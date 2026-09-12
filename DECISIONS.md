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
