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
          {skillsArray.map((skill, index) => (
            <Col xs={12} md={4} key={index} className="mb-3">
              <div className="d-flex flex-column align-items-center">
                <div className="skill-img">
                  <img src={skill.img} alt={skill.name} />
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="certification">
          <RSlider />
        </div>
      </div>
    </>
  );
};

export default Skills;
