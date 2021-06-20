export const Munyeco = (props) => {
  const { errores } = props;

  const eliminarDNone = (elemento, indice) => {
    const elementoCopia = {
      ...elemento,
      props: { ...elemento.props, className: "stage" + (indice + 1) },
    };

    return elementoCopia;
  };

  const svg = [
    <line className="stage11 d-none" x1="62" y1="70" x2="56" y2="56"></line>,
    <line className="stage10 d-none" x1="50" y1="70" x2="56" y2="56"></line>,
    <line className="stage9 d-none" x1="68" y1="46" x2="56" y2="40"></line>,
    <line className="stage8 d-none" x1="44" y1="46" x2="56" y2="40"></line>,
    <line className="stage7 d-none" x1="56" y1="40" x2="56" y2="56"></line>,
    <circle
      className="stage6 d-none"
      cx="56"
      cy="34"
      r="6"
      fill="#bee5eb"
    ></circle>,
    <line className="stage5 d-none" x1="56" y1="16" x2="56" y2="28"></line>,
    <line className="stage4 d-none" x1="24" y1="24" x2="32" y2="16"></line>,
    <line className="stage3 d-none" x1="21" y1="16" x2="60" y2="16"></line>,
    <line className="stage2 d-none" x1="24" y1="80" x2="24" y2="16"></line>,
    <line className="stage1 d-none" x1="16" y1="80" x2="32" y2="80"></line>,
  ];
  return (
    <svg id="hangman" viewBox="0 0 96 96" width="300" height="300">
      {svg.map((elemento, indice) => {
        if (errores === 0) {
          return elemento;
        }
        return errores <= indice ? elemento : eliminarDNone(elemento, indice);
      })}
    </svg>
  );
};
