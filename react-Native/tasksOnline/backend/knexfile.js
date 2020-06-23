module.exports = {
    client: 'postgresql',
    connection: {
      database: 'tasks',
      user:     'username',
      password: 'docker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

