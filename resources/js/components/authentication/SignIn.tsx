import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

import "./../App.css";

const signIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notification, setNotification] = useState([]);

    //define state validation
    // const [validation, setValidation] = useState([]);

    //define history
    const navigate = useNavigate();

    // const handleFieldChange = (e) => {
    //     setInput((inputField) => ({
    //         ...inputField,
    //         [e.target.name]: e.target.value,
    //     }));
    // };

    const signIn = async (event: any) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append("email", email);
        formData.append("password", password);

        await axios
            .post("/authentication/signIn", formData)
            .then((response) => {
                //set token on localStorage
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("username", response.data.user.username);
                localStorage.setItem("user_id", response.data.user.id);
                // localStorage.setItem("X-CSRF-TOKEN", response.data.csrf);
            })
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                //assign error to state "validation"
                console.log(error.response.data);
                setNotification(error.response.data.message);
            });
    };

    return (
        <div className="container">
            {/* {validation.message && (
                <div className="alert alert-danger">{validation.message}</div>
            )} */}
            <form
                method="post"
                className="form-group p-4 w-75"
                onSubmit={signIn}
            >
                {notification && <div>{notification}</div>}
                <div className="form-group py-2">
                    <label className="form-check-label">Email</label>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                    />
                </div>
                {/* {validation.email && (
                    <div className="alert alert-danger">
                        {validation.email[0]}
                    </div>
                )} */}
                <div className="form-group py-2">
                    <label className="form-check-label">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        autoComplete="false"
                    />
                </div>
                {/* {validation.password && (
                    <div className="alert alert-danger">
                        {validation.password[0]}
                    </div>
                )} */}
                <div className="form-group py-2">
                    <a className="text-dark-orange link-form fs-6">
                        forgot password?
                    </a>
                </div>
                <div className="form-group py-2">
                    <button className="form-control btn btn-warning fs-5 py-3">
                        SIGN IN
                    </button>
                </div>
                <div className="form-group py-2 text-center">
                    <p className="text-dark-orange p-0 m-0">or</p>
                </div>
                <div className="form-group py-2">
                    <button className="form-control btn btn-outline-warning fs-5 py-3">
                        SIGN UP FOR FREE
                    </button>
                </div>
                <div className="form-group py-2 text-center">
                    <a className="text-dark-orange link-form fs-6">
                        terms and conditions
                    </a>
                </div>
            </form>
        </div>
    );
};
export default signIn;
