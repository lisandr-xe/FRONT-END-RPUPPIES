import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardC = ({ image, title, bodyContent, buttonContent }) => {
  useEffect(() => {
    console.log(image);
  }, []);

  return (
    <>
      <Card
        className="p-2 d-flex flex-column justify-content-center align-items-center mx-2 text-montserrat border-0"
        style={{ height: "550px" }}
      >
        <Container
          style={{ height: "40%" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            className="rounded-circle h-100 w-75"
          />
        </Container>
        <Container style={{ height: "40%" }}>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title className="fs-2 mb-4">{title}</Card.Title>
            <Card.Text style={{ fontSize: "1rem" }} className="text-center">
              {bodyContent}
            </Card.Text>
          </Card.Body>
        </Container>
        <Container
          style={{ height: "20%" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Button variant="primary" className="w-75 fs-4">
            {buttonContent}
          </Button>
        </Container>
      </Card>
    </>
  );
};

export default CardC;
