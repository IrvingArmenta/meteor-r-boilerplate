import {Meteor} from 'meteor/meteor';
import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

// UI views folder
import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const AppHistory = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

export const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    AppHistory.replace('/dashboard');
  }
};

export const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    AppHistory.replace('/');
  }
};

export const onAuthChange = (isAuthenticated) => {
  pathname = location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
       AppHistory.replace('/dashboard');
       //console.log('triggering links redirect - tracker');
      //console.log('Logged In', isUnauthenticatedPage, isAuthenticated, pathname);
  } else if (isAuthenticatedPage && !isAuthenticated) {
      AppHistory.replace('/');
      //console.log('triggering else-if');
  }
};

export const routes = (
  <Router history={AppHistory}>
    <div>
        <Switch>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/' component={Login}/>
          <Route component={NotFound}/>
        </Switch>
    </div>
  </Router>
);
