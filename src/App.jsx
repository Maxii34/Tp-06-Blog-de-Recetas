import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Inicio, Recetas, Administracion } from "./components/index.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/recetas" element={<Recetas />} />
      <Route path="/administracion" element={<Administracion />} />
      <Route path="*" element={""} />
      </Routes>
      {/*Componentes a pasar props */}
      </BrowserRouter>
    </>
  )
}

export default App
