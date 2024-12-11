import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar:React.FC = ()=>{
    const navigate = useNavigate();
    return(
        <div>
            {/* porque hay error en el link */}
            <Link onClick={()=>navigate('/form-login')}>Form Login</Link>
            <Link onClick={()=>navigate('/form-register')}>Form Register</Link>
        </div>
    )
}