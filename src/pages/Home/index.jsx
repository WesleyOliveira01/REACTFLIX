import { useState, useEffect } from "react";
import Card from "../../components/Card";
import MovieSection from "../../components/MovieSection";
const moviesUrl = import.meta.env.VITE_API;
export const apiKey = import.meta.env.VITE_API_KEY;
const popularMovies = import.meta.env.VITE_POPULAR_MOVIES;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const getMovies = async (url,getter) => {
    const res = await fetch(url);
    const data = await res.json();
    getter(data.results);
  };
  useEffect(() => {
    const topMoviesUrl = `${moviesUrl}top_rated?${apiKey}`;
    const popularMovieUrl = `${popularMovies}${apiKey}`
    getMovies(topMoviesUrl,setTopMovies);
    getMovies(popularMovieUrl,setAllMovies)
  }, []);

  return (
    <>
      <h1 className="text-2xl m-3 font-semibold text-amber-400 ">
        Movies most rated
      </h1>
      <section className="py-4 flex justify-evenly flex-wrap gap-3">
        {topMovies.length === 0 ? (
          <h1 className="text-center text-amber-400">Carregando...</h1>
        ) : (
          topMovies.map((filmes) => {
            return <Card key={filmes.id} filme={filmes} />;
          })
        )}
      </section>

      <MovieSection filmes={allMovies} titulo="Popular Movies" />
    </>
  );
};

export default Home;
