import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Cypress from './pages/cypress/Cypress';
import UserList from './pages/userList/UserList';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/testing/cypress" element={<Cypress />} />
                    <Route exact path="/users" element={<UserList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
