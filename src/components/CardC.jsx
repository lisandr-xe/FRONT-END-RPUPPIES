import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardC = ({ cardID, image, title, body, buttonText }) => {
  return (
    <>
      <Card
        className={
          cardID === "testimonials" ? "card--wrapper__testimonials" : undefined
        }
      >
        <Card.Body
          className={
            cardID === "testimonials"
              ? "card--body-wrapper__testimonials"
              : undefined
          }
        >
          <Container
            className={
              cardID === "testimonials" ? "card--img__testimonials" : undefined
            }
          >
            <Card.Img src={image} />
          </Container>
          <Card.Title
            className={
              cardID === "testimonials"
                ? "card--title__testimonials"
                : undefined
            }
          >
            {title}
          </Card.Title>
          <Container>
            <Card.Text
              className={
                cardID === "testimonials"
                  ? "card--body__testimonials"
                  : undefined
              }
            >
              {cardID === "testimonials" && (
                <div className="testimonial--quotes">
                  <i className="bi bi-quote"></i>
                </div>
              )}
              {body}
            </Card.Text>
            {cardID === "testimonials" && (
              <div className="chat--wrapper">
                <div className="testimonial-triangle"></div>
              </div>
            )}
          </Container>
          {cardID !== "testimonials" && <Button>{buttonText}</Button>}
        </Card.Body>
      </Card>
    </>
  );
};

export default CardC;
