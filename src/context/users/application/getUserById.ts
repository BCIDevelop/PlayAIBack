import { UserRepository } from "../entity/user.repository"

export const getUserByIdDB = async (repository:UserRepository,id:string)=>{
    return await repository.getUserById(id)
}