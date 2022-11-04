import React from 'react'
import './Formulario.css'

const Formulario = () => {
  return (
    <div>
      <form action="http://localhost:8080/biblioteca/libro/create.php" method="post">
        <div className='formulario-container'> 
          <div className='formulario-container__option'>
            <label>Nombre del libro</label>
            <input type="text" name="nombre" />
          </div>
          <div className='formulario-container__option'>
            <label>Isbn</label>
            <input type="text" name="isbn" />
          </div>
          <div className='formulario-container__option'>
            <label>Cantidad</label>
            <input type="number" name="cantidad" />
          </div>
          <div className='formulario-container__option'>
            <label>Autor</label>
            <input type="text" name="autor" />
          </div>
          <div className='formulario-container__option'>
            <label>Puntuacion</label>
            <input type="number" name="puntuacion" />
          </div>
          <div className='content-btn'>
          <button type="submit">enviar</button> 
          </div>
        </div>
      </form>
    </div>
  )
}

export default Formulario