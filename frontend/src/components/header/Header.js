import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
    return (
        <div className='header'>
            <div className='menuicon'>
                <MenuIcon/>
            </div>
            <div className='logo'>
                <a>FOTMOB</a>
            </div>
            <div className='searchbar'>
                <form>
                    <SearchIcon />
                    <input placeholder='SEARCH TEAMS, PLAYERS AND NEWS' />
                </form>
            </div>
            <div className='info-panel'>
                <a>LEAGUES</a>
                <a>ABOUT US</a>
                <a>SIGN IN <AccountCircleIcon/></a>
                <a>PREDICTORS</a>
            </div>
        </div>
    )
}
