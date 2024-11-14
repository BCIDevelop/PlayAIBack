import { AITagRepository } from "../entity/aitTag.repository";
import { aiTagRepository } from "./repositories/aiTag.mongoose.repository";

type DependenciesTags ={
    aiTagRepository: AITagRepository;
}
export const createTagsDependencies = ():DependenciesTags=>{
    return {
        aiTagRepository: aiTagRepository
    }
}