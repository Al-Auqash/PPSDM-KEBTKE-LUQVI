import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import "./style.css";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const index = () => {
    return (
        <div className="container-fluid background-image p-0 m-0">
            <Routes>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
        </div>
    );
};
export default index;
