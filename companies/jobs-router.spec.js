const request = require('supertest');
const server = require('../api/server.js');
const db = require('../database/db-config.js');

describe('jobs-router', function () {

    beforeEach(async function () {
        await db('jobs').truncate();
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

    // tbl.string('position_name').notNullable();
    // 		tbl.string('type').notNullable();
    // 		tbl.string('job_bio').notNullable();
    // 		tbl.string('duration').notNullable();
    // 		tbl.string('skills').notNullable();
    // 		tbl.integer('company_id')

    const newJob = {
        position_name: "Chef",
        type: "Food",
        job_bio: "Cook food for the king and queen!",
        duration: "Full-time",
        skills: "cooking, food prep, cleaning"
    }

    const newerJob = {
        position_name: "Chef",
        type: "Food",
        job_bio: "Cook food for the king and queen!",
        duration: "Part-time",
        skills: "cooking, food prep, cleaning",
    }

    describe('get all jobs for a company', function () {

        it('should return a 200', async function () {
            await request(server).post('/api/auth/company/register').send(newCompany)
            await request(server).post('/api/auth/company/login').send(newCompany)
                .then(async company => {
                    const id = company.body.id
                    const res = await request(server).get(`/api/companies/${id}/jobs`).set('authorization', company.body.token)
                    expect(res.status).toBe(200);
                })
        })
    })

    describe('post a job works', function () {

        it('should return a 201', async function () {
            await request(server).post('/api/auth/company/register').send(newCompany)
            await request(server).post('/api/auth/company/login').send(newCompany)
                .then(async company => {
                    const id = company.body.id;
                    const res = await request(server).post(`/api/companies/${id}/jobs`).set('authorization', company.body.token).send(newJob)
                    expect(res.status).toBe(201);
                })
        })
    })

    //change

    describe('get job for company by id', function () {

        it('should return a 200', async function () {
            await request(server).post('/api/auth/company/register').send(newCompany)
            await request(server).post('/api/auth/company/login').send(newCompany)
                .then(async company => {
                    const id = company.id;
                    const token = company.body.token;
                    const res = await request(server).post(`/api/companies/${id}/jobs`).set('authorization', token).send(newJob)
                        .then(async job => {
                            console.log(job.body)
                            const job_id = job.body.id;
                            const res = await request(server).get(`/api/companies/${id}/jobs/${job_id}`).set('authorization', token)
                            expect(res.status).toBe(200)
                        })
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