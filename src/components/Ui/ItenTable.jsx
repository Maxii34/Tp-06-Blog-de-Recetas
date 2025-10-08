import { Button } from "react-bootstrap";
import { Link } from "react-router";


export const ItenTable = () => {
  return (
    <tr>
      <td>1</td>
      <td>Alfajores</td>
      <td>Leche, Maicena...</td>
      <td>imagen.jpg</td>
      <td>Postre</td>
      <td>Batir, mezclar...</td>
      <td>Sin TACC</td>
      <td>
        <div className="d-flex justify-content-center gap-1">
          <Button variant="info" size="sm" className="text-light">
            Ver
          </Button>
          <Link
            to={"/administracion/editar"}
            className="btn btn-warning btn-sm"
          >
            Editar
          </Link>
          <Button variant="danger" size="sm">
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
};
