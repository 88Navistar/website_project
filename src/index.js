/*!
=========================================================
* Material Kit PRO React - v1.9.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router";

// pages for this product
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import GalleryPage from "views/GalleryPage/GalleryIndex.js";
import DashboardPage from "views/DashboardPage/DashboardPage.js";
import CommissionPage from "views/CommissionPage/CommissionPage.js";
const hist = createBrowserHistory();

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return fakeAuth.isAuthenticated === true ? children : <Redirect to="/login-page" />
    }}
    />
  );
};

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/commission-page" component={CommissionPage} />
      <Route exact path="/contact-us" component={ContactUsPage} />
      <PrivateRoute exact path="/dashboard-page" component={DashboardPage} />
      <Route exact path="/gallery-page" component={GalleryPage} />
      <Route exact path="/landing-page" component={LandingPage} />
      <Route exact path="/login-page" component={LoginPage} />
      <Route exact path="/profile-page" component={ProfilePage} />
      <Route exact path="/signup-page" component={SignupPage} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
