import request from 'supertest';
import app from './index';

describe('GET /ping', () => {
    it('debería devolver { status: "ok" }', async () => {
        const res = await request(app).get('/ping');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ status: 'ok' });
    });

    it('debería devolver { status: "hello, Pepito" } cuando name=Pepito', async () => {
        const res = await request(app).get('/ping?name=Pepito');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ status: 'hello, Pepito' });
    });
}); 