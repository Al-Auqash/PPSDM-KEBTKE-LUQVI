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
