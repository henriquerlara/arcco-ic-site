export const empresa = Object.freeze({
  razao: "ARCCO INTELIGENCIA COMERCIAL LTDA.",
  cnpj: "69.300.938/0001-23",
  site: "https://www.arccoic.com",
});

export const hero = Object.freeze({
  kicker: "WhatsApp, automação e gestão comercial",
  lines: ["Seu negócio avança.", "A gestão acompanha."],
  support:
    "Conectamos o WhatsApp à gestão para facilitar a relação com seus clientes e a rotina de quem fornece produtos e serviços à construção.",
  action: "Conhecer a solução",
});

export const introduction = Object.freeze({
  label: "A plataforma ARCCO",
  lines: [
    "O comercial tem",
    "muitas partes.",
    "A gestão precisa",
    "considerar todas.",
  ],
  text: "Um pedido chega na conversa, vira uma negociação e precisa seguir pela empresa. Quando as informações ficam espalhadas, sua equipe tem mais trabalho para dar continuidade ao que foi combinado.",
  detail:
    "A ARCCO aproxima essas etapas: o contato com o cliente se conecta à organização dos negócios e à rotina operacional.",
  caption: "Produtos, especificações e decisões fazem parte do mesmo trabalho.",
});

export const areas = Object.freeze([
  {
    id: "relacionamento",
    tone: "dark",
    number: "01",
    name: "Relacionamento",
    title: "Cada conversa faz parte de uma relação.",
    text: "A relação com o cliente continua depois do primeiro pedido. Conhecer as pessoas e os negócios que fazem parte dela ajuda sua equipe a retomar cada conversa com contexto.",
    detail:
      "Na ARCCO, clientes e parceiros têm seu lugar na organização comercial, junto das atividades que acompanham cada relação.",
    image: "relacionamento",
    imageWidth: 1672,
    imageHeight: 941,
    alt: "Duas pessoas conversam em um ambiente comercial de produtos para a construção.",
    caption: "O comercial começa nas pessoas e nas conversas.",
    modules: [
      {
        title: "Clientes",
        text: "Uma frente para os relacionamentos com quem compra produtos ou contrata os serviços da sua empresa.",
      },
      {
        title: "Parceiros",
        text: "O contexto das pessoas e empresas que também participam do seu comercial.",
      },
    ],
    next: { href: "#negocios", label: "Negócios e próximos passos" },
  },
  {
    id: "negocios",
    number: "02",
    name: "Negócios",
    title: "Uma negociação tem mais de um próximo passo.",
    text: "Uma proposta precisa de retorno, uma reunião tem data e cada oportunidade está em um momento. Sua equipe precisa enxergar o que vem a seguir.",
    detail:
      "A ARCCO reúne oportunidades e compromissos para ajudar a acompanhar cada negociação.",
    image: "negocios",
    imageWidth: 1672,
    imageHeight: 941,
    alt: "Duas pessoas analisam uma proposta e conversam em uma mesa de trabalho.",
    caption: "Negociações e compromissos pertencem à mesma rotina.",
    modules: [
      {
        title: "Negócios e visão geral",
        text: "Frentes dedicadas às negociações e à perspectiva da atividade comercial dentro da plataforma.",
      },
      {
        title: "Agenda",
        text: "Os compromissos que acompanham o trabalho comercial também têm seu espaço na proposta da ARCCO.",
      },
    ],
    next: { href: "#operacao", label: "A operação por trás da venda" },
  },
  {
    id: "operacao",
    tone: "dark",
    number: "03",
    name: "Operação",
    title: "A venda tem uma operação por trás.",
    text: "O que foi combinado com o cliente precisa encontrar os produtos, os fornecedores e a organização da empresa.",
    detail:
      "A ARCCO aproxima a rotina operacional do comercial, para que a venda tenha continuidade no fornecimento.",
    image: "operacao",
    imageWidth: 1536,
    imageHeight: 1024,
    alt: "Caixas e produtos organizados para fornecimento, com prateleiras de estoque ao fundo.",
    caption: "Organização e fornecimento também fazem parte do comercial.",
    modules: [
      {
        title: "Estoque e fornecedores",
        text: "Os produtos e as relações de fornecimento compõem o contexto operacional da plataforma.",
      },
      {
        title: "Fiscal",
        text: "Uma frente dedicada ao contexto fiscal da operação, apresentada como parte da gestão comercial.",
      },
    ],
    next: { href: "#whatsapp", label: "O WhatsApp dentro da gestão" },
  },
]);

export const whatsapp = Object.freeze({
  label: "Relacionamento pelo WhatsApp",
  title: "O contato segue no WhatsApp. O trabalho avança na ARCCO.",
  text: "Da primeira conversa aos próximos negócios, sua empresa mantém a relação no canal que o cliente já usa.",
  steps: [
    {
      title: "Para seus clientes",
      text: "Conversar pelo WhatsApp, explicar o que precisam e seguir com sua equipe no mesmo canal.",
    },
    {
      title: "Para sua equipe",
      text: "A automação reúne informações do pedido. A plataforma organiza o contexto para negociar e acompanhar os próximos passos.",
    },
    {
      title: "Para sua empresa",
      text: "Menos informações para copiar entre conversas e controles. Mais clareza para dar sequência ao que foi combinado.",
    },
  ],
  next: { href: "#produto", label: "Conhecer a plataforma completa" },
});

export const fechamento = Object.freeze({
  label: "ARCCO · Inteligência comercial",
  lines: ["Mais fluidez", "para o seu comercial."],
  text: "Facilitar a rotina de quem vende para a construção é o que orienta a ARCCO: menos informações espalhadas e mais clareza para cuidar dos clientes e fazer o trabalho avançar.",
  noteTitle: "Tecnologia a serviço da sua rotina.",
  note: "Sua equipe conhece os clientes e conduz os negócios. A ARCCO ajuda a organizar o trabalho que sustenta essas relações.",
  summary: [
    { title: "Relacionamento", text: "Mais contexto em cada conversa." },
    { title: "Negócios", text: "Próximos passos com clareza." },
    { title: "Operação", text: "Continuidade ao que foi combinado." },
  ],
});
