import { Request, Response, Router } from "express";
import AIModelController from "./controller";
import { isAuthenticated } from "../../shared/middlewares/isAuthenticated";
import tagValidator from './validators/aiTagValidator'
import sharedValidator from "../../shared/validators/sharedValidator";
import { asyncHandler } from "../../utils/asyncHandler";
class AITagsRouter{
    private router
    constructor(){
        this.router = Router()
    }
    init(){
        this.router.use(isAuthenticated)
        return this.router
        .get('/',sharedValidator.listRecords(),asyncHandler(this.getAllRecords))
        .get('/:name',tagValidator.getRecordByName(),asyncHandler(this.getRecordByName))
        .post('/',tagValidator.createRecord(),asyncHandler(this.createRecord))
        .delete('/:id',sharedValidator.record(),asyncHandler(this.deleteRecord))
    }

    async getAllRecords(req:Request,res:Response){
        const controller = new AIModelController()
        controller.getAllRecords(req,res)
    }
    async getRecordByName(req:Request,res:Response){
        const controller = new AIModelController()
        controller.getRecordByName(req,res)
    }
    async createRecord(req:Request,res:Response){
        const controller = new AIModelController()
        controller.createRecord(req,res)
    }
    async deleteRecord(req:Request,res:Response){
        const controller = new AIModelController()
        controller.deleteRecord(req,res)
    }
}
export default new AITagsRouter()