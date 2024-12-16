import { Link } from "react-router-dom"

export const Home = () =>{
    return (
        <div>
            <Link to='three-in-row'>Three In a Row</Link>
            <Link to='boardversion1'>Board Version 1</Link>
            <Link to='boardversion2'>Board Version 2</Link>
        </div>
    )
}