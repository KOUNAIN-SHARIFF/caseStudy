import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
  NavDropdown,
} from "react-bootstrap";
import Logo from "../../Assets/Logo.png";

function NavBar() {
  const [showSublist, setShowSublist] = useState(false);

  const toggleSublist = () => {
    setShowSublist(!showSublist);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          alt="Logo"
          width="110"
          height="90"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <NavDropdown title="Products" id="products-dropdown">
            <NavDropdown.Item href="/products/category1">
              Category 1
            </NavDropdown.Item>
            <NavDropdown.Item href="/products/category2">
              Category 2
            </NavDropdown.Item>
            <NavDropdown.Item href="/products/category3">
              Category 3
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/products/sale">Sale</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>
        <Form inline>
          <DropdownButton
            title="Search by"
            id="search-by-dropdown"
            variant="outline-primary"
            size="sm"
            onSelect={() => toggleSublist()}
          >
            <Dropdown.Item eventKey="title">Title</Dropdown.Item>
            <Dropdown.Item eventKey="author">Author</Dropdown.Item>
            <Dropdown.Item eventKey="date">Date</Dropdown.Item>
            <Dropdown.Item eventKey="category">Category</Dropdown.Item>
          </DropdownButton>
          {showSublist && (
            <div className="sublist">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="primary" size="sm">
                Go
              </Button>
            </div>
          )}
        </Form>
        <Button variant="outline-primary" size="sm">
          Filter
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
