import { AIModel } from "../../aiModels/entity/aiModel"

export type AIModelPlaygroundRepository = {
  
    getAIModelsByRelevance(limit:number,searchCriteria:string):Promise<AIModel[] | null>
}