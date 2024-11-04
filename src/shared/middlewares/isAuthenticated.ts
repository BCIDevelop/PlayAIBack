import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import * as adapters from '../adapters'

export interface AuthenticatedRequest extends Request {
    current_user?: string | JwtPayload;
}

export const isAuthenticated=(request:AuthenticatedRequest,response:Response,next:NextFunction):any =>{
    try{
        const {authorization}=request.headers
        if(!authorization) throw new Error("No Authorization headers")
        const accessToken=authorization!.split(" ")[1]
        const {id}=adapters.createJWTAdapter(`${process.env.JWT_SECRET}`).verifyToken(accessToken) as JwtPayload
        request.current_user=id
        return next()
    }
    catch(error:any){
        return response.status(error?.code||403).json({message:error.message})
    }
}