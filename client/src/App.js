import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MyProfile from "./components/MyProfile";
import Explore from "./components/Explore";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NoPage from "./components/NoPage";
import { UserContext } from "./context/UserContext.js";
import { useState } from "react";
import Settings from "./components/Settings";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  //const value = useMemo(() => ({ token, setToken }), [token, setToken]);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ token: token, setToken, isLoggedIn: !!token }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:profile" element={<MyProfile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/404" element={<NoPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
