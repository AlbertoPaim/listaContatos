import express, { RequestHandler } from "express";
import { interfer } from "../middlewares/interfer";

export const routes = express.Router();

routes.get("/ping", interfer, (req, res) => {
    res.json({ pong: true })
})

routes.get("/produto", (req, res) => {
    res.json({ casa: "tem" })

})

export default routes;