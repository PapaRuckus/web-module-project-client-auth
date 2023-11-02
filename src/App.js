import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";

const LogOut = () => {
  return <h2>LogOut</h2>
}

const StyledDiv = styled.div`
  border-bottom: 2px solid black;
  width: 100%;
  padding-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 12px;
  font-size: 20px;
  margin-right: 10px; 
`;

function App() {
  return (
    <Router>
      <div className="App">
        <StyledDiv>
          <h2>FRIENDS DATABASE</h2>
          <nav>
            <StyledLink to="/">Login</StyledLink>
            <StyledLink to="/friends">FriendsList</StyledLink>
            <StyledLink to="/friends/add">AddFriends</StyledLink>
            <StyledLink to="/logout">Logout</StyledLink>
          </nav>
        </StyledDiv>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/friends/add" element={<AddFriends />} />
          <Route path="logout" element={<LogOut/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
