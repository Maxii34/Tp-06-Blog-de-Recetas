import { createContext, useContext, useState, useEffect } from "react";
//Se crea el contexto
const RecetasContext = createContext();

export const useRecetas = () => {
  const context = useContext(RecetasContext);
  if (!context) {
    throw new Error("useRecetas debe usarse dentro de un RecetasProvider");
  }
  return context;
};

// Proveedor del contexto
export const RecetasProvider = ({ children }) => {
  // Cargar recetas desde localStorage al iniciar
  const recetasStorage = JSON.parse(localStorage.getItem("recetasKey")) || [];

  const [recetas, setRecetas] = useState(recetasStorage);

  // Guardar en localStorage cuando cambien las recetas
  useEffect(() => {
    localStorage.setItem("recetasKey", JSON.stringify(recetas));
  }, [recetas]);

  // Función para crear una nueva receta
  const crearReceta = (nuevaReceta) => {
    setRecetas([...recetas, nuevaReceta]);
    return true;
  };
  // Puedes agregar más funciones aquí si necesitas editar, eliminar, etc.
  return (
    <RecetasContext.Provider value={{ recetas, crearReceta }}>
      {children}
    </RecetasContext.Provider>
  );
};
