import { Card, CardText, Col, Container, Row } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"
export async function getServerSideProps() {
    return {
        props: {
            repo:
                { "var1": "Info A", "var2": "FW1", "nome": "IFMS" }
        }
    }
}
export default function Gsspcard({ repo }) {
    return (
        <>
            <Container className="text-center">
                <h1>Server Side Props - 2</h1>
                {Array.isArray(repo) ? "sim" : "não"}
                {Object.entries(repo).map(([key, value]) => (
                    <p>{key}: {value}</p>
                ))}
            </Container>
            <Container>
                <Row xs={1} md={2} lg={3}className="g-4">
                    {Array.isArray(noticias) ?
                        noticias.map(noticia =>
                            <Col key={noticia.idnoticia}>
                                <Card>
                                    <Card.Header className="text-center fw-bold">{noticia.titulonoticia}</Card.Header>
                                    <Card.Body>
                                        <Card.Title className="text-capitalize">{noticia.tiponoticia}</Card.Title>
                                        <Card.Text> {noticia.conteudonoticia}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>{new Date(noticia.datahoracadastro).toLocaleString()}</Card.Footer>

                                </Card>
                            </Col>
                        )
                        : "não"}
                </Row>
            </Container>
        </>
    )
}