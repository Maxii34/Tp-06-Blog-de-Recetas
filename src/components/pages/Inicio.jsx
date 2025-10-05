import { Container } from "react-bootstrap";
import { Menu, Footer, Video, ContainerCardsR, ContainerCardsC } from "../index.jsx";

export const Inicio = () => {
  return (
    <>
      <Menu />
      <Container fluid>
        <main> 
          <Video />
          <ContainerCardsR />
          <section class="container bg-dark rounded-2">
            <div class="my-3">
              <h3 class="text-center py-4 text-light display-6 shadow">
                Transforma ingredientes en emociones... <br />
                !Cada bocado cuenta una historia¡
              </h3>
            </div>
          </section>
          <section className="my-2">
            <div>
              <h3 class="text-center py-4 text-dark display-6">Otras recetas que te pueden interesar</h3>
            </div>
          </section>
          <ContainerCardsC />
        </main>
      </Container>
      <Footer />
    </>
  );
};
