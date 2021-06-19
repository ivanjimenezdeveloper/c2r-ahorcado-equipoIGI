export const PalabraSecreta = (palabra) => {
  palabra = palabra.toUpperCase();
  const palabraEscondida = [];
  // en esta funcion (dentro del array) deberiamos poner las palabras
  for (const letra of palabra) {
      palabraEscondida.push({
          letra,
          secreta: true,
    });
  }
  this.escondida = escondida;
};