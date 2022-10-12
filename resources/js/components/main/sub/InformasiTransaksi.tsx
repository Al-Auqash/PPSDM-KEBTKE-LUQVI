import React, {useEffect, useState} from 'react';
import CardContent from "./CardContent";
import axios from "axios";
import TableInformasiTransaksi from "../../Table/TableInformasiTransaksi";
import {DataInformasiTransaksiInterface} from "../../interface/Interface";

const informasiTransaksi = () => {
    const [dataInformasiTransaksi, setDataInformasiTransaksi] = useState<DataInformasiTransaksiInterface[]>([]);
    const getInformasiTransaksi = async () => {
        await axios
            // .get("/api/surat-kerja-sama")
            .get("/api/surat-kerja-sama")
            .then((response) => {
                setDataInformasiTransaksi(response.data);
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    };

    useEffect(() => {
        getInformasiTransaksi()
    }, [])

    console.log(dataInformasiTransaksi)

    // @ts-ignore
    return (
        <CardContent title="Informasi Transaksi"
                     content={<TableInformasiTransaksi data={dataInformasiTransaksi} rowsPerPage={5}
                     />}/>

    )
}

export default informasiTransaksi;

