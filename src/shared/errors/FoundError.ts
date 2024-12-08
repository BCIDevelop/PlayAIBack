import { errorStatus, errorType } from "../../utils/errorType"
import { BaseError } from "./BaseError"

export class FoundError extends BaseError{
    constructor(message:string){
        super(message,errorType.BAD_REQUEST,errorStatus.BAD_REQUEST,"FoundError")
    }
}