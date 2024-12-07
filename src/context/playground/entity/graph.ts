export class Graph {
    private nodes: Map<string, NodeQuestion>
    private startNode: NodeQuestion

    constructor(startNode: NodeQuestion) {
        this.nodes = new Map()
        this.startNode = startNode
        this.addNode(startNode)
    }

    addNode(node: NodeQuestion): void {
        this.nodes.set(node.id, node)
    }

    getNodeById(id: string): NodeQuestion | undefined {
        return this.nodes.get(id)
    }

    getStartNode(): NodeQuestion {
        return this.startNode
    }
    getLevel(target: string): number {
       
        const queue: { node: NodeQuestion; depth: number }[] = [{ node: this.startNode, depth: 1 }];
        const visited = new Set<string>()
    
        while (queue.length > 0) {
            const { node, depth } = queue.shift()!
            visited.add(node.id)
            
            if (node.id === target)  return depth
    
            for (const edge of node.getEdges()) {
                const nextNodeId = node.navigateNext(edge.answer_id)
                if (nextNodeId && !visited.has(nextNodeId)) {
                    const nextNode = this.getNodeById(nextNodeId)
                    if (nextNode)   queue.push({ node: nextNode, depth: depth + 1 })     
                }
            }
        }
    
        return -1; // Retorna -1 si no encuentra el nodo
    }
    
}

export class Answer {
    public answer_id: string
    private answer: string
    public to: string

    constructor(id: string, answer: string, to: string) {
        this.answer_id = id
        this.answer = answer
        this.to = to
    }

    getAnswer(): string {
        return this.answer
    }
}

export class NodeQuestion {
    private edges: Answer[]
    public id: string
    private question: string

    constructor(question: string, id: string, edges: Answer[] = []) {
        this.id = id
        this.edges = edges
        this.question = question
    }

    navigateNext(id: string): string | null {
        const edge = this.edges.find(edge => edge.answer_id === id)
        return edge ? edge.to : null
    }

    addEdge(edge: Answer): void {
        this.edges.push(edge)
    }

    getQuestion(): string {
        return this.question
    }
    getEdges(){
        return this.edges
    }
}