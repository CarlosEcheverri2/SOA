import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table.js';

const ViewData = ({cargarInfoEdit}) => {

  const [libros,setLibros] = useState(null) 
  
  const deleteBooks = (isbn) => {
    let formulario = new FormData()
    formulario.append('libro',isbn)

    axios.post('http://localhost:8080/biblioteca/libro/delete.php',formulario).then(function (response){
      getBooks()
    })
  }

  const getBooks = () =>{
    axios.get('http://localhost:8080/biblioteca/libro/index.php').then(function (response){
      console.log(response.data)
      setLibros(response.data)
    })
  }

  useEffect(()=>{
    getBooks()
  },[])


  return (
    <div>
         { libros&&
              <Table
                deleteBooks={deleteBooks}
                libros={libros}
                cargarInfoEdit={cargarInfoEdit}
              />
            }
    </div>
  )
}

export default ViewData