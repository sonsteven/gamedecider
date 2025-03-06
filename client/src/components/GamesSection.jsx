import React from "react"
import { games } from "../data/games"
import "../styles/gamessection.css"

const DEFAULT_IMAGE = "https://dummyimage.com/600x900/245/fff&text=Image+Unavailable";

export default function GamesSection({games}) {

    return (
        <div className="games-section">
            <h2 className="games-title">Games</h2>
            <div className="games-list">
                {games.length > 0 ? games.map((game) => (
                    <div className="game-card" key={game.id}>
                        <img className="game-image" 
                            src={game.image || DEFAULT_IMAGE} 
                            alt={game.name}
                        />
                        <p className="game-name">{game.name}</p>
                    </div>
                )) : <p>No games found.</p>
                }
            </div>
        </div>
    )

}