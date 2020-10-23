'use strict';

//подключаем ништяки
const {con} = require('./main'); //поправить часовой пояс по гринвичу+4 часа

exports.getByID = (req, res) => {
    const sql = "SELECT * FROM `tickets` WHERE `id_film` = ?";
    con.query(sql, [[Object.values(req.params)]], (error, results, fields) => {console.log(results), res.json(results)});
};
