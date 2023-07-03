import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AiFillPlayCircle, AiOutlineSearch } from "react-icons/ai";
const Menu = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <header className="p-4 bg-slate-800">
      <nav className="flex justify-between items-center">
        <h2 className="font-semibold text-amber-300 text-2xl flex items-center gap-1 ">
          <AiFillPlayCircle size={30} /> <Link to="/"> MovieRatings</Link>
        </h2>
        <form onSubmit={handleSubmit} className="flex w-1/4 gap-1 justify-end">
          <input
            name="search"
            type="text"
            placeholder="Find a movie"
            className="outline-none bg-slate-200 p-2 rounded-md text-slate-700 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-amber-300 p-2 rounded-md font-semibold"
          >
            <AiOutlineSearch size={25} />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Menu;
