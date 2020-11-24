require("dotenv").config();

module.exports = {
  jwt: {
    secret: process.env.JWT_KEY,
    options: {
      algorithm: "HS256",
      expiresIn: "20m",
    },
  },
};
