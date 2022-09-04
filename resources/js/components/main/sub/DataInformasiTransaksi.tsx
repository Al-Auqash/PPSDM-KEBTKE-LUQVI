import axios from "axios";

const getInformasiTransaksi = () => {
    axios.get('/api/informasi-transaksi')
}

export default [
    {
        id: 2,
        nama_mitra: "2",
        alamat: "2",
        koordinator: "2",
        kontak: "2",
    }
]
