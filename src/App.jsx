import { useState } from "react";
import GenreSelection from "./components/GenreSelection";

function App() {
  const genres = [
    { genre: "Romance", pic: "/pexels-kpaukshtite-704748.jpg" },
    { genre: "Comedy", pic: "/pexels-monica-713149.jpg" },
    { genre: "Adventure", pic: "/pexels-sebastian-palomino-933481-1955134.jpg"},
    { genre: "Mystery", pic: "/pexels-pixabay-356079.jpg" },
    { genre: "Horror", pic: "/pexels-pedro-figueras-202443-626163.jpg" },
    { genre: "Science Fiction", pic: "/pexels-pixabay-41951.jpg" },
    { genre: "Fantasy", pic: "/pexels-pixabay-326055.jpg" },
    // { genre: "Musical", pic: "/pexels-pixabay-462447.jpg" },
  ];

  const [chosenGenre, setChosenGenre] = useState(null);
  return (
    <>
{      !chosenGenre && <GenreSelection genres={genres} setChosenGenre={setChosenGenre}/>
}    </>
  );
}

export default App;
