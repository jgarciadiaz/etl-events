const extract = require('./util/extract');
const load = require('./util/load');
const printReport = require('./util/printReport');
const transform = require('./util/transform')

extract()
  .then(transform)
  .then(load)
  .then(printReport)
  .catch(console.error);
