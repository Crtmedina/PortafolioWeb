import styled from "styled-components";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

export const MenuNavegacion = () => {
  
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavBrand onClick={scrollToTop}>Cristobal Medina</NavBrand>
      <MenuButton onClick={toggleMenu}>☰</MenuButton>
      <NavItems isOpen={isOpen}> 
        <NavItem>
          <ScrollLinkStyled
            to="home"
            smooth={true}
            duration={200}
            activeClass="active"
          >
            Inicio
          </ScrollLinkStyled>
        </NavItem>
        <NavItem>
          <ScrollLinkStyled
            to="about"
            smooth={true}
            duration={200}
            activeClass="active"
          >
            Acerca de
          </ScrollLinkStyled>
        </NavItem>
        <NavItem>
          <ScrollLinkStyled
            to="tecnologias"
            smooth={true}
            duration={200}
            activeClass="active"
          >
            Tecnologías
          </ScrollLinkStyled>
        </NavItem>
        <NavItem>
          <ScrollLinkStyled
            to="proyectos"
            smooth={true}
            duration={200}
            activeClass="active"
          >
            Portafolio
          </ScrollLinkStyled>
        </NavItem>
        <NavItem>
          <ScrollLinkStyled
            to="contacto"
            smooth={true}
            duration={200}
            activeClass="active"
          >
            Contacto
          </ScrollLinkStyled>
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background-color: #BDBDBD;
  padding: 10px 6rem;
  color: black;
  display: flex;
  justify-content: space-between;
  font-family: 'Rubik', sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavBrand = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Sora', sans-serif;
  padding-top: 0.5rem;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    ${({ isOpen }) => !isOpen && 'display: none;'}
  }
`;


const NavItem = styled.li`
  a {
    text-decoration: none;
    font-weight: 500;
    color: black;
    cursor: pointer;
    font-size: 1rem; /* Ajustar según tus preferencias */
  }

  padding: 0.5rem;
  @media (max-width: 768px) {
    padding: 0.2rem;
  }
`;

const ScrollLinkStyled = styled(ScrollLink)`
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  color: black;

  &.active {
    border-bottom: 2px solid #3C355C;
  }
`;

const MenuButton = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    display: block;
  }
`;