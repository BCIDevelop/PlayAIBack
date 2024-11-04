import { Request, Response, Router } from 'express';
import UserController from './controller';
import { asyncHandler } from '../../utils/asyncHandler';
import { isAuthenticated } from '../../shared/middlewares/isAuthenticated';
import userValidator from './validators/userValidator';
import sharedValidator from '../../shared/validators/sharedValidator';
class UserRouter{
    public router:Router
    constructor(){
        this.router = Router()
    }
    init(){
        return this.router
        .get('/',userValidator.listRecords(),asyncHandler(this.getAllUsers))
        .patch('/verifyAccount',userValidator.verifyUser(),asyncHandler(this.verifyUser))
        .get('/:id',sharedValidator.record(),asyncHandler(this.getUserById))
        .post('/',userValidator.createRecord(),asyncHandler(this.createUser))
        .delete('/:id',sharedValidator.record(),asyncHandler(this.deleteUserById))
        .patch('/:id',isAuthenticated,sharedValidator.record(),userValidator.updateRecord(),asyncHandler(this.updateUser))
        .post('/login',userValidator.loginUser(),asyncHandler(this.loginUser))
        .post('/signUp',userValidator.createRecord(),asyncHandler(this.signUp))
    }
    async getAllUsers(req:Request,res:Response){
        const controller = new UserController()
        await controller.getUsers(req,res)
    }
    async getUserById(req:Request,res:Response){
        const controller = new UserController()
        await controller.getUsersById(req,res)
    }
    async createUser (req:Request,res:Response){
        const controller = new UserController()
        await controller.createUser(req,res)
    }
    async deleteUserById (req:Request,res:Response){
        const controller = new UserController()
        await controller.deleteUser(req,res)
    }

    async updateUser(req:Request,res:Response){
        const controller = new UserController()
        await controller.updateUser(req,res)
    }
    async loginUser(req:Request,res:Response){
        const controller = new UserController()
        await controller.loginUser(req,res)
    }
    async signUp(req:Request,res:Response){
        const controller = new UserController()
        await controller.signUp(req,res)
    }
    async verifyUser(req:Request,res:Response){
        const controller = new UserController()
        await controller.verifyUser(req,res)
    }
}




export default new UserRouter();