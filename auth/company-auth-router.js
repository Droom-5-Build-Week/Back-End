const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secret.js');

const Comp = require('../companies/companies-model.js');

router.post('/company/register', (req, res) => {
    let company = req.body;
    bcrypt.genSalt(13, function (err, salt) {
        bcrypt.hash(company.password, salt, function (err, hash) {
            if (err) {
                res.status(500).json({ message: 'error with hash' })
            } else {
                company.password = hash;
                Comp.add(company)
                    .then(usr => {
                        res.status(201).json(company);
                    })
                    .catch(err => {
                        res.status(400).json({ message: `${err}` });
                    })
            }
        });
    });
});

router.post('/company/login', (req, res) => {
    let { email, password } = req.body;

    Comp.findBy({ email })
        .first()
        .then(company => {
            if (company) {
                bcrypt.compare(password, company.password).then(match => {
                    if (match) {
                        const token = signToken(company);
                        res.status(200).json({ token: token });
                    } else {
                        res.status(401).json({ message: 'Invalid Credentials' });
                    }
                })
                    .catch(err => {
                        res.status(500).json({ message: `${err}` });
                    })
            } else {
                res.status(400).json({ message: 'Not an existing company' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Invalid Credentials' });
        });
});

function signToken(company) {
    const payload = {
        id: company.id
    };
    const options = {
        expiresIn: '8h'
    };
    return jwt.sign(payload, jwtSecret, options);
}


module.exports = router;