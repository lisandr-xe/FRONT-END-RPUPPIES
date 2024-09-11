import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";
import $ from "jquery";
import DataTable from "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";
import "datatables.net-responsive";
import "../index.css";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clienteAxios from "../helpers/clientAxios";

const TableTurnos = ({ turnos, setTurnos }) => {
  const tablaturnos = useRef();

  useEffect(() => {
    const table = $(tablaturnos.current).DataTable({
      responsive: true,
      autoWidth: false,
      paging: true,
      rowReorder: {
        selector: "td:nth-child(2)",
      },
    });
    return () => {
      if ($.fn.dataTable.isDataTable(tablaturnos.current)) {
        table.destroy();
      }
    };
  }, []);

  const [show, setShow] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTurno, setSelectedTurno] = useState({
    fecha: "",
    hora: "",
    mascota: "",
    veterinario: "",
  });

  const handleClose = () => setShow(null);
  const handleShow = (id) => {
    setShow(id);
    setSelectedTurno(turnos[id]); // Establece el turno seleccionado al abrir el modal
  };

  const isWeekday = (date) => {
    const day = date.getDay(); // 0 es domingo, 6 es sábado
    return day !== 0 && day !== 6; // Retorna true solo si no es sábado ni domingo
  };

  const obtenerFechaHoy = () => {
    const hoy = new Date();
    return hoy.toISOString().split("T")[0]; // Retorna la fecha en formato AAAA-MM-DD
  };

  const obtenerFechaMaxima = () => {
    const hoy = new Date();
    hoy.setMonth(hoy.getMonth() + 2); // Avanza 2 meses
    return hoy.toISOString().split("T")[0]; // Retorna la fecha en formato AAAA-MM-DD
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar los datos a la API (por ejemplo con clienteAxios)
      const response = await clienteAxios.put(
        `/turnos/${selectedTurno._id}`,
        selectedTurno
      );
      console.log(selectedTurno);
      if (response.status === 200) {
        Swal.fire({
          title: "Estas por Cambiar el Turno!",
          text: "Continuar?",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, guardar turno!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Turno guardado!",
              text: "el turno se ha guardado con exito",
              icon: "success",
            });
          }
        });
        handleClose(); // Cerrar el modal
      }
    } catch (error) {
      console.error("Error al actualizar el turno:", error);
      Swal.fire("Error", "Hubo un error al actualizar el turno", "error");
    }
  };

  // Función para manejar el cambio en los inputs del formulario
  const handleInputChange = (e) => {
    setSelectedTurno({
      ...selectedTurno,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    function formatDateToYYYYMMDD(date) {
      const year = date.getFullYear(); // Obtiene el año completo (YYYY)
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Obtiene el mes y agrega 1 porque getMonth() devuelve de 0 a 11. Luego agrega 0 delante si es necesario
      const day = String(date.getDate()).padStart(2, "0"); // Obtiene el día y agrega 0 delante si es necesario

      return `${year}-${month}-${day}`; // Retorna el formato YYYY-MM-DD
    }
    const formmateddate = formatDateToYYYYMMDD(date);
    setStartDate(date);
    setSelectedTurno({
      ...selectedTurno,
      fecha: formmateddate,
    });
  };

  // Función para manejar la eliminación del turno
  const handleDelete = async (id) => {
    const turnoSeleccionado = turnos[id];

    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await clienteAxios.delete(
            `/turnos/${turnoSeleccionado._id}`
          );
          if (response.status === 200) {
            Swal.fire("Eliminado!", "El turno ha sido eliminado.", "success");
            // Actualizar la lista de turnos
            setTurnos((prevTurnos) =>
              prevTurnos.filter((_, index) => index !== id)
            );
          }
        } catch (error) {
          console.error("Error al eliminar el turno:", error);
          Swal.fire("Error", "Hubo un error al eliminar el turno", "error");
        }
      }
    });
  };

  const [turnosAsignados, setTurnosAsignados] = useState({});

  useEffect(() => {
    const turnosAsignadosTemp = {}; // Inicializar un objeto temporal
  
    // Recorre los turnos para crear la estructura { fecha: { hora: [veterinario1, veterinario2] } }
    turnos.forEach((turno) => {
      const { fecha, hora, veterinario } = turno;
  
      // Si no existe la fecha en el objeto, la inicializamos
      if (!turnosAsignadosTemp[fecha]) {
        turnosAsignadosTemp[fecha] = {};
      }
  
      // Si no existe la hora en esa fecha, la inicializamos
      if (!turnosAsignadosTemp[fecha][hora]) {
        turnosAsignadosTemp[fecha][hora] = [];
      }
  
      // Almacena el veterinario asignado a esa fecha y hora
      turnosAsignadosTemp[fecha][hora].push(veterinario);
    });
  
    setTurnosAsignados(turnosAsignadosTemp); // Actualiza el estado con los turnos asignados
  }, [turnos]); 

