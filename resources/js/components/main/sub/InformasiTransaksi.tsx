import React, {useState} from 'react';
import DataTable from 'react-data-table-component';
import CardContent from "./CardContent";
import {columns} from "./ColumnInformasiTransaksi";
import axios from "axios";

const informasiTransaksi = () => {

    interface DataInformasiTransaksiInterface {
        id: number,
        nama_perusahaan: string,
        tanggal_transaksi: string,
        jenis_layanan: string,
        jumlah_penerimaan: string
    }

    const [dataInformasiTransaksi, setDataInformasiTransaksi] = useState<DataInformasiTransaksiInterface[]>([]);
    const getInformasiTransaksi = async () => {
        await axios
            // .get("/api/surat-kerja-sama")
            .get("/api/surat-kerja-sama")
            .then((response) => {
                setDataInformasiTransaksi(response.data);
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    };

    // @ts-ignore
    return (
        <CardContent title="Informasi Transaksi"
                     content={<DataTable columns={columns} data={dataInformasiTransaksi}
                     />}/>

    )
}

export default informasiTransaksi;

