const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', (req, res, next) => {
  knex('dream')
    .then((dreams) => console.log(dreams))
})

router.get('/:term', (req, res, next) => {
  knex('dream')
    .where({term: req.params.term})
    .first()
    .then(dream => res.json(dream))
    .catch(err => next(err))
})

router.get('/selected/:id', (req, res, next) => {
  knex('dream')
    .where({id: req.params.id})
    .returning('*')
    .then(dreams => res.json(dreams[0]))
    .catch(err => next(err))
})

router.post('/new', (req, res, next) => {
  knex('dream')
    .insert(req.body,'id')
      .then((id) => {console.log(id)})
})


module.exports = router
