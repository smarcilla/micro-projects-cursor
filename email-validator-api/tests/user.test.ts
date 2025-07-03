// testea la ruta de registro de usuario.

import request from "supertest";
import app from "../src/index";

describe("POST /user/register", () => {
    it("should return 400 if email is invalid", async () => {
        const response = await request(app).post("/user/register").send({ email: "invalid_email" });
        expect(response.status).toBe(400);
    });

    it("should return 200 if email is valid", async () => {
        const response = await request(app).post("/user/register").send({ email: "valid@email.com" });
        expect(response.status).toBe(200);
    });


    it("should return 400 if email is not provided", async () => {
        const response = await request(app).post("/user/register").send({});
        expect(response.status).toBe(400);
    });
    
});