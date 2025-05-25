import React, { useState, useEffect } from 'react';
import './App.css';
import Opening from './components/Opening';
//import opening_background from './opening_background.jpg'
import Blogbar from './components/Blogbar';
import Box from './components/Box';
import ProfileImg from './components/ProfileImg';
import Info from "./components/Info";
import { Routes, Route} from 'react-router-dom';
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";


export default function App() {
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOpening(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="appContainer">
      {showOpening && <Opening />}

      {!showOpening && (
        <div className="mainContent">
          <Blogbar />
					<div className="wrapper">
						<ProfileImg/>
						<Info/>
						<Box className="box3" title={"SKILLS"} />
						<Box className="box4" />
						<Box className="box5" />

					</div>
          <Routes>
            <Route path="/" element={<Opening/>} />
            <Route path="/listPage" element={<ListPage />} />
            <Route path="/writePage" element={<WritePage />} />
          </Routes>
        </div>
      )}

    </div>
  );
}