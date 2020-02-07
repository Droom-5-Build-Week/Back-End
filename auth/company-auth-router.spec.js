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

    ///this

    describe('registration', function () {

        it('should return 201 when posting', async function () {
            const company = { email: 'bill@microsoft.com', password: 'fortnight', name: 'Microsoft', location: 'France' }
            await request(server).post('/api/auth/company/register').send(company)
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })

        it('should return company', async function () {
            const company = { email: 'bill@microsoft.com', password: 'fortnight', name: 'Microsoft', location: 'France' }
            await request(server).post('/api/auth/company/register').send(company)
                .then(res => {
                    expect(res.body.name).toBe('Microsoft');
                })
        })
    })

    describe('login', function () {

        it('should return a token', async function () {
            const company = { email: 'bill@microsoft.com', password: 'fortnight', name: 'Microsoft', location: 'France' }
            await request(server).post('/api/auth/company/register').send(company)
                .then(async res => {
                    const loginCompany = { email: 'bill@microsoft.com', password: 'fortnight' }
                    await request(server).post('/api/auth/company/login').send(loginCompany)
                        .then(res => {
                            expect(res.body.token).toBe(`${res.body.token}`)
                        })
                })
        })

        it('should return a 201', async function () {
            const company = { email: 'bill@microsoft.com', password: 'fortnight', name: 'Microsoft', location: 'France' }
            await request(server).post('/api/auth/company/register').send(company)
                .then(async res => {
                    const loginCompany = { email: 'bill@microsoft.com', password: 'fortnight' }
                    await request(server).post('/api/auth/company/login').send(loginCompany)
                        .then(res => {
                            expect(res.status).toBe(200)
                        })
                })
        })

        it('should return a 400', async function () {
            const company = { email: 'bill@microsoft.com', password: 'fortnight', name: 'Microsoft', location: 'France' }
            await request(server).post('/api/auth/company/register').send(company)
                .then(async res => {
                    const loginCompany = { email: 'paul@microsoft.com', password: 'github' }
                    await request(server).post('/api/auth/company/login').send(loginCompany)
                        .then(res => {
                            expect(res.status).toBe(400)
                        })
                })
        })

        it('should return a 401 for wrong password', async function () {
            const company = { email: 'bill@microsoft.com', password: 'fortnight', name: 'Microsoft', location: 'France' }
            await request(server).post('/api/auth/company/register').send(company)
                .then(async res => {
                    const loginCompany = { email: 'bill@microsoft.com', password: 'github' }
                    await request(server).post('/api/auth/company/login').send(loginCompany)
                        .then(res => {
                            expect(res.status).toBe(401)
                        })
                })
        })
    })
});