import styleMisMascotas from '../css/misMascotas.module.css';
import imgPerro from '../assets/img/perro.png';
import imgGato from '../assets/img/gato.png';
import { useState } from 'react';
import ModalAgregarMascota from './ModalAgregarMascota';
import ModalEditarMascota from './ModalEditarMascota';

const CardCanino = () => {
    const [showModalEditarMascota, setShowModalEditarMascota] = useState(false);

    const handleOpenModalEditarMascota = () => setShowModalEditarMascota(true);
    const handleCloseModaEditarrMascota = () => setShowModalEditarMascota(false);

    const eliminarMascota = () =>{
        Swal.fire({
            title: "Eliminar Mascota",
            text: "¿Estás seguro de eliminar está mascota?",
            icon: "warning",
            showCancelButton: true,
            background: "#eaeef4",
            confirmButtonColor: "#144d4d",
            confirmButtonText: "Si, eliminar",
            cancelButtonColor: "#A60505",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    title: "¡Exito!",
                    text: "Mascota Eliminada",
                    showConfirmButton: false,
                    background: "#eaeef4",
                    timer: 1500
                });
            }
        });
    }

    return (
        <div className={styleMisMascotas.cardMascota} data-aos="zoom-in">
            <div className={styleMisMascotas.cardContenido}>
                <span className={styleMisMascotas.perro}></span>
                <div className={styleMisMascotas.imgPet}>
                    <img className={styleMisMascotas.imgMascota} src={imgPerro} alt="perro"/>
                </div>
                <h4>Roco</h4>
                <div className={styleMisMascotas.botonesMascotas}>
                    <button className={styleMisMascotas.btnTurno}>
                        <i className="fa-solid fa-calendar-day"></i> Turnos
                    </button>
                    <button className={styleMisMascotas.btnEditarMascota} aria-label="Editar Mascota" onClick={handleOpenModalEditarMascota}>
                        <i className="fa-solid fa-pen-to-square"></i> Editar
                    </button>
                    <ModalEditarMascota show={showModalEditarMascota} handleClose={handleCloseModaEditarrMascota} />
                </div>
            </div>
            <button className={styleMisMascotas.btnEliminarMascota} type="button" onClick={eliminarMascota}><i className="fa-solid fa-circle-xmark"></i></button>
        </div>
    );
}

const CardFelino = () => {
    const [showModalEditarMascota, setShowModalEditarMascota] = useState(false);

    const handleOpenModalEditarMascota = () => setShowModalEditarMascota(true);
    const handleCloseModaEditarrMascota = () => setShowModalEditarMascota(false);

    const eliminarMascota = () =>{
        Swal.fire({
            title: "Eliminar Mascota",
            text: "¿Estás seguro de eliminar está mascota?",
            icon: "warning",
            showCancelButton: true,
            background: "#eaeef4",
            confirmButtonColor: "#144d4d",
            confirmButtonText: "Si, eliminar",
            cancelButtonColor: "#A60505",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                /* AXIOS */
                Swal.fire({
                    icon: "success",
                    title: "¡Exito!",
                    text: "Mascota Eliminada",
                    showConfirmButton: false,
                    background: "#eaeef4",
                    timer: 1500
                });
            }
        });
    }

    return (
        <div className={styleMisMascotas.cardMascota} data-aos="zoom-in">
            <div className={styleMisMascotas.cardContenido}>
                <span className={styleMisMascotas.gato}></span>
                <div className={styleMisMascotas.imgPet}>
                    <img className={styleMisMascotas.imgMascota} src={imgGato} alt="gato"/>
                </div>
                <h4>Cloe</h4>
                <div className={styleMisMascotas.botonesMascotas}>
                    <button className={styleMisMascotas.btnTurno}>
                        <i className="fa-solid fa-calendar-day"></i> Turnos
                    </button>
                    <button className={styleMisMascotas.btnEditarMascota} aria-label="Editar Mascota" onClick={handleOpenModalEditarMascota}><i className="fa-solid fa-pen-to-square"></i> Editar
                    </button>
                    <ModalEditarMascota show={showModalEditarMascota} handleClose={handleCloseModaEditarrMascota} />
                </div>
            </div>
            <button className={styleMisMascotas.btnEliminarMascota} onClick={eliminarMascota} type="button"><i className="fa-solid fa-circle-xmark"></i></button>
        </div>
    )
}

const MisMascotas = () => {
    const [showModalAgregarMascota, setShowModalAgregarMascota] = useState(false);

    const handleOpenModalAgregarMascota = () => setShowModalAgregarMascota(true);
    const handleCloseModalAgregarMascota = () => setShowModalAgregarMascota(false);
    return (
        <section className={styleMisMascotas.tusMascotas}>
            <article className={styleMisMascotas.tusMascotasTitulo}>
                <h2>Tus mascotas</h2>
            </article>
            <article className={styleMisMascotas.agregarMascota}>
                <button type="button" className="btn btn-success fw-bolder fs-6" onClick={handleOpenModalAgregarMascota}><i className="fa-solid fa-circle-plus" aria-label="Agregar Mascota"></i> Agregar Mascota</button>
                <ModalAgregarMascota show={showModalAgregarMascota} handleClose={handleCloseModalAgregarMascota} />
            </article>
            <article className={styleMisMascotas.contenedorMascotas}>
                <CardCanino key={1}/>
                <CardFelino key={2}/>
                <CardCanino key={3}/>
                <CardFelino key={4}/>
                <CardCanino key={5}/>
                <CardFelino key={6}/>
            </article>
        </section>
    );
}

export default MisMascotas;
