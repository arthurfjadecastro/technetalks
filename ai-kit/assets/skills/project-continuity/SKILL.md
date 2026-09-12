---
name: project-continuity
description: Retomar, reconciliar uma interrupção ou passar uma tarefa entre assistentes usando os registros de continuidade do repositório.
---

# Continuidade entre assistentes

Leia, nesta ordem, README, DECISIONS, CURRENT_STATE, BACKLOG, HANDOFF e pelo menos as duas últimas entradas de WORKLOG. Depois leia AGENTS e o adaptador do cliente. Verifique Git e os arquivos envolvidos antes de confiar no estado.

Apresente em até dez linhas tarefa, status, próxima ação, arquivos, bloqueios e autorização. Se outro agente mantém arquivos em edição, obtenha evidência de passagem ou encerramento antes de assumir esses arquivos. Um HANDOFF antigo não libera a tarefa atual. A urgência do pedido não comprova que o outro agente parou. Trabalhe em leitura ou escopo independente enquanto resolve a posse.

Ao assumir tarefa autorizada, a primeira escrita atualiza CURRENT_STATE com horário e fuso, agente, ID estável, descrição, IN_PROGRESS e arquivos. Registre o ID/status no BACKLOG antes das demais alterações. Preserve o histórico de autoria no WORKLOG. Em interrupção, registre a reconciliação de estado, diff e testes; não presuma conclusão.

Em cada entrega, sincronize CURRENT_STATE/BACKLOG, acrescente WORKLOG com ID e evidência real e atualize CHANGELOG quando relevante. Revisão pendente usa READY_FOR_REVIEW. DONE se refere só à tarefa e não autoriza a próxima.

Na passagem, sobrescreva HANDOFF com ponto exato, concluído, pendências, arquivos, validações, limitações e próxima ação executável. Libere arquivos quando não houver edição ativa. Uma sessão encerrada pode manter tarefa IN_PROGRESS com arquivos `nenhum` e motivo explícito.

Commit local e push são resultados diferentes. Use o destino autorizado; confirme o commit remoto antes de anunciar retomada por clone. Em falha de push, registre o bloqueio da publicação e sua condição de desbloqueio, preservando as evidências locais. O histórico permanente não deve registrar um push previsto como realizado.
