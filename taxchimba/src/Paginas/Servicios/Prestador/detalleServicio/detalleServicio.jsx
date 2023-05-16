import React from "react";
import userImage from "../../../../Iconos/11.png";

const Article = () => {
  return (
    <article>
      <img src={userImage} />
      <div>
        <name> Juan Esteban Arenas </name>
        <p>
          Origen: mskakasmkasas
        </p>
        <p>
          Destino: maskasmksa
        </p>
        <p>
          Precio: Jkmkasmksakmas
        </p>
        <button className="boton">Aceptar</button>
        <button className="boton">Rechazar</button>
      </div>
    </article>
  );
};

export default Article;
