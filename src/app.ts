
import express, { Request, Response } from "express"
const app = express()

app.get('/', (req: Request, res: Response) => {
    res.json('Fintness Equipment and accessories server is running')
})
export default app