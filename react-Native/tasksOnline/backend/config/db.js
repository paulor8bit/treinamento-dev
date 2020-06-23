const config = require('../knexfile.js')
const knex = requeire('knex')(config)

knex.migrate.latest([config])
module.exports = knex