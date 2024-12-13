import * as Yup from 'yup'

export const ValidationFormRegister = () =>{
    const validationFormRegister = Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          // crear un archivo para generalize todo ValidatorMessage.
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
      })
    return validationFormRegister;
}