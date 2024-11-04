import { UserRepository } from "../entity/user.repository";

export const getAllUsers =async (repository:UserRepository)=>{
    return await repository.getAllUsers()
}

