import React, { useEffect } from 'react'
import { Formik, Field, Form} from 'formik';
import axios from 'axios';
import './Formulario.css'

const FormularioEdit = ({edit,setEdit}) => {

  useEffect(()=>{
    console.log(edit)
  },[])

  return (
    <div>
       <Formik
          initialValues={{
            isbn:edit.isbn,
            nombre: edit.nombre,
            cantidad:edit.cantidad,
            autor:edit.autor,
            puntuacion:edit.calificacion,
          }}

          validate = {(values) => {
            const errors = {};

            if (!values.isbn) {
              errors.isbn = 'Required';
            }

            if (!values.nombre) {
                errors.nombre = 'Required';
            }

            if (!values.cantidad) {
              errors.cantidad = 'Required';
            }

            if (!values.autor) {
              errors.cantidad = 'Required';
            }

            if (!values.puntuacion) {
              errors.cantidad = 'Required';
            }

              return errors;
            }
          }

          onSubmit = {(values,{resetForm})=>{

            let formulario = new FormData();
            
            formulario.append('isbn',values.isbn)
            formulario.append('nombre',values.nombre)
            formulario.append('cantidad',values.cantidad)
            formulario.append('autor',values.autor)
            formulario.append('puntuacion',values.puntuacion)
            
            axios.post('http://localhost:8080/biblioteca/libro/update.php',formulario).then(function (response){
              console.log(response)
            })

            window.location.replace('http://localhost:3000/')
            setEdit(null)
            resetForm()
          }}
        >
          <Form className='formulario-container'>
              <div>
                Editar libro
              </div>
              <div className='form-create-pieza__div'>
                <div className='formulario-container__option'>
                  <label>* Isbn</label>
                  <Field className ='field-create-pieza' type="number" name="isbn" ></Field>
                </div>

                <div className='formulario-container__option'>
                  <label>* Nombre del libro</label>
                  <Field className ='field-create-pieza' name="nombre" type="text"/>
                </div>
                
                <div className='formulario-container__option'>
                  <label>* Cantidad</label>
                  <Field className ='field-create-pieza' name="cantidad" type="number"/>
                </div>

                <div className='formulario-container__option'>
                  <label>* Autor</label>
                  <Field className ='field-create-pieza' name="autor" type="text"/>
                </div>

                <div className='formulario-container__option'>
                  <label>* Puntuación</label>
                  <Field className ='field-create-pieza' name="puntuacion" type="text"/>
                </div>
                <div className='content-btn'>
                  <button type="submit">enviar</button> 
                </div>
            
              </div>

        </Form>

        </Formik>
    </div>
  )
}

export default FormularioEdit