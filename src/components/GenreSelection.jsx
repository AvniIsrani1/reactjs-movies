import React from "react";

function GenreSelection(props) {
  const { genres, setChosenGenre } = props;
  return (
    <div className="bg-custom-black min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-y-20">
        <p className="text-white text-4xl mt-10 pt-20">Select a genre to begin.</p>
        <div className="flex flex-wrap justify-center items-center px-5 md:px-20 lg:px-50 gap-y-20 gap-x-5">
          {genres.map((g) => {
            return (
              <div
                key={g.genre}
                className="flex flex-col items-center justify-center w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[150px] lg:w-[220px] lg:h-[200px] mx-1 my-5 gap-4 group"
              >
                <button
                  onClick={() => {
                    setChosenGenre(g.genre);
                  }}
                  className="w-full"
                >
                  <img
                    src={g.pic}
                    className="w-[200px] h-[200px] rounded-xl hover:border-2"
                  ></img>
                </button>
                <p className="text-custom-grey group-hover:text-white">
                  {g.genre}
                </p>
              </div>
            );
          })}
        </div>
        <button className="text-custom-grey outline outline-1 px-10 py-2 rounded-sm hover:text-white mb-10">
          Manage Genres
        </button>
      </div>
    </div>
  );
}

export default GenreSelection;
