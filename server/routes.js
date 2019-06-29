const express = require('express')
const db = require('../db')
const router = express.Router()

router.post('/', (req, res) => {
  const data = req.body
  db.addUser(data)
    .then(id => {
      res.redirect(`/user/${id}`)
    })
})

router.post('/user/:id/addgoal', (req, res) => {
  const id = req.params.id
  // console.log(req.params.id)
  const data = req.body
  db.addGoal(data, id)
    .then(data => {
      console.log(data)
    })
    .then(res.sendStatus(200))
})

router.post('/', (req, res) => {
  const data = req.body.username
  db.getUser(data)
    .then(id => {
      res.redirect(`/user/${id}`)
    })
    .then(res.sendStatus(200))
})

module.exports = router
