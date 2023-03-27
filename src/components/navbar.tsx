import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import logo from "img/logo.png";
import { Button } from "react-bootstrap";

const options = ["About me", "Skills", "Experiences"];

interface Props {
  className?: string;
}

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
            <Nav.Link href="#">Home</Nav.Link>
            {options.map((opt) => (
              <Nav.Link href={`#${opt.split(" ")[0].toLowerCase()}`}>
                {opt}
              </Nav.Link>
            ))}
            <Button className="btn-contact">Contact</Button>
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
  height: 8rem;

  .navbar-collapse {
    justify-content: right;
    background-color: rgb(8, 60, 60) !important;
  }
  .navbar-nav {
    gap: 4rem;
    font-weight: 600;
  }
  .btn-contact {
    font-size: inherit;
    background-color: rgb(13, 122, 138);
    display: inline-block;
    text-decoration: none;
    padding: 0 3.2rem;
    border-radius: 9px;
    transition: all 0.5s;
    font-weight: inherit;
    border: none;

    &:hover {
      background-color: #0c8599;
      transform: translateY(-0.3rem);
    }
  }
`;
