const router = require('express').Router();

const Jobs = require('./jobs-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/:company_id/jobs', (req, res) => {
    const { company_id } = req.params;
    if (company_id) {
        Jobs.find(company_id)
            .then(jobs => {
                res.status(200).json(jobs)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: "Could not complete task" });
            })
    } else {
        res.status(404).json({ message: 'There are no jobs here' });
    }
});

router.get('/:company_id/jobs/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        Jobs.findById(id)
            .then(job => {
                res.status(200).json(job)
            })
            .catch(err => {
                res.status(500).json({ message: "Could not complete task" });
            })
    } else {
        res.status(404).json({ message: 'There is no job here' });
    }
});

router.get('/jobs/:type', (req, res) => {
    const { type } = req.params;
    if (type) {
        Jobs.findByType(type)
            .then(jobs => {
                res.status(200).json(jobs)
            })
            .catch(err => {
                res.status(500).json({ message: "Could not complete task" });
            })
    } else {
        res.status(404).json({ message: 'There are no jobs here' });
    }
});

router.post('/:company_id/jobs', (req, res) => {
    const body = req.body;
    const company_id = req.params.company_id;
    if (body) {
        Jobs.add(company_id, body)
            .then(job => {
                res.status(201).json(job)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: "Error posting jobs" })
            })
    } else {
        res.status(400).json({ message: "Please fill in all required fields" })
    }
})

router.put('/:company_id/jobs/:id', (req, res) => {
    const { company_id, id } = req.params;
    const body = req.body;
    if (id) {
        Jobs.update(id, body)
            .then(updated => {
                res.status(200).json(updated);
            })
            .catch(err => {
                res.status(500).json({ message: "Error updating job" });
            })
    } else {
        res.status(400).json({ message: "Please fill all required fields" })
    }
})

router.delete('/:company_id/jobs/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        Jobs.remove(id)
            .then(deleted => {
                res.status(200).json({ message: 'job successfully deleted' });
            })
            .catch(err => {
                res.status(500).json({ message: "Error deleting job" });
            })
    } else {
        res.status(400).json({ message: "There is no job here" })
    }
})

module.exports = router;