import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from 'cors'
import connectMongo from "./util/dbconnection";
dotenv.config();

const app: Express = express();
connectMongo()

app.use(cors({
  exposedHeaders: "Authorization"
}))
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello from the TypeScript world!</h1>");
});

export default app;
