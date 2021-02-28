import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to={"/"} className={"navbar-logo"}>
                        TRVL <i className="fab fa-typo3"/>
                    </Link>
                    {/* Below is making the hamburger drop down button */}
                    <div className="menu-icon">

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar