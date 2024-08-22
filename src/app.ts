import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Routers } from "./router";
import { NotFound } from "./error/NotFound";

const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());
app.use('/api', Routers);

app.get('/', (req: Request, res: Response) => {
    res.json('Fitness Equipment and accessories server is running');
});
app.use("*", NotFound)
// global error handler
app.use(globalErrorHandler);

export default app;
