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
               <img src="https://www.freeiconspng.com/thumbs/news-icon/news-icon-19.png" alt="Logo" />
           </div>
               <h2 className='heading'>D-Day News</h2>
        </div>
    )
}

export default NavInshorts
