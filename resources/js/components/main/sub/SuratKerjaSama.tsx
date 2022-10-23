import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import CardContent from "./CardContent";

import Table from "./../../Table/TableSuratKerjaSama";

import {SearchFilterDaftarMitra, SuratKerjaSama} from "../../interface/Interface";

const suratKerjaSama = () => {

    const params = useParams();

    const [dataSKS, setDataSKS] = useState<SuratKerjaSama[]>([]);
    const [search, setSearch] = useState<SearchFilterDaftarMitra>();

    const name = params.nama?.replace(/-/g, ' ').toUpperCase();

    const getAllSKS = async () => {
        await axios
            // .get("/api/surat-kerja-sama")
            .get("/api/surat-kerja-sama/tipe-surat", {
                params: {id: params.id},
            })
            .then((response) => {
                setDataSKS(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    };

    const searchByFilter = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const paramsFilter = {
            id: params.id,
            keyword: search?.keyword,
            domain: search?.domain,
            year: search?.year,
        };

        await axios
            // @ts-ignore
            .get("/api/surat-kerja-sama/tipe-surat", {
                params: paramsFilter
            })
            .then((response) => {
                setDataSKS(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChangeFilter = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch((inputField) => ({
            ...inputField,
            // @ts-ignore
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        getAllSKS();
    }, [])

    console.log(search)

    return (
        <CardContent title={name}
                     content={<Table searchByFilter={searchByFilter} handleChangeFilter={handleChangeFilter}
                                     data={dataSKS} rowsPerPage={5}/>
                     }/>
    );
};
export default suratKerjaSama
