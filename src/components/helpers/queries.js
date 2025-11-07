const recetasBackend = import.meta.env.VITE_API_BACKEND

export const listarRecetas= async ()=>{
    try {
        const respuesta = await fetch(recetasBackend)
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.log(error)
        return null
    }
}

export const crearReceta = async (receta)=>{
    try {
        const respuesta = await fetch(recetasBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(receta)
        })
        console.log(respuesta)
        return respuesta
    } catch (error) {
        console.log(error)
        return null
    }
}