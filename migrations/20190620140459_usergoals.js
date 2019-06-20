exports.up = function (knex, Promise) {
  return knex.schema.createTable('usergoals', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('why')
    table.string('image')
    table.string('doneby')
    table.string('pushnotifs')
    table.integer('user_id').references('users.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('usergoals')
}
