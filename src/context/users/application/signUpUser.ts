import { FoundError } from "../../../shared/errors";
import { validatePassword } from "../../../utils/validateRequest";
import { User } from "../entity/user";
import { UserRepository } from "../entity/user.repository";
import { EncryptAdapter, JWTAdapter, MailerAdapter } from "./adapters";

export const signUpUserDB=async (repository:UserRepository,userInput:User,bcryptAdapter:EncryptAdapter,mailAdapter:MailerAdapter,jwtAdapter:JWTAdapter)=>{
    const {email,password} = userInput
    const record = await repository.getUserByEmail(email)
    const {valid} = validatePassword(password)
    if(record || !valid) throw new FoundError("Review your data")
    const token = jwtAdapter.generateToken({email})
    await mailAdapter.send(email,"Please confirm you account",`Confirm you account : <button> <a href='${process.env.CLIENT_URL}/confirm?token=${token}'>Confirm account</a> </button>`)
    const hashed_password = await bcryptAdapter.hash(password)   
    userInput.password = hashed_password
    await repository.createUser(userInput)  
    
}