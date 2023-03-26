import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";

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
        <NavbarBootstrap.Brand href="#">Home</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBootstrap.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {options.map((opt) => (
              <Nav.Link href={`#${opt.split(" ")[0].toLowerCase()}`}>
                {opt}
              </Nav.Link>
            ))}
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default styled(NavBar)`
  font-size: 1.8rem !important;
  background-color: rgb(8, 60, 60) !important;
`;
