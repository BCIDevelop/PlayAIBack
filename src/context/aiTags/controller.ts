import { Request, Response } from "express";
import * as dependencies from './infrastructure'
import * as tagService from './application' 
import { paginationField, paginationResult } from "../../utils/pagination";
import { AITag } from "./entity/aiTag";

class AITagsController{
    private repository
    private service
    constructor(){
        const {aiTagRepository} = dependencies.createTagsDependencies()
        this.repository = aiTagRepository
        this.service = tagService
    }
    async getAllRecords(req:Request,res:Response){
        const {page,per_page} = req.query
        const {limit,offset} = paginationField(Number(page),Number(per_page))
        const {records,count} = await this.service.getAITagsDB(this.repository,offset,limit)
        return res.status(200).json(paginationResult<AITag>(records!,count,Number(page),Number(per_page)))
    }
    async createRecord(req:Request,res:Response){
        const record = await this.service.createAITagsDB(this.repository, req.body)
        return res.status(201).json(record)
    }
    async deleteRecord(req:Request,res:Response){
        const {id} = req.params
        await this.service.deleteAITagsDB(this.repository,id )
        return res.status(204)
    }
    async getRecordByName(req:Request,res:Response){
        const {name} = req.params
        const record = await this.service.getAITagByName(this.repository,name)
        return res.status(200).json(record)
    }
}
export default AITagsController