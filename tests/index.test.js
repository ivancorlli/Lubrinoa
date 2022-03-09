const app  = require('../app')
const request  = require('supertest')


describe('GET /', ()=>{
    test('solo devolver algo',async()=>{
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200)
    })
})