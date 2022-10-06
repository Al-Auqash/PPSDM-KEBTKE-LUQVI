import React from "react";
import LoggedIn from "../../authentication/LoggedIn";

const home = () => {
    return (
        <div className="container">
            <div className="display-flex-col justify-content-center align-items-center w-100 h-100 p-4">
                <div className="card p-2 bg-transparent border-0">
                    <h2 className="card-title fw-bold text-center fs-1 text-wrap">SELAMAT DATANG DI WEBSITE DATABASE KERJASAMA PPSDM KEBTKE</h2>
                    <p className="card-body text-center">
                        <img width="800" src="/images/homepage.png" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default home;
