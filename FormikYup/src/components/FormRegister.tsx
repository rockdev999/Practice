import { useFormik } from "formik";
import "./Form.css";
import { useState } from "react";
import { ValidationFormRegister } from "./validation/ValidationFormRegister";

export const FormRegister: React.FC = () => {
  const [formSend, setFromSend] = useState<boolean>(false)
  const {handleSubmit,handleChange, handleBlur, values, touched, errors } = useFormik({
    initialValues:{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      verifyPassword: "",
      phone: "",
      birthdate: "",
      gener: "",
      departament: "",
      address: "",
    },
    // DEBERIA ESTAR EN UN ARCHIVO DISTINTO COMO UNA CONSTANTE
    validationSchema : ValidationFormRegister,
    // no utilizar el onSubmit para manejar los datos. 
    onSubmit:(valuesForm, {resetForm}) => {
      resetForm();
      console.log("Values:", valuesForm);
      setFromSend(true)
      setTimeout(()=>{
        setFromSend(false)
      },3000)
    }
  })
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur} //click fuera ejecuta una validacion
          />
          {touched.firstName && errors.firstName && (<div>{errors.firstName}</div>)}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {touched.lastName && errors.lastName && (<div>{errors.lastName}</div>)}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {touched.email && errors.email && (<div>{errors.email}</div>)}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {touched.password && errors.password && (<div>{errors.password}</div>)}
        </div>
        <div>
          <label htmlFor="verifyPassword">Verify Password</label>
          <input
            type="password"
            name="verifyPassword"
            placeholder="Repeat your password"
            value={values.verifyPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {touched.verifyPassword && errors.verifyPassword && (<div>{errors.verifyPassword}</div>)}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="69154124"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {touched.phone && errors.phone && (<div>{errors.phone}</div>)}
        </div>
        <div>
          <label htmlFor="birthdate">Birth Date</label>
          <input
            type="date"
            name="birthdate"
            value={values.birthdate}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {touched.birthdate && errors.birthdate && (<div>{errors.birthdate}</div>)}
        </div>
        <div>
          <label htmlFor="gener">Gener</label>
          <label>
            <input
              type="radio"
              name="gener"
              value="man"
              onChange={handleChange}
              onBlur={handleBlur}
            />Man
          </label>
          <label>
            <input
              type="radio"
              name="gener"
              value="woman"
              onChange={handleChange}
              onBlur={handleBlur}
            />Woman
          </label>
          {touched.gener && errors.gener && (<div>{errors.gener}</div>)}
        </div>
        <div>
          <label htmlFor="departament">departament</label>
          <select
            name="departament"
            value={values.departament}
            onChange={handleChange}
            onBlur={handleBlur}
          >
              <option value="">Options</option>
              <option value="La Paz">La Paz</option>
              <option value="Oruro">Oruro</option>
              <option value="Oruro">Oruro</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="Pando">Pando</option>
              <option value="Tarija">Tarija</option> 
          </select>
          {touched.departament && errors.departament && (<div>{errors.departament}</div>)}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Satelie street Colombia #504"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
            {touched.address && errors.address && (<div>{errors.address}</div>)}
        </div>
        {/* COMO ACTIVAR PARA QUE CUANDO APRETE ENTER AUTOMATICAMENTE SE ENVIE */}
        <button type="submit">Submit</button>
        {formSend && <div>Form send with successfully!</div>}
      </form>
    </>
  );
};

