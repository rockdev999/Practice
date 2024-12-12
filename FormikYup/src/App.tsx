import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { FormLogin } from "./components/FormLogin";
import { FormRegister } from "./components/FormRegister";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/form-login" element={<FormLogin />} />
        <Route path="/form-register" element={<FormRegister />} />
      </Routes>
    </BrowserRouter>
  );
};
// formulario login
// user
// password

// validation
// study formik una libreria meanejar el estado del formulario, srive para condensar todo en un objeto
// yup es un validador de cada campo
