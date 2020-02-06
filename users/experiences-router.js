const router = require('express').Router();

const Experiences = require('./experiences-model.js');
const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/:user_id/experiences', (req, res) => {
    const { user_id } = req.params;
    if ( user_id ) {
        Experiences.find(user_id)
            .then(exps => {
                res.status(200).json(exps)
            })
            .catch(err => {
                res.status(500).json({ message: 'Could not complete task' });
            })
    } else {
        res.status(404).json({ message: 'There are no experiences here' });
    }
});

router.get('/:user_id/experiences/:id', (req, res) => {
    const { user_id, id } = req.params;
    Users.findById(user_id)
        .then(user => {
            if(user.id == user_id) {
                Experiences.findByIdInUser(id, user_id)
                    .then(exp => {
                        if(exp == undefined) {
                            res.status(404).json({ message: 'Experience does not exist in this user' })
                        } else {
                            res.status(200).json(exp)
                        }
                    })
                    .catch(err => {
                        res.status(500).json({ message: 'Could not find experience' });
                    })
            } else {
                res.status(404).json({ message: 'No user by that id' });
            }
        }).catch(err => {
            res.status(500).json({ message: 'Could not return user to get experience' });
        })
}) 

router.post('/:user_id/experiences', (req, res) => {
    const { user_id } = req.params
    const { company_name, job_title } = req.body;
    if (company_name && job_title) {
        Experiences.add(user_id, req.body)
            .then(exp => {
                res.status(201).json(exp);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    } else {
        res.status(400).json({ message: 'Please fill in all required fields' });
    }
})

router.put('/:user_id/experiences/:id', (req, res) => {
    const { user_id, id } = req.params;
    Users.findById(user_id)
        .then(user => {
            if(user.id == user_id && id && body) {
                Experiences.findByIdInUser(id, user_id)
                    .then(exp => {
                        if(exp == undefined) {
                            res.status(404).json({ message: 'Experience does not exist in user'});
                        } else {
                            Experiences.update(user_id, id, req.body)
                                .then(updated => {
                                    res.status(200).json(updated);
                                })
                                .catch(err => {
                                    res.status(500).json({ message: 'Could not update experience' });
                                })
                        }
                    })
                    .catch(err => {
                        res.status(500).json({ message: 'Could not find experience in user, so no update' });
                    })
            } else {
                res.status(404).json({ message: 'No user by that id' });
            }
        }).catch(err => {
            res.status(404).json({ message: 'Could not return user to update experience' });
        })
});

router.delete('/:user_id/experiences/:id', (req, res) => {
    const { user_id, id } = req.params;
    Users.findById(user_id)
        .then(user => {
            if(user.id == user_id && id) {
                Experiences.findByIdInUser(id, user_id)
                    .then(exp => {
                        if(exp == undefined) {
                            res.status(404).json({ message: 'Experience does not exist in user'});
                        } else {
                            Experiences.remove(id, user_id)
                                .then(deleted => {
                                    res.status(200).json({ message: 'experience successfully deleted' });
                                })
                                .catch(err => {
                                    res.status(500).json({ message: 'Error deleting experience' });
                                })
                        }
                    })
                    .catch(err => {
                        res.status(500).json({ message: 'Could not delete because experience is not part of user' });
                    })
            } else {
                res.status(4000).json({ message: 'Error trying to delete' });
            }
        })
        .catch(err => {
            res.status(404).json({ message: "Could not find user" });
        })
})

module.exports = router;