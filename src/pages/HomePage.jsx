import BannerC from "../components/BannerC";
import Bienvenidad from "../components/Bienvenidad";
import DireccionC from "../components/DireccionC";
import NuestrasMarcas from "../components/NuestrasMarcas";
import NuestrosProfesionales from "../components/nuestrosProfesionales";
import NuestrosServicios from "../components/NuestrosServicios";
import PubliPeluqueria from "../components/PubliPeluqueria";

const HomePage = () => {
  return (
    <main className='flex-grow-1'>
      <BannerC/>
      <Bienvenidad/>
      <NuestrasMarcas/>
      <NuestrosServicios/>
      <PubliPeluqueria/>
      <DireccionC/>
      <NuestrosProfesionales/>
    </main>
  );
};


export default HomePage;
