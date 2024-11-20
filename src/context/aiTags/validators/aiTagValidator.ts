import {celebrator,Segments,Joi} from "celebrate"
import { RequestHandler } from "express";

class AITagValidator{
    private celebrate: (schema: object) => RequestHandler;
    constructor(){
        this.celebrate=celebrator({ reqContext:true},{convert:true})
    }
   
    createRecord(){
        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                name:Joi.string().required(),
                description:Joi.string().required(),
                applications:Joi.array().required()
                   
            }), 
        })
    }
    getRecordByName(){
        return this.celebrate({
            [Segments.PARAMS]:Joi.object().keys({
                name:Joi.string().required(),         
            }), 
        })
    }

}

export default new AITagValidator()