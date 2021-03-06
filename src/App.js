import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
        <Router>
            <Navbar />
            <Switch>
                {/*This is setting the TRLY link that can be clicked */}
                <Route path='/' exact component=
                    {Home} />
                {/*This is setting the paths when a button on the navbar is clicked */}
                <Route path={'/services'} component={Services} />
                <Route path={'/products'} component={Products} />
                <Route path={'/sign-up'} component={SignUp} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
