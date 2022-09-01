const data = (data) => {
    return (
        [
            data.map((data) => (
                {
                    nomor_surat: "data.nomor_surat",
                    nama_mitra: "data.nama_mitra",
                    judul_ks: "data.judul_ks",
                    aksi: <>
                        <a href="surat-kerja-sama/detail/${data.nomor_surat}">info</a>
                        <a href="surat-kerja-sama/edit/${data.nomor_surat}">Edit</a>
                        <a href="surat-kerja-sama/delete/${data.nomor_surat}">Delete</a>
                    </>
                }
            ))
        ]
    )
}

export default data;
