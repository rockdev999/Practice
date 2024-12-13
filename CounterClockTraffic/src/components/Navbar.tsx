import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = ()=>{
    return(
        <div>
           <Link to='/counter'>Counter</Link>
           <Link to='/clock'>Clock</Link>
           <Link to='/traffic-ligth'>Traffic Ligth</Link>
        </div>
    )
}