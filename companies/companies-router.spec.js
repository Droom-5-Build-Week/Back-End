const request = require('supertest');
const server = require('../api/server.js');
const db = require('../database/db-config.js');

describe('company-router', function () {

    beforeEach(async function () {
        await db('companies').truncate();
    })

    describe('test environment', function () {
        it('should be using test env', function () {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

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

    describe('get all companies works', function () {

        it('should return a 200', async function () {
            await request(server).post('/api/auth/register').send(newCompany)
            await request(server).post('/api/auth/login').send(newCompany)
                .then(async company => {
                    const res = await request(server).get('/api/companies').set('authorization', company.body.token)
                    expect(res.status).toBe(200);
                })
        })
    })

    describe('get company by id works', function () {

        it('should return a 200', async function () {
            await request(server).post('/api/auth/register').send(newCompany)
            await request(server).post('/api/auth/login').send(newCompany)
                .then(async company => {
                    const res = await request(server).get(`api/companies/1`).set('authorization', company.body.token)
                    expect(res.status).toBe(200);
                })
        })
    })

    describe('edit company by id', function () {

        it('should return a 200', async function () {
            await request(server).post('/api/auth/register').send(newCompany)
            await request(server).post('/api/auth/login').send(newCompany)
                .then(async company => {
                    const id = company.body.id;
                    const res = await request(server).put(`api/companies/:id`, newerCompany).set('authorization', company.body.token)
                    expect(res.body.name).toBe("NotMicrosoft");
                })
        })
    })
})
// it('GET all users', async function () {
//     await request(server).post('/api/auth/register').send(user)
//     await request(server).post('/api/auth/login').send(user)
//         .then(async user => {
//             const res = await request(server).get('/api/users').set('authorization', user.body.token)
//             expect(res.status).toBe(200);
//         })
// })