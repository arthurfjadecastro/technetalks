# Instruções compartilhadas

## Início de sessão

Leia nesta ordem: `README.md`, `DECISIONS.md`, `CURRENT_STATE.md`, `BACKLOG.md`, `HANDOFF.md` e pelo menos as duas últimas entradas de `WORKLOG.md` (amplie para a tarefa em curso). Depois leia este arquivo e o adaptador do assistente: `CLAUDE.md` ou `.github/copilot-instructions.md`. Codex usa este arquivo diretamente.

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

## Agent skills

### Issue tracker

Markdown local versionado em `.scratch/`; BACKLOG é o índice canônico de status de execução. Consulte `docs/agents/issue-tracker.md`.

### Triage labels

`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`; consulte `docs/agents/triage-labels.md`. Prontidão não equivale a autorização.

### Domain docs

Single-context: `CONTEXT.md` e `docs/adr/`; consulte `docs/agents/domain.md`. DECISIONS precede ADRs.

Matt Pocock: `grill-with-docs`, `to-spec`, `to-tickets`, `implement`, `code-review`; use conforme a fase e disponibilidade. `project-continuity` orienta recuperação/passagem. Consulte `docs/agents/workflow.md` para a seleção. Skills apoiam o pedido e não ampliam sua autorização.
