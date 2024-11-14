import { Request, Response, Router } from "express";
import AIModelController from "./controller";
import { isAuthenticated } from "../../shared/middlewares/isAuthenticated";

class AITagsController{
    private router
    constructor(){
        this.router = Router()
    }
    init(){
        this.router.use(isAuthenticated)
        return this.router
        .get('/',this.getAllRecords)
        .post('/',this.createRecord)
        .delete('/:id',this.deleteRecord)
    }

    getAllRecords(req:Request,res:Response){
        const controller = new AIModelController()
        controller.getAllRecords(req,res)
    }

    createRecord(req:Request,res:Response){
        const controller = new AIModelController()
        controller.createRecord(req,res)
    }
    deleteRecord(req:Request,res:Response){
        const controller = new AIModelController()
        controller.deleteRecord(req,res)
    }
}
export default new AITagsController()