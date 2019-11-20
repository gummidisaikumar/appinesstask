import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../customPages/Dashboard/Dashboard";
import EmployeeDetails from "../customPages/EmployeeDetails/EmployeeDetails";
import Login from "../customPages/Login/Login";

class RenderApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      
    return (
      <div>
        <BrowserRouter>
          <Switch>
              <div className="container-fluid">
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/employeeList" component={EmployeeDetails} />
                <Route exact path="/" component={Login} />
              </div>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default RenderApp;
