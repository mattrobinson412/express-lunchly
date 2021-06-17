/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgres:///lunchly");

db.connect();

module.exports = db;
