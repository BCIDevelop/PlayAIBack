import { Request, Response } from "express";
import * as dependencies from './infrastructure'
class AITagsController{
    private repository
    constructor(){
        const {aiTagRepository} = dependencies.createTagsDependencies()
        this.repository = aiTagRepository
    }
    getAllRecords(req:Request,res:Response){

    }
    createRecord(req:Request,res:Response){
        
    }
    deleteRecord(req:Request,res:Response){}
}
export default AITagsController