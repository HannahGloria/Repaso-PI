import Multiplecards from "./components/cards/Cards";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      Bienvenido
      <Routes>
        <Route path='/home' element={<Multiplecards/>}/>
        <Route path='/favoritos' element={<h1>Aca los favoritos</h1>}/>
      </Routes>
      
    </div>
  )
}

export default App;
