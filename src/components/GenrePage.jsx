import React from "react";
import { useState, useEffect } from "react";
import MoviesList from "./MoviesList";
import LoadingMovies from "./LoadingMovies";

function GenrePage(props) {
  const { chosenGenre, setChosenGenre } = props;
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    async function fetchAPIData() {
      // const url=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`;
      const url =
        "https://api.themoviedb.org/3/discover/movie" +
        `?api_key=${api_key}` +
        "&with_genres=28"
        +`page=1`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
        setLoading(false);
      } catch (err) {
        console.log("not possible");
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, [api_key]);

  console.log(chosenGenre);

  return (
    <div className="bg-custom-black min-h-screen ">
      <header className="flex items-center min-h-[50px] mx-2 mb-10">
        <button
          onClick={() => {
            setChosenGenre(null);
          }}
          className="text-white"
        >
          {chosenGenre}
        </button>
      </header>
      {!loading && (
        <MoviesList loading={loading} setLoading={setLoading} movies={movies}/>
      )}
      {loading && (
        <LoadingMovies loading={loading} setLoading={setLoading} movies={movies} />
      )}

    </div>
  );
}

export default GenrePage;
