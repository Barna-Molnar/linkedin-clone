import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';



const Header = () => {


    const dispatch = useDispatch()
    const logoutFromApp = ()=> {
        dispatch(logout())
        auth.signOut()
    }
    
    return (
        <div className='header'>

            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search'/>
                </div>
            </div>
            <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption  Icon={SupervisorAccountIcon} title='My network'/>
            <HeaderOption  Icon={BusinessCenterIcon}  title='Jobs'/>
            <HeaderOption   Icon={ChatIcon} title='Messagging'/>
            <HeaderOption   Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption   title='me' avatar onClick={logoutFromApp}/>
            </div>
        </div>
    );
};

export default Header;
