import React, {useState} from "react";
import userImage from "../../../../Iconos/11.png";
import axios from "axios";
const opencage = require('opencage-api-client');

const Article = ({key, image, objeto}) => {
  const [ubicacionDestino, setUbicacionDestino] = useState("")
  const [ubicacionOrigen, setubicacionOrigen] = useState("")
  const destinoLat = objeto.destinoLat
  const destinoLng = objeto.destinoLng
  const origenLat = objeto.origenLat
  const origenLng = objeto.origenLng

  const formatCoordinates = (lat, lon) => {
    const formattedLat = lat.toFixed(4);
    const formattedLon = lon.toFixed(4);
    return `${formattedLat}, ${formattedLon}`;
  };

  const destino = formatCoordinates(destinoLat, destinoLng);
  const origen = formatCoordinates(origenLat, origenLng);
  console.log(objeto)

  const geocodeLocation = (cords) => {
    return opencage.geocode({ q: cords, language: 'fr', key: 'ce5399b6a1ae4b12b0959695142c684f' })
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
      setUbicacionDestino(formattedLocation) // Imprimir o almacenar el valor de formattedLocation
    } else {
      console.log('No se pudo obtener la ubicación formateada.');
    }
  });

  geocodeLocation(origen).then((formattedLocation) => {
    if (formattedLocation) {
      console.log(formattedLocation);
      setubicacionOrigen(formattedLocation) // Imprimir o almacenar el valor de formattedLocation
    } else {
      console.log('No se pudo obtener la ubicación formateada.');
    }
  });
  
  return (
    <article>
      <img src={image} />
      <div>
        <name> {`${objeto.usuarioNombre} ${objeto.usuarioApellido}`} </name>
        <p>
          Origen: {ubicacionOrigen}
        </p>
        <p>
          Destino: {ubicacionDestino}
        </p>
        <p>
          Precio: {objeto.precio}
        </p>
        <button className="boton">Aceptar</button>
        <button className="boton">Rechazar</button>
      </div>
    </article>
  );
};

export default Article;
