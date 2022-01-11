import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App(){
    return (
        //BEM
        <Router>

        <div className="app">
            <Switch>
            <Route path="/checkout">
                <Header />
                <h1> I AM A CHECKOUT</h1>
            </Route>
            <Route path="/">
                <Header />
                <Home />
            </Route>
            </Switch>


           
        </div>
        </Router>
    );
}

export default App;