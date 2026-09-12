---
name: project-bootstrap
description: Preparar um projeto novo ou existente com o padrão reutilizável de continuidade entre Codex, Claude e Copilot, incluindo templates e skills Matt Pocock.
---

# Preparar um projeto

Use o CLI desta pasta; todos os recursos necessários acompanham a skill.

1. Localize o destino solicitado e leia as instruções e registros já existentes. Confirme se outro agente ainda edita o destino. Preserve alterações e autorizações locais.
2. Execute `python <esta-pasta>/scripts/bootstrap.py init <destino> --name <nome> --dry-run`. O padrão inclui Matt Pocock fixado no lock; para inspeção sem rede use o snapshot indicado em `--matt-source`.
3. Dentro do escopo autorizado, execute o mesmo comando sem `--dry-run`. O instalador recusa conflitos antes de escrever. Em projeto existente, compare os templates e integre as instruções; `--adopt-records` só serve após essa reconciliação. Nunca o use para ignorar diferenças ainda não examinadas.
4. Execute `validate <destino>` e `doctor <destino>` pelo mesmo CLI. Informe recursos instalados, testes realmente executados e limitações de descoberta por cliente.

O bootstrap autoriza apenas a configuração solicitada. O novo projeto precisa de decisões próprias sobre produto e destino de publicação. O instalador não faz commit/push nem instala hooks. Não copie autorizações, IDs de decisões ou regras de documentos do projeto de origem.

Para disponibilizar este mecanismo nos próximos projetos, use `install-global --home <diretório-do-usuário>` quando a instalação pessoal estiver autorizada. O pacote é autocontido e recusa sobrescrever versões diferentes. Atualizações exigem comparar e integrar a cópia instalada.
