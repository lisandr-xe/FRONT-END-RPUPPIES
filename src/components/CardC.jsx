import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/CardC.css";

const CardC = ({ image, title, bodyContent, buttonContent }) => {
  useEffect(() => {
    console.log(image);
  }, []);

  return (
    <>
      <Card className="border-0 bg-transparent">
        <Container className="d-flex justify-content-center align-items-center">
          <div className="p-3 circular--image">
            <Card.Img src={image} />
          </div>
        </Container>
        <Card.Body>
          <Card.Title className="fs-3 text-center">{title}</Card.Title>
          <Card.Text className="text-center mb-4">{bodyContent}</Card.Text>
          <Container className="d-flex justify-content-center">
            <button className="btn-1">{buttonContent}</button>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardC;
