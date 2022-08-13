import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/">
                <img 
                className='navbar-logo' src={require('./images/airbnb-logo.png')} alt='airbnb-logo' />
            </Link>
            <div className='navbar-center'>
                <input type="button" className='navbar-search' value="Anywhere" />
                <input type="button" className='navbar-search' value="Any week" />
                <input type="button" className='navbar-search' value="Add guests" />

                <SearchIcon />
            </div>
            <div className='navbar-right'>
                <p>Become a Host</p>
                <LanguageIcon />
                <AiOutlineMenu />
                <Avatar />
            </div>
        </div>
    )
}

export default Navbar;