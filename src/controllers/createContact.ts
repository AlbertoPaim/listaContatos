import { RequestHandler } from "express";
import { contatos } from "../db/contatos";

export const createContato: RequestHandler = async (req, res) => {
    const { name, number } = req.body
    let contactID = 1
    try {
        if (!name) res.status(404).json({ message: "Name not found" });
        if (!number) res.status(404).json({ message: "Number not found" });

        const newContact = {
            id: contactID,
            name,
            number
        }
        contactID++

        contatos.push(newContact);

        return res.status(201).json({ newContact: newContact })

    } catch (error) {
        res.status(500).json({ message: "Erro no servidor" })
    }
}