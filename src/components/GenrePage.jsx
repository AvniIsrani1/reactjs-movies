import React from "react";
import { useState, useEffect } from "react";
import MoviesList from "./MoviesList";
import LoadingMovies from "./LoadingMovies";

function GenrePage(props) {
  const { chosenGenre, setChosenGenre, api_key, genID } = props;
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [curPage, setCurPage] = useState(1);
  

  useEffect(() => {
    async function fetchAPIData() {
      console.log("fetching data for page "+ curPage);
      // const url=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`;
      const url =
        "https://api.themoviedb.org/3/discover/movie" +
        `?api_key=${api_key}` +
        "&with_genres="
        +`${genID.genres.find((g)=>g.name===chosenGenre).id}`
        +`&page=${curPage}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
        setLoading(false);
      } catch (err) {
        console.log("not possible");
        console.log(err.message);
        setLoading(true);
      }
    }
    fetchAPIData();
  }, [chosenGenre, curPage]);
  


  console.log(chosenGenre);
  console.log(genID.genres.find((g)=>g.name===chosenGenre).id);

  return (
    <div className="bg-custom-black min-h-screen ">
      <header className="flex items-center min-h-[50px] mx-2 mb-10">
        <button
          onClick={() => {
            setChosenGenre(null);
          }}
          className="text-white text-4xl mt-4 mx-3"
        >
          {chosenGenre} 
        </button>
      </header>
      {!loading && (
        <MoviesList loading={loading} setLoading={setLoading} movies={movies} setMovies={setMovies} curPage={curPage} setCurPage={setCurPage} />
      )}
      {loading && (
        <LoadingMovies loading={loading} setLoading={setLoading} movies={movies} />
      )}

    </div>
  );
}

export default GenrePage;
