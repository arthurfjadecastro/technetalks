# Passagem de responsabilidade

- Tarefa: AI-002 — Organização do evento, em gestão contínua (DEC-012). READY_FOR_REVIEW.
- Ponto atual: formulários online de palestrantes e inscrição documentados e com status "aguardando aprovação para envio e divulgação"; planilha com 38 tarefas.
- Concluído em 14/09 (Claude Code, Windows): `docs/evento/FORMULARIOS.md` com links, etapas, revisão e decisões pendentes; link de inscrição nos textos de divulgação; plano mestre e questionário apontando para os formulários; Checklist com as tarefas 33–38 e o status "Aguardando aprovação". Antes, AI-004 (kit 1.1.0) encerrada com CI verde.
- Arquivos: nenhum em edição.
- Validações: comparação célula a célula da planilha com a versão anterior, prévia renderizada, links e `validate`. Detalhes na última entrada do WORKLOG.
- Pendente com os organizadores: aprovar os três formulários até 16/09, aplicando os ajustes de FORMULARIOS.md; confirmar o nome público "TECHNE Talks · Encontro nº 02" (e então alinhar DIVULGACAO e SORTEIO_E_FEEDBACK, que dizem "primeiro Technetalks"); decidir os prazos dos palestrantes (materiais em 21/09? gravação do ensaio em 03/10 e ensaio presencial em 16/10?); preencher os responsáveis "A definir".
- Planilha: editada à mão, uma máquina por vez. Não rode `scripts/evento/build_planilha.py`, que sobrescreve as edições. Em edições via openpyxl, atribua `cell.value` explicitamente e compare célula a célula com a versão anterior.
- Mac: na próxima sessão, `git pull --ff-only` e a configuração única de `docs/agents/workflow.md`.
- Fora do escopo: AI-003 sem autorização.
- Próxima ação exata: receber a próxima informação do evento (aprovação ou ajustes dos formulários, decisões pendentes, responsáveis) e atualizar decisões, documentos e planilha, com commit/push.
