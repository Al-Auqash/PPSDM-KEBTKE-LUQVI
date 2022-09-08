import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Home from "./sub/Home";
import SuratKerjaSama from "./sub/SuratKerjaSama";
import TambahSuratKerjaSama from "./sub/TambahSuratKerjaSama";
import DaftarMitra from './sub/DaftarMitra'
import InformasiTransaksi from "./sub/InformasiTransaksi";
import EditSuratKerjaSama from "./sub/EditSuratKerjaSama";

const index = () => {
    return (
        <div className="d-flex flex-column first-font-family p-0 m-0">
            <Navbar/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="surat-kerja-sama/:id" element={<SuratKerjaSama/>}/>
                <Route path="surat-kerja-sama/tambah" element={<TambahSuratKerjaSama/>}/>
                <Route path="surat-kerja-sama/edit/:id" element={<EditSuratKerjaSama/>}/>
                <Route path="daftar-mitra" element={<DaftarMitra/>}/>
                <Route path="informasi-transaksi" element={<InformasiTransaksi/>}/>
            </Routes>

        </div>
    );
};
export default index;
