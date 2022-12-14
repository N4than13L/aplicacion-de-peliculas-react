import React from 'react'

export const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
  const tituloComponente = "Formulario de edición"

  const editarPelicula = (e, id) => {
    e.preventDefault()

    // Conseguir el target del evento
    let target = e.target

    // Buscar el indice del objeto de la pelicula a actualizar.
    const peliculaAlmacenada = conseguirPeliculas()
    const indice = peliculaAlmacenada.findIndex(peli => peli.id === id)

    // Crear objeto de con el indice.
    let peliActualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    }

    // Actualizar el elemento de ese indice.
    peliculaAlmacenada[indice] = peliActualizada

    // Guardar el array en el localStorage.
    localStorage.setItem("pelis", JSON.stringify(peliculaAlmacenada))

    // Actualizar el estado.
    setListadoState(peliculaAlmacenada)
    setEditar(0)

  }

  return (
    <div className='edit_form'>
      <h3 className='title'>{tituloComponente}</h3>

      <form onSubmit={e => editarPelicula(e, peli.id)}>
        <input type="text"
          name='titulo'
          className='titulo_editado'
          defaultValue={peli.titulo} />

        <textarea
          name='desctipcion'
          defaultValue={peli.descripcion}
          className='descripcion_editada' />

        <input type="submit" className='editar' value="Actualizar" />

      </form>
    </div>
  )
}
