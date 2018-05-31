import React, { Component } from 'react';
import {Router, Route} from 'react-router';
import {history} from "./helpers/history";

import {HomePage} from "./Pages/Home/index";



class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div id={'content-wrapper'}>
            <Route exact path='/' component={HomePage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
