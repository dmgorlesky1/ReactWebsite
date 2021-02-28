import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                {/*This is setting the TRLY link that can be clicked */}
                <Route path='/' exact />
            </Switch>
        </Router>
    </>
  );
}

export default App;
