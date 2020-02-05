const router = require('express').Router();

const CompanyMatches = require('./company-matches-model.js');
const Companies = require('../companies/companies-model.js');

router.get("/:company_id/matched", (req, res) => {
    const { company_id } = req.params
    Companies.findById(company_id)
        .then(job => {
            if (!job) {
                res.staus(404).json({ message: "No such job" })
            } else {
                CompanyMatches.getInterestedUsers(company_id)
                    .then(match => {
                        res.status(200).json(match)
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: "Error getting matches" })
                    })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get Job" })
        })
})

module.exports = router;