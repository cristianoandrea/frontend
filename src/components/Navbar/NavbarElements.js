import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'


export const Nav = styled.nav`
    background: #000;
    height:80px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position:sticky;
    top:0;
    z-index:10;


    @media screen and (max-width: 960px) {
        transitions: 0.8s all ease;
    }
`;

export const NavbarContainer= styled.div`
    display: flex;
    justify-content: space-between;
    height:80px;
    width:100%;
    z-index:1;
    padding: 0 24px; 
    max-width: 1110px;
`;

export const NavLogo = styled(LinkRouter)`
    color:red;
    justify-self: flex-start;
    cursor:pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left:24px;
    font-weigh: bold;
    text-decoration: none;
`;

export const MobileIcon= styled.div `
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 110%);
        font-size: 1.6 rem;
        cursor: pointer;
        color:#fff;
    }
`;

export const NavMenu= styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display:none;
    }
`;


export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor:pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;






