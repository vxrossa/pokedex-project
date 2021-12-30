import { MdOutlineCatchingPokemon } from 'react-icons/md';

const SearchField = () => {
  return (
    <div className="card-element search-field flex items-center p-2 col-span-8 w-full h-20 mt-20">
      <input className="ml-4 focus:text-red-600 search focus:outline-none h-20 block bg-slate-50 w-80" type="text" placeholder="Search your Pokémon!"/>
      <button className="search-button">
        <MdOutlineCatchingPokemon className="text-slate-100 h-10 w-10"/>
      </button>
    </div>
    
  )
}

export default SearchField;