import { useState } from "react";
import Buscador from "./components/Buscador";
import Cabezera from "./components/Cabezera";
import Crear from "./components/Crear";
import Footer from "./components/Footer";
import Listado from "./components/Listado";
import Navegacion from "./components/Navegacion";

function App() {
  const [listado, setListado] = useState([]);
  return (
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
        <Listado listado={listado} setListado={setListado} />
      </section>

      {/* <!--Barra lateral--> */}
      <aside className="lateral">
        <Buscador />

        <Crear setListado={setListado} />
      </aside>

      {/* <!--Pie de página--> */}
      <Footer />
    </div>
  );
}

export default App;
