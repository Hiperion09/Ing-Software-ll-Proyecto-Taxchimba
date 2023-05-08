import React, {useState} from "react";
import "./servicios.css";
import image from "../../Iconos/location.png";
import Autocompletado from "../../Mapas/Autocompletado";
import Map from "../../Mapas/Map";
const Servicios = () => {
  const [value, setValue] = useState(null);
  console.log(value)
  return (
    <div id="viewport">
      <div id="sidebar">
        <header>
          <a href="#">Taxchimba</a>
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
                  className="form-control"
                  placeholder="Precio"
                />
              </div>
            </div>
          </div>
          <div className="localizaciones">
            <ul>
              <li>option 1</li>
              <li>option 2</li>
              <li>option 3</li>
              <li>option 4</li>
              <li>option 5</li>
              <li>option 6</li>
              <li>option 7</li>
              <li>option 8</li>
              <li>option 9</li>
              <li>option 8</li>
              <li>option 9</li>
              <li>option 8</li>
              <li>option 9</li>
            </ul>
          </div>

          <div className="btn-enviar">
            <button className="btn-solicitud"> Enviar </button>
          </div>
        </div>
      </div>

      <div id="content">
        <div class="container-fluid">
          <Map/>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
