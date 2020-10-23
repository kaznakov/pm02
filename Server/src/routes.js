'use strict';

const film = require('./filmsController');
const auth = require('./authController');
const ticket = require('./ticketsController');

//Тут прописаны все маршруты и методы, по которым их можно достичь
//Все маршруты строятся так
//  http://localhost:тут порт/а тут маршруты
module.exports = function (app) {
 
    //Например для этого с методом GET
    // http://localhost:3002/conditions
    app.route('/ticket/:id_film')
        .delete(film.delete)
        .get(film.getByID)   
    app
    app.route('/login')
        .get((req, res) => res.json({success:true}))
        .post(auth.post)
        .put(auth.put)

    app.route('/ticket')
        .get(film.get)
        .put(film.put)
        .post(film.update)

    app.route('/movie_ticket/:id')
        .get(ticket.getByID)
};