import { useState } from 'react';

const PaginationField = (props: {nextPage: () => void, prevPage: () => void, currentPage: number}) => {
  return (
    <div className="card-element w-full h-12 col-span-6 col-start-2 mb-16 flex items-center justify-around">
      <button 
      className="random-button"
      onClick={props.prevPage}>Previous Page</button>
      <p>{props.currentPage + 1}</p>
      <button
      className="random-button" 
      onClick={props.nextPage}>Next page</button>
    </div>
  )
}

export default PaginationField;