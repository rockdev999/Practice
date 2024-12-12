import { useFormik } from "formik";
import "./Form.css";
import * as Yup from "yup";
import { useState } from "react";

//lo usaremos cuando no utilizemos el YUP
// interface FormValues {
//   firstname: string;
//   lastname: string;
//   email: string;
//   password: string;
//   verifyPassword: string;
//   phone: number;
//   birthdate: string;
//   gener: string;
//   departament: string;
//   address: string;
// }

export const FormRegister: React.FC = () => {
  const [formSend, setFromSend] = useState<boolean>(false)
  const formik = useFormik({
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
    // validate={(valuesForm: FormValues) => {
    //   let errors: Partial<FormValues> = {}; //el partial nos dice que todas las propiedades ahora son opcionales, sin el partial marcaria error
    //   if (!valuesForm.firstname) {
    //     errors.firstname = "Please enter first name";
    //   }
    //   return errors;
    // }}
    validationSchema:Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("first name is required")
        .matches(/^[a-zA-Z\s]{1,20}$/,"Is not in correct format"),
      lastName: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("last name is required")
        .matches(/^[a-zA-Z\s]{1,20}$/,"Is not in correct format"),
      email: Yup.string()
        .email("Invalid email address")
        .required("email is required")
        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"Is not in correct format"),
      password: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum')
        .required('No password provided')
        .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/,"password has a minimum of 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces."),
      verifyPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref('password'), ""], 'Passwords must match'),
      phone:Yup.string()
        .required("Phone number is required")
        .matches(/^((00|0)?591[2467]{1}[0-9]{6,7})$/,"invalid phone number"),
      birthdate: Yup.string()
        .required("Birth date is required")
        .matches(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[6-9]\d|200[0-6])$/,"Only adults can register"),
      gener: Yup.string()
        .required("Gener is required"),
      departament: Yup.string()
        .required("departament is required"),
      address:Yup.string()
        .required("Address is required"),
    }),
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
      <form className="form" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} //click fuera ejecuta una validacion
          />
          {formik.touched.firstName && formik.errors.firstName && (<div>{formik.errors.firstName}</div>)}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
            {formik.touched.lastName && formik.errors.lastName && (<div>{formik.errors.lastName}</div>)}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
            {formik.touched.email && formik.errors.email && (<div>{formik.errors.email}</div>)}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
            {formik.touched.password && formik.errors.password && (<div>{formik.errors.password}</div>)}
        </div>
        <div>
          <label htmlFor="verifyPassword">Verify Password</label>
          <input
            type="password"
            name="verifyPassword"
            placeholder="Repeat your password"
            value={formik.values.verifyPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
            {formik.touched.verifyPassword && formik.errors.verifyPassword && (<div>{formik.errors.verifyPassword}</div>)}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="69154124"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
            {formik.touched.phone && formik.errors.phone && (<div>{formik.errors.phone}</div>)}
        </div>
        <div>
          <label htmlFor="birthdate">Birth Date</label>
          <input
            type="date"
            name="birthdate"
            value={formik.values.birthdate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
            {formik.touched.birthdate && formik.errors.birthdate && (<div>{formik.errors.birthdate}</div>)}
        </div>
        <div>
          <label htmlFor="gener">Gener</label>
          <label>
            <input
              type="radio"
              name="gener"
              value="man"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />Man
          </label>
          <label>
            <input
              type="radio"
              name="gener"
              value="woman"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />Woman
          </label>
          {formik.touched.gener && formik.errors.gener && (<div>{formik.errors.gener}</div>)}
        </div>
        <div>
          <label htmlFor="departament">departament</label>
          <select
            name="departament"
            value={formik.values.departament}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
              <option value="">Options</option>
              <option value="La Paz">La Paz</option>
              <option value="Oruro">Oruro</option>
              <option value="Oruro">Oruro</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="Pando">Pando</option>
              <option value="Tarija">Tarija</option> 
          </select>
          {formik.touched.departament && formik.errors.departament && (<div>{formik.errors.departament}</div>)}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Satelie street Colombia #504"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
            {formik.touched.address && formik.errors.address && (<div>{formik.errors.address}</div>)}
        </div>
        {/* COMO ACTIVAR PARA QUE CUANDO APRETE ENTER AUTOMATICAMENTE SE ENVIE */}
        <button type="submit">Submit</button>
        {formSend && <div>Form send with successfully!</div>}
      </form>
    </>
  );
};

