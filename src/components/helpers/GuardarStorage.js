export const GuardarStorage = (clave, elemento) => {
  //Conseguir los elementos que ya tenemos en el LocalStorage
  let elementos = JSON.parse(localStorage.getItem(clave));
  //Comprobar si es una array
  if (Array.isArray(elementos)) {
    //Añadir  dentro del array un elemento nuevo
    elementos.push(elemento);
  } else {
    //Crear un array con el elemento  nueva
    elementos = [elemento];
  }

  //Guardar en el LocalStorage
  localStorage.setItem(clave, JSON.stringify(elementos));

  //Devolver Objeto
  return elemento;
};
