import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/login.js";

import { Route, Switch, BrowserRouter } from 'react-router-dom';


class App extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
  state = {
    term: "Fall 2020"
  }

  render() {
    return (
        <div>
        <BrowserRouter>
          <Switch> 
            <Route exact path='/' render={() => 
                            (
                              <LoginForm/>
                            )}/>
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}


export default App;
