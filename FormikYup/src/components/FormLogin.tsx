import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import '../App.css'

export const FormLogin:React.FC = ()=>{
    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
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
            <form className="form" onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (<div>{formik.errors.email}</div>)}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type={viewPassword?'text':'password'}
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (<div>{formik.errors.password}</div>)}
                    <div onClick={()=>setViewPassword(!viewPassword)}>
                        {viewPassword?<FaEye/>:<FaEyeSlash/>}
                    </div>
                </div>
                <button type="submit">sing in</button>
            </form>
        </>
    )
}

// export const FormLogin:React.FC = ()=>{
//     const [viewPassword, setViewPassword] = useState<boolean>(false);
//     const formik = useFormik({
        
//     })
//     return(
//         <>
//             <Formik
//                 initialValues={{
//                     email:"",
//                     password:"",
//                 }}
//                 // aqui deberia validar con la db?
//                 validationSchema={Yup.object({
//                     email: Yup.string()
//                         .email('invalid')
//                         .required("email is required"),
//                     password: Yup.string()
//                         .required("password is required")
//                 })}
//                 onSubmit={(valuesForm)=>{
//                     console.log('adasd')
//                     console.log("Values Login:", valuesForm);
//                 }}
//             >
//                 {()=>(
//                     <Form className="form">
//                         <div>
//                             <label htmlFor="email">Email</label>
//                             <Field
//                                 type="email"
//                                 name="email"
//                                 placeholder="john@example.com"
//                             />
//                             <ErrorMessage name="email" />
//                         </div>
//                         <div>
//                             <label htmlFor="password">Password</label>
//                             <Field
//                                 type={viewPassword?'text':'password'}
//                                 name="password"
//                             />
//                             <ErrorMessage name="password" />
//                             <div onClick={()=>setViewPassword(!viewPassword)}>
//                                 {viewPassword?<FaEye/>:<FaEyeSlash/>}
//                             </div>
//                         </div>
//                         <button type="submit">sing in</button>
//                     </Form>
//                 )}
//             </Formik>
//         </>
//     )
// }