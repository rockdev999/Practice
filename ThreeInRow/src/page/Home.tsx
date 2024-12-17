import { Link } from "react-router-dom"

export const Home = () =>{
    return (
        <div className="home">
            <Link to='three-in-row' className="btn_home">Three In a Row</Link>
            <Link to='boardversion1' className="btn_home">Board Version 1</Link>
            <Link to='boardversion2' className="btn_home">Board Version 2</Link>
        </div>
    )
}