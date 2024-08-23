import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import $ from 'jquery';


const ServicesTable = ({ services }) => {
    const [activo, setActivo] = useState(false);
    const tablaservicios = useRef();

    const activarDesactivar = () => {
        setActivo(!activo);
    };

    useEffect(() => {
        $(tablaservicios.current).DataTable();
    }, []);

    return (
        <Table striped bordered hover ref={tablaservicios} className='text-center'>
            <thead>
                <tr>
                    <th>Servicio</th>
                    <th>Descripción</th>
                    <th>Costo</th>
                    <th>Estado</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {services.map((services, id) => (
                    <tr key={id}>
                        <td>{services.servicio}</td>
                        <td>{services.descripcion}</td>
                        <td>{services.costo}</td>
                        <td>
                        <Button onClick={activarDesactivar}>
                                {activo ? 'Activo' : 'Inactivo'}
                            </Button>
                        </td>
                        <td><Button variant='danger'>Eliminar</Button></td>
                        <td><Button>Editar</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ServicesTable;
