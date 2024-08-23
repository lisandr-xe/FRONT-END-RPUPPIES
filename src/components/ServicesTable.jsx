import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import $ from 'jquery';

const ServicesTable = ({ services }) => {
    const [servicesState, setServicesState] = useState(services); // Inicializa el estado con los servicios pasados como prop
    const tablaservicios = useRef();

    const cambiarPropiedad = (id, propiedad, valor) => {
        const updatedServices = servicesState.map(service =>
            service.id === id ? { ...service, [propiedad]: valor } : service
        );
        setServicesState(updatedServices);
    };

    const funcionActivoInactivo = (id) => {
        const servicio = servicesState.find(service => service.id === id);
        if (servicio) {
            cambiarPropiedad(id, 'activo', !servicio.activo);
        }
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
                {servicesState.map((service, id) => (
                    <tr key={id}>
                        <td>{service.servicio}</td>
                        <td>{service.descripcion}</td>
                        <td>{service.costo}</td>
                        <td>
                            <Button onClick={() => funcionActivoInactivo(service.id)}>
                                {service.activo ? 'Activo' : 'Inactivo'}
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