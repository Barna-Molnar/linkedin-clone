import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Barnabas Molnar</h2>
                <h3>barnabar.molnar@gmgcolor.com</h3>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2.566</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">3.698</p>
                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
