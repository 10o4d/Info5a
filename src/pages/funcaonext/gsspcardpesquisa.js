import { Container, Row } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"
import Cards from "../components/cards"
export async function getServerSideProps() {
    return {
        props: {
            repo:
                { "var1": "Info A", "var2": "FW1", "nome": "IFMS" }
        }
    }
}
export default function Gsspcardpesquisa({ repo }) {
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
                <Row xs={1} md={2} lg={3} className="g-4">
                    {Array.isArray(noticias) ?
                        noticias.map(noticia =>
                        (noticia.tiponoticia === "pesquisa" ?
                            <Cards idnoticia={noticia.idnoticia}
                                titulonoticia={noticia.titulonoticia}
                                tiponoticia={noticia.tiponoticia}
                                conteudonoticia={noticia.conteudonoticia}
                                datahoracadastro={noticia.datahoracadastro} /> : null)
                        )
                        : "não"}
                </Row>
            </Container>
        </>
    )
}