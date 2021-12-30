import AppHeader from "../appHeader/AppHeader";
import InfoField from "../infoField/InfoField";
import SearchField from "../searchField/SearchField";
import SortField from "../sortField/SortField";
import PokemonList from '../pokemonList/PokemonList';

const AppWrapper = () => {
  return (
    <main className="flex flex-col max-w-6xl mx-auto p-0">
      <div className="grid grid-cols-12 max-w-full gap-x-8">
        <AppHeader/>
        <SearchField/>
      </div>
      <div className="grid grid-cols-12 grid-rows-6 max-w-full gap-x-8">
        <SortField/>
        <InfoField/>
        <PokemonList/>
      </div>
    </main>

  )
}

export default AppWrapper;