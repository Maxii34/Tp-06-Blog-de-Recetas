import { Link } from "react-router";
import { Footer, ItenTable } from "../index.jsx";
import { Button, Table } from "react-bootstrap";

export const Administracion = () => {
  return (
    <>
      <main className="container">
        <section id="topLine" className="my-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-md-items-center">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-0">Panel de productos disponibles</h1>
              <small className="text-muted">
                Gestión de productos disponibles
                <strong>"vista pública en Cards/inicio."</strong>
              </small>
            </div>

            <div className="d-flex gap-2 flex-wrap mt-2 mt-md-0">
              <Link to="/administracion/crear" className="btn btn-primary shadow">
                <i className="bi bi-file-earmark-plus"></i>
              </Link>
              <Button type="button" variant="danger" className="shadow">
                <i className="bi bi-trash"></i>
              </Button>
            </div>
          </div>

          <hr />

          <Table
            striped
            bordered
            hover
            responsive
            className="align-middle text-center"
          >
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Ingredientes</th>
                <th>URL de imagen</th>
                <th>Categoría</th>
                <th>preparacion</th>
                <th>Sin o Con Tac</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <ItenTable />
            </tbody>
          </Table>
        </section>
      </main>
      <Footer />
    </>
  );
};
