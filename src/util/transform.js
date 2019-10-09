const getEvent = event => ({
  uuid: event.uuid,
  title: event.announcementTitle,
  url: event.dealUrl,
  description: event.title,
  image: event.grid6ImageUrl,
});

const transform = html => {
  const { deals } = JSON.parse(html) || {};

  if (Array.isArray(deals)) {
    return deals.map(getEvent)
  }

  return []
};

module.exports = transform
