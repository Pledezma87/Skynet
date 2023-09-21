import "tailwindcss/tailwind.css";
import "../../styles/Body.css";
import React, { useState, useEffect } from "react";

const ataquesVirtualesConocidos = [
  "Ataque de fuerza bruta",
  "Ataque de phishing",
  "Ataque de malware",
  "Ataque de denegación de servicio (DDoS)",
  // Agrega más ataques virtuales conocidos aquí
];

function Body() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    // Mostrar ataques en un bucle cada 3 segundos (3000 ms)
    const intervalId = setInterval(() => {
      setIndice(
        (prevIndice) => (prevIndice + 1) % ataquesVirtualesConocidos.length
      );
    }, 3000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-[#121212] w-screen h-[550px] ">
        <div className="text-red-900 text-center banner">
        <p id="mensaje">{ataquesVirtualesConocidos[indice]}</p>
      </div>
      <div className="banner-container"></div>
    </div>
  );
}

export default Body;
