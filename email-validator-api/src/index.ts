import express from "express";
import userRouter from "./routes/user";

const app = express();

app.use(express.json());

app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;


// Solo iniciar el servidor si este archivo es ejecutado directamente
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}


export default app;

