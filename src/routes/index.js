import React from "react";
import { Routes as Routers, Route } from "react-router-dom";
import { Header as Navbar, Loading } from "components";
import { Home, About, Login, Signup, Errors } from "screens";
import { ROUTES } from "constants";
import { Authguard } from "helpers";
import AuthRoute from "./authRoute";

const Routes = () => {
  return (
    <div className="main">
      <Navbar />
      <Routers>
        <Route
          path={ROUTES.home}
          element={
            <React.Suspense fallback={<Loading />}>
              <Authguard>
                <Home />
              </Authguard>
            </React.Suspense>
          }
        />
        <Route
          path={ROUTES.about}
          element={
            <React.Suspense fallback={<Loading />}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path={ROUTES.login}
          element={
            <React.Suspense fallback={<Loading />}>
              <AuthRoute>
                <Login />
              </AuthRoute>
            </React.Suspense>
          }
        />
        <Route
          path={ROUTES.signup}
          element={
            <React.Suspense fallback={<Loading />}>
              <AuthRoute>
                <Signup />
              </AuthRoute>
            </React.Suspense>
          }
        />
        <Route
          path={ROUTES.error}
          element={
            <React.Suspense fallback={<Loading />}>
              <Errors />
            </React.Suspense>
          }
        />
      </Routers>
    </div>
  );
};

export default Routes;
