exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {user_username: 'David', user_role: 'organizer', user_item: 'potato salad'},
          {user_username: 'Jimmy', user_role: 'guest', user_item: 'hotdogs'},
        ]);
      });
  };
  