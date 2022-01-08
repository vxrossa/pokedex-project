import { useEffect, useState } from "react";
import InfoType from "../infoField/info/InfoType";
import Data from '../../services/Data';

const PokemonCardItem = (props: any) => {
  const {name, url} = props;
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Data.get(url, false).then((data) => {
      console.log(data);
      setPokemonData(data);
    })
  }, [url]);

  const imgDefaultSrc = 'https://s2.coinmarketcap.com/static/img/coins/200x200/8303.png';

  const imgSrc = pokemonData ? pokemonData.sprites.other['official-artwork'].front_default : imgDefaultSrc;

  const types = pokemonData ? pokemonData.types.map((elem: any) => {
    return elem.type.name;
  }) : null;

  const infoTypes = pokemonData ? types.map((element: any) => {
    return <InfoType type={element}/>
  }) : null;

  const cardClassName = 'card-element h-48 relative hover:scale-95 active:scale-90 active:bg-slate-100';

    return (
      <div className={cardClassName}>
        <img 
        className="absolute -top-10 left-1/4 w-1/2"
        src={imgSrc}
        alt="Pokemon"
        onLoad={() => setIsLoading(false)} />
        <h4 className="mt-20 uppercase font-bold">{pokemonData ? name : ''}</h4>
        <div className=""></div>
        <p className="text-gray-500 font-semibold">#{pokemonData ? pokemonData.order : '#???'}</p>
        <div className="types-wrapper">
          {infoTypes}
        </div>
      </div>
    )

} 

export default PokemonCardItem;