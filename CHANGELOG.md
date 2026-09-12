# Changelog

## Não publicado — AI-002 planejamento do evento

- Base confirmada do encontro de 17/10/2026 registrada em DEC-006 e DEC-007; vocabulário do evento em CONTEXT.
- `docs/evento/`: plano mestre, pauta da reunião de 12/09, questionário dos palestrantes, referências de boas práticas e guia de uso.
- Planilha operacional `outputs/AI-002/planejamento-evento.xlsx` com premissas, 13 marcos, 60 atividades com dependências, orçamento com limite/cotação/gasto e roteiro do dia; gerador em `scripts/evento/`.

## 1.0.0 — Base de engenharia com IA

- Kit portável para iniciar projetos com protocolo de continuidade compartilhado.
- Templates para estado, backlog, decisões, histórico, passagem e instruções de três assistentes.
- Skills próprias de bootstrap e continuidade; pacote Matt Pocock 1.2.3 fixado e verificável.
- CLI de instalação, diagnóstico e validação; testes de integração e pipeline GitHub Actions.
- Documentação de descoberta, especificação, tickets, revisão, recuperação e manutenção.
- Repositório passa a usar o próprio kit: instruções dos três assistentes, contexto de domínio, skills instaladas e inventário verificável.
- Instalação em destino que já contém o kit não duplica o runtime e o mantém editável (DEC-005).

Evidências de instalação e publicação ficam em WORKLOG e HANDOFF.
