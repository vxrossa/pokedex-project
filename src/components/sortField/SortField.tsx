import SortButton from "./SortButton"
import { BiReset } from 'react-icons/bi';
import { FaWeightHanging, FaArrowsAltV, FaCrosshairs, FaCube, FaGripHorizontal } from 'react-icons/fa';


const SortField = () => {
  const buttonData = [
    {
      text: 'Type',
      icon: <FaGripHorizontal className="mr-2"/>,
    },
    {
      text: 'Weakness',
      icon: <FaCrosshairs className="mr-2"/>,
    },
    {
      text: 'Ability',
      icon: <FaCube className="mr-2"/>,
    },
    {
      text: 'Height',
      icon: <FaArrowsAltV className="mr-2"/>,
    },
    {
      text: 'Weight',
      icon: <FaWeightHanging className="mr-2"/>,
    },
  ]

  const sortButtons = buttonData.map((element) => {
    return <SortButton {...element}/>
  })
  return (
    <div className="flex h-24 col-span-8 mt-8 mb-2 flex-col row-span-1">
      <div className="sorting-top">
        <p>Ascending</p>
        <p>From... To...</p>
      </div>
      <div className="sorting-bottom">
          {sortButtons}
          <button className="reset-sorting h-12 w-12 bg-slate-800 rounded-lg 
                            flex items-center justify-center shadow-xl
                            hover:bg-slate-900 duration-300 hover:scale-95
                            active:scale-90">
            <BiReset className="text-white text-2xl"/>
          </button>
      </div>
    </div>
  )
}

export default SortField