const InfoProperty = (props: any) => {
  return (
    <div className="uppercase">
      <p className="font-bold">{props.name}</p>
      <div className="bg-slate-100 rounded-2xl h-8 flex items-center justify-center font-semibold">{props.text}</div>
    </div>
  )
}

export default InfoProperty;