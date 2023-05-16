
import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from './Paginas/Homepage/Homepage';
import Servicios from './Paginas/Servicios/Servicios';
import Login from './Paginas/Login/Login';
import Registro from './Paginas/Login/Registro/Registro';
import Prestador from './Paginas/Servicios/Prestador/Prestador';
import axios from 'axios';

function App() {
  axios.defaults.baseURL='http://localhost:4040';
  axios.defaults.withCredentials=true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/prestador" element={<Prestador />}></Route>
      </Routes>
    </div>
  );
}

export default App;
