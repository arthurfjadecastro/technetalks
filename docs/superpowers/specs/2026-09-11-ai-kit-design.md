# Kit reutilizável de engenharia com IA

Pedido autorizado: AI-001; decisões: DEC-001 a DEC-004.

O kit converte o protocolo de continuidade do tematicprod em infraestrutura independente de produto. Alternativas consideradas: copiar arquivos manualmente (barato, sujeito a divergências); configurar apenas plugins globais (não carrega o estado do projeto para outra máquina); kit versionado com instalação pessoal opcional (escolhido, reproduzível e inspecionável).

## Contrato

- Python 3.10+, biblioteca padrão, Windows/Linux/macOS.
- `init DEST --name NOME`: prepara o projeto com Matt Pocock fixado por padrão; `--without-matt` opta explicitamente por instalação mínima; `--matt-source` permite snapshot local verificado por hash.
- `--dry-run`: descreve criações e conflitos sem escrever no destino.
- Repetição preserva byte a byte estado e personalizações. Conflitos em recursos gerenciados impedem novas escritas antes da intervenção.
- Primeira escrita de projeto novo: CURRENT_STATE; segunda: BACKLOG. Estado inicial IN_PROGRESS, conclusão após validação, WORKLOG permanente e HANDOFF atualizado.
- `validate DEST`: checa contrato dos registros, referências de tarefas, status, fuso, lista de edição e integridade dos recursos instalados.
- `install-global --home HOME`: instala a skill autocontida para o usuário, sem substituir arquivos divergentes.
- `doctor DEST`: relata ferramentas, runtime e skills disponíveis sem executar os assistentes nem expor credenciais.
- Runtime e skills locais acompanham Git. Upstream preservado, com versão, licença e checksums. Nenhuma atualização automática.
- Não executar hooks, criar tracker remoto, inicializar Git, definir remote ou fazer push no bootstrap. O agente trata essas ações conforme autorização específica.

## Aceite

Testes de instalação limpa, idempotência, destino existente, dry-run, conflitos, conteúdo adulterado, recursos auxiliares, status divergente, referências desconhecidas e instalação global em home temporária. Revisão independente, validação do repositório e verificação do push.
