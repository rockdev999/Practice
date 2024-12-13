import { Counter } from "./Counter"

export const PageCounter = () =>{
    return(
        <>
            <h1>COUNTER</h1>
            <Counter initial={0} duration={1} increment={1}/>
            <Counter initial={5} duration={2} increment={2}/>
            <Counter initial={3} duration={1} increment={2}/>
            <Counter initial={100} duration={1} increment={50}/>
        </>
    )
}