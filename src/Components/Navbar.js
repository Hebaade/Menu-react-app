import { useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ filterBySearch }) {
 const [word,setWord]=useState("")
  const onSearch = () => {
     filterBySearch(word);
     setWord("");
  }
  return (
    <Row>
      <Navbar expand="lg" className="bg-body-tertiary p-2">
        <Container>
          <Navbar.Brand href="#" className="fs-3">
            X-Food
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setWord(e.target.value)}
                value={word}
              />
              <Button variant="outline-success" onClick={onSearch}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export default NavBar;
