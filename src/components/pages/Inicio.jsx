import { Container } from "react-bootstrap";
import { Menu, Footer, Video, ContainerCardsR } from "../index.jsx";

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
              <p class="text-center py-4 text-light display-6 shadow">
                Transforma ingredientes en emociones... <br />
                !Cada bocado cuenta una historia¡
              </p>
            </div>
          </section>
        </main>
      </Container>
      <Footer />
    </>
  );
};
