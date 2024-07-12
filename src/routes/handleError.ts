import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(404).json({ error: "Page not found" });
};

export const errorHandle: ErrorRequestHandler = (error, req, res, next) => {
    console.log(error);

    res.status(500).json({ error: "Ocorreu um erro" });

};