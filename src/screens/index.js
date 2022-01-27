import React from "react";

export const Home = React.lazy(() => import("./home"));
export const About = React.lazy(() => import("./about"));
export const Errors = React.lazy(() => import("./errors"));
export const Login = React.lazy(() => import("./auth/login"));
export const Signup = React.lazy(() => import("./auth/signup"));
