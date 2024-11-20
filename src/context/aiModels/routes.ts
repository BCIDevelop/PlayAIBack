import { Request, Response, Router } from "express";
import AIModelController from "./controller";
import { isAuthenticated } from "../../shared/middlewares/isAuthenticated";
import sharedValidator from "../../shared/validators/sharedValidator";
import aiModelValidator from "./validators/aiModelValidator";
import { decodeQuery } from "./middlewares/decodeQuery.middleware";
class AIModelRouter{
    private router
    constructor(){
        this.router = Router()
    }
    init(){
        this.router.use(isAuthenticated)
        return this.router
        .get('/',decodeQuery,aiModelValidator.listRecordByTagName(),this.getAllRecords)
        .post('/',aiModelValidator.createRecord(),this.createRecord)
        .delete('/:id',sharedValidator.record(),this.deleteRecord)
        .patch('/:id',sharedValidator.record(),aiModelValidator.updateRecord(),this.updateRecord)
        .get('/:id',sharedValidator.record(),this.getRecordById)
    }

    getAllRecords(req:Request,res:Response){
        const controller = new AIModelController()
        controller.getAllRecords(req,res)
    }
    getRecordById(req:Request,res:Response){
        const controller = new AIModelController()
        controller.getRecordById(req,res)
    }

    createRecord(req:Request,res:Response){
        const controller = new AIModelController()
        controller.createRecord(req,res)
    }
    deleteRecord(req:Request,res:Response){
        const controller = new AIModelController()
        controller.deleteRecord(req,res)
    }
    updateRecord(req:Request,res:Response){
        const controller = new AIModelController()
        controller.updateRecord(req,res)
    }
}
export default new AIModelRouter()