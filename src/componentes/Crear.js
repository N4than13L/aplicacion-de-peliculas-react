import React, { useState } from 'react'

export const Crear = () => {

    const tituloComponente = "Añadir pelicula"

    const [ peliculaState, setPeliculaState ] = useState({
        titulo: '',
        descripcion: ''
    })

    const { titulo, descripcion } = peliculaState

    const conseguirDatosForm = (e) => {
        e.preventDefault()

        // Conseguir datos del formulario
        let target = e.target
        let titulo = target.titulo?.value
        let descripcion = target.Descripcion?.value

        // Crear objeto de la pelicula 
        let pelicula = {
            id: new Date().getDate(),
            titulo,
            descripcion
        }

        setPeliculaState(pelicula)

    }

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        <strong>
            {(titulo && descripcion) && "Creado la pelicula " + titulo} 
        </strong>

        <form onSubmit={conseguirDatosForm}>

            <input type="text"  name="titulo" placeholder="Titulo" />

            <textarea 
                name="description" placeholder="Descripción">
            </textarea>

            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
