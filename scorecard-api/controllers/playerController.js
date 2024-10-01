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

const getPlayers = async (req, res) => {
    try {
        let result = await queries.getPlayers();

        res.json({ success: true, players: result });
    } catch (error) {
        console.error("Error:", error.message);
        res.json({ success: false, error: error.message });
    }
}

module.exports = {
    addPlayer,
    getPlayers
}