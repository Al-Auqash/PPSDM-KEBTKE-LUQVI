// @ts-nocheck
import React, { useState } from "react";
import useTable from "./../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import axios from "axios";

const Table = ({ data, rowsPerPage, handleChangeFilter, searchByFilter }) => {

    const [modalId, setModalId] = useState(null)
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);

    const deleteSuratKerjaSama = (params) => {
        axios
            .delete("/api/surat-kerja-sama", {
                params: { id: params },
            })
            .then(() => {
                window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const setStateModalId = (param) => {
        setModalId(param)
    }

    return (
        <>
            <button type="button" className="btn float-end rounded d-flex flex-row background-grey"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    className="bi bi-funnel" viewBox="0 0 16 16">
                    <path
                        d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
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
                                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <form onSubmit={searchByFilter}>
                            <div className="modal-body">

                                <div className="form-group py-2">
                                    <div className="row">
                                        <label className="control-label col-3 fs-5">Keyword</label>
                                        <label className="control-label col-auto">:</label>
                                        <div className="col-8">
                                            <input type="text" onChange={handleChangeFilter} className="form-control"
                                                name="keyword" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-2">
                                    <div className="row">
                                        <label className="control-label col-3 fs-5">Domain</label>
                                        <label className="control-label col-auto">:</label>
                                        <div className="col-8">
                                            <div className="form-check" onClick={handleChangeFilter}>
                                                <input className="form-check-input" type="radio" name="domain"
                                                    id="exampleRadios1" value="dalam_negeri" />
                                                <label className="form-check-label fs-5" htmlFor="exampleRadios1">
                                                    Dalam Negeri
                                                </label>
                                            </div>
                                            <div className="form-check" onClick={handleChangeFilter}>
                                                <input className="form-check-input" type="radio" name="domain"
                                                    id="exampleRadios2" value="luar_negeri" />
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
                                                name="year"
                                                id="tanggal_dimulai"
                                                autoComplete="false"
                                                onChange={handleChangeFilter}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                {/*<button type="button" className="btn btn-secondary px-4 fw-bold" data-bs-dismiss="modal">BATAL</button>*/}
                                <button type="submit" className="btn btn-primary px-4 fw-bold">CARI</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <table className={styles.table}>
                <thead className={styles.tableRowHeader}>
                    <tr>
                        {/*<th className={styles.tableHeader}>id</th>*/}
                        <th className={styles.tableHeader}>Nomor Surat</th>
                        <th className={styles.tableHeader}>Nama Mitra</th>
                        <th className={styles.tableHeader}>Judul KS</th>
                        <th className={styles.tableHeader}>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.length ? (slice.map((el) => (
                        <tr className={styles.tableRowItems} key={el.id}>
                            {/*<td className={styles.tableCell}>{el.id}</td>*/}
                            <td className={styles.tableCell}>{el.nomor_surat}</td>
                            <td className={styles.tableCell}>{el.nama_mitra}</td>
                            <td className={styles.tableCell}>{el.judul_ks}</td>
                            <td className={styles.tableCell}>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <a className="mx-2 text-black" href={window.location.pathname + "/detail/" + el.id}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                            <path
                                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                        </svg>
                                    </a>
                                    <a className="mx-2 text-black" href={window.location.pathname + "/edit/" + el.id}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                    </a>
                                    <a className="mx-2 text-black" href="" onClick={() => setStateModalId(el.id)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#myModal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </a>
                                    <div className="modal" tabIndex={-1} id="myModal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h3 className="modal-title">Peringatan</h3>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <p className="fs-6">Anda yakin ingin menghapus data ini?</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Batal
                                                    </button>
                                                    <a href="#" onClick={() => deleteSuratKerjaSama(modalId)}
                                                        className="btn btn-danger">
                                                        Hapus
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))) : (
                        <tr>
                            <td className={"text-center py-4 " + styles.tableCell} colSpan={4}>Data Not Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />


        </>
    );
};

export default Table;
