import config from "dotenv";
import helmet from "helmet"
import express from "express";
import path from "path";
import routes from "./routes"
import { errorHandle, notFoundRequest } from "./routes/handleError";

const server = express();
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")))
server.use(routes);
server.use(notFoundRequest);
server.use(errorHandle);

server.listen(3000, () => {
    console.log("servidor esta rodando no link: http://localhost:3000");
});