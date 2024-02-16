import express, {Request, Response, NextFunction, ErrorRequestHandler} from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/taskRoute";
import log from "./logger/logger";
import { connects } from "./db/db";

const app= express();
const PORT:number= 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Database Connection //
connects();

//Application Routes //
app.use('/', router);

// Error Handle //
const errorHandle=(err:ErrorRequestHandler, req:Request, res:Response, next:NextFunction)=>{
    if(res.headersSent){
        return next(err);
    }
    else{
        res.status(500).send(err)
    }
}

app.listen(process.env.PORT || PORT, ()=>{
    log.info(`Listening to Port ${PORT}`)
});