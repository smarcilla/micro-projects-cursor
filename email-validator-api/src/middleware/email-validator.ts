// Middleware para validar el email.



import { Request, Response, NextFunction } from "express";

const emailValidator = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: "Email is required" });
        return;
    }

    // Expresión regular básica para validar emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({ error: "Invalid email format" });
        return;
    }

    next();
};

// Exportar el middleware
export default emailValidator;