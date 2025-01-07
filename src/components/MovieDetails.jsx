import React from "react";
import { useState, useEffect } from "react";

function MovieDetails(props) {
  const { moreDetails, setMoreDetails, movies, api_key } = props;

  return (
    <div className="flex justify-center items-center fixed inset-0 z-50">
      <div onClick={()=>setMoreDetails(null)} className="flex flex-col items-center justify-center max-w-[50%] max-h-[50%] bg-custom-black p-5 min-w-[400px] min-h-[400px] text-custom-grey outline outline-white rounded-md">
      <p className="font-bold text-xl pb-2">{movies.results[moreDetails].original_title}</p>
        <div className="flex flex-row items-center">
          <img
            src={`https://image.tmdb.org/t/p/w200/${movies.results[moreDetails].poster_path}`}
            className="rounded-xl w-1/2 h-1/2 m-2"
          ></img>
          <div className="flex flex-col">
          <p className="pt-2">{movies.results[moreDetails].overview}</p>
          <br></br>
          <p>{movies.results[moreDetails].original_language.toUpperCase()}</p>
          <p className="">{movies.results[moreDetails].release_date}</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
