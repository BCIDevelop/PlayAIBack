
import { errorType } from '../../utils/errorType';
import { BaseError } from './BaseError';

export class NotActiveError extends BaseError {
    constructor(
        message: string,
        errorType='AuthenticationError',
        status = 401,
        name = 'NotActiveError',
      ) {
        super(message, errorType, status, name);
      }
}