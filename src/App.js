import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import CarGarageBD from './Pages/Home/ProjectDetails/CarGarageBd';
import CarNobyl from './Pages/Home/ProjectDetails/CarNobyl';
import ShizukaIndustry from './Pages/Home/ProjectDetails/ShizukaIndustry';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shizukaindustries' element={<ShizukaIndustry></ShizukaIndustry>}></Route>
        <Route path='/cargaragebd' element={<CarGarageBD></CarGarageBD>}></Route>
        <Route path='/carnobyl' element={<CarNobyl></CarNobyl>}></Route>
      </Routes>
    </div>
  );
}

export default App;
