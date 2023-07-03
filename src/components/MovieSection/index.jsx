import Card from "../Card";

const MovieSection = ({filmes,titulo}) => {
  return (
    <>
         <h1 className="text-2xl m-3 font-semibold text-amber-400">
        {titulo}
      </h1>
      <section className="py-4 flex justify-evenly flex-wrap gap-3">
        {filmes.length === 0 ? (
          <h1 className="text-center text-amber-400">Carregando...</h1>
        ) : (
          filmes.map((filme) => {
            return <Card key={filme.id} filme={filme} />;
          })
        )}
      </section>
    </>
  )
}


export default MovieSection