import { Request, Response, Router } from 'express';
import UserController from './controller';
import { asyncHandler } from '../../utils/asyncHandler';
class UserRouter{
    public router:Router
    constructor(){
        this.router = Router()
    }
    init(){
        return this.router
        .get('/', asyncHandler(this.getAllUsers))
    }
    async getAllUsers(req:Request,res:Response){
        const controller = new UserController()
        controller.getUsers(req,res)
    }
}




export default new UserRouter();