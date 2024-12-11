import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {FormLogin} from './components/FormLogin'
import { FormRegister } from './components/FormRegister'
import './App.css'

export const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/form-login' element={<FormLogin/>}/>
        <Route path='/form-register' element={<FormRegister/>}/>
      </Routes>
    </BrowserRouter>
  )
}
// formulario login
// user
// password

// formulario de register (first name, last name)
// Nombre 
// apellido
// correo
// contrasena
// verify password
// teléfono
// Fecha de nacimiento
// Género
// Dirección

// validation 
// study formik una libreria meanejar el estado del formulario, srive para condensar todo en un objeto
// yup es un validador de cada campo