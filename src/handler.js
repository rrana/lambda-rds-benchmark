require('dotenv').config();
const db = require('./db');
const queries = require('./queries');

exports.lambdaHandler = async (event) => {
    try {
        console.log("Lambda invoked:", event);
        const result = await queries.runBenchmark();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Benchmark completed",
                result
            })
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
