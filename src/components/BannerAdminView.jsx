import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import '../index.css';



const BannerAdminView = () => {
    

  return (
    <>
    <div className='container d-flex w-100 my-5'>
      <div className='container d-flex flex-column w-25'>
        <a className='btnPersonalizedadm4 py-1 my-1' href="/administrador/services">Servicios</a>
        <a className='btnPersonalizedadm4 py-1 my-1' href="/administrador/pets">Mascotas</a>
        <a className='btnPersonalizedadm4 py-1 my-1' href="/administrador/turnos">Turnos</a>
      </div>
      <div className='container d-flex justify-content-center align-items-center flex-column mx-100'>
        <h3 className='conatainer'>Bienvenido!</h3>
        <h3 className='conatainer'>{sessionStorage.nombre}nombre del admin</h3>
        <h3 className='conatainer'>Rolling Puppies</h3>
      </div>
      <div className='container d-flex w-25 align-items-stretch'>
        <>{location.pathname === '/administrador/turnos' && (
        <a className='container d-flex align-items-center justify-content-center btnPersonalizedadm4'>Agregar Turno</a>
        )}
        </>
        <>{location.pathname === '/administrador/services' && (
        <a className='container d-flex align-items-center justify-content-center btnPersonalizedadm4'>Agregar Servicio</a>
        )}
        </>
      </div>

    </div>
    </>
  )
}

export default BannerAdminView
