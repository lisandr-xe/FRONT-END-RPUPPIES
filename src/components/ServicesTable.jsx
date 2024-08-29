import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import '../index.css';

const ServicesTable = ({ services }) => {
    const [servicesState, setServicesState] = useState(services); // Inicializa el estado con los servicios pasados como prop
    const tablaservicios = useRef();

    const cambiarPropiedad = (id, propiedad, valor) => {
        const updatedServices = servicesState.map(service =>
            service.id === id ? { ...service, [propiedad]: valor } : service
        );
        setServicesState(updatedServices);
    };

    const handleToggleActivo = (id) => {
        const servicio = servicesState.find(service => service.id === id);
        if (servicio) {
            cambiarPropiedad(id, 'activo', !servicio.activo);
        }
    };

    useEffect(() => {
        $(tablaservicios.current).DataTable();
    }, []);

    return (
        <table striped bordered hover ref={tablaservicios} >
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
                            <Button onClick={() => handleToggleActivo(service.id)}>
                                {service.activo ? 'Activo' : 'Inactivo'}
                            </Button>
                        </td>
                        <td><Button variant='danger'>Eliminar</Button></td>
                        <td><Button>Editar</Button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ServicesTable;