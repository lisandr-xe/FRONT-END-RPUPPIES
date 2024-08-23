import React, { useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import $ from 'jquery';
import DataTable from 'datatables.net-react';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
    
    const PetTable = ({ pets }) => {
        const tablapets = useRef();
    
        useEffect(() => {
            $(tablapets.current).DataTable();
        }, []);


    return (
       <Table className='text-center' striped bordered hover ref={tablapets} >
            <thead >
                <tr>
                    <th>Nombre</th>
                    <th>Especie</th>
                    <th>Raza</th>
                    <th>Edad</th>
                    <th>Dueño</th>
                    <th>Historia Clinica</th>
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