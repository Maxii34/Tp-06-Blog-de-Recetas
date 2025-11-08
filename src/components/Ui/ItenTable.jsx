import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { borrarReceta } from "../helpers/queries";
import { useRecetas } from "../Context/RecetasContext";

export const ItenTable = ({ fila, itenReceta }) => {
  const { cargarRecetas } = useRecetas();

  const eliminarRecetas = async () => {
  Swal.fire({
    title: "¿Estas seguro de eliminar?",
    text: "No se puede revertir este paso posteriormente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#198754",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const respuesta = await borrarReceta(itenReceta._id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "La receta fue eliminada",
          text: `La receta ${itenReceta.nombre} fue eliminada correctamente`,
          icon: "success",
        });
        await cargarRecetas();
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `La receta no pudo ser eliminada`,
          icon: "error",
        });
      }
    }
  });
};

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
            to={`/administracion/editar/${itenReceta._id}`}
            className="btn btn-warning btn-sm"
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" size="sm" onClick={eliminarRecetas}>
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};
