
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import SideBar from './components/sidebar.jsx';
import CreatePost from './components/createpost.jsx';
import PostList from './components/PostList.jsx';
import PostListProvdier from './store/post-list-store.jsx'
import { useState } from 'react';


function App() {
  const [selectedTab,changeSelectedTab] = useState("Home");

  return (
    <PostListProvdier>
      <div className="app-container">  
        <SideBar selectedTab={selectedTab} changeSelectedTab={changeSelectedTab}/>    
        <div className="content">  
        <Header/>
        {selectedTab === "Home"? <PostList/>:<CreatePost/>}         
        <Footer/>
        </div>
      </div>
    </PostListProvdier>
  );
}


export default App;
