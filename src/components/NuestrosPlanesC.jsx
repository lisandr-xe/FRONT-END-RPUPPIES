import { useEffect, useState } from "react";
import CardC from "./CardC";
import { Col, Container, Row } from "react-bootstrap";

const NuestrosPlanesC = () => {
  const [listaPlanes, setListaPlanes] = useState([]);
  const planesDisponibles = [
    {
      image:
        "https://images.ctfassets.net/sfnkq8lmu5d7/4Ma58uke8SXDQLWYefWiIt/3f1945422ea07ea6520c7aae39180101/2021-11-24_Singleton_Puppy_Syndrome_One_Puppy_Litter.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg",
      title: "Primeros Pasos",
      bodyContent:
        "Plan para mascotas de 0 a 5 años que incluye chequeos, vacunación, desparasitación, asesoría nutricional y seguimiento del crecimiento para un desarrollo saludable.",
      buttonContent: "Ver más",
    },
    {
      image:
        "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
      title: "Madurando",
      bodyContent:
        "Plan para mascotas de 5 a 10 años que ofrece chequeos regulares, control de peso, salud dental, prevención de enfermedades y asesoría nutricional para mantener su vitalidad en la adultez.",
      buttonContent: "Ver más",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWVTPWrRAOPtUXFG3Lm7_Yytjr2DHyXdERsw&s",
      title: "Adultos",
      bodyContent:
        "Plan para mascotas mayores de 10 años que incluye chequeos geriátricos, manejo de dolor, control de enfermedades crónicas, cuidados dentales y asesoría en nutrición para una vida saludable y prolongada.",
      buttonContent: "Ver más",
    },
  ];

  //############## PARA PROBAR - CAMBIAR CUANDO SE AGREGUE LA LÓGICA ############################
  useEffect(() => {
    setListaPlanes(planesDisponibles);
    console.log(listaPlanes);
  }, []);

  //#################################################################################################

  return (
    <>
      <h2 className="text-montserrat fs-1 text-center mt-3 mb-5">
        Nuestros Planes
      </h2>
      <Container className="my-3">
        <Row className="d-flex justify-content-center align-items-center">
          {listaPlanes.map((plan) => (
            <Col xs={12} md={6} lg={4}>
              <CardC
                key={plan.title}
                image={plan.image}
                title={plan.title}
                bodyContent={plan.bodyContent}
                buttonContent={plan.buttonContent}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default NuestrosPlanesC;
