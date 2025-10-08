import { Container } from "react-bootstrap";
import { Menu, Footer, Video, ContainerCardsR, ContainerCardsC } from "../index.jsx";

export const Inicio = ({ handleShow, login, setLogin }) => {
  return (
    <>
      <Menu handleShow={handleShow} login={login} setLogin={setLogin} />
      <main>
        <Container fluid>
          <Video />
          <ContainerCardsR />
          <section className="container bg-dark rounded-2">
            <div className="my-3">
              <h3 className="text-center py-4 text-light display-6 shadow">
                Transforma ingredientes en emociones... <br />
                !Cada bocado cuenta una historia¡
              </h3>
            </div>
          </section>
          <section className="my-2">
            <div>
              <h3 className="text-center py-4 text-dark display-6">Otras recetas que te pueden interesar</h3>
            </div>
          </section>
          <ContainerCardsC />
        </Container>
      </main>
      <Footer />
    </>
  );
};
