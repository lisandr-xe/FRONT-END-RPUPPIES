import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdministradorPage from "../pages/AdministradorPage";
import Error404Page from "../pages/Error404Page";

import NavbarC from "../components/NavbarC";
import MisMascotasPage from "../pages/MisMascotasPage";

const RoutesViews = () => {
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path="/mismascotas" element={<MisMascotasPage />} />
        <Route path="/administrador" element={<AdministradorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      {/* AQUI VA EN FOOTER */}
    </>
  );
};

export default RoutesViews;
