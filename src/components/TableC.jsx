import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { Container, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";
import "datatables.net-responsive";
import "../index.css";
DataTable.use(DT);

const TableC = ({ tableID, columns, tdata }) => {
  const [tableData, setTableData] = useState([]);

  const getTableData = () => {
    setTableData(tdata);
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <Container>
      <DataTable
        className="display nowrap fontPage"
        options={{
          responsive: true,
        }}
      >
        <thead>
          <tr>
            {columns.map((columnName) => (
              <th key={columnName} className="text-center">
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        {tableID === "usuarios" ? (
          <>
            <tbody>
              {tableData.map((user) => (
                <tr key={user._id}>
                  <td className="text-center">{user._id}</td>
                  <td className="text-center">{user.nombre}</td>
                  <td className="text-center">{user.apellido}</td>
                  <td className="text-center">{user.email}</td>
                  <td className="text-center">{user.telefono}</td>
                  <td className="text-center">{user.rol}</td>
                  <td className="text-center d-flex gap-2 ">
                    <Button className="btnPersonalized3">Editar</Button>
                    <Button className="btn btn-warning">Deshabilitar</Button>
                    <Button className="btn btn-danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        ) : null}
      </DataTable>
    </Container>
  );
};

export default TableC;
