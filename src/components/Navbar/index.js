import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav id="home">
        <NavLink to='/'><bold>peazza</bold></NavLink>
        <NavIcon onClick={toggle}>
            <Bars/>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
