import { UserRepository } from '../../entity/user.repository';
import { Users } from '../../../../mongoose';
import { User } from '../../entity/user';

export const userMongooseRepository: UserRepository = {
    createUser: async (user: User) => {
      const record =new Users(user)
      await record.save();
      const { password, ...userWithoutPassword } = record.toObject();
      return userWithoutPassword;
    },
    getUserById: async (id) => {
      return await Users.findOne({ _id: id}).select('-password');
    },
    getAllUsers: async (limit,offset) => {
      return await Users.find().select('-password').skip(offset).limit(limit);
    },
    deleteUserById:async(id)=>{
        return await Users.findOneAndDelete({_id:id})
    },
    updateUser:async(id,body)=>{
       return await Users.findOneAndUpdate({_id:id},body,{new:true})
    },
    getUserByEmail:async(email)=>{
      return await Users.findOne({email});
   },
   countDocuments:async()=>{
      return await Users.countDocuments()
   }
    
  };