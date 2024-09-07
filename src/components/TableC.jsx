import { useEffect, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Swal from "sweetalert2";
import axios from "axios";
import DataTable from "react-data-table-component";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const TableC = ({ tableID }) => {
  const [tableData, setTableData] = useState([]);
  const searchParamBar = useRef(null);

  const client = axios.create({
    baseURL: "http://localhost:3001/api/usuarios",
  });

  const getUsers = async () => {
    await client
      .get("/")
      .then((res) => {
        setTableData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    !tableData.length && getUsers();
  }, []);

  const deshabilitarUsuario = async (userID, is_bloqueado) => {
    Swal.fire({
      icon: "question",
      title: `Estas seguro que deseas ${
        is_bloqueado ? "habilitar" : "deshabilitar"
      } al usuario?`,
      showCancelButton: true,
      confirmButtonText: `${is_bloqueado ? "Habilitar" : "Deshabilitar"}`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          `${
            is_bloqueado
              ? "El usuario fue habilitado"
              : "El usuario fue dehabilitado"
          }`,
          "",
          "success"
        );
        client
          .put(`/${userID}`, {
            bloqueado: !is_bloqueado,
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const eliminarUsuario = async (userID) => {
    Swal.fire({
      icon: "question",
      title: `Estas seguro que deseas eliminar a este usuario?`,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("El usuario fue eliminado", "", "success");
        client.delete(`/${userID}`).catch((error) => {
          console.log(error);
        });
      }
    });
  };

  const columns = [
    {
      name: "ID",
      value: "_id",
      selector: (row) => row._id,
    },
    {
      name: "Nombre",
      value: "nombre",
      selector: (row) => `${row.nombre} ${row.apellido}`,
    },
    {
      name: "Email",
      value: "email",
      selector: (row) => row.email,
    },
    {
      name: "Teléfono",
      value: "telefono",
      selector: (row) => row.telefono,
    },
    {
      name: "Rol",
      value: "rol",
      selector: (row) => row.rol,
    },
    {
      name: "Opciones",
      value: "options",
      selector: (row) => (
        <>
          <div className="d-flex gap-2">
            <Button className="btnPersonalized3">Editar</Button>
            <Button
              className="btn btn-warning"
              onClick={() => {
                deshabilitarUsuario(row._id, row.bloqueado);
              }}
            >
              {row.bloqueado ? "Habilitar" : "Deshabilitar"}
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => {
                eliminarUsuario(row._id);
              }}
            >
              Eliminar
            </Button>
          </div>
        </>
      ),
      grow: 2,
    },
  ];

  const customSearch = (obj, filter, filterValue) => {
    const newObj = [];

    if (Array.isArray(filter)) {
      Object.keys(obj).forEach((key) => {
        var is_added = false;
        filter.forEach((filterKey) => {
          if (
            !is_added &&
            obj[key][filterKey]
              .toLowerCase()
              .indexOf(filterValue.toLowerCase()) >= 0
          ) {
            newObj.push(obj[key]);
            is_added = true;
          }
        });
      });
      return newObj;
    } else {
      Object.keys(obj).forEach((key) => {
        obj[key][filter].toLowerCase().indexOf(filterValue.toLowerCase()) >=
          0 && newObj.push(obj[key]);
      });
      return newObj;
    }
  };

  const handleSearch = (e) => {
    let newTableData = [];
    if (e.target.value === "") {
      getUsers();
    }
    const searchParam = searchParamBar.current.value;

    if (searchParam === "all") {
      newTableData = customSearch(
        tableData,
        ["_id", "nombre", "email", "telefono", "rol"],
        e.target.value
      );
      setTableData(newTableData);
    } else {
      newTableData = customSearch(tableData, searchParam, e.target.value);
      setTableData(newTableData);
    }
  };

  return (
    <>
      <Container className="m-auto">
        <Form className="w-50 ms-auto">
          <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Buscar
          </Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control id="inlineFormInputGroup" onChange={handleSearch} />
            <Form.Select
              style={{ maxWidth: "200px" }}
              aria-label="Default select example"
              ref={searchParamBar}
            >
              <option value={"all"}>Todos los campos</option>
              {columns.map(
                (column) =>
                  column.name !== "Opciones" && (
                    <option key={column.name} value={column.value}>
                      {column.name}
                    </option>
                  )
              )}
            </Form.Select>
          </InputGroup>
        </Form>
        <DataTable columns={columns} data={tableData} pagination />
      </Container>
    </>
  );
};

export default TableC;
