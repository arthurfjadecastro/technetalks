# Fontes e compatibilidade

Conferidas em 2026-09-11. A disponibilidade no seletor depende da versão/configuração do cliente; instalação de arquivos é uma evidência diferente de execução da skill.

- [OpenAI: skills e descoberta local](https://learn.chatgpt.com/docs/build-skills): SKILL.md com name/description; diretórios `.agents/skills` no projeto e perfil pessoal; recursos auxiliares e descoberta automática. A documentação avisa que nomes duplicados podem aparecer no seletor.
- [Claude Code: skills](https://code.claude.com/docs/en/skills): diretórios próprios, invocação por nome e recursos relativos. Por isso existe um adaptador `.claude/skills/` para o pacote canônico.
- [GitHub: agent skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills): Copilot reconhece `.agents/skills`, `.claude/skills` e `.github/skills` no projeto; `.agents/skills` e `.copilot/skills` no usuário.
- [Matt Pocock: repositório oficial](https://github.com/mattpocock/skills): pacote de engenharia e produtividade. Esta entrega fixa o [commit 3cca18b](https://github.com/mattpocock/skills/tree/3cca18b368ae95cdbdebbff572ccafa662551015), com a licença preservada em `.agents/skills/MATTPOCOCK-LICENSE`. Os recursos upstream são copiados integralmente por skill.
- [Referência do usuário: tematicprod](https://github.com/arthurfjadecastro/tematicprod): consultado pelo clone local cujo remote corresponde a esse endereço. O acesso web público não foi usado como evidência de conteúdo. Aproveitado o protocolo fornecido pelo usuário e conferido no AGENTS local; regras de NT/PDF/Word permanecem fora do padrão genérico.

## Evidência local

Codex disponibilizou o plugin Matt Pocock 1.2.3 nesta sessão; o inventário Claude registrou a mesma versão em escopo user. Os nomes adicionais como grill-with-docs/to-spec/to-tickets existem no pacote, embora certas skills upstream sejam de invocação explícita e não apareçam no catálogo automático do modelo. O snapshot versionado permite leitura pelo caminho quando necessário.
