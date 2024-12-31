import React from 'react'

function MoviesList(props) {
    const {loading, movies} = props;
  return (
    <main>
    {!loading&&(<div className="flex flex-col mx-10">
      <div className="flex flex-wrap justify-center items-center gap-2">
        {movies &&
          movies.results.map((m) => {
            return (
              <div key={m.id} className="w-[200px] h-[200px] m-2">
                <button className="justify-center w-full h-full object-cover rounded-xl outline hover:scale-150 transition-all duration-300">
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${m.poster_path}`}
                    className="rounded-xl w-[200px] h-[200px]"
                  ></img>
                </button>
              </div>
            );
          })}
      </div>
      <div className="flex flex-wrap justify-center items-center m-10 text-custom-grey">
      {movies && movies.total_pages > 3 ? (
            <>
            <button 
            onClick={()=>{

            }}
            className="min-h-[10px] min-w-[40px] outline hover:text-white m-2 rounded">1</button>
            <button className="min-h-[10px] min-w-[40px] outline hover:text-white m-2 rounded">2</button>
            <p>. . .</p>
            <button className="min-h-[10px] min-w-[40px] outline hover:text-white m-2 rounded">{movies.total_pages}</button>
            </>
        ) : (
          <>

            {Array.from({ length: movies.total_pages }).map((_, index) => (
                <button key={index} className="min-h-[10px] min-w-[40px] outline hover:text-white m-2 rounded">
                {index + 1}
                </button>
            ))}
          </>
        )}
      </div>
    </div>)}
  </main>
  )
}

export default MoviesList