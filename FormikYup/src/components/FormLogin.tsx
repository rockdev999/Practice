import { Formik } from 'formik'
import '../App.css'
export const Form:React.FC = ()=>{
    return(
        <>
            <Formik
                onSubmit={()=>{
                    console.log('form send')
                }}
            >
                {({handleSubmit})=>(
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