// components/NavBar.jsx
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: navy;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
    return (
        <Nav>
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/report">Reportar Mascota</NavLink>
            <NavLink href="/contact">Contacto</NavLink>
        </Nav>
    );
};

export default NavBar;
