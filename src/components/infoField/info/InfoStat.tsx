import { Stats, statColors, statNames } from './statcolors';

const InfoStat = (props: any) => {
  const receivedStatName = props.name;
  const statName = statNames[receivedStatName as keyof Stats];

  const statColor = statColors[receivedStatName as keyof Stats];

  return (
    <div className="h-16 w-10 bg-slate-200 rounded-2xl">
      <p className="font-bold text-sm 
                  h-8 rounded-2xl flex 
                    items-center justify-center"
         style={{
           backgroundColor: statColor
         }}>{statName}</p>
      <p className="text-sm font-semibold mt-2">{props.stat}</p>
      </div>
  )
}

export default InfoStat;