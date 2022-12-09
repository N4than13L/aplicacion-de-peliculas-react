export const guardarStorage = (clave, elemento) => {
    // Conseguir los elementos que ya se tienen en el localStorage.
    let elementos = JSON.parse(localStorage.getItem(clave)) 
    
    // Comprobar si es un array.
    if(Array.isArray(elementos)){
        // Agregar en el localStorage. 
        elementos.push(elemento)
    }else{
        // Crear array con la peli nueva.
        elementos = [elemento] 
    }

    // Guardar en el localStorage.
    localStorage.setItem(clave, JSON.stringify([elemento]))

    // Devolver el objeto. 
    return elemento
    
}