import React from 'react'

export function Pagination({totalPost, postparPage, setCurrentPage, currentPage}) {
    let Pages = [];
    for(let i = 1 ; i <= Math.ceil(totalPost/postparPage) ; i++){
        Pages.push(i);
    }
  return (
    <div className="flex items-center">
      <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
        &larr; Previous
      </a>
      {Pages.map((page, idx) => {
        return(
            <>
                <button key={idx} className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 ${page===currentPage ? 'bg-black text-white' : null}`} onClick={() => setCurrentPage(page)}>{page}</button>
            </>
        )
      })}
      <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
        Next &rarr;
      </a>
    </div>
  )
}