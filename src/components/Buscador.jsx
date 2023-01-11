import React, { useState } from "react";

const Buscador = ({ listado, setListado }) => {
  const [busqueda, setBusqueda] = useState(" ");
  const buscarPeli = (e) => {
    //Crear estado y actualizarlo
    setBusqueda(e.target.value);

    //Filtrar para buscar coincidencias
    let pelisEncontradas = listado.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });
    if (busqueda.length <= 1 || pelisEncontradas <= 0) {
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
    }
    // console.log(pelisEncontradas);
    setListado(pelisEncontradas);

    //Dar valor   de todo lo que tenga en el LocalStorage
    //Actualizar el estado del listado  principal con lo que e logrado filtrar
  };
  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      <form>
        <input
          name="busqueda"
          type="text"
          id="search_field"
          autoComplete="off"
          onChange={buscarPeli}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;
