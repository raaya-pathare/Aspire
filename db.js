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
      goal_name: data.goal_name,
      goal_description: data.goal_description,
      why: data.why,
      image: data.image,
      date: data.date,
      notifications: data.notifications,
      user_id: id
    })
}

module.exports = {
  addUser,
  addGoal
}
