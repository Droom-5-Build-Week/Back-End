const router = require('express').Router();

const Jobs = require('./jobs-model.js');
const Companies = require('./companies-model.js')
const restricted = require('../auth/restricted-middleware.js');

router.get('/:company_id/jobs', (req, res) => {
    const { company_id } = req.params;
    Companies.findById(company_id)
        .then(company => {
            if(company.id == company_id) {
                Jobs.find(company_id)
                    .then(jobs => {
                        res.status(200).json(jobs)
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: "Could not find jobs" });
                    })
            } else {
                res.status(404).json({ message: 'Company does not exist, means no jobs' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not retrieve company to find the jobs' });
        })
});

router.get('/:company_id/jobs/:id', (req, res) => {
    const { company_id, id } = req.params;
    Companies.findById(company_id)
        .then(company => {
            if(company.id == company_id) {
                Jobs.findByIdInCompany(id, company_id)
                    .then(job => {
                        if(job == undefined) {
                            res.status(404).json({ message: "Job does not exist in this company" });
                        } else {
                            res.status(200).json(job)
                        }
                    })
                    .catch(err => {
                        res.status(500).json({ message: "Could not find jobs" });
                    })
            } else {
                res.status(404).json({ message: 'Company does not exist, means no job to get' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not retrieve company to find specific job' });
        })
});

router.get('/jobs/:type', (req, res) => {
    const { type } = req.params;
    if (type) {
        Jobs.findByType(type)
            .then(jobs => {
                res.status(200).json(jobs)
            })
            .catch(err => {
                res.status(500).json({ message: "Could not find jobs" });
            })
    } else {
        res.status(404).json({ message: 'There are no jobs here' });
    }
});

router.post('/:company_id/jobs', (req, res) => {
    const body = req.body;
    const { company_id } = req.params;
    Companies.findById(company_id)
        .then(company => {
            if(company && body) {    
                Jobs.add(company_id, body)
                    .then(job => {
                        res.status(201).json(job)
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: "Error posting jobs" })
                    })
            } else {
                res.status(400).json({ message: 'Provide all the info to post' })
            }
        })
        .catch(err => {
            res.status(404).json({ message: 'Could not find Company to post on' })
        })
})

router.put('/:company_id/jobs/:id', (req, res) => {
    const { company_id, id } = req.params;
    const body = req.body;
    Companies.findById(company_id)
        .then(company => {
            if (company.id == company_id && id && body) {
                Jobs.findByIdInCompany(id, company_id)
                        .then(job => {
                            if(job == undefined) {
                                res.status(404).json({ message: "Job does not exist in this company" });
                            } else {
                                Jobs.update(id, body)
                                    .then(updated => {
                                        res.status(200).json(updated);
                                    })
                                    .catch(err => {
                                        res.status(500).json({ message: "Error updating job" });
                                    })
                            }
                        })
                        .catch(err => {
                            res.status(500).json({ message: 'Could not find and update job '})
                        })
            } else {
                res.status(400).json({ message: "Either the company id didn't match up or the job id or not everything was filled out" })
            }
        })
        .catch(err => {
            res.status(404).json({ message: 'Could not find Company to replace job' })
        })
})

router.delete('/:company_id/jobs/:id', (req, res) => {
    const { company_id, id } = req.params;
    Companies.findById(company_id)
        .then(company => {
            if(company.id == company_id && id) {
                Jobs.findByIdInCompany(id, company_id)
                        .then(job => {
                            if(job == undefined) {
                                res.status(404).json({ message: "Job does not exist in this company" });
                            } else {
                                Jobs.remove(id)
                                    .then(deleted => {
                                        res.status(200).json({ message: 'job successfully deleted' });
                                    })
                                    .catch(err => {
                                        res.status(500).json({ message: "Error deleting job" });
                                    })
                            }
                        })
                        .catch(err => {
                            res.status(500).json({ message: 'Could not delete because job is not part of company' })
                        })
            } else {
                res.status(400).json({ message: "Error trying to delete" })
            }
        })
        .catch(err => {
            res.status(404).json({ message: 'Could not find Company to delete job' });
        })
})

module.exports = router;