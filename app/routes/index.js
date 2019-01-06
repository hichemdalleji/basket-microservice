// routes/index.js
const basketRoutes = require('./basket_routes');
module.exports = function (app, db) {
    basketRoutes(app, db);
};