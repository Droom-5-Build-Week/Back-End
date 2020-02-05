const router = require('express').Router();

const Matches = require('./matches-model.js');
const Users = require('../users/users-model.js');

router.get("/:user_id/matches", (req, res) => {
    const { user_id } = req.params
    Users.findById(user_id)
        .then(user => {
            if (!user) {
                res.staus(404).json({ message: "No such user" })
            } else {
                Matches.getUserLikes(user_id)
                    .then(match => {
                        res.status(200).json(match)
                    })
                    .catch(err => {
                        res.status(500).json({ message: "Error getting matches for user" })
                    })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get User" })
        })
})

router.get("/:user_id/matches/:match_id", (req, res) => {
    const { user_id, match_id } = req.params
    Users.findById(user_id)
        .then(user => {
            if (!user) {
                res.staus(404).json({ message: "No such user" })
            } else {
                Matches.getUserLikesById(match_id)
                    .then(match => {
                        res.status(200).json(match)
                    })
                    .catch(err => {
                        res.status(500).json({ message: "Error getting match for user" })
                    })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.post("/:id/matches", (req, res) => {
    const { id } = req.params;
    req.body.seen_before = true;
    const { job_id, user_id, likes, seen_before } = req.body;
    Users.findById(id)
        .then(user => {
            if (!user) {
                res.staus(404).json({ message: "No such user" })
            } else {
                if (job_id && user_id && seen_before) {
                    if (likes === true) {
                        Matches.postUserLikes(req.body, id)
                            .then(like => {
                                res.status(200).json(like)
                            })
                            .catch(err => {
                                res.status(500).json({ message: "Error posting like for user" })
                            })
                    } else {
                        res.status(200).json({ message: "Didnt like this job" })
                    }
                } else {
                    res.status(500).json({ message: "Please provide all required info" })
                }
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get("/:user_id/matched", (req, res) => {
    const { user_id } = req.params
    Users.findById(user_id)
        .then(user => {
            if (!user) {
                res.staus(404).json({ message: "No such user" })
            } else {
                Matches.getUserLikes(user_id)
                    .then(match => {
                        res.status(200).json(match)
                    })
                    .catch(err => {
                        res.status(500).json({ message: "Error getting matches for user" })
                    })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get User" })
        })
})

module.exports = router;