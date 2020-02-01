const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => {
			res.send(err);
		})
});

router.get('/search', restricted, (req, res) => {
	const filter = req.body;
	if(filter) {
		Users.findBy(filter)
			.then(user => {
				res.json(user)
			})
			.catch(err => {
				console.log(err)
				res.status(500).json(err)
			})
		} else {
			res.status(404).json({ message: 'nothing was searched for' });
		}
})

router.get('/:id', restricted, (req, res) => {
	const id = req.params.id;
	Users.findById(id)
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			res.status(500).json({ message: 'could not find user' })
		})
})

router.put('/:id', restricted, (req, res) => {
	const id = req.params.id
	const changes = req.body;
	if(id && changes) {
		Users.update(id, changes)
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

router.delete('/:id', restricted, (req, res) => {
	const id = req.params.id;
	Users.remove(id)
		.then(removed => {
			if(removed) {
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