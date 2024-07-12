import { RequestHandler } from "express";

export const interfer: RequestHandler = (req, res, next) => {
    console.log("executou");
    next()
};