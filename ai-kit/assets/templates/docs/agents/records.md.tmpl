# Contrato dos registros

Os Markdown são a fonte humana; `.ai-kit.json` inventaria versão e hashes dos recursos instalados, conforme `tools/ai-kit/schemas/project.schema.json`.

## CURRENT_STATE

Campos de lista `- Campo: valor`: `Atualizado em` (ISO 8601 com fuso), `Agente`, `Tarefa` (`ID — descrição`), `Status`, `Autorização`, `Arquivos em edição`, `Próxima ação`.
Quando BLOCKED, acrescente `Bloqueio` com motivo e condição de desbloqueio. Quando não há edição ativa, use `Arquivos em edição: nenhum`. IN_PROGRESS com lista vazia representa tarefa pausada; explique a retomada em HANDOFF. A lista é coordenação humana, não um lock de sistema operacional.

## BACKLOG

Cada tarefa começa com `## [marcador] ID — descrição`, seguido de `- Status: VALOR`, escopo/autorização, aceite, dependências, risco e estimativa proporcionais. IDs devem seguir letras maiúsculas + hífen + número, como AI-001, e nunca ser reutilizados.

| Marcador | Valor | Significado |
|---|---|---|
| espaço | NOT_STARTED | Ainda não iniciada |
| ~ | IN_PROGRESS | Em execução, possivelmente pausada |
| ? | BLOCKED | Impedida; motivo e desbloqueio registrados |
| R | READY_FOR_REVIEW | Entrega aguarda revisão |
| x | DONE | Critérios daquela tarefa atendidos |

Fluxo usual: NOT_STARTED → IN_PROGRESS → READY_FOR_REVIEW → DONE. Correções voltam a IN_PROGRESS. BLOCKED pode ocorrer quando surge impedimento; retome apenas após resolvê-lo. DONE não autoriza o próximo ID.

## WORKLOG e HANDOFF

Entradas WORKLOG: `## horário-com-fuso | ID | descrição`, com ações, evidência, resultados e limitações. Cada entrada aponta para um ID do backlog. Preserve todas; leia pelo menos as duas últimas.
HANDOFF é sobrescrito a cada passagem e referencia tarefa atual, ponto exato, concluído, pendente, arquivos, validações e próxima ação. A transição de responsável exige conferir se o anterior liberou os arquivos.

## Limites da validação automática

O CLI checa estrutura, status cruzado e integridade de recursos. Ele não prova autorização humana, exclusão de edição simultânea, qualidade conceitual ou sucesso de teste/push descrito em texto. Essas evidências exigem revisão e comandos reais. Personalizações de runtime/skills exigem atualizar conscientemente seu inventário após revisão; não remova a checagem para esconder divergências.
