module.exports = {
  env: {
    MOVIES_OMDB_API: process.env.NODE_ENV == 'production' ? 'https://www.omdbapi.com?apikey=83d04360' : 'https://www.omdbapi.com?apikey=83d04360' 
  },
  future: {
    webpack5: true,
  },
}