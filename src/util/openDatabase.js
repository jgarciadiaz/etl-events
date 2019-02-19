const mongoose = require('mongoose');

const openDatabase = dbUrl => mongoose.connect(dbUrl, { useMongoClient: true });

module.exports = openDatabase;
