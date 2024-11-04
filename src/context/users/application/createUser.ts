import { UserRepository } from "../entity/user.repository";
import { User } from "../entity/user";
import { EncryptAdapter } from "./adapters";
export const createUserDB=async (jwtAdapter:EncryptAdapter,user:User,repository:UserRepository)=>{
    const {password} = user
    const hashed_password = await jwtAdapter.hash(password)
    user.password = hashed_password
    return await repository.createUser(user)
}