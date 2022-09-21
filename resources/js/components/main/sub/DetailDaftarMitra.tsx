import CardContent from "./CardContent";
import Table from "../../Table";
import React, {useEffect, useState} from "react";
import {SuratKerjaSama} from "../../interface/Interface";
import {useParams} from "react-router-dom";
import axios from "axios";

const detailDaftarMitra = () => {

    const params = useParams();

    // @ts-ignore
    const [dataDaftarMitra, setDataDaftarMitra] = useState<SuratKerjaSama>([])

    const getMitra = async () => {
        await axios
            .get('/api/surat-kerja-sama/', {
                params: {id: params.id},
            })
            .then((response) => {
                setDataDaftarMitra(response.data[0])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getMitra()
    }, [])

    const ContentDetail = () => {
        return (
            <div>
                <h1 className="text-center text-decoration-underline fw-bold">{dataDaftarMitra.nama_mitra}</h1>
                <table className="table table-borderless w-auto">
                    <tr>
                        <td className="pe-4">
                            Kontak
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataDaftarMitra.kontak}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Alamat
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataDaftarMitra.alamat}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Koordinator
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataDaftarMitra.koordinator}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Rekening
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataDaftarMitra.rekening_mitra}
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Kerja Sama
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            {dataDaftarMitra.nama_mitra}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
    return (
        <CardContent title="DAFTAR MITRA"
                     content={<ContentDetail/>}
        />
    )
}

export default detailDaftarMitra;
