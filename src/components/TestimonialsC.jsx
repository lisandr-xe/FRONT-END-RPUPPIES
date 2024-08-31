import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "./SwiperC";

import CardC from "./CardC";
import "../css/TestimonialsC.css";

const TestimonialsC = () => {
  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = () => {
    setTestimonials([
      {
        nombre: "María López",
        comentario: "Excelente atención. Mi gatito recibió el mejor cuidado.",
      },
      {
        nombre: "Juan Pérez",
        comentario:
          "Los veterinarios son muy amables y conocedores. Recomiendo esta clínica.",
      },
      {
        nombre: "Carolina Rodríguez",
        comentario:
          "Mi perro estaba enfermo y lo trataron con cariño y profesionalismo.",
      },
      {
        nombre: "Pedro Fernández",
        comentario:
          "La clínica está muy bien equipada. Mi loro recibió un diagnóstico preciso.",
      },
      {
        nombre: "Laura Martínez",
        comentario: "Gracias por salvar a mi conejito. Son los mejores.",
      },
      {
        nombre: "Diego Sánchez",
        comentario:
          "El equipo de la veterinaria es comprometido y dedicado. Los felicito.",
      },
      {
        nombre: "Valentina Gómez",
        comentario:
          "Siempre encuentro respuestas a mis dudas sobre cuidado animal.",
      },
      {
        nombre: "Andrés Torres",
        comentario: "Mi perrita se siente como en casa cuando viene aquí.",
      },
      {
        nombre: "Isabel Castro",
        comentario: "La veterinaria de confianza para toda mi familia peluda.",
      },
      {
        nombre: "Ricardo Mendoza",
        comentario: "No cambiaría esta clínica por nada. ¡Gracias por todo!",
      },
    ]);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <>
      <h2 className="testimonials--title">Clientes felices</h2>
      <h3 className="testimonials--subtitle">
        Nuestros clientes nos devuelven todo el cariño y amor que le brindamos a
        sus mascotas
      </h3>
      <Container className="testimonials--container mb-5">
        <Swiper pagination={true}>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.nombre}>
              <CardC
                cardID="testimonials"
                image="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
                title={testimonial.nombre}
                body={testimonial.comentario}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default TestimonialsC;
