import axios from "axios";
import {useEffect, useState} from "react";
import {PenerimaanTotalInterface} from "../../interface/Interface";

const PenerimaanTotal = () => {

    const [penerimaanTotal, setPenerimaanTotal] = useState<PenerimaanTotalInterface[]>([]);

    // get penerimaan total
    const getPenerimaanTotal = async () => {
        await axios
            // .get("/api/surat-kerja-sama")
            .get("/api/informasi-transaksi/penerimaan-total")
            .then((response) => {
                setPenerimaanTotal(response.data);
            })
            .catch((error) => {
                console.log(error);
                console.log("error")
            });
    };

    // get Grand Total
    const getGrandTotal = () => {
        var sum: number = 0;

        penerimaanTotal.map((data) => {
            const values = Object.values(data);
            sum = sum + values[1];
        })

        return sum;
    }

    useEffect(() => {
        getPenerimaanTotal();
    }, [])

    return (
        <div className="container py-4">
            <div className="card rounded-5 p-4">
                <h2 className="text-center fw-bold text-decoration-underline mb-4">PENERIMAAN TOTAL</h2>
                <table className="table table-striped text-center">
                    <thead>
                    <tr>
                        <th>Tahun</th>
                        <th>Total Kontrak</th>
                        <th>Kontrak Terbayar</th>
                        <th>Piutang Kontrak</th>
                    </tr>
                    </thead>
                    <tbody>
                    {penerimaanTotal?.map((data) => (
                        <tr>
                            <td>
                                {data.year}
                            </td>
                            <td>
                                {data.estimasi_penerimaan + data.realisasi_penerimaan}
                            </td>
                            <td>
                                {data.realisasi_penerimaan}
                            </td>
                            <td>
                                {/*@ts-ignore*/}
                                {data.estimasi_penerimaan - data.realisasi_penerimaan}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <h4 className="fw-bold">Grand Total : {getGrandTotal()}</h4>
            </div>
        </div>
    )
}

export default PenerimaanTotal;
