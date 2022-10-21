import React, {useEffect, useState} from 'react';
import CardContent from "./CardContent";
import axios from "axios";
import TableInformasiTransaksi from "../../Table/TableInformasiTransaksi";
import {DataInformasiTransaksiInterface, SearchFilterDaftarMitra} from "../../interface/Interface";

const informasiTransaksi = () => {
    const [dataInformasiTransaksi, setDataInformasiTransaksi] = useState<DataInformasiTransaksiInterface[]>([]);
    const [search, setSearch] = useState<SearchFilterDaftarMitra>();
    const getInformasiTransaksi = async () => {
        await axios
            // .get("/api/surat-kerja-sama")
            .get("/api/informasi-transaksi")
            .then((response) => {
                setDataInformasiTransaksi(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    };

    const searchByFilter = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = {
            keyword: search?.keyword,
        };

        await axios
            .get("/api/informasi-transaksi", {params})
            .then((response) => {
                setDataInformasiTransaksi(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChangeFilter = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch((inputField) => ({
            ...inputField,
            // @ts-ignore
            keyword: e.target.value,
        }));
    };

    useEffect(() => {
        getInformasiTransaksi()
    }, [])

    // console.log(dataInformasiTransaksi)

    // @ts-ignore
    return (
        <CardContent title="Informasi Transaksi"
                     content={<TableInformasiTransaksi searchByFilter={searchByFilter}
                                                       handleChangeFilter={handleChangeFilter}
                                                       data={dataInformasiTransaksi} rowsPerPage={5}
                     />}/>

    )
}

export default informasiTransaksi;

