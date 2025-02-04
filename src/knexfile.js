require('dotenv').config();

module.exports = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT || 5432,
        ssl: { rejectUnauthorized: false } // Required for AWS Aurora
    },
    pool: { min: 2, max: 10 } // Adjust based on testing needs
};
