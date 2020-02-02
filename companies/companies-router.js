const router = require('express').Router();
const Companies = require('./companies-model.js');

// MARK: -- GET All
router.get('/', (req, res) => {
	Companies.find()
		.then(companies => {
			res.status(200).json(companies)
		})
		.catch(err => {
			res.status(500).json({ message: '🤔, we can\'t find all the companies' });
		})
})

// MAKR: -- GET 1
router.get('/:id', (req, res) => {
	if(id) {
		Companies.findById(id)
			.then(company => {
				res.status(200).json(company)
			})
			.catch(err => {
				res.status(500).json('🤔, we couldn\'t find the single company');
			})
	} else {
		res.status(404).json({ message: 'this company does not exist in our database' });
	}
})

// MARK: -- POST
router.post('/', (req, res) => {
	const { user_id, company } = req.body
	if(!company.name || !company.profile_picture, || !company.sector, !company.bio) {
		res.status(406).json({ message: 'Please send all of the company data that is needed to store in the Database' })
	} else {
		Companies.add(user_id, company)
			.then(company => {
				res.status(201).json(company)
			})
			.catch(err => {
				res.status(500).json(err);
			})
	}
})

// MARK: -- PUT
router.put(':/id', (req, res) => {
	const id = req.params.id;
	const changes = req.body;
	if(id) {
		Companies.update(id, changes)
			.then(company => {
				res.status(200).json(company);
			})
			.catch(err => {
				res.status(500).json(err);
			})
	} else {
		res.status(404).json({ message: 'could not find company with specified id'})
	}
})

// MARK: -- DELETE
router.delete(':/id', (req, res) => {
	const id = req.params.id
	if(id) {
		Companies.remove(id)
			.then(deleted => {
				res.status(204)
			})
			.catch(500).json({ message: 'could not delete company from database' })
	} else {
		res.status(404).json({ message: 'could not find company with specified id' })
	}
})

module.exports = router;