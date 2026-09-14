# Passagem de responsabilidade

- Tarefa: AI-004 — Padronizar o trabalho entre assistentes e máquinas Windows/macOS. Encerrada.
- Ponto atual: kit 1.1.0 publicado (b2062dd) com as duas workflows verdes, inclusive macOS. Planilha do AI-002 com o Checklist ordenado por prazo integrada em seguida.
- Concluído: protocolo "Máquinas e sincronização" em AGENTS.md; configuração por máquina e procedimento de conflito em `docs/agents/workflow.md`; `.gitattributes` (binários, WORKLOG com merge por união), `.gitignore` (sistema, travas do Office, `node_modules/`), `.editorconfig`; CI auto-hospedada corrigida com teste; limpeza da junction e do resíduo do Codex no Windows.
- Arquivos: nenhum em edição.
- Validações: 13 testes, `validate`, `init . --dry-run` sem conflito, simulação de merge simultâneo de WORKLOG, CI no GitHub (continuidade e seis jobs de testes). Detalhes nas entradas de 14/09 do WORKLOG.
- Ao abrir no Mac: `git pull --ff-only` e aplicar uma vez a configuração de `docs/agents/workflow.md` (identidade `ravin`/`arthurravin@gmail.com`, `pull.rebase true`, `fetch.prune true`, `sudo xcode-select --switch /Library/Developer/CommandLineTools`).
- Publicação: DEC-011 autoriza commit/push ao fim de cada entrega autorizada e ao integrar edições dos organizadores, seguindo o protocolo.
- AI-002 (READY_FOR_REVIEW): organizadores preenchem os responsáveis "A definir"; primeiros prazos em 16/09 (questionário) e 20–21/09 (planta, inscrição, flyer 1). A planilha agora é editada à mão, uma máquina por vez; não rode `build_planilha.py`, que sobrescreve as edições.
- Fora do escopo: AI-003 sem autorização.
- Próxima ação exata: receber do usuário os ajustes do evento ou os responsáveis confirmados e aplicá-los ao plano e à planilha.
