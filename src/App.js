import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Navbar from "./hooks/Navbar";
import './App.css';

function App() {
  const [currentUserId, setCurrentUserId] = useState(0);
  const [user, setUser] = useState(0);
  return (
    <BrowserRouter>
      <Navbar
      currentUserId={currentUserId}
      setCurrentUserId={setCurrentUserId}
      setUser={setUser}
      />
      <Routes>
        <Route
        path="/registration"
        element={<Registration currentUserId={currentUserId}/>}
        />
        <Route
        path="/login"
        element={
          <Login
          currentUserId={currentUserId}
          setCurrentUserId={setCurrentUserId}
          setUser={setUser}
          />
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
