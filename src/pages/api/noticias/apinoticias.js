// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {noticias} from "./noticias"



export default function handler(req, res) {
  res.status(200).json(noticias);
} 