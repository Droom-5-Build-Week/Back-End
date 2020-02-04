const router = require('express').Router();

const Skills = require('./skills-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/:user_id/skills', (req, res) => {
    const { user_id } = req.params;
    if ( user_id ) {
        Skills.find(user_id)
            .then(skills => {
                res.status(200).json(skills)
            })
            .catch(err => {
                res.status(500).json({ message: "Could not complete task" });
            })
    } else {
        res.status(404).json({ message: 'There are no skills here' });
    }
});

router.post('/:user_id/skills', (req, res) => {
    const { skill_name } = req.body;
    const user_id = req.params.user_id;
    if (skill_name) {
        Skills.add(user_id, skill_name)
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

router.put('/:user_id/skills/:id', (req, res) => {
    const { user_id, id } = req.params;
    const { skill_name } = req.body;
    if (id) {
        Skills.update(user_id, id, skill_name)
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

router.delete('/:user_id/skills/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        Skills.remove(id)
            .then(deleted => {
                res.status(200).json({ message: 'skill successfully deleted' });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    } else {
        res.status(400).json({ message: "There are no skills here" })
    }
})

module.exports = router;