import { Router } from "express";
import { index } from "../controllers/indexRoute.controller.js";


const router = Router();


router.get('/ping',index)


export default router;