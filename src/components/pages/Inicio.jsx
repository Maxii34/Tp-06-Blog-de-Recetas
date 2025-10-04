import { Container } from "react-bootstrap";
import { Menu, Footer, Video } from "../index.jsx";


export const Inicio = () => {
    return (
        <>
        <Menu />
        <Container fluid>
        <main>
        <Video />

        </main>
        </Container>
        <Footer />
        </>
    );
};
