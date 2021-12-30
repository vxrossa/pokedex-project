import PokemonCardItem from "./PokemonCardItem";

const PokemonList = () => {
  let arr = [];
  for(let i = 0; i < 12; i++) {
    arr.push(<PokemonCardItem/>)
  }
  return (
    <section className="col-span-8 row-span-5 w-full grid grid-cols-3 gap-4">
      {arr}
    </section>
  )
}

export default PokemonList;