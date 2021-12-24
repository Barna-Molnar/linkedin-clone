import React, { useEffect, useState } from 'react';
// import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import { CalendarViewDay, EventNote, Image, Subscriptions } from '@mui/icons-material';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';
import styled from 'styled-components';
import { Avatar } from '@mui/material';


const FeedSection = styled.div`
    flex: 0.6;
    margin: 0 20px;


.feed__container {
    background-color: white;
    padding: 10px 10px 5px 10px;
    border-radius: 10px;
    margin-bottom: 20px;
}
.feed__inputContainer {
    display: flex;
    min-width: 100%;
    align-items: center;
}
.feed__inputContainer-Avatar {
    width: 46px;
    height: 46px;
}
.feed__input {
    border: 1px solid lightgray;
    border-radius: 30px;
    display: flex;
    padding: 10px;
    color: gray;
    padding-left: 15px;
    margin-left: 15px;
    width: 100%;
}

.feed__input > form  {
    display: flex;
    width: 100%;

}
.feed__input > form  > input {
    border: none;
    flex: 1;
    margin-left: 10px;
    outline-width: 0;
    font-weight: 600;
}
.feed__input > form  > button  {
    display: none;
}
.feed__inputOptions {
    display: flex;
    justify-content: space-between;

}

`;


const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => (
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
                )
            ));
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");

    };
    return (
        <FeedSection>
            <div className="feed__container">
                <div className="feed__inputContainer">
                    <Avatar  className="feed__inputContainer-Avatar" src={user?.photoUrl}>
                        {user?.displayName[0]}
                    </Avatar>
                    <div className="feed__input">
                        <CreateIcon />
                        <form >

                            <input type="text"
                             value={input} 
                             onChange={(e) => setInput(e.target.value)} 
                             placeholder='Start a post'
                             />


                            <button
                                onClick={sendPost}
                                type='submit'
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <div className="feed__inputOptions">
                    <InputOption color='#70B5f9' Icon={Image} title='Photo' />
                    <InputOption color='#E7A33E' Icon={Subscriptions} title='Video' />
                    <InputOption color='#C0Cbcd' Icon={EventNote} title='Event' />
                    <InputOption color='#7fc15e' Icon={CalendarViewDay} title='Write article' />
                </div>
            </div>
            {/* <FlipMove> */}
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            {/* </FlipMove> */}

        </FeedSection>
    );
};

export default Feed;
