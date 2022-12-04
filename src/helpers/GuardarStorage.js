export const guardarStorage = (clave, elemento) => {
    // Conseguir los elementos que ya se tienen en el localStorage.
    let elementos = JSON.parse(localStorage.getItem(clave)) 
    
    // Comprobar si es un array.
    if(Array.isArray(elementos)){
        // Agregar en el localStorage. 
        elementos.push(elementos)
    }else{
        // Crear array con la peli nueva.
        elementos = [elementos] 
    }

    // Guardar en el localStorage.
    localStorage.setItem(clave, JSON.stringify([elementos]))

    // Devolver el objeto. 
    return elemento
    
}