import { AuthenticationError,NotFound } from "../../../shared/errors"
import { UserInput } from "../entity/user";
import { UserRepository } from "../entity/user.repository";
import { EncryptAdapter, JWTAdapter } from "./adapters";
export const loginUserDB = async (repository:UserRepository,userInput:UserInput, bcryptAdapter:EncryptAdapter,jwtAdapter:JWTAdapter)=>{
    const record = await repository.getUserByEmail(userInput.email)
    if(!record) throw new NotFound("Bad User")
    const verify = await bcryptAdapter.compare(userInput.password,record.password)
    if(!verify) throw new AuthenticationError()
    return jwtAdapter.generateToken({id:record._id})
}