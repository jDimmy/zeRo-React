import React from "react";
import { Redirect } from "react-router-dom";

// Dashboard
import Dashboard from "../pages/Dashboard/index";

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
];

const authRoutes = [
 
];

export { userRoutes, authRoutes };
