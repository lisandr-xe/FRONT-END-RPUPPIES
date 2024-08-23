import styleNuestrasMarcas from '../css/nuestrasMarcas.module.css';
import marca1 from '../assets/img/marca-1.png';
import marca2 from '../assets/img/marca-2.png';
import marca3 from '../assets/img/marca-3.png';
import marca4 from '../assets/img/marca-4.png';
import marca5 from '../assets/img/marca-5.png';
import marca6 from '../assets/img/marca-6.png';

const NuestrasMarcas = () => {
    return (
        <section className={styleNuestrasMarcas.nuestrasMarcas}>
            <article className={styleNuestrasMarcas.marcaTitulo}>
                <h3>Nuestras marcas</h3>
            </article>
            <article className={styleNuestrasMarcas.marcas}>
                <div className={styleNuestrasMarcas.contenedorLogo} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.logoRoyalCanin} src={marca1} alt="royal-canin"/>
                </div>
                <div className={styleNuestrasMarcas.contenedorLogo} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.logoPurina} src={marca2} alt="purina"/>
                </div>
                <div className={styleNuestrasMarcas.contenedorLogo} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.logoNexgard} src={marca3} alt="nexgard"/>
                </div>
                <div className={styleNuestrasMarcas.contenedorLogo} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.logoBravexto} src={marca4} alt="bravexto"/>
                </div>
                <div className={styleNuestrasMarcas.contenedorLogo} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.logoPurinaProPlan} src={marca5} alt="purina-pro-plan"/>
                </div>
                <div className={styleNuestrasMarcas.contenedorLogo} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.logoWhiskas} src={marca6} alt="whiskas"/>
                </div>
            </article>
        </section>
    );
}

export default NuestrasMarcas;