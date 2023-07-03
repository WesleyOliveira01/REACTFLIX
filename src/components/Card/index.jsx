import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export const urlImg = import.meta.env.VITE_IMG;

const Card = ({ filme, showLink = true }) => {
  return (
    <section className="bg-slate-900 p-3 rounded-md shadow-xl text-slate-300 flex flex-col w-1/4 h-auto gap-3 justify-between">
      <div>
        <div className="w-full h-3/4 p-1">
          <img
            className="pointer-events-none h-full w-full"
            src={`${urlImg}${filme.poster_path}`}
            alt=""
          />
        </div>
        <div className="w-full ">
          <h1 className="text-amber-300 font-semibold text-xl">
            {filme.title}
          </h1>
          <h2>
            <span className="font-semibold">Release year:</span>{" "}
            {filme.release_date}{" "}
          </h2>
          <span className="flex gap-2 font-semibold">
            IMDB:{" "}
            <h2 className="text-amber-300 flex items-center">
              <AiFillStar /> {filme.vote_average}
            </h2>
          </span>
        </div>
      </div>

      {showLink && (
        <button className="bg-amber-300 p-2 text-slate-900 font-semibold rounded-md my-2 w-full">
          <Link to={`/movie/${filme.id}`}>See more</Link>
        </button>
      )}
    </section>
  );
};

export default Card;
