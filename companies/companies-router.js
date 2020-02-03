const router = require('express').Router();

const Comp = require('./companies-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', (req, res) => {
	Comp.find()
		.then(companies => {
			res.json(companies);
		})
		.catch(err => {
			res.send(err);
		})
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	Comp.findById(id)
		.then(company => {
			res.json(company);
		})
		.catch(err => {
			console.log(err)
			res.status(500).json({ message: 'could not find user' })
		})
})

router.put('/:id', (req, res) => {
	const id = req.params.id
	const changes = req.body;
	if (id && changes) {
		Comp.update(id, changes)
			.then(user => {
				res.status(201).json(user);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({ message: 'Could not update user' });
			})
	} else {
		res.status(400).json({ message: 'Nothing was update for the user' });
	}
})

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	Comp.remove(id)
		.then(removed => {
			if (removed) {
				res.status(200).json({ message: 'User successfully deleted' });
			} else {
				res.status(404).json({ message: 'Could not find user' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Could not delete user' })
		})
})

module.exports = router;