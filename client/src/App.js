import './App.css';

import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://miro.medium.com/max/1024/0*4ty0Adbdg4dsVBo3.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world!
        </a>
      </header>
    </div>
  );
}
*/

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
};

export default App;
