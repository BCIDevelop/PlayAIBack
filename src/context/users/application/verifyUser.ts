import { JwtPayload } from "jsonwebtoken";
import { UserRepository } from "../entity/user.repository";
import { JWTAdapter } from "./adapters";
import { NotFound } from "../../../shared/errors";
import { Types } from "mongoose";

export const verifyUserDB = async (repository:UserRepository,jwtAdapter:JWTAdapter,token:string)=>{
    console.log(token)
    const {email} = jwtAdapter.verifyToken(token) as JwtPayload
    const record = await repository.getUserByEmail(email as string)
    console.log(record)
    if(!record) throw new NotFound("User not found")
    await repository.updateUser(record._id as Types.ObjectId,{active_status:true})
}