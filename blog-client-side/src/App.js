import "./App.css";

import React, { useContext, useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

// import { TestBody } from "./Components/TestBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePost } from "./Pages/CreatePost";
import { Post } from "./Pages/Post";
import { Registration } from "./Pages/Registration";
import axios from "axios";
import { AuthContext } from "./Helper/AuthContext";
import { PageNotFound } from "./Pages/PageNotFound";
import { Profile } from "./Pages/Profile";
import { ChangePassword } from "./Pages/ChangePassword";

function App() {
  const apiLink = "http://localhost:3001/auth/authCheck";
  const [authState, setAuthState] = useState({
    status: false,
    username: "",
    id: 0,
  });

  useState(() => {
    axios
      .get(apiLink, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);
  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/create" exact element={<CreatePost />} />
            <Route path="/post/:id" exact element={<Post />} />
            <Route path="/reg" exact element={<Registration />} />
            <Route path="/profile/:id" exact element={<Profile />} />
            <Route path="/changepassword" exact element={<ChangePassword />} />
            <Route path="/*" exact element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
