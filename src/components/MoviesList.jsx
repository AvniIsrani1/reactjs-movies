import React from 'react'

function MoviesList(props) {
    const {loading, setLoading, movies, setMovies, curPage, setCurPage} = props;
    console.log(curPage);
  return (
    <main key = {curPage}>
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
      {movies && movies.total_pages - curPage > 3 && curPage <498 ? (
            <>
            <button className="min-h-[10px] min-w-[40px] outline hover:text-white m-2 rounded"> {curPage} </button>
            <button onClick={()=>{setCurPage(curPage+1)}} className="min-h-[10px] min-w-[40px] outline hover:text-white m-2 rounded">{curPage+1}</button>
            <p>. . .</p>
            <button onClick={()=>{movies.total_pages<=500 ? setCurPage(movies.total_pages) : setCurPage(500)}} className="min-h-[10px] min-w-[40px] outline hover:text-white m-2 rounded">{movies.total_pages<=500 ? movies.total_pages : 500}</button>
            </>
        ) : (
          <>

            {Array.from({ length: 3}).map((_, index) => (
                <button key={index+curPage <= 500 ? index+curPage : index + (curPage-500)} onClick={()=>{index+curPage <= 500 ? setCurPage(index+curPage) : setCurPage(index + (curPage-500))}} className="min-h-[10px] min-w-[40px] outline hover:text-white m-2 rounded">
                {index+curPage <= 500 ? index+curPage : index + (curPage-500)}
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