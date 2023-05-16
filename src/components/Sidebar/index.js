import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarWrap,
  SidebarRoute,
  Icon,
  CloseIcon,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Pastas</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebarWrap>
        <SidebarRoute to="/">Order now</SidebarRoute>
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
