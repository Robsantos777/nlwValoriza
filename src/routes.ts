import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUsersControllers";
import { CreateTagController } from "./controllers/CreateTagsControllers";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserControllers";
import { CreateComplimentControllers } from "./controllers/CreateComplimentControllers";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";


const router = Router();


const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentControllers();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated,createComplimentController.handle);



export { router };