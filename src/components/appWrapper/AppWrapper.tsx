import AppHeader from "../appHeader/AppHeader";
import InfoField from "../infoField/InfoField";
import SearchField from "../searchField/SearchField";
import SortField from "../sortField/SortField";
import PokemonList from '../pokemonList/PokemonList';
import PaginationField from "../pagination/PaginationField";
import WelcomePage from "../welcomePage/WelcomePage";
import { useState } from "react";

const AppWrapper = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // TODO: implement pagination by page number
  // const paginate = (pageNumber: any) => {
  //   setCurrentPage(pageNumber);
  //   console.log(currentPage);
  // }

  const nextPage = () => {
    setCurrentPage((page) => page += 1);
    console.log(currentPage);
  }

  const prevPage = () => {
    setCurrentPage((page) => page -= 1);
    console.log(currentPage);
  }

  return (
    <main className="flex flex-col max-w-6xl mx-auto p-0">

      <div className="grid grid-cols-12 max-w-full gap-x-8">
        <AppHeader/>
        <SearchField/>
        {/* <WelcomePage/> */}
      </div>
      <div className="grid grid-cols-12 grid-rows-6 max-w-full gap-x-8">
        <SortField/>
        <InfoField/>
        <PokemonList currentPage={currentPage}/>
        <PaginationField nextPage={nextPage} prevPage={prevPage} currentPage={currentPage}/>
      </div>
    </main>

  )
}

export default AppWrapper;