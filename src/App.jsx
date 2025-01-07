import { useState, useEffect } from "react";
import GenreSelection from "./components/GenreSelection";
import GenrePage from "./components/GenrePage";

function App() {
  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  const genres = [
    { genre: "Romance", pic: "/romance.jpg" },
    { genre: "Comedy", pic: "/comedy.jpg" },
    { genre: "Adventure", pic: "/adventure.jpg",},
    { genre: "Mystery", pic: "/mystery.jpg" },
    { genre: "Horror", pic: "/horror.jpg" },
    { genre: "Science Fiction", pic: "/science_fiction.jpg" },
    { genre: "Fantasy", pic: "/fantasy.jpg" },
    // { genre: "Musical", pic: "/pexels-pixabay-462447.jpg" },
  ];
  const [genID, setGenID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chosenGenre, setChosenGenre] = useState(null);



  useEffect(() => {
    async function fetchAPIGenreID() {
      // const url='https://api.themoviedb.org/3/genre/movie/list?api_key=ad7b52c94b36a91aa43721e6c4aaa049';
      const url =
        "https://api.themoviedb.org/3/genre/movie/list" +
        `?api_key=${api_key}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setGenID(data);
        setLoading(false);
      } catch (err) {
        console.log("not possible");
        console.log(err.message);
      }
    }
    fetchAPIGenreID();
  }, []);


  return (
    <>
    {/* {genID && genID.genres.map((g)=>{
      return (
        <p key={g.id}>{g.id}</p>
      )
    })} */}
      {console.log(genID)}
      {!chosenGenre && (
        <GenreSelection genres={genres} setChosenGenre={setChosenGenre} />
      )}
      {chosenGenre && (
        <GenrePage chosenGenre={chosenGenre} setChosenGenre={setChosenGenre} api_key={api_key} genID={genID}/>
      )}

    </>
  );




}

export default App;
