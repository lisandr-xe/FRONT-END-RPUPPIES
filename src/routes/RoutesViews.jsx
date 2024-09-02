import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdministradorPage from "../pages/AdministradorPage";
import Error404Page from "../pages/Error404Page";
import { usePageTitle } from "../helpers/usePageTitle";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";
import MisMascotasPage from "../pages/MisMascotasPage";

const RoutesViews = () => {
  const location = useLocation();
  usePageTitle(location.pathname);
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path="/mismascotas" element={<MisMascotasPage />} />
        <Route path="/administrador" element={<AdministradorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <FooterC />
    </>
  );
};

export default RoutesViews;
