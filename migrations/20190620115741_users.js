
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('username')
    table.string('email_address')
    table.string('password')
    table.string('profile_image')
    table.string('background_image')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
