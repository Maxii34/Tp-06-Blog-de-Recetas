import { Button } from "react-bootstrap";
import { Link } from "react-router";

export const ItenTable = ({ fila, itenReceta }) => {
  return (
    <tr>
      <td>{fila}</td>
      <td>{itenReceta.nombre}</td>
      <td>{itenReceta.ingredientes}</td>
      <td>
        <img
          src={itenReceta.imagen || null}
          className="img-fluid rounded table-img"
          alt="imagen"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
          loading="lazy"
        />
      </td>
      <td>{itenReceta.categoria}</td>
      <td>{itenReceta.dietType}</td>
      <td>
        <div className="d-flex justify-content-center gap-1">
          <Button variant="info" size="sm" className="text-light text-center">
            <i className="bi bi-eye"></i>
          </Button>
          <Link
            to={"/administracion/editar"}
            className="btn btn-warning btn-sm"
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" size="sm">
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};
