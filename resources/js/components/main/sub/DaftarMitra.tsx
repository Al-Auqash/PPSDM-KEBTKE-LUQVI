import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import DataTable from 'react-data-table-component';
import {columns} from "./ColumnDaftarMitra";
import CardContent from "./CardContent";

const daftarMitra = () => {

    const [daftarMitra, setDaftarMitra] = useState<string[]>([]);
    const [search, setSearch] = useState([
        {
            keyword: "",
            region_id: "",
        },
    ]);

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

    const getSearch = async (e) => {
        e.preventDefault();

        const params = {
            keyword: search.keyword,
            region_id: search.region_id,
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
        <CardContent title="Daftar Mitra"
                     content={<DataTable columns={columns}
                                         data={daftarMitra}/>}/>
    )
}

export default daftarMitra;
