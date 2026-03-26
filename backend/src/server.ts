import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes.js";

// Criando a instância da aplicação
const app = Fastify({ logger: true });

// Registrando plugins da aplicação
await app.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "DELETE"]
});

await app.register(routes);

// Middleware para lidar com erros
app.setErrorHandler((error: Error, request: FastifyRequest, reply: FastifyReply) => {
    reply.status(500).send({ error: error.message || "Internal Server Error" });
})

// Iniciando o servidor
const start = async () => {


    try {
        await app.listen({port: 3333, host: "0.0.0.0"})
        console.log("Servidor rodando na porta 3333 => http://localhost:3333");
    } catch (error){
        app.log.error(`Error ao iniciar o servidor: ${error}`);
        process.exit(1)
    }

}

start();