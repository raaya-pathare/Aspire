const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile.js')[environment]
const connection = require('knex')(config)

function addUser (data, db = connection) {
  return db('users')
    .insert({
      first_name: data.first_name,
      last_name: data.last_name,
      username: data.username,
      password: data.password,
      email_address: data.email_address
    })
}

module.exports = {
  addUser
}
