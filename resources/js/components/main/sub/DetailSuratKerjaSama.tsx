import React from 'react';
import CardContent from "./CardContent";

const detailSuratKerjaSama = () => {
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
                            Nomor Surat
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
                            Nama Perusahaan
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
                            Judul Ks
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
                            Tanggal Dimulai
                        </td>
                    </tr>
                    <tr>
                        <td className="pe-4">
                            Tanggal Berakhir
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            Tanggal Berakhir
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
                            Potensi Penerimaan
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
                            Realisasi Penerimaan
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
                            Capaian
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
                            Catatan
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
                            Yang Bertanda Tangan
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
    return (
        <CardContent title="Detail Dokumen" content={<ContentDetail/>}/>
    )
}

export default detailSuratKerjaSama;
