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
