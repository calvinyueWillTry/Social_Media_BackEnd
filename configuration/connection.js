const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/socialMedia';//connection to web

connect(connectionString);

module.exports = connection;
//run the following in the main terminal, because it needs to be manually reactivated each time:
//mongod --dbpath ~/data/db --logpath ~/data/log/mongodb/mongo.log --fork
//ps aux | grep -v grep | grep mongod

//mongosh "mongodb+srv://mycluster.abcd1.mongodb.net/myFirstDatabase" --apiVersion 1 --username <username>