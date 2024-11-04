import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  avatar:{ type: String, required: false },
  active_status:{type: Boolean, default: false}
},{ versionKey: false });

export const Users = mongoose.model('Users', userSchema);