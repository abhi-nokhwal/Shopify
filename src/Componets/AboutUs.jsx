import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center mt-5">
        <Col md={10} className="text-center">
          <h1 className="text-center">About Us</h1>
          <p className="mt-4">
            Welcome to Shopify, we had a collection fo Electronics ,clothes,
            shoes, and accessories. We're dedicated to providing you the very
            best of Clothes with an emphasis on quality, customer service, and
            uniqueness.
          </p>
          <p>
            Founded in 1984 by Nokhwal and sons , shopify has come a long way
            from its beginnings in Srigaganager . When Abhisek Nokhwal first
            started out, their passion for mission or reason for starting, e.g.,
            "eco-friendly fashion" drove them to start their own business.
          </p>
          <p>
            We hope you enjoy our products as much as we enjoy offering them to
            you. If you have any questions or comments, please don't hesitate to
            contact us.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide high-quality products at affordable prices
            while ensuring top-notch customer service. We are committed to
            offering a seamless shopping experience with products you’ll love.
          </p>
          <h3>Why Shop with Us?</h3>
          <div className="mt-4">
            <p>Premium quality products</p>
            <p>Fast and reliable shipping</p>
            <p>Excellent customer service</p>
            <p>Exclusive collections</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
