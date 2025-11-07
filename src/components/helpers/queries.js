const recetasBackend = import.meta.env.VITE_API_BACKEND

export const listarRecetas= async ()=>{
    try {
        const respuesta = await fetch(recetasBackend)
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.log(error)
    }
}