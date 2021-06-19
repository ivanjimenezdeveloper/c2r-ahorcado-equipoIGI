import { useState } from "react";

export const Boton = (props) => {
  const { children, getLetraPulsada } = props;
  const [botonDisable, setBotonDisable] = useState(false);
  const ejecutarBoton = (e) => {
    e.preventDefault();
    setBotonDisable(true);
    getLetraPulsada(e);
  };
  return (
    <button
      type="button"
      onClick={ejecutarBoton}
      disabled={botonDisable}
      value={children}
    >
      {children}
    </button>
  );
};
