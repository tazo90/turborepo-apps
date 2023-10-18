exports.seed = function (knex) {
  return knex('user')
    .del()
    .then(() => {
      return knex('user').insert([
        {
          id: 1,
          name: 'ccc',
          email: 'ccc@o2.pl',
        },
        {
          id: 2,
          name: 'ccc1',
          email: 'ccc1@o2.pl',
        },
      ]);
    });
};
