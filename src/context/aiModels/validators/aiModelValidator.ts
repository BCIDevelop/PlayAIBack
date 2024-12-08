import {celebrator,Segments,Joi} from "celebrate"
import { RequestHandler } from "express";

class AIModelValidator{
    private celebrate: (schema: object) => RequestHandler;
    constructor(){
        this.celebrate=celebrator({ reqContext:true},{convert:true})
    }
    
    listRecordByTagName(){
        return this.celebrate({
            [Segments.QUERY]:Joi.object().keys({
                page:Joi.number().integer().default(1),
                per_page:Joi.number().integer().default(10),
                tags: Joi.string().optional(),
                typeAI: Joi.string().optional(),
            }), 
        })
    }
    createRecord(){
        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                name:Joi.string().required(),
                dataset:Joi.string().required(),
                purpose:Joi.string().required(),
                typeAI:Joi.string().required(),
                tags:Joi.array().required(),
                isSupervised:Joi.boolean().required(),
                description:Joi.string().required()
            }), 
        })
    }
    
    updateRecord(){
        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                name:Joi.string().optional(),
                dataset:Joi.string().optional(),
                purpose:Joi.string().optional(),
                typeAI:Joi.string().optional(),
                tags:Joi.array().optional(),
                isSupervised:Joi.boolean().optional()    
            }), 
        })
    }
    

}

export default new AIModelValidator()