# Technetalks

Organização do encontro de tecnologia de **sábado, 17/10/2026**, no Gama/DF: chegada às 10h30, início às 11h, fim às 17h, com almoço e lanche. Base confirmada: **11 a 20 pessoas no total, participação gratuita e previsão de R$ 500**, custeada igualmente por Arthur e Henrique, com balanço depois do evento.

O repositório também contém o kit reutilizável de engenharia com **Codex, Claude Code e GitHub Copilot**, concluído em AI-001. O trabalho atual é AI-002, planejamento do evento.

## Organizar o evento

- [Plano mestre: decisões, roteiro, divulgação, alimentação e orçamento](docs/evento/PLANO_MESTRE.md)
- [Planilha: checklist, roteiro, orçamento com balanço e cardápio por cenário](outputs/AI-002/planejamento-evento.xlsx)
- [Textos do grupo do WhatsApp e dos 4 flyers](docs/evento/DIVULGACAO.md)
- [Quiz do sorteio e formulário de feedback](docs/evento/SORTEIO_E_FEEDBACK.md)
- [Questionário para VIRUS e Coatio](docs/evento/QUESTIONARIO_PALESTRANTES.md)
- [Ata da reunião de 12/09](docs/evento/ATA_REUNIAO_12-09.md) e [pauta usada nela](docs/evento/PAUTA_REUNIAO_12-09.md)
- [Boas práticas e fontes consultadas](docs/evento/REFERENCIAS_E_PRATICAS.md)

DEC-007 e DEC-009 registram o que os organizadores decidiram. Datas de divulgação e responsáveis marcados "a definir" são propostas; nada disso representa compras, convites ou mensagens enviadas.

A planilha é gerada por `python scripts/evento/build_planilha.py` (requer `pip install openpyxl`). Rodar de novo sobrescreve as edições feitas à mão; depois que começarem a preencher, editem o `.xlsx` diretamente.

## Retomar este projeto

> Continue a partir do estado persistido no repositório. Primeiro sincronize com `git pull --ff-only`. Leia README.md, DECISIONS.md, CURRENT_STATE.md, BACKLOG.md, HANDOFF.md e pelo menos as duas últimas entradas de WORKLOG.md. Depois leia AGENTS.md e a instrução do seu assistente. Apresente em até dez linhas tarefa, estado, próxima ação, arquivos e bloqueios. Prossiga somente no escopo autorizado.

## Criar outro projeto com o mesmo padrão

Após clonar este repositório, um comando prepara o próximo projeto:

```powershell
python C:/sistemas/technetalks/ai-kit/scripts/bootstrap.py init C:/sistemas/meu-projeto --name meu-projeto
```

O padrão inclui **25 skills Matt Pocock**, recursos auxiliares e licença, fixados no commit `3cca18b368ae95cdbdebbff572ccafa662551015` (1.2.3), além do protocolo e validador. Requer Python 3.10+ e internet na primeira importação; a opção `--matt-source` usa um snapshot local verificado. Use `--dry-run` para inspecionar antes de escrever.

Para instalar a skill de bootstrap no perfil pessoal e invocá-la em futuros projetos:

```powershell
python ai-kit/scripts/bootstrap.py install-global --home C:/Users/arthu
```

Depois peça: **“Use project-bootstrap para preparar este projeto com meu padrão de engenharia.”** No Claude, o adaptador chama-se `project-bootstrap-claude`. A descoberta depende do cliente; consulte o seletor e reinicie a sessão se necessário. O kit não se executa sozinho ao criar uma pasta.

## Validar

```powershell
python ai-kit/scripts/bootstrap.py validate .
python ai-kit/scripts/bootstrap.py doctor .
python -m unittest discover -s tests -v
```

No macOS, use `python3`. Nos projetos gerados, o CLI fica em `tools/ai-kit/scripts/bootstrap.py`. Os arquivos de continuidade são editáveis. Alterações em runtime e skills são detectadas pelo inventário; consulte o guia antes de atualizá-los.

## Documentação

- [Guia completo de instalação, uso e manutenção](docs/ai-kit.md)
- [Fluxo de engenharia, seleção de skills e várias máquinas](docs/agents/workflow.md)
- [Contrato de estado, backlog e handoff](docs/agents/records.md)
- [Decisões e escopo autorizado](DECISIONS.md)
- [Fontes e compatibilidade](docs/agents/sources.md)
- [Histórico de validação e entregas](WORKLOG.md)

`AGENTS.md` contém as regras comuns. `CLAUDE.md` e `.github/copilot-instructions.md` adaptam os clientes. `.scratch/` é o tracker local versionado; `BACKLOG.md` mantém os IDs e status de execução.
