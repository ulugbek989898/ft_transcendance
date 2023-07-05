import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import GamePage from './pages/GamePage';
import LeaderboardPage from './pages/LeaderboardPage';
import FriendsPage from './pages/FriendsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
	console.log(process.env.REACT_APP_API_KEY);
  return (
    	<BrowserRouter>
			<Routes>
				<Route path='/'  element={<LoginPage />}/>
				<Route path="/home" element={<HomePage />} />
				<Route path="/chat" element={<ChatPage />} />
				<Route path="/game" element={<GamePage />} />
				<Route path="/leaderboard" element={<LeaderboardPage />} />
				<Route path="/friends" element={<FriendsPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				
			</Routes>
		</BrowserRouter>
  );
}

export default App;
