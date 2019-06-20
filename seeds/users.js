exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, first_name: 'Raaya', last_name: 'Pathare', username: 'raayap', email_address: 'raaya.pathare7@gmail.com', password: 'gypsy7', profile_image: '', background_image: '' }
      ])
    })
}
