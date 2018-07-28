const staticHandler = require('./staticHandler');
const errorHandler = require('./errorHandler');
const homeHandler = require('./homeHandler');
const moviesHandler = require('./moviesHandler');

module.exports = [
    moviesHandler,
    staticHandler,    
    homeHandler,   
    errorHandler,
]