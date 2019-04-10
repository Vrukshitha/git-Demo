import React, { Component } from 'react';
import './App.css';
import Docs from './Docs'
import Tutorial from './Tutorial'
import {Route,Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
        <ul>
          <li>
           <Link to="/docs">Docs</Link>
          </li>
          <li>
           <Link to="/tutorial">Tutorial</Link>
          </li>
        </ul>
      </nav>
       <p> This is main page</p>
       <Route path="/docs" component={Docs} />
       <Route path="/tutorial" component={Tutorial} />
      </div>
    );
  }
}

export default App;
