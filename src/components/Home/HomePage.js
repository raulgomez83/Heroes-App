import React from 'react'
import marvel from "../../homepics/marvel.png"
import dc from "../../homepics/dc.jpeg"
import { NavLink } from 'react-router-dom'



export const HomePage = () => {

    return (
        <div className="logos" > 
         <NavLink  to="/marvel"  >
             <img src={marvel} alt='logo Marvel' />
         </NavLink>
         <NavLink to="/dc" > <img src={dc} alt='logo DC' />
         </NavLink>
        </div>
    )
}
