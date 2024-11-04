import { User } from "../entity/user";
import { UserRepository } from "../entity/user.repository";
import { Types } from "mongoose";
export const updateUserDB = async (repository:UserRepository,id:Types.ObjectId,body:Partial<User>)=>{
    return await repository.updateUser(id,body)

}