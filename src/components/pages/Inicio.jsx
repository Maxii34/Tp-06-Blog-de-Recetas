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

            <section className="my-2">
              <div className="my-3 container bg-dark rounded-2 shadow">
                <h3 className="text-center py-4 text-light display-6">
                  Transforma ingredientes en emociones... <br />
                  !Cada bocado cuenta una historia¡
                </h3>
              </div>
              <div className="container bg-dark-subtle shadow py-2 border-1 border-black">
                <h2 className=" text-center">Escuela del Sabor Dulce</h2>

                <div>
                  <p>
                    Bienvenido al rincón más dulce de la web. Aquí encontrarás
                    toda la inspiración, tips y conocimientos que necesitas para
                    iniciarte en el mundo de la repostería o perfeccionar tus
                    habilidades con el horno. Descubre cómo llenar tus días de
                    aroma a vainilla, chocolate y preparaciones irresistibles.
                  </p>

                  <p>
                    "<b>Tortas & Co</b>" es el blog ideal para todos los amantes de la
                    repostería. Aquí aprenderás técnicas, secretos, recetas y
                    consejos para convertirte en un verdadero maestro pastelero
                    desde casa. Prepárate para endulzar tu cocina con tortas,
                    cupcakes, galletas, postres y mucho más.
                  </p>
                </div>

                <div>
                  <ul>
                    <li>
                      <strong>TIPS DULCES:</strong> Trucos y consejos que te
                      facilitarán cada preparación. Descubre cómo lograr
                      bizcochos esponjosos, coberturas perfectas y decoraciones
                      encantadoras sin complicarte.
                    </li>
                    <li>
                      <strong>COCCIÓN Y TÉCNICAS:</strong> Aprende sobre tiempos
                      de horneado, técnicas de batido, temperaturas ideales y
                      métodos para lograr resultados profesionales en tus
                      postres.
                    </li>
                    <li>
                      <strong>INGREDIENTES:</strong> Conoce a fondo tus
                      ingredientes reposteros favoritos: tipos de harinas,
                      chocolates, mantequillas, esencias, colorantes y cómo
                      elegir, conservar y usar cada uno.
                    </li>
                    <li>
                      <strong>RECETAS CASERAS:</strong> Postres tradicionales y
                      clásicos que nos transportan a la infancia: tortas,
                      budines, galletitas, facturas y delicias con sabor a
                      hogar.
                    </li>
                    <li>
                      <strong>APRENDIENDO A REPOSTEAR:</strong> Paso a paso
                      guiado por reposteros expertos para que puedas crear tus
                      postres favoritos desde cero, incluso si recién comienzas.
                    </li>
                    <li>
                      <strong>UTENSILIOS Y HERRAMIENTAS:</strong> Qué utensilios
                      necesitas para hornear como un profesional y cómo
                      utilizarlos correctamente: mangas, boquillas, moldes,
                      espátulas, batidoras y más.
                    </li>
                    <li>
                      <strong>REPOSTERÍA PARA NIÑOS:</strong> Ideas de recetas
                      simples y divertidas para cocinar con los más pequeños,
                      creando momentos dulces y memorables en familia.
                    </li>
                  </ul>
                </div>

                <div>
                  <p>
                    Explora cada categoría para descubrir
                    recetas irresistibles, ideas creativas y contenido que hará
                    brillar tus postres. ¡Tu aventura repostera comienza aquí!
                  </p>
                </div>
              </div>
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
