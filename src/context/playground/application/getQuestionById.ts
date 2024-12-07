import { Graph } from "../entity/graph"

export const getQuestionById = (graph:Graph,id:string)=>{
    const currentNode = graph.getNodeById(id)
    if(!currentNode) return {answers:null,status:-1,level:null,question:null,questionId:id}
    const level = graph.getLevel(id)
    const answers = currentNode?.getEdges()
    const question = currentNode?.getQuestion()
    return {level,question,answers,status:0,questionId:id}
}