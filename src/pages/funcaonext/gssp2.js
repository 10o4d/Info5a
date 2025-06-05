import { Container, Table } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"

export async function getServerSideProps() {
    return {
        props: {
            repo:
                { "var1": "Info A", "var2": "FW1", "nome": "IFMS" }
        }
    }
}
export default function Gssp2({ repo }) {

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
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Conteudo</th>
                            <th>Tipo</th>
                            <th>DH</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(noticias) ?
                            noticias.map(noticia =>
                                <tr>
                                    <td>{noticia.idnoticia}</td>
                                    <td>{noticia.titulonoticia}</td>
                                    <td>{noticia.conteudonoticia}</td>
                                    <td>{noticia.tiponoticia}</td>
                                    <td>{new Date(noticia.datahoracadastro).toLocaleString()}</td>
                                </tr>
                            )
                            : "não"}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}