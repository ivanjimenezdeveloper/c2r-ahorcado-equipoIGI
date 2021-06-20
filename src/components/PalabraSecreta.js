import { useState } from "react";

export const [PalabraSecreta, setPalabraSecreta] = useState(palabra);
  palabra = palabra.toUpperCase();
  setPalabraSecreta = ["banana", "cebolla"];
  // en esta funcion (dentro del array) deberiamos poner las palabras
  for (const letra of palabra) {
      palabraEscondida.push({
          letra,
          secreta: true,
    });
  }
  this.palabraEscondida = escondida;