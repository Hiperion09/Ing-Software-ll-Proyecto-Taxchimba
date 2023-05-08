
import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from './Paginas/Homepage/Homepage';
import Servicios from './Paginas/Servicios/Servicios';
import Login from './Paginas/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
