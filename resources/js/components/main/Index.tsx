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
import DetailSuratKerjaSama from "./sub/DetailSuratKerjaSama";
import DetailDaftarMitra from "./sub/DetailDaftarMitra";
import PenerimaanTotal from "./sub/PenerimaanTotal";

const index = () => {
    return (
        <div className="d-flex flex-column base-font-family p-0 m-0">
            <Navbar/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="surat-kerja-sama/:nama/:id" element={<SuratKerjaSama/>}/>
                <Route path="surat-kerja-sama/tambah" element={<TambahSuratKerjaSama/>}/>
                <Route path="surat-kerja-sama/:nama/:id/edit/:idSurat" element={<EditSuratKerjaSama/>}/>
                <Route path="surat-kerja-sama/:nama/:id/detail/:idSurat" element={<DetailSuratKerjaSama/>}/>
                <Route path="daftar-mitra" element={<DaftarMitra/>}/>
                <Route path="daftar-mitra/detail/:id" element={<DetailDaftarMitra/>}/>
                <Route path="informasi-transaksi" element={<InformasiTransaksi/>}/>
                <Route path="informasi-transaksi/penerimaan-total" element={<PenerimaanTotal/>}/>
            </Routes>

        </div>
    );
};
export default index;
