import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";

const options = ["About me", "Skills", "Experiences"];

function NavBar() {
  return (
    <NavbarBootstrap collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavbarBootstrap.Brand href="#home">Home</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBootstrap.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {options.map((o) => (
              <Nav.Link href={`#${o.split(" ")[0].toLowerCase()}`}>
                {o}
              </Nav.Link>
            ))}
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default NavBar;
