import React from "react";

function Editar({ e, conseguirPeli, setEditar, setListado }) {
  const titulo = "Editar Pelicula";
  const guardarEdicion = (evento, id) => {
    evento.preventDefault();

    //conseguir el target del evento

    let target = evento.target;
    // console.log(target);
    //Buscar el indice de la pelicula a actualizar
    const peliculasAlmacenadas = conseguirPeli();
    const indice = peliculasAlmacenadas.findIndex((peli) => peli.id === id);
    // console.log(indice);
    //Crear un objeto con ese indeice
    const peliActualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };
    // console.log(indice, peli);
    //Actualizar el elemnto con ese indice
    peliculasAlmacenadas[indice] = peliActualizada;
    // console.log(peliculasAlmacenadas);

    // Guardar el nuevo array de objetos en el LocalStoirage

    localStorage.setItem("pelis", JSON.stringify(peliculasAlmacenadas));
    //Actualizar Estados
    setListado(peliculasAlmacenadas);
    setEditar(0);
  };
  return (
    <div className="edit_form">
      <h3 className="title">{titulo}</h3>
      <form onSubmit={(evento) => guardarEdicion(evento, e.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={e.titulo}
        />
        <textarea
          name="descripcion"
          defaultValue={e.descripcion}
          className="descripcion_editada"
        />
        <input type="submit" className="editar" value="Actualzar" />
      </form>
    </div>
  );
}

export default Editar;
