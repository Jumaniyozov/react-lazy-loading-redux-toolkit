import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, getPostStates} from "./features/posts/postSlice";
import NavbarComponent from "./components/Navbar.component";
import {BrowserRouter, Route, Router} from "react-router-dom";
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
