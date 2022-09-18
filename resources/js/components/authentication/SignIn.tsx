import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {useState} from "react";
import axios from "axios";
import LoggedIn from "./LoggedIn";

const signIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notification, setNotification] = useState([]);

    const navigate = useNavigate();

    const signIn = async (event: any) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append("username", username);
        formData.append("password", password);

        await axios
            .post("/authentication/sign-in", formData)
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
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <img className="float-start" src="/images/1.jpeg" alt="not found"/>
            <div className="d-flex flex-row w-50">
                <h1 className="base-second-font-family text-nowrap w-75 pt-4">DR. LUQVI</h1>
                <h2 className="base-second-font-family text-wrap">Data Repository for Linking Quality Vocational
                    Cooperation</h2>
            </div>
            <div className="card w-50 background-purple">
                <div className="card-body p-4">
                    <form
                        method="post"
                        className="form-group"
                        onSubmit={signIn}
                    >
                        {notification && <div>{notification}</div>}
                        <div className="form-group">
                            <div className="input-group my-3">
                                <span className="input-group-text bg-warning p-3 border-0" id="basic-addon1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                </span>
                                <input
                                    className="form-control bg-dark text-white border-0"
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    id="username"
                                    placeholder="username"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-group my-3">
                                <span className="input-group-text bg-warning p-3 border-0" id="basic-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                    </svg>
                                </span>
                                <input
                                    className="form-control bg-dark text-white border-0"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    autoComplete="false"
                                    placeholder="password"
                                />
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <button className="form-control btn btn-warning text-white font-weight-bold fs-5 py-3">
                                SIGN IN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default signIn;
