import React, { useEffect, useState } from "react";
import Editar from "./Editar";

const Listado = ({ listado, setListado }) => {
  // const [listado, setListado] = useState([]);
  const [editar, setEditar] = useState(0);
  useEffect(() => {
    // console.log("Componente del listado de peliculas cargados");
    conseguirPeli();
  }, []);

  const conseguirPeli = () => {
    let pelicula = JSON.parse(localStorage.getItem("pelis"));
    setListado(pelicula);
    // console.log(pelicula);
    return pelicula;
  };
  const borrarPeli = (id) => {
    //conseguir peliculas almacenadas
    let pelis_almacenadas = conseguirPeli();

    //Filtrar las poelicula q no quiero
    let nuevoArrayPelicula = pelis_almacenadas.filter(
      (e) => e.id !== parseInt(id)
    );
    //Actualizar estado del listado
    setListado(nuevoArrayPelicula);

    //Actualizar los datos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(nuevoArrayPelicula));
  };

  return (
    <>
      {listado != null ? (
        listado.map((e) => {
          return (
            <article key={e.id} className="peli-item">
              <h3 className="title">{e.titulo}</h3>
              <p className="description">{e.descripcion}</p>

              <button
                className="edit"
                onClick={() => {
                  setEditar(e.id);
                }}
              >
                Editar
              </button>
              <button
                className="delete"
                onClick={() => {
                  borrarPeli(e.id);
                }}
              >
                Borrar
              </button>
              {/* aparece formulario de Editar*/}
              {editar === e.id && (
                <Editar
                  e={e}
                  conseguirPeli={conseguirPeli}
                  setEditar={setEditar} setListado={setListado}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay pelicula para mostrar</h2>
      )}
    </>
  );
};

export default Listado;
