import React, { useState } from 'react'
import { guardarStorage } from '../helpers/GuardarStorage'

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
        let descripcion = target.descripcion?.value

        // Crear objeto de la pelicula 
        let pelicula = {
            id: new Date().getDate(),
            titulo,
            descripcion
        }

        setPeliculaState(pelicula)

        // agregar listado de peliculas a localStorage del navegador. 
        guardarStorage("pelis", pelicula)

    }

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        <strong>
            {(titulo && descripcion) && "Creado la pelicula " + titulo} 
        </strong>

        <form onSubmit={conseguirDatosForm}>

            <input type="text" id="titulo" name="titulo" placeholder="Titulo" />

            <textarea 
                name="descripcion" id="descripcion" placeholder="Descripción">
            </textarea>

            <input type="submit" id="save" value="Guardar" />
            
        </form>
    </div>
  )
}
