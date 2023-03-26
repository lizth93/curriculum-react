import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";

const options = ["About me", "Skills", "Experiences"];

function NavBar() {
  return (
    <NavbarBootstrap
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
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

export default NavBar;
