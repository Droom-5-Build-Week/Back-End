const request = require('supertest');
const server = require('../api/server.js');
const db = require('../database/db-config.js');

describe('company-router', function () {

        const newCompany = {
        email: "bill@microsoft.com",
        password: "bill",
        name: "Microsoft",
        location: "USA"
    }

    const newerCompany = {
        email: "bill@microsoft.com",
        password: "bill",
        name: "NotMicrosoft",
        location: "USA"
    }

    beforeEach(async function () {
        await db('companies').truncate();
    })

    describe('test environment', function () {
        it('should be using test env', function () {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    describe('/api/companies', function () {

        it('GET all companies and return a 200', async function () {
            await request(server).post('/api/auth/company/register').send(newCompany)
            await request(server).post('/api/auth/company/login').send(newCompany)
                .then(async company => {
                    const res = await request(server).get('/api/companies')
                        .set('authorization', company.body.token)
                    expect(res.status).toBe(200);
                })
        })

        it('status code 401 to get because not setting token', async function () {
            await request(server).post('/api/auth/company/register').send(newCompany)
            await request(server).post('/api/auth/company/login').send(newCompany)
                .then(async user => {
                    const res = await request(server).get('/api/companies')
                    expect(res.status).toBe(401);
                })
        })
    })

    describe('/api/companies/:id', function () {

        it('Get company by id', async function () {
            await request(server).post('/api/auth/company/register').send(newCompany)
            await request(server).post('/api/auth/company/login').send(newCompany)
                .then(async company => {
                    const res = await request(server).get('/api/companies/1')
                        .set('authorization', company.body.token)
                    expect(res.status).toBe(200);
                })
        })

        it('Put company by id', async function () {
            await request(server).post('/api/auth/company/register').send(newCompany)
            await request(server).post('/api/auth/company/login').send(newCompany)
                .then(async company => {
                    const res = await request(server)
                        .put('/api/companies/1')
                        .set('authorization', company.body.token)
                        .send({'name': 'Melinda Gates Foundation'})
                    expect(res.status).toBe(201);
                })
        })

        it('Delete company by id', async function () {
            await request(server).post('/api/auth/company/register').send(newCompany)
            await request(server).post('/api/auth/company/login').send(newCompany)
                .then(async company => {
                    const res = await request(server)
                        .delete('/api/companies/1')
                        .set('authorization', company.body.token)
                    expect(res.body.message).toBe('Company successfully deleted');
                })
        })

    })

})