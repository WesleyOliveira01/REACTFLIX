import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { apiKey } from "../Home";
import Card from "../../components/Card";
export const movieUrl = import.meta.env.VITE_SEARCH;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movie, setMovie] = useState([]);
  const resultado = searchParams.get("q");

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data.results);
  };
  useEffect(() => {
    const searchUrl = `${movieUrl}?query=${resultado}&${apiKey}`;
    getMovie(searchUrl);
  }, [resultado]);

  console.log(movie);
  return (
    <>
      <h1 className="text-2xl font-semibold text-amber-400 ">
        Results to: <span>{resultado}</span>
      </h1>
      <section className="py-4 flex justify-evenly flex-wrap gap-3">
        {movie.length === 0 && (
          <h1 className="text-amber-300 text-2xl">Carregando...</h1>
        )}
        {movie && movie.map((filme) =>{
          return  <Card key={movie.id} filme={filme} />
        })}
      </section>
    </>
  );
};

export default Search;
