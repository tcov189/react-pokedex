import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="navbar">
            <Link to="/">
                Pokedex
            </Link>
        </header>
    )
}
