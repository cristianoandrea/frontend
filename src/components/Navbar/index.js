import React from 'react'
import { FaBars } from 'react-icons/fa'
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
  return (
    <div>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Animal House </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLink to="about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="salute">Salute</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="pensione">Pensione</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="prodotti">Prodotti</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="cuccioli">Cuccioli</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="servizi">Servizi</NavLink>
                    </NavItem>
                </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink> 
                    </NavBtn>
                    

                
                
            </NavbarContainer>
        </Nav>
    </div>
  )
}

export default Navbar