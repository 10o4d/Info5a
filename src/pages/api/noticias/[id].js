import {noticias} from "./noticias"

export default function handler(req, res){
 console.log(req.query.id)
    res.status(200).json(req.query.id)
}