# Passagem de responsabilidade

- Tarefa: AI-002 — Organização do evento, em gestão contínua (DEC-012). READY_FOR_REVIEW.
- Ponto atual: **encontro lançado em 14/09** no grupo do WhatsApp, com inscrições abertas e questionários enviados aos palestrantes (DEC-015). Planilha com 32 tarefas no Checklist e 34 peças na nova aba Comunicação.
- Concluído em 14/09 (GitHub Copilot, Windows): DEC-015; `docs/evento/COMUNICACAO.md` com o passo a passo reutilizável, o radar do que falta comunicar e o que já saiu; `DIVULGACAO.md` com os textos publicados, peças renumeradas de 1 a 5 e sete mensagens novas; plano mestre, FORMULARIOS e README alinhados; nova aba Comunicação na planilha; linha de acerto do Orçamento restaurada depois de ter sido apagada em edição manual. Antes, na mesma data, Claude Code documentou os formulários (DEC-012 a DEC-014).
- Arquivos: nenhum em edição.
- Validações: comparação célula a célula da planilha, leitura completa do arquivo salvo, formatação e filtros recriados. Detalhes e limitações na última entrada do WORKLOG.
- Regra nova da planilha: **a aba Comunicação é dona de toda mensagem enviada; o Checklist, de todo o resto.** Não recrie tarefas de divulgação no Checklist.
- Pendente com os organizadores:
  - Confirmar os prazos propostos aos palestrantes: inscrição 19/09, questionário 21/09, rascunho do material 28/09, ensaio gravado 03/10.
  - Aplicar os ajustes do formulário de inscrição, que já está em uso: campos obrigatórios, Brasil (+55), DDD, descrição, mensagem final, cores, encerramento em 10/10 e limite de 20 (tarefas 41 e 36).
  - Confirmar a grafia `TΞKHNE Talks - 2ª Edição` no grupo, que convive com o nome público TECHNE Talks · Encontro nº 02.
  - Confirmar os responsáveis atribuídos por inferência na aba Comunicação.
  - Preencher os responsáveis "A definir" restantes: banner, brinde, quiz e formulário de feedback.
- Risco aceito e registrado: ninguém foi perguntado sobre restrição alimentar, e o cardápio tem glúten e lactose em quase tudo (DEC-014 e DEC-015). A linha sugerida para o lembrete está no radar de COMUNICACAO.md.
- Planilha: editada à mão, uma máquina por vez. Não rode `scripts/evento/build_planilha.py`, que sobrescreve as edições e não conhece a aba Comunicação. Em edições via openpyxl, atribua `cell.value` explicitamente e compare célula a célula com a versão anterior.
- Mac: na próxima sessão, `git pull --ff-only` e a configuração única de `docs/agents/workflow.md`.
- Fora do escopo: AI-003 sem autorização.
- Próxima ação exata: receber a próxima informação do evento (confirmação dos prazos, respostas dos palestrantes, contagem de inscritos) e atualizar decisões, documentos e planilha, com commit/push.
