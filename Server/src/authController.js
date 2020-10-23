'use strict';

const {con} = require('./main');

exports.post = (req, res) => {
    const sql = "SELECT * FROM `users` WHERE `login` = ? AND `password` = ?";
    con.query(sql, Object.values(req.body), (error, results, fields) => res.json({
        success: !!results.length,
        accessLevel: results[0] && results[0].rank
    }));
};

exports.put = (req, res) => {
    const sql = "INSERT INTO `users` (login, password) VALUES ?";
    con.query(sql, [[Object.values(req.body)]]);
};