import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import DataTable from 'react-data-table-component';

import {columns} from "./ColumnSuratKerjaSama";
import CardContent from "./CardContent";

import {customStyle} from "./CustomDataTables";

const suratKerjaSama = () => {

    interface SuratKerjaSama {
        id: number,
        nomor_surat: string,
        nama_mitra: string,
        judul_ks: string,
    }

    interface TipeSurat {
        id: number,
        nama_tipe_surat: string,
    }

    const params = useParams();

    const [dataSKS, setDataSKS] = useState<SuratKerjaSama[]>([]);
    const [dataTipeSurat, setDataTipeSurat] = useState<TipeSurat[]>([]);

    const name = params.nama?.replace(/-/g, ' ').toUpperCase();

    const getTipeSurat = async () => {
        await axios
            // .get("/api/surat-kerja-sama")
            .get("/api/tipe-surat-by-id", {
                params: {id: params.id},
            })
            .then((response) => {
                setDataTipeSurat(response.data);
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    }

    const getAllSKS = async () => {
        await axios
            // .get("/api/surat-kerja-sama")
            .get("/api/surat-kerja-sama/tipe-surat", {
                params: {id: params.id},
            })
            .then((response) => {
                setDataSKS(response.data);
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    };


    console.log(dataSKS)
    useEffect(() => {
        getAllSKS();
        getTipeSurat();
    }, [])

    return (
        <CardContent title={name}
                     content={
                         <DataTable
                             columns={columns}
                             data={dataSKS}
                             customStyles={customStyle}
                             defaultSortAsc={false}
                             pagination
                             highlightOnHover
                         />
                     }/>
    );
};
export default suratKerjaSama
