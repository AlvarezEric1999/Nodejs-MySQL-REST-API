import { Router } from "express";
import { DeleteEmployees, PostEmployees, PutEmployees, getEmploye, getEmployees } from "../controllers/employees.controllers.js";


const router = Router()

router.get('/employes',getEmployees)

router.post('/employes',PostEmployees )

router.get('/employes/:id',getEmploye)

router.put('/employes/:id',PutEmployees)

router.delete('/employes/:id',DeleteEmployees)

export default router;

