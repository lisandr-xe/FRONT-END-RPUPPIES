import styleGeneral from '../../src/index.module.css';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalAgregarMascota({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton closeVariant="white" className={styleGeneral.bgColorPrincipal}>
                <Modal.Title className="text-white">Agregar Mascota</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styleGeneral.bgColorFondo}>
                <Form id="form-agregar-mascota">
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="fotoMascota" className="fw-bolder">
                    Subir foto
                    </Form.Label>
                    <Form.Control type="file" id="fotoMascota" className={styleGeneral.bgInput} />
                    <div id="fotoMascotaError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nombre" className="fw-bolder">
                    Nombre
                    </Form.Label>
                    <Form.Control
                    type="text"
                    id="nombre"
                    placeholder="Ingrese el nombre"
                    minLength="3"
                    maxLength="25"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="nombreError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="fecha-nacimiento" className="fw-bolder">
                    Fecha de Nacimiento
                    </Form.Label>
                    <Form.Control
                    type="date"
                    id="fecha-nacimiento"
                    placeholder="Ingrese su Fecha de Nacimiento"
                    min="1900-01-01"
                    max="2004-12-31"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="fechaNacimientoError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="fw-bolder w-100">Especie</Form.Label>
                    <div className="d-flex">
                    <Form.Check
                        inline
                        type="radio"
                        id="especieRadio1"
                        name="especieRadioOptions"
                        value="canino"
                        className="me-3"
                        label={<><i className="fa-solid fa-dog"></i> Canino</>}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        id="especieRadio2"
                        name="especieRadioOptions"
                        value="felino"
                        label={<><i className="fa-solid fa-cat"></i> Felino</>}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        id="especieRadio3"
                        name="especieRadioOptions"
                        value="otros"
                        label={<><i className="fa-solid fa-paw"></i> Otros</>}
                    />
                    </div>
                    <div id="especieError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="fw-bolder w-100">Sexo</Form.Label>
                    <div className="d-flex">
                    <Form.Check
                        inline
                        type="radio"
                        id="sexoRadio1"
                        name="sexoRadioOptions"
                        value="macho"
                        className="me-3"
                        label={<><i className="fa-solid fa-mars iconoRadioMacho"></i> Macho</>}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        id="sexoRadio2"
                        name="sexoRadioOptions"
                        value="hembra"
                        label={<><i className="fa-solid fa-venus iconoRadioHembra"></i> Hembra</>}
                    />
                    </div>
                    <div id="sexoError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="raza" className="fw-bolder">
                    Raza
                    </Form.Label>
                    <Form.Control
                    type="text"
                    id="raza"
                    placeholder="Ingrese la raza"
                    minLength="3"
                    maxLength="25"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="razaError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="color" className="fw-bolder">
                    Color de pelo
                    </Form.Label>
                    <Form.Control
                    type="text"
                    id="color"
                    placeholder="Ingrese el color de pelo"
                    minLength="3"
                    maxLength="25"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="colorError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="peso" className="fw-bolder">
                    Peso (kg)
                    </Form.Label>
                    <Form.Control
                    type="number"
                    id="peso"
                    placeholder="Ingrese el peso"
                    min="0"
                    max="10000"
                    step="0.1"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="pesoError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="fw-bolder w-100">Esterilizado/a</Form.Label>
                    <div className="d-flex">
                    <Form.Check
                        inline
                        type="radio"
                        id="esterilizadoRadio1"
                        name="esterilizadoRadioOptions"
                        value="si"
                        className="me-3"
                        label="Sí"
                    />
                    <Form.Check
                        inline
                        type="radio"
                        id="esterilizadoRadio2"
                        name="esterilizadoRadioOptions"
                        value="no"
                        label="No"
                    />
                    </div>
                    <div id="esterilizadoError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="domicilio" className="fw-bolder">
                    Domicilio
                    </Form.Label>
                    <Form.Control
                    type="text"
                    id="domicilio"
                    placeholder="Ingrese el domicilio"
                    minLength="3"
                    maxLength="25"
                    required
                    className={styleGeneral.bgInput}
                    />
                    <div id="domicilioError" className="text-danger"></div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="observaciones" className="fw-bolder">
                    Observaciones
                    </Form.Label>
                    <Form.Control
                    as="textarea"
                    id="observaciones"
                    placeholder="Ingrese observaciones"
                    style={{ height: '100px' }}
                    className={styleGeneral.bgInput}
                    />
                    <div id="observacionesError" className="text-danger"></div>
                </Form.Group>

                <div className="d-flex align-items-center justify-content-center">
                    <Button
                    type="submit"
                    className={`${styleGeneral.btnPersonalized2} mx-1 fw-bold`}
                    aria-label="Agregar"
                    >
                    Agregar
                    </Button>
                    <Button
                    type="button"
                    className={`${styleGeneral.btnPersonalized1} mx-1 fw-bold`}
                    aria-label="Cancelar"
                    onClick={handleClose}
                    >
                    Cancelar
                    </Button>
                </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalAgregarMascota;
