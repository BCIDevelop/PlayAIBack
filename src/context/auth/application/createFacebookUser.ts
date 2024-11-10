
import { User } from "../../users/entity/user";
import { UserRepository } from "../../users/entity/user.repository";
import { EncryptAdapter, JWTAdapter } from "../../users/application/adapters";

export const createFacebookUser =async (repository:UserRepository,user:User,bcryptAdapter:EncryptAdapter)=>{
    const record = await repository.getUserByEmail(user.email)
    if(!record) {
       const userRecord = await repository.createUser(user)
       user._id = userRecord._id
    } else user._id=record._id
    return user
}