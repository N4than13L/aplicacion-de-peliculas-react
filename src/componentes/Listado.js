import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Editar } from './Editar'

export const Listado = ({listadoState, setListadoState}) => {

  // const [listadoState, setListadoState] = useState([])

  const [editar, setEditar] = useState(0)

  useEffect(() => {
    console.log("Componente de listado de peliculas");
    conseguirPeliculas()
  }, [])


  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"))
    //console.log(peliculas)
    peliculas === null && (peliculas = []) // linea agregada
    setListadoState(peliculas)
 
    return peliculas
  }

  const borrarPelicula = (id) => {
    // Conseguir peliculas almacenadas.
    let pelisAlmacenadas = conseguirPeliculas()

    // Filtrar esas peliculas para que la elimine del array.
    let nuevoArrayPeliculas = pelisAlmacenadas.filter(peli => peli.id !== parseInt(id))
    
    // Actualizar estado del listado.
    setListadoState(nuevoArrayPeliculas)

    // actualizar los datos del localStorage.
    localStorage.setItem('pelis', JSON.stringify(nuevoArrayPeliculas))

  }

  return (
    <>
        {listadoState != null ?  listadoState.map(peli => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button className="edit" onClick={ () => setEditar(peli.id) } >Editar</button>
              <button className="delete" onClick={ ()=> borrarPelicula(peli.id)}>Borrar</button>
              
              {/* Funcionalidad para editar */}
              {editar === peli.id && (
                <Editar peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState} />
              )}

            </article>
          )
        })

        : <h2>No hay peliculas para mostrar.</h2>

        }
    </>
  )
}
