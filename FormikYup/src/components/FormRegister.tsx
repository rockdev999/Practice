import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Form.css";
import * as Yup from "yup";

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
//   city: string;
//   address: string;
// }

export const FormRegister: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          verifyPassword: "",
          phone: 0,
          birthdate: "",
          gener: "",
          city: "",
          address: "",
        }}
        // validate={(valuesForm: FormValues) => {
        //   let errors: Partial<FormValues> = {}; //el partial nos dice que todas las propiedades ahora son opcionales, sin el partial marcaria error
        //   if (!valuesForm.firstname) {
        //     errors.firstname = "Please enter first name";
        //   }
        //   return errors;
        // }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 20 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(valuesForm) => {
          console.log("Values:", valuesForm);
        }}
      >
        {(
          { handleSubmit, errors, values, handleChange, handleBlur } //renderer prop: se puede inyectar valores de formik
        ) => (
          <Form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstname">First Name</label>
              <Field
                type="text"
                name="firstname"
                placeholder="John"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur} //click fuera ejecuta una validacion
              />
              {errors.firstName && (
                <div className="error">{errors.firstName}</div>
              )}
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <Field
                type="text"
                name="lastname"
                placeholder="Doe"
                value={values.lastName}
                onChange={handleChange}
                // onBlur={handleBlur} // solo se usa cuando no usamos validaciones con Yup
              />
            </div>
            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
// formulario de register (first name, last name)
// Nombre
// apellido
// correo
// contrasena
// verify password
// teléfono
// Fecha de nacimiento
// Género
//City
// Dirección
