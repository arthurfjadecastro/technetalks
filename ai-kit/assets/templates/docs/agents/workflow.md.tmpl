# Engenharia com assistentes

## Qual recurso usar

| Situação | Skill Matt Pocock ou do kit | Saída |
|---|---|---|
| Escolher próximo método | ask-matt | Sugestão de skill adequada |
| Entender problema e vocabulário | grill-with-docs | Requisitos e termos esclarecidos |
| Consolidar entendimento | to-spec | Especificação local |
| Dividir entrega | to-tickets | Incrementos verificáveis e dependências |
| Executar escopo autorizado | implement, tdd | Implementação e testes |
| Investigar falha | diagnosing-bugs | Reprodução, causa e correção verificada |
| Revisar alterações | code-review | Aderência ao escopo e padrões |
| Explorar arquitetura | improve-codebase-architecture | Oportunidades fundamentadas |
| Retomar ou trocar assistente | project-continuity | Estado reconciliado e passagem |
| Preparar próximo projeto | project-bootstrap pessoal ou CLI | Novo kit local |

No Codex, invoque pelo seletor de skills ou `$nome`; plugins podem acrescentar namespace. No Claude use o nome mostrado por `/`, normalmente `/mattpocock-skills:grill-with-docs` quando via plugin. No Copilot use a seleção disponível no cliente ou peça a leitura de `.agents/skills/<nome>/SKILL.md`. A instalação de arquivos não prova que um cliente os carregou.

O pacote pessoal Matt Pocock pode já existir no Codex/Claude. O snapshot local garante portabilidade e versão auditável; use uma cópia por execução. Skills de plugin podem aparecer junto das locais no seletor. Não instale outra cópia global das mesmas skills sem necessidade.

## Prática proporcional

Pequena correção pede diagnóstico e verificação focados. Feature nova pede requisito, aceite e testes nas fronteiras úteis. Decisão que afeta vários módulos pede alternativas e ADR. Revisão/validação visual e tamanho são exigidos quando fazem parte da entrega; não invente limites de outro projeto.
Um ticket deve entregar comportamento utilizável; prefira incrementos verticais a tarefas isoladas de “banco”, “backend” e “tela” sem resultado testável.

## Multiagentes

Troca sequencial: agente A registra HANDOFF e libera os arquivos; agente B lê registros, confere diff e assume. Trabalho paralelo: tarefas independentes, arquivos disjuntos ou worktrees, um responsável pela integração; revisores podem operar somente leitura. A disponibilidade de subagentes varia por cliente. O protocolo também funciona com um único agente.

## Várias máquinas

As regras estão em AGENTS.md, seção **Máquinas e sincronização**. O repositório já normaliza texto em LF (`.gitattributes`), declara binários, soma entradas de WORKLOG no merge e ignora arquivos de sistema e travas do Office (`.gitignore`). O que é exclusivo de cada máquina precisa ser feito nela uma vez, no clone:

```sh
git config user.name "Seu nome"          # mesma identidade em todas as máquinas
git config user.email "voce@exemplo.com"
git config pull.rebase true              # `git pull` sem merge commits entre máquinas
git config fetch.prune true
```

- **Windows:** Git for Windows com Git Credential Manager. `core.autocrlf` não interfere porque `.gitattributes` fixa LF. Python 3.10+ como `python`.
- **macOS:** Command Line Tools (`xcode-select --install`). Se o `git` reclamar de um Xcode ausente, `sudo xcode-select --switch /Library/Developer/CommandLineTools`; sem sudo, prefixe os comandos com `DEVELOPER_DIR=/Library/Developer/CommandLineTools`. Credencial no Keychain (`osxkeychain`), por exemplo com `gh auth login`. Python 3.10+ como `python3`.
- **Assistentes:** Codex lê AGENTS.md, Claude Code lê CLAUDE.md e Copilot lê `.github/copilot-instructions.md`; os três chegam ao mesmo protocolo e às skills de `.agents/skills/`. Ferramentas internas de um assistente (runtimes, caches, links para eles) ficam fora do repositório.

**Conflito ao sincronizar:** rode `git pull --rebase`. Para cada arquivo em conflito:

1. WORKLOG: a união já soma as entradas; mantenha a ordem cronológica, remova duplicidades e restaure a linha em branco entre entradas.
2. CURRENT_STATE e HANDOFF: fique com a versão mais recente e incorpore o que a outra registrou.
3. BACKLOG e DECISIONS: combine por ID; nunca reutilize nem renumere IDs. Se as duas máquinas criaram o mesmo ID, renumere o que ainda não foi publicado.
4. Binários: escolha uma versão (`git checkout --theirs` ou `--ours` no arquivo) e reaplique à mão as mudanças da outra.
5. Rode `validate .`, `git add` e `git rebase --continue`; depois push e `git ls-remote`.

A skill `resolving-merge-conflicts` detalha o procedimento. Registre a reconciliação no WORKLOG.

## Encerrar

Execute os testes aplicáveis e `validate .`. Registre evidências e limitações. Faça commit/push se autorizado para aquele remote e confirme o hash remoto. Se falhar, preserve o commit local e descreva em HANDOFF a correção exata; a próxima máquina ainda não recebeu esse trabalho.
