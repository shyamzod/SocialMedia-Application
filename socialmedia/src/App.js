
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import SideBar from './components/sidebar.jsx';
import CreatePost from './components/createpost.jsx';
import PostList from './components/PostList.jsx';
import { useState } from 'react';


function App() {
  const [selectedTab,changeSelectedTab] = useState("Home");

  return (
    <div className="app-container">  
      <SideBar selectedTab={selectedTab} changeSelectedTab={changeSelectedTab}/>    
      <div className="content">  
      <Header/>
      {selectedTab === "Home"? <PostList/>:<CreatePost/>}         
      <Footer/>
      </div>
    </div>
  );
}


export default App;
