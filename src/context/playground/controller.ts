import { Request, Response } from "express";
import * as questionService from './application'
import createGraph from "./application/createGraph";
import * as dependencies from './infrastructure'
class PlaygroundController{
    private service
    private repository
    private graph
    constructor(){
        const {aiModelRepository} = dependencies.createModelsPlaygroundDependencies()
        this.service = questionService
        this.graph = createGraph
        this.repository = aiModelRepository
    }
    listQuestions(req:Request,res:Response){
        const {id} =  req.params
        const {answers,status,level,question,questionId} = this.service.getQuestionById(this.graph,id)
        if(status === -1 ) return res.status(404).json({message:'Question not found'})
        return res.status(200).json({results:{answers,question,level,questionId}})
    }
    async listAnswer(req:Request,res:Response){
        const {answers: answersBody} = req.body
        const {answerId,id} =  req.params
        const response = await this.service.getQuestionByAnswerId(answersBody,this.graph,answerId,id,this.repository)
        if(response.status === -1 ) return res.status(404).json({message:'Resource not found'})
        return res.status(200).json({results:response})
    }
}

export default PlaygroundController