import { useState, useEffect } from "react";
import PokemonCardItem from "./PokemonCardItem";
import Data from '../../services/Data';

const PokemonList = (props: any) => {
  const {currentPage} = props;
  const [cardItems, setCardItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const amountPerFetch: number = 12;
  const fetchOffset: number = 48;
  useEffect(() => {
    setIsLoading(true);
    Data.get(`pokemon?limit=${amountPerFetch}&offset=${currentPage * amountPerFetch}`, true)
      .then((info) => {
        setCardItems(info.results);
        setIsLoading(false);
      })
  }, [currentPage]);
  if (isLoading) {
    return (
      <img src="https://shinytarts.com/uploads/pikachu_running.gif"
      className="col-span-3 w-full col-start-3 mb-10"
      alt="Loading Icon" />
    )
  } else {
    return (
      <section className="col-span-8 row-span-5 w-full grid grid-cols-3 gap-4">
        {cardItems.map((element: any) => {
          return <PokemonCardItem {...element} key={element.name}/>
        })}
      </section>
    )
  }
}

export default PokemonList;