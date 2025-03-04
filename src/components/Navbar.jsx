import React from "react"
import { FaUserCircle } from "react-icons/fa"

export default function Navbar({ user, setUser }) {
    return (
        <nav className="navbar">
            <h1 className="logo">GameDecider</h1>
            <div className="user-info">
                {/* Check if user is logged in */}
                { user ? (
                    <>
                        <img className="avatar" src={user.avatar} alt="User Avatar"  />
                        <span>{user.username}</span>
                        <button className="logout-btn" onClick={() => setUser(null)} >
                            Logout
                        </button>
                    
                    </>
                ): (
                    <button className="sign-in-btn"
                        onClick={() => 
                            setUser({ username:"TestUser", avatar: "https://dummyimage.com/800x800/890/23&text=:D"})
                        }
                    >
                        <FaUserCircle size={24} /> Sign In
                    </button>
                )}
            </div>
        </nav>
    )
}
