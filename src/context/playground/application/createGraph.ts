import { Answer, Graph, NodeQuestion } from "../entity/graph"


const createGraph=()=>{
    const startNode = new NodeQuestion('Do you know your purpose of your model?','1',[new Answer('1','Classification','2'),new Answer('2','Regression','3'),new Answer('3','Dont Know','4')])
    const graph = new Graph(startNode)
    const question4 = new NodeQuestion('Please tell me what type of data is your target variable','4',[new Answer('4','Discrete','2'),new Answer('5','Continous','3')]) 
    graph.addNode(question4)

    /*Regression  */
    const question3 = new NodeQuestion('What do you want to predict','3',[new Answer('12','Based on images data','25'),new Answer('13','Based on sequential data','26'),new Answer('14','Other predictions','6')])
    graph.addNode(question3)

    const question6 = new NodeQuestion('What large is your available dataset?','6',[new Answer('15','Medium','22'),new Answer('16','Large','27')])
    graph.addNode(question6)
    
    
    
    /* Solutions */

    const solution6 = new NodeQuestion('CNN- Convolution can be used also from Regression, make sure to change the ouput layer ','25',[])
    graph.addNode(solution6)

    const solution7 = new NodeQuestion('RNN- Recurrent can be used also from Regression, make sure to change the ouput layer','26',[])
    graph.addNode(solution7)

    const solution8 = new NodeQuestion('Fully Connected Multi Layer Perceptron','27',[])
    graph.addNode(solution8)

   
   
    /* Classification */
    const question2 = new NodeQuestion('What object you want to classify','2',[new Answer('6','Images','7'),new Answer('7','Audio/Text','5'),new Answer('8','Other','5')]) 
    graph.addNode(question2)

    const question7 = new NodeQuestion('Is for generation purposes?','7',[new Answer('17','Yes','24'),new Answer('18','No','5')]) 
    graph.addNode(question7)
    
    /* Image can be diveide in genrative or other same for text */
    const question8 = new NodeQuestion('What large is your available dataset?','8',[new Answer('9','Small','22'),new Answer('10','Medium','21'),new Answer('11','Large','23')])
    graph.addNode(question8)

    /* Image can be diveide in genrative or other same for text */
    const question5 = new NodeQuestion('What large is your available dataset?','5',[new Answer('9','Small','22'),new Answer('10','Medium','20'),new Answer('11','Large','20')])
    graph.addNode(question5)
    

    
    /* Solutions */
    const solution1 = new NodeQuestion('CNN','20',[])
    graph.addNode(solution1)
    const solution2 = new NodeQuestion('RNN','21',[])
    graph.addNode(solution2)

    const solution3 = new NodeQuestion('Machine Learning','22',[])
    graph.addNode(solution3)

    const solution4 = new NodeQuestion('Transformers','23',[])
    graph.addNode(solution4)

    const solution5 = new NodeQuestion('Generative/Difussion Models','24',[])
    graph.addNode(solution5)


  
    return graph

}
export default createGraph()