import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {
  const isAuthenticated = localStorage.getItem("authenticatedUser");
  return isAuthenticated ? children : <Navigate to="/signin" />
}

export default ProtectedRoute;