const db = require('./db');

exports.runBenchmark = async () => {
    console.time("Query Execution Time");
    
    try {
        const results = await Promise.all([
            db.raw('SELECT pg_sleep(1);'), // Simulate a slow query
            db.raw('SELECT COUNT(*) FROM users;'), // Count rows in a table
            db.raw('SELECT * FROM users ORDER BY id DESC LIMIT 5;') // Fetch last 5 rows
        ]);

        console.timeEnd("Query Execution Time");
        return results;
    } catch (error) {
        console.error("Benchmark Error:", error);
        throw error;
    }
};
