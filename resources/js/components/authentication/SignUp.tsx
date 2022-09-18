import React from "react";

import { useState } from "react";
import axios from "axios";

const signUp = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const handleFieldChange = (e: any) => {
        setInput((inputField) => ({
            ...inputField,
            [e.target.name]: e.target.value,
        }));
    };

    const signUp = (event: any) => {
        event.preventDefault();

        axios
            .post("/authentication/sign-up", {
                username: input.username,
                password: input.password,
            })
            .then((response) => {
                console.log(response);
                window.location.href = "/authentication/sign-in";
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (
        <div className="container">
            <form
                method="post"
                className="form-group p-4 w-75"
                onSubmit={signUp}
            >
                <div className="form-group py-2">
                    <label className="form-check-label">Username</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleFieldChange}
                    />
                </div>
                <div className="form-group py-2">
                    <label className="form-check-label">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleFieldChange}
                    />
                </div>
                <div className="form-group py-2">
                    <button
                        type="submit"
                        className="form-control btn btn-warning fs-5 py-3"
                    >
                        SIGN UP
                    </button>
                </div>
            </form>
        </div>
    );
};
export default signUp;
