import { EncryptAdapter, JWTAdapter } from "../../users/application/adapters";
import { UserRepository } from "../../users/entity/user.repository";
import { createBcryptAdapter, createJWTAdapter } from "./adapters";
import { userMongooseRepository } from "../../users/infrastructure/repositories/user.mongoose.repository";


type DependenciesAuth ={
    userRepository: UserRepository;
    bcryptAdapter: EncryptAdapter;
    jwtAdapter:JWTAdapter
}

export const createDependencies = ():DependenciesAuth=>{
    const bcryptAdapter = createBcryptAdapter(10);
    const jwtAdapter = createJWTAdapter(`${process.env.JWT_SECRET}`, '1h')
    return {
        userRepository: userMongooseRepository,
        bcryptAdapter,
        jwtAdapter
    }
}