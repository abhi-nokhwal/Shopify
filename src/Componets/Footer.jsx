import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" footer bg-black text-light">
      <Container>
        <Row className="pt-3 border-top border-light">
          <Col className="text-center">
            <p className="mb-0">© 2024 Shopify, All Rights Reserved.</p>
            <a href="#" className="text-light">
              Terms
            </a>{" "}
            |
            <a href="#" className="text-light">
              {" "}
              Privacy
            </a>{" "}
            |
            <a href="#" className="text-light">
              {" "}
              Cookie Preferences
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
