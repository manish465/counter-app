import React, { Component } from "react";

const NavBar = ({ totalCountersActive }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">
                Navbar
                <span className="badge bagde-pill badge-secondary m-2">
                    {totalCountersActive}
                </span>
            </span>
        </nav>
    );
};

export default NavBar;
