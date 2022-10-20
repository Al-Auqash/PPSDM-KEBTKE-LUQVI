import React, {useEffect, useState} from "react";
import axios from "axios";
import CardContent from "./CardContent";
import Table from "../../Table/TableDaftarMitra";
import {DaftarMitraInterface, SearchFilterDaftarMitra} from "../../interface/Interface";

const daftarMitra = () => {

    const [daftarMitra, setDaftarMitra] = useState<DaftarMitraInterface[]>([]);
    const [search, setSearch] = useState<SearchFilterDaftarMitra>();

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

    const searchByFilter = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = {
            keyword: search?.keyword,
        };

        await axios
            .get("/api/daftar-mitra", {params})
            .then((response) => {
                setDaftarMitra(response.data.data);
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
        getDaftarMitra();
    }, [])

    console.log(daftarMitra)

    return (
        <CardContent title="DAFTAR MITRA"
                     content={<Table searchByFilter={searchByFilter} handleChangeFilter={handleChangeFilter}
                                     data={daftarMitra} rowsPerPage={5}/>
                     }/>
    )
}

export default daftarMitra;