const horarios = ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30',]

const obtenerHorariosDisponibles = () => {
    // Asegúrate de que `selectedTurno.fecha` y `selectedTurno.veterinario` tengan valores válidos
    if (!selectedTurno.fecha || !selectedTurno.veterinario) {
      return horarios; // Si no hay fecha o veterinario seleccionado, devuelve todos los horarios
    }
  
    // Comprobar si hay turnos asignados para la fecha seleccionada
    const turnosParaFecha = turnosAsignados[selectedTurno.fecha] || {};
  
    // Filtrar los horarios que no están ocupados por el veterinario seleccionado
    return horarios.filter((hora) => {
      // Asegúrate de que `turnosParaFecha[hora]` sea un array
      const horariosOcupados = turnosParaFecha[hora] || [];
  
      // Verificar si `horariosOcupados` incluye al veterinario seleccionado
      return !horariosOcupados.includes(selectedTurno.veterinario);
    });
  };

  return (
    <div className="table-responsive">
      <table className="display nowrap fontPage" ref={tablaturnos}>
        <thead>
          <tr>
            <th className="text-center">Fecha</th>
            <th className="text-center">Hora</th>
            <th className="text-center">Mascota</th>
            <th className="text-center">Veterinario</th>
            <th className="text-center">Detalles</th>
            <th className="text-center">Editar Turno</th>
            <th className="text-center">Eliminar Turno</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno, id) => (
            <tr key={id}>
              <td className="text-center">{turno.fecha}</td>
              <td className="text-center">{turno.hora}</td>
              <td className="text-center">{turno.nombreMascota}</td>
              <td className="text-center">{turno.veterinario}</td>
              <td className="text-center">{turno.detalles}</td>
              <td className="text-center">
                <Button
                  className="btnPersonalized3"
                  onClick={() => handleShow(id)}
                >
                  Editar
                </Button>
              </td>
              <td className="text-center">
                <Button
                  className="btnPersonalized1"
                  onClick={() => handleDelete(id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {turnos.map((turno, id) => (
        <Modal key={id} show={show === id} onHide={handleClose}>
          <Modal.Header closeButton className="bgColorPrincipal text-white">
            <Modal.Title>Editar Turno</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bgColorFondo">
            <Form onSubmit={handleSubmit}>
              <Container>
                <Row className="align-items-center">
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="fechaTurno">
                      <Form.Label>Fecha</Form.Label>
                      <DatePicker
                        name="fecha"
                        selected={startDate}
                        dateFormat={"yyyy/MM/dd"}
                        onChange={handleDateChange}
                        minDate={obtenerFechaHoy()}
                        maxDate={obtenerFechaMaxima()}
                        filterDate={isWeekday}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="horaTurno">
                      <Form.Label>Hora</Form.Label>
                      <Form.Select
                        type="time"
                        aria-label="Time"
                        value={selectedTurno.hora || ""}
                        onChange={handleInputChange}
                        name="hora"
                        required
                      >
                        {obtenerHorariosDisponibles().map((hora, index) => (
                          <option key={index} value={hora}>
                            {hora}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="veterinarioTurno">
                      <Form.Label>Veterinario</Form.Label>
                      <Form.Select
                        value={selectedTurno.veterinario || ""}
                        onChange={handleInputChange}
                        name="veterinario"
                        required
                      >
                        <option key={1} value={"Jose Hernandez"}>
                          Jose Hernandez
                        </option>
                        <option key={2} value={"Ricardo Lopez"}>
                          Ricardo Lopez
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="mascotaTurno">
                      <Form.Label>Elija a su Mascota</Form.Label>
                      <Form.Control
                        type="text"
                        value={selectedTurno.nombreMascota || ""}
                        onChange={handleInputChange}
                        name="mascota"
                        required
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12} className="mt-3">
                    <div className="d-flex justify-content-center gap-4">
                      <Button variant="primary" type="submit">
                        Guardar Turno
                      </Button>
                      <Button variant="danger" onClick={handleClose}>
                        Cancelar
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Modal.Body>
        </Modal>
      ))}
    </div>
  );
};

export default TableTurnos;
