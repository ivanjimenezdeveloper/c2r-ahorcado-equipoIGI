import { useState } from "react";

export const Boton = (props) => {
  const { children } = props;
  const [botonDisable, setBotonDisable] = useState(false);
  const ejecutarBoton = (e) => {
    e.preventDefault();
    setBotonDisable(true);
  };
  return (
    <button type="button" onClick={ejecutarBoton} disabled={botonDisable}>
      {children}
    </button>
  );
};
