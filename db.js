const databaseName = process.env.NODE_ENV === 'littlescholarscontacts'
const pgp = require('pg-promise')();
// const CONNECTION_STRING = process.env.NODE_ENV === 'production'
//   ? process.env.DATABASE_URL
//   : `postgres://${process.env.USER}@localhost:5432/littlescholarscontacts`

const db = pgp(`postgres://shakalee@localhost:5432/littlescholarscontacts`);
const pg = require('pg');

const createContact = (name, email, phoneNumber, message) => {
  const sql =  `
    INSERT INTO
      contacts (name, email, phoneNumber, message)
    VALUES
      ($1, $2, $3, $4)
    RETURNING
      *
    `
  return database.any(sql, [name, email, phoneNumber, message])
}

module.exports = { createContact: createContact }
