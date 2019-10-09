const request = require('request-promise-native');

const config = require('../config.js');

const load = (events) => {
  if (!Array.isArray(events) || !events.length) {
    return null
  }

  const options = {
    method: 'POST',
    uri: `${config.get('api.url')}/events`,
    body: {
      events
    },
    json: true
  };
  return request(options)
};

module.exports = load;
