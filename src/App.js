import Buscador from "./components/Buscador";
import Cabezera from "./components/Cabezera";
import Crear from "./components/Crear";
import Footer from "./components/Footer";
import Listado from "./components/Listado";
import Navegacion from "./components/Navegacion";

function App() {
  return (
    <body>
      <div className="layout">
        {/* <!--Cabecera--> */}
        <Cabezera />
        {/* 
        <!--Barra de navegación--> */}
        <Navegacion />
        {/* 
        <!--Contenido principal--> */}
        <section id="content" className="content">
          {/* <!--aqui van las peliculas--> */}
          <Listado />
        </section>

        {/* <!--Barra lateral--> */}
        <aside className="lateral">
          <Buscador />

          <Crear />
        </aside>

        {/* <!--Pie de página--> */}
        <Footer />
      </div>
    </body>
  );
}

export default App;
