export type Question = {
  id: number;
  topic: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const questionBank: Question[] = [
  {
    id: 1, topic: "Sistema Financeiro Nacional",
    text: "Qual é a principal função do Conselho Monetário Nacional (CMN) dentro do Sistema Financeiro?",
    options: [
      "Fixar as diretrizes gerais das políticas monetária, cambial e creditícia no Brasil.",
      "Fiscalizar diretamente o dia a dia das agências bancárias.",
      "Emitir o papel-moeda e fabricar as moedas metálicas.",
      "Atuar como banco dos bancos, emprestando dinheiro às instituições financeiras."
    ],
    correctIndex: 0,
    explanation: "O CMN é o órgão máximo e normativo do SFN. Ele não executa tarefas operacionais (como emitir moeda, que é papel do Bacen/Casa da Moeda), mas sim cria as diretrizes e regras gerais."
  },
  {
    id: 2, topic: "Sistema Financeiro Nacional",
    text: "Entre as inovações tecnológicas do mercado financeiro, destacam-se as fintechs de crédito. Aquela que utiliza exclusivamente capital próprio para realizar os empréstimos é a:",
    options: [
      "Sociedade de Crédito Direto (SCD).",
      "Sociedade de Empréstimo entre Pessoas (SEP).",
      "Sociedade de Crédito, Financiamento e Investimento (SCFI).",
      "Associação de Poupança e Empréstimo (APE)."
    ],
    correctIndex: 0,
    explanation: "A SCD opera apenas com capital próprio. Já a SEP (peer-to-peer) atua conectando investidores (terceiros) aos tomadores de crédito."
  },
  {
    id: 3, topic: "Sistema Financeiro Nacional",
    text: "No contexto da Resolução CMN nº 4.935, a remuneração de um correspondente bancário na intermediação de operações de crédito deve ser:",
    options: [
      "Paga exclusivamente pela instituição financeira contratante.",
      "Paga pelo cliente através de uma Tarifa de Intermediação (TIC).",
      "Dividida entre o cliente (50%) e a instituição financeira (50%).",
      "Paga em forma de participação acionária no banco."
    ],
    correctIndex: 0,
    explanation: "É estritamente proibido ao correspondente cobrar qualquer valor, tarifa ou comissão diretamente do cliente. A remuneração deve vir 100% da instituição contratante."
  },
  {
    id: 4, topic: "Sistema Financeiro Nacional",
    text: "Sobre as Caixas Econômicas, assinale a principal característica que as diferencia dos bancos comerciais comuns:",
    options: [
      "Priorizam a concessão de crédito com finalidade social e possuem o monopólio das operações de penhor civil.",
      "Atuam exclusivamente no financiamento de veículos e crédito direto ao consumidor.",
      "São as únicas instituições autorizadas a realizar operações de câmbio de grande porte.",
      "Não possuem autorização do Banco Central para captar depósitos à vista."
    ],
    correctIndex: 0,
    explanation: "A Caixa Econômica Federal (única em operação) foca em habitação, FGTS, programas sociais e detém o monopólio do penhor civil e loterias federais."
  },
  {
    id: 5, topic: "Sistema Financeiro Nacional",
    text: "De acordo com a Resolução CMN nº 4.935, qual é o limite para o pagamento à vista (upfront) da comissão do correspondente em uma operação de crédito original?",
    options: [
      "No máximo 6% do valor da operação.",
      "No máximo 3% do valor da operação.",
      "Sem limite, dependendo apenas do contrato entre o banco e o correspondente.",
      "Fixo em R$ 1.000,00 por contrato aprovado."
    ],
    correctIndex: 0,
    explanation: "Para evitar o estímulo excessivo ao superendividamento, a norma limitou a remuneração à vista a 6% do valor da operação (e 3% em casos de portabilidade)."
  },
  {
    id: 6, topic: "Ética e Ouvidoria",
    text: "A Ouvidoria de uma instituição financeira possui uma atribuição muito específica no relacionamento com o cliente. Qual é o seu principal papel?",
    options: [
      "Atuar como a última instância administrativa para solução de conflitos que não foram resolvidos pelo SAC ou agências.",
      "Ser o primeiro canal de contato para renegociação de dívidas.",
      "Realizar a cobrança de clientes inadimplentes há mais de 90 dias.",
      "Substituir o Procon na defesa jurídica do consumidor."
    ],
    correctIndex: 0,
    explanation: "A Ouvidoria não substitui o SAC. Ela atua como um 'tribunal de recursos' interno para as demandas que os canais primários não conseguiram solucionar adequadamente."
  },
  {
    id: 7, topic: "Ética e Ouvidoria",
    text: "Um profissional de crédito atende um idoso que deseja comprometer 100% de sua renda mensal disponível em um empréstimo para ajudar um sobrinho. Do ponto de vista ético e do crédito responsável, o profissional deve:",
    options: [
      "Alertar o cliente sobre os altos riscos de superendividamento e as consequências de comprometer sua sobrevivência básica.",
      "Aprovar o crédito imediatamente, pois a autonomia da vontade do cliente está acima de qualquer análise de risco.",
      "Oferecer um seguro de vida com venda casada para proteger o banco em caso de óbito.",
      "Repassar o dinheiro diretamente para a conta do sobrinho, evitando burocracias."
    ],
    correctIndex: 0,
    explanation: "O princípio do crédito responsável exige que o profissional não atue apenas como vendedor, mas zele pela saúde financeira do cliente, informando os riscos reais da operação."
  },
  {
    id: 8, topic: "Tarifas Bancárias",
    text: "Segundo a Resolução CMN nº 3.919, os serviços prestados a pessoas físicas dividem-se em essenciais, prioritários, especiais e diferenciados. É correto afirmar que:",
    options: [
      "Não pode haver cobrança de tarifas pela prestação de serviços considerados essenciais.",
      "Serviços essenciais possuem tarifas fixadas anualmente pelo Ministério da Fazenda.",
      "Serviços prioritários não podem ser tarifados, exceto em contas poupança.",
      "Bancos digitais são isentos de seguir as regras de gratuidade dos serviços essenciais."
    ],
    correctIndex: 0,
    explanation: "Serviços essenciais (como fornecimento de cartão de débito inicial, algumas transferências intra-bancárias e saques mensais limitados) devem ser fornecidos de forma gratuita."
  },

  // --- MATEMÁTICA FINANCEIRA ---
  {
    id: 9, topic: "Matemática Financeira",
    text: "Na matemática financeira, a diferença fundamental entre Juros Simples e Juros Compostos está na base de cálculo. É correto afirmar que:",
    options: [
      "Nos Juros Simples a taxa incide sempre sobre o capital inicial, enquanto nos Compostos a taxa incide sobre o montante acumulado do período anterior.",
      "Os Juros Simples são usados no longo prazo, e os Compostos apenas no crédito de curtíssimo prazo.",
      "Apenas os Juros Simples sofrem impacto da inflação ao longo do tempo.",
      "Nos Juros Compostos a taxa decresce a cada mês, enquanto nos Simples ela aumenta."
    ],
    correctIndex: 0,
    explanation: "Juros simples não incorporam juros ao capital (crescimento linear). Juros compostos fazem 'juros sobre juros', gerando crescimento exponencial."
  },
  {
    id: 10, topic: "Matemática Financeira",
    text: "Quando a unidade de tempo da taxa de juros informada no contrato NÃO coincide com o período em que os juros são efetivamente capitalizados (ex: 12% ao ano, capitalizados mensalmente), estamos falando de uma:",
    options: [
      "Taxa Nominal.",
      "Taxa Efetiva.",
      "Taxa Equivalente.",
      "Taxa Proporcional."
    ],
    correctIndex: 0,
    explanation: "A taxa nominal é uma referência. Para saber o custo real da operação, ela precisa ser convertida para a taxa efetiva correspondente ao período de capitalização."
  },
  {
    id: 11, topic: "Matemática Financeira",
    text: "O Sistema de Amortização Constante (SAC) é muito comum em financiamentos imobiliários. Sua principal característica matemática é que:",
    options: [
      "O valor da amortização do principal da dívida permanece igual em todas as parcelas.",
      "O valor total da prestação não sofre qualquer alteração do início ao fim do contrato.",
      "Os juros aumentam a cada prestação paga.",
      "O saldo devedor só diminui após o pagamento da última parcela."
    ],
    correctIndex: 0,
    explanation: "No SAC, a 'A' (Amortização) é Constante. Como a dívida cai rápido, os juros diminuem, fazendo com que o valor total da parcela seja decrescente."
  },
  {
    id: 12, topic: "Matemática Financeira",
    text: "No cálculo do Custo Efetivo Total (CET), a instituição financeira deve obrigatoriamente incluir:",
    options: [
      "Juros, tributos (como o IOF), tarifas, prêmios de seguro e outras despesas cobradas do cliente.",
      "Apenas a taxa de juros efetiva anual, excluindo impostos governamentais.",
      "Taxas flutuantes futuras, projetando a inflação dos próximos anos.",
      "Somente o valor da amortização do principal e a comissão do correspondente bancário."
    ],
    correctIndex: 0,
    explanation: "O CET é o custo real. Engloba tudo o que sai do bolso do cliente na data da contratação. Variáveis flutuantes futuras (ex: CDI amanhã) não entram no cálculo % de hoje."
  },
  {
    id: 13, topic: "Matemática Financeira",
    text: "Diferente do SAC, o Sistema Francês de Amortização (Tabela Price) atrai muitos consumidores de veículos e CDC porque:",
    options: [
      "Possui prestações totais fixas (iguais) durante todo o prazo do financiamento.",
      "Isenta o consumidor do pagamento de IOF.",
      "Não cobra juros nos três primeiros meses da operação.",
      "Gera o menor montante final de juros pagos se comparado ao SAC."
    ],
    correctIndex: 0,
    explanation: "A Tabela Price fixa o valor da parcela, facilitando o planejamento mensal do cliente (embora, matematicamente, acabe gerando mais juros nominais totais do que o SAC no mesmo prazo)."
  },
  {
    id: 14, topic: "Matemática Financeira",
    text: "O conceito de Taxa Equivalente é utilizado exclusivamente no regime de juros compostos. Duas taxas são equivalentes quando:",
    options: [
      "Aplicadas sobre o mesmo capital pelo mesmo prazo, produzem exatamente o mesmo montante final.",
      "Basta dividir a taxa anual por 12 para encontrar a taxa mensal.",
      "A taxa de juros supera o índice de inflação do mesmo período.",
      "Os juros de mora se igualam aos juros remuneratórios."
    ],
    correctIndex: 0,
    explanation: "Taxas equivalentes geram o mesmo resultado final sob o efeito de juros sobre juros. (A divisão simples por 12 se aplica apenas à Taxa Proporcional de juros simples)."
  },
  {
    id: 15, topic: "Matemática Financeira",
    text: "Em caso de liquidação antecipada de um empréstimo contratado a taxas prefixadas, o banco deve calcular o abatimento dos juros futuros utilizando:",
    options: [
      "A mesma taxa de juros que foi pactuada na contratação da operação.",
      "A taxa básica de juros (Selic) do dia da liquidação.",
      "Metade da taxa original, acrescida de multa compensatória para o banco.",
      "A taxa média de mercado divulgada pelo Banco Central na semana do pagamento."
    ],
    correctIndex: 0,
    explanation: "O desconto (valor presente) deve ser feito pela exata mesma taxa que foi usada para gerar os juros do contrato."
  },

  // --- CÓDIGO DE DEFESA DO CONSUMIDOR (CDC) ---
  {
    id: 16, topic: "Código de Defesa do Consumidor (CDC)",
    text: "O prazo de reflexão (direito de arrependimento) garante ao consumidor o direito de cancelar um contrato, sem custos, no prazo de:",
    options: [
      "7 dias, sempre que a contratação ocorrer fora do estabelecimento comercial físico.",
      "30 dias, caso seja um produto durável com vício oculto.",
      "7 dias, inclusive se a assinatura tiver ocorrido presencialmente na agência bancária.",
      "48 horas, contadas a partir do momento de liberação do crédito na conta."
    ],
    correctIndex: 0,
    explanation: "O art. 49 do CDC estabelece 7 dias para arrependimento em compras/contratos feitos à distância (telefone, internet, domicílio)."
  },
  {
    id: 17, topic: "Código de Defesa do Consumidor (CDC)",
    text: "Como o CDC classifica uma prática em que o banco obriga o cliente a contratar um seguro de vida para, em troca, liberar um crédito pessoal?",
    options: [
      "Venda casada, o que caracteriza uma prática abusiva e proibida.",
      "Garantia cruzada, permitida apenas em operações acima de R$ 50 mil.",
      "Fidelização securitária, desde que o prêmio seja inferior a 5% do crédito.",
      "Proteção de crédito solidária, regulamentada pela SUSEP."
    ],
    correctIndex: 0,
    explanation: "Condicionar o fornecimento de um produto ou serviço à aquisição de outro (venda casada) é expressamente proibido pelo inciso I do art. 39 do CDC."
  },
  {
    id: 18, topic: "Código de Defesa do Consumidor (CDC)",
    text: "Nos contratos de adesão (comuns no mercado financeiro), como a lei orienta a interpretação de cláusulas que possuam duplo sentido ou margem para dúvidas?",
    options: [
      "A interpretação deve ser feita de maneira mais favorável ao consumidor.",
      "Deve ser solicitada uma perícia técnica no Banco Central do Brasil.",
      "A interpretação favorece a instituição financeira por deter o risco do crédito.",
      "A cláusula é automaticamente anulada e a operação de crédito é cancelada."
    ],
    correctIndex: 0,
    explanation: "O art. 47 do CDC dita que as cláusulas contratuais serão interpretadas de maneira mais favorável ao consumidor, compensando sua vulnerabilidade jurídica."
  },
  {
    id: 19, topic: "Código de Defesa do Consumidor (CDC)",
    text: "O cliente quitou integralmente a sua dívida em atraso que havia gerado uma negativação no Serasa. De quem é a obrigação e qual o prazo para limpar o nome do consumidor?",
    options: [
      "O fornecedor (credor) tem a obrigação de solicitar a baixa em até 5 dias úteis.",
      "O próprio consumidor deve ir ao Serasa com o comprovante de pagamento.",
      "O fornecedor tem até 30 dias corridos para informar os birôs de crédito.",
      "Os birôs de crédito retiram automaticamente pelo sistema open banking em 24 horas."
    ],
    correctIndex: 0,
    explanation: "Súmula 548 do STJ: Incumbe ao credor a exclusão do registro da dívida no prazo de 5 dias úteis, a partir do pagamento."
  },
  {
    id: 20, topic: "Código de Defesa do Consumidor (CDC)",
    text: "Sobre as cláusulas abusivas impostas em um contrato de prestação de serviços financeiros, a legislação determina que elas são:",
    options: [
      "Nulas de pleno direito, não possuindo qualquer validade legal.",
      "Válidas, desde que o consumidor tenha assinado e rubricado a página.",
      "Anuláveis apenas se o consumidor ingressar na Justiça no primeiro ano de contrato.",
      "Toleradas se houver autorização prévia de um cartório de notas."
    ],
    correctIndex: 0,
    explanation: "Qualquer cláusula que coloque o consumidor em desvantagem exagerada é nula desde o seu nascimento (nulidade absoluta), mesmo que tenha sido assinada."
  },
  {
    id: 21, topic: "Código de Defesa do Consumidor (CDC)",
    text: "Segundo as normas que regem as multas por atraso no pagamento (inadimplência), o limite máximo que pode ser cobrado sobre o valor da prestação é de:",
    options: [
      "2% (dois por cento).",
      "10% (dez por cento).",
      "5% (cinco por cento).",
      "Não há limite, desde que previsto no contrato de adesão."
    ],
    correctIndex: 0,
    explanation: "O § 1º do art. 52 do CDC estabelece categoricamente que as multas de mora decorrentes do inadimplemento não poderão ser superiores a 2% do valor da prestação."
  },
  {
    id: 22, topic: "Código de Defesa do Consumidor (CDC)",
    text: "Com as atualizações da Lei do Superendividamento, ao ofertar crédito, os bancos e correspondentes estão proibidos de:",
    options: [
      "Indicar publicamente que o empréstimo será concedido sem avaliação da situação financeira ou consulta ao SPC/Serasa.",
      "Exigir qualquer documento de identidade que não seja a CNH digital.",
      "Ofertar prazos de financiamento superiores a 36 meses para aposentados.",
      "Solicitar comprovante de residência atualizado nos últimos 90 dias."
    ],
    correctIndex: 0,
    explanation: "É vedada a publicidade de 'crédito para negativados sem consulta', pois isso atrai pessoas já superendividadas e contraria o princípio do crédito responsável."
  },
  {
    id: 23, topic: "Código de Defesa do Consumidor (CDC)",
    text: "A respeito dos bancos de dados de inadimplentes (como SCPC e Serasa), as informações negativas referentes ao consumidor devem ser apagadas após qual período máximo?",
    options: [
      "5 anos contados da data de vencimento da dívida não paga.",
      "10 anos, conforme o Código Civil brasileiro.",
      "3 anos, para dívidas de natureza estritamente bancária.",
      "Somente após a quitação integral do débito com juros de mora."
    ],
    correctIndex: 0,
    explanation: "O art. 43, §1º do CDC estipula o limite máximo de 5 anos para manutenção de qualquer informação negativa em cadastros de proteção ao crédito."
  },

  // --- CRÉDITO CONSIGNADO ---
  {
    id: 24, topic: "Crédito Consignado",
    text: "Qual é a exigência da Instrução Normativa do INSS em relação à forma de autorização para descontos de crédito consignado em folha de pagamento?",
    options: [
      "Deve ser expressa, por escrito ou por meio eletrônico seguro, sendo proibida a contratação por simples ligação telefônica com gravação de voz.",
      "Pode ser feita por telefone, desde que a ligação seja gravada e armazenada por 5 anos.",
      "Deve ser autorizada presencialmente pelo gerente geral da agência pagadora do benefício.",
      "Pode ser tácita, se o aposentado sacar o dinheiro depositado na sua conta corrente."
    ],
    correctIndex: 0,
    explanation: "A IN 138 proíbe terminantemente que a prova de contratação do consignado INSS dependa apenas de ligações telefônicas ou gravações de voz."
  },
  {
    id: 25, topic: "Crédito Consignado",
    text: "Com o objetivo de proteger novos beneficiários do assédio comercial, o INSS estipula que a oferta ativa (telemarketing) para novos aposentados deve respeitar uma carência de:",
    options: [
      "180 dias contados a partir da Data de Despacho do Benefício (DDB).",
      "90 dias contados do primeiro saque realizado pelo idoso.",
      "30 dias corridos após a solicitação do benefício no portal Meu INSS.",
      "12 meses a partir do deferimento pericial médico."
    ],
    correctIndex: 0,
    explanation: "Para evitar pressão sobre pessoas que acabaram de se aposentar, os bancos/correspondentes não podem fazer ofertas ativas antes de completados 180 dias da DDB."
  },
  {
    id: 26, topic: "Crédito Consignado",
    text: "Um trabalhador com carteira assinada (CLT) tem parcelas de consignado descontadas do seu salário todo mês. Se a empresa que o contratou falhar em repassar esse dinheiro ao banco, de quem será a responsabilidade jurídica principal pela dívida retida?",
    options: [
      "Do próprio empregador, que responde como devedor principal e solidário, não podendo o funcionário ser negativado.",
      "Do trabalhador, que deverá arcar com a dívida via boleto bancário e processar a empresa posteriormente.",
      "Do sindicato da categoria, que é o avalista compulsório nas operações privadas.",
      "Do INSS, que atua como garantidor em operações com regime CLT."
    ],
    correctIndex: 0,
    explanation: "Pela Lei 10.820/03, se o empregador desconta do holerite e não repassa, a falha/crime é dele. O funcionário não pode ser prejudicado nem ter o nome sujo."
  },
  {
    id: 27, topic: "Crédito Consignado",
    text: "Para tentar diminuir o assédio comercial e a perturbação diária, as instituições financeiras criaram, via Autorregulação, um sistema de bloqueio de ligações conhecido como:",
    options: [
      "Não me Perturbe, que deve bloquear novas ofertas em até 30 dias após o cadastro do cliente.",
      "Procon Digital, que emite multas automáticas no momento da ligação abusiva.",
      "Sigilo Total INSS, disponível exclusivamente em caixas eletrônicos.",
      "Bloqueio Bacen, onde o Banco Central audita todas as linhas telefônicas ativas."
    ],
    correctIndex: 0,
    explanation: "O Não me Perturbe é a plataforma criada pela autorregulação bancária e de telecomunicações para impedir o telemarketing ativo indesejado."
  },
  {
    id: 28, topic: "Crédito Consignado",
    text: "Dentro do pacote de modalidades de consignado permitidos pelo INSS atualmente, encontram-se:",
    options: [
      "Empréstimo pessoal consignado, cartão de crédito consignado e cartão consignado de benefício.",
      "Apenas o empréstimo pessoal com desconto em folha e a modalidade de cheque especial.",
      "Financiamento habitacional consignado e leasing veicular com desconto em folha.",
      "Cartão pré-pago internacional e empréstimo com garantia de bens móveis."
    ],
    correctIndex: 0,
    explanation: "A IN 138/2022 estipula três produtos específicos que dividem a margem do INSS: Empréstimo, Cartão de Crédito e Cartão de Benefício."
  },
  {
    id: 29, topic: "Crédito Consignado",
    text: "Um funcionário regido pela CLT foi demitido sem justa causa. O que prevê a legislação em relação ao seu saldo devedor do crédito consignado frente às suas verbas rescisórias?",
    options: [
      "O banco pode reter até 30% das verbas rescisórias para amortizar ou liquidar a dívida do consignado, se houver previsão em contrato.",
      "A dívida é automaticamente perdoada pelo Seguro de Proteção Financeira (prestamista).",
      "O desconto nas verbas rescisórias é ilegal e proibido pela Justiça do Trabalho.",
      "O valor integral da dívida será debitado diretamente da conta do FGTS do ex-funcionário."
    ],
    correctIndex: 0,
    explanation: "A Lei 10.820 autoriza o desconto de até 30% (teto geral) das verbas rescisórias para abater o consignado, desde que essa cláusula exista no contrato."
  },
  {
    id: 30, topic: "Crédito Consignado",
    text: "No que se refere aos limites do cartão de crédito consignado (INSS), a instituição financeira tem a obrigação de liberar um direito básico ao aposentado, que é:",
    options: [
      "Poder cancelar o cartão de crédito a qualquer tempo, mesmo que ainda exista saldo devedor a pagar.",
      "Oferecer anuidade gratuita apenas nos 12 primeiros meses de uso.",
      "Não aplicar juros de mora se o cliente atrasar a fatura por motivo de doença comprovada.",
      "Permitir o saque em espécie de até 100% do limite total concedido no plástico."
    ],
    correctIndex: 0,
    explanation: "O cliente pode cancelar o 'plástico' (a função cartão) a qualquer momento. Se houver dívida parcelada, ela continua sendo cobrada, mas o serviço é cessado."
  },
  {
    id: 31, topic: "Crédito Consignado",
    text: "De acordo com o Documento Correlato da Febraban, a responsabilidade primária de verificar a autenticidade dos documentos e a clareza da proposta assinada pelo cliente recai sobre:",
    options: [
      "O correspondente bancário na ponta do atendimento presencial ou digital.",
      "O gerente geral da agência do Banco do Brasil ou Caixa Econômica mais próxima.",
      "O escrivão do Cartório de Notas onde a assinatura do contrato foi reconhecida.",
      "A inteligência artificial do sistema do Banco Central do Brasil."
    ],
    correctIndex: 0,
    explanation: "A Autorregulação exige que o correspondente aja com diligência e garanta que o cliente entenda o que está assinando, entregando a proposta imediatamente."
  },

  // --- VEÍCULOS E LEASING ---
  {
    id: 32, topic: "Crédito de Veículos e Leasing",
    text: "No Arrendamento Mercantil Financeiro (Leasing), quem é legalmente o proprietário do veículo até o término do contrato?",
    options: [
      "A companhia de arrendamento mercantil (arrendadora).",
      "O cliente que utiliza o veículo diariamente (arrendatário).",
      "A concessionária onde o carro foi retirado originalmente.",
      "O Detran do estado onde a placa foi registrada."
    ],
    correctIndex: 0,
    explanation: "No Leasing, o carro é tecnicamente 'alugado' para o cliente. Portanto, o dono no documento é a empresa de leasing."
  },
  {
    id: 33, topic: "Crédito de Veículos e Leasing",
    text: "Na modalidade de Crédito Direto ao Consumidor (CDC) para veículos, utiliza-se a alienação fiduciária. O que isso significa juridicamente?",
    options: [
      "Que o cliente detém a posse direta do bem, mas a instituição financeira possui a propriedade resolúvel até a quitação da dívida.",
      "Que o banco é o único dono do veículo e o cliente apenas paga por um serviço de assinatura de quilometragem.",
      "Que o veículo não pode ser apreendido sob nenhuma circunstância de inadimplência.",
      "Que a concessionária atua como fiadora solidária do cliente até o pagamento da última parcela."
    ],
    correctIndex: 0,
    explanation: "Alienação fiduciária no CDC significa: O carro é do cliente, mas fica alienado (preso) como garantia ao banco. O banco tem a propriedade resolúvel (que se extingue com o pagamento final)."
  },
  {
    id: 34, topic: "Crédito de Veículos e Leasing",
    text: "Um cliente assina um contrato de Leasing de veículo. Uma de suas obrigações financeiras para garantir a opção de compra no fim do contrato atende pela sigla:",
    options: [
      "VRG (Valor Residual Garantido).",
      "CET (Custo Efetivo Total).",
      "ISS (Imposto Sobre Serviços).",
      "TAC (Tarifa de Abertura de Crédito)."
    ],
    correctIndex: 0,
    explanation: "O VRG é a quantia que o cliente amortiza para ter a garantia de que, no final do aluguel, exercerá o direito de comprar e ficar com o veículo em definitivo."
  },
  {
    id: 35, topic: "Crédito de Veículos e Leasing",
    text: "Caso um consumidor deixe de pagar as prestações de um veículo financiado via CDC (Alienação Fiduciária), qual a medida judicial cabível pelo banco para retomar o bem?",
    options: [
      "Ação de Busca e Apreensão.",
      "Ação de Reintegração de Posse.",
      "Ação de Despejo Automotivo.",
      "Notificação Extrajudicial sem intervenção judicial."
    ],
    correctIndex: 0,
    explanation: "A Busca e Apreensão aplica-se ao CDC (bem alienado). A Reintegração de Posse aplica-se ao Leasing (bem é do banco)."
  },
  {
    id: 36, topic: "Crédito de Veículos e Leasing",
    text: "O Leasing Operacional é bastante utilizado por frotistas e locadoras. Qual é a sua principal diferença em relação ao Leasing Financeiro?",
    options: [
      "Não há o objetivo inicial de compra do bem e o VRG não é cobrado diluído nas mensalidades.",
      "O cliente se torna dono do veículo no momento em que assina a retirada na loja.",
      "A manutenção e o IPVA devem ser obrigatoriamente custeados pela prefeitura local.",
      "As parcelas sofrem reajustes diários atrelados à cotação do dólar."
    ],
    correctIndex: 0,
    explanation: "O Leasing Operacional foca estritamente no uso/aluguel. Ao fim do prazo, o bem geralmente volta para a empresa, sem o pagamento forçado de VRG."
  },
  {
    id: 37, topic: "Crédito de Veículos e Leasing",
    text: "A respeito dos tributos incidentes nas operações veiculares, é correto afirmar que:",
    options: [
      "O Leasing está sujeito à cobrança de ISS, enquanto o CDC sofre incidência de IOF.",
      "Ambas as modalidades são isentas de impostos federais para veículos de passeio.",
      "O CDC exige o pagamento de ICMS no ato da assinatura do contrato com o banco.",
      "O Leasing Operacional incide IOF e o Leasing Financeiro incide IRRF."
    ],
    correctIndex: 0,
    explanation: "Leasing é configurado como uma prestação de serviço (aluguel), atraindo o ISS municipal. CDC é uma operação de crédito financeira, atraindo o IOF federal."
  },
  {
    id: 38, topic: "Crédito de Veículos e Leasing",
    text: "Segundo a Resolução CMN 4.977, qual é o prazo mínimo regulamentar para a realização de um contrato de Leasing Financeiro de um veículo com vida útil de 5 anos?",
    options: [
      "24 meses (2 anos).",
      "36 meses (3 anos).",
      "12 meses (1 ano).",
      "48 meses (4 anos)."
    ],
    correctIndex: 0,
    explanation: "A legislação estipula um prazo mínimo de 2 anos (24 meses) para leasing de bens com vida útil até 5 anos (como a maioria dos automóveis leves)."
  },

  // --- PLD (Prevenção à Lavagem de Dinheiro) & COAF ---
  {
    id: 39, topic: "Lavagem de Dinheiro e COAF",
    text: "A Lei 9.613/98 define a Lavagem de Dinheiro como o ato de ocultar ou dissimular a origem de bens e valores provenientes de infração penal. O ciclo tradicional desse crime possui as seguintes etapas:",
    options: [
      "Colocação, Ocultação e Integração.",
      "Arrecadação, Estruturação e Lavagem.",
      "Suborno, Dispersão e Apropriação.",
      "Falsificação, Fragmentação e Recebimento."
    ],
    correctIndex: 0,
    explanation: "A tipologia internacional do crime se divide em Colocação (entrar no sistema), Ocultação (embaralhar o rastreio) e Integração (voltar limpo à economia)."
  },
  {
    id: 40, topic: "Lavagem de Dinheiro e COAF",
    text: "O que é o processo conhecido como 'Smurfing' no contexto da prevenção à lavagem de dinheiro (PLD)?",
    options: [
      "A prática de fragmentar grandes quantias em múltiplos pequenos depósitos ou saques para evitar o alerta automático dos sistemas de controle dos bancos.",
      "A transferência de recursos para empresas em paraísos fiscais chamadas de 'offshores'.",
      "A falsificação de CPFs para abertura de dezenas de contas digitais simultâneas.",
      "A compra de bens de luxo com dinheiro em espécie sem emissão de nota fiscal."
    ],
    correctIndex: 0,
    explanation: "A fragmentação (ou smurfing) é uma técnica da fase de colocação, usada para tentar 'passar por baixo do radar' dos limites obrigatórios de comunicação ao COAF."
  },
  {
    id: 41, topic: "Lavagem de Dinheiro e COAF",
    text: "Qual é o órgão central no Brasil responsável por receber as denúncias de atividades financeiras atípicas e analisar esses relatórios de inteligência?",
    options: [
      "COAF (Conselho de Controle de Atividades Financeiras).",
      "Polícia Federal (PF).",
      "CVM (Comissão de Valores Mobiliários).",
      "Febraban (Federação Brasileira de Bancos)."
    ],
    correctIndex: 0,
    explanation: "O COAF atua como a Unidade de Inteligência Financeira (UIF) no Brasil. Os bancos enviam os alertas para o COAF, que analisa e, se necessário, aciona a Polícia ou o Ministério Público."
  },
  {
    id: 42, topic: "Lavagem de Dinheiro e COAF",
    text: "As normas do Banco Central (Circular 3.978) exigem que as instituições financeiras e correspondentes conheçam detalhadamente seus clientes. Esse pilar de segurança é conhecido globalmente pela sigla:",
    options: [
      "KYC (Know Your Customer / Conheça Seu Cliente).",
      "ESG (Environmental, Social, and Governance).",
      "LGPD (Lei Geral de Proteção de Dados).",
      "B2B (Business to Business)."
    ],
    correctIndex: 0,
    explanation: "O princípio de 'Conheça seu Cliente' exige validação rigorosa de identidade, origem dos recursos e compatibilidade da renda com a movimentação."
  },
  {
    id: 43, topic: "Lavagem de Dinheiro e COAF",
    text: "Para o cadastro de prevenção à lavagem de dinheiro, a classificação de 'Pessoa Exposta Politicamente' (PEP) engloba:",
    options: [
      "Agentes públicos que desempenham cargos relevantes (como prefeitos e deputados) e seus parentes diretos ou estreitos colaboradores.",
      "Qualquer indivíduo que atue como influenciador digital com opiniões políticas declaradas.",
      "Todo funcionário público concursado de prefeituras, independente do cargo ou escalão.",
      "Apenas os Presidentes e Ministros de Estado em exercício no momento."
    ],
    correctIndex: 0,
    explanation: "A classificação PEP estende-se a familiares de 1º e 2º grau e parceiros próximos, exigindo monitoramento financeiro reforçado devido ao risco de corrupção/lavagem."
  },
  {
    id: 44, topic: "Lavagem de Dinheiro e COAF",
    text: "As instituições financeiras devem manter guardados e armazenados os dados cadastrais e registros de transações de seus clientes por um período mínimo de:",
    options: [
      "10 anos, para facilitar investigações futuras caso seja descoberta uma fraude tardia.",
      "2 anos, seguindo o padrão de obsolescência tecnológica.",
      "5 anos, alinhado com o prazo de negativação do Serasa.",
      "Prazo indeterminado, até a morte do titular da conta."
    ],
    correctIndex: 0,
    explanation: "A Circular Bacen determina a guarda dos registros probatórios para fins de PLD/FT por no mínimo 10 anos após a transação ou fim do relacionamento."
  },
  {
    id: 45, topic: "Lavagem de Dinheiro e COAF",
    text: "Sobre as sanções administrativas para empresas e administradores que descumprem regras de prevenção à lavagem de dinheiro, a lei estabelece que a multa aplicável:",
    options: [
      "Pode chegar até R$ 20.000.000,00 (vinte milhões de reais).",
      "É um valor fixo de um salário mínimo por transação não relatada ao COAF.",
      "É aplicada apenas à pessoa jurídica, isentando os diretores do banco de penalidades financeiras.",
      "Consiste apenas em cestas básicas revertidas para programas educacionais."
    ],
    correctIndex: 0,
    explanation: "A Lei 9.613 prevê penalidades pesadas, incluindo inabilitação profissional, advertências e multas que podem bater o teto de até 20 milhões de reais."
  },

  // --- LGPD (Lei Geral de Proteção de Dados) ---
  {
    id: 46, topic: "LGPD",
    text: "A Lei Geral de Proteção de Dados (LGPD) traz conceitos fundamentais. A pessoa natural a quem se referem os dados pessoais objeto do tratamento recebe a denominação técnica de:",
    options: [
      "Titular dos dados.",
      "Controlador dos dados.",
      "Operador dos dados.",
      "Encarregado (DPO)."
    ],
    correctIndex: 0,
    explanation: "O Titular é o 'dono' do dado pessoal. Ex: O cliente que está contratando um empréstimo."
  },
  {
    id: 47, topic: "LGPD",
    text: "A instituição financeira determina as finalidades e toma as principais decisões sobre como os dados de crédito serão utilizados. Nessa dinâmica da LGPD, a instituição atua no papel de:",
    options: [
      "Controlador.",
      "Operador.",
      "Encarregado.",
      "Auditor Nacional."
    ],
    correctIndex: 0,
    explanation: "Controlador: Toma as decisões e dita as regras do tratamento. O Operador: Executa o tratamento em nome do controlador."
  },
  {
    id: 48, topic: "LGPD",
    text: "De acordo com o Art. 5º da LGPD, informações como religião, orientação sexual, filiação sindical e biometria recebem um grau de proteção jurídica muito maior. Elas são chamadas de:",
    options: [
      "Dados pessoais sensíveis.",
      "Dados anonimizados absolutos.",
      "Dados financeiros abertos.",
      "Metadados de comportamento."
    ],
    correctIndex: 0,
    explanation: "Dados sensíveis são todos aqueles com potencial inerente de causar discriminação se caírem em mãos erradas ou vazarem."
  },
  {
    id: 49, topic: "LGPD",
    text: "Qual é o princípio da LGPD que determina que o banco ou correspondente deve coletar apenas as informações estritamente indispensáveis para rodar o contrato, sem pedir informações excessivas?",
    options: [
      "Princípio da Necessidade.",
      "Princípio da Livre Concorrência.",
      "Princípio da Prevenção.",
      "Princípio do Livre Acesso."
    ],
    correctIndex: 0,
    explanation: "O princípio da Necessidade (ou Minimização) dita que você só coleta o que realmente precisa para atingir a finalidade (Ex: Não pedir a religião do cliente para aprovar um CDC de veículo)."
  },
  {
    id: 50, topic: "LGPD",
    text: "Na estrutura organizacional desenhada pela LGPD, existe a figura que age como uma 'ponte' de comunicação entre a empresa, os clientes titulares dos dados e a Autoridade Nacional (ANPD). Esse profissional é o:",
    options: [
      "Encarregado pelo Tratamento de Dados Pessoais (Data Protection Officer - DPO).",
      "Ouvidor Geral do Sistema Financeiro.",
      "Gerente de Relacionamento (Private).",
      "Diretor de Compliance e Riscos."
    ],
    correctIndex: 0,
    explanation: "O Encarregado (DPO) é a pessoa oficial designada pela empresa para receber as reclamações dos clientes sobre privacidade e dialogar com a ANPD."
  },
  {
    id: 51, topic: "LGPD",
    text: "O conceito de 'Privacy by Design' é amplamente cobrado em adequações de LGPD. O que essa expressão representa na prática de um novo aplicativo financeiro?",
    options: [
      "Que os parâmetros e defesas de proteção da privacidade sejam pensados desde o primeiro rascunho do projeto, de forma preventiva e embutida na engenharia do sistema.",
      "Que o design visual do aplicativo use cores discretas para não chamar atenção de hackers em ambientes públicos.",
      "Que a empresa contrate um designer de segurança cibernética terceirizado antes de publicar no Google Play.",
      "Que o termo de consentimento seja ocultado no rodapé para melhorar o design da tela de login."
    ],
    correctIndex: 0,
    explanation: "Privacy by Design significa arquitetar a privacidade desde o nascimento/concepção da ideia, para não ter que tapar 'buracos' depois que o produto já está operando."
  },
  {
    id: 52, topic: "LGPD",
    text: "A LGPD elenca 10 Bases Legais (hipóteses que autorizam o uso do dado). Qual destas bases permite que os bureaus de crédito (ex: Cadastro Positivo, Serasa) processem as informações de dívidas de um cliente, MESMO sem o consentimento dele?",
    options: [
      "Proteção ao Crédito.",
      "Tutela da Saúde Exclusiva.",
      "Execução de Políticas Públicas Sociais.",
      "Legítimo Interesse do Operador Secundário."
    ],
    correctIndex: 0,
    explanation: "O legislador criou a base de Proteção ao Crédito justamente para evitar que clientes inadimplentes negassem o consentimento para sumir dos sistemas de restrição, quebrando o risco sistêmico financeiro."
  },
  {
    id: 53, topic: "LGPD",
    text: "Ocorreu um ataque de hackers (Ransomware) no sistema de um banco, vazando dados completos, senhas e CPFs de 5 milhões de correntistas. Pela LGPD, o que o controlador deve fazer primariamente?",
    options: [
      "Comunicar a ocorrência do incidente à ANPD e aos titulares em prazo razoável (recomendado 2 dias úteis), pois há alto risco de danos aos direitos.",
      "Emitir uma nota na imprensa negando o fato até que a equipe de TI descubra como bloquear o ataque.",
      "Excluir os bancos de dados secundários para mascarar o volume do ataque contra multas maiores.",
      "Bloquear a conta dos 5 milhões de correntistas e aplicar uma taxa de recuperação de segurança."
    ],
    correctIndex: 0,
    explanation: "Todo incidente que traga risco considerável (fraudes financeiras, falsidade ideológica por vazamento de CPF) exige comunicação rápida e transparente."
  },
  {
    id: 54, topic: "LGPD",
    text: "Um cliente percebe que teve o crédito veicular negado. Pela nova regulação e pelo conceito de decisão algorítmica da LGPD, qual direito assiste a esse titular?",
    options: [
      "O direito de solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado (robôs) que definam seu perfil ou afetem seus interesses.",
      "O direito de exigir a liberação compulsória do crédito pelo Procon local.",
      "O direito de apagar todos os rastros bancários que geraram o score baixo na hora da análise.",
      "O direito de transferir a decisão automatizada para julgamento do Banco Central."
    ],
    correctIndex: 0,
    explanation: "A LGPD garante que você não seja julgado cegamente por um robô (IA/Algoritmo). Se negado, o cliente pode exigir transparência sobre os critérios e revisão humana da decisão (Art. 20)."
  },
  {
    id: 55, topic: "LGPD",
    text: "Se um correspondente deixa contratos impressos com dados, renda e cópia de documentos de clientes em cima de uma mesa exposta no hall do escritório, qual princípio e qual camada de segurança da LGPD ele quebrou?",
    options: [
      "Quebrou a confidencialidade da informação e violou o Princípio da Segurança.",
      "Quebrou a portabilidade do dado e violou o Princípio do Livre Acesso.",
      "Quebrou a anonimização técnica e violou a base legal do Consentimento.",
      "Aumentou a disponibilidade do dado e obedeceu ao Princípio da Transparência Pública."
    ],
    correctIndex: 0,
    explanation: "A segurança da informação não é só tecnologia digital. Deixar papeis expostos (clean desk policy) rompe a confidencialidade (pessoas não autorizadas veem a informação física)."
  },

  // --- REFORÇOS MISTOS (Completando as 60 questões) ---
  {
    id: 56, topic: "Sistema Financeiro Nacional",
    text: "As operações realizadas no Brasil via Open Finance dependem, na ótica da LGPD, de uma etapa rigorosa que antecede o fluxo de dados bancários para outras instituições. Que etapa é essa?",
    options: [
      "O consentimento detalhado e específico do cliente concedendo acesso ao seu histórico na plataforma de destino.",
      "O bloqueio total e irrevogável das chaves Pix vinculadas ao CPF do titular.",
      "A emissão de um termo de confissão de dívida homologado pela Receita Federal.",
      "O pagamento prévio de tarifas de portabilidade algorítmica."
    ],
    correctIndex: 0,
    explanation: "O Open Finance baseia-se 100% no controle de posse dos dados pelo cliente. Nada flui de um banco ao outro sem o aceite e o comando claro do titular (Consentimento)."
  },
  {
    id: 57, topic: "Código de Defesa do Consumidor (CDC)",
    text: "Na venda de produtos fora do estabelecimento comercial (internet), como se calcula o prazo do direito de arrependimento?",
    options: [
      "7 dias contados a partir da assinatura do contrato ou do ato de recebimento do produto/serviço.",
      "15 dias contados da aprovação do pagamento na operadora de cartão de crédito.",
      "3 dias úteis exclusivos para produtos financeiros de consórcios mobiliários.",
      "O prazo é vitalício se a compra for efetuada por idosos acima de 65 anos."
    ],
    correctIndex: 0,
    explanation: "O prazo se inicia quando o negócio é concretizado faticamente e o bem/serviço é disponibilizado ao consumidor, mantendo o limite fixo legal de 7 dias (CDC art. 49)."
  },
  {
    id: 58, topic: "Matemática Financeira",
    text: "Numa operação que cobra juros de mora (atraso no pagamento), a incidência dessa taxa tem qual finalidade primária?",
    options: [
      "Punir financeiramente o devedor pela impontualidade e inexecução do contrato na data combinada.",
      "Remunerar a instituição pela inflação do período do contrato principal inteiro.",
      "Cobrir os custos das seguradoras envolvidas em operações prestamistas automáticas.",
      "Aumentar artificialmente o spread bancário exigido pelas regras de compulsório do Bacen."
    ],
    correctIndex: 0,
    explanation: "Juros de mora = Penalidade pelo atraso (natureza moratória/punitiva). Diferente dos Juros Remuneratórios = Aluguel pelo uso do dinheiro."
  },
  {
    id: 59, topic: "Prevenção à Lavagem de Dinheiro (PLD)",
    text: "Caso um banco suspeite que as dezenas de transações vultosas de um cliente que alega ser 'desempregado' configuram lavagem de dinheiro, ele deve agir sem que o cliente desconfie. Por que não se avisa o criminoso?",
    options: [
      "Para evitar o crime de frustração de investigação ou vazamento de sigilo sobre o reporte da suspeita (Tip-off).",
      "Para conseguir cobrar taxas mais altas de manutenção antes que a conta seja encerrada pelo juiz.",
      "Porque o Código de Defesa do Consumidor impede críticas morais à renda autodeclarada do cidadão.",
      "Porque a lavagem de dinheiro em transações nacionais é isenta de análise se comprovado recolhimento de IR."
    ],
    correctIndex: 0,
    explanation: "Avisar o suspeito que ele está sendo investigado ou reportado ao COAF anula o trabalho de inteligência, configurando o alerta proibido que atrapalha o rastreio da organização."
  },
  {
    id: 60, topic: "Crédito de Veículos e Leasing",
    text: "Para registrar o vínculo do banco ou da arrendadora no veículo junto ao Detran (incluindo o gravame restritivo de venda no documento digital do carro), utiliza-se o sistema centralizado chamado:",
    options: [
      "SNG (Sistema Nacional de Gravames).",
      "SCR (Sistema de Informação de Crédito do Bacen).",
      "COAF Digital de Trânsito.",
      "Sisbacen Veicular."
    ],
    correctIndex: 0,
    explanation: "O SNG é a mega base eletrônica que comunica as financeiras, montadoras e os Detrans de todo o país para prender e soltar a placa/chassi em operações de CDC e Leasing."
  }
];
