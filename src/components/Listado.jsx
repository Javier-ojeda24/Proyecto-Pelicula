import React, { useEffect, useState } from "react";

const Listado = () => {
  const [listado, setListado] = useState([]);

  useEffect(() => {
    console.log("Componente del listado de peliculas cargados");
    conseguirPeli();
  }, []);

  const conseguirPeli = () => {
    let pelicula = JSON.parse(localStorage.getItem("pelis"));
    setListado(pelicula);
    console.log(pelicula);
  };

  return (
    <>
      {listado === null ? (
        <h2>No hay pelicula para mostrar</h2>
      ) : (
        listado.map((e) => {
          return (
            <article key={e.id} className="peli-item">
              <h3 className="title">{e.titulo}</h3>
              <p className="description">{e.descripcion}</p>

              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </article>
          );
        })
      )}
    </>
  );
};

export default Listado;
