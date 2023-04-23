require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION;

const config = {
    JWT_SECRET: JWT_SECRET,
    JWT_EXPIRATION: JWT_EXPIRATION
};

module.exports = config;
