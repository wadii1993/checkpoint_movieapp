import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./components/headernav/HeaderNav";
import { moviedata } from "./Data";
import MovieList from "./components/movielist/MovieList";
import { useState } from "react";
import AddMovie from "./components/addmovie/AddMovie";

function App() {
  const [movy, setMovy] = useState(moviedata);

  const handledelete = (idmovie) => {
    setMovy(movy.filter((el) => el.id !== idmovie));
  };
  const hundleAdd = (newMovie) => {
    if (newMovie) {
      const newList = [
        ...movy,
        {
          id: Math.random(),
          urlmovie_img: newMovie.urlmovie_img,
          rate: newMovie.rate,
          titre: newMovie.titre,
          date: newMovie.date,
          trailerurl: newMovie.trailerurl,
          description: newMovie.description,
        },
      ];
      setMovy(newList);
    } else {
      alert("please enter a valid movie");
    }
  };
  const [search, setSearch] = useState("");
  const searchbytitle = (e) => {
    setSearch(e.target.value);
  };
  const [ratefil, setRatefil] = useState(0);
  const searchbyrate = (ratefil) => {
    setRatefil(ratefil);
  };

  return (
    <div className="App">
      <HeaderNav searchbytitle={searchbytitle} searchbyrate={searchbyrate} />
      <div className="App-header">
        <MovieList
          movie={movy.filter(
            (elt) =>
              elt.titre
                .trim()
                .toLocaleLowerCase()
                .includes(search.trim().toLowerCase()) && elt.rate >= ratefil
          )}
          del={handledelete}
          search={search}
        />
        <AddMovie hundleAdd={hundleAdd} />
      </div>
    </div>
  );
}

export default App;
