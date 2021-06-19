import { Boton } from "./Boton";
export const Botonera = (props) => {
  const { getLetraPulsada } = props;
  const botones = "qwertyuiopasdfghjklñzxcvbnm!0".split("");

  return (
    <div className="botones">
      {botones.map((boton) => (
        <Boton getLetraPulsada={getLetraPulsada}>{boton}</Boton>
      ))}
    </div>
  );
};
