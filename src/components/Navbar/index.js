import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavLink, NavItem, NavMenu, MobileIcon} from './NavbarElements'

const Navbar = () => {
  return (
    <div>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/"> Osimhen </NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLink to="about">About</NavLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </div>
  )
}

export default Navbar