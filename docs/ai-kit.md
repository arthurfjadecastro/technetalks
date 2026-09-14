# Guia do kit de engenharia com IA

## O que fica pronto

O projeto leva consigo regras, estado e skills. Outra máquina precisa clonar o repositório e ter Python e o assistente desejado; o contexto de continuidade está no Git. Credenciais e permissões dos clientes continuam pertencendo à máquina/conta.

| Camada | Local | Responsabilidade |
|---|---|---|
| Regras comuns | AGENTS.md | Protocolo e escopo entre assistentes |
| Adaptação | CLAUDE.md e .github/copilot-instructions.md | Encaminhar ao protocolo |
| Continuidade | CURRENT_STATE, BACKLOG, HANDOFF, WORKLOG | Retomar sem depender do chat |
| Decisões | DECISIONS, CONTEXT, docs/adr | Razões e vocabulário |
| Execução reutilizável | ai-kit/ nesta origem; tools/ai-kit/ no destino | Templates, instalação e validador |
| Skills de projeto | .agents/skills/ | Matt Pocock e project-continuity |
| Bootstrap pessoal | ~/.agents/skills/project-bootstrap | Preparar futuros projetos |

## Instalar uma vez no usuário

Revise `ai-kit/` e execute `python ai-kit/scripts/bootstrap.py install-global --home C:/Users/arthu`. No Linux/macOS, omita `--home` para usar seu perfil. O comando preserva arquivos idênticos e recusa divergências; não modifica configurações globais dos clientes, caches de plugins ou credenciais.

Codex/Copilot recebem `~/.agents/skills/project-bootstrap`. Claude recebe `~/.claude/skills/project-bootstrap-claude`, que aponta para o pacote canônico. A skill inclui scripts, templates e lock; continua funcionando sem este clone. Novas skills ficam disponíveis após a descoberta do cliente, normalmente na próxima interação; reinicie se necessário.

O Matt Pocock já estava instalado pessoalmente no Codex e Claude deste ambiente. O bootstrap usa um snapshot local por projeto para incluir também Copilot e permitir reprodução em outra máquina. Isso pode mostrar a versão do plugin e a local no seletor; escolha uma por execução. Não é necessário reinstalar o plugin. Em uma máquina sem plugin Claude, o adaptador orienta ler as skills versionadas diretamente.

## Preparar um projeto

```powershell
python C:/sistemas/technetalks/ai-kit/scripts/bootstrap.py init C:/sistemas/novo --name novo --dry-run
python C:/sistemas/technetalks/ai-kit/scripts/bootstrap.py init C:/sistemas/novo --name novo
python C:/sistemas/novo/tools/ai-kit/scripts/bootstrap.py doctor C:/sistemas/novo
```

Ou invoque a skill pessoal pelo nome com o destino desejado. O CLI pode partir de qualquer diretório; scripts resolvem recursos pela própria localização. Não é necessário executar setup-matt-pocock-skills novamente: tracker, labels e domínio já são configurados. Use aquela skill apenas para mudar essas escolhas.

Por padrão, o download é HTTPS do commit fixado em `mattpocock.lock.json`, conferido arquivo por arquivo. Não executa código upstream. Para operar sem rede, passe `--matt-source <checkout-local>`; conteúdos devem corresponder ao lock. Quebras de linha Windows só são normalizadas se isso produzir o checksum oficial. `--without-matt` cria explicitamente o perfil mínimo.

O kit cria AI-000 para a instalação e deixa AI-001 para descoberta. A autorização do projeto de origem não é copiada. O instalador não cria Git, remote, issues externas ou hooks e não faz commit/push. Defina destino e política de entrega no DECISIONS do novo projeto.

## Projeto existente e atualizações

Faça primeiro dry-run. Conflito impede escrita no destino; seus arquivos permanecem intactos. Compare os templates de `assets/templates/` com README, AGENTS, estado e decisões existentes. Reconcilie a ordem de leitura, IDs, status e autorizações. Só então `--adopt-records` preserva esses registros e adiciona recursos ausentes. Esse parâmetro não integra texto automaticamente e não libera arquivos de outro agente.

Reexecução idêntica é idempotente e preserva personalizações dos registros. Runtime e skills divergentes são recusados. Para atualizar uma versão: gere um projeto temporário com a versão nova, compare, integre as mudanças necessárias sob tarefa autorizada e regenere conscientemente o inventário dos arquivos alterados após revisão. Não existe atualização destrutiva automática nem parâmetro `--force`. Preserve o manifesto anterior no histórico Git.

