// Update with your config settings.
require("dotenv").config();
const { DATABASE_URL } = process.env;

const url = 'postgres://xjmzshcw:5K73eYmnPGL2WQc7MmpjL_LjXPCrD5jk@fanny.db.elephantsql.com/xjmzshcw'
module.exports = {

  development: {
    client: 'postgresql',
    connection: url
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
