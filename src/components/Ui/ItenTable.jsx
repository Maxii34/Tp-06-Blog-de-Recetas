import { Button, Table } from "react-bootstrap";

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
          <Button variant="warning" size="sm">
            Editar
          </Button>
          <Button variant="danger" size="sm">
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
};
