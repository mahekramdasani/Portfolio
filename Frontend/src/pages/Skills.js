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
        <h2 className="text-center">Skills</h2>

        <Row>
          {skillsArray.map((skill, index) => (
            <Col sm={6} md={4} lg={3} xs={12} key={index} className="outer-div mb-3">
              <div className="content">
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
