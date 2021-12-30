import InfoType from "../infoField/info/InfoType";

const PokemonCardItem = (props: any) => {
  return (
    <div className="card-element h-48 relative">
      <img 
      className="absolute -top-10 left-1/4 w-1/2"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" alt="Pokemon Image" />
      <h4 className="mt-20 uppercase font-bold">Mewtwo</h4>
      <div className=""></div>
      <p className="text-gray-500 font-semibold">#200</p>
      <div className="types-wrapper">
        <InfoType type="psychic"/>
      </div>
    </div>
  )
} 

export default PokemonCardItem;