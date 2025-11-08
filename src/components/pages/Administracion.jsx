import { Link } from "react-router";
import { Footer, ItenTable, ModalAdminVer } from "../index.jsx";
import { Table } from "react-bootstrap";
import { useRecetas } from "../Context/RecetasContext.jsx";

export const Administracion = () => {
  const { recetas } = useRecetas();

  return (
    <>
      <ModalAdminVer />
      <main className="container">
        <section id="topLine" className="my-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-md-items-center">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-0 py-2">Panel de productos disponibles</h1>
              <small className="text-muted">
                Gestión de productos disponibles
                <strong>"vista pública en Cards/inicio."</strong>
              </small>
            </div>

            <div className="d-flex gap-2 flex-wrap mt-2 mt-md-0">
              <Link
                to="/administracion/crear"
                className="btn btn-success btn-md shadow"
              >
                <i className="bi bi-file-earmark-plus"></i>  Agregar
              </Link>
            </div>
          </div>

          <hr />

          <Table
            striped
            bordered
            hover
            responsive
            className="align-middle text-center shadow"
          >
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Ingredientes</th>
                <th>URL de imagen</th>
                <th>Categoría</th>
                <th>Sin o Con Tac</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(recetas) && recetas.length > 0 ? (
                recetas.map((itenReceta, index) => (
                  <ItenTable
                    key={itenReceta._id}
                    itenReceta={itenReceta}
                    fila={index + 1}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    <p className="mb-0">No hay recetas disponibles</p>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </section>
      </main>
      <Footer />
    </>
  );
};