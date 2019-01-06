const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/baskets', (req, res) => {
        db.collection('baskets')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/baskets/:basketId', (req, res) => {
        const id = req.params.basketId;
        const details = { '_id': new ObjectID(id) };
        db.collection('baskets').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------PUT----------------------------//
    app.put('/v1/public/baskets/:basketId', (req, res) => {
        const id = req.params.basketId;
        const details = { '_id': new ObjectID(id) };
        const basket = req.body.basket;
        db.collection('baskets').update(details, basket, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/baskets', (req, res) => {
        const newBasket = req.body.basket;

        db.collection('baskets').insert(newBasket, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //----------DELETE-------------------------//
    app.delete('/v1/public/baskets/:basketId', (req, res) => {
        const id = req.params.basketId;
        const details = { '_id': new ObjectID(id) };
        db.collection('baskets').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Basket ' + id + ' deleted!');
            }
        });
    });
};