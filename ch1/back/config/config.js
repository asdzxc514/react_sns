const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    development: {
        username: 'root',
        password: process.env.DB_PASSWORD,
        database: 'react-sns',
        host: '127.0.0.1',
        dialect: 'mysql',
        port: "3307"
    },
    test: {
        username: 'root',
        password: process.env.DB_PASSWORD,
        database: 'react-sns',
        host: '127.0.0.1',
        dialect: 'mysql',
        port: "3307"
    },
    production: {
        username: 'root',
        password: process.env.DB_PASSWORD,
        database: 'react-sns',
        host: '127.0.0.1',
        dialect: 'mysql',
        port: "3307"
    },
};