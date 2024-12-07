import { AIModelPlaygroundRepository } from "../entity/aiModelPlayground.repository"
import { Graph } from "../entity/graph"

export const getQuestionByAnswerId=async (answersBody:string[],graph:Graph,answerId:string,id:string,repository:AIModelPlaygroundRepository)=>{
    
    const currentNode = graph.getNodeById(id)
    if(!currentNode) return {answers:null,status:-1,level:null,question:null,models:null,questionId:null}
    const nextNodeId = currentNode.navigateNext(answerId)

    if(!nextNodeId) return {answers:null,status:-1,level:null,question:null,models:null,questionId:null}
    const nextNode = graph.getNodeById(nextNodeId)
    const answers = nextNode?.getEdges()
    const question = nextNode?.getQuestion()
    
    
    if(answers?.length === 0) {
        const dictionary:{[index:string]:string} = {
            "1" : "classification",
            "2": "regression",
            "4" : "classification",
            "5":"regression",
            "12": "Image",
            "13": "Text Audio",
            "25": "CNN",
            "26":"RNN",
            "27":"MLP",
            "6":"Image",
            "7":"Text Audio",
            "17": "Generative",
            "20": "CNN",
            "21":"RNN",
            "22":"ML",
            "23":"Transformers",
            "24":"Difussion"
        }
        //solution
        // search models
        let searchCriteris = ""
        answersBody.forEach(element=>{
            if(dictionary[element]) searchCriteris += dictionary[element] + ' '
        })
        console.log(searchCriteris)
        const records = await repository.getAIModelsByRelevance(5,searchCriteris)
        return {answers:[],status:1,level:null,question,models:records,questionId:nextNode?.id}
    }
    const level = graph.getLevel(nextNode!.id)
    return {answers,status:0,level,question,models:null,questionId:nextNode?.id}
}