import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import DataTable from 'react-data-table-component';

import {columns} from "./dataTables";
import CardContent from "./CardContent";

const suratKerjaSama = () => {

    const params = useParams();

    const [dataSKS, setDataSKS] = useState<string[]>([]);

    const getAllSKS = async () => {
        await axios
            .get("/api/surat-kerja-sama")
            .then((response) => {
                setDataSKS(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    };
                console.log(dataSKS);

    useEffect(() => {
        getAllSKS();
    }, [])

    return (
        <CardContent title="Surat Kerja Sama"
                     content={<DataTable columns={columns}
                                         data={dataSKS}/>}/>
    );
};
export default suratKerjaSama
