import React from "react";
import { Card, Button } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

const MyCard = ({ imageUrl, name, description, link }) => {
  const openLinkInNewTab = () => {
    window.open(link, "_blank");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="text-center">
          <Button onClick={openLinkInNewTab}>
            View on Github<AiFillGithub className="icon" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
