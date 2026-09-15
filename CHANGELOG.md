# Changelog

## Não publicado — AI-002 planejamento do evento

- Base confirmada do encontro de 17/10/2026 registrada em DEC-006 e DEC-007; vocabulário do evento em CONTEXT.
- `docs/evento/`: plano mestre, pauta da reunião de 12/09, questionário dos palestrantes, referências de boas práticas e guia de uso.
- Planilha operacional `outputs/AI-002/planejamento-evento.xlsx` com premissas, 13 marcos, 60 atividades com dependências, orçamento com limite/cotação/gasto e roteiro do dia; gerador em `scripts/evento/`.
- Resultado da reunião de 12/09 em DEC-009 e na ata: chegada 10h30, início 11h, palestras à tarde (VIRUS 14h, Coatio 15h), 11 a 20 pessoas, R$ 500 como previsão com balanço posterior e comida comprada só depois de 10/10.
- Planilha simplificada para 4 abas (checklist de 32 tarefas, roteiro, orçamento com balanço entre os organizadores, cardápio por cenário), gerada por `scripts/evento/build_planilha.py`; o gerador Node dependente do Codex e o guia da reunião foram removidos.
- Novos textos: grupo do WhatsApp, 4 flyers, lembrete e convite do fotógrafo (`DIVULGACAO.md`); quiz do sorteio e formulário de feedback (`SORTEIO_E_FEEDBACK.md`). Plano mestre e questionário atualizados.
- Formulários online dos palestrantes e da inscrição (forms.app) documentados em `FORMULARIOS.md`, com etapas, revisão e status "aguardando aprovação" (DEC-012); link de inscrição nos textos de divulgação; Checklist com 38 tarefas e o status "Aguardando aprovação".
- Nome público TECHNE Talks · Encontro nº 02 nos textos; material de apoio dos palestrantes até 21/09 e ensaio no começo de outubro; pergunta de restrição alimentar e limite de 20 inscrições (DEC-013); Checklist com 40 tarefas.
- Inscrição simplificada para nome, WhatsApp e e-mail, com conferência da versão publicada; backlog do formulário de feedback e relacionamento; restrição alimentar adiada para as próximas edições (DEC-014).
- Lançamento do encontro em 14/09, uma semana antes do previsto (DEC-015): grupo do WhatsApp renomeado para `TΞKHNE Talks - 2ª Edição`, com logo e descrição novas e mensagens restritas a admins; peças de convite e de programação publicadas; inscrições abertas; questionários enviados a VIRUS e Coatio. Endereço completo passou a ser público na arte.
- `docs/evento/COMUNICACAO.md`: passo a passo de comunicação reutilizável — ordem padrão das mensagens em seis fases, gatilho, canal e responsável de cada uma, radar do que ainda falta comunicar e o que trocar em outra edição.
- Nova aba **Comunicação** na planilha, com 34 peças da preparação ao pós-evento; as mensagens saíram do Checklist, que ficou com 32 tarefas operacionais. Restaurada a linha de acerto do Orçamento, apagada em edição manual.
- Textos novos: descrição do grupo, mensagem de lançamento, encerramento das inscrições, reabertura do grupo, confirmação de presença, bom dia do evento e as quatro mensagens privadas aos palestrantes.

## 1.1.0 — Várias máquinas e assistentes (AI-004)

- Protocolo **Máquinas e sincronização** em AGENTS.md: pull `--ff-only` no início, push conferido ao pausar, sem `push --force`, binários editados por uma máquina de cada vez, scripts portáveis entre Windows e macOS.
- `docs/agents/workflow.md`: configuração de cada máquina (identidade, `pull.rebase`, credenciais, Command Line Tools no macOS) e procedimento de conflito por tipo de registro.
- `.gitattributes` declara Office e imagens como binários e soma entradas de WORKLOG no merge (`merge=union`); `.gitignore` cobre `.DS_Store`, `Thumbs.db`, travas do Office e `node_modules/`; novo `.editorconfig` (UTF-8, LF).
- Correção: a workflow de continuidade chamava `tools/ai-kit/` também no modo auto-hospedado, onde o runtime fica em `ai-kit/`, e falhava em todo push desta origem. Os templates agora recebem o caminho real do runtime, com teste.
- Testes do kit também em macOS na CI.

## 1.0.0 — Base de engenharia com IA

- Kit portável para iniciar projetos com protocolo de continuidade compartilhado.
- Templates para estado, backlog, decisões, histórico, passagem e instruções de três assistentes.
- Skills próprias de bootstrap e continuidade; pacote Matt Pocock 1.2.3 fixado e verificável.
- CLI de instalação, diagnóstico e validação; testes de integração e pipeline GitHub Actions.
- Documentação de descoberta, especificação, tickets, revisão, recuperação e manutenção.
- Repositório passa a usar o próprio kit: instruções dos três assistentes, contexto de domínio, skills instaladas e inventário verificável.
- Instalação em destino que já contém o kit não duplica o runtime e o mantém editável (DEC-005).

Evidências de instalação e publicação ficam em WORKLOG e HANDOFF.
