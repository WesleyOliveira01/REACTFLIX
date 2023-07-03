import { useState, useEffect } from "react";
import Card from "../../components/Card";
const moviesUrl = import.meta.env.VITE_API;
export const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };
  useEffect(() => {
    const topMoviesUrl = `${moviesUrl}top_rated?${apiKey}`;
    getMovies(topMoviesUrl);
  }, []);
  return (
    <>
      <h1 className="text-2xl m-3 font-semibold text-amber-400 ">
        Movies most rated
      </h1>
      <section className="py-4 flex justify-evenly flex-wrap gap-3">
        {topMovies.length === 0 && (
          <h1 className="text-center text-amber-400">Carregando...</h1>
        )}
        
            {topMovies.length > 0 &&
              topMovies.map((filmes) => {
                return <Card key={filmes.id} filme={filmes} />;
              })}
        
      </section>
    </>
  );
};

export default Home;
