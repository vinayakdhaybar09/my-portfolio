import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'


const Navbar = () => {

    const [menuOpened, setMenuOpened] = useState(false)
    const mobile = window.innerWidth <= 768 ? true : false

    return (
        <nav id='navbar'>
            <img src={logo} alt="logo" />
            {
                menuOpened === false && mobile === true ? (
                    <div onClick={() => setMenuOpened(true)}>
                        <HiOutlineMenuAlt3 />
                    </div>
                )
                    :
                    (
                        <main>
                            <MdClose onClick={()=> setMenuOpened(false)}/>
                            <a href="#about" onClick={()=> setMenuOpened(false)}>01. <span>About</span></a>
                            <a href="#experience" onClick={()=> setMenuOpened(false)}>02. <span>Experience</span></a>
                            <a href="#contact" onClick={()=> setMenuOpened(false)}>03. <span>Contact</span></a>
                        </main>
                    )
            }



        </nav>
    )
}

export default Navbar