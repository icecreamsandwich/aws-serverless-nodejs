const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
	if (isConnected) {
		console.log('=> using existing database connection');
		return Promise.resolve();
	}

	console.log('=> using new database connection');
	//DB
	var databaseUri ="mongodb://crazyMongo:jHH3MMRrnJ.wK5P@cluster0-shard-00-00-rqp7c.mongodb.net:27017,cluster0-shard-00-01-rqp7c.mongodb.net:27017,cluster0-shard-00-02-rqp7c.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

	return mongoose.connect(databaseUri).then(db => {
		isConnected = db.connections[0].readyState;
	});
};