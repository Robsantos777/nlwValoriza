import { Request,Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";


class CreateComplimentControllers {
  
    async handle(request : Request, response: Response) {
        const { tag_id,user_sender, user_receiver, message} = request.body;
        
        const createComplimentControllers = new CreateComplimentService;
        
        const compliment = await createComplimentControllers.execute({
            tag_id,
            user_sender,
            user_receiver,
            message
        });
        return response.json(compliment);
    }
}

export { CreateComplimentControllers }