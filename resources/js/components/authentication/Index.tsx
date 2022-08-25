import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./../App.css";
import "./Authentication.css";

import axios from "axios";

const index = () => {
    return (
        <div className="row align-items-center mt-4">
            <div className="col d-flex flex-column justify-content-center align-items-center">
                <Routes>
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                </Routes>
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-center">
                <img src="/images/ppf-logo.png" width="200" />
                <h3>PAID PROMOTE FINDER</h3>
                <span>Find event or sponsor the best for you</span>
            </div>
        </div>
    );
};
export default index;
