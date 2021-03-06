import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from "react-router-dom";


function Header() {


    return (
        <div className="header">

            <Link to='/'>
                <img 
                    className='header_icon'
                    src="https://img.icons8.com/plasticine/50/000000/paper-plane.png"
                    alt=""
                />
            </Link>

            <div className="header_center">
                <input type='text'/>
               <SearchIcon/>
            </div>

            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon/>
                <Avatar/>
            </div>

        </div>
    )
}

export default Header;
