import { Col, Container, Row } from "react-bootstrap";
import { Footer, ContainerRecetas, CardsRedondas } from "../index.jsx";

export const Recetas = () => {
  return (
    <>
      <main>
        <Container fluid>
          <section className="hero-section">
            <div className="overlay"></div>
            <div className="hero-content">
              <h3 className="display-6 fw-bold shadow">
                Convertí tu pasión por la repostería <br /> en momentos
                inolvidables 🍰
              </h3>
              <p className="mt-3 fs-5">
                Cada receta es una obra de arte, cada sabor una emoción.
                Descubrí el placer de crear con Tarta & Co.
              </p>
            </div>
          </section>

          <div className="text-center my-4">
            <h1>- Recetas de cocina -</h1>
          </div>
          <ContainerRecetas />
        </Container>
      </main>
      <Footer />
    </>
  );
};
