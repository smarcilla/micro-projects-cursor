// define ruta de registro de usuario que use el middleware de validación de email.

import { Router } from "express";
import emailValidator from "../middleware/email-validator";

const router = Router();

router.post("/register", emailValidator, (req, res) => {
    const { email } = req.body;
    res.status(200).json({ message: "User registered successfully" });
});

// exportar la ruta.
export default router;


