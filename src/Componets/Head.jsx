import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function Head() {
  // const [show, setshow] = useState();
  // const handleShow = () => {
  //   setshow(true);
  // };
  return (
    <>
      <div className=" heading bg-black text-light text-center py-2">
        FREE SHIPING AT THE SHOPING OF 65$
      </div>
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand className="text-dark fs-3">Shopify</Navbar.Brand>
          <Navbar.Toggle>
            <CiMenuFries className="text-dark border-none btn-outline-none fs-2" />
          </Navbar.Toggle>
          <Navbar.Offcanvas className=" offcanvas bg-white w-50">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="mx-3 text-dark mt-4">
                Shopify
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Nav className="px-4 d-flex justify-content-start">
              <Link to={"/"} className="px-4 text-dark text-decoration-none">
                HOME
              </Link>
              <Link
                to={"/Store"}
                className="px-4 text-dark text-decoration-none">
                STORE
              </Link>
              {/* <Link className="px-4 text-dark text-decoration-none"></Link> */}
              <Link
                to={"/About"}
                className="px-4 text-dark text-decoration-none">
                ABOUT
              </Link>
            </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default Head;
