module.exports = function (app) {
    require('./publish')(app);
    require('./verify')(app);
    require('./getInfo')(app);
}
