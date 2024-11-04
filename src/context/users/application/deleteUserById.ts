import { UserRepository } from "../entity/user.repository";

export const deleteUserDB =async (repository:UserRepository,id:string)=>{
    await repository.deleteUserById(id)
}