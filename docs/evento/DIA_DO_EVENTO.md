# TECHNE Talks · Encontro nº 02 — dia do evento

**Sábado, 17/10/2026 · AI-002 · Base: DEC-018 a DEC-022.** Folha de uma página para a manhã, o dia e o que vem depois. O que ainda está em aberto aparece marcado.

## Antes das 10h30 (Arthur e Henrique)

- [ ] **TV** ligada, com cabo HDMI e adaptador à mão. O projetor não foi retirado (DEC-021).
- [x] **Banner** montado, com o QR code do check-in **testado** (17/10). Lista do painel do forms.app como reserva.
- [ ] **Espaço:** mesas extras, ventiladores cruzados, planta dos 20 lugares, café e água. Mesas e ventiladores estão prontos desde 16/10.
- [x] **Formulário de feedback** criado, com QR code; **QR code do check-in testado**. O quiz do forms.app saiu da edição (DEC-022).
- [ ] **Roleta** aberta no navegador da TV, com a **lista do check-in importada** e organizadores e palestrantes desmarcados. Roteiro em [SORTEIO_E_FEEDBACK.md](SORTEIO_E_FEEDBACK.md). **Não usar "+ Adicionar pessoa" mais de uma vez** (defeito conhecido).
- [ ] **Quadro de vidro** e canetas para as dinâmicas. Papel e caneta para o exercício do Coatio, se ele preferir.
- [ ] **Junim Reis orientado:** fotos podem; **não gravar áudio nem vídeo da palestra do Jonathan**. Texto em [DIVULGACAO.md](DIVULGACAO.md).
- [x] **Coatio avisado de que a tela é a TV**, e os dois palestrantes lembrados de chegar até 12h45. Enviados (17/10, DEC-022).
- [ ] **Bom dia no grupo** com endereço e horário de chegada, hoje cedo. O lembrete final já saiu.

## O dia

| Horário | O que acontece | Quem |
|---|---|---|
| 10h30 | Chegada, check-in digital pelo QR do banner | Arthur + Henrique |
| 11h | Apresentação do dia e dinâmica do amassador de batatas | Arthur |
| 12h30 | Almoço | Henrique + Arthur |
| 13h30 | Teste da TV com o notebook do **Jonathan** | Arthur + Henrique |
| 13h45 | Teste da TV com o notebook do **Coatio**, com o HDMI | Arthur + Henrique |
| 14h | Palestra do **Jonathan Moura**, "O Estado da IA em 2026". Sem gravação | Jonathan |
| 14h45 | Intervalo e troca de equipamento | Arthur + Henrique |
| 15h | Palestra do **Matheus Coatio**, com demonstração do piloto e exercício de 2 minutos no fim | Coatio |
| 15h | **Retirar o lanche na padaria** (responsável a definir) | a definir |
| 15h45 | Lanche | Henrique |
| 16h15 | Mesa 360: sushi 15 min, apresentação do Henrique 10, roleta com quiz 10, fechamento 10 | Arthur + Henrique |
| 17h | Fim oficial. Despedida informal, com o QR code do formulário de feedback | Arthur + Henrique |

## Decisões ainda em aberto, para fechar durante o dia

1. **Tema da dinâmica do sushi** e a resposta da IA guardada, antes das 16h15. Roteiro em [DINAMICAS.md](DINAMICAS.md).
2. **Assunto da apresentação do Henrique** na Mesa 360 (10 minutos).
3. **Pergunta de abertura da Mesa 360.**
4. **Quem retira o lanche** perto das 15h.
5. **Dinâmica do amassador de batatas:** descrever em DINAMICAS.md quando fechar.

## Depois do evento

- **Hoje:** agradecimento no grupo, com o QR code do feedback. (Arthur pediu que o assistente traga este esquema quando ele voltar à conversa depois do evento.)
- **20/10:** reenviar o feedback a quem não respondeu; publicar fotos e materiais autorizados. O Jonathan autorizou fotos; o Coatio autorizou fotos e gravação, com divulgação pública **só mediante aprovação dele**.
- **24/10:** fechar o balanço, tudo dividido **50/50** (DEC-020), com os comprovantes: banner R$ 69,90, 4 canecas R$ 209,00, almoço, lanche, bebidas e café; o Pix recebido abate o custo (DEC-021). Preencher "Pago por" na aba Orçamento. Registrar os aprendizados de comunicação da edição em [COMUNICACAO.md](COMUNICACAO.md).

## Correção proposta para a roleta (opcional)

No arquivo `roleta/TECHNE_Talks_Roleta_Sorteio.html`, a função do botão "+ Adicionar pessoa" faz `people.push({name,checked:true,out:false})`, sem `id`. A roleta localiza a pessoa sorteada por `p.id===selectedId`, e vários nomes sem `id` coincidem com o primeiro da lista. A correção é incluir um `id` único:

```
people.push({id:Date.now()+Math.random(),name,checked:true,out:false})
```

Não foi aplicada: o arquivo é de Arthur e vai ao ar hoje. Sem a correção, importe a lista pelo arquivo e use o botão no máximo uma vez.

## Fica para depois do evento

- Quem pagou canecas, banner, lanche e almoço ("Pago por" na aba Orçamento) e quem recebe o Pix.
- Valores reais de almoço, lanche, bebidas e café, que ainda são previsões.
