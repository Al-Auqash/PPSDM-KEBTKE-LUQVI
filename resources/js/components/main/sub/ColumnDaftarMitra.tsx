export const columns = [
    {
        name: 'id',
        selector: (row: { id: number; }) => row.id,
        sortable: true,
    },
    {
        name: 'Nama Mitra',
        selector: (row: { nama_mitra: string; }) => row.nama_mitra,
        sortable: true,
    },
    {
        name: 'Alamat',
        selector: (row: { alamat: string; }) => row.alamat,
        sortable: true,
    },
    {
        name: 'Koordinator',
        selector: (row: { koordinator: string; }) => row.koordinator,
        sortable: true,
    },
    {
        name: 'Kontak',
        selector: (row: { kontak: string; }) => row.kontak,
        sortable: true,
    },
    {
        name: "Aksi",
        button: true,
        cell: (row: { id: number; }) => (
            <>
                <a className="mx-2 text-black" href={"/surat-kerja-sama/detail/" + row.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                        <path
                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                </a>
            </>
        )
    }
];
