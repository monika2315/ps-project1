import React, { useContext, useEffect } from "react";
import { MyContext } from "../Context/contextFile";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import "../App.css";

const MainContent = () => {
  const { spaceX, list, loader } = useContext(MyContext);

  useEffect(() => {
    spaceX();
  }, []);

  return (
    <>
      <Row>
        {list.length === 0 && loader === true ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          list.length > 0 &&
          list.map((item, i) => {
            return (
              <Col sm={12} md={6} lg={3} className="card-col" key={i}>
                <Card key={item.flight_number} className="card">
                  <Card.Img
                    variant="top"
                    src={item.links.mission_patch_small}
                  />
                  <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">
                      <span>
                        {item.mission_name} #{item.flight_number}
                      </span>
                    </Card.Title>
                    <div className="cardTitle">
                      <span className="textSpan">Mission Ids:</span>
                      <span className="spanValue">
                        {item.mission_id.map((item, i) => {
                          return (
                            <ul key={i}>
                              <li>{item}</li>
                            </ul>
                          );
                        })}
                      </span>
                    </div>
                    <Card.Text className="cardTitle">
                      <span className="textSpan">Launch Year: </span>
                      <span className="spanValue">{item.launch_year}</span>
                    </Card.Text>
                    <Card.Text className="cardTitle">
                      <span className="textSpan">Successful Launch: </span>
                      <span className="spanValue">
                        {item.launch_success === true
                          ? "True"
                          : item.launch_success === false
                          ? "False"
                          : "{launch_success}"}
                      </span>
                    </Card.Text>
                    <Card.Text className="cardTitle">
                      <span className="textSpan">Successful Landing: </span>
                      <span className="spanValue">
                        {item.rocket.first_stage.cores[0].land_success === true
                          ? "True"
                          : item.rocket.first_stage.cores[0].land_success ===
                            false
                          ? "False"
                          : "{launch_landing"}
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        )}
      </Row>
    </>
  );
};

export default MainContent;
