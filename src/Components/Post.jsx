import { Avatar } from '@mui/material';
import './Post.css';
import React, { forwardRef } from 'react';
import InputOption from './InputOption';
import { ThumbUpAltOutlined, ChatOutlined, ShareOutlined, SendOutlined } from '@mui/icons-material';
import { useSpring, animated } from 'react-spring';


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    const grow = useSpring({
            to: {transform: 'scale(1)'}, 
            from : {transform: 'scale(0)'}
    })
    return (
        <animated.div style={grow} ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title='Like' color='gray' />
                <InputOption Icon={ChatOutlined} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlined} title='Share' color='gray' />
                <InputOption Icon={SendOutlined} title='Send' color='gray' />
            </div>
        </animated.div>
    );
});

export default Post;
