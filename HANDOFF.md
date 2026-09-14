# Passagem de responsabilidade

- Tarefa: AI-002 — Organização do evento Technetalks. READY_FOR_REVIEW.
- Ponto atual: resultado da reunião de 12/09 aplicado (DEC-009). Aguardando Arthur e Henrique revisarem os textos e a planilha e preencherem os responsáveis "A definir".
- Concluído em 14/09 (Claude Code): ata, DEC-009, CONTEXT, plano mestre e questionário atualizados; `DIVULGACAO.md` (grupo, 4 flyers, lembrete, convite a Guilherme Reis); `SORTEIO_E_FEEDBACK.md` (quiz pontuado e feedback); planilha de 4 abas (Checklist, Roteiro, Orçamento, Cardápio) gerada por `scripts/evento/build_planilha.py`. Removidos o gerador Node e o guia da reunião.
- Arquivos: nenhum em edição.
- Validações: asserções do gerador, fórmulas calculadas por pycel com valores de teste, prévia do Quick Look, `validate`/`doctor`, 13 testes, links e `git diff --check`. Detalhes na última entrada do WORKLOG.
- Pendente com os organizadores: responsáveis de inscrição, arte e envio dos flyers, grupo, questionário, banner, brinde e quiz; títulos das palestras (flyers 2 e 3 e perguntas 7–8 do quiz); planta do Henrique; decisão da tela até 27/09; proporções do cardápio até 04/10.
- Regenerar a planilha: `pip install openpyxl` e `python scripts/evento/build_planilha.py`. Isso sobrescreve o que foi preenchido à mão; depois que os organizadores começarem a editar, altere o `.xlsx` diretamente.
- Ambiente macOS: sem `sudo xcode-select --switch /Library/Developer/CommandLineTools`, rode o git com `DEVELOPER_DIR=/Library/Developer/CommandLineTools`.
- Git: entrega commitada localmente (a1640a1), seguida do commit deste registro. **Não publicada**: o push para `origin/main` falhou sem credencial do GitHub nesta máquina, e o remoto segue em 4ede1d3. Outra máquina que clonar agora não recebe este trabalho. Para publicar: autenticar o GitHub, rodar `git push origin main` e conferir o hash com `git ls-remote origin main`.
- Fora do escopo: AI-003 sem autorização.
- Próxima ação exata: receber de Arthur os ajustes nos textos e os responsáveis confirmados; registrar em DECISIONS se mudarem uma decisão e atualizar planilha e plano.
