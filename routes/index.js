module.exports = (app) => {
    require('./contact')(app);
    require('./dashboard')(app);
    require('./login')(app);
    require('./logout')(app);
    require('./profile')(app);
    require('./signup')(app);
    require('./dashboard2')(app);
    require('./products')(app);
}; 