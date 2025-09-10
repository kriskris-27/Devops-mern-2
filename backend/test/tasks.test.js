const request = require('supertest')
const { app, server } = require('../index')
const mongoose = require('mongoose')

describe('GET /api/tasks', () => {
it('should return 200 OK', async () => {
const res = await request(app).get('/api/tasks')
expect(res.statusCode).toBe(200)
})

it('should return array data', async () => {
    const res = await request(app).get('/api/tasks')
    expect(Array.isArray(res.body)).toBe(true)
    })

})

afterAll(async () => {
    await mongoose.connection.close()
    await server.close()

    })