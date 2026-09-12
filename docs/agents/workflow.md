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

## Encerrar

Execute os testes aplicáveis e `validate .`. Registre evidências e limitações. Faça commit/push se autorizado para aquele remote e confirme o hash remoto. Se falhar, preserve o commit local e descreva em HANDOFF a correção exata; a próxima máquina ainda não recebeu esse trabalho.
