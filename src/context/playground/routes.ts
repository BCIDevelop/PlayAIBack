import { Request, Response, Router } from "express";
import PlaygroundController from "./controller";
import { isAuthenticated } from "../../shared/middlewares/isAuthenticated";

class PlaygroundRouter{
    private router
    constructor(){
        this.router = Router()
    }
    init(){
        this.router.use(isAuthenticated)
        return this.router
        .get('/questions/:id',this.getQuestions)
        .post('/questions/:id/answer/:answerId',this.getAnswer)
    }
    getQuestions(req:Request,res:Response){
        const controller = new PlaygroundController()
        controller.listQuestions(req,res)
    }
    getAnswer(req:Request,res:Response){
        const controller = new PlaygroundController()
        controller.listAnswer(req,res)
    }
}
export default new PlaygroundRouter()