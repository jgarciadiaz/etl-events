const request = require('request-promise-native');

const load = (props, events) => {
  if (!events.length) {
    return null
  }

  const options = {
    method: 'POST',
    uri: `${props.apiUrl}/events`,
    body: {
      events
    },
    json: true
  };
  return request(options)
};

module.exports = load;
