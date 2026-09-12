# Technetalks

Organização do encontro de tecnologia de **17/10/2026, 10h30–17h**, no Gama/DF, com almoço às 12h30 e lanche. Base confirmada: **16–20 pessoas totais, participação gratuita e teto de R$ 500**, custeados igualmente por Arthur e Henrique.

O repositório também contém o kit reutilizável de engenharia com **Codex, Claude Code e GitHub Copilot**, concluído em AI-001. O trabalho atual é AI-002, planejamento do evento.

## Organizar o evento

- [Plano mestre, prioridades, orçamento e roteiro do dia](docs/evento/PLANO_MESTRE.md)
- [Pauta e checklist para a reunião de 12/09](docs/evento/PAUTA_REUNIAO_12-09.md)
- [Questionário para VIRUS e Coatio](docs/evento/QUESTIONARIO_PALESTRANTES.md)
- [Planilha: cronograma macro, atividades micro e orçamento](outputs/AI-002/planejamento-evento.xlsx)
- [Boas práticas e fontes consultadas](docs/evento/REFERENCIAS_E_PRATICAS.md)

DEC-007 registra o que o usuário confirmou. Distribuição de orçamento, prazos internos, apoio operacional e programação detalhada são propostas para a reunião; não representam compras, convites ou reservas executados.

## Retomar este projeto

> Continue a partir do estado persistido no repositório. Leia README.md, DECISIONS.md, CURRENT_STATE.md, BACKLOG.md, HANDOFF.md e pelo menos as duas últimas entradas de WORKLOG.md. Depois leia AGENTS.md e a instrução do seu assistente. Apresente em até dez linhas tarefa, estado, próxima ação, arquivos e bloqueios. Prossiga somente no escopo autorizado.

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

Nos projetos gerados, o CLI fica em `tools/ai-kit/scripts/bootstrap.py`. Os arquivos de continuidade são editáveis. Alterações em runtime e skills são detectadas pelo inventário; consulte o guia antes de atualizá-los.

## Documentação

- [Guia completo de instalação, uso e manutenção](docs/ai-kit.md)
- [Fluxo de engenharia e seleção de skills](docs/agents/workflow.md)
- [Contrato de estado, backlog e handoff](docs/agents/records.md)
- [Decisões e escopo autorizado](DECISIONS.md)
- [Fontes e compatibilidade](docs/agents/sources.md)
- [Histórico de validação e entregas](WORKLOG.md)

`AGENTS.md` contém as regras comuns. `CLAUDE.md` e `.github/copilot-instructions.md` adaptam os clientes. `.scratch/` é o tracker local versionado; `BACKLOG.md` mantém os IDs e status de execução.
