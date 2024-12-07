import mongoose from 'mongoose';

export const modelSchema = new mongoose.Schema({
 
    name: { type: String, required: true, unique:true},
    dataset:{type:String , required:true}, // large,medium,small include Processsing needed
    purpose:{type:String, required:true}, // classification , prediction , clustering
    typeAI : {type:String,required:true}, // CNN, RNN, FCN(Fully Connected Networks) , ML(Machine Learning Only), Transformers,GAN,Encoders
    tags: [{ type: String }], // For example Languague Processing, Computer Vision, Image Captioning, etc
    isSupervised : {type: Boolean,required:true},
    description:{type:String,required:true}
    
  },{ versionKey: false });
  modelSchema.index({ purpose: "text", tags:"text",typeAI:"text" },{weights:{purpose:1,tags:2,typeAI:1}}); 
  export const Models = mongoose.model('Models', modelSchema);