require("dotenv").config();
module.exports = {
  Mongo_url: process.env.MONGO_URL,
  Secret_key: process.env.Secret_key,
};
