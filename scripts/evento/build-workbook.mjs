import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

// `node scripts/evento/build-workbook.mjs` (Node 24 validated). node_modules is a local junction to the
// Codex runtime dependencies (@oai/artifact-tool), ignored by Git; without it, edit the .xlsx directly.
const here = path.dirname(fileURLToPath(import.meta.url));
const output = path.resolve(here, '../../outputs/AI-002/planejamento-evento.xlsx');
const previewDir = path.join(process.env.TEMP || here, 'technetalks-ai002-previews');
const wb = Workbook.create();
const [v,m,a,b,d] = ['Visão','Macro','Atividades','Orçamento','Dia'].map(n => wb.worksheets.add(n));
const navy = '#24364B', light = '#EEF2F6', amber = '#FFF2CC';
const status = ['Não iniciado','Em andamento','Concluído','Bloqueado','Não se aplica'];
const money = '"R$ "#,##0.00;("R$ "#,##0.00);"R$ "0.00';
const date = 'dd/mm/yyyy';
const put = (s,c,x) => s.getRange(c).values = [[x]];
const formula = (s,c,x) => s.getRange(c).formulas = [[x]];
const width = (s,c,n,last=100) => s.getRange(`${c}1:${c}${last}`).format.columnWidth = n;
const input = (s,r) => { s.getRange(r).format.fill = amber; s.getRange(r).format.font.color = '#2056A1'; };
const header = (s,r) => { s.getRange(r).format = {fill:navy,font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'},horizontalAlignment:'center',verticalAlignment:'center',wrapText:true,rowHeight:32}; };
function base(s,last,col,title){
  s.showGridLines=false;
  s.getRange(`A1:${col}${last}`).format={font:{name:'Arial',size:10,color:'#202B36'},verticalAlignment:'center',rowHeight:24};
  put(s,'A2',title); s.getRange('A2').format.font={name:'Arial',size:15,bold:true,color:navy};
  s.getRange(`A3:${col}3`).format.borders={bottom:{style:'thin',color:'#AAB9C7'}};
}
function table(s,range,name){const t=s.tables.add(range,true,name);t.showFilterButton=true;t.style='TableStyleMedium2';return t;}
function statusValidation(s,range){s.getRange(range).dataValidation={rule:{type:'list',values:status}};input(s,range);}
function alertCF(s,range){
 for(const [text,fill,color] of [['Atrasado','#FCE4D6','#9C281D'],['Bloqueado','#FCE4D6','#9C281D'],['Dependência pendente','#FFF2CC','#8A5E00'],['Hoje','#FFF2CC','#8A5E00'],['Sem responsável','#FFF2CC','#8A5E00'],['Falta evidência','#FFF2CC','#8A5E00']])
  s.getRange(range).conditionalFormats.add('containsText',{text,format:{fill,font:{color,bold:true}}});
}

base(v,47,'D','Technetalks — planejamento do evento');v.tabColor=navy;
width(v,'A',31,47);width(v,'B',25,47);width(v,'C',23,47);width(v,'D',72,47);
put(v,'A4','Amarelo: campo editável. Datas e responsáveis operacionais são propostas até aceite.');
v.getRange('A5:D5').values=[['Premissa','Valor','Situação','Uso e decisão pendente']];header(v,'A5:D5');
const settings=[
 ['Data do evento',new Date('2026-10-17T00:00:00Z'),'Confirmada','Alterar somente após decisão dos organizadores. Recalcula os prazos.'],
 ['Data de referência',new Date('2026-09-12T00:00:00Z'),'Base da revisão','Atualizar a cada revisão para calcular atrasos. Não usa a data do computador.'],
 ['Início do público',10.5/24,'Confirmado','Recepção a partir de 10h30.'],
 ['Encerramento',17/24,'Confirmado','Encerramento do público às 17h.'],
 ['Início do almoço',12.5/24,'Confirmado','Lanche também incluído.'],
 ['Público mínimo total',16,'Confirmado','Organizadores, palestrantes e apoio entram na mesma contagem.'],
 ['Público máximo total',20,'Confirmado','Não representa 20 convidados além da equipe.'],
 ['Pessoas para planejamento',20,'Base proposta','Usar total reconfirmado para compras e refeições.'],
 ['Cadeiras disponíveis',20,'Confirmadas','Disponíveis e em condições de uso, segundo Arthur.'],
 ['Teto total',500,'Confirmado','Aportes declarados. Recebimento ainda precisa de confirmação.'],
 ['Reserva (% do teto)',0.10,'Proposta','Só utilizar por decisão de Arthur e Henrique.'],
 ['Aporte declarado de Arthur',250,'Confirmado','Valor recebido é registrado na aba Orçamento.'],
 ['Aporte declarado de Henrique',250,'Confirmado','Valor recebido é registrado na aba Orçamento.'],
 ['Local','Casa de Henrique, Gama/DF','Confirmado','Orientação completa compartilhada privadamente pelos organizadores.'],
 ['Participação','Gratuita','Confirmada','Sem receita prevista com inscrição.'],
 ['Mão de obra do preparo',0,'Sem cobrança confirmada','Nome, capacidade, menu, transporte e utensílios ainda pendentes.'],
];
v.getRange('A6:D21').values=settings;input(v,'B6:B21');
v.getRange('B6:B7').setNumberFormat(date);v.getRange('B8:B10').setNumberFormat('hh:mm');
v.getRange('B15').setNumberFormat(money);v.getRange('B16').setNumberFormat('0%');v.getRange('B17:B18').setNumberFormat(money);v.getRange('B21').setNumberFormat(money);
v.getRange('D6:D21').format.wrapText=true;v.getRange('A6:D21').format.rowHeight=36;
v.dataValidations.add({range:'B11:B14',rule:{type:'whole',operator:'between',formula1:1,formula2:100}});
v.dataValidations.add({range:'B16',rule:{type:'decimal',operator:'between',formula1:0,formula2:1}});
put(v,'A23','Fonte das confirmações: Arthur, em 12/09/2026, registradas em DEC-007.');
put(v,'A24','Plano mestre e anexo “O que eu considero prioridade agora” orientam as propostas.');
v.getRange('A26:D26').values=[['Decisão a fechar','Responsável sugerido','Situação editável','Critério para fechar']];header(v,'A26:D26');
const decisions=[
 ['Resultado da visita de 12/09','Arthur + Henrique','Pendente','Registrar layout, circulação, cobertura e infraestrutura realmente verificados.'],
 ['Nome público e desempate','Arthur + Henrique','Pendente','Acordar nome do encontro e como resolver divergências.'],
 ['Limites por categoria e reserva','Arthur + Henrique','Pendente','Aprovar ou revisar a proposta de R$ 500 da aba Orçamento.'],
 ['Pessoa do preparo e menu','Henrique','Pendente','Identificar pessoa, capacidade para até 20 e logística sem cobrança de mão de obra.'],
 ['VIRUS: título e formato','Arthur + VIRUS','Pendente','Presença confirmada. Coletar resumo de IA no dia a dia e esclarecer “uso concorrente”.'],
 ['Coatio: título e demonstração','Arthur + Coatio','Pendente','Presença confirmada. Coletar resumo de design thinking/UI/UX e demo CARANGA em piloto.'],
 ['Regras e roteiro das falas','Arthur + Henrique','Pendente','Proposta: 25 min de conteúdo + 15 min de perguntas + 5 min de troca.'],
 ['Recepção, técnica e serviço','Arthur + Henrique','Pendente','Designar apoio com aceite. Evitar concentrar tarefas simultâneas nos anfitriões.'],
 ['Prazo real da alimentação','Henrique + preparo','Pendente','Validar até 20/09. Antecipar reconfirmação se 12/10 for tarde para o menu/fornecedor.'],
 ['Foto e uso de materiais','Arthur + Henrique','Pendente','Definir responsável e combinações com palestrantes e público. Foto de grupo opcional.'],
 ['Mesa 360 e dinâmica','Arthur + Henrique','Pendente','Aprovar mediação, pergunta inicial e tempos sem compras opcionais.'],
 ['Banner, brinde e live','Arthur + Henrique','Sem verba aprovada','P2. Somente com verba, responsável e aprovação explícitos.'],
];v.getRange('A27:D38').values=decisions;
input(v,'C27:C38');v.getRange('C27:C38').dataValidation={rule:{type:'list',values:['Pendente','Aprovado','Revisar','Dispensado','Sem verba aprovada']}};
v.getRange('A27:D38').format.wrapText=true;v.getRange('A27:D38').format.rowHeight=45;
put(v,'A40','Controle das atividades');v.getRange('A40').format.font.bold=true;
put(v,'A41','Atividades concluídas');formula(v,'B41','=COUNTIFS(Atividades!N6:N65,"Concluído")');
put(v,'A42','Atividades atrasadas');formula(v,'B42','=COUNTIFS(Atividades!O6:O65,"Atrasado")');
put(v,'A43','Atividades bloqueadas');formula(v,'B43','=COUNTIFS(Atividades!N6:N65,"Bloqueado")');
put(v,'A45','Na aba Atividades, filtre P0 e preencha responsável confirmado, status e evidência.');
put(v,'A46','Não inserir nomes, contatos ou restrições dos participantes nesta planilha compartilhável.');
v.freezePanes.freezeRows(5);

// ID, priority, front, action, suggested owner, start/day offset, due/day offset, predecessors, acceptance.
const tasks=[
 ['P0','Decisões','Realizar visita técnica e registrar layout','Arthur + Henrique',-35,-35,[],'Layout com circulação, área coberta, cozinha e ponto das falas registrado.'],
 ['P0','Decisões','Acordar desempate e nome público','Arthur + Henrique',-35,-33,[1],'Nome e regra de decisão conjunta registrados.'],
 ['P0','Orçamento','Aprovar limites por categoria e reserva','Arthur + Henrique',-35,-33,[1],'Distribuição de R$ 500 aceita ou revisada sem ultrapassar o teto.'],
 ['P0','Alimentação','Identificar pessoa do preparo e confirmar capacidade','Henrique',-35,-33,[1],'Pessoa identificada, aceite e capacidade para 20 refeições confirmados.'],
 ['P0','Equipe','Definir donos de recepção, técnica e serviço','Arthur + Henrique',-35,-33,[1],'Pessoas aceitam frentes e horários. Todas entram no limite total.'],
 ['P0','Público','Fechar regra do total e limite de confirmação','Arthur + Henrique',-35,-33,[1],'Limite de 20 inclui anfitriões, palestrantes, preparo e apoio presente.'],
 ['P0','Orçamento','Confirmar recebimento dos dois aportes','Arthur',-35,-27,[3],'Entradas recebidas e comprovadas antes de comprometer pagamentos.'],
 ['P0','Conteúdo','Revisar questionário e regras das palestras','Arthur + Henrique',-35,-33,[1],'Perguntas e proposta de tempos aprovadas para encaminhamento pelos organizadores.'],
 ['P0','Conteúdo','Encaminhar questionário aos dois palestrantes','Arthur',-33,-32,[8],'Envio realizado pelo organizador e prazo de resposta combinado.'],
 ['P0','Conteúdo','Receber respostas de VIRUS','Arthur + VIRUS',-32,-29,[9],'Título, resumo, necessidade técnica e sentido de “uso concorrente” esclarecidos.'],
 ['P0','Conteúdo','Receber respostas de Coatio','Arthur + Coatio',-32,-29,[9],'Título, resumo, demo CARANGA, necessidades e alternativa offline informados.'],
 ['P0','Conteúdo','Validar sinopses e duração das duas falas','Arthur',-29,-27,[10,11],'Ambos aceitam sinopse, 25 min de conteúdo/demo e 15 min de perguntas.'],
 ['P0','Alimentação','Definir menu, rendimento e itens já disponíveis','Henrique + preparo',-33,-27,[4,6],'Menu de almoço/lanche e quantidade por pessoa definidos com recursos existentes.'],
 ['P0','Alimentação','Cotar ingredientes, bebidas e consumíveis','Henrique',-33,-27,[13,3],'Valores reais registrados com data e fonte. Total compatível com teto e reserva.'],
 ['P0','Alimentação','Validar prazo real para fechar compras e preparo','Henrique + preparo',-33,-27,[13],'Antecedência confirmada. Ajustar corte de confirmações se precisar antecipar 12/10.'],
 ['P0','Alimentação','Definir transporte, conservação e serviço','Preparo + apoio a definir',-27,-20,[4,13],'Responsáveis, utensílios, armazenamento e sequência de serviço acordados.'],
 ['P0','Infraestrutura','Conferir mesas, cadeiras, ventilação e cobertura','Henrique',-35,-20,[1],'20 cadeiras alocadas, mesas e espaço coberto viáveis para o público total.'],
 ['P0','Infraestrutura','Confirmar empréstimo de projeção ou TV e notebook','Henrique + técnica a definir',-33,-20,[1,10,11],'Equipamentos e quem entrega/devolve confirmados. Nenhum preço presumido zero.'],
 ['P0','Infraestrutura','Separar e testar cabos e adaptadores reais','Técnica a definir',-27,-20,[18],'Notebook, HDMI/USB-C, energia e tela conectados com sucesso.'],
 ['P0','Infraestrutura','Testar internet, áudio e alternativa offline','Técnica a definir',-27,-20,[18,10,11],'Teste concluído e plano de continuidade das duas falas sem internet definido.'],
 ['P0','Infraestrutura','Organizar energia e circulação segura','Henrique + técnica a definir',-27,-20,[17,19],'Extensões e equipamentos posicionados sem bloquear passagem.'],
 ['P0','Público','Definir canal restrito da lista e responsável','Arthur + recepção a definir',-33,-27,[5,6],'Um controle único, responsável aceito e dados nominais fora do repositório.'],
 ['P0','Público','Preparar inscrição, reconfirmação e check-in simples','Recepção a definir',-27,-26,[22,15],'Etapas distintas, contagem total, corte válido e alternativa por lista preparados.'],
 ['P1','Comunicação','Preparar convite com nome, horário e sinopses','Arthur',-27,-26,[2,12,23],'Convite revisado com gratuitidade, total e instruções sem endereço privado público.'],
 ['P0','Comunicação','Liberar convite e confirmação após definições','Arthur + Henrique',-26,-26,[24,14,6],'Organizadores aprovam e realizam divulgação. Condicionado a menu/custo viável.'],
 ['P1','Comunicação','Divulgar destaque das palestras','Arthur',-19,-19,[25],'Mensagem semanal revisada e enviada pelo responsável no canal definido.'],
 ['P1','Comunicação','Reforçar proposta e reconfirmação','Arthur',-12,-12,[25,33],'Mensagem orienta prazo final e respeita o limite total.'],
 ['P0','Equipe','Confirmar aceite e horários do apoio','Arthur + Henrique',-27,-13,[5,16,22],'Recepção, técnica e serviço cobertos nos horários simultâneos.'],
 ['P1','Condução','Preparar pergunta e mediação da Mesa 360','Arthur + Henrique',-27,-13,[12],'Roteiro de 45 min com rodada curta, direito de passar e síntese.'],
 ['P1','Condução','Escolher dinâmica com materiais disponíveis','Arthur + apoio a definir',-20,-13,[29,3],'Dinâmica simples cabe no roteiro sem verba opcional presumida.'],
 ['P1','Imagem','Definir foto opcional, responsável e combinações','Arthur + apoio a definir',-27,-13,[5,10,11],'Responsável aceito e escolhas de imagem/materiais esclarecidas.'],
 ['P0','Condução','Validar roteiro com equipe e palestrantes','Arthur + Henrique',-20,-13,[12,28,29],'Sequência aceita preserva almoço 12h30 e saída 17h. Apoio distribuído.'],
 ['P0','Revisão','Revisar viabilidade de público, custo e estrutura','Arthur + Henrique',-13,-13,[14,21,28],'Revisão de 04/10 registra pendências, ações e continuidade viável.'],
 ['P0','Público','Reconfirmar total e necessidades em canal restrito','Recepção a definir',-12,-6,[23,25,15],'Até 11/10, total reconfirmado inclui equipe. Necessidades tratadas privadamente.'],
 ['P0','Alimentação','Fechar quantidades e compra autorizada','Henrique + preparo',-5,-5,[34,15,14],'Quantidade final registrada e aceite dos organizadores antes de comprar.'],
 ['P0','Orçamento','Revisar previsão final e liberar gastos','Arthur + Henrique',-5,-5,[35,7,3],'Previsão inteira cabe no teto. Uso da reserva, se houver, aprovado explicitamente.'],
 ['P0','Alimentação','Comprar e conferir ingredientes e bebidas','Henrique + preparo',-5,-1,[36],'Compras conforme prazo real, quantidade, comprovantes e armazenamento adequado.'],
 ['P0','Alimentação','Confirmar utensílios, gelo, limpeza e lanche','Apoio de serviço a definir',-5,-1,[35,16],'Itens conferidos, quem leva e repõe definido, custos inclusos.'],
 ['P0','Conteúdo','Receber slides e demo das duas falas','Arthur + palestrantes',-6,-3,[12],'Arquivos até 14/10, demo com dados de teste e alternativa offline disponíveis.'],
 ['P0','Conteúdo','Testar arquivos no equipamento do evento','Técnica + palestrantes',-3,-1,[39,19,20],'Falas e demo abrem no dispositivo real, fontes e áudio conferidos.'],
 ['P1','Comunicação','Enviar orientações privadas aos confirmados','Recepção a definir',-5,-5,[34,32],'Horários, acesso privado e orientações úteis enviados pelo organizador.'],
 ['P1','Comunicação','Enviar lembrete final pelo canal definido','Recepção a definir',-1,-1,[41],'Lembrete de 16/10 enviado aos confirmados sem publicar dados privados.'],
 ['P0','Operação','Preparar lista de check-in e contagem agregada','Recepção a definir',-3,-1,[34,28],'Lista restrita pronta, alternativa sem QR e total de refeições conferidos.'],
 ['P1','Condução','Preparar abertura, avisos de tempo e feedback','Arthur + técnica a definir',-6,-1,[32,29],'Textos e cronômetro preparados. Feedback breve e voluntário.'],
 ['P0','Revisão','Executar teste geral e decisão final de viabilidade','Equipe do evento',-1,-1,[40,38,43],'16/10: equipamento, apoio, comida e roteiro conferidos. Pendências tratadas.'],
 ['P0','Operação','Montar espaço e cozinha antes da recepção','Henrique + preparo + técnica',0,0,[45,37,38],'Até 10h30: espaço, cozinha, projeção e água prontos.'],
 ['P0','Operação','Recepcionar e contar presença sem exceder limite','Recepção a definir',0,0,[46,43],'10h30: check-in e orientação feitos por apoio. Contagem total atualizada.'],
 ['P0','Operação','Conduzir abertura, falas e perguntas','Arthur + técnica a definir',0,0,[46,44,40],'Falas com avisos de tempo. Usar networking para perguntas excedentes.'],
 ['P0','Operação','Servir almoço e repor bebidas','Preparo + apoio de serviço',0,0,[46,37,38],'Almoço inicia 12h30 com quantidade e necessidades conferidas pelo responsável.'],
 ['P1','Operação','Mediar Mesa 360 e dinâmica','Moderador a definir + apoio',0,0,[48,29,30],'Rodada inclusiva e horários respeitados. Direito de passar preservado.'],
 ['P0','Operação','Servir lanche e organizar resíduos','Apoio de serviço a definir',0,0,[49,38],'Lanche às 15h e espaço de alimentação organizado.'],
 ['P1','Operação','Coletar feedback e fazer foto opcional','Apoio a definir',0,0,[50,31,44],'Feedback voluntário. Foto apenas com quem concordar.'],
 ['P0','Operação','Encerrar e desmontar o espaço','Arthur + Henrique + apoio',0,0,[51,52],'Público encerra 17h. Após saída, itens devolvidos e casa conferida.'],
 ['P0','Pós-evento','Conciliar custos e aportes com comprovantes','Arthur + Henrique',1,4,[53,36],'Gastos reais completos, saldo e acerto entre organizadores registrados.'],
 ['P1','Pós-evento','Agradecer e compartilhar materiais autorizados','Arthur',1,4,[53,31],'Envio pelos organizadores, apenas materiais e imagens com combinação válida.'],
 ['P1','Pós-evento','Registrar lições aprendidas e próximos passos','Arthur + Henrique',1,7,[54,55],'Síntese até 24/10 com feedback, custo final e decisão sobre continuidade.'],
 ['P2','Opcionais','Avaliar banner físico somente se houver verba','Arthur',-27,-13,[3],'Sem verba aprovada. Cotar e executar apenas após decisão explícita.'],
 ['P2','Opcionais','Avaliar brindes ou sorteio sem comprometer comida','Arthur',-27,-13,[3],'Sem verba aprovada. Responsável, regra e custo dependem de aprovação.'],
 ['P2','Opcionais','Avaliar live somente com operador exclusivo','Arthur + Henrique',-27,-13,[20,28,31],'Fora da operação prevista. Exige público, operador, recursos e aprovação.'],
 ['P2','Opcionais','Avaliar QR ou ambientação digital simples','Apoio a definir',-20,-6,[23,18],'Opcional e sem verba. Check-in por lista continua disponível.'],
];
if(tasks.length!==60)throw Error('Esperadas 60 atividades');
const id = n => `EVT-${String(n).padStart(3,'0')}`;
base(a,65,'R','Atividades operacionais');
const aw=[12,9,19,48,30,25,11,11,14,14,13,13,13,19,25,68,45,16];aw.forEach((n,i)=>width(a,String.fromCharCode(65+i),n,65));
put(a,'A4','P0 essencial; P1 experiência; P2 opcional. Dias relativos ao evento são editáveis. Donos sugeridos ainda exigem aceite.');
const ah=['ID','Prioridade','Frente','Atividade','Responsável sugerido','Responsável confirmado','Início D±','Prazo D±','Início proposto','Prazo proposto','Predecessor 1','Predecessor 2','Predecessor 3','Status editável','Situação calculada','Critério de aceite','Evidência / bloqueio','Dependências abertas'];
a.getRange('A5:R5').values=[ah];
a.getRange('A6:R65').values=tasks.map((t,i)=>[id(i+1),t[0],t[1],t[2],t[3],null,t[4],t[5],null,null,...[0,1,2].map(j=>t[6][j]?id(t[6][j]):null),'Não iniciado',null,t[7],null,null]);
table(a,'A5:R65','AtividadesEvento');header(a,'A5:R5');
input(a,'F6:H65');input(a,'K6:N65');input(a,'Q6:Q65');statusValidation(a,'N6:N65');
a.getRange('B6:B65').dataValidation={rule:{type:'list',values:['P0','P1','P2']}};
for(let r=6;r<=65;r++){
 // ISNUMBER: D+0 (dia do evento) is a valid offset; `=""` treats zero as blank in some engines.
 formula(a,`I${r}`,`=IF(ISNUMBER(G${r}),'Visão'!$B$6+G${r},"")`);
 formula(a,`J${r}`,`=IF(ISNUMBER(H${r}),'Visão'!$B$6+H${r},"")`);
 const pending = ['K','L','M'].map(c=>`IF(${c}${r}="",0,IF(COUNTIFS($A$6:$A$65,${c}${r},$N$6:$N$65,"Concluído")+COUNTIFS($A$6:$A$65,${c}${r},$N$6:$N$65,"Não se aplica")>0,0,1))`).join('+');
 formula(a,`R${r}`,`=${pending}`);
 formula(a,`O${r}`,`=IF(N${r}="Não se aplica","Não se aplica",IF(N${r}="Concluído",IF(Q${r}="","Falta evidência",IF(R${r}>0,"Revisar dependências","Concluído")),IF(N${r}="Bloqueado","Bloqueado",IF(J${r}="","Sem prazo",IF(J${r}<'Visão'!$B$7,"Atrasado",IF(J${r}='Visão'!$B$7,"Hoje",IF(R${r}>0,"Dependência pendente",IF(F${r}="","Sem responsável","No prazo"))))))))`);
}
a.getRange('I6:J65').setNumberFormat(date);a.getRange('G6:H65').setNumberFormat('0');
a.getRange('A6:R65').format.wrapText=true;a.getRange('A6:R65').format.rowHeight=63;
alertCF(a,'O6:O65');a.freezePanes.freezeRows(5);a.freezePanes.freezeColumns(2);

base(m,23,'H','Cronograma macro proposto');
[11,43,13,13,14,14,33,77].forEach((n,i)=>width(m,String.fromCharCode(65+i),n,23));
put(m,'A4','Prazos relativos ao evento. Em 20/09, conferir antecedência real da alimentação e antecipar o corte se necessário.');
m.getRange('A5:H5').values=[['Marco','Entrega','Início D±','Prazo D±','Início proposto','Prazo proposto','Responsável sugerido','Condição para avançar']];
const milestones=[
 ['M01','Reunião e visita',-35,-35,'Arthur + Henrique','Layout verificado, decisões e donos registrados.'],
 ['M02','Pendências estruturais fechadas',-35,-33,'Arthur + Henrique','Preparo identificado, limite total, apoio e limites de gastos acordados.'],
 ['M03','Questionários recebidos',-33,-29,'Arthur + palestrantes','Título, resumo, equipamento e tempo de ambos recebidos.'],
 ['M04','Menu e conteúdo viáveis',-29,-27,'Henrique + Arthur','Cotações compatíveis, prazo da alimentação e sinopses revisados.'],
 ['M05','Abrir confirmação e divulgar',-26,-26,'Arthur','A partir de 21/09. Condicionado a nome, sinopses, inscrição e custo viável.'],
 ['M06','Infraestrutura garantida',-27,-20,'Henrique + técnica a definir','Projeção, cabos, mesas, energia e alternativas testados.'],
 ['M07','Revisão de viabilidade',-13,-13,'Arthur + Henrique','Conferir confirmações, custo, equipe e plano alternativo.'],
 ['M08','Presenças reconfirmadas',-12,-6,'Recepção a definir','Total inclui apoio. Necessidades alimentares/acomodação tratadas privadamente.'],
 ['M09','Quantidades e compras aprovadas',-5,-5,'Henrique + preparo','Prazo depende da alimentação. Só após reconfirmação e aprovação de gasto.'],
 ['M10','Materiais recebidos',-6,-3,'Arthur + palestrantes','Slides, demo e alternativa offline disponíveis para teste.'],
 ['M11','Teste e conferência final',-1,-1,'Equipe do evento','Som/imagem, roteiro, papéis e alimentação conferidos.'],
 ['M12','Encontro realizado',0,0,'Equipe do evento','Público 10h30–17h; almoço 12h30; lanche incluído.'],
 ['M13','Fechamento e aprendizados',1,7,'Arthur + Henrique','Custos conciliados, agradecimento pelos organizadores e lições registradas.'],
];
m.getRange('A6:H18').values=milestones.map(x=>[...x.slice(0,4),null,null,...x.slice(4)]);
for(let r=6;r<=18;r++){formula(m,`E${r}`,`='Visão'!$B$6+C${r}`);formula(m,`F${r}`,`='Visão'!$B$6+D${r}`);}
table(m,'A5:H18','MarcosEvento');header(m,'A5:H5');input(m,'C6:D18');m.getRange('E6:F18').setNumberFormat(date);
m.getRange('A6:H18').format.wrapText=true;m.getRange('A6:H18').format.rowHeight=47;m.freezePanes.freezeRows(5);
put(m,'A20','Responsáveis sugeridos precisam aceitar as frentes. A execução é controlada pelos IDs EVT da aba Atividades.');
put(m,'A21','Se alterar a data do evento, revisar também agenda dos palestrantes, disponibilidade e prazos reais.');

base(b,49,'H','Orçamento do encontro (BRL)');
[29,18,18,28,18,18,29,69].forEach((n,i)=>width(b,String.fromCharCode(65+i),n,49));
put(b,'A4','Limites são propostas. Cotação e gasto em branco significam não informado. Não registrar preço zero sem confirmação.');
b.getRange('A5:H5').values=[['Categoria','Limite proposto','Cotação / previsão','Aprovação do gasto','Gasto real','Limite − cotação','Situação','Fonte / comprovante e observação']];
const budget=[
 ['Almoço',300,null,'Pendente',null,null,null,'Ingredientes, preparo, transporte e itens cedidos a verificar.'],
 ['Lanche',80,null,'Pendente',null,null,null,'Dimensionar por total confirmado, incluindo equipe.'],
 ['Bebidas',50,null,'Pendente',null,null,null,'Água, café/suco. Sem bebida alcoólica, conforme anexo.'],
 ['Consumíveis',20,null,'Pendente',null,null,null,'Guardanapos, limpeza e eventual necessidade de descartáveis.'],
 ['Reserva',null,null,'Pendente',null,null,null,'10% propostos. Uso depende de decisão conjunta. Registrar gasto na categoria real.'],
 ['Infraestrutura extra',null,null,'Pendente',null,null,null,'Sem verba específica. Usar itens emprestados após confirmação.'],
 ['Banner (P2)',null,null,'Pendente',null,null,null,'Sem verba aprovada.'],
 ['Brindes (P2)',null,null,'Pendente',null,null,null,'Sem verba aprovada.'],
 ['Live (P2)',null,null,'Pendente',null,null,null,'Sem verba e fora da operação prevista.'],
 ['Mão de obra do preparo',0,0,'Sem cobrança',null,null,null,'Sem cobrança confirmada por Arthur. Outros custos ficam nas categorias acima.'],
];b.getRange('A6:H15').values=budget;formula(b,'B10',"='Visão'!B15*'Visão'!B16");
input(b,'B6:B9');input(b,'B11:E15');input(b,'C6:E9');input(b,'H6:H15');
b.getRange('D6:D15').dataValidation={rule:{type:'list',values:['Pendente','Aprovado','Revisar','Sem cobrança','Não se aplica']}};
for(let r=6;r<=15;r++){
 if(r===10){put(b,`G${r}`,'Reserva proposta');continue;}
 formula(b,`F${r}`,`=IF(AND(ISNUMBER(B${r}),ISNUMBER(C${r})),B${r}-C${r},"")`);
 formula(b,`G${r}`,`=IF(NOT(ISNUMBER(C${r})),"Sem cotação",IF(NOT(ISNUMBER(B${r})),"Sem limite aprovado",IF(C${r}>B${r},"Revisar custo",IF(D${r}="Sem cobrança","Sem cobrança",IF(D${r}="Pendente","Aprovação pendente","Conferir comprovante")))))`);
}
b.getRange('B6:C15').setNumberFormat(money);b.getRange('E6:F15').setNumberFormat(money);
b.getRange('H6:H15').format.wrapText=true;b.getRange('A6:H15').format.rowHeight=44;header(b,'A5:H5');
for(const r of [6,7,8,9,11,12,13,14,15])b.getRange(`F${r}`).conditionalFormats.add('cellIs',{operator:'lessThan',formula:0,format:{fill:'#FCE4D6',font:{color:'#9C281D',bold:true}}});
put(b,'A17','Teto confirmado');formula(b,'B17',"='Visão'!B15");
put(b,'A18','Soma dos limites propostos');formula(b,'B18','=SUM(B6:B15)');
put(b,'A19','Teto menos limites');formula(b,'B19','=B17-B18');
put(b,'A20','Cotações registradas (parcial)');formula(b,'B20','=IF(COUNT(C6:C9,C11:C15)=0,"",SUM(C6:C9,C11:C15))');
put(b,'D17','Essenciais ainda sem cotação');formula(b,'E17','=COUNTBLANK(C6:C9)');
put(b,'D18','Gastos registrados (parcial)');formula(b,'E18','=IF(COUNT(E6:E9,E11:E15)=0,"",SUM(E6:E9,E11:E15))');
put(b,'D19','Caixa recebido');formula(b,'E19','=IF(COUNT(C27:C28)=0,"",SUM(C27:C28))');
put(b,'D20','Caixa − gastos registrados');formula(b,'E20','=IF(OR(E19="",E18=""),"",E19-E18)');
put(b,'D22','Valor restante parcial. Só fechar o saldo depois de lançar todos os gastos.');
put(b,'A23','Limites e cotação não autorizam compra. Aprovação e caixa precisam ser confirmados antes de cada gasto.');
b.getRange('B17:B20').setNumberFormat(money);b.getRange('E18:E20').setNumberFormat(money);
b.getRange('B19').conditionalFormats.add('cellIs',{operator:'lessThan',formula:0,format:{fill:'#FCE4D6',font:{color:'#9C281D',bold:true}}});
b.getRange('A26:D26').values=[['Aporte','Declarado','Recebido','Data de recebimento']];header(b,'A26:D26');
put(b,'A27','Arthur');formula(b,'B27',"='Visão'!B17");put(b,'A28','Henrique');formula(b,'B28',"='Visão'!B18");
input(b,'C27:D28');b.getRange('B27:C28').setNumberFormat(money);b.getRange('D27:D28').setNumberFormat(date);
put(b,'A31','Comparação de capacidade financeira');
put(b,'A32','Todos os cenários incluem organizadores, palestrantes e qualquer apoio presente. Base de planejamento: 20 pessoas.');
b.getRange('A34:F34').values=[['Pessoas totais','Teto por pessoa','Reserva','Disponível sem reserva','Máximo por pessoa sem reserva','Cadeiras faltantes']];header(b,'A34:F34');
for(const [i,n] of [16,18,20].entries()){
 const r=35+i;put(b,`A${r}`,n);formula(b,`B${r}`,`='Visão'!$B$15/A${r}`);formula(b,`C${r}`,'=$B$10');formula(b,`D${r}`,`='Visão'!$B$15-C${r}`);formula(b,`E${r}`,`=D${r}/A${r}`);formula(b,`F${r}`,`=MAX(0,A${r}-'Visão'!$B$14)`);
}
b.getRange('B35:E37').setNumberFormat(money);b.getRange('A37:F37').format.fill=light;
put(b,'A39','Máximo por pessoa é capacidade de gasto para TODAS as despesas previstas, não preço estimado de refeição.');
put(b,'A41','Plano ativo: pessoas');formula(b,'B41',"='Visão'!B13");
put(b,'A42','Disponível por pessoa');formula(b,'B42',`=IF('Visão'!B13>0,('Visão'!B15-B10)/'Visão'!B13,"")`);b.getRange('B42').setNumberFormat(money);
put(b,'A43','Capacidade do plano');formula(b,'B43',`=IF(OR('Visão'!B13<'Visão'!B11,'Visão'!B13>'Visão'!B12),"Fora do escopo",IF('Visão'!B13>'Visão'!B14,"Faltam cadeiras","Dentro do limite"))`);
put(b,'A45','Fonte: DEC-007 para teto, aportes, cadeiras e mão de obra. Limites por categoria são proposta do plano mestre.');
put(b,'A46','Não utilizar esta planilha como cadastro nominal. Evidências podem identificar a compra, sem expor dados de participantes.');
b.freezePanes.freezeRows(5);

base(d,33,'G','Roteiro do dia — proposta');
[13,13,14,47,34,60,24].forEach((n,i)=>width(d,String.fromCharCode(65+i),n,33));
put(d,'A4','Horários individuais e papéis dependem de aceite. Início 10h30, almoço 12h30 e encerramento 17h confirmados.');
d.getRange('A5:G5').values=[['Início','Fim','Minutos','Bloco','Responsável sugerido','Operação e critério','Responsável confirmado']];header(d,'A5:G5');
const day=[
 [20,'Recepção e check-in','Recepção a definir','Água, orientação sobre banheiro, alimentação e circulação.'],
 [10,'Abertura','Arthur + Henrique','Objetivo, programação, perguntas e apresentação dos anfitriões.'],
 [45,'VIRUS — IA no dia a dia','VIRUS + técnica a definir','25 min conteúdo + 15 min perguntas + 5 min troca. Título formal a coletar.'],
 [30,'Conversa e conexões','Henrique + apoio a definir','Aproximar pessoas que ainda não se conhecem. Bloco flexível.'],
 [15,'Margem e preparo do almoço','Apoio de serviço a definir','Absorver atraso curto sem adiar o almoço.'],
 [60,'Almoço','Preparo + apoio de serviço','Início 12h30 confirmado. Duração de 60 min proposta.'],
 [45,'Coatio — UI/UX e CARANGA','Coatio + técnica a definir','25 min incluindo demo + 15 min perguntas + 5 min troca. Plano offline pronto.'],
 [45,'Mesa 360','Moderador a definir','5 min contexto + 20 min rodada + 15 min diálogo + 5 min síntese. Direito de passar.'],
 [30,'Lanche','Apoio de serviço a definir','Reposição de bebidas e pausa.'],
 [45,'Dinâmica e networking guiado','Henrique + apoio a definir','Atividade simples com materiais disponíveis. Bloco flexível.'],
 [20,'Conversas e próximos passos','Arthur + Henrique','Espaço flexível para temas que surgirem.'],
 [10,'Feedback','Apoio a definir','Poucas perguntas e participação voluntária.'],
 [5,'Foto de grupo opcional','Foto a definir','Somente com quem concordar. Não acumular com anfitriões.'],
 [10,'Encerramento','Arthur + Henrique','Agradecimento, próximos passos se definidos e saída até 17h.'],
];
d.getRange('A6:G19').values=day.map(x=>[null,null,x[0],x[1],x[2],x[3],null]);
for(let r=6;r<=19;r++){formula(d,`A${r}`,r===6?"='Visão'!B8":`=B${r-1}`);formula(d,`B${r}`,`=A${r}+C${r}/1440`);}
input(d,'C6:C19');input(d,'G6:G19');d.getRange('A6:B19').setNumberFormat('hh:mm');
d.getRange('A6:G19').format.wrapText=true;d.getRange('A6:G19').format.rowHeight=52;
put(d,'A21','Minutos totais');formula(d,'C21','=SUM(C6:C19)');
put(d,'D21','Desvio no almoço (min)');formula(d,'F21',"=ROUND((A11-'Visão'!B10)*1440,0)");
put(d,'D22','Desvio no encerramento (min)');formula(d,'F22',"=ROUND((B19-'Visão'!B9)*1440,0)");
d.getRange('F21:F22').conditionalFormats.add('cellIs',{operator:'notEqual',formula:0,format:{fill:'#FCE4D6',font:{color:'#9C281D',bold:true}}});
put(d,'A24','Preparação da equipe');put(d,'D24','09h00–10h30 (proposta)');put(d,'F24','Cozinha, layout, apresentação e lista prontos antes da abertura.');
put(d,'A25','Desmontagem da equipe');put(d,'D25','17h00–17h30 (proposta)');put(d,'F25','Após saída do público. Devolver itens e conferir a casa.');
put(d,'A27','Ajustes por atraso');put(d,'D27','Reduzir blocos flexíveis');put(d,'F27','Preservar início do almoço e saída. Perguntas excedentes seguem no networking.');
put(d,'A29','Simultaneidade');put(d,'D29','Recepção e cozinha às 10h30');put(d,'F29','Confirmar pessoas diferentes para recepção, técnica e serviço.');
d.getRange('F24:F29').format.wrapText=true;d.getRange('A24:G29').format.rowHeight=39;
d.freezePanes.freezeRows(5);

// Check the DAG and planned dates independently from formulas.
const seen=new Set();
for(const [i,t] of tasks.entries()){
 for(const p of t[6]){if(p<1||p>tasks.length||p===i+1)throw Error(`Dependência inválida ${id(i+1)}`);}
 if(t[4]>t[5])throw Error(`Início posterior ao prazo ${id(i+1)}`);
}
function visit(n,stack=new Set()) {if(stack.has(n))throw Error('Dependência circular');if(seen.has(n))return;const next=new Set(stack).add(n);tasks[n-1][6].forEach(p=>visit(p,next));seen.add(n);}
tasks.forEach((_,i)=>visit(i+1));
if(day.reduce((n,x)=>n+x[0],0)!==390)throw Error('Roteiro não cobre 390 minutos');
wb.recalculate();
const val=(s,c)=>s.getRange(c).values[0][0];
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
assert(val(b,'B18')===500,'Limites não reconciliam');
assert(val(b,'B42')===22.5,'Custo disponível por pessoa incorreto');
assert(val(d,'F21')===0&&val(d,'F22')===0,'Horários confirmados divergentes');
assert(val(b,'E18')===''||val(b,'E18')===null,'Gasto ausente virou zero');
assert(typeof val(m,'F17')==='number'&&val(a,'J51')===val(m,'F17')&&val(a,'J58')===val(m,'F17'),'Atividade do dia do evento sem prazo');
assert(!a.getRange('O6:O65').values.flat().includes('Sem prazo'),'Atividade sem prazo calculado');
assert(val(b,'F15')===0&&val(b,'G15')==='Sem cobrança','Zero confirmado tratado como sem cotação');
// Mutation checks restore inputs before final export.
put(v,'B13',16);wb.recalculate();assert(val(b,'B42')===28.125,'Mudança de público não recalculou');put(v,'B13',20);
put(v,'B6',new Date('2026-10-18T00:00:00Z'));wb.recalculate();assert(val(m,'E6')!==null,'Mudança de data não recalculou');put(v,'B6',new Date('2026-10-17T00:00:00Z'));
put(a,'N6','Concluído');put(a,'Q6','Teste temporário');wb.recalculate();assert(val(a,'R7')===0,'Dependência concluída não liberou');assert(val(a,'O7')==='Sem responsável','Falta de dono não permaneceu visível');
put(a,'N6','Não iniciado');put(a,'Q6',null);
put(a,'N29','Concluído');put(a,'N19','Não iniciado');wb.recalculate();assert(val(a,'R30')>0,'Um pré-requisito faltante ficou invisível');put(a,'N29','Não iniciado');
put(b,'E6',0);wb.recalculate();assert(val(b,'E18')===0,'Zero real não preservado');put(b,'E6',null);
wb.recalculate();
const errors=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:30},summary:'Verificação final de fórmulas'});
console.log(errors.ndjson);
console.log((await wb.inspect({kind:'table',range:'Orçamento!A34:F37',include:'values,formulas',tableMaxRows:4,tableMaxCols:6,maxChars:2500})).ndjson);
await fs.mkdir(path.dirname(output),{recursive:true});
const xlsx=await SpreadsheetFile.exportXlsx(wb);await xlsx.save(output);
await fs.mkdir(previewDir,{recursive:true});
for(const [sheetName,range] of [['Visão','A1:D21'],['Macro','A1:H18'],['Atividades','A1:J12'],['Atividades','K5:R12'],['Orçamento','A1:H20'],['Orçamento','A26:F43'],['Dia','A1:G19']]){
 try {const preview=await wb.render({sheetName,range,scale:1,format:'png'});await fs.writeFile(path.join(previewDir,`${sheetName}-${range.replace(':','-')}.png`),new Uint8Array(await preview.arrayBuffer()));}
 catch(error){console.log(`RENDER LIMITATION ${sheetName}: ${error.message}`);}
}
const stat=await fs.stat(output);assert(stat.size<500000,'Arquivo excede 500 KB');
console.log(JSON.stringify({output,bytes:stat.size,activities:tasks.length,milestones:milestones.length,dayBlocks:day.length,minutes:390,previewDir,checks:'DAG, limites, capacidade, horários, branco/zero e dependências'},null,2));
