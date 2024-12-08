
import { NextFunction,Request,Response } from 'express'
import * as dependencies from './infrastructure'
import passport from "passport"
import {Strategy}  from 'passport-facebook'
import { User } from '../users/entity/user'
import * as authService from './application'
class AuthController{
    private service
    private repository
    private encrypt
    private jwt
    constructor(){
        const {userRepository,bcryptAdapter,jwtAdapter} = dependencies.createDependencies()
        this.service = authService
        this.repository = userRepository
        this.encrypt = bcryptAdapter
        this.jwt = jwtAdapter
    }
    facebookOAuthInit(req:Request,res:Response,next:NextFunction){
        passport.use(new Strategy({
            clientID: process.env.FACEBOOK_APP_ID!,
            clientSecret: process.env.FACEBOOK_APP_SECRET!,
            callbackURL: `${process.env.SERVER_URL}/auth/facebook/callback`,
            scope: ['public_profile', 'email'] ,
            profileFields: [ 'emails','picture','name']
    
        },async (accessToken:any,refreshToken:any, profile:any,cb:(error:any,body:User|null)=>void)=>{
            try {
                const profile_email =profile.emails[0].value
                const name = profile.name.givenName
                const last_name = profile.name.familyName
                const avatar = profile.photos[0].value ? profile.photos[0].value : null
                const userBody = {name,last_name,avatar,active_status:true,password:"testpassword",email:profile_email} as User 
                const user = await this.service.createFacebookUser(this.repository,userBody,this.encrypt)
                return cb(null,user)
            } catch (error) {
                console.log(error)
               return cb(error,null)
            }
              
            }))
        passport.authenticate('facebook',{ session: false })(req,res,next)
    }
    facebookOAuthCallback(req:Request,res:Response,next:NextFunction){
        passport.authenticate('facebook',{session:false},(err:any,user:User)=>{
            if(err || !user) return res.redirect(`${process.env.CLIENT_URL}/error`)
            const accessToken = this.service.authFacebook(this.jwt,user._id!)
            const {email,_id,avatar,name,last_name} = user
            console.log(avatar)
            const url = avatar 
            ?`${process.env.CLIENT_URL}/auth/success?accessToken=${accessToken}&email=${email}&last_name=${last_name}&name=${name}&id=${_id?.toString()}&avatar=${encodeURIComponent(avatar)}`
            :`${process.env.CLIENT_URL}/auth/success?accessToken=${accessToken}&email=${email}&last_name=${last_name}&name=${name}&id=${_id?.toString()}` 
            return res.redirect(url);
        })(req,res,next)
    }
   
}
export default AuthController