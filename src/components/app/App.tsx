import './App.scss';
import AppWrapper from '../appWrapper/AppWrapper';
import {SiPokemon} from 'react-icons/si';

function App() {
  return (
    
    <div className="App"> 
      <SiPokemon className="absolute text-[800px] opacity-20 top-[-250px] left-[-100px] rotate-[-20deg] z-[-1]"/>
      <AppWrapper/>
    </div>
  );
}

export default App;
