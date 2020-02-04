const router = require('express').Router();

const JobSkills = require('./jobs_skills-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/:company_id/jobs/:job_id/skills', (req, res) => {
    const { company_id, job_id } = req.params;
    if (company_id && job_id) {
        JobSkills.find(company_id, job_id)
            .then(skills => {
                res.status(200).json(skills)
            })
            .catch(err => {
                res.status(500).json({ message: "Could not complete task" });
            })
    } else {
        res.status(404).json({ message: 'There are no jobs here' });
    }
});

router.get('/:company_id/jobs/:job_id/skills/:skill_id', (req, res) => {
    const { company_id, job_id, skill_id } = req.params;
    if (skill_id) {
        JobSkills.findById(skill_id)
            .then(skill => {
                res.status(200).json(skill)
            })
            .catch(err => {
                res.status(500).json({ message: "Could not complete task" });
            })
    } else {
        res.status(404).json({ message: 'There is no skill here' });
    }
});

router.post('/:company_id/jobs/:job_id/skills', (req, res) => {
    const body = req.body;
    const { job_id } = req.params;
    if (body) {
        JobSkills.add(job_id, body)
            .then(skill => {
                res.status(201).json(skill)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
    } else {
        res.status(400).json({ message: "Please fill in all required fields" })
    }
})

router.put('/:company_id/jobs/:job_id/skills/:skill_id', (req, res) => {
    const { skill_id } = req.params;
    const body = req.body;
    if (skill_id) {
        JobSkills.update(skill_id, body)
            .then(updated => {
                res.status(200).json(updated);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    } else {
        res.status(400).json({ message: "Please fill in all required fields" })
    }
})

router.delete('/:company_id/jobs/:job_id/skills/:skill_id', (req, res) => {
    const { skill_id } = req.params;
    if (skill_id) {
        JobSkills.remove(skill_id)
            .then(deleted => {
                res.status(200).json({ message: 'skill successfully deleted' });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    } else {
        res.status(400).json({ message: "There is no skill here" })
    }
})

module.exports = router;