const axios = require('axios');
const HttpError = require('../models/http-error');

const API_KEY = 'jsdyjrbvksbvdkfslrgDVDfn32v2g4yh'; //change for real Google Maps API

const getCoordsForAddress = async (address) => {
  return {
    lat: 40.7484474,
    lng: -73.9871516
  };

  //using real Google maps API
/*   const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`);

  const data = response.data;

  if(!data || data.status === 'ZERO RESULTS') {
    throw new HttpError('Could not find location for the specified address.', 422);
  }

  const coordinates = data.results.geometry.location;

  return coordinates; */

};

module.exports = getCoordsForAddress;



