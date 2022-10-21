import axios from "axios";
import {useEffect, useState} from "react";

const PenerimaanTotal = () => {

    const [penerimaanTotal, setPenerimaanTotal] = useState();

    const getPenerimaanTotal = async () => {
        await axios
            // .get("/api/surat-kerja-sama")
            .get("/api/informasi-transaksi")
            .then((response) => {
                setPenerimaanTotal(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    };

    useEffect(() => {
        getPenerimaanTotal();
    })

    return (
        <div className="container py-4">
            <h2 className="text-center fw-bold text-decoration-underline">PENERIMAAN TOTAL</h2>
            <table className="table text-center">
                <thead>
                <tr>
                    <th>Tahun</th>
                    <th>Total Kontrak</th>
                    <th>Kontrak Terbayar</th>
                    <th>Piutang Kontrak</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PenerimaanTotal;
