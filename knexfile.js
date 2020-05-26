const dbConnection = process.env.DATABASE_URL;


module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/database.db3'
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    }

  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.rund("PRAGMA foreign_keys = ON", done);
      },
    },
  },


  production: {
    client: 'pg',
    connection: dbConnection,
    seeds: {
      directory: './data/seeds'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
    }
  }

};
