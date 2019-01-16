const configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + 
        ':' + configValues.pwd +
        '@ds151994.mlab.com:51994/burger_builder';
    }
}