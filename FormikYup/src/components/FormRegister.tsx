import { useFormik } from "formik"
export const FormRegister:React.FC=()=>{
    const formik = useFormik({
        initialValues:{
            firstName:'',

        }
    });
    return(
        <>
        </>
    )
}
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
