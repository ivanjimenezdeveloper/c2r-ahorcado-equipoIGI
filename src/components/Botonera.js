import { Boton } from "./Boton";
export const Botonera = () => {
  const botones = "qwertyuiopasdfghjklñzxcvbnm".split("");

  return (
    <div className="botones">
      {botones.map((boton) => (
        <Boton>{boton}</Boton>
      ))}
    </div>
  );
};
