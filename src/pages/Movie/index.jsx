import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../Home";
import { urlImg } from "../../components/Card";
const movieUrl = import.meta.env.VITE_API;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const loadMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    const url = `${movieUrl}/${id}?${apiKey}`;

    loadMovie(url);
  }, []);
  console.log(movie);
  return (
    <section className="bg-slate-900 p-4 rounded-md shadow-2xl w-4/5 flex gap-5 mx-auto">
      <div className="w-1/3">
        {movie && (
          <img
            className="h-96 w-full"
            src={`${urlImg}${movie.poster_path}`}
            alt="capa"
          />
        )}
      </div>
      <div className="w-2/3">
        {movie && (
          <>
            <h1 className="text-2xl text-amber-300 font-semibold">
              {movie.title}
            </h1>
            <span className="flex items-center gap-3 text-amber-200">
              <h2 className="text-xl font-semibold">Genres: </h2>
              {movie.genres &&
                movie.genres.map((genero) => {
                  return <h2>{genero.name}</h2>;
                })}
            </span>
            <div className="h-44 w-[65%] p-3 mb-4 overflow-y-scroll scrollbar-thin  scrollbar-thumb-amber-300 scrollbar-track-slate-700 ">
              <p>{movie.overview}</p>
            </div>

            <h2 className="text-amber-100">
              <span className="text-amber-200 font-semibold text-xl">Original language:</span> {movie.original_language}
            </h2>
          </>
        )}
      </div>
    </section>
  );
};

export default Movie;
