import { Types } from "mongoose";
import { JWTAdapter } from "../../users/application/adapters";

export  const authFacebook = (jwtAdapter:JWTAdapter,id:Types.ObjectId)=>{
    const accessToken = jwtAdapter.generateToken({id})
    return accessToken
}