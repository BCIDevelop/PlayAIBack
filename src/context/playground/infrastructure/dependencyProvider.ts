import { AIModelPlaygroundRepository } from "../entity/aiModelPlayground.repository";
import { aiModelRepository } from "./repositories/aiModel.mongoose.repository";

type DependenciesModelsPlayground ={
    aiModelRepository: AIModelPlaygroundRepository;
}
export const createModelsPlaygroundDependencies = ():DependenciesModelsPlayground=>{
    return {
        aiModelRepository:aiModelRepository
    }
}