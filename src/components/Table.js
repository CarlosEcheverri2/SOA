import React from 'react'
import DataTable from 'react-data-table-component'
import imgDelete  from '../images/cross.png'
import imgEdit  from '../images/edit.png'


const Table = ({libros,deleteBooks,cargarInfoEdit}) => {

  const columnas = [
    {
      name:'Nombre',
      selector:row =>row['nombre'],
      sortable: true
    },
    {
      name:'Isbn',
      selector:row =>row['isbn'],
      sortable: true
    },
    {
      name:'Cantidad',
      selector:row =>row['cantidad'],
      sortable: true
    },
    {
      name:'Autor',
      selector:row =>row['autor'],
      sortable: true
    },
    {
      name:'Puntuacion',
      selector:row =>row['calificacion'],
      sortable: true
    },
    
    
    {
      name:'opciones',
      cell: row => <div>
                      <button style={{border:'none', backgroundColor:'#FFF',cursor:'pointer'}} type="button" onClick={()=>{deleteBooks(row.isbn)}}>
                          <img src={imgDelete} alt="delete"/>
                      </button>
                      <button style={{border:'none', backgroundColor:'#FFF',cursor:'pointer'}} type="button" onClick={()=>{cargarInfoEdit(row)}}>
                          <img src={imgEdit} alt="edit"/>
                      </button>
                    </div>                   

    }
  ]

  return (
    <div>
      <DataTable
        columns={columnas}
        data={libros}
        title = "Listado de libros"
        pagination
        fixedHeader
        fixed
      />
    </div>
  )
}

export default Table