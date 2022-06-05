import Multiplecards from "./components/cards/Cards";
import { Route, Routes } from 'react-router-dom';
import Create from "./components/create/Create";


function App() {
  return (
    <div>
      Bienvenido
      <Routes>
        <Route path='/home' element={<Multiplecards/>}/>
        <Route path='/favoritos' element={<h1>Aca los favoritos</h1>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
