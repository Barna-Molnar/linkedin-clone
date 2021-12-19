import React from 'react'
import './HeaderOption.css'
import {Avatar} from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const HeaderOption = ({title, Icon, avatar, onClick}) => {

    const user = useSelector(selectUser)
    return (
        <div className={`headerOption__wrapper ${avatar ? "rightBorder-weak" : ''}`}>
            <div className='headerOption' onClick={onClick}>
                {Icon && < Icon className='headerOption__icon' />}
                {avatar && (
                    <Avatar className='headerOption__icon' src={user?.photUrl} >{user?.displayName[0]}</Avatar> 
                    )}
                <h3 className='headerOption__title'>{avatar ? user?.displayName : title}</h3>
            </div>
        </div>
    )
}

export default HeaderOption 
