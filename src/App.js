import React, { useState, useEffect } from 'react';
import './App.css';
import Opening from './components/Opening';
//import opening_background from './opening_background.jpg'
import Blogbar from './components/Blogbar';
//import Box from './components/Box';
//import ProfileImg from './components/ProfileImg';
//import Info from "./components/Info";
import { Routes, Route, useNavigate} from 'react-router-dom';
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";
import MainPage from "./pages/MainPage";


export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const navigate = useNavigate();

useEffect(() => {
    if (showOpening) {
      const timer = setTimeout(() => {
        setShowOpening(false);
        navigate("/", { replace: true });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showOpening, navigate]);

  if (showOpening) {
    return (
      <div className="appContainer">
        <Opening />
      </div>
    );
  }

  return (
    <div className="mainContent">
      <Blogbar />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/listPage" element={<ListPage />} />
          <Route path="/writePage" element={<WritePage />} />
        </Routes>
      </div>
    </div>
  );
}
