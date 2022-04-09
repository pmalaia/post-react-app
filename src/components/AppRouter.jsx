import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privatRoutes } from "../router";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading } = useContext(AuthContext)
  if(isLoading) {
    return <Loader />
  }

  return isAuth ? (
    <Routes>
      {privatRoutes.map((route) => (
        <Route
          key={route.path}
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}

      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
