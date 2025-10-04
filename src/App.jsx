import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Inicio, Recetas } from "./components/index.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/recetas" element={<Recetas />} />
      </Routes>
      {/*Componentes a pasar props */}
      </BrowserRouter>
    </>
  )
}

export default App
