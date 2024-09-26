import React from "react";
import { Card, Button,Row,Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

const MyCard = ({ imageUrl, name,tech, description, link }) => {
  const openLinkInNewTab = () => {
    window.open(link, "_blank");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>
          <Row>
            <Col lg={3}>{name}</Col>
            <Col lg={6}>{tech}</Col>
            <Col lg={3}><a onClick={openLinkInNewTab}><AiFillGithub className="icon" /></a></Col>
          </Row>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
