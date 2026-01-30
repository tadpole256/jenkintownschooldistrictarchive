import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>© {new Date().getFullYear()} Anthony McCloskey. All rights reserved.</p>
                <p className="disclaimer">
                    This site is in no way affiliated with the actual School District of Jenkintown.
                    <br />
                    <a href="https://github.com/tadpole256/jenkintownschooldistrictarchive" target="_blank" rel="noopener noreferrer">View Source on GitHub</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
