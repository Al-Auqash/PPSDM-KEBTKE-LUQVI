import React, {useEffect, useState} from 'react';
import CardContent from "./CardContent";
import axios from "axios";
import {SuratKerjaSama} from "../../interface/Interface";
import {useParams} from "react-router-dom";

const detailSuratKerjaSama = () => {

    const params = useParams();

    const title = params.nama?.replace(/-/g, ' ').toUpperCase();

    // @ts-ignore
    const [dataSKS, setDataSKS] = useState<SuratKerjaSama>([]);

    const getSuratKerjaSamaById = async () => {
        await axios
            // .get("/api/surat-kerja-sama")
            .get("/api/surat-kerja-sama/", {
                params: {id: params.id},
            })
            .then((response) => {
                setDataSKS(response.data[0]);
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    };

    useEffect(() => {
        getSuratKerjaSamaById()
    }, [])

    const ContentDetail = () => {
        return (
            <div>
                <table className="table table-borderless w-auto">
                    <tr>
                        <td className="pe-4">
                            Nomor Surat
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataSKS.nomor_surat}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Nama Perusahaan
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataSKS.nama_mitra}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Judul Ks
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataSKS.judul_ks}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Tanggal Dimulai
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataSKS.tanggal_dimulai}
                        </td>
                    </tr>
                    {}
                    <tr>
                        <td className="pe-4">
                            Tanggal Berakhir
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataSKS.tanggal_berakhir}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Potensi Penerimaan
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataSKS.estimasi_penerimaan}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Realisasi Penerimaan
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataSKS.realisasi_penerimaan}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Capaian
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataSKS.capaian}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Catatan
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataSKS.catatan}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Yang Bertanda Tangan
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataSKS.yang_bertanda_tangan}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
    return (
        <CardContent title={title} content={<ContentDetail/>}/>
    )
}

export default detailSuratKerjaSama;
