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

  //Estados para el modal de ver receta
  const [lgShow, setLgShow] = useState(false);
  //Estado para cargar receta elejida en ver (modal)
  const [recetaSelecionada, setRecetasSeleccionada] = useState({});

  return (
    <RecetasContext.Provider
      value={{
        recetas,
        setRecetas,
        cargarRecetas,
        setLgShow,
        lgShow,
        recetaSelecionada,
        setRecetasSeleccionada,
      }}
    >
      {children}
    </RecetasContext.Provider>
  );
};
