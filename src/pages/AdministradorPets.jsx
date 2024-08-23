import React from 'react'
import PetTable from '../components/PetTable'


const AdministradorPets = () => {
   
    const pets = [
        { id: 1, nombre: 'Max', especie: 'Perro', raza: 'Labrador', edad: 5, dueno: 'Javier Garcia'},
        { id: 2, nombre: 'Nemo', especie: 'Pez', raza: 'Pez payaso', edad: 2, dueno: 'Jorge Lopez'}
    ];

    return (
        <div className="container text-align">
         <h1 className="my-4">Tabla de Mascotas</h1>
            <PetTable pets={pets} />
        </div>
    );
};

export default AdministradorPets
