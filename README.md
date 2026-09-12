# Technetalks

Base reutilizável de engenharia com IA para trabalhar com **Codex, Claude Code e GitHub Copilot**. O produto Technetalks ainda está em descoberta; esta entrega configura o modo de trabalhar e de continuar o projeto entre sessões e máquinas.

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
- [Validação desta entrega](docs/validation/AI-001.md)

`AGENTS.md` contém as regras comuns. `CLAUDE.md` e `.github/copilot-instructions.md` adaptam os clientes. `.scratch/` é o tracker local versionado; `BACKLOG.md` mantém os IDs e status de execução.
