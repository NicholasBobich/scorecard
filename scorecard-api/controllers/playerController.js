const queries = require("../db/queries");

const addPlayer = async (req, res) => {
    try {
        // Parameters
        const { firstName, lastName } = req.body;
        
        await queries.addPlayer(firstName, lastName);

        res.json({ success: true});
    } catch (error) {
        console.error("Error:", error.message);
        res.json({ success: false, error: error.message });
    }
}

module.exports = {
    addPlayer
}