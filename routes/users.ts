import {Express, Request, Response, NextFunction, Router} from 'express';
import user_controllers from "../controllers/users";

const router:Router = Router();

//routers for Users
router.get("/users",user_controllers.getUsers);

export default router