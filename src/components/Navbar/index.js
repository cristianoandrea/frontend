import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { Nav,
    NavbarContainer,
    NavLogo,
    NavLink,
    NavItem,
    NavMenu,
    MobileIcon,
    NavBtn,
    NavBtnLink} from './NavbarElements'

const Navbar = ({ toggle }) => {
  
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
        setScrollNav(true);
    } else {
        setScrollNav(false);
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
        <IconContext.Provider value={ {color: '#fff'} }>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    Animal House 
                    </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="salute" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Salute</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="pensione" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Pensione</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="prodotti" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Prodotti</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="cuccioli" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Cuccioli</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="servizi" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Servizi</NavLink>
                    </NavItem>
                </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/signin" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign In</NavBtnLink> 
                    </NavBtn>
                    

                
                
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </div>
  )
}

export default Navbar