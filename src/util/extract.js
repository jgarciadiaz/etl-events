const request = require('request-promise-native');

const readFile = require('./readFile');
const config = require('../config.js');

const extract = () => {
  if (config.get('env') === 'development') {
    return readFile('./samples/grpn.json', 'utf8')
  }

  return request(config.get('resource.groupon'))
};

module.exports = extract;
