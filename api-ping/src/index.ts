import express, { Request, Response } from 'express';

// Crear una instancia de Express 
const app = express();

// Definir un endpoint /ping que responda con { status: "ok" }
app.get('/ping', (req: Request, res: Response) => {
    const name = req.query.name;
    if (name) {
        res.json({ status: `hello, ${name}` });
    } else {
        res.json({ status: "ok" });
    }
});

// Solo iniciar el servidor si este archivo es ejecutado directamente
if (require.main === module) {
    app.listen(3000, () => {
        console.log('Servidor escuchando en el puerto 3000');
    });
}

export default app;

// Para ejecutar el servidor:
// 1. Instalar dependencias: npm install
// 2. Ejecutar: npm run dev
// 3. Probar en: http://localhost:3000/ping