Na origem Technetalks, `ai-kit/` é o código-fonte e também o runtime (DEC-005): não existe `tools/ai-kit/`, e a workflow chama `ai-kit/scripts/bootstrap.py`. `.agents/skills/project-continuity/` e os templates aplicados na raiz (`.gitattributes`, `.gitignore`, `.editorconfig`, workflow) são cópias de distribuição; uma alteração de fonte deve atualizar essas cópias e os hashes correspondentes em `.ai-kit.json`. Confirme com `init . --name <nome> --dry-run`, que deve terminar sem conflito e com 0 arquivos novos. A CI detecta diferença de integridade, mas não avalia a intenção de um hash recalculado.

## Usar no dia a dia

1. Peça discovery com `grill-with-docs` para um problema ainda vago. Resultado esperado: problema, usuário, termos, limites, fontes e exemplos concretos.
2. Use `to-spec` para consolidar entendimento e `to-tickets` para dividir em incrementos entregáveis. Specs e tickets ficam no tracker local `.scratch/`.
3. Autorize escopo e plano uma vez; registre essa autorização com o ID. Prontidão de triagem não substitui essa decisão.
4. Implemente com verificações pertinentes ao comportamento. Use TDD nas fronteiras importantes; uma mudança simples de texto não precisa de uma suíte artificial.
5. Revise aderência ao pedido e padrões, corrija achados e valide os critérios da entrega. Visual e tamanho entram quando relevantes ao produto.
6. Atualize estado e passagem, faça commit/push quando autorizados e confira o resultado.

O objetivo de engenharia é reduzir ambiguidade e tornar o resultado verificável. Não é obrigatório invocar todas as skills em toda tarefa. A tabela de seleção está em [workflow](agents/workflow.md).

## Trocar de agente ou máquina

Peça ao agente atual que conclua a etapa, registre HANDOFF e libere os arquivos. No próximo assistente, use o prompt do README. Ele lê o repositório, confere alterações e assume apenas o escopo autorizado. Etapas já validadas não precisam ser repetidas sem mudança, falha ou dúvida concreta.

Entre máquinas (Windows, macOS, Linux), o remoto é o ponto de encontro: cada sessão começa com `git pull --ff-only` e termina com push conferido por `git ls-remote`. Regras em AGENTS.md; configuração de cada máquina e procedimento de conflito em [workflow](agents/workflow.md).

Para paralelismo, distribua tarefas independentes. Reserve arquivos disjuntos ou worktrees Git separados e indique um integrador dos registros. A lista de edição de CURRENT_STATE é coordenação, não trava automática. Se dois agentes parecem ativos no mesmo arquivo, resolva a posse antes de editar.

## Recuperar uma interrupção

IN_PROGRESS após interrupção não significa falha nem conclusão. Compare CURRENT_STATE, último WORKLOG, HANDOFF, `git status` e diff. Preserve o trabalho encontrado. Confirme se o agente anterior encerrou a edição; registre reconciliação e retome os passos pendentes.

Se o instalador foi interrompido, inspecione os arquivos criados antes de repetir. Sem `.ai-kit.json`, a instalação pode estar parcial; use dry-run, confira recursos e integre os registros antes de adotar. Uma validação estrutural aprovada não comprova que testes descritos foram executados.

Em push recusado, guarde commit/hash/branch e registre bloqueio de publicação. Resolva autenticação ou divergência do remote sem forçar sobrescrita do histórico. Confirme `git ls-remote origin refs/heads/<branch>` e compare ao HEAD antes de anunciar que outra máquina pode retomar pelo clone.

## Manutenção e limites

Execute `python -m unittest discover -s tests -v` nesta origem e `validate` no projeto. O workflow versionado executa as verificações no GitHub; sua execução remota só pode ser afirmada após observar o resultado lá.
O validador checa o contrato documentado e hashes. Não mede qualidade do produto, veracidade de texto, autorização humana ou exclusão simultânea de edição. Nenhum mecanismo aqui executa uma sessão de Claude/Copilot para comprovar descoberta; confira no cliente em uso.
O pacote fixa engineering e productivity, 25 skills; não importa misc ou in-progress. Atualizações upstream exigem nova revisão e lock. O bootstrap pessoal não intercepta a criação de toda pasta: você invoca uma skill ou um comando para cada novo projeto, sem repassar o protocolo inteiro.
