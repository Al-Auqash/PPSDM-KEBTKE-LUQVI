import React, {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import DataTable from 'react-data-table-component';

import {columns} from "./dataTables";
import DataSuratKerjaSama from "./dataSuratKerjaSama";

const suratKerjaSama = () => {

    const params = useParams();

    const [dataSKS, setDataSKS] = useState([]);

    const getResult = async () => {
        await axios
            .get("/api/surat-kerja-sama", {params: {id: params.id}})
            .then((response: any) => {
                setDataSKS(response.data);
            })
            .catch((error: any) => {
                console.log(error);
            });
    };

    const getAllSKS = async () => {
        await axios
            .get("/api/surat-kerja-sama")
            .then((response: any) => {
                setDataSKS(response.data);
            })
            .catch((error: any) => {
                console.log(error);
            });
    };

    return (
        <div className="container">
            <div className="display-flex-col justify-content-center align-items-center w-100 h-100 p-4">
                <div className="card p-2 w-100">
                    <DataTable
                        columns={columns}
                        data={DataSuratKerjaSama(dataSKS)}
                    />
                </div>
            </div>
        </div>
    )
}
export default suratKerjaSama
