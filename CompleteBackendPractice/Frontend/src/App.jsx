import React from "react";
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import AllPosts from "./pages/AllPosts";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create" element={<CreatePost />} />

        <Route path="/posts" element={<AllPosts />} />
      </Routes>
    </>
  );
};

export default App;
