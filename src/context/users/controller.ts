import { Request, Response } from "express";
import * as userService from './application'
import * as dependencies from './infrastructure'
import { AuthenticatedRequest } from "../../shared/middlewares/isAuthenticated";
import { Types } from "mongoose";

class UserController{
    public service
    public repository
    public mailServer
    public encrypt
    public jwt
    constructor(){
        const { userRepository, bcryptAdapter, jwtAdapter, mailerService } =  dependencies.createDependencies();
        this.service = userService
        this.repository = userRepository
        this.mailServer = mailerService
        this.encrypt = bcryptAdapter
        this.jwt = jwtAdapter
    }
    async getUsers(req:Request,res:Response){
        const records =await this.service.getAllUsers(this.repository)
        return res.status(200).json(records)
    }
    async createUser(req:Request,res:Response){
        const record = await this.service.createUserDB(this.encrypt,req.body,this.repository)
        return res.status(201).json(record)
    }
    async getUsersById(req:Request,res:Response){
        const {id} = req.params
        const record = await this.service.getUserByIdDB(this.repository,id as string)
        return res.status(200).json(record)
    }
    async deleteUser(req:Request, res:Response){
        const {id} = req.params
        await this.service.deleteUserDB(this.repository,id as string)
        return res.status(204).json()
    }
    async updateUser(req:AuthenticatedRequest,res:Response){
        const id  = req.current_user
        const record = await this.service.updateUserDB(this.repository,id as Types.ObjectId,req.body)
        return res.status(200).json(record)
    }
    async loginUser(req:Request, res:Response){
        const access_token = await this.service.loginUserDB(this.repository,req.body,this.encrypt,this.jwt)
        return res.status(200).json({access_token})
    }
    async signUp(req:Request, res:Response){
        await this.service.signUpUserDB(this.repository,req.body,this.encrypt,this.mailServer,this.jwt)
        return res.status(204).json({})
    }
    async verifyUser(req:Request,res:Response){
        await this.service.verifyUserDB(this.repository,this.jwt,req.body.token)
        return res.status(204).json({})
    }
}

export default UserController