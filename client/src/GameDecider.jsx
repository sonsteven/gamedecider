import { useState, useEffect } from 'react'
import './styles/gamedecider.css'
import Navbar from "./components/Navbar.jsx"
import GamesSection from "./components/GamesSection.jsx"

export default function GameDecider() {
  const [user, setUser] = useState(null)
  const [backendData, setBackendData] = useState([])

  
  useEffect(() => {
    fetch("/api/games")
      .then(response => response.json())
      .then(data => {setBackendData(data)})
      .catch(error => console.error("Error fetching games:", error));
  }, [])

  return (
    <div className="main-container">
      <Navbar user={user} setUser={setUser}/>
      <GamesSection games={backendData}/>
    </div>
  )
}

