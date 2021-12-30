import { BsChevronDown } from 'react-icons/bs';

const SortButton = (props: any) => {
  const {text, icon} = props;
  return (
    <button className="card-element h-full mx-2 p-2 flex items-center 
                    justify-center font-semibold text-gray-600 flex-grow
                    hover:scale-95 
                    active:bg-slate-200 active:scale-90">
      {icon}
      {text}
      <BsChevronDown className="ml-2 text-sm"/>
    </button>
  )
}

export default SortButton;