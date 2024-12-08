import { NextFunction, Request, Response } from "express";

export const decodeQuery =(req:Request,res:Response,next:NextFunction)=>{
    const rawQuery = req.originalUrl.split("?")[1]
    if(rawQuery){
        const decodedQuery = decodeURIComponent(rawQuery)
        const queryParams = Object.fromEntries(new URLSearchParams(decodedQuery));
        req.query = queryParams as Record<string, string>;

    }
    next()
    
}