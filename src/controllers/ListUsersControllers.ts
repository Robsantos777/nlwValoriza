import { Request,Response } from "express";
import { ListUsersService } from "../services/ListUsersService";


class ListUserController {
  
    async handle(request : Request, response: Response) {

        const { user_id } = request;
        
        const listUserService = new ListUsersService();
        
        const users = await listUserService.execute();
        return response.json(users);
    }
}

export { ListUserController }