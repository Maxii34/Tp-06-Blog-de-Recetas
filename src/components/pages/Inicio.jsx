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

        </main>
        </Container>
        <Footer />
        </>
    );
};
