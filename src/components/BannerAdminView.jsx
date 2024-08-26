import React from 'react'
import { Button } from 'react-bootstrap'



const BannerAdminView = () => {
    


  return (
    <>
    <div className='container d-flex w-100 my-5'>
      <div className='container d-flex flex-column w-25'>
        <Button href="/administrador/services">Servicios</Button>
        <Button href="/administrador/pets">Mascotas</Button>
        <Button href="/administrador/turnos">Turnos</Button>
      </div>
      <div className='container d-flex justify-content-center align-items-center flex-column mx-100'>
        <h3 className='conatainer'>Bienvenido!</h3>
        <h3 className='conatainer'>{sessionStorage.nombre}nombre del admin</h3>
        <h3 className='conatainer'>Rolling Puppies</h3>
      </div>
      <div className='container d-flex w-25 align-items-stretch'>
        <>{location.pathname === '/administrador/turnos' && (
        <Button className='container'>Agregar Turno</Button>
        )}
        </>
        <>{location.pathname === '/administrador/services' && (
        <Button className='container'>Agregar Servicio</Button>
        )}
        </>
      </div>

    </div>
    </>
  )
}

export default BannerAdminView
