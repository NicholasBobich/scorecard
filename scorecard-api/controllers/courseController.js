const queries = require("../db/queries");

const addCourse = async (req, res) => {
    try {
        // Parameters
        const { courseName, city, stateAbbr, parByHole } = req.body;
        
        await queries.addCourse(courseName, city, stateAbbr, parByHole);

        res.json({ success: true});
    } catch (error) {
        console.error("Error:", error.message);
        res.json({ success: false, error: error.message });
    }
}

module.exports = {
    addCourse
}