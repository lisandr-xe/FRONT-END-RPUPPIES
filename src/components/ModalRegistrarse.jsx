import styleGeneral from "../../src/index.module.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ModalRegistrarse({ show, handleClose }) {
  const navigate = useNavigate();
  const client = axios.create({
    baseURL: "http://localhost:3001/api/usuarios",
  });

  const registerSchema = z.object({
    nombre: z
      .string()
      .min(1, { message: "Campo Requerido" })
      .max(25, "Máximo permitido: 25 caracteres"),
    apellido: z
      .string()
      .min(1, { message: "Campo Requerido" })
      .max(25, "Máximo permitido: 25 caracteres"),
    email: z
      .string()
      .email({ message: "Formato de email incorrecto" })
      .min(1, { message: "Campo Requerido" }),
    telefono: z
      .string()
      .min(7, { message: "Mínimo requerido: 7 dígitos" })
      .max(10, { message: "Máximo permitido: 10 dígitos" }),
    contrasenia: z
      .string()
      .min(8, { message: "La contraseña debe contener al menos 8 caracteres" })
      .max(25, { message: "Máximo permitido: 25 caracteres" }),
    repetirContrasenia: z.string(),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (e) => {
    if (e.contrasenia === e.repetirContrasenia) {
      const { repetirContrasenia, ...userData } = e;
      const response = await client.post("/", userData);
      if (response.status === 201) {
        Swal.fire({
          title: "Usuario creado con exito",
          text: "Te hemos enviado un mail de bienvenida",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else {
        Swal.fire({
          title: "Algo salió mal",
          text: `${response.data}`,
          icon: "error",
        });
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header
        closeButton
        closeVariant="white"
        className={styleGeneral.bgColorPrincipal}
      >
        <Modal.Title className="text-white">Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styleGeneral.bgColorFondo}>
        <Form id="form-registro" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex gap-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nombreRegistro" className="fw-bolder">
                Nombre
              </Form.Label>
              <Form.Control
                type="text"
                id="nombreRegistro"
                placeholder="Ingrese su nombre"
                minLength="3"
                maxLength="25"
                name="nombre"
                required
                className="bgInput"
                {...register("nombre")}
              />
              {errors.nombre && <div>{errors.nombre.message}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="apellidoRegistro" className="fw-bolder">
                Apellido
              </Form.Label>
              <Form.Control
                type="text"
                id="apellidoRegistro"
                placeholder="Ingrese su apellido"
                maxLength="25"
                name="apellido"
                required
                className="bgInput"
                {...register("apellido")}
              />
              {errors.apellido && <div>{errors.apellido.message}</div>}
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="emailRegistro" className="fw-bolder">
              Email
            </Form.Label>
            <Form.Control
              type="email"
              id="emailRegistro"
              placeholder="Ingrese su email"
              maxLength="20"
              name="email"
              required
              className="bgInput"
              {...register("email")}
            />
            {errors.email && <div>{errors.email.message}</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="telefonoRegistro" className="fw-bolder">
              Teléfono
            </Form.Label>
            <Form.Control
              type="tel"
              id="telefonoRegistro"
              placeholder="Ingresa tu teléfono"
              maxLength="10"
              name="Teléfono"
              required
              className="bgInput"
              {...register("telefono")}
            />
            {errors.telefono && <div>{errors.telefono.message}</div>}
          </Form.Group>

          <div className="d-flex gap-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="passwordRegistro" className="fw-bolder">
                Contraseña
              </Form.Label>
              <Form.Control
                type="password"
                id="passwordRegistro"
                placeholder="Ingrese su contraseña"
                maxLength="20"
                minLength="8"
                name="contrasenia"
                required
                className="bgInput"
                {...register("contrasenia")}
              />
              {errors.contrasenia && <div>{errors.contrasenia.message}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                htmlFor="passwordRegistroRepetir"
                className="fw-bolder"
              >
                Repetir contraseña
              </Form.Label>
              <Form.Control
                type="password"
                id="passwordRegistroRepetir"
                placeholder="Repita su contraseña"
                maxLength="20"
                minLength="8"
                name="repetirContrasenia"
                required
                className="bgInput"
                {...register("repetirContrasenia")}
              />
              {errors.repetirContrasenia && (
                <div>{errors.repetirContrasenia.message}</div>
              )}
            </Form.Group>
          </div>

          <div className="d-flex align-items-center justify-content-center mt-3">
            <Button
              type="submit"
              id="botonRegistrarse"
              className="btnPersonalized2 mx-1 fw-bold"
              aria-label="Registrarse"
            >
              Registrarse
            </Button>
            <Button
              type="reset"
              className="styleGeneral.btnPersonalized1 mx-1 fw-bold"
              aria-label="Cancelar"
              onClick={handleClose}
            >
              Cancelar
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalRegistrarse;
