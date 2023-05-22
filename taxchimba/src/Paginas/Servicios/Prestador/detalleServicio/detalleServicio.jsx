import React, { useState } from "react";
import userImage from "../../../../Iconos/11.png";
import "./detalleServicio.css";
import axios from "axios";
const opencage = require("opencage-api-client");

const Article = ({ key, image, objeto}) => {
  const [ubicacionDestino, setUbicacionDestino] = useState("");
  const [ubicacionOrigen, setubicacionOrigen] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const destinoLat = objeto.destinoLat;
  const destinoLng = objeto.destinoLng;
  const origenLat = objeto.origenLat;
  const origenLng = objeto.origenLng;

  const [mostrarComponente, setMostrarComponente] = useState(true);

  const handleDelete = () => {
    setMostrarComponente(false);
  };

  const handleAceptar = () => {
    setMostrarModal(true);
  };


  const formatCoordinates = (lat, lon) => {
    const formattedLat = lat.toFixed(4);
    const formattedLon = lon.toFixed(4);
    return `${formattedLat}, ${formattedLon}`;
  };

  const destino = formatCoordinates(destinoLat, destinoLng);
  const origen = formatCoordinates(origenLat, origenLng);
  console.log(objeto);

  const geocodeLocation = (cords) => {
    return opencage
      .geocode({
        q: cords,
        language: "fr",
        key: "6cf83963085d4f709ded0cf148705d5a",
      })
      .then((data) => {
        if (data.status.code == 200 && data.results.length > 0) {
          return data.results[0].formatted;
        }
        return null; // Si no hay resultados o el código de estado no es 200
      })
      .catch((error) => {
        console.error(error);
        return null; // En caso de error
      });
  };

  // Ejemplo de uso
  geocodeLocation(destino).then((formattedLocation) => {
    if (formattedLocation) {
      console.log(formattedLocation);
      setUbicacionDestino(formattedLocation); // Imprimir o almacenar el valor de formattedLocation
    } else {
      console.log("No se pudo obtener la ubicación formateada.");
    }
  });

  geocodeLocation(origen).then((formattedLocation) => {
    if (formattedLocation) {
      console.log(formattedLocation);
      setubicacionOrigen(formattedLocation); // Imprimir o almacenar el valor de formattedLocation
    } else {
      console.log("No se pudo obtener la ubicación formateada.");
    }
  });

  if (!mostrarComponente) {
    return null; // Retorna null para desmontar el componente
  }

  return (
    <article>
      <img src={image} />
      <div>
        <name class="nombre-usuario"> {`${objeto.usuarioNombre} ${objeto.usuarioApellido}`} </name>
        <div class="container">
          <div className="info-div">
            <div class="left">
              <p className="p-1">Origen: </p>
            </div>
            <div class="right">
              <p className="p-2">{ubicacionOrigen}</p>
            </div>
          </div>
          <div className="info-div">
            <div class="left">
              <p className="p-1">Destino: </p>
            </div>
            <div class="right">
              <p className="p-2">{ubicacionDestino}</p>
            </div>
          </div>
          <div className="info-div">
            <div class="left">
              <p className="p-1">Precio: </p>
            </div>
            <div class="right">
              <p className="p-2">{objeto.precio}{" COP"}</p>
            </div>
          </div>
        </div>
        <button className="boton aceptar" onClick={handleAceptar}>Aceptar</button>
        <button className="boton rechazar" onClick={handleDelete}>Rechazar</button>
      </div>
      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
            <h3 className="modal-titulo">Solicitud aceptada!!!</h3>
            <p className="modal-descrip-1">
              La solicitud ha sido aceptada correctamente.
              La informacion es la siguiente:
            </p>
            <p className="modal-descrip-2">
              Usuario: {`${objeto.usuarioNombre} ${objeto.usuarioApellido}`}
            </p>
            <p className="modal-descrip-2">
              Celular: {objeto.usuarioCelular}
            </p>
            <p className="modal-descrip-2">
              Origen: {ubicacionOrigen}
            </p>
            <p className="modal-descrip-2">
              Destino: {ubicacionDestino}
            </p>
            <p className="modal-descrip-2">
              Precio: {objeto.precio}
            </p>
            <button className="boton-cerrar" onClick={handleDelete}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Article;
