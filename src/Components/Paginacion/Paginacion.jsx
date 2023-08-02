import React from "react";
import "./Paginacion.css";

const Paginacion = ({ paginas, paginaActual, cambiarPagina }) => {
  const paginasArray = Array.from({ length: paginas }, (_, index) => index + 1);

  return (
    <div className="paginacion">
      {paginasArray.map((pagina) => (
        <button
          key={pagina}
          className={pagina === paginaActual ? "active" : ""}
          onClick={() => cambiarPagina(pagina)}
        >
          {pagina}
        </button>
      ))}
    </div>
  );
};

export default Paginacion;
