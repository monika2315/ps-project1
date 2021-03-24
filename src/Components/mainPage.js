import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MainContent from "./mainContent";
import SideBar from "./sideBar";
import Footer from "./footer";

const MainPage = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#f4f4f1" }}>
        <h4>SpaceX Launch Program</h4>
        <Row>
          <Col sm={12} md={4} lg={3}>
            <SideBar />
          </Col>
          <Col sm={12} md={8} lg={9}>
            <MainContent />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default MainPage;
