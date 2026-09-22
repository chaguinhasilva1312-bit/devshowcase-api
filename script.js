const projetos = [
  {
    nome: "Sistema Bancário Digital",
    descricao: "Aplicativo com saldo, extrato e PIX",
    link: "#"
  },
  {
    nome: "Site de Portfólio",
    descricao: "Meu primeiro site com HTML, CSS e JS",
    link: "#"
  },
  {
    nome: "Projeto de Banco de Dados",
    descricao: "Modelagem DER e SQL",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}">Ver projeto</a>
  `;

  container.appendChild(card);
});
