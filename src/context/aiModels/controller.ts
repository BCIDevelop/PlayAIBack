import { Request, Response } from "express";
import * as dependencies from './infrastructure'
import * as tagService from './application'
import { paginationField, paginationResult } from "../../utils/pagination";
import { AIModel } from "./entity/aiModel";
class AIModelController{
    private repository
    private service
    constructor(){
        const {aiModelRepository} = dependencies.createTagsDependencies()
        this.repository = aiModelRepository
        this.service = tagService
    }
    async getAllRecords(req:Request,res:Response){
      
        const { per_page, page, ...filteredQuery } = req.query;
        const {tags,typeAI} = filteredQuery
        const {limit,offset} = paginationField(Number(page),Number(per_page))
        if(!tags && !typeAI) {
            const {records,count} = await this.service.getAIModelsDB(this.repository,offset,limit)
            return res.status(200).json(paginationResult<AIModel>(records!,count,Number(page),Number(per_page)))
        }
        const {records,count} = await this.service.getAIModelsByTagName(this.repository,filteredQuery as {},limit,offset)
        return res.status(200).json(paginationResult<AIModel>(records!,count,Number(page),Number(per_page)))
        
    }
    async createRecord(req:Request,res:Response){
        const record = await this.service.createAIModelDB(this.repository,req.body)
        return res.status(201).json(record)
    }
    async deleteRecord(req:Request,res:Response){
        const {id} = req.params
        await this.service.deleteAIModelDB(this.repository,id)
        return res.status(204).json({})
    }
    async getRecordById(req:Request,res:Response){
        const {id} = req.params
        const record = await this.service.getAIModelById(this.repository,id)
        return res.status(200).json(record)
    }
    
    async updateRecord(req:Request,res:Response){
        const {id} = req.params
        const record = await this.service.updateAIModelDB(this.repository,id,req.body)
        return res.status(200).json(record)
    }
}
export default AIModelController