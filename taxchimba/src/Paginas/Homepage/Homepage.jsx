import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <div class="menu-btn">
        <i class="fas fa-bars fa-2x"></i>
      </div>

      <div class="container">
        <nav class="main-nav">
          <h1 class="titulo">Taxchimba</h1>

          <ul class="main-menu">
            <li>
              <Link to="/servicios">
                <a href="#pide">Pide servicio</a>
              </Link>
            </li>
            <li>
              <a href="#preguntas">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="#quienes">Quienes somos</a>
            </li>
          </ul>
        </nav>

        <a name="pide"></a>
        <header class="showcase">
          <h2>Taxchimba</h2>
          <p>La opcion mas rapida para ti y para tus encomiendas</p>
          <a href="#" class="btn">
            Pedir servicio <i class="fas fa-chevron-right"></i>
          </a>
        </header>

        <a name="preguntas"></a>
        <section class="xbox">
          <div class="content">
            <div class="preguntas">
              <h2>Preguntas frecuentes</h2>
              <br />
              <b> • ¿Cuanto cuesta un servicio?</b>
              <p>
                {" "}
                - Tu estableces el precio y la persona que va a atender tu
                pedido lo aceptará
              </p>
              <b> • ¿Necesito descargar la app para usar Taxchimba?</b>
              <p>
                {" "}
                - No, puedes hacer pedidos desde nuestra pagina{" "}
                <a href="#">Aqui</a>
              </p>
              <b> • ¿En que horario está disponible este servicio?</b>
              <p>
                {" "}
                - Podras pedir el servicio las 24 horas del dia y todos los dias
              </p>
              <b> • ¿Necesito tener un usuario para usar el servicio?</b>
              <p>
                {" "}
                - Si, aqui puedes registrarte <a href="#">Aqui</a>
              </p>
            </div>
            <div class="img-preguntas"></div>
          </div>
        </section>

        <a name="quienes"></a>
        <section class="home-cards">
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.GOMHdb75sPt3Fe39FNCoJAHaHa?pid=ImgDet&rs=1"
              alt=""
            />
            <h3>JUAN ESTEBAN ARENAS GALINDO</h3>
            <b>Estudiante Ingenieria de sistemas</b>
            <p class="descripcion-devs">
              Ingeniero de sistemas en formacion, especializado en HTML, CSS,
              JavaScript, C++, C# y Programacion en Unity
              <br />
              Info de contacto:
              <br />
              jarenas340@unab.edu.co
            </p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwEQisPQEZIEn2UHxMnRrEWdRIgMaAA7tcQ&usqp=CAU"
              alt=""
            />
            <div>
              <h3>JUAN CAMILO JIMENEZ DURAN</h3>
            </div>
            <div></div>
            <b>Estudiante Ingenieria de sistemas</b>
            <p class="descripcion-devs">
              Ingeniero de sistemas en formacion, especializado en HTML, CSS,
              JavaScript, C++, C# y Programacion en Unity
              <br />
              Info de contacto:
              <br />
              jjimenez519@unab.edu.co
            </p>
          </div>

          <div>
            <img
              src="https://pbs.twimg.com/media/Fiyx1P3WYAUIX73?format=jpg&name=large"
              alt=""
            />
            <h3>ANDRES DAVID CALA DIAZ</h3>
            <b>Estudiante Ingenieria de sistemas</b>
            <p class="descripcion-devs">
              Ingeniero de sistemas en formacion, especializado en Unreal Engine
              con mas de 4 clases con grandes representantes de la industria
              <br />
              Info de contacto:
              <br />
              acala893@unab.edu.co
            </p>
          </div>
        </section>
      </div>

      <footer class="footer">
        <div class="footer-inner">
          <section class="follow">
            <p>Follow Us</p>
            <a href="https://facebook.com">
              <img
                src="https://i.ibb.co/LrVMXNR/social-fb.png"
                alt="Facebook"
              />
            </a>
            <a href="https://twitter.com">
              <img
                src="https://i.ibb.co/vJvbLwm/social-twitter.png"
                alt="Twitter"
              />
            </a>
            <a href="https://linkedin.com">
              <img
                src="https://i.ibb.co/b30HMhR/social-linkedin.png"
                alt="Linkedin"
              />
            </a>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;