import { AIModelRepository } from "../entity/aiModel.repository";
import { aiModelRepository } from "./repositories/aiModel.mongoose.repository";

type DependenciesModels ={
    aiModelRepository: AIModelRepository;
}
export const createTagsDependencies = ():DependenciesModels=>{
    return {
        aiModelRepository:aiModelRepository
    }
}