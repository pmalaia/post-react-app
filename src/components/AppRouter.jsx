import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/posts" element={<Posts />}></Route>
      <Route exact path="/posts/:id" element={<PostIdPage />}></Route>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  );
};

export default AppRouter;
