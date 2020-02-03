const router = require('express').Router();

const Skills = require('./skills-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Skills.find(id)
        .then(skills => {
            res.status(200).json(skills)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not complete task" })
        })
});

router.post('/', (req, res) => {
    const { skill_name } = req.body;
    const { user_id } = req.params;
    console.log(user_id);
    if (skill_name) {
        Skills.add(user_id, skill_name)
            .then(skill => {
                res.status(201).json(skill)
            })
            .catch(err => {
                console.log(err);
                res.status(500).jso(err)
            })
    } else {
        res.status(400).json({ message: "Please fill in all required fields" })
    }
})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;