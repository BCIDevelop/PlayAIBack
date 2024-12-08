import { errorStatus } from '../../utils/errorType';
import { BaseError } from './BaseError';

export class AuthenticationError extends BaseError {
  constructor(name = 'AuthenticationError') {
    super("Not Authorized", name, errorStatus.UNAUTHORIZED);
  }
}