const router = require('express').Router();

const Interests = require('./interests-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/:user_id/interests', (req, res) => {
    const { user_id } = req.params;
    if ( user_id ) {
        Interests.find(user_id)
            .then(exps => {
                res.status(200).json(exps)
            })
            .catch(err => {
                res.status(500).json({ message: "Could not complete task" });
            })
    } else {
        res.status(404).json({ message: 'There are no interests here' });
    }
});

router.post('/:user_id/interests', (req, res) => {
    const { topic } = req.body;
    const user_id = req.params.user_id;
    if (topic) {
        Interests.add(user_id, req.body)
            .then(int => {
                res.status(201).json(int)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
    } else {
        res.status(400).json({ message: "Please fill in all required fields" })
    }
})

router.put('/:user_id/interests/:id', (req, res) => {
    const { user_id, id } = req.params;
    if (id) {
        Interests.update(user_id, id, req.body)
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

router.delete('/:user_id/interests/:id', (req, res) => {
    const { user_id, id } = req.params;
    if (user_id && id) {
        Interests.remove(id)
            .then(deleted => {
                res.status(200).json({ message: 'skill successfully deleted' });
            })
            .catch(err => {
                res.status(500).json(err);
            })
    } else {
        res.status(400).json({ message: "There are no interests here" })
    }
})

module.exports = router;