import React from "react";
import { Col, Row } from "react-bootstrap";
import me from "../images/me.jpg";
import { about_data } from "../components/data";
const About = () => {
  return (
    <>
      <div className="p-5 about">
        <Row>
          <h2 className="text-center">
            <span>Code Enthusiast:</span> Simple, Strong, and Curious
          </h2>
          <Col md={8}>
            {about_data.map((data) => {
              return (
                <div>
                  <h3>
                    {data.icon} {data.name}
                  </h3>
                  <p>{data.value}</p>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <img src={me} className="w-75" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
