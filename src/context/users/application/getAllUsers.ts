import { UserRepository } from "../entity/user.repository";

export const getAllUsers =async (repository:UserRepository,limit:number,offset:number)=>{
    const records =  await repository.getAllUsers(limit,offset)
    const counts = await repository.countDocuments()
    return {records,counts}
}

