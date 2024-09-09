import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal, Form, Container, Row, Col, Image } from 'react-bootstrap'; 
import $ from 'jquery';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import 'datatables.net-responsive';
import '../index.css';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TableTurnos = ({ turnos }) => {
    const tablaturnos = useRef();
    
    useEffect(() => {
        const table = $(tablaturnos.current).DataTable({
            responsive: true,
            autoWidth: false,
            paging: true,
            rowReorder: {
                selector: 'td:nth-child(2)'
            }
        });
        return () => {
            if ($.fn.dataTable.isDataTable(tablaturnos.current)) {
                table.destroy();
            }
        };
    }, []);
    
    const [show, setShow] = useState(null);

    const handleClose = () => setShow(null);
    const handleShow = (id) => setShow(id); 

    const [startDate, setStartDate] = useState(new Date());


    const isWeekday = (date) => {
        const day = date.getDay(); // 0 es domingo, 6 es sábado
        return day !== 0 && day !== 6; // Retorna true solo si no es sábado ni domingo
      };
    // Función para obtener la fecha de hoy en formato AAAA-MM-DD
    const obtenerFechaHoy = () => {
        const hoy = new Date();
        return hoy.toISOString().split('T')[0]; // Retorna la fecha en formato AAAA-MM-DD
    };
    // Función para obtener la fecha máxima (2 meses hacia adelante)
    const obtenerFechaMaxima = () => {
        const hoy = new Date();
        hoy.setMonth(hoy.getMonth() + 2); // Avanza 2 meses
        return hoy.toISOString().split('T')[0]; // Retorna la fecha en formato AAAA-MM-DD
    };
      
        const handleSearch = (e) => {
          e.preventDefault();
          onSearch(searchQuery); // Función para manejar la búsqueda
        };

   


    return (
        <div className='table-responsive'>
            <table className='display nowrap fontPage' ref={tablaturnos}>
                <thead>
                    <tr>
                        <th className='text-center'>Fecha</th>
                        <th className='text-center'>Hora</th>
                        <th className='text-center'>Mascota</th>
                        <th className='text-center'>Veterinario</th>
                        <th className='text-center'>Detalles</th>
                        <th className='text-center'>Editar Turno</th>
                        <th className='text-center'>Eliminar Turno</th>
                    </tr>
                </thead>
                <tbody>
                    {turnos.map((turno, id) => (
                        <tr key={id}>
                            <td className='text-center'>{turno.fecha}</td>
                            <td className='text-center'>{turno.hora}</td>
                            <td className='text-center'>{turno.mascota}</td>
                            <td className='text-center'>{turno.veterinario}</td>
                            <td className='text-center'>{turno.detalles}</td>
                            <td className='text-center'>
                                <Button className='btnPersonalized3' onClick={() => handleShow(id)}>Editar</Button>
                            </td>
                            <td className='text-center'>
                                <Button className='btnPersonalized1'>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {turnos.map((turno, id) => (
                <Modal key={id} show={show === id} onHide={handleClose}  onSubmit={handleSearch}>
                    <Modal.Header closeButton className="bgColorPrincipal text-white">
                        <Modal.Title>Editar/Agregar Turno</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bgColorFondo">
                        <Form>
                            <Container>
                                <Row className="align-items-center">
                                    <Col xs={12} md={6}>
                                        <Form.Group className="mb-3" controlId="fechaTurno">
                                            <Form.Label>Fecha</Form.Label>
                                            <DatePicker selected={startDate} 
                                            onChange={(fecha) => setStartDate(fecha)} 
                                            dateFormat={'yyyy/MM/dd'} 
                                            minDate={obtenerFechaHoy()} 
                                            maxDate={obtenerFechaMaxima()}
                                            filterDate={isWeekday }
                                            />
                                            
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group className="mb-3" controlId="horaTurno">
                                            <Form.Label>Hora</Form.Label>
                                            <Form.Select type="time" aria-label="Time" defaultValue={turno.hora} min={'10:00'} max={'18:00'} required>
                                            <option key={1} value={'10:00'}>10:00</option>
                                            <option key={2} value={'10:30'}>10:30</option>
                                            <option key={3} value={'11:00'}>11:00</option>
                                            <option key={4} value={'11:30'}>11:30</option>
                                            <option key={5} value={'12:00'}>12:00</option>
                                            <option key={6} value={'12:30'}>12:30</option>
                                            <option key={7} value={'13:00'}>13:00</option>
                                            <option key={8} value={'13:30'}>13:30</option>
                                            <option key={9} value={'14:00'}>14:00</option>
                                            <option key={10} value={'14:30'}>14:30</option>
                                            <option key={11} value={'15:00'}>15:00</option>
                                            <option key={12} value={'15:30'}>15:30</option>
                                            <option key={13} value={'16:00'}>16:00</option>
                                            <option key={14} value={'16:30'}>16:30</option>
                                            <option key={15} value={'17:00'}>17:00</option>
                                            <option key={16} value={'17:30'}>17:30</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group className="mb-3" controlId="veterinarioTurno">
                                            <Form.Label>Veterinario</Form.Label>
                                            <Form.Select type='search' placeholder="Seleccionar Veterinario" required>
                                            <option key={1} value={'Jose Hernandez'}>Jose Hernandez</option>
                                            <option key={2} value={'Ricardo Lopez'}>Ricardo Lopez</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Form.Group className="mb-3" controlId="mascotaTurno">
                                            <Form.Label>Elija a su Mascota</Form.Label>
                                            <Form.Control type='search' placeholder="Seleccionar Mascota" defaultValue={turno.mascota} required>

                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className="d-flex justify-content-center gap-3 mb-3">
                                        <div className="img-container__modalTurnos">
                                            <Image src="https://static.vecteezy.com/system/resources/previews/005/520/216/non_2x/cartoon-drawing-of-a-veterinarian-vector.jpg"></Image>
                                        </div>
                                        <div className="img-container__modalTurnos">
                                            <Image src="https://img.freepik.com/vector-premium/diseno-logotipo-dibujos-animados-mascota-perro-lindo-estilo-diseno-plano_203040-109.jpg"></Image>
                                        </div>
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
