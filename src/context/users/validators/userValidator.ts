import {celebrator,Segments,Joi} from "celebrate"
import { fileExtensions } from "../../../utils/fileExtension";
import { RequestHandler } from "express";

class UserValidations{
    private celebrate: (schema: object) => RequestHandler;
    constructor(){
        this.celebrate=celebrator({ reqContext:true},{convert:true})
    }
    listRecords(){
        return this.celebrate({
            [Segments.QUERY]:{
                page:Joi.number().integer().default(1),
                per_page:Joi.number().integer().default(10),
            }
        })
    }
    createRecord(){
        const joiCustom=Joi.extend(fileExtensions)
        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                name:Joi.string().required(),
                last_name:Joi.string().required(),
                password:Joi.string().required(),
                email:Joi.string().required(),
                avatar:joiCustom.file().optional()
                
            }),
            
        })
    }
    updateRecord(){
        const joiCustom=Joi.extend(fileExtensions)

        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                name:Joi.string().optional(),
                last_name:Joi.string().optional(),
                password:Joi.string().optional(),
                email:Joi.string().optional(),
                avatar:joiCustom.file().optional()
            }),
        })
    }

    loginUser(){
        return this.celebrate({
            [Segments.BODY]:{
                password:Joi.string().required(),
                email:Joi.string().required(),
            }
        })
    }
    verifyUser(){
        return this.celebrate({
            [Segments.BODY]:{
                token:Joi.string().required(),
            }
        })
    }
}


export default new UserValidations()