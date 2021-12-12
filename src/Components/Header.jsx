import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import { LaptopChromebook, Search, Apps, Home, SupervisorAccount, BusinessCenter, Chat, Notifications } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';



const Header = () => {


    const dispatch = useDispatch();
    const logoutFromApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className='header'>
            <div className="header__flex">

                <div className="header__left">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                    <div className="header__search">
                        <Search />
                        <input type="text" placeholder='Search' />
                    </div>
                </div>
                <div className="header__right">
                    <HeaderOption Icon={Home} title='Home' />
                    <HeaderOption Icon={SupervisorAccount} title='My network' />
                    <HeaderOption Icon={BusinessCenter} title='Jobs' />
                    <HeaderOption Icon={Chat} title='Messagging' />
                    <HeaderOption Icon={Notifications} title='Notifications' />
                    <HeaderOption title='me' avatar onClick={logoutFromApp} />
                    <HeaderOption title='Work' Icon={Apps} />
                    <HeaderOption title='Learning' Icon={LaptopChromebook} />
                </div>
            </div>
        </div>
    );
};

export default Header;
