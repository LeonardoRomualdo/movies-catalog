module.exports = {
  env: {
    MOVIES_OMDB_API: process.env.NODE_ENV == 'production' ? 'http://www.omdbapi.com?apikey=83d04360' : 'http://www.omdbapi.com?apikey=83d04360' 
  },
  future: {
    webpack5: true,
  },
}