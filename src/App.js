import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import Widgets from './Components/Widget/Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider'

function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="app">
    { !user ? (<Login/>):
      (
      <>
       <Header/>
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div>
      </>
    )}
     
    </div>
  );
}

export default App;
