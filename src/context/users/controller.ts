import { Request, Response } from "express";

class UserController{

    getUsers(req:Request,res:Response){
        return res.status(200).json({message:"Helloworld"})
    }
}

export default UserController