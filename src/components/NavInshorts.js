import React from 'react'
import Hamburger from './Hamburger'
import './NavInshorts.css'

function NavInshorts({setCategory}) {
    return (
        <div className='nav'>
           <div className="nav__icon">
               <Hamburger setCategory={setCategory}/>
           </div>
           <div className="nav__img">
               <img src="https://aroundsketch.github.io/Apple-App-Icons/App%20Icon/Apple/News/@PNG.png" alt="Logo" />
           </div>
        </div>
    )
}

export default NavInshorts
