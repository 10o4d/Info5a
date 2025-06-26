import { noticias } from "./noticias"
export default function handler(req, res) {
    const found = noticias.find((noticia) => noticia.idnoticia == req.query.id);
    if (!found) {
        return res.status(404).json({ error: "Noticia não encontrada" });
    }
    res.status(200).json(found)
}