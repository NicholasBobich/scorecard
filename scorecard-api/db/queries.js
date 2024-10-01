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
const addCourse = async (courseName, city, stateAbbr, parByHole) => {
    let sql = `INSERT INTO ${process.env.PG_SCHEMA}.courses (course_name, city, state_abbr, par_by_hole) VALUES ('${courseName}', '${city}', '${stateAbbr}', ARRAY[${parByHole}])`;

    const client = await pool.connect();

    try {
        await client.query(sql);
        return { success: true }
    } catch (error) {
        console.error("Error during addCourse insertion => Error:", error.message);
        throw new Error("Failed to add course");
    } finally {
        client.release();
    }
}

const getCourses = async () => {
    let sql = `SELECT * FROM ${process.env.PG_SCHEMA}.courses`;

    const client = await pool.connect();

    try {
        let courses = await client.query(sql);
        return courses.rows;
    } catch (error) {
        console.error("Error during getCourses => Error:", error.message);
        throw new Error("Failed to get courses");
    } finally {
        client.release();
    }
}



// ========================================= SCORE QUERIES =========================================




module.exports = {
    addPlayer,
    addCourse,
    getCourses
}