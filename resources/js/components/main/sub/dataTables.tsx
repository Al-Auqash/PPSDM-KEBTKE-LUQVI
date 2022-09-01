export const columns = [
    {
        name: 'Nomor Surat',
        selector: (row: { nomor_surat: any; }) => row.nomor_surat,
        sortable: true,
    },
    {
        name: 'Nama Mitra',
        selector: (row: { nama_mitra: any; }) => row.nama_mitra,
        sortable: true,
    },
    {
        name: 'Judul KS',
        selector: (row: { judul_ks: any; }) => row.judul_ks,
        sortable: true,
    },
    {
        name: 'Aksi',
        selector: (row: { aksi: any; }) => row.aksi,
        sortable: true,
    },
];
