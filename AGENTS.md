# Instruções compartilhadas

## Início de sessão

Sincronize com o remoto (seção Máquinas e sincronização). Depois leia nesta ordem: `README.md`, `DECISIONS.md`, `CURRENT_STATE.md`, `BACKLOG.md`, `HANDOFF.md` e pelo menos as duas últimas entradas de `WORKLOG.md` (amplie para a tarefa em curso). Depois leia este arquivo e o adaptador do assistente: `CLAUDE.md` ou `.github/copilot-instructions.md`. Codex usa este arquivo diretamente.

Apresente em até dez linhas o estado entendido e a ação pretendida. Prossiga no escopo autorizado, sem inconsistências ou bloqueios na ação afetada. Autorizações da sessão valem e devem ser persistidas com escopo antes do trabalho dependente; não peça novamente autorização já concedida.

## Escrita e continuidade

- Primeira escrita da tarefa: CURRENT_STATE com data/hora e fuso, agente, ID estável, descrição, IN_PROGRESS e arquivos em edição. Depois sincronize ou crie o ID no BACKLOG, antes das demais alterações. No primeiro bootstrap crie esses dois arquivos nessa ordem.
- Verifique passagem de responsabilidade antes de escrever arquivos listados por outro agente. Coordene papéis; agentes podem implementar, revisar ou corrigir. Trabalho paralelo requer escopos sem sobreposição ou worktrees separados, e um integrador responsável pelos registros comuns.
- Após entrega significativa, atualize CURRENT_STATE/BACKLOG, acrescente WORKLOG com ID, validações e limitações e atualize CHANGELOG quando relevante. O contrato exato está em `docs/agents/records.md`.
- Antes de encerrar/trocar agente, sobrescreva HANDOFF com concluído, pendente, arquivos, validações e próxima ação exata; libere arquivos sem edição ativa. WORKLOG é permanente e recebe apenas novas entradas.
- Ao recuperar interrupção, confronte estado, diff e histórico e registre a reconciliação antes da ação afetada. Não refaça etapas concluídas nem mude decisões congeladas sem autorização.

O repositório é a fonte de continuidade. CURRENT_STATE descreve o presente; BACKLOG, tarefas/status; WORKLOG, histórico; HANDOFF, passagem; CHANGELOG, mudanças relevantes. DONE encerra somente o ID indicado e não autoriza outra tarefa. Use READY_FOR_REVIEW para revisão pendente e BLOCKED com motivo/condição quando a tarefa não puder prosseguir.

## Entrega e Git

Implemente o escopo autorizado, revise, corrija e valide os critérios aplicáveis (comportamento, conteúdo, visual, tamanho, desempenho). Registre o que foi efetivamente executado. Inspecione `git status` e o diff antes de cada commit. Faça commit/push ao encerrar quando o destino e essa ação estiverem autorizados em DECISIONS. Confirme o resultado remoto. Em falha, registre o bloqueio; não declare sincronização. Preserve arquivos e mudanças alheias.

## Máquinas e sincronização

O remoto é o ponto de encontro entre máquinas (Windows, macOS, Linux) e assistentes; o que não foi enviado não existe para os outros.

- Início: `git pull --ff-only` antes de ler os registros. Com mudanças locais ou histórico divergente, reconcilie antes de editar (`git pull --rebase`). Nunca use `push --force` nem reescreva histórico publicado.
- Pausa ou troca de máquina: valide, faça commit e push e confira o hash com `git ls-remote`. Para trabalhar em duas máquinas ao mesmo tempo, envie antes o CURRENT_STATE com os arquivos reservados ou use branches separadas.
- Conflitos: WORKLOG usa merge por união; confira ordem e duplicidade. Em CURRENT_STATE e HANDOFF prevalece o registro mais recente, reconciliado com o outro. Binários (planilhas, imagens) não se fundem: uma máquina por vez, com pull logo antes e push logo depois.
- Portabilidade: texto em UTF-8 sem BOM e LF. Scripts versionados usam caminhos relativos e dependências declaradas no repositório, e rodam nos dois sistemas (`python` no Windows, `python3` no macOS). Não versione links, junctions, caminhos absolutos ou dependências do runtime de um assistente. No Windows PowerShell 5.1, não grave texto com `Set-Content`/`Out-File`, que usam ANSI ou BOM; use a ferramenta de edição do assistente ou Python.

Configuração de cada máquina e procedimento de conflito: `docs/agents/workflow.md`.

## Agent skills

### Issue tracker

Markdown local versionado em `.scratch/`; BACKLOG é o índice canônico de status de execução. Consulte `docs/agents/issue-tracker.md`.

### Triage labels

`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`; consulte `docs/agents/triage-labels.md`. Prontidão não equivale a autorização.

### Domain docs

Single-context: `CONTEXT.md` e `docs/adr/`; consulte `docs/agents/domain.md`. DECISIONS precede ADRs.

Matt Pocock: `grill-with-docs`, `to-spec`, `to-tickets`, `implement`, `code-review`; use conforme a fase e disponibilidade. `project-continuity` orienta recuperação/passagem. Consulte `docs/agents/workflow.md` para a seleção. Skills apoiam o pedido e não ampliam sua autorização.
