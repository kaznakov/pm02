'use strict';

const {con} = require('./main'); //поправить часовой пояс по гринвичу+4 часа

//функция, которая реализует один из методов HTTP - запроса
exports.get = async (req, res) => {
    const sql = "SELECT * FROM `films`";
    con.query(sql, (error, results ) => res.json(results));
}
exports.put = (req, res) => {
    const sql = "INSERT INTO `films` (film_name, country, regisseur, date_release) VALUES ?";
    con.query(sql, [[Object.values(req.body)]]);
};

exports.update = (req, res) => {
    const sql = "UPDATE `films` SET film_name = ?, country = ?, regisseur = ?, date_release = ? WHERE `id_film` = ?";
    con.query(sql, [req.body.film_name, req.body.country, req.body.regisseur, req.body.date_release , req.body.id_film],(error, results, fields) => res.json(results));
};

exports.getByID = (req, res) => {
    const sql = "SELECT * FROM `films` WHERE `id_film` = ?";
    con.query(sql, [[Object.values(req.params)]], (error, results, fields) => res.json(results));
};

exports.delete = (req, res) => {
    const sql = "DELETE FROM `films` WHERE `id_film` = ?"; //защита от SQL инъекций
    con.query(sql, [[Object.values(req.params)]]);
};

/*
exports.put = (req, res) =>
exports.delete = (req, res) =>
exports.update = (req, res) =>
 */