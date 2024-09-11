import TableTurnos from "../components/TableTurnos";
import BannerAdminView from "../components/BannerAdminView";
import React, { useState, useEffect } from "react";
import clienteAxios from "../helpers/clientAxios";

const AdministradorTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [mascotas, setMascotas] = useState([]);
  const [turnosFinales, setTurnosFinales] = useState([]);

  const traerTurnos = async () => {
    try {
      const turnosResponse = await clienteAxios.get("/turnos");
      const mascotasResponse = await clienteAxios.get(`/mascotas`);
      
      const turnosData = turnosResponse.data;
      const mascotasData = mascotasResponse.data;
      

            function formatDateToYYYYMMDD(date) {
   
              const fecha = new Date (date)
              const year = fecha.getFullYear();
              const month = String(fecha.getMonth() + 1).padStart(2, '0');
              const day = String(fecha.getDate()).padStart(2, '0');
              return `${year}-${month}-${day}`;
            }

              

      // Crear el mapa de mascotas basado en los datos obtenidos
      const mapaMascotas = crearMapaMascotas(mascotasData);

      // Reemplazar los valores en los turnos
      const turnosFinales = agregarPropiedadNombreMascota(turnosData, mapaMascotas);

      setTurnos(turnosData);
      setMascotas(mascotasData);
      setTurnosFinales(turnosFinales);
    } catch (error) {
      console.error("Error al traer los turnos:", error);
    }
  };

  // Crear un mapa con los nombres de las mascotas
  const crearMapaMascotas = (mascotas) => {
    return new Map(mascotas.map((mascota) => [mascota._id, mascota.nombre]));
  };

  // Agregar la propiedad 'nombreMascota' a cada turno
  const agregarPropiedadNombreMascota = (turnos, mapaMascotas) => {
    return turnos.map((turno) => {
      const nombreMascota = mapaMascotas.get(turno.mascota); // obtener el nombre de la mascota por ID
      return {
        ...turno,
        nombreMascota: nombreMascota || "Mascota fuera de la DB" // agregar la nueva propiedad sin eliminar la original
      };
    });
  };

  useEffect(() => {
    traerTurnos();
  }, []);

  return (
    <>
      <div>
        <BannerAdminView turnos={turnosFinales} setTurnos={setTurnosFinales}/>
      </div>
      <div className="container text-align fontPage">
        <h1 className="text-center my-4">Tabla de Turnos</h1>
        <TableTurnos turnos={turnosFinales} setTurnos={setTurnosFinales} />
      </div>
    </>
  );
};

export default AdministradorTurnos;
