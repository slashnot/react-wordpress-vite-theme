import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import React from 'react';

const routes = () => {
    return (
        <Router basename="Theme/">
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <h1>ABOUT</h1>
                    </Route>
                    <Route path="/users">
                        <h1>USERS</h1>
                    </Route>
                    <Route path="/">
                        <h1>HOME</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
  };

export default routes;