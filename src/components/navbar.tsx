import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import logo from "img/logo.png";
import { Props } from "types";

const options = ["About me", "Skills", "Experiences", "Projects"];

function NavBar(props: Props) {
  return (
    <NavbarBootstrap
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      className={props.className}
    >
      <Container>
        <NavbarBootstrap.Brand href="#">
          <img src={logo} className="logo" alt="logo" />
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBootstrap.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            {options.map((opt, i) => (
              <Nav.Link href={`#${opt.split(" ")[0].toLowerCase()}`} key={i}>
                {opt}
              </Nav.Link>
            ))}
            <a href="#contact" className="btn-contact">
              Contact
            </a>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default styled(NavBar)`
  font-size: 1.8rem !important;
  background-color: rgb(8, 60, 60) !important;
  display: flex !important;
  max-height: 8rem;

  .navbar {
    &-collapse {
      justify-content: right;
      background-color: rgb(8, 60, 60) !important;
    }
    &-nav {
      gap: 4rem;
      font-weight: 600;
    }
  }
`;
