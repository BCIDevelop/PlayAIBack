export type AIModel = {
    name: string,
    dataset:string, // large,medium,small include Processsing needed
    purpose: string, // classification , prediction , clustering
    typeAI : string, // CNN, RNN, FCN(Fully Connected Networks) , ML(Machine Learning Only), Transformers,GAN,Encoders
    tags: string[], // For example Languague Processing, Computer Vision, Image Captioning, etc
    isSupervised : boolean,
    description:string
}