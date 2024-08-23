import React from 'react'
import PetTable from '../components/PetTable'
import DataTable from 'datatables.net-react';

const AdministradorPets = () => {
   
    const pets = [
        { id: 1, nombre: 'Max', especie: 'Perro', raza: 'Labrador', edad: 5, dueno: 'Juan Pérez' },
        { id: 2, nombre: 'Nemo', especie: 'Pez', raza: 'Pez payaso', edad: 2, dueno: 'María Fernández' },
        { id: 3, nombre: 'Lola', especie: 'Perro', raza: 'Beagle', edad: 4, dueno: 'Carlos López' },
        { id: 4, nombre: 'Miau', especie: 'Gato', raza: 'Siamés', edad: 3, dueno: 'Ana Gómez' },
    ];

    return (
        <div className="container text-align">
         <h1 className="my-4">Tabla de Mascotas</h1>
            <PetTable pets={pets} />
        </div>
    );
}

export default AdministradorPets
