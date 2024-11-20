import { AIModelRepository } from "../entity/aiModel.repository";

export const getAIModelsByTagName =async (repository:AIModelRepository,query:{[index:string]:string},limit:number,offset:number)=>{
     const predicates = []
     for (const [key, value] of Object.entries(query)) {
          const arrayObjective = value.split(',')
          if(key==='tags') {
               
               predicates.push({tags: { $elemMatch: { $in: arrayObjective} }})
          }
          else {
               predicates.push({[key]:{$in:arrayObjective}})
          }
     }
     const records = await repository.getAIModelsByTagName(predicates,limit,offset)
     const count = await repository.countDocuments()
     return {records,count}
}