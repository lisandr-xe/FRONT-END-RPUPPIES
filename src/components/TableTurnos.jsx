import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';

const TableTurnos = ({turnos}) => {
    const tablaturnos = useRef();
    
    useEffect(() => {
        $(tablaturnos.current).DataTable();
    }, []);


return (
   <Table striped bordered hover ref={tablaturnos} >
        <thead >
            <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Mascota</th>
                <th>Veterinario</th>
                <th>Detalles</th>
                <th>Editar Turno</th>
            </tr>
        </thead>
        <tbody>
            {turnos.map((turno, id) => (
                <tr key={id}>
                    <td>{turno.fecha}</td>
                    <td>{turno.hora}</td>
                    <td>{turno.mascota}</td>
                    <td>{turno.veterinario}</td>
                    <td>{turno.detalles}</td>
                    <td><Button>Editar</Button></td>
                </tr>
            ))}
        </tbody>
    </Table>
);
};

export default TableTurnos;