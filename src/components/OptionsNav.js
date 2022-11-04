import React from 'react'
import './OptionsNav.css'
import {Link} from 'react-router-dom'

const OptionsNav = () => {
  return (
    <div className="optionsnav-container">
        <nav>
              <ul className=''>
                <li>
                  <Link  to="/formulario">Añadir libro</Link>
                </li>
                <li>
                  <Link to="/">Tabla</Link>
                </li>
              </ul>
        </nav>
    </div>
  )
}

export default OptionsNav