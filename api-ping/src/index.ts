import express, { Request, Response } from 'express';

// Crear una instancia de Express 

const app = express();

// Definir un endpoint /ping que responda con { status: "ok" }

// Añadir la lógica del query param en `src/index.ts`.
app.get('/ping', (req: Request, res: Response) => {
    const name = req.query.name;
    if (name) {
        res.json({ status: `hello, ${name}` });
    } else {
        res.json({ status: "ok" });
    }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

// Para ejecutar el servidor:
// 1. Instalar dependencias: npm install
// 2. Ejecutar: npm run dev
// 3. Probar en: http://localhost:3000/ping

