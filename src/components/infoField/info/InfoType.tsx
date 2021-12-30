import typeColors, { Colors } from './typecolors';

const InfoType = (props: any) => {
  const receivedColor = props.type;
  const typeColor = typeColors[receivedColor as keyof Colors];
  return (
    <div className="info-type h-10 w-20 uppercase font-bold rounded-lg flex items-center justify-center" style={{
      backgroundColor: typeColor,
    }}>
    {props.type}
    </div>
  )
}

export default InfoType;