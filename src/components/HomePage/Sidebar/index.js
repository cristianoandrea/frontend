import React from 'react'
import{
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarLink1
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={ toggle }>
      <Icon onClick={ toggle }>
          <CloseIcon/>
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={ toggle }>About</SidebarLink>
          <SidebarLink1 to="/store" onClick={ toggle }>Store</SidebarLink1>
          <SidebarLink1 to="/presenza" onClick={ toggle }>Presenza</SidebarLink1>
          <SidebarLink1 to="/online" onClick={ toggle }>Online</SidebarLink1>
          <SidebarLink1 to="/community" onClick={ toggle }>Community</SidebarLink1>
          <SidebarLink to="servizi" onClick={ toggle }>Servizi</SidebarLink>
          
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to="/signin" onClick={ toggle }>Sign In</SidebarRoute>
        </SideBtnWrap>

      </SidebarWrapper>
      


    </SidebarContainer>
  )
}

export default Sidebar