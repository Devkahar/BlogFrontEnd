import React from 'react'
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';


import "./style.css"
import logo from '../../assets/logo.svg'
import { Avatar } from '@material-ui/core';
import Search from '../Search';

const NavBar = () => {
    return (
        <>
        <nav className="nav align-items-center ">
            <div className="container d-flex align-items-center">
            
                <nav className="mr-auto ">
                    <a href="#home" className="nav-link d-flex align-items-center">
                        <div className="logo-img-container">
                            <img src={logo} alt="medium-logo" className="logo-desktop"/>
                        </div>
                        <div className="logo-sideline"/>
                    </a>

                </nav>

                <nav className="d-flex align-items-center">
                    {/* search */}
                    <div className="d-flex nav-items">
                    <Search/>
                    </div>
                    {/* BookMarks */}
                    <a href="#" className="nav-items" ><BookmarksOutlinedIcon/></a>
                    {/* notifications */}
                    <a href="" className="nav-items" ><NotificationsNoneOutlinedIcon/></a>
                    {/* Profile */}
                    <div className="nav-items">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>

                </nav>
            </div>
        </nav>


</>
    )
}

export default NavBar;
