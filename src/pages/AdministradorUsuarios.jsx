import { useEffect, useState } from "react";
import TableC from "../components/TableC";
import axios from "axios";

const AdministradorUsuarios = () => {
  const [usuarios, setUsuarios] = useState();

  const client = axios.create({
    baseURL: "http://localhost:3001/api/usuarios",
  });

  useEffect(() => {
    client
      .get("/")
      .then((res) => {
        setUsuarios(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TableC
        tableID={"usuarios"}
        columns={[
          "ID",
          "Nombre",
          "Apellido",
          "Email",
          "Teléfono",
          "Rol",
          "Opciones",
        ]}
        tdata={usuarios}
      />
    </>
  );
};

export default AdministradorUsuarios;
