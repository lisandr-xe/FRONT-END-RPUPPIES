import MisMascotas from "../components/MisMascotas";
import PubliPeluqueria from "../components/PubliPeluqueria";

const MisMascotasPage = () => {
    return (
        <main className='flex-grow-1'>
            <PubliPeluqueria />
            <MisMascotas/>
        </main>
    );
}

export default MisMascotasPage;
