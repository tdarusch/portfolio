import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements';
import './navbar.css'

const Navbar = () => {
  return (
    <>    
        <Nav>
            <Bars/>
            
            <NavMenu>
              <img src={require('./icon.png')} class="nav-icon" alt=""></img>
              <NavLink to='/intro' activeStyle>Intro</NavLink>
              <NavLink to='/projects' activeStyle>Projects</NavLink>
              <NavLink to='/resume' activeStyle>Resume</NavLink>
              <NavLink to='/contact' activeStyle>Contact</NavLink>
              <img src={require('./icon1.png')} class="nav-icon1" alt=""></img>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar;