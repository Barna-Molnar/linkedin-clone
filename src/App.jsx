import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
import SideBar from './Components/SideBar';
import Widgets from './Components/Widgets';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const  App = ()=>  {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user logged in 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
        setLoading(false)
      } else {
        // user is logged out  
        dispatch(logout());
        setLoading(false)

      }
    });
  }, [dispatch]);


  return (
    <div className="app">
      <Header />
      {/* {!user && loading && (<StyledLoadingMessage>Auth is being checked..... </StyledLoadingMessage> )} */}
      {(!user && !loading )?
        (<Login />
        ) : (
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets/>
          </div>
        )}



      
    </div>
  );
}

export default App;
