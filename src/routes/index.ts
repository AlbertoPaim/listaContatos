import express, { RequestHandler } from "express";
import { interfer } from "../middlewares/interfer";
import { getContatos } from "../controllers/listContats";
import { createContato } from "../controllers/createContact";
export const routes = express.Router();

routes.get("/ping", interfer, (req, res) => {
    res.json({ pong: true })
})

routes.get("/contatos", getContatos)
routes.post("/contatos", createContato)

export default routes;