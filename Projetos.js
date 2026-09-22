function Projetos() {
  const projetos = [
    {
      id: 1,
      nome: "Site de Catering",
      descricao: "Sistema para gerenciamento de eventos",
    },
    {
      id: 2,
      nome: "Portfólio Web",
      descricao: "Meu site pessoal em HTML, CSS e JS",
    },
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map((projeto) => (
        <div key={projeto.id}>
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
        </div>
      ))}
    </section>
  );
}

export default Projetos;
