import mongoose from 'mongoose';

export const tagSchema = new mongoose.Schema({
 
    name: { type: String, required: true },
    description: {type:String,required:true}
  
  },{ versionKey: false });
  
  export const Tags = mongoose.model('Tags', tagSchema);