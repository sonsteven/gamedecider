const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())


//const STEAM_API_KEY = process.env.STEAM_API_KEY;;
const STEAM_USER_ID = "76561198146403449";

app.get("/api/games", async (req, res) => {
    try {
        const response = await axios.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/`, {
            params: {
                key: STEAM_API_KEY,
                steamid: STEAM_USER_ID,
                format: "json",
                include_appinfo: true 
            }
        });

        if (response.data.response && response.data.response.games) {
            const games = response.data.response.games.map(game => ({
                id: game.appid,
                name: game.name,
                image: `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`
            }));

            res.json(games);
        } else {
            res.json([]);
        }
    } catch (error) {
        console.error("Error fetching games:", error);
        res.status(500).json({ error: "Failed to fetch games from Steam API" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));