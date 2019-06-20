exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('usergoals').del()
    .then(function () {
      // Inserts seed entries
      return knex('usergoals').insert([
        { id: 1, name: 'See the Northern Lights', description: 'Go to Alaska and see the Northern Lights with a loved one.', why: 'Because I think they\'re beautiful and one of the few truly magical sights in the world.', image: '/images/lights.jpg', doneby: '28/02/32', pushnotifs: 'no' }
      ])
    })
}
