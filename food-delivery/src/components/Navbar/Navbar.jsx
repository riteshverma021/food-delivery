import React from 'react'
import {assets} from '../../assets/assets'
import './navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({setshowlogin}) => {
    const [menu, setmenu] = useState('home');
  return (
    <div className='navbar' >
  <Link to='/'><img src={assets.logo} className='logo' alt="" /></Link>  
    <ul className="navbar-menu">
      <Link to='/' > <li onClick={()=>(setmenu('home'))}  className= {menu === "home"? 'active' : ""}  >home</li></Link>
       
        <li   onClick={()=>(setmenu("menu"))} className= {menu === "menu"? 'active' : ""}   > menu</li>
        <li onClick={()=>(setmenu("mobile-app"))}  className= {menu === "mobile-app"? 'active' : ""}   >mobile app</li> 
        <li  onClick={()=>(setmenu("contact"))} className= {menu === "contact"? 'active' : ""}  >contact us</li>
    </ul>
    <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon' >
           <Link to='/cart' > <img src={assets.basket_icon} alt="" /></Link>
            <div className='dot'></div>
        </div>
        <button onClick={()=>(setshowlogin(true))} >sign up</button>
    </div>
    </div>
  )
}

export default Navbar