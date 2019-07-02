// Basick BackEnd configs
module.exports = {
  api: {
    port: process.env.PORT || 3200,
  },
  database: {
    dbAddress: process.env.MONGO_URL || 'mongodb://admin:admin1234@ds345937.mlab.com:45937/express-mongoose-nodejs'
  },
};
