import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "../../../Mapas/Map";
import userImage from "../../../Iconos/11.png";
import logo from "../../../Iconos/logo.jpg"
import "./prestador.css";
import Article from "./detalleServicio/detalleServicio";// Importa el componente Article
import Appbar from "../../../Appbar/Appbar";

const Prestador = () => {
  const [coordenadas, setCoordenadas] = useState({}); //posicion actual
  const [limites, setLimites] = useState({}); //posicion actual
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordenadas({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  return (
    <div id="prestador-container">
    <Appbar />

    <div id="viewport">
      <div id="sidebar">
        <div className="nav">
          <div className="switch-servicio">
            <nav>
              <img src={logo} />
              <i className="fa-solid fa-bars">Taxchimba</i>
            </nav>
            <main>
              <Article image={userImage} />
              <Article image={userImage} />
              <Article image={userImage} />
              <Article image={userImage} />
              <Article image={userImage} />
              {/* ... */}
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
