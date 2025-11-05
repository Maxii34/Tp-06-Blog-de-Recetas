import { Container } from "react-bootstrap";
import { Footer, Video, ContainerCardsR, ContainerCardsC } from "../index.jsx";
import { RecetasProvider } from "../Context/RecetasContext.jsx";

export const Inicio = () => {
  return (
    <>
      <RecetasProvider>
        <main>
            <Video />
          <Container fluid>
            <div>
              {/*CardsRedondas estaticas para el inicio, puede cambiar a dinamicas. */}
              <h1 className="text-center display-5 my-5">
                - Elegí qué querés cocinar -
              </h1>
              <ContainerCardsR />
            </div>
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
                <h3 className="text-center py-4 text-dark display-6">
                  Otras recetas que te pueden interesar.
                </h3>
              </div>
            </section>
            <ContainerCardsC />
          </Container>
        </main>
      </RecetasProvider>
      <Footer />
    </>
  );
};
