import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import { CalendarViewDay, EventNote, Image, Subscriptions } from '@mui/icons-material';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => (
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
            name: 'Barni Molnar',
            description: 'Test',
            message: input,
            photoUrl: "https://",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

    };
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button
                            onClick={sendPost}
                            type='submit'
                        >
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption color='#70B5f9' Icon={Image} title='Photo' />
                    <InputOption color='#E7A33E' Icon={Subscriptions} title='Video' />
                    <InputOption color='#C0Cbcd' Icon={EventNote} title='Event' />
                    <InputOption color='#7fc15e' Icon={CalendarViewDay} title='Write article' />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}


        </div>
    );
};

export default Feed;
