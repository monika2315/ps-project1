/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { MyContext } from "../Context/contextFile";

const sideBar = () => {
  const [year, setYear] = useState("");
  const [successLaunch, setSuccessLaunch] = useState("");
  const [successLand, setSuccessLand] = useState("");

  const { launch, launchLandFilter, allFilter } = useContext(MyContext);

  const dates = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  useEffect(() => {
    if (successLaunch !== "" && successLand !== "") {
      launchLandFilter(successLaunch, successLand);
    }
  }, [successLaunch, successLand]);

  useEffect(() => {
    if (successLaunch !== "" && successLand !== "" && year !== "") {
      allFilter(successLaunch, successLand, year);
    }
  }, [successLaunch, successLand, year]);

  const takeYear = (e) => {
    setYear(e);
    console.log("year", e);
  };
  const takeSuccessLaunch = (e) => {
    setSuccessLaunch(e);
    console.log("launch", e);
    launch(e);
  };
  const takeSuccessLand = (e) => {
    setSuccessLand(e);
  };

  return (
    <>
      <Container fluid className="sidebar-container">
        <h4>Filters</h4>
        <Row>
          <Col className="input-col">
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Launch Year"
              readOnly
            />
          </Col>
        </Row>
        <Row className="rows">
          {dates.map((item, i) => {
            return (
              <Col xs={6} key={i} className="button-col">
                <Button className="buttons" onClick={() => takeYear(item)}>
                  {item}
                </Button>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col className="input-col">
            <input
              type="text"
              value={successLaunch}
              onChange={(e) => setSuccessLaunch(e.target.value)}
              placeholder="Successful Launch"
              readOnly
            />
          </Col>
        </Row>
        <Row className="rows">
          <Col xs={6} className="button-col">
            <Button className="buttons" onClick={() => takeSuccessLaunch(true)}>
              True
            </Button>
          </Col>
          <Col xs={6} className="button-col">
            <Button
              className="buttons"
              onClick={() => takeSuccessLaunch(false)}
            >
              False
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="input-col">
            <input
              type="text"
              value={successLand}
              onChange={(e) => setSuccessLand(e.target.value)}
              placeholder="Successful Landing"
              readOnly
            />
          </Col>
        </Row>
        <Row className="rows">
          <Col xs={6} className="button-col">
            <Button className="buttons" onClick={() => takeSuccessLand(true)}>
              True
            </Button>
          </Col>
          <Col xs={6} className="button-col">
            <Button className="buttons" onClick={() => takeSuccessLand(false)}>
              False
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default sideBar;
