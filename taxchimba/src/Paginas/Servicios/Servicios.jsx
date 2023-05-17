import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom"; 
import "./servicios.css";
import image from "../../Iconos/location.png";
import Autocompletado from "../../Mapas/Autocompletado";
import Map from "../../Mapas/Map";
import SitiosInteres from "./SitiosInteres/SitiosInteres.jsx";
import Prestador from "./Prestador/Prestador";
import { getPlacesData } from "../../api/apiLugares";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../../Redux/Slices/usuarioSlice";
import { selectOrigen, selectDestino } from "../../Redux/Slices/navSlice";
import Appbar from "../../Appbar/Appbar";
import axios from "axios";

const Servicios = () => {

  const [value, setValue] = useState(null); //valor de posicion obtenida del autocompletado
  const [posicionActual, setPosicionActual] = useState(null) //posicion actual
  const [sitioInteres, setSitioInteres] = useState([]) //objeto de info de sitios de interes
  const [sitiosFilrados, setSitiosFilrados] = useState([])
  const [coordenadas, setCoordenadas] = useState({}) //posicion actual
  const [limites, setLimites] = useState({}) //posicion actual
  const [tipo, setTipo] = useState('restaurantes');
  const [calificacion, setCalificacion] = useState('');
  const [precio, setPrecio] = useState(null); //campo 3 -- creacion de servicio
  const origen = useSelector(selectOrigen) //campo 2 -- origen
  const destino = useSelector(selectDestino) //campo 1 --- destino
  console.log(origen)
  console.log(destino)
  console.log(value)
  const [ubicacion, setUbicacion] = useState(null);

  const handleClick = async (destino, origen, precio, usuario) => {
    //logica para conectar con la BD, subir la info y cargarla
    const origenLat = origen.location.lat
    const origenLng = origen.location.lng
    const destinoLat = destino.location.lat
    const destinoLng = destino.location.lng
    const usuarioNombre = usuario.usuario.nombres
    const usuarioApellido = usuario.usuario.apellidos
    const usuarioCelular = usuario.usuario.celular
    const usuarioCorreo = usuario.usuario.correo
    
    const {data} = await axios.post('/servicios', {
      origenLat, 
      origenLng, 
      destinoLat, 
      destinoLng, 
      precio,
      usuarioNombre, 
      usuarioApellido,
      usuarioCelular,
      usuarioCorreo
    })
  };

  //Obtencion de usuario
  const usuario = useSelector(selectUser)
  console.log(usuario.usuario.tipo) //objeto de usuario del login campo 4
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords : {latitude, longitude}})=>{
      setCoordenadas({ lat: latitude, lng: longitude})
    })
  }, []);

  useEffect(() => {
    const lugaresFiltrados = sitioInteres.filter((sitio) => sitio.rating > calificacion);
    setSitiosFilrados(lugaresFiltrados);
  }, [calificacion]);

  useEffect(() => {
    console.log(coordenadas, limites);
    getPlacesData(tipo, limites.sw, limites.ne)
    .then((data)=>{
      console.log(data)
      setSitioInteres(data)
    })
  }, [tipo, coordenadas, limites]);

  
  

  return (
    <div id="prestador-container">
      <Appbar />
    <div id="viewport">
      <div id="sidebar">
        <header>
          
          <Link to="/">
              <a href="#">Taxchimba</a>
          </Link>
        </header>
        <div className="nav">
          <div className="switch-servicio">
            <div className="botones">
              <button className="boton-taxis">Transporte</button>
              <button className="boton-encomiendas">Encomiendas</button>
            </div>

            <div className="input-servicios">
              <div className="input-servicios-descripcion">
                <img src={image} alt="" />
                <p>Inserte su origen</p>
              </div>
              <div className="input-servicios-info">
                <Autocompletado descripcion={'Origen...'} info_geo={1}/>
              </div>
            </div>

            <div className="input-servicios">
              <div className="input-servicios-descripcion">
                <img src={image} alt="" />
                <p>Inserte su destino</p>
              </div>
              <div className="input-servicios-info">
                <Autocompletado descripcion={'Destino...'} info_geo={2}/>
              </div>
            </div>

            <div className="input-servicios">
              <div className="input-servicios-descripcion">
                <img src={image} alt="" />
                <p>Precio</p>
              </div>
              <div className="input-servicios-info">
                <input
                  type="text"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  className="form-control"
                  placeholder="Precio"
                />
              </div>
            </div>
            <div className="btn-enviar">
            <button className="btn-solicitud" onClick={() => handleClick(destino, origen, precio, usuario)}> Enviar </button>
          </div>
          </div>
          <div className="localizaciones">
            <ul>
              <SitiosInteres 
                sitioInteres={sitiosFilrados.length ? sitiosFilrados : sitioInteres} 
                tipo={tipo} 
                setTipo={setTipo} 
                calificacion={calificacion}
                setCalificacion={setCalificacion}
                />
            </ul>
          </div>
        </div>
      </div>

      <div id="content">
        <div class="container-fluid">
          <Map 
            setCoordenadas={setCoordenadas}
            setLimites={setLimites}
            coordenadas={coordenadas}
            />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Servicios;
