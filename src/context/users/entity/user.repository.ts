import { Types } from 'mongoose';
import { User, UserInput } from './user';

export interface UserRepository {
  createUser(user: User): Promise<Omit<User,'password'>>;
  getUserById(id: string): Promise<User | null>;
  getAllUsers():Promise<User[] | null>
  deleteUserById(id:string):Promise<User|null>
  updateUser(id:Types.ObjectId,body:Partial<User>):Promise<User | null>
  getUserByEmail(email:string):Promise<User|null>
}