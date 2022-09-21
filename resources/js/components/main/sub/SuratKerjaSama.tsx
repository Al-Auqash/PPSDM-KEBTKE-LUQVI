import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import CardContent from "./CardContent";

import Table from "./../../Table/TableSuratKerjaSama";

import {SuratKerjaSama, TipeSurat} from "../../interface/Interface";

const suratKerjaSama = () => {

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

    useEffect(() => {
        getAllSKS();
        getTipeSurat();
    }, [])

    return (
        // <CardContent title={name}
        //              content={
        //                  <DataTable
        //                      columns={columns}
        //                      data={dataSKS}
        //                      customStyles={customStyle}
        //                      defaultSortAsc={false}
        //                      pagination
        //                      highlightOnHover
        //                  />
        //              }/>
        <CardContent title={name} content={<Table data={dataSKS} rowsPerPage={5}/>
        }/>
    );
};
export default suratKerjaSama
