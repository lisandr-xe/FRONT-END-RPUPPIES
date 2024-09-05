import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { Container, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
DataTable.use(DT);
import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";
import "datatables.net-responsive";
import "../index.css";

const TableC = ({ columns, users }) => {
  const [tableData, setTableData] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    setTableData(users);

    const table = $(tableRef.current).DataTable({
      responsive: true,
      autoWidth: false,
      paging: true,
      rowReorder: {
        selector: "td:nth-child(2)",
      },
    });
    return () => {
      if ($.fn.dataTable.isDataTable(tableRef.current)) {
        table.destroy();
      }
    };
  }, []);

  return (
    <>
      <Container className="table-responsive">
        <DataTable className="display nowrap fontPage">
          <thead>
            <tr>
              {columns.map((columnName) => (
                <th key={columnName}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="text-center">{user._id}</td>
                <td className="text-center">{user.nombre}</td>
                <td className="text-center">{user.apellido}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">{user.telefono}</td>
                <td className="text-center">{user.rol}</td>
                <td className="text-center ">
                  <Button className="btnPersonalized3">Editar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </DataTable>
      </Container>
    </>
  );
};

export default TableC;
