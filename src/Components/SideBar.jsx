import './Sidebar.css';
import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { DashboardCustomize, Bookmark } from '@mui/icons-material';

const SideBar = () => {

    const user = useSelector(selectUser);

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        );
    };
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                <Avatar className='sidebar__avatar' src={user?.photoUrl}>
                    {user?.displayName[0]}
                </Avatar>
                <h2>{user?.displayName}</h2>
                <h3>{user?.email}</h3>

                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__statNumber">2.566</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Views on post</p>
                        <p className="sidebar__statNumber">3.698</p>
                    </div>
                </div>
                <div className='sidebar__offer'>
                    <h6>Acces esclisive tools && insights</h6>
                    <div className='sidebar__offer-box'>
                        <DashboardCustomize />
                        <p>Try premium fro free</p>
                    </div>

                </div>
                <div className='sidebar__offer-item'>
                    <Bookmark />
                    <p>My Items</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
                {recentItem('reactTesting')}
            </div>
        </div>
    );
};

export default SideBar;
