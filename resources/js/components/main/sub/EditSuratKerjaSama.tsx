import React, {useEffect, useState} from "react";
import CardContent from "./CardContent";
import axios from "axios";
import {TipeSurat, SuratKerjaSama} from "../../interface/Interface";
import {useParams} from "react-router-dom";

const tambahSuratKerjaSama = () => {

    const params = useParams();

    const [message, setMessage] = useState(null);
    const [dataTipeSurat, setDataTipeSurat] = useState<TipeSurat[]>([])
    const [dataSuratKerjaSama, setSuratKerjaSama] = useState<SuratKerjaSama[]>([])
    const [inputSuratKerjaSama, setInputSuratKerjaSama] = useState<SuratKerjaSama[]>([])

    const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
        setInputSuratKerjaSama((inputField) => ({
            ...inputField,
            // @ts-ignore
            [e.target.name]: e.target.value,
        }));
    };

    const editSuratKerjaSama = () => {
        axios
            .put('/api/surat-kerja-sama/', inputSuratKerjaSama)
            .then((response) => {
                console.log(response.data)
                window.location.href = '/surat-kerja-sama/' + params.nama + '/' + params.id;
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    }

    const getSuratKerjaSama = async () => {
        await axios
            .get('/api/surat-kerja-sama/', {
                params: {id: params.idSurat},
            })
            .then((response) => {
                setSuratKerjaSama(response.data)
                setInputSuratKerjaSama(response.data[0])
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });

        await axios
            .get('/api/tipe-surat')
            .then((response) => {
                setDataTipeSurat(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getPreviousTipeSurat = () => {
        for (let i of dataTipeSurat) {
            for (let j of dataSuratKerjaSama) {
                if (i.id == j.id_tipe_surat) {
                    return i.nama_tipe_surat;
                }
            }
        }
    }

    useEffect(() => {
        getSuratKerjaSama();
    }, [])

    console.log(inputSuratKerjaSama)
    // console.log(dataSuratKerjaSama)

    return (
        <CardContent title="Edit Dokumen" content={
            dataSuratKerjaSama.map((data: any) => (
                <form onSubmit={editSuratKerjaSama} key={data.id}>
                    {message && (
                        <div className="alert alert-primary" role="alert">
                            Data Berhasil Ditambahkan!
                        </div>
                    )}
                    <div className="form-group mb-4">
                        <h4 className="fw-bold text-decoration-underline">Data Umum</h4>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Tipe Surat</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <select
                                        className="form-select w-100"
                                        name="id_tipe_surat"
                                        id="text"
                                        autoComplete="false"
                                        onChange={handleChange}
                                    >

                                        {
                                            data.id_tipe_surat ? (
                                                <option hidden
                                                        value={data.id_tipe_surat}>{getPreviousTipeSurat()}</option>
                                            ) : (
                                                <option hidden defaultValue={0}>Pilih Tipe Surat</option>
                                            )
                                        }

                                        {dataTipeSurat ? dataTipeSurat.map((tipeSurat) => (
                                            <option key={tipeSurat.id}
                                                    value={tipeSurat.id}>{tipeSurat.nama_tipe_surat}</option>
                                        )) : (
                                            <option>tidak ada data yang ditemukan</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Nomor Surat</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="nomor_surat"
                                        id="nomor_surat"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.nomor_surat}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Judul KS</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="judul_ks"
                                        id="judul_ks"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.judul_ks}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Yang Bertanda Tangan</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="yang_bertanda_tangan"
                                        id="yang_bertanda_tangan"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.yang_bertanda_tangan}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Tanggal Dimulai</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="date"
                                        name="tanggal_dimulai"
                                        id="tanggal_dimulai"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.tanggal_dimulai}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Tanggal Berakhir</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="date"
                                        name="tanggal_berakhir"
                                        id="tanggal_berakhir"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.tanggal_berakhir}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Estimasi Penerimaan</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="estimasi_penerimaan"
                                        id="estimasi_penerimaan"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.estimasi_penerimaan}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Realisasi Penerimaan</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="realisasi_penerimaan"
                                        id="realisasi_penerimaan"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.realisasi_penerimaan}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Capaian</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="capaian"
                                        id="capaian"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.capaian}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Catatan</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="catatan"
                                        id="catatan"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.catatan}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group mb-4">
                        <h4 className="fw-bold text-decoration-underline">Data Mitra</h4>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Nama Mitra</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="nama_mitra"
                                        id="nama_mitra"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.nama_mitra}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Koordinator</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="koordinator"
                                        id="koordinator"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.koordinator}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Alamat</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="alamat"
                                        id="alamat"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.alamat}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Kontak</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="kontak"
                                        id="kontak"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.kontak}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <div className="row">
                                <label className="control-label col-3 fs-5">Rekening Mitra</label>
                                <label className="control-label col-auto">:</label>
                                <div className="col-8">
                                    <input
                                        className="form-control w-100"
                                        type="text"
                                        name="rekening_mitra"
                                        id="rekening_mitra"
                                        autoComplete="false"
                                        onChange={handleChange}
                                        defaultValue={data.rekening_mitra}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="currentColor"
                             className="bi bi-plus-circle float-start my-1" viewBox="0 0 16 16">
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        <span className="mx-2 fw-bold">SUBMIT</span>
                    </button>
                </form>))
        }/>
    )
}

export default tambahSuratKerjaSama;
