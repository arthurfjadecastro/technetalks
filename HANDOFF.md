# Passagem de responsabilidade

- Tarefa: AI-002 — Organização do evento, em gestão contínua (DEC-012). READY_FOR_REVIEW.
- Ponto atual: formulários online de palestrantes e inscrição documentados e com status "aguardando aprovação para envio e divulgação"; planilha com 38 tarefas.
- Concluído em 14/09 (Claude Code, Windows): `docs/evento/FORMULARIOS.md` com links, etapas, revisão e decisões pendentes; link de inscrição nos textos de divulgação; plano mestre e questionário apontando para os formulários; Checklist com as tarefas 33–38 e o status "Aguardando aprovação". Antes, AI-004 (kit 1.1.0) encerrada com CI verde.
- Arquivos: nenhum em edição.
- Validações: comparação célula a célula da planilha com a versão anterior, prévia renderizada, links e `validate`. Detalhes na última entrada do WORKLOG.
- Decidido depois (DEC-013): nome TECHNE Talks · Encontro nº 02, já alinhado nos textos; material de apoio até 21/09; ensaio no começo de outubro (gravação com roteiro até 03/10; ensaio com a tela, nº 9, em 04/10, interpretação a confirmar); Arthur envia os links; Arthur e Henrique acompanham as inscrições; restrição alimentar no formulário; limite de 20, porque organizadores e palestrantes também se inscrevem. Planilha com 40 tarefas.
- Pendente com os organizadores: aplicar os ajustes de FORMULARIOS.md no forms.app e aprovar os três formulários até 16/09; preencher os responsáveis "A definir" restantes (arte e envio dos flyers, grupo, banner, brinde, quiz, lembrete).
- Planilha: editada à mão, uma máquina por vez. Não rode `scripts/evento/build_planilha.py`, que sobrescreve as edições. Em edições via openpyxl, atribua `cell.value` explicitamente e compare célula a célula com a versão anterior.
- Mac: na próxima sessão, `git pull --ff-only` e a configuração única de `docs/agents/workflow.md`.
- Fora do escopo: AI-003 sem autorização.
- Próxima ação exata: receber a próxima informação do evento (aprovação ou ajustes dos formulários, decisões pendentes, responsáveis) e atualizar decisões, documentos e planilha, com commit/push.
