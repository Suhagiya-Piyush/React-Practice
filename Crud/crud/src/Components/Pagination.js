import React from 'react'

export function Pagination({totalPost, postparPage, setCurrentPage, currentPage}) {
    let Pages = [];
    for(let i = 1 ; i <= Math.ceil(totalPost/postparPage) ; i++){
        Pages.push(i);
    }
    function Previous () {
        if(currentPage <= 1){
            setCurrentPage(1)
        }else{
            setCurrentPage(currentPage - 1)
        }
      }
    function Next () {
        if(currentPage >= Pages.length){
            setCurrentPage(Pages.length)
        }else{
            setCurrentPage(currentPage + 1)
        }
      }
  return (
    <div className="flex items-center justify-center">
      <button onClick={() => setCurrentPage(Previous)} className="mx-1 text-sm font-semibold text-gray-900">
        &larr; Previous
      </button>
      {Pages.map((page, idx) => {
        return(
            <>
                <button key={idx} className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 ${page===currentPage ? 'bg-black text-white' : null}`} onClick={() => setCurrentPage(page)}>{page}</button>
            </>
        )
      })}
      <button onClick={() => setCurrentPage(Next)} className="mx-2 text-sm font-semibold text-gray-900">
        Next &rarr;
      </button>
    </div>
  )
}