import { noticias } from "../noticias"
export default function handler(req, res) {
    const found = noticias.filter(
        (noticia) => noticia.tiponoticia == req.query.tiponoticia);    
        if (found.length === 0) {
        return res.status(404).json({ error: "Tipo Notícia não encontrada" });
    }
    res.status(200).json(found)
}