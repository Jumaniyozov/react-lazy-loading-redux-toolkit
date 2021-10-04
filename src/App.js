import React from 'react';
import './App.css';
import NavbarComponent from "./components/Navbar.component";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./components/Home.page";
import AccountPage from "./components/Account.page";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavbarComponent/>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/account" component={AccountPage}/>
            </BrowserRouter>
        </>
    );
}

export default App;
