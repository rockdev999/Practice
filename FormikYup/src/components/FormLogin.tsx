import { Formik } from 'formik'
import '../App.css'
export const FormLogin:React.FC = ()=>{
    
    return(
        <>
            <Formik
                // valores iniciales del valu
                initialValues={{
                    name:'Carlos'
                }}
                onSubmit={()=>{
                    console.log('form send')
                }}
            >
                {({handleSubmit, values})=>(
                    <form action="" onSubmit={handleSubmit}>
                        <div> 
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' name='name'/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' name='email'/>
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                )}
                
            </Formik>
        </>
    )
}