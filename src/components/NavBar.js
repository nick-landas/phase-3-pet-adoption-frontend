import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function NavBar() {
  return (
    <>
        <Navbar bg="myColor" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#">U*niQ Pet Adoption Agency</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pets">Pets</Nav.Link>
            <Nav.Link href="#owners">Owners</Nav.Link>
            <Nav.Link href="#application">Application</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;