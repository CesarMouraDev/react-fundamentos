import "./App.css";

import Welcome from "./components/Welcome";
import Bomdia from "./components/Bomdia";
import Cachorro from "./components/cachorro";
import Counter from "./components/Count"

function App() {
    return (
    <>
    <Welcome/>
    <Bomdia/>
    <Cachorro nome="billy" raca="vira-lata"/>
    <Counter/>
    </>
  )
    
}
export default App;
