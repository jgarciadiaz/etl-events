const mongoose = require('mongoose');

const config = require('./config');
const extract = require('./util/extract');
const load = require('./util/load');
const printReport = require('./util/printReport');

mongoose.Promise = global.Promise;

const props = {
  isProduction: config.get('env') === 'production',
  url: 'https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&offset=0&limit=20&filters=category:things-to-do',
  file: './samples/grpn.json',
  apiUrl: config.get('api.url'),
};

const getEvent = event => ({
  uuid: event.uuid,
  title: event.announcementTitle,
  url: event.dealUrl,
  description: event.title,
  image: event.grid6ImageUrl,
});

const transform = html => {
  const data = JSON.parse(html);
  return data.deals && data.deals.length ? data.deals.map(getEvent) : [];
};

extract(props)
  .then(transform)
  .then(events => load(props, events))
  .then(printReport)
  .catch(console.log);
