import { useEffect, useState } from "react";
import { Botonera } from "./components/Botonera";
// import { PalabraSecreta } from "./components/PalabraSecreta";
import { Munyeco } from "./components/Munyeco";

function App() {
  const urlAPI = "https://letras-ahorcado.herokuapp.com/letras";
  const urlAPIlocal = "http://localhost:3001/palabras";
  const [errores, setErrores] = useState(0);
  let palabraCorrecta;
  let palabraCorrectaArray;
  let palabraSecreta;
  const getPalabraAleatoria = async () => {
    const response = await fetch(urlAPIlocal);
    const json = await response.json();
    const numeroRandom = Math.floor(Math.random() * json.lista.length);
    palabraCorrecta = await json.lista[numeroRandom];
    palabraSecreta = palabraCorrecta.split("");
    palabraCorrectaArray = [...palabraSecreta];
    console.log(palabraCorrectaArray);
    return palabraCorrectaArray;
  };

  const aumentarError = () => {
    setErrores(errores + 1);
  };
  useEffect(() => getPalabraAleatoria(), []);
  const getPosiciones = async (palabra, letra) => {
    const response = await fetch(
      `${urlAPI}/${palabra.toLowerCase()}/${letra.toLowerCase()}`
    );

    if (!response.ok) {
      return -1;
    }

    const json = await response.json();
    console.log(json);
    return json;
  };

  const getLetraPulsada = (e) => {
    return e.target.value.toLowerCase();
  };

  return (
    <>
      <Munyeco errores={errores} />
      <Botonera getLetraPulsada={getLetraPulsada} />
      {/* <PalabraSecreta></PalabraSecreta> */}
      <h2 className="palabraSecreta"></h2>
      <h1 className="resultado"></h1>
    </>
  );
}

export default App;
