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
            <table className={styles.table}>
                <thead className={styles.tableRowHeader}>
                <tr>
                    <th className={styles.tableHeader}>ID</th>
                    <th className={styles.tableHeader}>Nama Mitra</th>
                    <th className={styles.tableHeader}>Alamat</th>
                    <th className={styles.tableHeader}>Koordinator</th>
                    <th className={styles.tableHeader}>Kontak</th>
                    <th className={styles.tableHeader}>Aksi</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((el) => (
                    <tr className={styles.tableRowItems} key={el.id}>
                        <td className={styles.tableCell}>{el.id}</td>
                        <td className={styles.tableCell}>{el.nama_mitra}</td>
                        <td className={styles.tableCell}>{el.alamat}</td>
                        <td className={styles.tableCell}>{el.koordinator}</td>
                        <td className={styles.tableCell}>{el.kontak}</td>
                        <td className={styles.tableCell}>
                            <div className="d-flex flex-row align-items-center justify-content-center">
                                <a className="mx-2 text-black" href={window.location.pathname + "/detail/" + el.id}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                        <path
                                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                    </svg>
                                </a>
                                <a className="mx-2 text-black" href={window.location.pathname + "/edit/" + el.id}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                    </svg>
                                </a>
                                <a className="mx-2 text-black" href=""
                                   data-bs-toggle="modal"
                                   data-bs-target="#myModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
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
                                                <a href={"/surat-kerja-sama/delete" + el.id} type="button"
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
                ))}
                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page}/>
        </>
    );
};

export default Table;