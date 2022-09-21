import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import DataTable from 'react-data-table-component';
import {columns} from "./ColumnDaftarMitra";
import CardContent from "./CardContent";
import Table from "../../Table";

const daftarMitra = () => {

    interface SearchInterface {
        keyword: string,
        region_id: string,
    }

    interface DaftarMitraInterface {
        id: number,
        nama_mitra: string,
        alamat: string,
        koordinator: string,
        kontak: string
    }

    const [daftarMitra, setDaftarMitra] = useState<DaftarMitraInterface[]>([]);
    const [search, setSearch] = useState<SearchInterface>();

    const getDaftarMitra = async () => {
        await axios
            // .get("/api/surat-kerja-sama")
            .get("/api/daftar-mitra")
            .then((response) => {
                setDaftarMitra(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    };

    const getSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = {
            keyword: search?.keyword,
            region_id: search?.region_id,
        };

        await axios
            .get("/api/daftar-mitra", {params})
            .then((response) => {
                setDaftarMitra(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getDaftarMitra();
    }, [])

    console.log(daftarMitra)

    return (
        <CardContent title="DAFTAR MITRA"
                     content={<Table data={daftarMitra} rowsPerPage={5}/>
                     }/>
    )
}

export default daftarMitra;
