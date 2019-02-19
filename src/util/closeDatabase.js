const mongoose = require('mongoose');

const closeDatabase = () => mongoose.disconnect();

module.exports = closeDatabase;
