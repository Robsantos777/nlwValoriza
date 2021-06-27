import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({email,password} : IAuthenticateRequest) {
       const usersRepository = getCustomRepository(UsersRepositories);


       const user = await usersRepository.findOne({
           email
       });

       if (!user) {
           throw new Error("Email ou Senha incorretos!");
       }

       const passwordMatch = await compare(password, user.password);

       if(!passwordMatch){
        throw new Error("Email ou Senha incorretos!");
       }
 
       const token = sign({
           email: user.email
       }, "4e6fed44ed98ba9086d63834d08f97c6",{
           subject: user.id,
           expiresIn: "1d"
       });

       return token;
    }
}

export { AuthenticateUserService }