import { errorStatus, errorType } from "../../utils/errorType";
import { BaseError } from "./BaseError";
export class NotFound extends BaseError{
    constructor(message:string){
        super(message,errorType.NOT_FOUND,errorStatus.NOT_FOUND,"NotFound")
    }
}
