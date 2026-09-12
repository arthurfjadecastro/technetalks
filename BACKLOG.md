# Backlog

Status: `[ ] NOT_STARTED`, `[~] IN_PROGRESS`, `[?] BLOCKED`, `[R] READY_FOR_REVIEW`, `[x] DONE`.

## [~] AI-001 — Kit reutilizável de engenharia com IA

- Status: IN_PROGRESS
- Escopo autorizado: protocolo compartilhado, adaptadores Codex/Claude/Copilot, templates, skills genéricas, pacote Matt Pocock padrão, bootstrap, validação, documentação e commit/push para o origin existente.
- Aceite: bootstrap preserva arquivos existentes; projeto gerado passa validação; skills com referências completas; testes de idempotência e conflitos; retomada documentada; publicação verificada ou bloqueio registrado com precisão.
- Riscos: diferenças de descoberta entre clientes; permissões para instalação global e Git; indisponibilidade de rede.
- Estimativa: uma sessão de implementação e revisão; sem estimativa de produto, ainda não especificado.
- Dependências: nenhuma.
- Revisão 2026-09-12 (Claude Code): aprovada com correções. A1 — `validate .` falha sem AGENTS.md, CLAUDE.md, copilot-instructions.md e manifesto, e o CI executa esse comando; resolvido pela auto-aplicação. A2 — auto-aplicação duplicaria o runtime em `tools/ai-kit`; corrigido por auto-hospedagem (DEC-005). A3 — sem regeneração de inventário após editar assets; extraído para AI-003.

## [ ] AI-002 — Descobrir o produto Technetalks

- Status: NOT_STARTED
- Escopo: levantar público, problema, requisitos e primeiro incremento do produto.
- Autorização: pendente; não iniciar por inferência de AI-001 concluída.
- Aceite: escopo e plano aprovados pelo usuário.

## [ ] AI-003 — Regenerar inventário do kit

- Status: NOT_STARTED
- Escopo: comando do CLI que recalcule `.ai-kit.json` após alteração autorizada de assets instalados, hoje só possível reinstalando em destino vazio.
- Autorização: pendente.
- Aceite: inventário regenerado exige diferença revisada e não aceita alteração silenciosa de skills fixadas.
- Origem: achado A3 da revisão de AI-001.
