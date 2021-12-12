import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import './Login.css';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert('Please enter a full name');
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name, 
                        photoUrl: profilePic, 
                    }));
                });
            }).catch(err=> {
                return alert(err)
            });

    };
    const loginToApp = (e) => {
       e.preventDefault();

       auth.signInWithEmailAndPassword(email, password)
       .then(userAuth => {
           dispatch(login({
               email: userAuth.user.email, 
               uid: userAuth.user.uid, 
               displayName: userAuth.user.displayName, 
               photoUrl: userAuth.user.photoURL
           })
           );
       }).catch(err=> alert(err))

    };
    return (
        <div className='login'>
            <img src="https://tccl.libnet.info/images/events/tccl/linkedin.png" alt="" />
            <form >
                <input type="text" placeholder='Full name (required if registering)' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Profile pic URL (optinonal)' value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />
                <input type="emial" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={loginToApp}>Sign In</button>
            </form>
            <p className=''>
                Not a member?{" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    );
};

export default Login;
