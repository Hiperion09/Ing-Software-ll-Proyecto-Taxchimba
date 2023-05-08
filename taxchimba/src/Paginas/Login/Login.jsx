import React from 'react'
import "./login.scss";

const Login = () => {
  return (
    <div class="contenedor-formularios">
      <ul class="contenedor-tabs">
        <li class="tab tab-segunda active">
          <a href="#iniciar-sesion">Iniciar Sesión</a>
        </li>
        <li class="tab tab-primera">
          <a href="#registrarse">Registrarse</a>
        </li>
      </ul>

      <div class="contenido-tab">
        <div id="iniciar-sesion">
          <h1 clas="titulo-iniciarsesion">Iniciar Sesión</h1>
          <form action="#" method="post">
            <div class="contenedor-input">
              <label>
                Usuario <span class="req">*</span>
              </label>
              <input type="text" required />
            </div>

            <div class="contenedor-input">
              <label>
                Contraseña <span class="req">*</span>
              </label>
              <input type="password" required />
            </div>
            <p class="forgot">
              <a href="#">Se te olvidó la contraseña?</a>
            </p>
            <input
              type="submit"
              class="button button-block"
              value="Iniciar Sesión"
            />
          </form>
        </div>

        <div id="registrarse">
          <h1>Registrarse</h1>
          <form action="#" method="post">
            <div class="fila-arriba">
              <div class="contenedor-input">
                <label>
                  Nombre <span class="req">*</span>
                </label>
                <input type="text" required />
              </div>

              <div class="contenedor-input">
                <label>
                  Apellido <span class="req">*</span>
                </label>
                <input type="text" required />
              </div>
            </div>
            <div class="contenedor-input">
              <label>
                Usuario <span class="req">*</span>
              </label>
              <input type="text" required />
            </div>
            <div class="contenedor-input">
              <label>
                Email <span class="req">*</span>
              </label>
              <input type="email" required />
            </div>
            <div class="contenedor-input">
              <label>
                Contraseña <span class="req">*</span>
              </label>
              <input type="password" required />
            </div>

            <div class="contenedor-input">
              <label>
                Repetir Contraseña <span class="req">*</span>
              </label>
              <input type="password" required />
            </div>

            <input
              type="submit"
              class="button button-block"
              value="Registrarse"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login