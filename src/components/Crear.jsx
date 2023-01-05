import React from "react";
import { useState } from "react";

const Crear = () => {
  const titulo = "Añadir Pelicula ";
  const [pelis, setPelis] = useState({
    titulo: "",
    descripcion: "",
  });

  const conseguirDatoForm = (e) => {
    e.preventDefault();
    //Conseguir dato del formulario
    let datos = e.target;
    let titulo = datos.titulo.value;
    let descripcion = datos.descripcion.value;
    //cREAR OBJETO DE LA PELICULA A GUARDAR
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };
    //Guardar estado
    setPelis(peli);

    //Guardar en el almacenamiento Local
    guardarStorage(peli);
  };

  const guardarStorage = (peli) => {
    //Conseguir los elementos que ya tenemos en el LocalStorage
    let elementos = JSON.parse(localStorage.getItem("pelis"));
    //Comprobar si es una array
    if (Array.isArray(elementos)) {
      //Añadir  dentro del array un elemento nuevo
      elementos.push(peli);
    } else {
      //Crear un array con la peli nueva
      elementos = [peli];
    }

    //Guardar en el LocalStorage
    localStorage.setItem("pelis", JSON.stringify(elementos));

    //Devolver Objeto
    return peli;
  };

  return (
    <div className="add">
      <h3 className="title">{titulo}</h3>
      <strong> {"Has creado la pelicula " + pelis.titulo}</strong>

      <form onSubmit={conseguirDatoForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
        <textarea
          id="description"
          placeholder="Descripción"
          name="descripcion"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};

export default Crear;
