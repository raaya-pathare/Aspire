import React from 'react'
const config = require('./knexfile.js')[environment]
const connection = require('knex')(config)

function addUser(data, db = connection) {
  return db('users')
    .insert({ first_name: data.first_name })
}

module.exports {
  addUser
}
