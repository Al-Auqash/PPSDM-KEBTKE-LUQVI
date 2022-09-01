import axios from "axios";
import {useEffect, useState} from "react";
// import React, { useEffect, useState } from "react";

const Navbar = () => {
    // const signOut = () => {
    //     const token = localStorage.getItem("token");
    //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //
    //     axios
    //         .post("/authentication/signOut")
    //         .then(() => {
    //             localStorage.removeItem("token");
    //             localStorage.clear();
    //             window.location.href = "/";
    //         })
    //         .catch((error) => {
    //             console.log(error.response.data);
    //         });
    // };
    //
    // const [user, setUser] = useState([]);
    const [tipeSurat, setTipeSurat] = useState([]);

    const getTipeSKS = async () => {
        await axios
            .get("/api/tipe-surat")
            .then((response) => {
                setTipeSurat(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    };

    useEffect(() => {
            getTipeSKS();
        },
        []
    )

    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-secondary w-100">
            <div className="container-fluid d-flex flex-row justify-content-space-between m-0">
                <a className="navbar-brand" href="{{ url('/') }}">
                    <img src="" width="50" alt="..."/>
                </a>
                <a className="navbar-brand" href="{{ url('/') }}">
                    DR. LUQVI
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse w-100"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link px-4 mx-2" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="surat_kerja_sama" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Surat Kerja Sama
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {tipeSurat.map((tipeSurat) => (
                                    <li key={tipeSurat.id}>
                                        <a className="dropdown-item" href={`/surat-kerja-sama/${tipeSurat.id}`}>{tipeSurat.nama_tipe_surat}</a>
                                    </li>
                                ))}
                                <li><a className="dropdown-item" href="/surat-kerja-sama/tambah">Tambah Dokumen</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="detail_surat" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Detail Surat
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Daftar Mitra</a></li>
                                <li><a className="dropdown-item" href="#">Informasi Transaksi</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="account" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Halo, User
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Sign Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
