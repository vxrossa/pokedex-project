import { BiHide } from 'react-icons/bi'
import HiddenAbilityPopup from './HiddenAbilityPopup';

const InfoAbility = (props: any) => {
  const hiddenIcon = props.hidden ? <BiHide className="ml-2"/> : null;

  const hiddenPopup = props.hidden ? <HiddenAbilityPopup/> : null;

  return (
    <div className="ability-item uppercase h-10 w-32 border-2
                   border-slate-800 rounded-2xl flex items-center 
                   justify-center text-sm flex-grow relative group">
      {props.ability}
      {hiddenIcon}
      {hiddenPopup}
    </div>
  )
}

export default InfoAbility;