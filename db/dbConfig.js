const { Pool } = require('pg')



const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "cuostmer",
    password: "00100010" // Change this
  })

  module.exports = {
    query: (text, params) => pool.query(text, params),
  }