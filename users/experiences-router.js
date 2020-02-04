const router = require('express').Router();

const Experiences = require('./experiences-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/:user_id/experiences', (req, res) => {
    const { user_id } = req.params;
    if ( user_id ) {
        Experiences.find(user_id)
            .then(exps => {
                res.status(200).json(exps)
            })
            .catch(err => {
                res.status(500).json({ message: "Could not complete task" });
            })
    } else {
        res.status(404).json({ message: 'There are no experiences here' });
    }
});

router.post('/:user_id/experiences', (req, res) => {
    const { company_name, job_title } = req.body;
    if (company_name && job_title) {

        Experiences.add(user_id, req.body)
            .then(exp => {
                res.status(201).json(exp)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
    } else {
        res.status(400).json({ message: "Please fill in all required fields" })
    }
})

router.put('/:user_id/experiences/:id', (req, res) => {
    const { user_id, id } = req.params;
    if (id) {
        Experiences.update(user_id, id, req.body)
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

router.delete('/:user_id/experiences/:id', (req, res) => {
    const { user_id, id } = req.params;
    if (user_id && id) {
        Experiences.remove(id, user_id)
            .then(deleted => {
                res.status(200).json({ message: 'skill successfully deleted' });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    } else {
        res.status(400).json({ message: "There are no experiences here" })
    }
})

module.exports = router;