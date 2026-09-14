# Estado atual

- Atualizado em: 2026-09-14T13:45:00-03:00
- Agente: Claude Code
- Tarefa: AI-002 — Descobrir e estruturar a organização do evento Technetalks.
- Status: READY_FOR_REVIEW
- Autorização: DEC-006 a DEC-009 (commit/push em `origin/main`; repositório público; dados do projeto liberados para versionamento). Compras, convites, contratação e envio de mensagens seguem fora do escopo.
- Arquivos em edição: nenhum
- Próxima ação: Arthur e Henrique revisam textos e planilha e preenchem os responsáveis "A definir" (inscrição, flyers, grupo, questionário, banner, brinde, quiz). Primeiros prazos: questionário aos palestrantes 16/09; planta, inscrição e arte do flyer 1 em 20/09; primeiro disparo em 21/09.
- Entrega: DEC-009, ata de 12/09, plano mestre e questionário atualizados, textos de divulgação, quiz e feedback, planilha simplificada de 4 abas gerada por `scripts/evento/build_planilha.py`.
- Publicação: bloqueada. Commit local a1640a1 e o registro deste bloqueio não chegaram a `origin/main`, que segue em 4ede1d3. O push falhou por falta de credencial do GitHub nesta máquina ("could not read Username"). Desbloqueio: Arthur autentica o GitHub (por exemplo, pelo VS Code) e executa `git push origin main`; confirmar com `git ls-remote origin main`.
- Ambiente: nesta máquina macOS, `git` exige `DEVELOPER_DIR=/Library/Developer/CommandLineTools` até o usuário executar `sudo xcode-select --switch /Library/Developer/CommandLineTools`.
