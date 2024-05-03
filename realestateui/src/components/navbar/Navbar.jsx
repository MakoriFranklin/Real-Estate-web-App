import React, { useState } from 'react'
import "./navbar.scss"
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Navbar() {
    const [open, setOpen] = useState(false)

    const user = true;
  return (
    <nav>
        <div className="leftSide">
            <Link to="/" className='logo'>
                <span>FomaEstate</span>
            </Link>

            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
        </div>
        <div className="rightSide">
            {
                user ? 
                (<div className='user'>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Franklin Makori</span>
                    <Link to="/profile" className='profile'>Profile
                        <div className="notification">3</div>
                    </Link>
                </div>) : (<><a href="">Login</a>
                <a href="" className='register'>Signup</a></>)
            }

            <div className='menuIcon'>
                <IoMenu onClick={()=>setOpen((prev) =>!prev)} className={open ? "menuIconActive":""}/>
            </div>

            <div className={open ? "menu active menuIconActive" : "menu"}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
                <a href="">Home</a>
                <a href="">Login</a>
                <a href="">Signup</a>
               

            </div>
        </div>
    </nav>
  )
}

export default Navbar
