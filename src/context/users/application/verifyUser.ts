import { JwtPayload } from "jsonwebtoken";
import { UserRepository } from "../entity/user.repository";
import { JWTAdapter } from "./adapters";
import { NotFound } from "../../../shared/errors";
import { Types } from "mongoose";

export const verifyUserDB = async (repository:UserRepository,jwtAdapter:JWTAdapter,token:string)=>{
    const {email} = jwtAdapter.verifyToken(token) as JwtPayload
    const record = await repository.getUserByEmail(email as string)
    if(!record) throw new NotFound("User not found")
    repository.updateUser(record._id as Types.ObjectId,{active_status:true})
}