module.exports = {
  GMS_API_KEY: process.env.GMS_API_KEY,
  GMS_API_BASE_URL: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
  // GMS_API_SEARCH: req.body.search
  GPS_API_KEY: process.env.GPS_API_KEY,
  GPS_API_BASE_URL: 'https://maps.googleapis.com/maps/api/place/details/json?placeid='
  // GPS_API_SEARCH: req.body.search,
};
