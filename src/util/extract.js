const request = require('request-promise-native');
const readFile = require('./readFile');

const extract = props => (props.isProduction ? request(props.url) : readFile(props.file));

module.exports = extract;
