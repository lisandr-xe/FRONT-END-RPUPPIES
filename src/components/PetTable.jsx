import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button'
import { Table } from 'react-bootstrap';
import $ from 'jquery';
import DataTable from 'datatables.net-react';

const PetTable = ({pets}) => {
    const tablapets = useRef();

    useEffect(() => {
        $(tablapets.current).DataTable();
    }, []);

    return (
       <Table  ref={tablapets}>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Especie</th>
                    <th>Raza</th>
                    <th>Edad</th>
                    <th>Dueño</th>
                    <th>Historial Clinica</th>
                </tr>
            </thead>
            <tbody>
                {pets.map((pet, id) => (
                    <tr key={id}>
                        <td>{pet.nombre}</td>
                        <td>{pet.especie}</td>
                        <td>{pet.raza}</td>
                        <td>{pet.edad}</td>
                        <td><Button>Dueño</Button></td>
                        <td><Button>Ver Historia Clinica</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default PetTable;