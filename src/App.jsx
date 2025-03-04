import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import GamesSection from "./components/GamesSection.jsx"

export default function App() {
  const [user, setUser] = useState(null);


  return (
    <div className="main-container">
      <Navbar user={user} setUser={setUser}/>
      <GamesSection/>
    </div>
  )
}

