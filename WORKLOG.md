# Histórico de trabalho

## 2026-09-11T20:45:00-03:00 | AI-001 | Início e escopo

Pedido anexado lido. Technetalks sem commits e sem instruções anteriores, exceto configuração local de permissões Claude, preservada e ignorada pelo Git. Primeiras escritas: CURRENT_STATE e BACKLOG. Autorização do usuário persistida em DEC-001. Clone local do tematicprod e instalações pessoais Matt Pocock 1.2.3 inspecionados; nenhuma alteração na referência ou caches.

## 2026-09-11T20:59:00-03:00 | AI-001 | Bootstrap e primeira validação

Implementados templates portáveis, protocolo compartilhado, skills project-bootstrap/project-continuity e CLI Python com preservação de arquivos e preflight. Doze testes passaram após correções verificadas de parsing e codificação Windows. Instalação real pela rede criou 122 arquivos em diretório temporário com validação aprovada; 25 skills e 75 arquivos Matt Pocock verificados contra o commit oficial. Diferença de CRLF no cache Windows identificada; lock usa bytes Git oficiais. Avaliação independente das skills confirmou tratamento de posse, conflitos e push. Revisão de código ainda em andamento; instalação pessoal e publicação ainda não concluídas.

## 2026-09-12T02:52:34-03:00 | AI-001 | Revisão e auto-aplicação

Revisão técnica do kit executada por Claude Code após a passagem registrada pelo Codex. Aprovada com três achados. A1: `validate` reprovava o próprio repositório por ausência dos adaptadores e do manifesto, e o fluxo de integração contínua executa exatamente esse comando; resolvido pela auto-aplicação. A2: a auto-aplicação duplicaria o runtime em `tools/ai-kit`, criando duas cópias vigiadas por um único inventário; corrigido pelo reconhecimento de destino auto-hospedado, registrado em DEC-005 e coberto por teste novo. A3: não há regeneração de inventário após alteração autorizada de recursos instalados; extraído para AI-003 por não bloquear a entrega.

Validações executadas: 13 testes por unittest aprovados em Python 3.14 no Windows; `validate` e `doctor` aprovados neste repositório; instalação real criou 87 arquivos, sem duplicação do runtime, preservando os registros existentes por `--adopt-records`. Vinte e seis skills disponíveis em `.agents/skills`, com Matt Pocock conferido contra o commit fixado. Limitações: matriz Linux e Python 3.10 ainda não exercitada localmente, apenas pela integração contínua; descoberta das skills pelos seletores de Codex e Copilot não foi verificada, pois os executáveis não estão presentes nesta máquina; instalação pessoal e publicação seguem pendentes.

## 2026-09-12T03:10:00-03:00 | AI-001 | Publicação e instalação pessoal

Commit inicial com 131 arquivos publicado em `origin/main`, com a branch renomeada de `master` para `main` antes do envio. Resultado conferido no remoto: a referência publicada coincide com o commit local. Antes do commit, um arquivo ainda gravado com quebras de linha do Windows foi normalizado, para que os bytes em disco coincidam com os versionados e os inventários permaneçam comparáveis entre máquinas.

Bootstrap instalado no perfil pessoal em vinte e sete arquivos, sem sobrescrever nada, e exercitado ponta a ponta: um projeto descartável foi criado a partir da instalação pessoal, recebeu cento e vinte e dois arquivos, passou na validação pelo runtime local e trouxe as vinte e seis skills esperadas. O projeto de teste foi removido em seguida. AI-001 encerrada; AI-002 e AI-003 continuam sem autorização de escopo.

## 2026-09-12T13:09:00-03:00 | AI-002 | Retomada e descoberta do evento

Lidos registros na ordem de AGENTS e novo anexo de organização do Encontro TI #02. Conferido encerramento de AI-001 em b38ce1d, árvore limpa antes de AI-002 e liberação de arquivos pelo Claude. Primeiras escritas da tarefa atualizaram CURRENT_STATE e BACKLOG. AI-002 classificada P0 e autorizada por DEC-006; as interrupções da interface de perguntas não encerraram nem concluíram a tarefa.

Respostas do usuário persistidas em DEC-007: 17/10/2026, 10h30–17h, almoço 12h30, lanche, Gama/DF, 16–20 pessoas totais, gratuito, teto R$ 500 dividido igualmente, preparo sem mão de obra cobrada, dois palestrantes confirmados e vinte cadeiras disponíveis. Visita técnica será hoje. Autorizada elaboração do questionário dos palestrantes. Pesquisa e planilha delegadas em arquivos separados, registros comuns mantidos pelo coordenador. Planejamento e validação ainda em execução; nenhuma compra, convite ou formulário enviado.

## 2026-09-12T13:45:00-03:00 | AI-002 | Troca de agente, planilha e validação

Claude Code assumiu após o Codex parar por limite de uso às 13h18 sem liberar arquivos. Reconciliação: registros, DEC-006/007, CONTEXT, README e os cinco documentos de `docs/evento/` estavam completos e não commitados; nada foi reescrito. A planilha referenciada no README não existia: o gerador `scripts/evento/build-workbook.mjs` estava escrito e nunca fora executado. Ele usa `@oai/artifact-tool` por uma junction `node_modules` para o runtime local do Codex, ignorada pelo Git.

Executado com Node 24 do sistema. Defeito encontrado e corrigido: o motor de cálculo trata `0=""` como verdadeiro, então as oito atividades do dia do evento (D+0) ficavam sem prazo e a mão de obra de R$ 0 confirmada aparecia como "Sem cotação", contrariando a regra branco ≠ zero. Testes trocados por `ISNUMBER`, com três asserções novas que cobrem esses casos. Também foram alinhados o moderador da Mesa 360 como "a definir" nas duas abas e a largura de uma coluna do orçamento.

Validações executadas: asserções do gerador (grafo de dependências sem ciclos, soma dos limites igual a R$ 500, R$ 22,50 por pessoa com reserva, almoço 12h30 e fim 17h, branco ≠ zero, recálculo por mutação); busca por erros de fórmula sem ocorrências; conferência independente por openpyxl dos valores em cache: marcos M01–M13 idênticos ao plano mestre, roteiro de 390 minutos, 60 atividades com dependências válidas e nenhuma sem prazo; ausência de e-mail, telefone, endereço e nomes completos na planilha; prévias renderizadas inspecionadas; links relativos de README e `docs/evento/` sem quebras; `git diff --check` limpo; pacote de 109 KB. Limitações: o gerador só roda com o runtime do Codex presente nesta máquina; em outra, edite o `.xlsx` diretamente. A abertura no Excel não foi exercitada. O resultado da reunião de 12/09 não foi registrado. Nada foi commitado ou publicado.
