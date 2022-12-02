import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MyProfile from "./components/MyProfile";
import Explore from "./components/Explore";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NoPage from "./components/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:profile" element={<MyProfile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/404" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
