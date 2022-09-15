import axios from "axios";
import {useEffect, useState} from "react";
// import React, { useEffect, useState } from "react";

const Navbar = () => {

    interface tipeSurat {
        id: number,
        nama_tipe_surat: string,
    }

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
    const [tipeSurat, setTipeSurat] = useState<tipeSurat[]>([]);

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
        <nav className="navbar sticky-top navbar-expand-md navbar-dark background-blue w-100">
            <div className="container-fluid d-flex flex-row justify-content-space-between m-0">
                <a className="navbar-brand" href="{{ url('/') }}">
                    <img src="" width="50" alt="..."/>
                </a>
                <a className="navbar-brand base-second-font-family fw-bold fs-1 text-black" href="{{ url('/') }}">
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
                    className="collapse navbar-collapse w-100 fs-4"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link px-4 mx-2 text-black fw-bold" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-black fw-bold" href="#" id="surat_kerja_sama"
                               role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Surat Kerja Sama
                            </a>
                            <ul className="dropdown-menu background-green" aria-labelledby="navbarDropdown">
                                {tipeSurat.map((tipeSurat) => (
                                    <li key={tipeSurat.id}>
                                        <a className="dropdown-item text-black fw-bold"
                                           href={`/surat-kerja-sama/${tipeSurat.nama_tipe_surat.replace(/\s+/g, '-').toLowerCase()}/${tipeSurat.id}`}>
                                            <img width="16" height="16" className="" src="/images/folder.svg" alt="image not found" />

                                            <span className="mx-2">{tipeSurat.nama_tipe_surat}</span>
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a className="dropdown-item text-black fw-bold" href="/surat-kerja-sama/tambah">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             className="bi bi-plus-circle float-start my-1" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path
                                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                        <span className="mx-2">Tambah Dokumen</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-black fw-bold" href="#" id="detail_surat"
                               role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Detail Surat
                            </a>
                            <ul className="dropdown-menu background-green" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item text-black fw-bold" href="/daftar-mitra">Daftar
                                    Mitra</a></li>
                                <li><a className="dropdown-item text-black fw-bold" href="/informasi-transaksi">Informasi
                                    Transaksi</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-black fw-bold" href="#" id="account"
                               role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Halo, User
                            </a>
                            <ul className="dropdown-menu background-green" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item text-black fw-bold" href="#">Sign Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
