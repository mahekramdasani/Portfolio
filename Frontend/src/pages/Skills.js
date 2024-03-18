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
        <h3 className="text-center">Skills</h3>
      {skillsArray.map((skill) => (
        <Col md={2} key={skill.name} className="d-flex justify-content-center align-items-center">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip(skill.name)}
          >
            <img src={skill.img} className="icon" alt={skill.name}/>
          </OverlayTrigger>
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
