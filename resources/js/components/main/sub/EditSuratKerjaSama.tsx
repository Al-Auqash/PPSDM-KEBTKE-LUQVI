import React, {useEffect, useState} from "react";
import CardContent from "./CardContent";
import {useParams} from "react-router-dom";
import axios from "axios";

const editSuratKerjaSama = () => {

    interface suratKerjaSama {
        id: string,
        id_tipe_surat: number,
        tipe_surat: string,
        nomor_surat: string,
        judul_ks: string,
        yang_bertanda_tangan: string,
        tanggal_dimulai: string,
        tanggal_berakhir: string,
        estimasi_penerimaan: string,
        realisasi_penerimaan: string,
        capaian: string,
        catatan: string,
        nama_mitra: string,
        koordinator: string,
        alamat: string,
        kontak: string,
        rekening_mitra: string,
    }

    const params = useParams();

    const [dataSuratKerjaSama, setSuratKerjaSama] = useState<suratKerjaSama[]>([])

    const getSuratKerjaSama = async () => {
        await axios
            .get('/api/surat-kerja-sama/', {
                params: {id: params.id},
            })
            .then((response) => {
                setSuratKerjaSama(response.data)
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    }

    useEffect(() => {
        getSuratKerjaSama()
    }, [])

    const FormEdit = () => {
        return (
            <form>
                <div className="form-group">
                    <div className="form-group py-2">
                        <label className="form-check-label">Tipe Surat</label>
                        <input
                            className="form-control"
                            type="text"
                            name="text"
                            id="text"
                            autoComplete="false"
                            value={dataSuratKerjaSama.tipe_surat}
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Nomor Surat</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nomor_surat"
                            id="nomor_surat"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Judul KS</label>
                        <input
                            className="form-control"
                            type="text"
                            name="judul_ks"
                            id="judul_ks"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Yang Bertanda Tangan</label>
                        <input
                            className="form-control"
                            type="text"
                            name="yang_bertanda_tangan"
                            id="yang_bertanda_tangan"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Tanggal Dimulai</label>
                        <input
                            className="form-control"
                            type="date"
                            name="tanggal_dimulai"
                            id="tanggal_dimulai"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Tanggal Berakhir</label>
                        <input
                            className="form-control"
                            type="date"
                            name="tanggal_berakhir"
                            id="tanggal_berakhir"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Estimasi Penerimaan</label>
                        <input
                            className="form-control"
                            type="text"
                            name="estimasi_penerimaan"
                            id="estimasi_penerimaan"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Realisasi Penerimaan</label>
                        <input
                            className="form-control"
                            type="text"
                            name="realisasi_penerimaan"
                            id="realisasi_penerimaan"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Capaian</label>
                        <input
                            className="form-control"
                            type="text"
                            name="capaian"
                            id="capaian"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Catatan</label>
                        <input
                            className="form-control"
                            type="text"
                            name="catatan"
                            id="catatan"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Nama Mitra</label>
                        <input
                            className="form-control"
                            type="text"
                            name="nama_mitra"
                            id="nama_mitra"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Koordinator</label>
                        <input
                            className="form-control"
                            type="text"
                            name="koordinator"
                            id="koordinator"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Alamat</label>
                        <input
                            className="form-control"
                            type="text"
                            name="alamat"
                            id="alamat"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Kontak</label>
                        <input
                            className="form-control"
                            type="text"
                            name="kontak"
                            id="kontak"
                            autoComplete="false"
                        />
                    </div>
                    <div className="form-group py-2">
                        <label className="form-check-label">Rekening Mitra</label>
                        <input
                            className="form-control"
                            type="text"
                            name="rekening_mitra"
                            id="rekening_mitra"
                            autoComplete="false"
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        )
    }
    return (
        <CardContent title="Tambah Dokumen" content={<FormEdit/>}/>
    )
}

export default editSuratKerjaSama;
