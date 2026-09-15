# Passagem de responsabilidade

- Tarefa: AI-002 — Organização do evento, em gestão contínua (DEC-012). READY_FOR_REVIEW.
- Ponto atual: **encontro lançado em 14/09** no grupo do WhatsApp, com inscrições abertas e questionários enviados aos palestrantes (DEC-015). As seis pendências daquela rodada foram fechadas em 15/09 por DEC-016. Planilha com 32 tarefas no Checklist e 34 peças na aba Comunicação.
- Concluído em 14–15/09 (GitHub Copilot, Windows): DEC-015 e DEC-016; `docs/evento/COMUNICACAO.md` com o passo a passo reutilizável, o radar do que falta comunicar e o que já saiu; `DIVULGACAO.md` com os textos publicados, peças renumeradas de 1 a 5 e sete mensagens novas; plano mestre, FORMULARIOS e README alinhados; nova aba Comunicação na planilha; linha de acerto do Orçamento restaurada depois de ter sido apagada em edição manual.
- Arquivos: nenhum em edição.
- Validações: comparação célula a célula da planilha, leitura completa do arquivo salvo, formatação e filtros recriados. Detalhes e limitações nas duas últimas entradas do WORKLOG.
- Regra nova da planilha: **a aba Comunicação é dona de toda mensagem enviada; o Checklist, de todo o resto.** Não recrie tarefas de divulgação no Checklist.
- Fechado em DEC-016, não reabrir sem nova decisão: nome do grupo `TΞCHNE Talks - 2ª Edição`; prazos dos palestrantes 19/09, 21/09, 28/09 e 03/10; formulário de inscrição sem mais ajustes, com vagas e encerramento controlados à mão por Arthur; reabertura do grupo na noite de 16/09; Arthur como responsável pela divulgação.
- Pendente com os organizadores: preencher os responsáveis "A definir" restantes — banner, brinde, quiz e formulário de feedback.
- Risco aceito e registrado: ninguém foi perguntado sobre restrição alimentar, e o cardápio tem glúten e lactose em quase tudo (DEC-014 e DEC-015). A linha sugerida para o lembrete está no radar de COMUNICACAO.md.
- Planilha: editada à mão, uma máquina por vez. Feche o Excel antes de editar por script — a trava `~$planejamento-evento.xlsx` bloqueia a gravação. Não rode `scripts/evento/build_planilha.py`, que sobrescreve as edições e não conhece a aba Comunicação. Em edições via openpyxl, atribua `cell.value` explicitamente e compare célula a célula com a versão anterior.
- Mac: na próxima sessão, `git pull --ff-only` e a configuração única de `docs/agents/workflow.md`.
- Fora do escopo: AI-003 sem autorização.
- Próxima ação exata: receber a próxima informação do evento (reabertura do grupo em 16/09, inscrição dos palestrantes até 19/09, respostas do questionário até 21/09, contagem de inscritos) e atualizar decisões, documentos e planilha, com commit/push.
