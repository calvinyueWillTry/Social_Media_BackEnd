const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://localhost:27017/data/db';//connection to web

connect(connectionString);

module.exports = connection;