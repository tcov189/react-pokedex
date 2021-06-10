import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="navbar">
            <Link to="/">
                Pokedex
            </Link>

            <div>
                <button className="rounded px-2 py-1 bg-green-700 border border-green-300" onClick={localStorage.clear()}>Clear Cache</button>
            </div>
        </header>
    )
}
