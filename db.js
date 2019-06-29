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

function addGoal (data, id, db = connection) {
  return db('usergoals')
    .insert({
      name: data.goal_name,
      description: data.goal_description,
      why: data.why,
      image: data.image,
      doneby: data.date,
      pushnotifs: data.notifications,
      user_id: id
    })
}

function getUser (data, db = connection) {
  return db('users')
    .where('username', data)
}

module.exports = {
  addUser,
  addGoal,
  getUser
}
