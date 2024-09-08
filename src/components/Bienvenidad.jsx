import { Card } from 'react-bootstrap';
import styleBienvenida from '../css/bienvenida.module.css';

const Bienvenidad = () => {
    return (
        <section className={styleBienvenida.bienvenidad} data-aos="fade-up">
            <h2 className={styleBienvenida.tituloBienvenida}>Bienvenid@ a Rolling Puppies</h2>
            <div className={styleBienvenida.cardDescripcion}>
                <p className={styleBienvenida.descripcion}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, commodi corporis, aliquid rerum illo sed dolor neque quod ullam blanditiis error earum unde harum, laboriosam nesciunt atque voluptatum ipsum officiis.</p>
            </div>
        </section>
    );
}

export default Bienvenidad
