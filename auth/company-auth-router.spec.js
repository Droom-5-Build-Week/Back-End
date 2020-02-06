const request = require('supertest');
const server = require('../api/server.js');
const db = require('../database/db-config.js');

describe('company-auth-router', function () {

    beforeEach(async function () {
        await db('companies').truncate();
    })

    describe('test environment', function () {
        it('should be using test env', function () {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    // tbl.increments();
    // 		tbl.string('email')
    // 			.unique()
    // 			.notNullable();
    // 		tbl.string('password')
    // 			.notNullable();
    // 		tbl.string('name', 150)
    // 			.notNullable();
    // 		tbl.string('location')
    // 			.notNullable()
    // 			.defaultTo("unknown");

    describe('registration', function () {

        it('should return 201 when posting', async function () {
            const company = { email: 'bill@microsoft.com', password: 'fortnight', name: 'Microsoft', location: 'France' }
            await request(server).post('/api/auth/company/register').send(company)
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })

        it('should return user', async function () {
            const company = { email: 'bill@microsoft.com', password: 'fortnight', name: 'Microsoft', location: 'France' }
            await request(server).post('/api/auth/company/register').send(company)
                .then(res => {
                    expect(res.body.name).toBe('Microsoft');
                })
        })
    })

    describe('login', function () {

        it('should return a token', async function () {
            const user = { email: 'Katz@utilzexample.com', password: 'fortnight', name: 'Katz Deli', location: 'London' }
            await request(server).post('/api/auth/register').send(user)
                .then(async res => {
                    const loginUser = { email: 'Katz@utilzexample.com', password: 'fortnight' }
                    await request(server).post('/api/auth/login').send(loginUser)
                        .then(res => {
                            expect(res.body.token).toBe(`${res.body.token}`)
                        })
                })
        })

        it('should return a 201', async function () {
            const user = { email: 'Katz@utilzexample.com', password: 'fortnight', name: 'Katz Deli', location: 'London' }
            await request(server).post('/api/auth/register').send(user)
                .then(async res => {
                    const loginUser = { email: 'Katz@utilzexample.com', password: 'fortnight' }
                    await request(server).post('/api/auth/login').send(loginUser)
                        .then(res => {
                            expect(res.status).toBe(200)
                        })
                })
        })
    })
});