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

module.exports = router
