const convict = require('convict');

// Define a schema
const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '0.0.0.0',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
  },
  api: {
    url: {
      doc: 'API URL',
      format: String,
      default: 'http://127.0.0.1:8000',
      env: 'API_URL',
    }
  },
  resource: {
    groupon: {
      doc: 'GRPN Resource',
      format: String,
      default: 'https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&offset=0&limit=20&filters=category:things-to-do',
      env: 'RESOURCE_GRPN',
    }
  },
  db: {
    url: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'mongodb://localhost:27017/events',
      env: 'DB_URL',
    },
  },
});

module.exports = config;
