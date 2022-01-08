import AppHeaderButton from "./AppHeaderButton";
import { CgPokemon, CgEnter, CgInfo } from 'react-icons/cg';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const AppHeader = () => {
  type Buttons = {
    name: string;
    icon: JSX.Element;
    key: string;
  }

  const buttonProperties: Buttons[] = [
    {
      name: 'Home',
      icon: <CgEnter className="icon"/>,
      key: 'home-btn',
    },
    {
      name: 'Pokemon',
      icon: <CgPokemon className="icon"/>,
      key: 'search-btn',
    },
    {
      name: 'Quiz',
      icon: <AiOutlineQuestionCircle className="icon"/>,
      key: 'games-btn',
    },
    {
      name: 'About',
      icon: <CgInfo className="icon"/>,
      key: 'about-btn',
    },
  ]

  const buttons = buttonProperties.map((element) => {
    return <AppHeaderButton {...element}/>
  })

  return (
    <header className="card-element container mx-auto px-4 mt-10 w-full h-20 text-center col-span-12">
      <div className="grid grid-cols-4 grid-rows-1 gap-4 min-h-full">
        {buttons}
      </div>
    </header>
  )
}

export default AppHeader;