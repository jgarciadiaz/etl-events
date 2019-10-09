const request = require('request-promise-native');
const readFile = require('./readFile');

const extract = props => {
  if (!props.isProduction) {
    return readFile('./samples/grpn.json', 'utf8')
  }

  return request(props.url)
};

module.exports = extract;
