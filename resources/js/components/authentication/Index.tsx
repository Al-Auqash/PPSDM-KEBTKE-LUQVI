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
        </div>
    );
};
export default index;
