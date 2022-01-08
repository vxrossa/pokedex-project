import './App.scss';
import AppWrapper from '../appWrapper/AppWrapper';
import {SiPokemon} from 'react-icons/si';

function App() {
  return (
    
    <div className="App"> 
      <SiPokemon className="fixed text-[800px] opacity-10 top-[-250px] left-[-100px] rotate-[-20deg] z-[-1]"/>
      <AppWrapper/>
    </div>
  );
}

export default App;
