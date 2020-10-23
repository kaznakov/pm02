const mysql = require('mysql2');
const opts = require('../connectionData');

const con = mysql.createConnection(opts);

exports.con = con;