import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import '../App.css'

export const FormLogin:React.FC = ()=>{
    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const{handleSubmit,handleChange, handleBlur, values, touched, errors } = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        // validar que este en el formato correcto
        validationSchema: Yup.object({
            email: Yup.string()
                .email('invalid')
                .required("email is required"),
            password: Yup.string()
                .required("password is required")
        }),
        onSubmit: (valuesForm)=>{
            console.log('adasd')
            console.log("Values Login:", valuesForm);
        }
    })
    return(
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {touched.email && errors.email && (<div>{errors.email}</div>)}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type={viewPassword?'text':'password'}
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {touched.password && errors.password && (<div>{errors.password}</div>)}
                    <div onClick={()=>setViewPassword(!viewPassword)}>
                        {viewPassword?<FaEye/>:<FaEyeSlash/>}
                    </div>
                </div>
                <button type="submit">sing in</button>
            </form>
        </>
    )
}