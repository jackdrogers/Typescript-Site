import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <div className="body">
                    <div className="container">
                        <Switch>
                            <Route path="/contact">
                                <p>Contact</p>
                            </Route>
                            <Route path="/about">
                                <p>About</p>
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;