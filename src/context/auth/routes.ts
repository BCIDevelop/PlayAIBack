import { NextFunction, Request, Response, Router } from "express";
import AuthController from "./controller";
import { asyncHandler } from "../../utils/asyncHandler";
class AuthRouter{
    private router: Router
    constructor(){
        this.router = Router()
    }
    init(){
        return this.router
        .get("/facebook",asyncHandler(this.facebookOAuthInit))
        .get('/facebook/callback',asyncHandler(this.facebookOAuthCallback))

    }

    async facebookOAuthInit(req:Request,res:Response,next:NextFunction){
        const controller = new AuthController()
        controller.facebookOAuthInit(req,res,next)
    }
    async facebookOAuthCallback(req:Request,res:Response,next:NextFunction){
        const controller = new AuthController()
        controller.facebookOAuthCallback(req,res,next)
    }
}
export default new AuthRouter()