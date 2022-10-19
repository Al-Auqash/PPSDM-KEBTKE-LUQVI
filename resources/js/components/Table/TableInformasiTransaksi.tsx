// @ts-nocheck
import React, {useState} from "react";
import useTable from "./../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Table = ({data, rowsPerPage}) => {

    const [page, setPage] = useState(1);
    const {slice, range} = useTable(data, page, rowsPerPage);

    return (
        <>
            <button type="button" className="btn float-end rounded d-flex flex-row background-green"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                     className="bi bi-funnel" viewBox="0 0 16 16">
                    <path
                        d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                </svg>
                <span className="fw-bold">Filter</span>
            </button>

            {/*Modal*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content background-green border-0">
                        <div className="modal-header">
                            <h5 className="modal-title fs-4 fw-bold" id="exampleModalLongTitle">Filter</h5>
                            <button type="button" className="close rounded-circle py-2 px-2" data-bs-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-x-lg" viewBox="0 0 16 16">
                                      <path
                                          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>

                                <div className="form-group py-2">
                                    <div className="row">
                                        <label className="control-label col-3 fs-5">Keyword</label>
                                        <label className="control-label col-auto">:</label>
                                        <div className="col-8">
                                            <input type="email" className="form-control" id="exampleInputEmail1"
                                                   aria-describedby="emailHelp"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-2">
                                    <div className="row">
                                        <label className="control-label col-3 fs-5">Domain</label>
                                        <label className="control-label col-auto">:</label>
                                        <div className="col-8">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios"
                                                       id="exampleRadios1" value="option1" checked/>
                                                <label className="form-check-label fs-5" htmlFor="exampleRadios1">
                                                    Dalam Negeri
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios"
                                                       id="exampleRadios2" value="option2"/>
                                                <label className="form-check-label fs-5" htmlFor="exampleRadios2">
                                                    Luar Negeri
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-2">
                                    <div className="row">
                                        <label className="control-label col-3 fs-5">Tahun</label>
                                        <label className="control-label col-auto">:</label>
                                        <div className="col-8">
                                            <input
                                                className="form-control w-100"
                                                type="date"
                                                name="tanggal_dimulai"
                                                id="tanggal_dimulai"
                                                autoComplete="false"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            {/*<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>*/}
                            <button type="button" className="btn btn-primary px-4 fw-bold">CARI</button>
                        </div>
                    </div>
                </div>
            </div>

            <table className={styles.table}>
                <thead className={styles.tableRowHeader}>
                <tr>
                    {/*<th className={styles.tableHeader}>id</th>*/}
                    <th className={styles.tableHeader}>Nama Perusahaan</th>
                    <th className={styles.tableHeader}>Tanggal Transaksi</th>
                    <th className={styles.tableHeader}>Jenis Layanan</th>
                    <th className={styles.tableHeader}>Jumlah Penerimaan</th>
                </tr>
                </thead>
                <tbody>
                {slice.length ? (slice.map((el) => (
                    <tr className={styles.tableRowItems} key={el.id}>
                        {/*<td className={styles.tableCell}>{el.id}</td>*/}
                        <td className={styles.tableCell}>{el.nama_mitra}</td>
                        <td className={styles.tableCell}>{el.tanggal_dimulai}</td>
                        <td className={styles.tableCell}>{el.tipe_surat}</td>
                        <td className={styles.tableCell}>{el.estimasi_penerimaan}</td>
                    </tr>
                ))) : (
                    <tr>
                        <td className={"text-center py-4 " + styles.tableCell} colSpan={4}>Data Not Found</td>
                    </tr>
                )}
                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page}/>


        </>
    );
};

export default Table;
