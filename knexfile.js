const pgConnection = process.env.DATABASE_URL;


module.exports = {

  development: {
    client: "pg",
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
    client: "pg", // npm i pg
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    }
  }

};
