import { AIModel } from "./aiModel"

export type AIModelRepository = {
    createAIModel(aiModel:AIModel):Promise<AIModel>,
    deleteAIModelById(id:string):Promise<AIModel | null>
    getAIModels(limit:number,offset:number):Promise<AIModel[] | null>
    updateAIModels(body: Partial<AIModel>,id:string):Promise<AIModel|null>
    countDocuments():Promise<number>,
    getAIModelsByTagName(predicates:{}[],limit:number,offset:number):Promise<AIModel[]|null>,
    getAIModelById(id:string):Promise<AIModel| null> 
}