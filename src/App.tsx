import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
	console.log(process.env.REACT_APP_API_KEY);
  return (
    	<BrowserRouter>
			<Routes>
				<Route path='/'  element={<LoginPage />}/>
				<Route path="/home" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;
