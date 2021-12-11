
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="app">
    <Header/>
   

    <div className="app__body">
      <SideBar /> 
      <Feed />
    </div>




       
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
