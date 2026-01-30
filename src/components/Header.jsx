import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">JSD Archive <span className="unofficial-tag">Unofficial</span></div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="https://www.jenkintowndrakes.org/" target="_blank" rel="noopener noreferrer">Official Site</a></li>
                        <li><a href="mailto:anthony@nordalai.com" className="btn-contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
