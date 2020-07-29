import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import User from './User/User';
import Admin from './Admin/Admin';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <Route exact path="/dashboard/user" component={User} />
        <Route exact path="/dashboard/admin" component={Admin} />
      </div>
    );
  }
}

export default Dashboard;