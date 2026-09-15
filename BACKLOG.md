# Backlog

Status: `[ ] NOT_STARTED`, `[~] IN_PROGRESS`, `[?] BLOCKED`, `[R] READY_FOR_REVIEW`, `[x] DONE`.

## [x] AI-001 — Kit reutilizável de engenharia com IA

- Status: DONE
- Escopo autorizado: protocolo compartilhado, adaptadores Codex/Claude/Copilot, templates, skills genéricas, pacote Matt Pocock padrão, bootstrap, validação, documentação e commit/push para o origin existente.
- Aceite: bootstrap preserva arquivos existentes; projeto gerado passa validação; skills com referências completas; testes de idempotência e conflitos; retomada documentada; publicação verificada ou bloqueio registrado com precisão.
- Riscos: diferenças de descoberta entre clientes; permissões para instalação global e Git; indisponibilidade de rede.
- Estimativa: uma sessão de implementação e revisão; sem estimativa de produto, ainda não especificado.
- Dependências: nenhuma.
- Revisão 2026-09-12 (Claude Code): aprovada com correções. A1 — `validate .` falha sem AGENTS.md, CLAUDE.md, copilot-instructions.md e manifesto, e o CI executa esse comando; resolvido pela auto-aplicação. A2 — auto-aplicação duplicaria o runtime em `tools/ai-kit`; corrigido por auto-hospedagem (DEC-005). A3 — sem regeneração de inventário após editar assets; extraído para AI-003.

## [R] AI-002 — Descobrir e estruturar a organização do evento Technetalks

- Status: READY_FOR_REVIEW
- Prioridade: P0; primeiro item aberto na ordem existente, agora autorizado pelo pedido de 2026-09-12.
- Escopo: organizar o evento a partir do anexo; distinguir fatos/propostas/pendências; preparar plano mestre, cronograma macro, atividades micro, responsáveis sugeridos, dependências, riscos e perguntas para fechar as decisões.
- Autorização: usuário autorizou entendimento, pesquisa, questionamento e planejamento nesta sessão. Não inclui compras, contratação, envio de convites ou publicação de dados de participantes.
- Aceite: planejamento rastreável ao anexo, cronograma datado com premissas explícitas, checklist operacional editável, validação de coerência/prazos/tamanho; aprovação do usuário para consolidar decisões ainda pendentes.
- Estimativa: pacote documental e planilha abaixo de 500 KB; sem mídia.
- Riscos: orçamento de R$ 500 ainda sem cotações; nome do responsável pelo preparo, menu, equipamentos e equipe de apoio pendentes; visita técnica será em 12/09.
- Dependências: decisões da reunião e respostas ao questionário dos palestrantes para fixar a programação executiva; cronograma e regras de palestra são propostas para revisão.
- Base confirmada: DEC-007; 16–20 pessoas totais, 20 cadeiras, evento gratuito de 10h30–17h, almoço 12h30, dois palestrantes confirmados.
- Entrega 2026-09-12 (Codex + Claude Code): plano mestre, pauta da reunião, questionário, referências e planilha `outputs/AI-002/planejamento-evento.xlsx` (13 marcos, 60 atividades EVT, orçamento, roteiro). Validada e publicada em `origin/main` (8d06d2e, DEC-008); aguarda revisão de Arthur e Henrique e o resultado da reunião de 12/09.
- Retomada 2026-09-13 (Claude Code): ata da reunião de 12/09 recebida e salva em `docs/evento/ATA_REUNIAO_12-09.md`. Volta a IN_PROGRESS para esclarecer divergências, registrar DEC-009, atualizar o plano e simplificar a planilha a pedido de Arthur.
- Entrega 2026-09-14 (Claude Code): DEC-009; plano mestre e questionário no novo roteiro; textos de divulgação, quiz e feedback; planilha reduzida a 4 abas e 32 tarefas (12 KB). Aguarda revisão dos organizadores e o preenchimento dos responsáveis "A definir".
- Gestão contínua (DEC-012, desde 14/09): AI-002 cobre a gestão até o fechamento do evento; cada rodada termina em READY_FOR_REVIEW. Rodada de 14/09: formulários online documentados em `docs/evento/FORMULARIOS.md`, aguardando aprovação; DEC-013 com nome público, prazos dos palestrantes, responsáveis e limite de 20; DEC-014 com inscrição de três campos e backlog de feedback e relacionamento; Checklist com 40 tarefas.
- Lançamento (DEC-015, 14/09): encontro anunciado no grupo do WhatsApp com grupo renomeado, descrição e logo novas, peças de convite e programação e inscrições abertas; questionários enviados aos palestrantes. Passo a passo de comunicação reutilizável em `docs/evento/COMUNICACAO.md` e nova aba Comunicação na planilha, com 34 peças; Checklist reduzido a 32 tarefas, sem as mensagens, que migraram para a nova aba. Prazos dos palestrantes revistos e propostos para aceite.
- Confirmações (DEC-016, 15/09): nome do grupo padronizado com C; prazos dos palestrantes confirmados; formulário de inscrição fica como está, com vagas e encerramento controlados à mão por Arthur (tarefas 36 e 41 "Não se aplica"); reabertura do grupo na noite de 16/09; Arthur confirmado como responsável pela divulgação.

## [x] AI-004 — Padronizar o trabalho entre assistentes e máquinas

- Status: DONE
- Escopo: práticas para Codex, Copilot e Claude Code em Windows e macOS com pull/push alternados: normalização de texto e binários, ignores de sistema/Office, protocolo de sincronização e conflitos, correção da CI auto-hospedada, macOS na matriz de testes e limpeza dos resíduos locais do Codex.
- Autorização: DEC-010, incluindo commit/push em `origin/main`.
- Aceite: kit e repositório com os mesmos padrões; CI verde nas duas workflows com macOS; testes e `validate` aprovados; merge simultâneo de WORKLOG sem conflito demonstrado; passos de configuração de cada máquina documentados.
- Riscos: alterar templates muda o inventário (sem comando de regeneração, AI-003); runner macOS com Python 3.10; configuração do Mac só pode ser feita nele.
- Estimativa: uma sessão; alterações de texto e um ajuste pequeno no CLI com teste.
- Dependências: nenhuma.
- Entrega 2026-09-14 (Claude Code): kit 1.1.0 publicado em b2062dd; CI verde nas duas workflows, com macOS. Configuração local do Mac documentada para ser aplicada nele.

## [ ] AI-003 — Regenerar inventário do kit

- Status: NOT_STARTED
- Escopo: comando do CLI que recalcule `.ai-kit.json` após alteração autorizada de assets instalados, hoje só possível reinstalando em destino vazio.
- Autorização: pendente.
- Aceite: inventário regenerado exige diferença revisada e não aceita alteração silenciosa de skills fixadas.
- Origem: achado A3 da revisão de AI-001.
