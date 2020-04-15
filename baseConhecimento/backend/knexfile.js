// Update with your config settings.

module.exports = {
    client: 'postgresql',
    connection: {
      database: 'conhecimento',
      user:     'postgres',
      password: '9054'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  

};
