const recetasBackend = import.meta.env.VITE_API_BACKEND;
const usuariosBackend = import.meta.env.VITE_API_USUARIO;

const obtenerToken = () => {
  try {
    const usuario = JSON.parse(sessionStorage.getItem("usuarioKey"));
    return usuario?.token || "";
  } catch (error) {
    console.error("Error al obtener token:", error);
    return "";
  }
};

export const listarRecetas = async () => {
  try {
    const respuesta = await fetch(recetasBackend);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const crearReceta = async (receta) => {
  try {
    const respuesta = await fetch(recetasBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": obtenerToken(), 
      },
      body: JSON.stringify(receta),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
    return { ok: false, status: 0, error: error.message };
  }
};

export const editarRecetaId = async (id, receta) => {
  try {
    const respuesta = await fetch(`${recetasBackend}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": obtenerToken(), 
      },
      body: JSON.stringify(receta),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const obtenerRecetaID = async (id) => {
  try {
    const respuesta = await fetch(`${recetasBackend}/${id}`);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const borrarReceta = async (id) => {
  try {
    const respuesta = await fetch(`${recetasBackend}/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": obtenerToken(), 
      },
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(`${usuariosBackend}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};