const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
	if (isConnected) {
		console.log('=> using existing database connection');
		return Promise.resolve();
	}

	console.log('=> using new database connection');
	//connect to DB using MLab
	var databaseUri ="mongodb://mlabM:mlabD45@ds159782.mlab.com:59782/schedulr";

	return mongoose.connect(databaseUri,{"useNewUrlParser": true}).then(db => {
		isConnected = db.connections[0].readyState;
		console.log('connected to db !');
	});
};