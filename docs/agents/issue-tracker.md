# Issue tracker: Local Markdown

Specs e tickets vivem em `.scratch/<feature>/spec.md` e `.scratch/<feature>/issues/<NN>-<slug>.md`. Essa pasta é versionada; não é cache.
Cada ticket referencia `Backlog-ID: AI-001`, seu aceite e `Blocked by:`. BACKLOG mantém o status de execução canônico. `Status:` do ticket armazena prontidão de triagem conforme triage-labels; não replique status de execução divergente.
Quando uma skill pede “publicar no tracker”, escreva o arquivo local. Comentários recebem append em `## Comments`. Nenhum tracker externo foi conectado ou autorizado.
Mapas de wayfinding ficam em `.scratch/<effort>/map.md`, com filhos em `issues/`. Claimed/resolved são estados de exploração locais; sincronize a conclusão real da tarefa no BACKLOG sem tratar resolved como autorização.
