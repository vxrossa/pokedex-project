import InfoAbility from "./info/InfoAbility";
import InfoType from "./info/InfoType";
import InfoProperty from "./info/InfoProperty";
import InfoStat from "./info/InfoStat";
import RandomButton from "./info/RandomButton";

const InfoField = () => {
  return (
    <nav className="col-span-4 card-element relative row-span-3">
      <img className="info-image absolute w-2/3 -top-36 left-1/4" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="" />
        <h5 className="pokemon-id mt-24 font-bold text-gray-400">#25</h5>
        <h3 className=" pokemon-name font-bold text-2xl">Pikachu</h3>
        <div className="types-wrapper mt-6">
          <InfoType type="electric"/>
        </div>
        <div className="abilities-wrapper mx-auto mt-8 flex items-center justify-around px-5 gap-x-3">
          <InfoAbility ability="static" hidden={false}/>
          <InfoAbility ability="lighting-rod" hidden={true}/>
        </div>
        <div className="properties-wrapper mx-auto mt-8 grid grid-cols-2 gap-4 px-4">
          <InfoProperty name="height" text="4"/>
          <InfoProperty name="weight" text="60"/>
          <InfoProperty name="xp" text="112"/>
          <InfoProperty name="moves" text="81"/>
        </div>
        <div className="stats-wrapper mx-auto mt-8 flex items-center justify-center gap-3 px-4">
          <InfoStat name="hp" stat="35"/>
          <InfoStat name="attack" stat="55"/>
          <InfoStat name="defense" stat="40"/>
          <InfoStat name="specialAttack" stat="50"/>
          <InfoStat name="specialDefense" stat="50"/>
          <InfoStat name="speed" stat="90"/>  
        </div>
        <RandomButton/>
      </nav>
  )
}

export default InfoField;