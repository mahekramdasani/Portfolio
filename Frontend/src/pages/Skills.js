import React from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import { skillsArray } from "../components/data";
import RSlider from "../components/RSlider";
const Skills = () => {
  const renderTooltip = (language) => (
    <Tooltip id={`tooltip-${language}`}>{language}</Tooltip>
  );
  return (
    <>

      <div className="skills">
        <Row>
          <h2 className="text-center">Skills</h2>
          {skillsArray.map((skill) => (
            <Col xs={6} sm={4} md={3} key={skill.name} className="d-flex justify-content-center align-items-center">
              <div className="skill-div">
                {skill.name}
              </div>
            </Col>
          ))}
        </Row>
      <div class="certification">
        <RSlider/>
      </div>
      </div>
    </>
  );
};

export default Skills;
