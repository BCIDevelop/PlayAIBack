import { celebrator, Segments, Joi } from "celebrate";
import { RequestHandler } from "express";

class SharedValidator {
    private celebrate: (schema: object) => RequestHandler;
    
    constructor() {
        this.celebrate = celebrator({ reqContext: true }, { convert: true });
    }

    record() {
        return this.celebrate({
            [Segments.PARAMS]: {
                id: Joi.string()
                    .length(24) 
                    .hex()      
                    .required(),
            },
        });
    }
}
export default new SharedValidator()