const express = require('express')
const db = require('../db')
const router = express.Router()

router.post('/', (req, res) => {
  const details = req.body
  db.addUser(details)
    .then(details => {
      console.log(details)
    })
    .then(res.sendStatus(200))
})

router.post('/user/:id/addgoal', (req, res) => {
  const id = req.params.id
  const details = req.body
  db.addGoal(id, details)
    .then(details => {
      console.log(details)
    })
    .then(res.sendStatus(200))
})

module.exports = router
