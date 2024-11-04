import { EncryptAdapter, JWTAdapter, MailerAdapter } from "../application/adapters";
import { UserRepository } from "../entity/user.repository";
import { createBcryptAdapter, createJWTAdapter,createMailerAdapter } from "./adapters";
import { userMongooseRepository } from "./repositories/user.mongoose.repository";



type Dependencies ={
    bcryptAdapter: EncryptAdapter;
    jwtAdapter: JWTAdapter;
    userRepository: UserRepository;
    mailerService: MailerAdapter;
}

export const createDependencies = ():Dependencies=>{
    const bcryptAdapter = createBcryptAdapter(10);
    const jwtAdapter = createJWTAdapter(`${process.env.JWT_SECRET}`, '1h');
    const mailerService = createMailerAdapter();

    return {
        bcryptAdapter,
        jwtAdapter,
        userRepository: userMongooseRepository,
        mailerService,
    }
}