import { createContext, useContext, useState, useEffect } from "react";
import { listarRecetas } from "../helpers/queries";
//Se crea el contexto
const RecetasContext = createContext();

export const useRecetas = () => {
  const context = useContext(RecetasContext);
  if (!context) {
    throw new Error(
      "useRecetas solo se puede usar dentro de un RecetasProvider"
    );
  }
  return context;
};

// Proveedor del contexto
export const RecetasProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    cargarRecetas();
  }, []);

  const cargarRecetas = async () => {
    //Se solicita los datos al backend, con la funcion listarRecetas()
    const respuesta = await listarRecetas();
    //Se verifican los datos recibidos
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      //Cargarlo al estado
      setRecetas(data);
    }
  };

  return (
    <RecetasContext.Provider value={{ recetas }}>
      {children}
    </RecetasContext.Provider>
  );
};
