import React, { Component } from 'react';
import Editor from './Editor';
import Profile from './Profile';
import Home from './Home';
import {BrowserRouter, Route} from 'react-router-dom';
import fire from './Fire';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/terminal';
class App extends Component {
  render() {
    return (
      <div>
          
      <BrowserRouter>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/profile/:id" component={Profile}></Route>
        <Route exact path="/editor" component={Editor}></Route>

        </div>
  </BrowserRouter>
      </div>
    );
  }
}

export default App;
