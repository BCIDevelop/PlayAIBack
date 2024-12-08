import { AIModelPlaygroundRepository } from "../../entity/aiModelPlayground.repository";
import { Models } from "../../../../mongoose/models.schema";

export const aiModelRepository:AIModelPlaygroundRepository= {
    getAIModelsByRelevance:async (limit,searchCriteria) => {
       const records = Models.find({ $text: { $search: searchCriteria } },{ name:1,_id:0,score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } }).limit(limit)
       return records
    }
}