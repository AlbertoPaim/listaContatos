import { RequestHandler } from "express";
import { contatos } from "../db/contatos";

export const getContatos: RequestHandler = async (req, res) => {
    try {
        res.json({ contatos: contatos })
    } catch (error) {
        return res.status(500).json({ message: "Erro no servidor" })
    }
}