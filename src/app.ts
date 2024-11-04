import express, { Express } from 'express'
import { createServer } from 'http'
import http from "http";
import { AuthenticationError } from './shared/errors';
import { errorHandler } from './shared/errorHandler';
import cors from 'cors'
import UserRouter from './context/users/routes';
import fileUpload from 'express-fileupload'
class Server{
    public app: Express
    private port: string | undefined
    private server:http.Server
    constructor(){
        this.app=express()
        this.port=process.env.PORT  
        this.server=createServer(this.app)  
    }
    listen(){
        this.server.listen(this.port,()=>{
            console.log(`Express running on port ${this.port}`)
        })
    }
    middlewares(){
        this.app.use(express.json())
        this.app.use(cors({  origin: 'http://localhost:5173' ,credentials: true}))
        this.app.use(fileUpload({debug:true}))
        
    }   
    router(){
        this.app.use('/users',UserRouter.init())
        this.app.get('/error', (req, res, next) => {
            const error = new AuthenticationError(
              'You are not authorized to access this resource',
            );
            next(error);
          });
        this.app.use('*', (req, res) => {
            res.status(404).json({ error: 'Not found' });
        });
        this.app.use(errorHandler) 
    }
    core(){
        this.middlewares()
        this.router()
        this.listen()
    }

}

export default new Server()