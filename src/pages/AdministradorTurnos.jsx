import TableTurnos from '../components/TableTurnos';
import BannerAdminView from '../components/BannerAdminView';
import React, {useState, useEffect}from 'react';
import clienteAxios from '../helpers/clientAxios';




const AdministradorTurnos = () => {
    
  const [turnos, setTurnos] = useState([]);
        
  const traerTurnos = async () => {
      try {
          const response = await clienteAxios.get('/turnos');
          console.log(response.data); // Opcional: para verificar la respuesta
          setTurnos(response.data);
      } catch (error) {
          console.error('Error al traer los turnos:', error);
      }
  };

  useEffect(() => {
      traerTurnos();
  }, []);

  
      return (
        <>
        <div>
        <BannerAdminView/>
        </div>
        <div className="container text-align fontPage">
        <h1 className="text-center my-4">Tabla de Turnos</h1>
        <TableTurnos turnos={turnos} />
        </div>
        </>
      );
    };
    
    export default AdministradorTurnos
