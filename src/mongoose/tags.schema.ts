import mongoose from 'mongoose';

export const tagSchema = new mongoose.Schema({
 
    name: { type: String, required: true,unique:true },
    description: {type:String,required:true},
    applications: [{ type: String }],
  
  },{ versionKey: false });
  
  export const Tags = mongoose.model('Tags', tagSchema);