const pgConfig = require("../config/pgConfig");
const { Pool } = require("pg");

const pool = new Pool(pgConfig);

// ========================================= PLAYER QUERIES =========================================
const addPlayer = async (firstName, lastName) => {
    let sql = `INSERT INTO ${process.env.PG_SCHEMA}.players (first_name, last_name) VALUES ('${firstName}', '${lastName}')`;

    const client = await pool.connect();

    try {
        await client.query(sql);
        return { success: true }
    } catch (error) {
        console.error("Error during addPlayer insertion => Error:", error.message);
        throw new Error("Failed to add player");
    } finally {
        client.release();
    }
}



// ========================================= COURSE QUERIES =========================================




// ========================================= SCORE QUERIES =========================================




module.exports = {
    addPlayer
}