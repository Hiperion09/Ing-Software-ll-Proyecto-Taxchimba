import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "../../../Mapas/Map";
import userImage from "../../../Iconos/11.png";
import logo from "../../../Iconos/logo.jpg";
import "./prestador.css";
import Article from "./detalleServicio/detalleServicio";
import Appbar from "../../../Appbar/Appbar";
import axios from "axios";

const Prestador = ({tipoUsuario}) => {
  const [coordenadas, setCoordenadas] = useState({});
  const [limites, setLimites] = useState({});
  const [datosSolic, setDatosSolic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/prestador', {});
        setDatosSolic(data);
        setIsLoading(false);
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          setCoordenadas({ lat: latitude, lng: longitude });
        });
      } catch (error) {
        // Manejo de errores aquí
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="prestador-container">
      <Appbar tipoUsuario={tipoUsuario}/>

      <div id="viewport">
        <div id="sidebar">
          <div className="nav">
            <div className="switch-servicio">
              <nav>
                <img src={logo} />
                <i className="fa-solid fa-bars">Taxchimba</i>
              </nav>
              <main>
                {isLoading ? (
                  <p>Cargando datos...</p>
                ) : (
                  datosSolic.map((objeto, index) => (
                    <Article key={index} image={userImage} objeto={objeto}/>
                  ))
                )}
              </main>
            </div>
          </div>
        </div>

        <div id="content">
          <div className="container-fluid">
            <Map setCoordenadas={setCoordenadas} setLimites={setLimites} coordenadas={coordenadas} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prestador;
