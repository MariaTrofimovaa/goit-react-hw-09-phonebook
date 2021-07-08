import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

const Homepage = lazy(() => import("../../pages/homepage/Homepage"));
const Register = lazy(() => import("../../pages/register/Register"));
const Login = lazy(() => import("../../pages/login/Login"));
const Contacts = lazy(() => import("../../pages/contacts/Contacts"));

const Main = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={Homepage} />
          <PublicRoute
            path="/register"
            component={Register}
            redirectTo="/contacts"
            restricted
          />
          <PublicRoute
            path="/login"
            component={Login}
            redirectTo="/contacts"
            restricted
          />
          <PrivateRoute
            path="/contacts"
            component={Contacts}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
