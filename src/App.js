import React, { useEffect, useState } from 'react';
import OptionsNav from './components/OptionsNav';
import {Route, Routes} from 'react-router-dom'
import FormularioCreate from './components/FormularioCreate.js';
import ViewData from './components/ViewData';
import FormularioEdit from './components/FormularioEdit';

function App() {

  const [edit,setEdit]=useState(null)
  const cargarInfoEdit = (element) => {
    console.log(element)
    setEdit(element)
  }

  return (
    <div className="App">
      <div>
        <OptionsNav/>
        <Routes>
          <Route exact path="/" element={<ViewData cargarInfoEdit={cargarInfoEdit}/>}/>
          <Route Router path="/formulario" element={<FormularioCreate/>}/>
        </Routes> 
        {edit &&
          <FormularioEdit
           edit={edit}
           setEdit={setEdit}
          />
        }
      </div>
    </div>
  );
}

export default App;
